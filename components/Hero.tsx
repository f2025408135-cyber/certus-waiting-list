import { hero } from "@/lib/content";

const [headline, subline] = hero.title.split(" | ");

export default function Hero() {
  return (
    <section className="border-b border-rule">
      {/* Document metadata strip — the page presents itself as a tender document. */}
      <div className="border-b border-rule">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-baseline gap-x-6 gap-y-1 px-6 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3">
          <span>Warteliste · Frühzugang</span>
          <span>ÖNORM A 2063</span>
          <span className="ml-auto hidden sm:inline">Stand: 08/2026</span>
          <span>Seite 01</span>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-5xl gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_400px] lg:items-center lg:gap-16 lg:py-24">
        <div>
          {/* Document tag, not a SaaS pill. */}
          <p className="inline-flex items-center border border-rule bg-surface px-2.5 py-1 font-mono text-xs uppercase tracking-[0.1em] text-accent">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 font-condensed text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.01em] text-ink">
            {headline}
            <span className="block text-ink-2">{subline}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-2">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#warteliste"
              className="inline-flex items-center justify-center rounded-sm bg-accent px-7 py-3.5 font-medium text-white transition-colors hover:bg-accent/90"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#so-funktionierts"
              className="inline-flex items-center justify-center rounded-sm border border-rule bg-surface px-7 py-3.5 font-medium text-ink transition-colors hover:border-ink-3"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div aria-hidden="true" className="hidden lg:block">
          <PreisspiegelSheet />
        </div>
      </div>
    </section>
  );
}

/**
 * The subject's own artifact: a Preisspiegel (positions × suppliers).
 * Pure CSS/HTML, decorative (aria-hidden). The sheet's lines rise in
 * on load; the "ENTWURF" stamp lands last — the page is a draft
 * tender document, and that is the honest pre-launch signal.
 */
function PreisspiegelSheet() {
  const rows = [
    {
      code: "Z01.02.03.04",
      label: "Baumeisterarbeiten",
      prices: ["1.234,56 €", "1.198,00 €", "1.301,20 €"],
      cheapest: 1,
    },
    {
      code: "Z01.02.03.05",
      label: "Betonarbeiten",
      prices: ["8.912,00 €", "9.045,10 €", "8.780,00 €"],
      cheapest: 2,
    },
    {
      code: "Z01.02.03.06",
      label: "Abbrucharbeiten",
      prices: ["3.402,80 €", "3.580,00 €", "—"],
      cheapest: 0,
    },
  ] as const;

  return (
    <div
      className="rise relative border border-rule bg-surface"
      style={{ animationDelay: "120ms" }}
    >
      {/* Sheet header — its own metadata line. */}
      <div className="flex items-center justify-between border-b border-rule px-4 py-3">
        <span className="font-mono text-sm font-medium text-ink">.ONLV</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3">
          ÖNORM A 2063
        </span>
      </div>

      <div className="px-4 py-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
          Preisspiegel · 3 Lieferanten
        </p>

        <table className="mt-3 w-full border-collapse font-mono text-[11px] leading-snug">
          <thead>
            <tr className="border-b border-rule text-ink-3">
              <th scope="col" className="pb-2 text-left font-normal uppercase tracking-[0.08em]">
                Position
              </th>
              {["A", "B", "C"].map((s) => (
                <th
                  key={s}
                  scope="col"
                  className="pb-2 text-right font-normal uppercase tracking-[0.08em]"
                >
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.code} className="border-b border-rule/60">
                <td className="py-2 whitespace-nowrap text-ink-2">
                  <span className="tabular">{row.code}</span>
                  <span className="ml-2 hidden text-ink-3 md:inline">{row.label}</span>
                </td>
                {row.prices.map((price, idx) => (
                  <td
                    key={idx}
                    className={`tabular py-2 text-right ${
                      idx === row.cheapest ? "font-medium text-ok" : "text-ink-2"
                    }`}
                  >
                    {price}
                  </td>
                ))}
              </tr>
            ))}
            {/* A KO position — the disqualification risk Certus removes. */}
            <tr>
              <td className="py-2 whitespace-nowrap text-ink-2">
                <span className="tabular">Z01.02.03.07</span>
              </td>
              <td className="py-2 text-right text-ink-3">—</td>
              <td className="py-2 text-right text-ink-3">—</td>
              <td className="py-2 text-right font-medium text-ko">
                <span className="tabular">8.400,00 €</span>{" "}
                <span className="bg-ko-bg px-1 uppercase tracking-[0.08em]">KO</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4 flex items-baseline justify-between border-t border-rule pt-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
            Gesamt
          </span>
          <span className="tabular font-mono text-2xl text-ink">32.105,80 €</span>
        </div>
        <p className="mt-3 inline-flex items-center border border-ok bg-ok-bg px-2 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ok">
          OK · ÖNORM-geprüft
        </p>
      </div>

      {/* The draft stamp — honest: this page is a pre-launch draft. */}
      <span
        className="stamp stamp--rotate fade-in absolute right-3 top-16 text-sm text-ink-2"
        style={{ animationDelay: "520ms" }}
      >
        Entwurf
      </span>
    </div>
  );
}
