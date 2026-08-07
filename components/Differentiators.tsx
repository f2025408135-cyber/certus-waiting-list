import { differentiators } from "@/lib/content";

export default function Differentiators() {
  return (
    <section id="unterschied" className="scroll-mt-20 border-b border-rule">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-ink-2">{differentiators.eyebrow}</p>
          <h2 className="mt-3 font-condensed text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {differentiators.title}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-2">{differentiators.intro}</p>
        </div>

        {/* Ruled document rows. Each "So läuft es heute" line is struck
            through like a corrected price in a tender — the old way is
            replaced, not annotated with an alert. */}
        <div className="mt-12 max-w-3xl">
          {differentiators.items.map((item) => (
            <article key={item.title} className="border-t border-rule py-8">
              <h3 className="font-condensed text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-2">
                {item.text}
              </p>
              <p className="mt-3 flex max-w-2xl items-baseline gap-3">
                <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
                  Heute
                </span>
                <span className="text-sm leading-relaxed text-ink-3 line-through decoration-ink-3/40">
                  {item.statusQuo}
                </span>
              </p>
            </article>
          ))}
          <div aria-hidden="true" className="border-t border-rule" />
        </div>
      </div>
    </section>
  );
}
