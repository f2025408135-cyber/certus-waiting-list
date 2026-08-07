import { faq } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-ink-2">{faq.eyebrow}</p>
          <h2 className="mt-3 font-condensed text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {faq.title}
          </h2>
        </div>

        <div className="mt-12 max-w-3xl space-y-4">
          {faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-sm border border-rule bg-surface"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-ink transition-colors hover:bg-paper/60 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="font-mono text-accent transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="border-t border-rule px-5 pb-4 pt-4 text-sm leading-relaxed text-ink-2">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
