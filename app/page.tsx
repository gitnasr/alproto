import Link from "next/link";
import { Icon } from "@/components/icon";
import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";
import { HeroNetwork } from "@/components/hero-network";
import { SOLUTIONS } from "@/lib/solutions";
import { SERVICES } from "@/lib/services";

/* Placeholder photography (Unsplash CDN). Swap for the team's own shots —
   each slot keeps its art-direction caption via the MediaFrame label. */
const PHOTOS = {
  fintech:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70",
  health:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=70",
  logistics:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=70",
};

const STACK = [
  "TypeScript",
  "Rust",
  "Go",
  "React / Next.js",
  "Kubernetes",
  "PostgreSQL",
  "Apache Kafka",
  "PyTorch",
];

/** The situations clients actually arrive with. */
const SITUATIONS = [
  {
    icon: "pause_circle",
    label: "Stalled Build",
    title: "The project has lost momentum",
    copy: "Deadlines keep moving, progress is hard to measure, and nobody can say with confidence what is left to do.",
  },
  {
    icon: "inventory",
    label: "Inherited Codebase",
    title: "The team that built it is gone",
    copy: "An agency moved on or key engineers left, and what remains is undocumented code nobody wants to touch.",
  },
  {
    icon: "alt_route",
    label: "Unfinished Migration",
    title: "The cutover never happened",
    copy: "A migration or rewrite was started and abandoned partway, leaving two systems to maintain instead of one.",
  },
  {
    icon: "trending_up",
    label: "Scaling Wall",
    title: "It works, but not at this size",
    copy: "The build was fine as a prototype and is now buckling under real users, real data, and real uptime expectations.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Nexus brought the technical rigor of Silicon Valley Staff engineers with the execution speed of a boutique squad. They re-architected our core transaction pipeline without a single millisecond of client-facing downtime.",
    name: "Marcus Vance",
    role: "Chief Technology Officer · Series C FinTech",
    initials: "MV",
  },
  {
    quote:
      "They delivered our multi-tenant SaaS architecture three months ahead of schedule with zero defect rollbacks. Their codebase quality set a permanent standard for our own incoming developers.",
    name: "Elena Rostova",
    role: "VP of Product · Global Logistics Enterprise",
    initials: "ER",
  },
];

/** Signature accent: the electric period that closes a heading. */
function Dot() {
  return <span className="text-accent-electric">.</span>;
}

