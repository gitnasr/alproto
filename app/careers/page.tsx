import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Engineering Careers",
  description:
    "Join a pod of Staff-level engineers shipping mission-critical systems. Learn how we hire, what we value, and how to introduce yourself.",
};

function Dot() {
  return <span className="text-accent-electric">.</span>;
}

const VALUES = [
  {
    icon: "workspace_premium",
    title: "Staff-Caliber Bar",
    copy: "We hire experienced engineers who have owned systems in production. Depth over headcount, always.",
  },
  {
    icon: "public",
    title: "Distributed by Design",
    copy: "Pods collaborate across time zones with async RFCs, recorded design reviews, and deep-work-first calendars.",
  },
  {
    icon: "handyman",
    title: "Production Ownership",
    copy: "You architect it, you ship it, you run it. Every engineer carries their work through to verified runbooks.",
  },
  {
    icon: "school",
    title: "Compounding Craft",
    copy: "Paired architecture sessions, internal tech talks, and a budget for the tools and learning that sharpen you.",
  },
];

const HIRING_STEPS = [
  {
    n: "01",
    title: "Introduction",
    copy: "Share your background and the systems you are proudest of. A short written intro beats a polished resume.",
  },
  {
    n: "02",
    title: "Technical Deep Dive",
    copy: "A conversation with a Principal Engineer about a real system you built — decisions, trade-offs, failures.",
  },
  {
    n: "03",
    title: "Working Session",
    copy: "A collaborative architecture exercise with the pod you would join. No puzzles, no whiteboard trivia.",
  },
  {
    n: "04",
    title: "Offer & Onboarding",
    copy: "A clear decision within days, then a structured first-sprint onboarding with a dedicated pairing partner.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-primary-container/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-24 h-[380px] w-[380px] rounded-full bg-accent-electric/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-shell flex-col gap-xl px-xxl">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-xs rounded-full bg-canvas/10 px-base py-xxs backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-status-success" />
              <span className="text-caption-bold uppercase tracking-wider text-canvas/80">
                Engineering Careers
              </span>
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-3xl text-display-lg-mobile font-bold tracking-tight text-canvas md:text-display-lg">
              Build the systems everything else{" "}
              <span className="text-accent-electric">depends on</span>
              <Dot />
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-2xl text-subtitle-md leading-relaxed text-stone">
              We assemble small pods of experienced engineers and point them at high-consequence
              problems: core transaction systems, legacy cutovers, and real-time inference
              infrastructure. If that is the work you want, we want to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl px-xxl">
          <Reveal>
            <div className="flex flex-col gap-xs">
              <span className="text-caption-bold uppercase tracking-widest text-primary">
                How We Work
              </span>
              <h2 className="text-heading-lg font-semibold text-ink-deep">
                What you can expect
                <Dot />
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-base sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="flex h-full flex-col gap-xs rounded-xl bg-canvas p-xxl shadow-sm transition-shadow duration-200 hover:shadow-md">
                  <Icon name={v.icon} size={28} className="text-primary" />
                  <span className="mt-xs font-display text-heading-sm font-semibold text-ink-deep">
                    {v.title}
                  </span>
                  <p className="text-body-sm text-secondary">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process — dark editorial split */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary-container/10 blur-3xl" />
        <div className="relative mx-auto max-w-shell px-xxl">
          <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal className="flex flex-col gap-base lg:sticky lg:top-32">
                <span className="text-caption-bold uppercase tracking-widest text-accent-electric">
                  Hiring Protocol
                </span>
                <h2 className="text-heading-lg font-semibold tracking-tight text-canvas">
                  How we hire
                  <Dot />
                </h2>
                <p className="text-body-md text-stone">
                  Four focused steps, no drawn-out gauntlets. We evaluate the way we work: on real
                  systems, in real conversations.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-base sm:grid-cols-2 lg:col-span-8">
              {HIRING_STEPS.map((s, i) => (
                <Reveal key={s.n} delay={(i % 2) * 120}>
                  <div className="flex h-full flex-col gap-base rounded-xl border border-canvas/10 bg-canvas/5 p-xxl transition-colors duration-200 hover:bg-canvas/10">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-electric/15 text-body-sm-bold text-accent-electric">
                      {s.n}
                    </span>
                    <h3 className="text-heading-sm font-semibold text-canvas">{s.title}</h3>
                    <p className="text-body-sm text-stone">{s.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-canvas py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="flex flex-col justify-between gap-xxl rounded-xl bg-surface-soft p-xxxl lg:flex-row lg:items-center">
              <div className="flex max-w-2xl flex-col gap-base">
                <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
                  No open listing that fits? Introduce yourself anyway
                  <Dot />
                </h2>
                <p className="text-body-md leading-relaxed text-secondary">
                  Roles open as new engagements are commissioned. Tell us about the hardest system
                  you have shipped and we will keep you on the radar for the next pod.
                </p>
              </div>
              <Link
                href="/#discovery-portal"
                className="inline-flex shrink-0 items-center justify-center gap-xs rounded-full bg-ink-deep px-xxxl py-base text-center text-body-md-bold text-canvas shadow-md transition-colors duration-200 hover:bg-charcoal"
              >
                Get in Touch
                <Icon name="arrow_forward" size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
