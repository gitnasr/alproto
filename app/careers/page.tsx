import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Engineering Careers",
  description:
    "Join a pod of Staff-level engineers shipping mission-critical systems. Learn how we hire, what we value, and how to introduce yourself.",
};

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
      <section className="relative w-full overflow-hidden bg-canvas px-xxl pt-section pb-section-lg">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-primary-container/5 blur-3xl" />
        <div className="relative mx-auto flex max-w-shell flex-col gap-xl">
          <span className="inline-flex w-fit items-center gap-xs rounded-full bg-surface-soft px-base py-xxs shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-status-success" />
            <span className="text-caption-bold uppercase tracking-wider text-ink-deep">
              Engineering Careers
            </span>
          </span>
          <h1 className="max-w-3xl text-display-lg-mobile font-semibold tracking-tight text-ink-deep md:text-display-lg">
            Build the systems everything else <span className="text-primary">depends on.</span>
          </h1>
          <p className="max-w-2xl text-subtitle-md leading-relaxed text-charcoal">
            We assemble small pods of experienced engineers and point them at high-consequence
            problems: core transaction systems, legacy cutovers, and real-time inference
            infrastructure. If that is the work you want, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-surface-soft px-xxl py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex flex-col gap-xs">
            <span className="text-caption-bold uppercase tracking-widest text-primary">
              How We Work
            </span>
            <h2 className="text-heading-lg font-semibold text-ink-deep">What You Can Expect</h2>
          </div>
          <div className="grid grid-cols-1 gap-base sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="flex flex-col gap-xs rounded-lg bg-canvas p-xxl shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <Icon name={v.icon} size={28} className="text-primary" />
                <span className="mt-xs font-display text-heading-sm font-semibold text-ink-deep">
                  {v.title}
                </span>
                <p className="text-body-sm text-secondary">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="w-full bg-canvas px-xxl py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex flex-col justify-between gap-base md:flex-row md:items-end">
            <div className="flex flex-col gap-xs">
              <span className="text-caption-bold uppercase tracking-widest text-primary">
                Hiring Protocol
              </span>
              <h2 className="text-heading-lg font-semibold text-ink-deep">How We Hire</h2>
            </div>
            <p className="max-w-[28rem] text-body-sm text-secondary">
              Four focused steps, no drawn-out gauntlets. We evaluate the way we work: on real
              systems, in real conversations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-base md:grid-cols-2 lg:grid-cols-4">
            {HIRING_STEPS.map((s) => (
              <div
                key={s.n}
                className="flex flex-col gap-base rounded-lg bg-surface-soft p-xxl"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-body-sm-bold text-primary">
                  {s.n}
                </span>
                <h3 className="text-heading-sm font-semibold text-ink-deep">{s.title}</h3>
                <p className="text-body-sm text-secondary">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-canvas px-xxl pb-hero">
        <div className="relative mx-auto max-w-shell overflow-hidden rounded-lg bg-ink-deep p-xxxl text-on-primary shadow-xl">
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-primary-container/20 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-xxl lg:flex-row lg:items-center">
            <div className="flex max-w-2xl flex-col gap-base">
              <h2 className="text-heading-lg font-semibold tracking-tight text-on-primary">
                No open listing that fits? Introduce yourself anyway.
              </h2>
              <p className="text-body-md leading-relaxed text-hairline">
                Roles open as new engagements are commissioned. Tell us about the hardest system
                you have shipped and we will keep you on the radar for the next pod.
              </p>
            </div>
            <Link
              href="/#discovery-portal"
              className="inline-flex shrink-0 items-center justify-center gap-xs rounded-full bg-primary-container px-xxxl py-base text-center text-body-md-bold text-on-primary shadow-md transition-colors duration-200 hover:bg-primary"
            >
              Get in Touch
              <Icon name="arrow_forward" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
