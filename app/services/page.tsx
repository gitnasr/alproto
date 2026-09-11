import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { SERVICES } from "@/lib/services";
import { SOLUTIONS } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Services",
  description:
    "How a stalled project becomes a delivered one: assessment, architecture, delivery, deployment, project management, and handover.",
};

function Dot() {
  return <span className="text-accent-electric">.</span>;
}

const WHY = [
  {
    icon: "visibility",
    tag: "Clarity",
    title: "An honest starting position",
    copy: "Before commitments are made, you get a candid assessment of what exists and what finishing it actually requires.",
  },
  {
    icon: "assignment_turned_in",
    tag: "Accountability",
    title: "One team owns the outcome",
    copy: "A named delivery lead is responsible for scope, schedule, and communication for the life of the engagement.",
  },
  {
    icon: "published_with_changes",
    tag: "Momentum",
    title: "Working software every cycle",
    copy: "Progress is demonstrated in running software on a fixed cadence, not described in status decks.",
  },
  {
    icon: "menu_book",
    tag: "Independence",
    title: "You own it afterwards",
    copy: "Documentation, runbooks, and paired sessions so your team can run and extend the system without us.",
  },
];

const MODELS = [
  {
    tag: "Most Common",
    tagTone: "bg-primary-container text-on-primary",
    glow: true,
    title: "Full Completion Engagement",
    copy: "We take ownership of the remaining build and carry it through to production. Best when the project has stalled and needs a team that will finish it rather than advise on it.",
    listLabel: "Includes:",
    list: [
      "Assessment, roadmap, and delivery to launch",
      "Deployment pipeline and rehearsed cutover",
      "Documentation and team handover",
    ],
    footKey: "Accountability",
    footValue: "End-to-end delivery",
    footValueTone: "text-status-success",
    cta: "Discuss a Completion",
    ctaTone: "bg-primary-container hover:bg-primary",
  },
  {
    tag: "Fixed Scope",
    tagTone: "bg-canvas text-ink-deep shadow-sm",
    title: "Assessment & Roadmap",
    copy: "A bounded review of the codebase, infrastructure, and remaining scope, producing a written completion plan with estimates. Yours to keep — whether or not we do the build.",
    listLabel: "Includes:",
    list: [
      "Architecture, code, and security review",
      "Risk register with severity and effort",
      "Sequenced completion plan and estimate",
    ],
    footKey: "Output",
    footValue: "Written plan you own",
    footValueTone: "text-ink-deep",
    cta: "Commission an Assessment",
    ctaTone: "bg-ink-deep hover:bg-charcoal",
  },
  {
    tag: "Alongside Your Team",
    tagTone: "bg-canvas text-ink-deep shadow-sm",
    title: "Embedded Support",
    copy: "We work inside your existing process on an agreed slice of the remaining work, while your team keeps ownership of the whole. Suited to teams who need capacity, not a takeover.",
    listLabel: "Includes:",
    list: [
      "Agreed workstream with clear boundaries",
      "Your tooling, your review process",
      "Knowledge transfer throughout",
    ],
    footKey: "Ownership",
    footValue: "Stays with your team",
    footValueTone: "text-ink-deep",
    cta: "Talk About Capacity",
    ctaTone: "bg-ink-deep hover:bg-charcoal",
  },
];

const COMPARISON: [string, string, string, string][] = [
  [
    "Who owns delivery",
    "Nexus Dev, end to end",
    "No build — advisory output only",
    "Your team, we take a slice",
  ],
  [
    "Typical trigger",
    "Build has stalled and needs finishing",
    "Nobody can say what is left to do",
    "Team is capable but under-resourced",
  ],
  [
    "IP & source ownership",
    "100% yours throughout",
    "100% yours, including the report",
    "100% yours throughout",
  ],
  [
    "Ends with",
    "Production launch and handover",
    "A written, estimated plan",
    "An agreed workstream completed",
  ],
];

const GOVERNANCE = [
  {
    icon: "shield",
    title: "Security-First Delivery",
    copy: "Threat modeling and least-privilege access on every engagement.",
  },
  {
    icon: "enhanced_encryption",
    title: "Encryption by Default",
    copy: "Data encrypted in transit and at rest across every system we deliver.",
  },
  {
    icon: "fact_check",
    title: "Audit-Ready Logging",
    copy: "Traceable change history and observability built into delivery.",
  },
  {
    icon: "policy",
    title: "Compliance-Aware Builds",
    copy: "Architectures designed to support your SOC 2, PCI, or HIPAA program.",
  },
];

