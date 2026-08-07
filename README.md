# Certus — Warteliste (Waitlist)

Deutsche (de-AT) Wartelisten-Landingpage für **Certus** — das Tool, das österreichische
Leistungsverzeichnisse (LV/.ONLV) für Baumeister und Generalunternehmer bepreist und ein
compliance-geprüftes, bepreistes .ONLV zurück in ABK/NEVARIS liefert.

Dieses Repo enthält **nur die Wartelisten-Website** (kein Certus-Produktcode). Deployt auf **Netlify**.

## Stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- `postgres` (porsager) als Postgres-Client, `zod` für Validierung
- Fira Sans / Fira Sans Condensed / Fira Mono (self-hosted via `@fontsource`)

## Lokal entwickeln

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Produktionsserver (nach build)
```

### Umgebung

`.env.example` → `.env.local` kopieren und befüllen:

- `DATABASE_URL` — Postgres-Connection-String (Vercel Postgres / Supabase / Neon; die URL enthält
  User und Passwort vor dem `@`, z. B. lokal per Docker: `postgresql://localhost:5433/certus_waitlist`)
- `WAITLIST_ADMIN_SECRET` — langer Zufallswert, schützt den CSV-Export
- `DATABASE_SSL=require` für Neon/Supabase (leer lassen für lokales Docker)

`.env.local` wird nicht eingecheckt. **Keine Secrets committen** — alle Werte gehören in die
Netlify-Environment-Variablen (siehe unten).

### Datenbank-Schema

Einmalig gegen die Ziel-DB ausführen (psql oder DB-Dashboard):

```bash
psql "$DATABASE_URL" -f sql/schema.sql
```

Die App führt denselben `CREATE TABLE IF NOT EXISTS` auch automatisch aus (`ensureSchema()`),
das File dient als Absicherung. Tabelle `waitlist`: `id, created_at, updated_at, name, email
(UNIQUE, dedupliziert per Upsert), company, role, company_size, ava_tool, pain, consent_given,
consent_at`. Es werden **keine IP-Adressen** gespeichert (DSGVO-Datenminimierung).

## API

| Methode | Route                  | Beschreibung                                |
| ------- | ---------------------- | ------------------------------------------- |
| `POST`  | `/api/waitlist`        | Wartelisten-Anmeldung (Upsert per E-Mail).  |
| `GET`   | `/api/waitlist/export` | CSV-Export (Admin, Secret-Header).          |

Wartelisten-Einträge herunterladen:

```bash
curl -H "x-admin-secret: <WAITLIST_ADMIN_SECRET>" https://<site>/api/waitlist/export -o waitlist.csv
```

(Semikolon-getrennt, UTF-8 mit BOM → Excel de-AT. Alternativ `Authorization: Bearer <secret>`.)

## Netlify

`netlify.toml` konfiguriert Build (`npm run build`, Publish-Dir `.next`) und das
`@netlify/plugin-nextjs`-Plugin. Beim Import in Netlify (GitHub → dieses Repo):

1. Repo importieren → Framework wird als Next.js erkannt.
2. **Environment Variables** setzen (Production): `DATABASE_URL`, `DATABASE_SSL=require`,
   `WAITLIST_ADMIN_SECRET` (langer Zufallswert, z. B. `openssl rand -hex 32`).
3. `sql/schema.sql` einmalig gegen die Ziel-DB ausführen.
4. Deployen.

## DSGVO

Kein Tracking, keine Cookies, keine IP-Speicherung. Einwilligung (Opt-in-Checkbox) ist Pflicht und
wird mit Zeitstempel gespeichert. Löschung auf Anfrage über die in der Datenschutzerklärung
angegebene Kontakt-E-Mail.
