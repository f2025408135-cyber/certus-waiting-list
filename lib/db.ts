import postgres from "postgres";

export type WaitlistRow = {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  email: string;
  company: string;
  role: string | null;
  company_size: string | null;
  ava_tool: string | null;
  pain: string | null;
  consent_given: boolean;
  consent_at: Date;
};

// Mirrors sql/schema.sql. Idempotent; executed lazily by ensureSchema()
// so the API self-heals if the table is missing. No GRANTs, no extensions.
const CREATE_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS waitlist (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  company TEXT NOT NULL,
  role TEXT,
  company_size TEXT,
  ava_tool TEXT,
  pain TEXT,
  consent_given BOOLEAN NOT NULL,
  consent_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
`;

// Cache the client on globalThis (instead of plain module scope) so Next.js
// hot reloads reuse the same pool and don't exhaust connections in dev.
const g = globalThis as unknown as {
  __certusWaitlistSql?: postgres.Sql;
  __certusWaitlistSchemaPromise?: Promise<unknown>;
};

function createClient(): postgres.Sql {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL ist nicht konfiguriert (siehe .env.local / .env.example). DATABASE_URL is not configured (see .env.local / .env.example)."
    );
  }
  // SSL: "require" for Neon/Supabase/Vercel Postgres, off for local docker.
  return postgres(url, {
    ssl: process.env.DATABASE_SSL === "require" ? "require" : false,
    max: 10,
  });
}

// Lazy singleton. Calling `sql()` creates the client on first use and throws
// a descriptive error at call time if DATABASE_URL is missing.
export function sql(): postgres.Sql {
  g.__certusWaitlistSql ??= createClient();
  return g.__certusWaitlistSql;
}

// Memoized promise: runs CREATE TABLE IF NOT EXISTS once per process. On
// failure the memo is reset so a later call retries (self-healing).
export function ensureSchema(): Promise<unknown> {
  if (!g.__certusWaitlistSchemaPromise) {
    const p = sql()
      .unsafe(CREATE_TABLE_SQL)
      .catch((err: unknown) => {
        g.__certusWaitlistSchemaPromise = undefined;
        throw err;
      });
    g.__certusWaitlistSchemaPromise = p;
  }
  return g.__certusWaitlistSchemaPromise;
}