export default function ServicesPage() {
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
                The Engagement Arc
              </span>
            </span>
          </Reveal>

          <div className="grid grid-cols-1 items-end gap-xxl lg:grid-cols-12">
            <Reveal delay={100} className="lg:col-span-7">
              <h1 className="text-display-lg-mobile font-bold tracking-tight text-canvas md:text-display-lg lg:text-hero-display">
                How a stalled project becomes a{" "}
                <span className="text-accent-electric">delivered one</span>
                <Dot />
              </h1>
            </Reveal>
            <Reveal delay={200} className="lg:col-span-5">
              <div className="flex flex-col gap-base">
                <p className="text-subtitle-md leading-relaxed text-stone">
                  Six stages, run in order. Each one ends in something you can hold: a report, a
                  specification, working software, a rehearsed release, or a team that no longer
                  needs us.
                </p>
                <Link
                  href="#assessment"
                  className="inline-flex w-fit items-center gap-xs text-body-sm-bold text-accent-electric transition-colors hover:text-canvas"
                >
                  Start at stage one
                  <Icon name="arrow_downward" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Stage rail */}
          <Reveal delay={300}>
            <div className="mt-xl grid grid-cols-2 gap-base border-t border-canvas/10 pt-xl md:grid-cols-3 lg:grid-cols-6">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="group flex flex-col gap-xxs border-l border-canvas/15 pl-base transition-colors hover:border-accent-electric"
                >
                  <span className="text-caption-bold text-accent-electric">{s.step}</span>
                  <span className="text-body-sm-bold text-canvas/80 transition-colors group-hover:text-canvas">
                    {s.name}
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why a completion partner */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="mb-section-sm flex max-w-2xl flex-col gap-xs">
              <span className="text-caption-bold uppercase tracking-widest text-primary">
                Why It Works
              </span>
              <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
                What a completion partner has to get right
                <Dot />
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-base sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal key={w.tag} delay={i * 100}>
                <div className="flex h-full flex-col gap-xs rounded-xl bg-canvas p-xxl shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <Icon name={w.icon} size={24} className="text-primary" />
                    <span className="text-caption-bold uppercase text-primary">{w.tag}</span>
                  </div>
                  <span className="mt-xs font-display text-heading-sm font-semibold text-ink-deep">
                    {w.title}
                  </span>
                  <p className="text-body-sm text-secondary">{w.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The six stages — alternating editorial blocks */}
      <section className="w-full bg-canvas">
        {SERVICES.map((s, i) => {
          const dark = i % 2 === 1;
          return (
            <div
              key={s.slug}
              id={s.slug}
              className={`w-full scroll-mt-24 py-section-lg ${
                dark ? "bg-ink-deep text-canvas" : "bg-canvas"
              }`}
            >
              <div className="mx-auto max-w-shell px-xxl">
                <div className="grid grid-cols-1 items-start gap-xxxl lg:grid-cols-12">
                  <Reveal className={`lg:col-span-5 ${dark ? "lg:order-2" : ""}`}>
                    <div className="flex flex-col gap-base lg:sticky lg:top-32">
                      <div className="flex items-center gap-base">
                        <span
                          className={`flex h-14 w-14 items-center justify-center rounded-md ${
                            dark
                              ? "bg-accent-electric/15 text-accent-electric"
                              : "bg-primary-container/10 text-primary-container"
                          }`}
                        >
                          <Icon name={s.icon} size={28} />
                        </span>
                        <span
                          className={`font-display text-display-lg font-bold ${
                            dark ? "text-canvas/15" : "text-surface-container-high"
                          }`}
                        >
                          {s.step}
                        </span>
                      </div>
                      <h2
                        className={`text-heading-lg font-semibold tracking-tight ${
                          dark ? "text-canvas" : "text-ink-deep"
                        }`}
                      >
                        {s.name}
                        <Dot />
                      </h2>
                      <p
                        className={`text-subtitle-md ${
                          dark ? "text-accent-electric" : "text-primary"
                        }`}
                      >
                        {s.tagline}
                      </p>
                    </div>
                  </Reveal>

                  <Reveal
                    delay={120}
                    className={`lg:col-span-7 ${dark ? "lg:order-1" : ""}`}
                  >
                    <div className="flex flex-col gap-xl">
                      <p
                        className={`text-body-md leading-relaxed ${
                          dark ? "text-stone" : "text-charcoal"
                        }`}
                      >
                        {s.copy}
                      </p>

                      <ul className="flex flex-col gap-base">
                        {s.points.map((p) => (
                          <li
                            key={p}
                            className={`flex items-start gap-base rounded-lg p-base ${
                              dark ? "bg-canvas/5" : "bg-surface-soft"
                            }`}
                          >
                            <Icon
                              name="check_circle"
                              size={20}
                              className={`mt-xxs shrink-0 ${
                                dark ? "text-accent-electric" : "text-primary"
                              }`}
                            />
                            <span
                              className={`text-body-sm ${dark ? "text-canvas/85" : "text-ink-body"}`}
                            >
                              {p}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className={`flex flex-wrap items-center justify-between gap-base rounded-lg p-xl ${
                          dark ? "bg-canvas/5" : "bg-surface-container-low"
                        }`}
                      >
                        <div className="flex flex-col">
                          <span
                            className={`text-caption-bold uppercase tracking-wider ${
                              dark ? "text-canvas/50" : "text-steel"
                            }`}
                          >
                            Stage Deliverable
                          </span>
                          <span
                            className={`text-body-md-bold ${dark ? "text-canvas" : "text-ink-deep"}`}
                          >
                            {s.deliverable}
                          </span>
                        </div>
                        <Link
                          href="/#discovery-portal"
                          className={`inline-flex items-center gap-xs rounded-full px-xl py-xs text-body-sm-bold transition-colors ${
                            dark
                              ? "bg-canvas/10 text-canvas hover:bg-canvas/20"
                              : "bg-ink-deep text-canvas hover:bg-charcoal"
                          }`}
                        >
                          Start Here
                          <Icon name="arrow_forward" size={16} />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Engagement models */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl px-xxl">
          <Reveal>
            <div className="flex max-w-2xl flex-col gap-xs">
              <span className="text-caption-bold uppercase tracking-widest text-primary">
                Engagement Models
              </span>
              <h2 className="text-heading-lg font-semibold text-ink-deep">
                Three ways to bring us in
                <Dot />
              </h2>
              <p className="text-body-md text-secondary">
                The stages stay the same. What changes is how much of the remaining work we own.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-xxl md:grid-cols-3">
            {MODELS.map((m, i) => (
              <Reveal key={m.title} delay={i * 120}>
                <div className="relative flex h-full flex-col justify-between gap-xl overflow-hidden rounded-xl bg-canvas p-xxl shadow-sm">
                  {m.glow && (
                    <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />
                  )}
                  <div className="relative flex flex-col gap-base">
                    <span
                      className={`self-start rounded-full px-sm py-xxs text-caption-bold uppercase ${m.tagTone}`}
                    >
                      {m.tag}
                    </span>
                    <h3 className="text-heading-sm font-semibold text-ink-deep">{m.title}</h3>
                    <p className="text-body-sm text-charcoal">{m.copy}</p>
                    <div className="flex flex-col gap-xs pt-base">
                      <span className="text-caption-bold uppercase tracking-wider text-ink-deep">
                        {m.listLabel}
                      </span>
                      <ul className="flex flex-col gap-xs text-body-sm text-secondary">
                        {m.list.map((item) => (
                          <li key={item} className="flex items-start gap-xs">
                            <Icon name="check_circle" className="mt-0.5 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="relative flex flex-col gap-sm pt-base">
                    <div className="flex flex-wrap items-center justify-between gap-xs rounded-md bg-surface-soft p-base">
                      <span className="text-caption-bold uppercase text-secondary">{m.footKey}</span>
                      <span className={`text-caption-bold uppercase ${m.footValueTone}`}>
                        {m.footValue}
                      </span>
                    </div>
                    <Link
                      href="/#discovery-portal"
                      className={`inline-flex w-full items-center justify-center rounded-full px-xl py-sm text-center text-body-sm-bold text-on-primary transition-colors duration-200 ${m.ctaTone}`}
                    >
                      {m.cta}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="w-full rounded-xl bg-canvas p-xxl shadow-sm">
              <span className="block pb-base text-caption-bold uppercase tracking-wider text-ink-deep">
                Engagement Model Comparison
              </span>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <thead>
                    <tr className="text-caption-bold uppercase tracking-wider text-charcoal">
                      <th className="py-base pr-base">Dimension</th>
                      <th className="px-base py-base text-primary">Full Completion</th>
                      <th className="px-base py-base">Assessment & Roadmap</th>
                      <th className="py-base pl-base">Embedded Support</th>
                    </tr>
                  </thead>
                  <tbody className="text-body-sm">
                    {COMPARISON.map(([dim, a, b, c]) => (
                      <tr key={dim} className="transition-colors hover:bg-surface-soft/60">
                        <td className="py-base pr-base text-body-sm-bold text-ink-deep">{dim}</td>
                        <td className="px-base py-base text-charcoal">{a}</td>
                        <td className="px-base py-base text-charcoal">{b}</td>
                        <td className="py-base pl-base text-charcoal">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Solutions cross-link */}
      <section className="w-full bg-canvas py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="mb-section-sm flex flex-col justify-between gap-base md:flex-row md:items-end">
              <div className="flex max-w-2xl flex-col gap-xs">
                <span className="text-caption-bold uppercase tracking-widest text-primary">
                  Solution Areas
                </span>
                <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
                  The domains this process runs in
                  <Dot />
                </h2>
              </div>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-xs text-body-sm-bold text-primary-container transition-colors hover:text-primary"
              >
                Explore All Solutions
                <Icon name="arrow_forward" />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-base sm:grid-cols-2 lg:grid-cols-5">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col gap-xs rounded-xl bg-surface-soft p-xl transition-colors hover:bg-surface-container-low"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-container/10 text-primary-container">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <span className="mt-xs text-body-md-bold text-ink-deep transition-colors group-hover:text-primary">
                    {s.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section id="compliance" className="w-full scroll-mt-24 bg-surface-soft py-section-lg">
        <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-xxxl px-xxl lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="flex flex-col gap-base">
              <span className="text-caption-bold uppercase tracking-widest text-primary">
                Governance
              </span>
              <h2 className="text-heading-lg font-semibold text-ink-deep">
                Security and IP custody, handled properly
                <Dot />
              </h2>
              <p className="text-body-md text-charcoal">
                Taking over someone else&rsquo;s codebase means being trusted with it. Access is
                scoped and time-bound, work happens under a mutual NDA, and everything we write
                belongs to you from the first commit.
              </p>
              <div className="flex flex-col gap-xs pt-xs">
                {[
                  {
                    icon: "lock",
                    title: "Mutual NDA before any code review",
                    copy: "Signed before we look at a repository, a diagram, or a credential.",
                  },
                  {
                    icon: "fingerprint",
                    title: "100% clean IP assignment",
                    copy: "All code, schemas, and configuration belong to your organization from day one.",
                  },
                ].map((row) => (
                  <div key={row.title} className="flex items-start gap-xs">
                    <Icon name={row.icon} size={20} className="mt-xxs shrink-0 text-status-success" />
                    <div>
                      <span className="text-body-sm-bold text-ink-deep">{row.title}</span>
                      <p className="text-caption text-secondary">{row.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-base sm:grid-cols-2 lg:col-span-6">
            {GOVERNANCE.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="flex h-full flex-col gap-xs rounded-xl bg-canvas p-xxl shadow-sm transition-shadow hover:shadow-md">
                  <Icon name={c.icon} size={32} className="text-primary" />
                  <span className="text-body-md-bold text-ink-deep">{c.title}</span>
                  <span className="text-caption text-secondary">{c.copy}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq tone="canvas" />

      {/* CTA */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-hero text-canvas">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-primary-container/20 blur-3xl" />
        <div className="relative mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="flex flex-col justify-between gap-xxl lg:flex-row lg:items-center">
              <div className="flex max-w-2xl flex-col gap-base">
                <span className="inline-flex w-fit items-center gap-xs rounded-full bg-canvas/10 px-md py-xxs text-caption-bold uppercase text-canvas/70">
                  <span className="h-2 w-2 animate-ping rounded-full bg-accent-electric" />
                  Technical Office Hours Open
                </span>
                <h2 className="text-display-lg-mobile font-semibold tracking-tight text-canvas md:text-display-lg">
                  Stuck somewhere between started and shipped?
                </h2>
                <p className="text-subtitle-md leading-relaxed text-stone">
                  Bring us the current state and we will tell you what finishing it involves —
                  including if the honest answer is that you do not need us.
                </p>
              </div>
              <Link
                href="/#discovery-portal"
                className="inline-flex shrink-0 items-center justify-center gap-xs rounded-full bg-primary-container px-xxxl py-base text-center text-body-md-bold text-on-primary shadow-md transition-colors duration-200 hover:bg-primary"
              >
                Request a Project Assessment
                <Icon name="arrow_forward" size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
