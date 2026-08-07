import { createHash } from "node:crypto";
import type { NextRequest } from "next/server";
import { ensureSchema, sql } from "@/lib/db";
import { normalizeEmail, waitlistSchema } from "@/lib/validation";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// SHA-256 hash of the client IP (x-forwarded-for first value, fallback
// x-real-ip, fallback "unknown"). The raw IP is never stored or logged.
function clientIpHash(request: NextRequest): string {
  const xff = request.headers.get("x-forwarded-for");
  const raw =
    (xff ? xff.split(",")[0]?.trim() : undefined) ||
    request.headers.get("x-real-ip")?.trim() ||
    "unknown";
  return createHash("sha256").update(raw).digest("hex");
}

export async function POST(request: NextRequest) {
  // 1. Config guard: fail loudly before any DB interaction.
  if (!process.env.DATABASE_URL) {
    console.error("[api/waitlist] POST abgelehnt: DATABASE_URL ist nicht konfiguriert.");
    return Response.json({ error: "Server nicht konfiguriert." }, { status: 500 });
  }

  // 2. Rate limit by hashed IP.
  const limit = rateLimit(clientIpHash(request));
  if (!limit.allowed) {
    return Response.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil(limit.retryAfterMs / 1000)) },
      }
    );
  }

  // 3+4. Parse JSON (also needed for the honeypot check). Do NOT log the payload.
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const record = body as Record<string, unknown>;

  // Honeypot: hidden field `firma_webseite` that the real form keeps empty.
  // If a bot filled it in, silently discard WITHOUT storing anything.
  const honeypot = record.firma_webseite;
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return Response.json({ ok: true });
  }
  // Strip the empty honeypot field so .strict() doesn't reject real form
  // submissions that include it as "".
  delete record.firma_webseite;

  // Validate.
  const parsed = waitlistSchema.safeParse(record);
  if (!parsed.success) {
    const details: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path.length > 0 ? String(issue.path[0]) : "form";
      // Missing/false consent must surface as details.consent.
      details[field] = field === "consent" ? "consent_required" : issue.message;
    }
    return Response.json({ error: "Ungültige Anfrage.", details }, { status: 400 });
  }

  const data = parsed.data;

  // 5. Upsert (dedupe by normalized email). consent_given is always true
  // because the schema enforces consent === true.
  try {
    await ensureSchema();
    const db = sql();
    await db`
      INSERT INTO waitlist (name, email, company, role, company_size, ava_tool, pain, consent_given, consent_at, updated_at)
      VALUES (${data.name}, ${normalizeEmail(data.email)}, ${data.company}, ${data.role ?? null}, ${data.companySize ?? null}, ${data.avaTool ?? null}, ${data.pain ?? null}, true, now(), now())
      ON CONFLICT (email) DO UPDATE SET
        name = EXCLUDED.name,
        company = EXCLUDED.company,
        role = EXCLUDED.role,
        company_size = EXCLUDED.company_size,
        ava_tool = EXCLUDED.ava_tool,
        pain = EXCLUDED.pain,
        consent_given = EXCLUDED.consent_given,
        consent_at = EXCLUDED.consent_at,
        updated_at = now()
    `;
  } catch (error) {
    // Never leak DB internals to the client.
    console.error("[api/waitlist] DB-Fehler beim Speichern:", error);
    return Response.json(
      { error: "Speichern fehlgeschlagen. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
