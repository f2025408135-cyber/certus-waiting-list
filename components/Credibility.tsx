import { credibility } from "@/lib/content";

export default function Credibility() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-ink-2">{credibility.eyebrow}</p>
          <h2 className="mt-3 font-condensed text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {credibility.title}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-2">{credibility.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {credibility.items.map((item) => (
            <article key={item.title} className="rounded-sm border border-rule bg-surface p-6">
              <h3 className="font-condensed text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 max-w-3xl border border-rule bg-warn-bg px-5 py-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-warn">
            Hinweis
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
            {credibility.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
