import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SOLUTIONS } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "The five domains we take unfinished work in: project rescue, cloud and infrastructure, AI and automation, data platforms, and product engineering.",
};

function Dot() {
  return <span className="text-accent-electric">.</span>;
}

export default function SolutionsPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-primary-container/15 blur-3xl" />
        <div className="relative mx-auto flex max-w-shell flex-col gap-xl px-xxl">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-xs rounded-full bg-canvas/10 px-base py-xxs backdrop-blur">
              <Icon name="category" size={16} className="text-accent-electric" />
              <span className="text-caption-bold uppercase tracking-wider text-canvas/80">
                Solutions
              </span>
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-3xl text-display-lg-mobile font-bold tracking-tight text-canvas md:text-display-lg">
              Five domains we finish work in
              <Dot />
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-2xl text-subtitle-md leading-relaxed text-stone">
              Every engagement starts from something already underway. These are the areas where we
              pick up the remaining work — most projects touch more than one of them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 100}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col gap-base rounded-xl bg-canvas p-xxl shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-container/10 text-primary-container transition-colors group-hover:bg-primary-container group-hover:text-canvas">
                      <Icon name={s.icon} size={24} />
                    </span>
                    <Icon
                      name="arrow_outward"
                      size={20}
                      className="text-steel transition-colors group-hover:text-primary"
                    />
                  </div>
                  <h2 className="text-heading-sm font-bold text-ink-deep transition-colors group-hover:text-primary">
                    {s.name}
                  </h2>
                  <p className="text-body-sm-bold text-primary">{s.tagline}</p>
                  <p className="text-body-sm text-secondary">{s.summary}</p>
                  <div className="mt-auto flex flex-wrap gap-xs pt-base">
                    {s.stack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-surface-soft px-sm py-xxs text-caption text-ink-body"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}

            {/* Not-sure card */}
            <Reveal delay={200}>
              <div className="flex h-full flex-col justify-between gap-base rounded-xl border border-dashed border-hairline bg-transparent p-xxl">
                <div className="flex flex-col gap-base">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-surface-container-low text-charcoal">
                    <Icon name="help" size={24} />
                  </span>
                  <h2 className="text-heading-sm font-bold text-ink-deep">
                    Not sure where yours fits?
                  </h2>
                  <p className="text-body-sm text-secondary">
                    Most rescues span several of these. Describe the situation and we will tell you
                    what it actually involves.
                  </p>
                </div>
                <Link
                  href="/#discovery-portal"
                  className="inline-flex w-fit items-center gap-xs text-body-sm-bold text-primary transition-colors hover:text-ink-deep"
                >
                  Start a conversation
                  <Icon name="arrow_forward" size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