function Stars() {
  return (
    <div className="flex items-center gap-xxs text-status-warning">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-ink-deep text-canvas">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full bg-primary-container/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-32 h-[420px] w-[420px] rounded-full bg-accent-electric/10 blur-3xl" />

        <div className="relative mx-auto max-w-shell px-xxl pt-section pb-section-lg">
          <Reveal>
            <div className="mb-xl inline-flex flex-wrap items-center gap-xs rounded-full bg-canvas/10 px-md py-xxs backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-status-success" />
              <span className="text-caption-bold uppercase tracking-wide text-canvas/80">
                Engagement Window
              </span>
              <span className="text-caption text-canvas/40">/</span>
              <span className="text-caption font-medium text-canvas">
                Now taking on Q3/Q4 completion engagements
              </span>
              <Icon name="arrow_forward" size={14} className="text-accent-electric" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 items-center gap-xxxl lg:grid-cols-12">
            <div className="flex flex-col gap-base lg:col-span-6">
              <Reveal delay={100}>
                <h1 className="max-w-4xl text-display-lg-mobile font-bold tracking-tight text-canvas md:text-display-lg lg:text-hero-display">
                  We take unfinished software{" "}
                  <span className="text-accent-electric">all the way to production</span>
                  <Dot />
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-xs max-w-2xl font-display text-subtitle-md font-light text-stone md:text-heading-md">
                  Stalled build, inherited codebase, migration that never finished? We assess what
                  exists, take ownership of the remaining work, and deliver it — then hand it back
                  documented and running.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-lg flex flex-wrap items-center gap-base">
                  <Link
                    href="#discovery-portal"
                    className="inline-flex items-center justify-center rounded-full bg-primary-container px-xxl py-[14px] text-body-sm-bold text-on-primary shadow-md transition-all duration-200 hover:bg-primary hover:shadow-lg"
                  >
                    Request a Project Assessment
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-xs rounded-full border border-canvas/25 px-xxl py-[14px] text-body-sm-bold text-canvas transition-colors duration-200 hover:border-canvas/50 hover:bg-canvas/10"
                  >
                    See How We Work
                    <Icon name="east" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Animated capability network */}
            <div className="lg:col-span-6">
              <div className="mx-auto h-[380px] w-full max-w-[560px] sm:h-[460px] lg:h-[560px] lg:max-w-none">
                <HeroNetwork />
              </div>
            </div>
          </div>

          {/* Stack strip */}
          <Reveal delay={150}>
            <div className="mt-section-lg border-t border-canvas/10 pt-xl">
              <p className="mb-lg text-caption-bold uppercase tracking-widest text-canvas/40">
                Production stack, battle-tested at scale
              </p>
              <div className="flex flex-wrap items-center gap-x-xxl gap-y-base">
                {STACK.map((name) => (
                  <span
                    key={name}
                    className="font-display text-heading-sm font-bold tracking-tight text-canvas/60 transition-colors hover:text-canvas"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE TAKE ON */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="mb-section-sm flex flex-col justify-between gap-xl md:flex-row md:items-end">
              <div className="flex max-w-2xl flex-col gap-xs">
                <span className="text-caption-bold uppercase tracking-widest text-primary">
                  What We Take On
                </span>
                <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
                  Projects arrive with us in one of four states
                  <Dot />
                </h2>
                <p className="mt-xxs text-body-md text-secondary">
                  Almost none of them went wrong for interesting reasons. Scope moved, someone key
                  left, a deadline that was never real got committed to anyway. That is what happens
                  when a team is asked to move fast for long enough — and all of it is recoverable.
                </p>
              </div>
              <Link
                href="/project-check"
                className="group inline-flex shrink-0 items-center gap-base rounded-xl bg-canvas p-xl shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-container/10 text-primary-container transition-colors group-hover:bg-primary-container group-hover:text-canvas">
                  <Icon name="fact_check" size={22} />
                </span>
                <span className="flex flex-col gap-xxs text-left">
                  <span className="text-body-sm-bold text-ink-deep">
                    Not sure which one you&rsquo;re in?
                  </span>
                  <span className="text-caption text-secondary">
                    Take the two-minute project check
                  </span>
                </span>
                <Icon
                  name="arrow_forward"
                  size={20}
                  className="shrink-0 text-steel transition-colors group-hover:text-primary"
                />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-4">
            {SITUATIONS.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="flex h-full flex-col gap-base rounded-xl bg-canvas p-xxl shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-container/10 text-primary-container">
                    <Icon name={s.icon} size={24} />
                  </div>
                  <span className="text-caption-bold uppercase tracking-wider text-primary">
                    {s.label}
                  </span>
                  <h3 className="text-heading-sm font-bold text-ink-deep">{s.title}</h3>
                  <p className="text-body-sm text-secondary">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS — dark editorial split */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary-container/10 blur-3xl" />
        <div className="relative mx-auto max-w-shell px-xxl">
          <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal className="flex flex-col gap-base lg:sticky lg:top-32">
                <span className="text-caption-bold uppercase tracking-widest text-accent-electric">
                  Solutions
                </span>
                <h2 className="text-heading-lg font-semibold tracking-tight text-canvas">
                  Five domains we finish work in
                  <Dot />
                </h2>
                <p className="text-body-md text-stone">
                  Most engagements touch more than one. Whatever the domain, the commitment is the
                  same: the remaining work delivered and handed back maintainable.
                </p>
                <Link
                  href="/solutions"
                  className="inline-flex w-fit items-center gap-xs pt-base text-body-sm-bold text-canvas transition-colors hover:text-accent-electric"
                >
                  Explore All Solutions
                  <Icon name="arrow_forward" />
                </Link>
              </Reveal>
            </div>

            <div className="flex flex-col lg:col-span-8">
              {SOLUTIONS.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 2) * 100}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="group flex items-start gap-xl border-b border-canvas/10 py-xl transition-colors hover:border-accent-electric/40"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent-electric/15 text-accent-electric transition-colors group-hover:bg-accent-electric group-hover:text-ink-deep">
                      <Icon name={s.icon} size={24} />
                    </span>
                    <span className="flex flex-1 flex-col gap-xxs">
                      <span className="font-display text-heading-sm font-bold text-canvas transition-colors group-hover:text-accent-electric">
                        {s.name}
                      </span>
                      <span className="text-body-sm text-stone">{s.tagline}</span>
                    </span>
                    <Icon
                      name="arrow_outward"
                      size={22}
                      className="mt-xs shrink-0 text-canvas/35 transition-colors group-hover:text-accent-electric"
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="w-full bg-canvas py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="mb-section-sm flex flex-col justify-between gap-base md:flex-row md:items-end">
              <div className="flex max-w-2xl flex-col gap-xs">
                <span className="text-caption-bold uppercase tracking-widest text-primary">
                  The Engagement Arc
                </span>
                <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
                  How a stalled project becomes a delivered one
                  <Dot />
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-xs text-body-sm-bold text-primary-container transition-colors hover:text-primary"
              >
                See the Full Process
                <Icon name="arrow_forward" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-xl sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 100}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group flex h-full flex-col gap-base rounded-xl bg-surface-soft p-xxl transition-colors hover:bg-surface-container-low"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-deep text-caption-bold text-canvas">
                      {s.step}
                    </span>
                    <Icon name={s.icon} size={22} className="text-primary-container" />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-ink-deep transition-colors group-hover:text-primary">
                    {s.name}
                  </h3>
                  <p className="text-body-sm text-secondary">{s.tagline}</p>
                  <div className="mt-auto flex items-center gap-xxs pt-base text-caption text-charcoal">
                    <Icon name="done" size={16} className="text-status-success" />
                    {s.deliverable}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section id="featured-work" className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-section-sm px-xxl">
          <Reveal>
            <div className="flex flex-col justify-between gap-base md:flex-row md:items-end">
              <div className="flex flex-col gap-xs">
                <span className="text-caption-bold uppercase tracking-wider text-primary">
                  Selected Case Studies
                </span>
                <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
                  Work carried across the finish line
                  <Dot />
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-xs text-body-sm-bold text-primary-container transition-colors hover:text-primary"
              >
                View All Case Studies
                <Icon name="arrow_forward" />
              </Link>
            </div>
          </Reveal>

          <div className="flex flex-col gap-xxxl">
            {/* Featured split */}
            <Reveal>
              <div className="grid grid-cols-1 items-center gap-xxl overflow-hidden rounded-xl bg-canvas p-xxl shadow-sm lg:grid-cols-12 lg:p-xxxl">
                <div className="flex flex-col gap-base lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-xs">
                    <span className="rounded-full bg-primary-container px-xs py-xxs text-caption-bold text-canvas">
                      FINTECH INFRASTRUCTURE
                    </span>
                    <span className="rounded-full bg-surface-container px-xs py-xxs text-caption-bold text-charcoal">
                      SERIES D
                    </span>
                    <span className="rounded-full bg-surface-soft px-xs py-xxs text-caption text-secondary">
                      Global Tier-1 Banking Partner
                    </span>
                  </div>
                  <h3 className="text-heading-lg font-bold text-ink-deep">
                    Fintech Core Banking Re-architecture
                  </h3>
                  <p className="text-subtitle-md text-secondary">
                    Next-generation event-driven ledger handling over 50,000 transactions per second
                    with strict ACID guarantees, atomic reconciliation, and zero ledger drift.
                  </p>
                  <div className="flex flex-wrap gap-xs pt-xs">
                    {["Rust", "Apache Kafka", "Kubernetes", "AWS Aurora Multi-Master", "gRPC"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-surface-soft px-md py-xxs text-caption-bold text-ink-body"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-xxl pt-base">
                    {[
                      ["40ms", "p99 Transaction Latency", "text-primary"],
                      ["50k+", "Sustained TPS", "text-ink-deep"],
                      ["0.00%", "Reconciliation Variance", "text-status-success"],
                    ].map(([value, label, tone], i) => (
                      <div key={label} className="flex items-center gap-xxl">
                        {i > 0 && <span className="hidden h-10 w-px bg-hairline-soft sm:block" />}
                        <div className="flex flex-col">
                          <span className={`font-display text-heading-lg font-bold ${tone}`}>
                            {value}
                          </span>
                          <span className="text-caption text-secondary">{label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-base">
                    <Link
                      href="/case-studies/fintech-core-banking"
                      className="inline-flex items-center gap-xs text-body-sm-bold text-ink-deep transition-colors hover:text-primary-container"
                    >
                      Read Case Study
                      <Icon name="arrow_forward" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-[360px] w-full overflow-hidden rounded-xl shadow-md">
                    <MediaFrame
                      src={PHOTOS.fintech}
                      icon="monitoring"
                      label="Dark engineering terminal showing high-speed financial ledger metrics, telemetry graphs, and streaming Kafka partition monitors."
                    />
                    <div className="absolute inset-0 flex items-end bg-linear-to-t from-ink-deep/60 via-transparent to-transparent p-xl">
                      <div className="flex items-center gap-xs text-caption-bold text-canvas">
                        <Icon name="verified" className="text-accent-electric" />
                        Live in AWS us-east-1 and eu-central-1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Two-up pair */}
            <div className="grid grid-cols-1 gap-xxxl md:grid-cols-2">
              {[
                {
                  badge: "HEALTHCARE AI",
                  tags: ["ENTERPRISE HEALTHTECH", "REGULATED ENVIRONMENT"],
                  title: "AI-Powered Medical Diagnostic Suite",
                  copy: "Sub-second real-time inference pipeline and high-performance WebGL DICOM visualizer enabling clinical oncology teams to diagnose early pathology with precision.",
                  stack: ["PyTorch", "WebGL / Three.js", "Next.js 14", "Google Cloud Vertex"],
                  metric: "99.2%",
                  metricLabel: "Diagnostic Accuracy",
                  metricTone: "text-status-success",
                  icon: "biotech",
                  photo: PHOTOS.health,
                  media:
                    "Medical diagnostic workstation rendering 3D DICOM volumetric MRI scans and neural network feature maps.",
                },
                {
                  badge: "DISTRIBUTED GRAPH",
                  tags: ["GLOBAL LOGISTICS", "MULTI-CARRIER FLEET"],
                  title: "Global B2B Supply Chain & Route Compute",
                  copy: "Dynamic route optimization engine powered by distributed graph compute handling 2.4M multi-modal shipment vectors across 40 countries every 60 seconds.",
                  stack: ["Go (Golang)", "GraphQL Mesh", "Timescale Postgres", "Redis Enterprise"],
                  metric: "-34%",
                  metricLabel: "Transit Route Latency",
                  metricTone: "text-primary-container",
                  icon: "route",
                  photo: PHOTOS.logistics,
                  media:
                    "Topological supply chain route planner with interconnected freight lanes, cargo nodes, and real-time dispatch heatmaps.",
                },
              ].map((c, i) => (
                <Reveal key={c.title} delay={i * 120}>
                  <div className="flex h-full flex-col justify-between rounded-xl bg-canvas p-xxl shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex flex-col gap-base">
                      <div className="relative mb-sm h-56 w-full overflow-hidden rounded-md">
                        <MediaFrame src={c.photo} icon={c.icon} label={c.media} />
                        <div className="absolute top-base left-base flex items-center gap-xxs rounded-full bg-canvas/90 px-xs py-xxs text-caption-bold text-primary backdrop-blur">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {c.badge}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-xs">
                        {c.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-surface-container-low px-xs py-xxs text-caption-bold text-secondary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-heading-sm font-bold text-ink-deep">{c.title}</h3>
                      <p className="text-body-md text-secondary">{c.copy}</p>
                      <div className="flex flex-wrap gap-xs pt-xs">
                        {c.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-surface-soft px-xs py-xxs text-caption text-ink-body"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-base flex items-center justify-between pt-xl">
                      <div>
                        <span className={`font-display text-heading-sm font-bold ${c.metricTone}`}>
                          {c.metric}
                        </span>
                        <span className="block text-caption text-secondary">{c.metricLabel}</span>
                      </div>
                      <Link
                        href="/case-studies/fintech-core-banking"
                        className="inline-flex items-center gap-xxs text-body-sm-bold text-primary-container transition-colors hover:text-primary"
                      >
                        Read Case Study
                        <Icon name="arrow_forward" size={16} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full bg-canvas py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="mb-section-sm flex items-center justify-between">
              <div className="flex flex-col gap-xxs">
                <span className="text-caption-bold uppercase tracking-wider text-primary">
                  Client Validation
                </span>
                <h2 className="text-heading-lg font-semibold text-ink-deep">
                  Endorsed by engineering leadership
                  <Dot />
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <div className="flex h-full flex-col justify-between rounded-xl bg-surface-soft p-xxl shadow-sm">
                  <div className="flex flex-col gap-base">
                    <Stars />
                    <blockquote className="font-display text-heading-sm leading-relaxed font-normal text-ink-deep">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </div>
                  <div className="mt-base flex items-center gap-base pt-xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-display text-body-md-bold font-bold text-primary">
                      {t.initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-body-md-bold text-ink-deep">{t.name}</span>
                      <span className="text-caption text-secondary">{t.role}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="discovery-portal"
        className="relative w-full overflow-hidden bg-ink-deep py-hero text-canvas"
      >
        <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-primary-container/20 blur-3xl" />
        <div className="pointer-events-none absolute top-0 right-1/3 h-64 w-64 rounded-full bg-accent-electric/10 blur-2xl" />

        <div className="relative mx-auto max-w-shell px-xxl">
          <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="flex flex-col gap-base">
                <div className="inline-flex w-fit items-center gap-xs rounded-full bg-canvas/10 px-md py-xxs">
                  <span className="h-2 w-2 rounded-full bg-accent-electric" />
                  <span className="text-caption-bold uppercase tracking-wider text-canvas/70">
                    Start a Conversation
                  </span>
                </div>
                <h2 className="text-display-lg-mobile font-bold tracking-tight text-canvas md:text-display-lg">
                  Tell us where the project stands
                  <Dot />
                </h2>
                <p className="max-w-2xl text-subtitle-md text-stone">
                  Send us the current state — however messy — and we will come back with an honest
                  read on what it takes to finish. No obligation, and no pretending a rescue is
                  simpler than it is.
                </p>

                {/* TODO: no endpoint yet — point `action` at the real form handler
                    (Formspree / Resend / CRM) before this goes live. */}
                <form className="mt-lg flex flex-col gap-base" action="#" method="post">
                  <div className="flex flex-col gap-base sm:flex-row">
                    <div className="flex-1">
                      <label className="sr-only" htmlFor="work-email">
                        Work email
                      </label>
                      <input
                        id="work-email"
                        name="email"
                        type="email"
                        required
                        placeholder="Work email address"
                        className="h-[52px] w-full rounded-full bg-canvas/10 px-xxl text-body-sm text-canvas placeholder:text-steel transition-all focus:bg-canvas/15 focus:outline-2 focus:outline-accent-electric"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="sr-only" htmlFor="company">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Company (optional)"
                        className="h-[52px] w-full rounded-full bg-canvas/10 px-xxl text-body-sm text-canvas placeholder:text-steel transition-all focus:bg-canvas/15 focus:outline-2 focus:outline-accent-electric"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="mb-xs block text-caption-bold uppercase tracking-wider text-canvas/60"
                      htmlFor="situation"
                    >
                      Describe the situation
                    </label>
                    <textarea
                      id="situation"
                      name="situation"
                      rows={4}
                      required
                      placeholder="What was being built, how far it got, and where it stopped. Rough notes are fine — you do not need to tidy it up first."
                      className="w-full rounded-lg bg-canvas/10 px-xl py-base text-body-sm leading-relaxed text-canvas placeholder:text-steel transition-all focus:bg-canvas/15 focus:outline-2 focus:outline-accent-electric"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-[52px] w-full items-center justify-center gap-xs rounded-full bg-primary-container px-xxxl text-body-sm-bold text-canvas shadow-md transition-colors duration-200 hover:bg-primary sm:w-fit"
                  >
                    Request Assessment
                    <Icon name="arrow_forward" size={18} />
                  </button>
                </form>

                <div className="flex flex-wrap items-center gap-xl pt-base text-caption text-stone">
                  {[
                    ["schedule", "Response within 24 business hours"],
                    ["lock", "Mutual NDA before any code review"],
                    ["person_check", "You speak with engineers, not account managers"],
                  ].map(([icon, text]) => (
                    <span key={text} className="flex items-center gap-xxs">
                      <Icon name={icon} size={16} className="text-accent-electric" />
                      {text}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Three ways in */}
            <Reveal delay={150} className="lg:col-span-5">
              <div className="flex flex-col gap-base">
                {[
                  {
                    icon: "fact_check",
                    title: "Check it yourself first",
                    copy: "A two-minute symptom checklist that runs in your browser. No email required.",
                    href: "/project-check",
                    cta: "Take the project check",
                  },
                  {
                    icon: "help",
                    title: "Read the awkward questions",
                    copy: "What if there is no documentation, what if the code cannot be saved, who owns the IP.",
                    href: "/services#faq",
                    cta: "See the FAQ",
                  },
                  {
                    icon: "route",
                    title: "See how an engagement runs",
                    copy: "The six stages from assessment to handover, and what each one ends with.",
                    href: "/services",
                    cta: "See the process",
                  },
                ].map((o) => (
                  <Link
                    key={o.title}
                    href={o.href}
                    className="group flex items-start gap-base rounded-xl border border-canvas/10 bg-canvas/5 p-xl transition-colors hover:border-accent-electric/40 hover:bg-canvas/10"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent-electric/15 text-accent-electric transition-colors group-hover:bg-accent-electric group-hover:text-ink-deep">
                      <Icon name={o.icon} size={22} />
                    </span>
                    <span className="flex flex-col gap-xxs">
                      <span className="text-body-md-bold text-canvas">{o.title}</span>
                      <span className="text-body-sm text-stone">{o.copy}</span>
                      <span className="inline-flex items-center gap-xxs pt-xxs text-caption-bold text-accent-electric">
                        {o.cta}
                        <Icon name="arrow_forward" size={14} />
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
