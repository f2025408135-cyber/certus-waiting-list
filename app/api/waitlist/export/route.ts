import { timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";
import { sql, type WaitlistRow } from "@/lib/db";
import { CSV_BOM, toCsv } from "@/lib/csv";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Constant-time comparison for equal-length inputs (crypto.timingSafeEqual).
function secretEquals(a: string, b: string): boolean {
  const aBuf = Buffer.from(a, "utf8");
  const bBuf = Buffer.from(b, "utf8");
  if (aBuf.length !== bBuf.length) return false;
  return timingSafeEqual(aBuf, bBuf);
}

export async function GET(request: NextRequest) {
  const secret = process.env.WAITLIST_ADMIN_SECRET;

  // Unset secret -> 503 so nobody locks themselves out silently.
  if (!secret) {
    console.error("[api/waitlist/export] GET abgelehnt: WAITLIST_ADMIN_SECRET ist nicht konfiguriert.");
    return Response.json({ error: "Nicht konfiguriert." }, { status: 503 });
  }

  // Accept `Authorization: Bearer <secret>` OR `x-admin-secret: <secret>`.
  const auth = request.headers.get("authorization") ?? "";
  const bearer = auth.startsWith("Bearer ") ? auth.slice("Bearer ".length) : "";
  const provided = bearer || (request.headers.get("x-admin-secret") ?? "");

  if (!provided || !secretEquals(provided, secret)) {
    return Response.json({ error: "Nicht autorisiert." }, { status: 401 });
  }

  let rows: WaitlistRow[];
  try {
    const db = sql();
    // porsager returns BIGSERIAL/int8 as string; normalize id to number here.
    rows = (
      (await db`SELECT * FROM waitlist ORDER BY created_at DESC`) as unknown as WaitlistRow[]
    ).map((row) => ({ ...row, id: Number(row.id) }));
  } catch (error) {
    console.error("[api/waitlist/export] DB-Fehler beim Export:", error);
    return Response.json({ error: "Export fehlgeschlagen." }, { status: 500 });
  }

  const csv = CSV_BOM + toCsv(rows);
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="certus-waitlist.csv"',
    },
  });
}
