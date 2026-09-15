import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";
import { ContactTrigger } from "@/components/contact-trigger";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are: a small team of engineers who take over unfinished software and carry it to production.",
};

function Dot() {
  return <span className="text-rust">.</span>;
}

/**
 * Placeholder photography (Unsplash CDN) — swap for a real photo of the team.
 * Download the chosen image into /public and point this at it before launch.
 */
const HERO_PHOTO =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70";

/** The ground the team covers, deliberately described as disciplines rather than people. */
const DISCIPLINES = [
  {
    title: "Platform & Infrastructure",
    copy: "Cloud environments, deployment pipelines, and the operational plumbing a product needs before anyone can rely on it — including ServiceNow and Azure estates already in flight.",
  },
  {
    title: "Application Engineering",
    copy: "The surface users actually touch: web and mobile product work, APIs, and the front-end structure that decides whether the next change is safe or frightening.",
  },
  {
    title: "Data & Automation",
    copy: "Integrations between systems that disagree, pipelines that have to reconcile, workflow orchestration, and applied machine learning taken past the demo stage.",
  },
];

const HOW = [
  {
    title: "We tell you what we find",
    copy: "Including when the news is unwelcome, and including when the honest answer is that you do not need us.",
  },
  {
    title: "You work with the engineers",
    copy: "The person who reviews your codebase is the person who writes the plan and ships the work. No account layer in between.",
  },
  {
    title: "We plan for leaving",
    copy: "Documentation, runbooks, and paired sessions from the first week, so your team owns the system when we are done.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-ink-deep px-xxl py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-primary-container/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-24 h-[380px] w-[380px] rounded-full bg-accent-electric/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-shell grid-cols-1 items-center gap-xxxl lg:grid-cols-12">
          <div className="flex flex-col gap-lg lg:col-span-7">
            <Reveal>
              <h1 className="text-display-lg-mobile font-bold tracking-tight text-canvas md:text-display-lg lg:text-hero-display">
                Led by engineers.{" "}
                <span className="text-accent-electric">Built to finish things</span>
                <Dot />
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-2xl text-subtitle-md leading-relaxed text-stone">
                We are a small team that takes over software other people started — stalled builds,
                inherited codebases, migrations that never completed — and carries it to production.
                It is unglamorous work, and it is the work we are best at.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-5">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl shadow-xl sm:h-[380px] lg:h-[440px]">
              <MediaFrame
                src={HERO_PHOTO}
                icon="groups"
                label="The team working through a codebase together"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-deep/80 via-ink-deep/10 to-transparent" />
              <div className="absolute right-xl bottom-xl left-xl flex items-center gap-xs text-caption-bold text-canvas">
                <Icon name="groups" size={16} className="text-accent-electric" />
                Every engagement run by the people who scoped it
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="w-full bg-surface-soft px-xxl py-section-lg">
        <div className="mx-auto max-w-shell">
          <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="flex flex-col gap-xs lg:sticky lg:top-32">
                <span className="text-caption-bold uppercase tracking-widest text-primary">
                  The Team
                </span>
                <h2 className="text-heading-lg font-semibold tracking-tight text-canvas">
                  Small on purpose
                  <Dot />
                </h2>
                <p className="text-body-md leading-relaxed text-secondary">
                  Rescue work rewards judgement over headcount. We stay small and senior, and cover
                  the ground a stalled project actually needs — rather than a roster we have to keep
                  busy.
                </p>
              </div>
            </Reveal>

            {/* Ground covered, ruled rather than boxed into three cards */}
            <div className="flex flex-col lg:col-span-8">
              {DISCIPLINES.map((d, i) => (
                <Reveal key={d.title} delay={i * 110}>
                  <div
                    className={`flex flex-col gap-xs py-xl ${
                      i > 0 ? "border-t border-hairline" : "lg:pt-0"
                    }`}
                  >
                    <h3 className="text-heading-sm font-semibold text-canvas">{d.title}</h3>
                    <p className="text-body-md leading-relaxed text-secondary">{d.copy}</p>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={200}>
                <p className="mt-xl border-l-2 border-status-success pl-xl text-body-sm leading-relaxed text-charcoal">
                  Whoever assesses your project is on it through to handover. We do not hand an
                  engagement down to a different team once the scoping is signed.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="relative w-full overflow-hidden bg-ink-deep px-xxl py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary-container/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-shell flex-col gap-xxxl">
          <Reveal>
            <h2 className="max-w-2xl text-heading-lg font-semibold tracking-tight text-canvas">
              Three things we hold to
              <Dot />
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-xxl md:grid-cols-3">
            {HOW.map((h, i) => (
              <Reveal key={h.title} delay={i * 100}>
                <div className="flex h-full flex-col gap-xs border-t border-canvas/25 pt-base">
                  <span className="font-display text-heading-lg font-bold text-canvas/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-heading-sm font-semibold text-canvas">{h.title}</h3>
                  <p className="text-body-sm leading-relaxed text-stone">{h.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-page px-xxl py-section-lg">
        <div className="mx-auto max-w-shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-xxl border-t border-canvas/15 pt-xxl lg:flex-row lg:items-end">
              <div className="flex max-w-2xl flex-col gap-base">
                <h2 className="text-heading-lg font-semibold tracking-tight text-canvas">
                  Want to talk to one of us?
                </h2>
                <p className="text-body-md leading-relaxed text-secondary">
                  Fifteen minutes with an engineer who has taken over builds like yours before. No
                  deck and no discovery script — just the state of your project and our questions.
                </p>
              </div>
              <ContactTrigger className="inline-flex shrink-0 items-center justify-center gap-xs rounded-full bg-ink-deep px-xxxl py-base text-center text-body-md-bold text-canvas shadow-md transition-colors duration-200 hover:bg-charcoal">
                Book a 15 Minute Call
                <Icon name="arrow_forward" size={20} />
              </ContactTrigger>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
