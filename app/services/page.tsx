import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { SERVICES } from "@/lib/services";
import { SOLUTIONS } from "@/lib/solutions";
import { ContactTrigger } from "@/components/contact-trigger";

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
    n: "01",
    tag: "Clarity",
    title: "An honest starting position",
    copy: "Before commitments are made, you get a candid assessment of what exists and what finishing it actually requires.",
  },
  {
    n: "02",
    tag: "Accountability",
    title: "One team owns the outcome",
    copy: "A named delivery lead is responsible for scope, schedule, and communication for the life of the engagement.",
  },
  {
    n: "03",
    tag: "Momentum",
    title: "Working software every cycle",
    copy: "Progress is demonstrated in running software on a fixed cadence, not described in status decks.",
  },
  {
    n: "04",
    tag: "Independence",
    title: "You own it afterwards",
    copy: "Documentation, runbooks, and paired sessions so your team can run and extend the system without us.",
  },
];

/** The one most engagements start as — given its own block rather than a middle column. */
const LEAD_MODEL = {
  tag: "Most common",
  title: "Full Completion Engagement",
  copy: "We take ownership of the remaining build and carry it through to production. Best when the project has stalled and needs a team that will finish it rather than advise on it.",
  list: [
    "Assessment, roadmap, and delivery to launch",
    "Deployment pipeline and rehearsed cutover",
    "Documentation and team handover",
  ],
  footKey: "Accountability",
  footValue: "End-to-end delivery",
  cta: "Discuss a Completion",
};

const OTHER_MODELS = [
  {
    tag: "Fixed scope",
    title: "Assessment & Roadmap",
    copy: "A bounded review of the codebase, infrastructure, and remaining scope, producing a written completion plan with estimates. Yours to keep — whether or not we do the build.",
    list: [
      "Architecture, code, and security review",
      "Risk register with severity and effort",
      "Sequenced completion plan and estimate",
    ],
    footKey: "Output",
    footValue: "Written plan you own",
    cta: "Commission an Assessment",
  },
  {
    tag: "Alongside your team",
    title: "Embedded Support",
    copy: "We work inside your existing process on an agreed slice of the remaining work, while your team keeps ownership of the whole. Suited to teams who need capacity, not a takeover.",
    list: [
      "Agreed workstream with clear boundaries",
      "Your tooling, your review process",
      "Knowledge transfer throughout",
    ],
    footKey: "Ownership",
    footValue: "Stays with your team",
    cta: "Talk About Capacity",
  },
];

