import { howItWorks } from "@/lib/content";

export default function HowItWorks() {
  const steps = howItWorks.steps;
  return (
    <section id="so-funktionierts" className="scroll-mt-20 border-b border-rule">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
        <p className="eyebrow text-ink-2">{howItWorks.eyebrow}</p>
        <h2 className="mt-3 max-w-2xl font-condensed text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {howItWorks.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-2">
          {howItWorks.intro}
        </p>

        {/* The product's own sequence language: a ruled pipeline
            (LV → anfragen → lesen → export), like the app's stepper. */}
        <ol className="relative mt-12 grid gap-9 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.n} className="relative border-l border-rule pl-5 lg:border-l-0 lg:pl-0">
              {/* Node dot on the mobile rail (mirrors the app's stepper nodes). */}
              <span
                aria-hidden="true"
                className="absolute -left-[4.5px] top-1 h-2 w-2 border border-rule bg-paper lg:hidden"
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
                Schritt {step.n}
              </p>
              <h3 className="mt-2 font-condensed text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{step.text}</p>
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-5 top-0 hidden font-mono text-lg text-ink-3 lg:block"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
