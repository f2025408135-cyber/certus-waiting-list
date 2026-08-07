-- ============================================================================
-- Certus Warteliste / Certus Waitlist
-- ----------------------------------------------------------------------------
-- Zweck / Purpose:
--   Speichert Wartelisten-Anmeldungen des Landing-Formulars.
--   Stores waitlist signups from the landing page form.
--
-- Wichtige Punkte / Key points:
--   - email ist UNIQUE fuer die Deduplizierung: Eine erneute Anmeldung mit
--     derselben E-Mail aktualisiert den vorhandenen Eintrag (Upsert via
--     ON CONFLICT im Anwendungscode).
--     (email is UNIQUE for dedupe: a repeat signup with the same email
--     updates the existing row via an ON CONFLICT upsert in the app code.)
--   - email wird im Anwendungscode auf Lowercase normalisiert (app code
--     normalizes email to lowercase before storing).
--   - Es werden KEINE IP-Adressen gespeichert (Datenminimierung, DSGVO).
--     (No IP addresses are stored — data minimization, GDPR.)
--   - consent_given + consent_at dokumentieren die Einwilligung des Users.
--     (consent_given + consent_at record the user's consent.)
--
-- Portabel / portable: GRANT-frei, keine Extension (kein citext). Kann
-- einmalig mit psql oder ueber ein DB-Dashboard ausgefuehrt werden.
-- (Grant-free portable DDL. Run once with psql or a DB dashboard.)
-- ============================================================================

CREATE TABLE IF NOT EXISTS waitlist (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,          -- normalized to lowercase in app code
  company TEXT NOT NULL,
  role TEXT,
  company_size TEXT,
  ava_tool TEXT,
  pain TEXT,
  consent_given BOOLEAN NOT NULL,
  consent_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
