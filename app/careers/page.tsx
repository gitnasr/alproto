import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { ContactTrigger } from "@/components/contact-trigger";

export const metadata: Metadata = {
  title: "Engineering Careers",
  description:
    "Join a small team of Staff-level engineers shipping mission-critical systems. Learn how we hire, what we value, and how to introduce yourself.",
};

function Dot() {
  return <span className="text-rust">.</span>;
}

const VALUES = [
  {
    title: "Staff-Caliber Bar",
    copy: "We hire experienced engineers who have owned systems in production. Depth over headcount, always.",
  },
  {
    title: "Distributed by Design",
    copy: "We collaborate across time zones with async RFCs, recorded design reviews, and deep-work-first calendars.",
  },
  {
    title: "Production Ownership",
    copy: "You architect it, you ship it, you run it. Every engineer carries their work through to verified runbooks.",
  },
  {
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
    copy: "A collaborative architecture exercise with the team you would join. No puzzles, no whiteboard trivia.",
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
        <div className="pointer-events-none absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-canvas/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-24 h-[380px] w-[380px] rounded-full bg-canvas/[0.04] blur-3xl" />

        <div className="relative mx-auto flex max-w-shell flex-col gap-xl px-xxl">
          
          <Reveal delay={100}>
            <h1 className="max-w-3xl text-display-lg-mobile text-canvas md:text-display-lg">
              Build the systems everything else{" "}
              <span className="text-accent-electric">depends on</span>
              <Dot />
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-2xl text-subtitle-md leading-relaxed text-stone">
              We put small teams of experienced engineers onto high-consequence
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
              <span className="text-caption-bold uppercase text-kicker">
                How We Work
              </span>
              <h2 className="text-heading-lg text-canvas">
                What you can expect
                <Dot />
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-xxl sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="flex h-full flex-col gap-xs border-l-2 border-hairline pl-xl">
                  <span className="font-display text-heading-lg text-canvas/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-heading-sm text-canvas">
                    {v.title}
                  </span>
                  <p className="text-body-sm leading-relaxed text-secondary">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process — dark editorial split */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-canvas/[0.05] blur-3xl" />
        <div className="relative mx-auto max-w-shell px-xxl">
          <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal className="flex flex-col gap-base lg:sticky lg:top-32">
                <span className="text-caption-bold uppercase tracking-widest text-accent-electric">
                  Hiring Protocol
                </span>
                <h2 className="text-heading-lg text-canvas">
                  How we hire
                  <Dot />
                </h2>
                <p className="text-body-md text-stone">
                  Four focused steps, no drawn-out gauntlets. We evaluate the way we work: on real
                  systems, in real conversations.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col lg:col-span-8">
              {HIRING_STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 90}>
                  <div
                    className={`grid grid-cols-1 gap-xs py-xl sm:grid-cols-12 sm:gap-xl ${
                      i > 0 ? "border-t border-canvas/10" : "lg:pt-0"
                    }`}
                  >
                    <span className="font-display text-body-md-bold text-canvas/30 sm:col-span-1">
                      {s.n}
                    </span>
                    <h3 className="text-heading-sm text-canvas sm:col-span-4">
                      {s.title}
                    </h3>
                    <p className="text-body-sm leading-relaxed text-stone sm:col-span-7">{s.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-page py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="flex flex-col justify-between gap-xxl border-t border-canvas/15 pt-xxl lg:flex-row lg:items-end">
              <div className="flex max-w-2xl flex-col gap-base">
                <h2 className="text-heading-lg text-canvas">
                  No open listing that fits? Introduce yourself anyway
                  <Dot />
                </h2>
                <p className="text-body-md leading-relaxed text-secondary">
                  Roles open as new engagements are commissioned. Tell us about the hardest system
                  you have shipped and we will keep you on the radar for the next engagement.
                </p>
              </div>
              <ContactTrigger
                className="inline-flex shrink-0 items-center justify-center gap-xs rounded-full bg-ink-deep px-xxxl py-base text-center text-body-md-bold text-canvas shadow-md transition-colors duration-200 hover:bg-charcoal"
              >
                Get in Touch
                <Icon name="arrow_forward" size={20} />
              </ContactTrigger>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
