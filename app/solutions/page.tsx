import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SOLUTIONS } from "@/lib/solutions";
import { ContactTrigger } from "@/components/contact-trigger";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "The five domains we take unfinished work in: project rescue, cloud and infrastructure, AI and automation, data platforms, and product engineering.",
};

function Dot() {
  return <span className="text-rust">.</span>;
}

export default function SolutionsPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-canvas/[0.06] blur-3xl" />
        <div className="relative mx-auto flex max-w-shell flex-col gap-xl px-xxl">
          <Reveal delay={100}>
            <h1 className="max-w-3xl text-display-lg-mobile text-canvas md:text-display-lg">
              Five domains we finish work in
              <Dot />
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-2xl text-subtitle-md leading-relaxed text-stone">
              Every engagement starts from something already underway. These are the areas where we
              pick up the remaining work, most projects touch more than one of them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The five, as an index rather than five identical cards */}
      <section className="w-full bg-page py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="flex flex-col gap-xs lg:sticky lg:top-32">
                <span className="text-caption-bold uppercase text-kicker">
                  The Index
                </span>
                <h2 className="text-heading-lg text-canvas">
                  Where unfinished work tends to sit
                  <Dot />
                </h2>
                <p className="text-body-md leading-relaxed text-secondary">
                  Read down the list, the one that matches your situation is usually obvious, and
                  each page says what we actually do in that domain.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col border-t border-canvas/15 lg:col-span-8">
              {SOLUTIONS.map((s, i) => (
                <Reveal key={s.slug} delay={i * 80}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="group flex flex-col gap-xs border-b border-hairline py-xxl transition-colors hover:bg-surface-soft"
                  >
                    <span className="font-display text-body-md-bold text-stone">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-heading-lg text-canvas transition-colors group-hover:text-primary">
                      {s.name}
                    </h3>
                    <p className="text-body-md text-secondary">{s.tagline}</p>
                    <p className="mt-xs text-body-md leading-relaxed text-secondary">{s.summary}</p>
                    <span className="mt-xs inline-flex items-center gap-xs text-body-sm-bold text-canvas transition-colors group-hover:text-primary">
                      Read more
                      <Icon name="arrow_forward" size={16} />
                    </span>
                  </Link>
                </Reveal>
              ))}

              {/* The "not sure" case, as a closing note rather than a sixth card */}
              <Reveal delay={120}>
                <div className="flex flex-col justify-between gap-base pt-xxl lg:flex-row lg:items-end">
                  <p className="max-w-2xl text-heading-sm leading-relaxed font-normal text-canvas">
                    Most rescues span several of these. Describe the situation and we will tell you
                    what it actually involves
                    <Dot />
                  </p>
                  <ContactTrigger className="inline-flex w-fit shrink-0 items-center gap-xs rounded-full bg-ink-deep px-xxl py-base text-body-sm-bold text-canvas transition-colors hover:bg-charcoal">
                    Book a 15 Minute Call
                    <Icon name="arrow_forward" size={18} />
                  </ContactTrigger>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
