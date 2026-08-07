import type { WaitlistRow } from "./db";

// UTF-8 BOM so Excel renders umlauts (de-AT) correctly.
export const CSV_BOM = "\uFEFF";

// Semicolon-separated header (de-AT Excel default).
const HEADERS = [
  "id",
  "created_at",
  "name",
  "email",
  "company",
  "role",
  "company_size",
  "ava_tool",
  "pain",
  "consent_given",
  "consent_at",
] as const;

function cell(value: unknown): string {
  // nulls become empty, everything else is quoted with " and internal quotes doubled.
  if (value === null || value === undefined) return '""';
  const text = value instanceof Date ? value.toISOString() : String(value);
  return '"' + text.replace(/"/g, '""') + '"';
}

// Semicolon-separated CSV: all fields quoted, CRLF line endings,
// ISO-8601 UTC timestamps, booleans as true/false, nulls as empty.
export function toCsv(rows: WaitlistRow[]): string {
  const lines: string[] = [HEADERS.map((h) => cell(h)).join(";")];
  for (const row of rows) {
    lines.push(
      [
        row.id,
        row.created_at,
        row.name,
        row.email,
        row.company,
        row.role,
        row.company_size,
        row.ava_tool,
        row.pain,
        row.consent_given,
        row.consent_at,
      ]
        .map(cell)
        .join(";")
    );
  }
  return lines.join("\r\n") + "\r\n";
}
