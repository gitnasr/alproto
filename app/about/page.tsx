import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nexus Dev is an engineering-led studio of Staff and Principal engineers. No junior bench, no account layer — the people who scope the work are the people who ship it.",
};

const STUDIO_STATS = [
  {
    icon: "foundation",
    tag: "Founded",
    title: "2016",
    copy: "Started as a three-person consultancy untangling a payments monolith. Same charter since.",
  },
  {
    icon: "groups",
    tag: "Roster",
    title: "38 Engineers",
    copy: "Every one at Staff level or above, hired out of production teams — never off a bench.",
  },
  {
    icon: "public",
    tag: "Footprint",
    title: "3 Studios",
    copy: "San Francisco, London, and Berlin — overlapping hours across US and EU business days.",
  },
  {
    icon: "handshake",
    tag: "Continuity",
    title: "100% Retention",
    copy: "Every client engagement since 2019 has either renewed or completed on its own terms.",
  },
];

const PRINCIPLES = [
  {
    n: "01",
    icon: "engineering",
    title: "The Architect Writes the Code",
    copy: "Whoever scopes your system stays on it through cutover. We do not staff a senior pitch team and hand delivery to someone else — the name on the RFC is the name in the commit log.",
    rule: "No Bait-and-Switch Staffing",
  },
  {
    n: "02",
    icon: "description",
    title: "Written Before Built",
    copy: "Every engagement opens with an architectural RFC: contracts, latency budgets, failure modes, and explicit non-goals. If we cannot write it down clearly, we do not yet understand it well enough to build.",
    rule: "RFC-First Delivery",
  },
  {
    n: "03",
    icon: "visibility",
    title: "Radical Operational Transparency",
    copy: "Clients get our Git history, our CI dashboards, and our incident channel from day one. Weekly demos run against production telemetry, never against slides.",
    rule: "Open Repos, Open Metrics",
  },
  {
    n: "04",
    icon: "logout",
    title: "Engineered to Leave",
    copy: "Success is your team operating the system without us. Every engagement ends in paired workshops, runbooks, and failover drills — not a permanent support contract.",
    rule: "Handover Is the Deliverable",
  },
];

const LEADERSHIP = [
  {
    initials: "DK",
    name: "Dana Keller",
    role: "Founder & Principal Architect",
    bio: "Spent nine years on core payments infrastructure before starting the studio. Leads ledger and consensus engagements, and signs every architectural RFC that leaves the building.",
    focus: ["Distributed Ledgers", "Raft / Consensus", "Rust"],
  },
  {
    initials: "SO",
    name: "Sam Oyelaran",
    role: "Head of Platform Engineering",
    bio: "Ran multi-region Kubernetes for a payments network at nine-figure daily volume. Owns the studio's cutover playbook and the chaos harness every engagement is validated against.",
    focus: ["Kubernetes", "GitOps", "Chaos Engineering"],
  },
  {
    initials: "RT",
    name: "Riya Tandon",
    role: "Director of Applied ML",
    bio: "Built inference platforms for clinical imaging and fraud detection. Leads the studio's low-latency serving practice, from TensorRT kernels to streaming token gateways.",
    focus: ["vLLM / TensorRT", "Vector Search", "WebGPU"],
  },
  {
    initials: "MB",
    name: "Marek Brandt",
    role: "Principal, Modernization Practice",
    bio: "Fifteen years dismantling Java and .NET monoliths without downtime. Designed the parallel-shadow diffing framework the studio uses on every legacy core replacement.",
    focus: ["CDC Pipelines", "Strangler Fig", "PostgreSQL"],
  },
];

const TIMELINE: [string, string, string][] = [
  [
    "2016",
    "Studio founded in San Francisco",
    "Three engineers, one engagement: decomposing a payments monolith for a Series B marketplace.",
  ],
  [
    "2018",
    "First zero-downtime core cutover",
    "Shipped the parallel-shadow diffing framework that still gates every modernization engagement.",
  ],
  [
    "2020",
    "London studio opens",
    "EU coverage for regulated financial clients; FINMA and BaFin architectural reviews begin.",
  ],
  [
    "2022",
    "SOC 2 Type II and PCI-DSS Level 1",
    "Formalized the governance posture that lets pods work inside regulated production environments.",
  ],
  [
    "2024",
    "Applied ML practice established",
    "Berlin studio opens alongside a dedicated inference and vector search team.",
  ],
  [
    "2026",
    "45+ platforms in production",
    "Over $4.2B in client transaction volume running continuously on systems the studio architected.",
  ],
];