const COMPARISON: [string, string, string, string][] = [
  [
    "Who owns delivery",
    "Silo-Dev, end to end",
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
    title: "Security-first delivery",
    copy: "Threat modeling and least-privilege access on every engagement.",
  },
  {
    title: "Encryption by default",
    copy: "Data encrypted in transit and at rest across every system we deliver.",
  },
  {
    title: "Audit-ready logging",
    copy: "Traceable change history and observability built into delivery.",
  },
  {
    title: "Compliance-aware builds",
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

      {/* Why a completion partner — a sticky premise against a flowing list */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="flex flex-col gap-xs lg:sticky lg:top-32">
                <span className="text-caption-bold uppercase tracking-widest text-primary">
                  Why It Works
                </span>
                <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
                  What a completion partner has to get right
                  <Dot />
                </h2>
              </div>
            </Reveal>

            <div className="flex flex-col lg:col-span-8">
              {WHY.map((w, i) => (
                <Reveal key={w.tag} delay={i * 90}>
                  <div
                    className={`grid grid-cols-1 gap-xs py-xl sm:grid-cols-12 sm:gap-xl ${
                      i > 0 ? "border-t border-hairline" : "lg:pt-0"
                    }`}
                  >
                    <div className="sm:col-span-3">
                      <span className="font-display text-body-md-bold text-stone">{w.n}</span>
                      <p className="text-caption-bold uppercase tracking-widest text-primary">
                        {w.tag}
                      </p>
                    </div>
                    <div className="sm:col-span-9">
                      <h3 className="text-heading-sm font-bold text-ink-deep">{w.title}</h3>
                      <p className="mt-xs text-body-md leading-relaxed text-secondary">{w.copy}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
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
                      {/* The step number carries the hierarchy; an icon tile beside it
                          would only decorate what the number already says. */}
                      <div className="flex items-center gap-base">
                        <span
                          className={`font-display text-display-lg font-bold ${
                            dark ? "text-canvas/20" : "text-surface-container-high"
                          }`}
                        >
                          {s.step}
                        </span>
                        <span
                          className={`h-px flex-1 ${dark ? "bg-canvas/15" : "bg-hairline"}`}
                        />
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

                  <Reveal delay={120} className={`lg:col-span-7 ${dark ? "lg:order-1" : ""}`}>
                    <div className="flex flex-col gap-xl">
                      <p
                        className={`text-body-md leading-relaxed ${
                          dark ? "text-stone" : "text-charcoal"
                        }`}
                      >
                        {s.copy}
                      </p>

                      {/* Ruled rows, not tinted boxes with tick marks. */}
                      <ul className="flex flex-col">
                        {s.points.map((p, pi) => (
                          <li
                            key={p}
                            className={`flex items-baseline gap-base py-sm ${
                              pi > 0
                                ? dark
                                  ? "border-t border-canvas/10"
                                  : "border-t border-hairline-soft"
                                : ""
                            }`}
                          >
                            <span
                              className={`shrink-0 text-caption-bold tabular-nums ${
                                dark ? "text-canvas/35" : "text-stone"
                              }`}
                            >
                              {String(pi + 1).padStart(2, "0")}
                            </span>
                            <span
                              className={`text-body-sm ${dark ? "text-canvas/85" : "text-ink-body"}`}
                            >
                              {p}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className={`flex flex-wrap items-end justify-between gap-base border-t pt-base ${
                          dark ? "border-canvas/15" : "border-ink-deep/15"
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
                        <ContactTrigger
                          className={`inline-flex items-center gap-xs text-body-sm-bold transition-colors ${
                            dark
                              ? "text-accent-electric hover:text-canvas"
                              : "text-primary-container hover:text-primary"
                          }`}
                        >
                          Start Here
                          <Icon name="arrow_forward" size={16} />
                        </ContactTrigger>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Engagement models — one lead, two alternatives, deliberately unequal */}
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

          {/* The one most people want, given the weight to match */}
          <Reveal>
            <article className="relative overflow-hidden rounded-xl bg-ink-deep p-xxl text-canvas lg:p-xxxl">
              <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-primary-container/20 blur-3xl" />
              <div className="relative grid grid-cols-1 gap-xxl lg:grid-cols-12">
                <div className="flex flex-col gap-base lg:col-span-7">
                  <span className="text-caption-bold uppercase tracking-widest text-accent-electric">
                    {LEAD_MODEL.tag}
                  </span>
                  <h3 className="text-heading-lg font-semibold tracking-tight text-canvas">
                    {LEAD_MODEL.title}
                  </h3>
                  <p className="max-w-2xl text-body-md leading-relaxed text-stone">
                    {LEAD_MODEL.copy}
                  </p>
                  <ContactTrigger className="mt-xs inline-flex w-fit items-center gap-xs rounded-full bg-primary-container px-xxl py-sm text-body-sm-bold text-on-primary transition-colors hover:bg-primary">
                    {LEAD_MODEL.cta}
                    <Icon name="arrow_forward" size={18} />
                  </ContactTrigger>
                </div>

                <div className="flex flex-col lg:col-span-5">
                  {LEAD_MODEL.list.map((item, i) => (
                    <p
                      key={item}
                      className={`py-sm text-body-sm text-canvas/85 ${
                        i > 0 ? "border-t border-canvas/10" : ""
                      }`}
                    >
                      {item}
                    </p>
                  ))}
                  <p className="mt-base border-t border-canvas/15 pt-base text-caption-bold uppercase tracking-wider text-canvas/50">
                    {LEAD_MODEL.footKey}
                    <span className="ml-xs text-accent-electric">{LEAD_MODEL.footValue}</span>
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          {/* The alternatives — split by a rule rather than boxed up */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {OTHER_MODELS.map((m, i) => (
              <Reveal key={m.title} delay={i * 120}>
                <div
                  className={`flex h-full flex-col gap-base py-xl md:py-0 ${
                    i === 0
                      ? "border-b border-hairline md:border-r md:border-b-0 md:pr-xxxl"
                      : "md:pl-xxxl"
                  }`}
                >
                  <span className="text-caption-bold uppercase tracking-widest text-steel">
                    {m.tag}
                  </span>
                  <h3 className="text-heading-sm font-bold text-ink-deep">{m.title}</h3>
                  <p className="text-body-md leading-relaxed text-secondary">{m.copy}</p>
                  <ul className="flex flex-col">
                    {m.list.map((item, li) => (
                      <li
                        key={item}
                        className={`py-xs text-body-sm text-charcoal ${
                          li > 0 ? "border-t border-hairline-soft" : ""
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-caption-bold uppercase tracking-wider text-steel">
                    {m.footKey}
                    <span className="ml-xs text-ink-deep">{m.footValue}</span>
                  </p>
                  <ContactTrigger className="mt-auto inline-flex w-fit items-center gap-xs pt-xs text-body-sm-bold text-primary-container transition-colors hover:text-primary">
                    {m.cta}
                    <Icon name="arrow_forward" size={16} />
                  </ContactTrigger>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div>
              <span className="block pb-base text-caption-bold uppercase tracking-wider text-steel">
                Engagement Model Comparison
              </span>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-ink-deep/20 text-caption-bold uppercase tracking-wider text-charcoal">
                      <th className="py-base pr-base font-normal">Dimension</th>
                      <th className="px-base py-base text-primary">Full Completion</th>
                      <th className="px-base py-base font-normal">Assessment &amp; Roadmap</th>
                      <th className="py-base pl-base font-normal">Embedded Support</th>
                    </tr>
                  </thead>
                  <tbody className="text-body-sm">
                    {COMPARISON.map(([dim, a, b, c]) => (
                      <tr key={dim} className="border-b border-hairline-soft align-top">
                        <td className="py-base pr-base text-body-sm-bold text-ink-deep">{dim}</td>
                        <td className="px-base py-base text-ink-body">{a}</td>
                        <td className="px-base py-base text-secondary">{b}</td>
                        <td className="py-base pl-base text-secondary">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Solutions cross-link — an index, not five tiles */}
      <section className="w-full bg-canvas py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="mb-xxl flex flex-col justify-between gap-base md:flex-row md:items-end">
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

          <div className="flex flex-col border-t border-hairline">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group grid grid-cols-1 items-baseline gap-xxs border-b border-hairline py-lg transition-colors hover:bg-surface-soft sm:grid-cols-12 sm:gap-xl"
                >
                  <span className="font-display text-body-sm text-stone sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-heading-sm font-bold text-ink-deep transition-colors group-hover:text-primary sm:col-span-5">
                    {s.name}
                  </span>
                  <span className="text-body-sm text-secondary sm:col-span-5">{s.tagline}</span>
                  <span className="hidden justify-self-end text-primary-container sm:col-span-1 sm:block">
                    <Icon name="arrow_forward" size={18} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section id="compliance" className="w-full scroll-mt-24 bg-surface-soft py-section-lg">
        <div className="mx-auto grid max-w-shell grid-cols-1 items-start gap-xxxl px-xxl lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="flex flex-col gap-base lg:sticky lg:top-32">
              <span className="text-caption-bold uppercase tracking-widest text-primary">
                Governance
              </span>
              <h2 className="text-heading-lg font-semibold text-ink-deep">
                Security and IP custody, handled properly
                <Dot />
              </h2>
              <p className="text-body-md leading-relaxed text-charcoal">
                Taking over someone else&rsquo;s codebase means being trusted with it. Access is
                scoped and time-bound, work happens under a mutual NDA, and everything we write
                belongs to you from the first commit.
              </p>
              <dl className="flex flex-col gap-base pt-xs">
                {[
                  {
                    title: "Mutual NDA before any code review",
                    copy: "Signed before we look at a repository, a diagram, or a credential.",
                  },
                  {
                    title: "100% clean IP assignment",
                    copy: "All code, schemas, and configuration belong to your organization from day one.",
                  },
                ].map((row) => (
                  <div key={row.title} className="border-l-2 border-status-success pl-base">
                    <dt className="text-body-sm-bold text-ink-deep">{row.title}</dt>
                    <dd className="text-caption text-secondary">{row.copy}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="flex flex-col lg:col-span-6">
            {GOVERNANCE.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div
                  className={`flex flex-col gap-xxs py-base ${
                    i > 0 ? "border-t border-hairline" : ""
                  }`}
                >
                  <span className="text-body-md-bold text-ink-deep">{c.title}</span>
                  <span className="text-body-sm leading-relaxed text-secondary">{c.copy}</span>
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
                <h2 className="text-display-lg-mobile font-semibold tracking-tight text-canvas md:text-display-lg">
                  Stuck somewhere between started and shipped?
                </h2>
                <p className="text-subtitle-md leading-relaxed text-stone">
                  Bring us the current state and we will tell you what finishing it involves —
                  including if the honest answer is that you do not need us.
                </p>
              </div>
              <ContactTrigger className="inline-flex shrink-0 items-center justify-center gap-xs rounded-full bg-primary-container px-xxxl py-base text-center text-body-md-bold text-on-primary shadow-md transition-colors duration-200 hover:bg-primary">
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
