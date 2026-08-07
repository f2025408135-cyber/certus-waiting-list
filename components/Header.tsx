import Link from "next/link";
import { site } from "@/lib/content";

const navLinks = [
  { href: "#so-funktionierts", label: "So funktioniert's" },
  { href: "#unterschied", label: "Der Unterschied" },
  { href: "#warteliste", label: "Warteliste" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-surface">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span aria-hidden="true" className="h-2 w-2 bg-accent" />
          <span className="font-condensed text-lg font-bold tracking-[0.18em] text-ink">
            {site.name.toUpperCase()}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
            · Warteliste
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-2 transition-colors hover:text-ink hover:underline"
            >
              {link.label}
            </Link>
          ))}
          <span aria-hidden="true" className="h-4 w-px bg-rule" />
          <Link
            href="/datenschutz"
            className="text-sm text-ink-2 transition-colors hover:text-ink hover:underline"
          >
            Datenschutz
          </Link>
          <Link
            href="/impressum"
            className="text-sm text-ink-2 transition-colors hover:text-ink hover:underline"
          >
            Impressum
          </Link>
        </nav>
      </div>
    </header>
  );
}