const NOT_THIS = [
  {
    icon: "person_off",
    title: "No Junior Bench",
    copy: "We do not pad pods with billable juniors. If the work does not need a Staff engineer, we will tell you to hire for it instead.",
  },
  {
    icon: "support_agent",
    title: "No Account Layer",
    copy: "There is no project manager translating between you and the engineers. You talk directly to the people writing the code.",
  },
  {
    icon: "lock_open",
    title: "No Vendor Lock-In",
    copy: "No proprietary frameworks, no bespoke runtimes only we can maintain. Every system we build runs on tooling your team can hire for.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero + studio stats */}
      <section className="relative w-full overflow-hidden bg-canvas px-xxl pt-section pb-section-lg">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-primary-container/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-accent-electric/5 blur-3xl" />

        <div className="relative mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex flex-wrap items-center gap-xs">
            <span className="inline-flex items-center gap-xs rounded-full bg-surface-soft px-base py-xxs shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-status-success" />
              <span className="text-caption-bold uppercase tracking-wider text-ink-deep">
                Studio Profile // Engineering-Led Since 2016
              </span>
            </span>
            <span className="hidden text-caption text-secondary sm:inline-block">
              SAN FRANCISCO • LONDON • BERLIN
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-xxl lg:grid-cols-12">
            <div className="flex flex-col gap-lg lg:col-span-8">
              <h1 className="text-display-lg-mobile font-semibold tracking-tight text-ink-deep md:text-display-lg lg:text-hero-display">
                An engineering studio, <span className="text-primary">not an agency.</span>
              </h1>
            </div>
            <div className="flex flex-col gap-base lg:col-span-4 lg:pt-base">
              <p className="text-subtitle-md leading-relaxed text-charcoal">
                Nexus Dev exists because the hardest systems work kept getting sold by people who
                would never have to operate it. We removed that layer. The architect who scopes your
                platform is the engineer who ships it and the one who hands you the runbook.
              </p>
              <div className="flex items-center gap-sm pt-xs">
                <Link
                  href="#principles"
                  className="inline-flex items-center gap-xs text-body-sm-bold text-primary transition-colors hover:text-ink-deep"
                >
                  How We Operate
                  <Icon name="arrow_downward" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-base pt-lg sm:grid-cols-2 lg:grid-cols-4">
            {STUDIO_STATS.map((s) => (
              <div
                key={s.tag}
                className="flex flex-col gap-xs rounded-lg bg-surface-soft p-xxl transition-colors duration-200 hover:bg-surface-container-low"
              >
                <div className="flex items-center justify-between">
                  <Icon name={s.icon} size={24} className="text-primary" />
                  <span className="text-caption-bold uppercase text-primary">{s.tag}</span>
                </div>
                <span className="mt-xs font-display text-heading-sm font-semibold text-ink-deep">
                  {s.title}
                </span>
                <p className="text-body-sm text-secondary">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section id="principles" className="w-full bg-surface-soft px-xxl py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex flex-col justify-between gap-base md:flex-row md:items-end">
            <div className="flex flex-col gap-xs">
              <span className="text-caption-bold uppercase tracking-widest text-primary">
                Studio Charter
              </span>
              <h2 className="text-heading-lg font-semibold text-ink-deep">Operating Principles</h2>
            </div>
            <p className="max-w-[28rem] text-body-sm text-secondary">
              Four commitments that decide which engagements we take and how every pod is run. They
              are contractual, not aspirational.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p) => (
              <div
                key={p.n}
                className="flex flex-col gap-base rounded-lg bg-canvas p-xxl shadow-sm transition-all hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-primary">
                  <Icon name={p.icon} size={20} />
                </div>
                <div className="flex flex-col gap-xs">
                  <span className="text-caption-bold text-stone">PRINCIPLE // {p.n}</span>
                  <h3 className="text-heading-sm font-semibold text-ink-deep">{p.title}</h3>
                </div>
                <p className="text-body-sm leading-relaxed text-secondary">{p.copy}</p>
                <span className="mt-auto flex items-center gap-1 pt-base text-caption-bold text-primary">
                  {p.rule}
                  <Icon name="chevron_right" size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="w-full bg-canvas px-xxl py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex max-w-2xl flex-col gap-xs">
            <span className="text-caption-bold uppercase tracking-widest text-primary">
              Practice Leads
            </span>
            <h2 className="text-heading-lg font-semibold text-ink-deep">
              The people who sign the architecture
            </h2>
            <p className="text-body-md text-secondary">
              Each practice is led by an engineer who still ships. Engagement scoping, RFC sign-off,
              and production escalation all route through the same person.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-xl md:grid-cols-2">
            {LEADERSHIP.map((person) => (
              <article
                key={person.name}
                className="flex flex-col gap-lg rounded-lg bg-surface-soft p-xxl transition-colors duration-200 hover:bg-surface-container-low"
              >
                <div className="flex items-center gap-base">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-body-md-bold font-bold text-primary">
                    {person.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-heading-sm font-semibold text-ink-deep">
                      {person.name}
                    </span>
                    <span className="text-caption-bold uppercase tracking-wider text-primary">
                      {person.role}
                    </span>
                  </div>
                </div>
                <p className="text-body-sm leading-relaxed text-charcoal">{person.bio}</p>
                <div className="flex flex-wrap gap-xs">
                  {person.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-canvas px-sm py-xxs text-caption-bold text-ink-body"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full bg-surface-soft px-xxl py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex flex-col justify-between gap-base md:flex-row md:items-end">
            <div className="flex flex-col gap-xs">
              <span className="text-caption-bold uppercase tracking-widest text-primary">
                Studio Record
              </span>
              <h2 className="text-heading-lg font-semibold text-ink-deep">Ten Years of Cutovers</h2>
            </div>
            <p className="max-w-[28rem] text-body-sm text-secondary">
              Growth has been deliberate. Headcount tracks the number of engagements we can staff at
              Staff level — never the other way round.
            </p>
          </div>

          <div className="flex flex-col rounded-lg bg-canvas p-xxl shadow-sm">
            {TIMELINE.map(([year, title, copy], i) => (
              <div
                key={year}
                className={`flex flex-col gap-xs py-base md:flex-row md:items-baseline md:gap-xxl ${
                  i > 0 ? "border-t border-hairline-soft" : ""
                }`}
              >
                <span className="w-20 shrink-0 font-display text-heading-sm font-semibold text-primary">
                  {year}
                </span>
                <div className="flex flex-col gap-xxs">
                  <span className="text-body-sm-bold text-ink-deep">{title}</span>
                  <span className="text-body-sm text-charcoal">{copy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="w-full bg-canvas px-xxl py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex max-w-2xl flex-col gap-xs">
            <span className="text-caption-bold uppercase tracking-widest text-primary">
              Explicit Non-Goals
            </span>
            <h2 className="text-heading-lg font-semibold text-ink-deep">What we deliberately skip</h2>
            <p className="text-body-md text-secondary">
              Stating the boundaries up front saves everyone a discovery call. If any of these are
              dealbreakers, we are the wrong studio.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-xl md:grid-cols-3">
            {NOT_THIS.map((n) => (
              <div key={n.title} className="flex flex-col gap-base rounded-lg bg-surface-soft p-xxl">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-canvas text-status-critical shadow-sm">
                  <Icon name={n.icon} size={24} />
                </div>
                <h3 className="text-heading-sm font-semibold text-ink-deep">{n.title}</h3>
                <p className="text-body-sm leading-relaxed text-charcoal">{n.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-canvas px-xxl pb-hero">
        <div className="relative mx-auto max-w-shell overflow-hidden rounded-lg bg-ink-deep p-xxxl text-on-primary shadow-xl">
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-primary-container/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-xxxl lg:flex-row lg:items-center">
            <div className="flex max-w-2xl flex-col gap-base">
              <span className="inline-flex items-center gap-xs self-start rounded-full bg-canvas/10 px-base py-xxs text-caption-bold uppercase text-on-primary-container">
                <span className="h-2 w-2 animate-ping rounded-full bg-accent-electric" />
                Two Squads Open For Q2/Q3
              </span>
              <h2 className="text-display-lg-mobile font-semibold tracking-tight text-on-primary md:text-display-lg">
                Want to meet the engineers before you commit?
              </h2>
              <p className="text-subtitle-md leading-relaxed text-hairline">
                Every engagement starts with a 45-minute architectural review led by the Principal
                who would run your pod. No sales engineer, no deck — your topology and our questions.
              </p>
              <div className="flex items-start gap-xs pt-xs text-caption text-secondary-fixed-dim">
                <Icon name="verified" className="mt-0.5 shrink-0 text-primary-fixed" />
                Mutual NDA signed before any architecture or source is shared.
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-base sm:flex-row lg:flex-col">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-xs rounded-full bg-primary-container px-xxxl py-base text-center text-body-md-bold text-on-primary shadow-md transition-colors duration-200 hover:bg-primary"
              >
                Schedule Technical Discovery
                <Icon name="calendar_month" size={20} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-xs rounded-full bg-canvas/10 px-xxxl py-base text-center text-body-md-bold text-on-primary transition-colors duration-200 hover:bg-canvas/20"
              >
                Review Engagement Models
                <Icon name="arrow_forward" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
