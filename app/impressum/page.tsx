import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
      <p className="text-sm">
        <Link href="/" className="font-medium text-accent hover:underline">
          ← Zurück zur Startseite
        </Link>
      </p>

      <h1 className="mt-8 font-condensed text-3xl font-bold tracking-tight text-ink">
        Impressum
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-ink-2">
        Informationen gemäß § 5 ECG (E-Commerce-Gesetz) und § 24 MedienG
        (Mediengesetz)
      </p>

      <div className="mt-8 rounded-md border border-rule bg-warn-bg px-5 py-4">
        <p className="text-sm font-semibold text-ink">
          Hinweis für die Gründer:innen
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-2">
          Dieses Impressum ist eine Vorlage und muss vor dem Go-Live
          vervollständigt werden. Alle mit „einzutragen“ gekennzeichneten Felder
          sind auszufüllen; nicht zutreffende Angaben (z. B. Aufsichtsbehörde)
          sind zu entfernen.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="font-condensed text-xl font-bold text-ink">
          Unternehmensangaben
        </h2>
        <dl className="mt-4 space-y-3 text-sm leading-relaxed">
          <div>
            <dt className="font-medium text-ink">Firma</dt>
            <dd className="mt-0.5 font-mono text-ink-2">
              [Firmenname – einzutragen]
            </dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Inhaber/Geschäftsführung</dt>
            <dd className="mt-0.5 font-mono text-ink-2">
              [Name – einzutragen]
            </dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Adresse</dt>
            <dd className="mt-0.5 font-mono text-ink-2">
              [Adresse – einzutragen]
            </dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Kontakt</dt>
            <dd className="mt-0.5 font-mono text-ink-2">
              E-Mail: [E-Mail – einzutragen]
            </dd>
            <dd className="mt-0.5 font-mono text-ink-2">
              Telefon: [Telefon – einzutragen]
            </dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Unternehmensgegenstand</dt>
            <dd className="mt-0.5 text-ink-2">
              Entwicklung und Betrieb von Software für die Kalkulation von
              Bauleistungen und die Verarbeitung von Leistungsverzeichnissen
              (AVA, LV/.ONLV) für Baumeister und Generalunternehmer.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-ink">UID-Nummer</dt>
            <dd className="mt-0.5 font-mono text-ink-2">
              [UID – einzutragen]
            </dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Firmenbuchnummer / Gerichtsstand</dt>
            <dd className="mt-0.5 font-mono text-ink-2">
              [Firmenbuchnummer – einzutragen]
            </dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Aufsichtsbehörde (falls zutreffend)</dt>
            <dd className="mt-0.5 font-mono text-ink-2">[– einzutragen]</dd>
          </div>
          <div>
            <dt className="font-medium text-ink">
              Verantwortlich für den Inhalt
            </dt>
            <dd className="mt-0.5 font-mono text-ink-2">
              [Name – einzutragen]
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-10 border-t border-rule pt-8">
        <h2 className="font-condensed text-xl font-bold text-ink">
          Haftungshinweis
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          Die Inhalte dieser Website werden mit größter Sorgfalt erstellt. Für
          Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir
          jedoch keine Gewähr. Die Nutzung der Inhalte erfolgt auf eigene
          Gefahr. Externe Links werden vor Veröffentlichung sorgfältig geprüft;
          für die Inhalte verlinkter Seiten sind ausschließlich deren Betreiber
          verantwortlich.
        </p>
      </section>

      <section className="mt-10 border-t border-rule pt-8">
        <h2 className="font-condensed text-xl font-bold text-ink">
          Urheberrechtshinweis
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen
          dem österreichischen Urheberrecht. Jede Vervielfältigung, Bearbeitung,
          Verbreitung oder sonstige Verwertung außerhalb der Grenzen des
          Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der
          jeweiligen Rechteinhaberin bzw. des jeweiligen Rechteinhabers.
        </p>
      </section>
    </main>
  );
}
