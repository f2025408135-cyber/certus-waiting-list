import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
      <p className="text-sm">
        <Link href="/" className="font-medium text-accent hover:underline">
          ← Zurück zur Startseite
        </Link>
      </p>

      <h1 className="mt-8 font-condensed text-3xl font-bold tracking-tight text-ink">
        Datenschutzerklärung
      </h1>

      <section className="mt-10">
        <h2 className="font-condensed text-xl font-bold text-ink">
          Verantwortlicher
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und
          des österreichischen Datenschutzgesetzes (DSG) ist:
        </p>
        <dl className="mt-4 space-y-2 text-sm leading-relaxed">
          <div>
            <dt className="font-medium text-ink">Name</dt>
            <dd className="mt-0.5 font-mono text-ink-2">
              [Name des/der Verantwortlichen – einzutragen]
            </dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Firmenname</dt>
            <dd className="mt-0.5 font-mono text-ink-2">
              [Firmenname – einzutragen]
            </dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Adresse</dt>
            <dd className="mt-0.5 font-mono text-ink-2">
              [Adresse – einzutragen]
            </dd>
          </div>
          <div>
            <dt className="font-medium text-ink">E-Mail</dt>
            <dd className="mt-0.5 font-mono text-ink-2">
              [E-Mail – einzutragen]
            </dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Telefon</dt>
            <dd className="mt-0.5 font-mono text-ink-2">
              [Telefon – einzutragen]
            </dd>
          </div>
        </dl>
        <div className="mt-6 rounded-md border border-rule bg-warn-bg px-5 py-4">
          <p className="text-sm font-semibold text-ink">
            Hinweis für die Gründer:innen
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-2">
            Diese Datenschutzerklärung ist inhaltlich fertig. Vor dem Go-Live
            müssen die oben genannten Kontaktfelder im Abschnitt
            „Verantwortlicher“ ausgefüllt und das Datum im Abschnitt „Stand der
            Erklärung“ eingetragen werden.
          </p>
        </div>
      </section>

      <section className="mt-10 border-t border-rule pt-8">
        <h2 className="font-condensed text-xl font-bold text-ink">
          Überblick – welche Daten wir verarbeiten
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          Certus ist ein österreichisches Start-up, das Bauleistungen über
          Leistungsverzeichnisse (LV/.ONLV) bepreist. Unser Angebot befindet
          sich derzeit in Vorbereitung (Pre-Launch). Auf dieser Website können
          Sie sich in unsere Warteliste eintragen. Im Rahmen der Anmeldung
          verarbeiten wir die folgenden Angaben:
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink-2">
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Unternehmen</li>
          <li>Rolle (freiwillige Angabe)</li>
          <li>Unternehmensgröße (freiwillige Angabe)</li>
          <li>eingesetzte AVA-Software (freiwillige Angabe)</li>
          <li>
            größte Herausforderung beim Kalkulieren (freiwillige Angabe,
            Freitext)
          </li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-ink-2">
          Zusätzlich wird der Zeitpunkt Ihrer Einwilligung (Timestamp)
          gespeichert, um die Einwilligung nachweisen zu können. Darüber hinaus
          verarbeiten wir keine weiteren Daten. Insbesondere speichern wir{" "}
          <strong className="font-medium text-ink">
            keine IP-Adressen
          </strong>
          , setzen{" "}
          <strong className="font-medium text-ink">keine Cookies</strong> und
          setzen{" "}
          <strong className="font-medium text-ink">
            keine Tracking- oder Analysetools
          </strong>{" "}
          ein.
        </p>
      </section>

      <section className="mt-10 border-t border-rule pt-8">
        <h2 className="font-condensed text-xl font-bold text-ink">
          Zweck und Rechtsgrundlage der Verarbeitung
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          Wir verarbeiten Ihre Daten ausschließlich zum Zweck der Verwaltung der
          Warteliste und um Sie per E-Mail über den frühen Zugang zu Certus
          (Early Access) sowie den Start unseres Angebots zu informieren.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          Rechtsgrundlage der Verarbeitung ist Ihre Einwilligung gemäß Art. 6
          Abs. 1 lit. a DSGVO. Sie wird durch aktives Anklicken des
          Zustimmungsfelds im Anmeldeformular erteilt:
        </p>
        <blockquote className="mt-4 border-l-2 border-accent pl-4 text-sm italic leading-relaxed text-ink">
          „Ich willige ein, dass meine Angaben gespeichert und ich per E-Mail
          kontaktiert werde.“
        </blockquote>
        <p className="mt-4 text-sm leading-relaxed text-ink-2">
          Die Einwilligung ist freiwillig. Ohne Ihre Einwilligung ist eine
          Eintragung in die Warteliste nicht möglich; Sie können Certus dann
          aber weiterhin über diese Website kennenlernen.
        </p>
      </section>

      <section className="mt-10 border-t border-rule pt-8">
        <h2 className="font-condensed text-xl font-bold text-ink">
          Speicherdauer
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          Wir speichern Ihre Daten, solange die Warteliste aktiv ist, längstens
          jedoch bis zu 24 Monate nach dem Ende der Warteliste, es sei denn, Sie
          widerrufen Ihre Einwilligung früher. Beim Widerruf Ihrer Einwilligung
          oder auf Ihre Löschungsanfrage hin werden Ihre Daten unverzüglich
          gelöscht.
        </p>
      </section>

      <section className="mt-10 border-t border-rule pt-8">
        <h2 className="font-condensed text-xl font-bold text-ink">
          Weitergabe an Dritte
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, soweit dies für den
          Betrieb dieser Website erforderlich ist. Ihre Daten werden in einer
          Datenbank innerhalb der Europäischen Union (EU) gespeichert; dabei
          können Dienstleister für Hosting und Datenbank in der EU als
          Auftragsverarbeiter eingesetzt werden (z. B. Vercel oder Neon). Die
          Verarbeitung erfolgt auf Grundlage von Auftragsverarbeitungsverträgen
          gemäß Art. 28 DSGVO. Eine Übermittlung in Länder außerhalb der
          EU/des EWR findet nicht statt. Im Übrigen geben wir Ihre Daten nicht
          weiter, verkaufen sie nicht und nutzen keine Werbenetzwerke.
        </p>
      </section>

      <section className="mt-10 border-t border-rule pt-8">
        <h2 className="font-condensed text-xl font-bold text-ink">
          Ihre Rechte
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          Ihnen stehen im Zusammenhang mit der Verarbeitung Ihrer
          personenbezogenen Daten folgende Rechte zu:
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink-2">
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-ink-2">
          Sie haben überdies das Recht auf Beschwerde bei der österreichischen
          Datenschutzbehörde: Österreichische Datenschutzbehörde,
          Barichgasse 40–42, 1030 Wien,{" "}
          <a
            href="https://www.dsb.gv.at"
            className="font-medium text-accent hover:underline"
          >
            www.dsb.gv.at
          </a>
          .
        </p>
      </section>

      <section className="mt-10 border-t border-rule pt-8">
        <h2 className="font-condensed text-xl font-bold text-ink">
          Widerruf der Einwilligung
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
          widerrufen. Richten Sie Ihren Widerruf formlos per E-Mail an{" "}
          <span className="font-mono text-ink-2">[E-Mail – einzutragen]</span>.
          Es genügt eine einfache E-Mail mit dem Hinweis, dass Sie Ihre
          Einwilligung widerrufen möchten – wir löschen Ihre Registrierung in
          der Folge unverzüglich. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Verarbeitung bleibt davon unberührt.
        </p>
      </section>

      <section className="mt-10 border-t border-rule pt-8">
        <h2 className="font-condensed text-xl font-bold text-ink">
          Datensicherheit
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          Wir treffen geeignete technische und organisatorische Maßnahmen gemäß
          Art. 32 DSGVO. Die Übertragung dieser Website erfolgt
          SSL-/TLS-verschlüsselt (HTTPS). Der Zugriff auf die Datenbank und die
          Verwaltung ist auf jene Personen beschränkt, die ihn zur Erfüllung
          der oben genannten Zwecke benötigen, und erfolgt über geschützte
          Zugangsdaten.
        </p>
      </section>

      <section className="mt-10 border-t border-rule pt-8">
        <h2 className="font-condensed text-xl font-bold text-ink">
          Stand der Erklärung
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          Stand: <span className="font-mono text-ink-2">[Datum – einzutragen]</span>
        </p>
      </section>
    </main>
  );
}
