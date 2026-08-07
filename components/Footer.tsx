import Link from "next/link";
import { footer, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-condensed text-xl font-bold tracking-[0.18em] text-paper">
              {site.name.toUpperCase()}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
              {footer.note}
            </p>
          </div>

          <div>
            <p className="eyebrow text-paper/60">{footer.legalLabel}</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href={footer.datenschutz}
                  className="text-sm text-paper/70 transition-colors hover:text-paper hover:underline"
                >
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link
                  href={footer.impressum}
                  className="text-sm text-paper/70 transition-colors hover:text-paper hover:underline"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-paper/60">{footer.contactLabel}</p>
            <p className="mt-4 font-mono text-sm text-paper/70">
              {footer.contactEmail}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-baseline justify-between gap-3 border-t border-white/10 pt-6">
          <p className="text-xs text-paper/60">{footer.copyright}</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/60">
            Ende · Seite 01
          </p>
        </div>
      </div>
    </footer>
  );
}
