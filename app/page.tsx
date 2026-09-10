import Link from "next/link";
import { Icon } from "@/components/icon";
import { MediaFrame } from "@/components/media-frame";

const CLIENTS = [
  ["STRIPE", "Partner"],
  ["RAMP", "Platform"],
  ["RETOOL", "Infrastructure"],
  ["VERCEL", "Edge Studio"],
  ["LINEAR", "Core Sync"],
];

const SPRINT_HEALTH = [
  { label: "Production Deploy Cadence", value: "4.8 deploys / day", pct: 92, bar: "bg-primary-container" },
  { label: "Automated Test Coverage", value: "96.4% avg", pct: 96, bar: "bg-accent-electric" },
  { label: "Mean Time To Recovery (MTTR)", value: "< 8.4 mins", pct: 98, bar: "bg-status-success" },
];

const METRICS = [
  {
    label: "Capital Scale",
    icon: "account_balance",
    iconTone: "text-primary-container",
    value: "$4.2B+",
    copy: "Client platform transaction volume powered continuously without downtime.",
  },
  {
    label: "System Resilience",
    icon: "check_circle",
    iconTone: "text-status-success",
    value: "99.999%",
    copy: "Rigorous production SLA uptime across multi-region distributed nodes.",
  },
  {
    label: "Delivery Record",
    icon: "rocket_launch",
    iconTone: "text-accent-electric",
    value: "45+",
    copy: "Enterprise platforms shipped to live production on time and on budget.",
  },
];

const SERVICES = [
  {
    icon: "developer_mode_tv",
    title: "Full-Lifecycle Product Engineering",
    copy: "Zero-to-one MVP conceptualization through to enterprise-grade web & mobile production systems. Fluid micro-interactions, responsive architectures, and accessible design systems.",
    bullets: [
      "Next.js & React Server Components",
      "React Native & Swift Core iOS",
      "Micro-Frontend Federation",
    ],
  },
  {
    icon: "cloud_sync",
    title: "Cloud Architecture & High-Scale Systems",
    copy: "Distributed system modeling, asynchronous event buses, multi-region database replication, and fault-tolerant cloud environments designed for uninterrupted business continuity.",
    bullets: [
      "Kubernetes & Helm Orchestration",
      "Apache Kafka & Event Sourcing",
      "Multi-Cloud Terraform IaC",
    ],
  },
  {
    icon: "neurology",
    title: "AI Systems & Applied Machine Learning",
    copy: "Custom agentic LLM workflows, Retrieval-Augmented Generation (RAG), vector database optimization, custom fine-tuning pipelines, and low-latency edge inference deployment.",
    bullets: [
      "Vector DBs: Pinecone & pgvector",
      "LangChain, LlamaIndex, Semantic Routers",
      "High-Throughput TensorRT Inference",
    ],
  },
  {
    icon: "troubleshoot",
    title: "Technical Audits & Modernization",
    copy: "Surgical legacy monolith strangulation, security and vulnerability remediation, bottleneck discovery, and strategic codebase optimization for enterprise mergers and growth phases.",
    bullets: [
      "Monolith to Domain Services",
      "Database Schema Profiling & Indexing",
      "Zero-Downtime Data Migrations",
    ],
  },
];

const PROTOCOL = [
  {
    step: "01",
    when: "Week 1–2",
    title: "Architecture Blueprint & Discovery",
    copy: "Deep-dive technical assessment, data model mapping, architectural specification document (RFC), and production roadmap crystallization.",
    deliverable: "Comprehensive RFC + Schema",
  },
  {
    step: "02",
    when: "Sprint Setup",
    title: "Dedicated Cross-Functional Squad",
    copy: "We deploy a tailored pod of Staff Software Engineers, Cloud Architects, and automated QA specialists directly integrated into your Slack, Linear, and Git.",
    deliverable: "Staging CI/CD Environment",
  },
  {
    step: "03",
    when: "Continuous",
    title: "CI/CD & Production Release Cadence",
    copy: "Weekly release milestones with rigorous automated unit, integration, and load testing. Zero-downtime blue/green deployment strategy.",
    deliverable: "Weekly Verified Prod Releases",
  },
  {
    step: "04",
    when: "Long-Term Handover",
    title: "Knowledge Transfer & Runbooks",
    copy: "Comprehensive system documentation, architectural runbooks, pair programming with internal teams, and seamless ongoing handover.",
    deliverable: "Complete Architecture Runbook",
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
      <section className="relative w-full overflow-hidden bg-canvas">
        <div className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-linear-to-br from-primary-container/10 via-surface-container-high/30 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-20 -z-10 h-[400px] w-[400px] rounded-full bg-surface-container/60 blur-2xl" />

        <div className="mx-auto max-w-shell px-xxl pt-section pb-section-lg">
          <div className="mb-xl inline-flex flex-wrap items-center gap-xs rounded-full bg-surface-container-low px-md py-xxs shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-status-success" />
            <span className="text-caption-bold uppercase tracking-wide text-charcoal">
              Partnership Window
            </span>
            <span className="text-caption text-steel">/</span>
            <span className="text-caption font-medium text-ink-deep">
              Now accepting Q2/Q3 enterprise engineering partnerships
            </span>
            <Icon name="arrow_forward" size={14} className="text-primary" />
          </div>

          <div className="grid grid-cols-1 items-end gap-xxxl lg:grid-cols-12">
            <div className="flex flex-col gap-base lg:col-span-8">
              <h1 className="max-w-4xl text-display-lg-mobile font-bold tracking-tight text-ink-deep md:text-display-lg lg:text-hero-display">
                We architect &amp; build{" "}
                <span className="text-primary-container">mission-critical software</span> for
                industry leaders.
              </h1>
              <p className="mt-xs max-w-2xl font-display text-subtitle-md font-light text-secondary md:text-heading-md">
                From zero-to-one digital platforms to distributed real-time cloud architectures.
                High-velocity engineering squads shipping production code for enterprises and
                high-growth scaleups.
              </p>
              <div className="mt-lg flex flex-wrap items-center gap-base">
                <Link
                  href="#discovery-portal"
                  className="inline-flex items-center justify-center rounded-full bg-ink-deep px-xxl py-[14px] text-body-sm-bold text-canvas shadow-md transition-all duration-200 hover:bg-charcoal hover:shadow-lg"
                >
                  Schedule Technical Discovery
                </Link>
                <Link
                  href="#featured-work"
                  className="inline-flex items-center justify-center gap-xs rounded-full bg-surface-container-low px-xxl py-[14px] text-body-sm-bold text-ink-deep transition-colors duration-200 hover:bg-surface-container"
                >
                  Explore Case Studies
                  <Icon name="east" />
                </Link>
              </div>
            </div>

            {/* Sprint Health Index panel */}
            <div className="flex flex-col gap-base rounded-xl bg-surface-soft p-xxl shadow-sm lg:col-span-4">
              <div className="flex items-center justify-between pb-sm">
                <div className="flex items-center gap-xs">
                  <Icon name="terminal" size={20} className="text-primary" />
                  <span className="text-caption-bold uppercase tracking-wider text-ink-deep">
                    Sprint Health Index
                  </span>
                </div>
                <span className="rounded-full bg-status-success/15 px-xs py-xxs text-caption-bold text-status-success">
                  100% OPERATIONAL
                </span>
              </div>

              <div className="flex flex-col gap-sm">
                {SPRINT_HEALTH.map((row) => (
                  <div key={row.label} className="flex flex-col gap-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm text-secondary">{row.label}</span>
                      <span className="text-body-sm-bold text-ink-deep">{row.value}</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container-high">
                      <div
                        className={`h-full rounded-full ${row.bar}`}
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-sm text-caption text-secondary">
                <span className="flex items-center gap-xxs">
                  <Icon name="verified_user" size={14} className="text-primary" />
                  Security-first delivery
                </span>
                <span>AWS / GCP / Azure</span>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-section-lg pt-xl">
            <p className="mb-xl text-caption-bold uppercase tracking-widest text-steel">
              Architected in production for elite engineering organizations
            </p>
            <div className="grid grid-cols-2 items-center gap-xl opacity-80 transition-opacity hover:opacity-100 md:grid-cols-5">
              {CLIENTS.map(([name, role]) => (
                <div key={name} className="flex items-center gap-xs">
                  <span className="font-display text-heading-sm font-bold tracking-tighter text-ink-deep">
                    {name}
                  </span>
                  <span className="text-caption text-steel">/ {role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section className="w-full bg-surface-soft py-section">
        <div className="mx-auto max-w-shell px-xxl">
          <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label} className="flex flex-col gap-xs rounded-xl bg-canvas p-xxl shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-caption-bold uppercase tracking-wider text-steel">
                    {m.label}
                  </span>
                  <Icon name={m.icon} size={20} className={m.iconTone} />
                </div>
                <div className="font-display text-display-lg font-bold text-ink-deep">{m.value}</div>
                <p className="text-body-sm text-secondary">{m.copy}</p>
              </div>
            ))}
            <div className="flex flex-col gap-xs rounded-xl border-2 border-primary-container/20 bg-canvas p-xxl shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-caption-bold uppercase tracking-wider text-primary">
                  Efficiency Multiplier
                </span>
                <Icon name="speed" size={20} className="text-primary-container" />
              </div>
              <div className="font-display text-display-lg font-bold text-primary-container">3.4x</div>
              <p className="text-body-sm text-charcoal">
                Average velocity acceleration compared to conventional in-house hiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section id="featured-work" className="w-full bg-canvas py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-section-sm px-xxl">
          <div className="flex flex-col justify-between gap-base md:flex-row md:items-end">
            <div className="flex flex-col gap-xs">
              <div className="flex items-center gap-xs">
                <span className="h-2.5 w-2.5 rounded-full bg-primary-container" />
                <span className="text-caption-bold uppercase tracking-wider text-primary">
                  Selected Case Studies
                </span>
              </div>
              <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
                High-consequence architectures engineered to perform
              </h2>
            </div>
            <Link
              href="/case-studies/fintech-core-banking"
              className="inline-flex items-center gap-xs text-body-sm-bold text-primary-container transition-colors hover:text-primary"
            >
              View All System Implementations
              <Icon name="arrow_forward" />
            </Link>
          </div>

          <div className="flex flex-col gap-xxxl">
            {/* Featured split */}
            <div className="grid grid-cols-1 items-center gap-xxl overflow-hidden rounded-xl bg-surface-soft p-xxl shadow-sm lg:grid-cols-12 lg:p-xxxl">
              <div className="flex flex-col gap-base lg:col-span-7">
                <div className="flex flex-wrap items-center gap-xs">
                  <span className="rounded-full bg-primary-container px-xs py-xxs text-caption-bold text-canvas">
                    FINTECH INFRASTRUCTURE
                  </span>
                  <span className="rounded-full bg-surface-container px-xs py-xxs text-caption-bold text-charcoal">
                    SERIES D
                  </span>
                  <span className="rounded-full bg-canvas px-xs py-xxs text-caption text-secondary">
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
                        className="rounded-full bg-canvas px-md py-xxs text-caption-bold text-ink-body shadow-sm"
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
                  media:
                    "Topological supply chain route planner with interconnected freight lanes, cargo nodes, and real-time dispatch heatmaps.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="flex flex-col justify-between rounded-xl bg-canvas p-xxl shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex flex-col gap-base">
                    <div className="relative mb-sm h-56 w-full overflow-hidden rounded-md">
                      <MediaFrame icon={c.icon} label={c.media} />
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <div className="mb-section-sm flex max-w-2xl flex-col gap-xs">
            <span className="text-caption-bold uppercase tracking-widest text-primary">
              Core Disciplines
            </span>
            <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
              Surgical engineering capabilities across the entire technological substrate
            </h2>
            <p className="mt-xxs text-body-md text-secondary">
              We embed elite specialized squads capable of taking on the problems other teams decline
              due to architectural complexity or performance risk.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="flex flex-col justify-between rounded-xl bg-canvas p-xxl shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col gap-base">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-container/10 text-primary-container">
                    <Icon name={s.icon} size={24} />
                  </div>
                  <h3 className="text-heading-sm font-bold text-ink-deep">{s.title}</h3>
                  <p className="text-body-sm text-secondary">{s.copy}</p>
                </div>
                <ul className="flex flex-col gap-xs pt-xl text-body-sm text-charcoal">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-xs">
                      <Icon name="check" size={16} className="mt-0.5 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATING PROTOCOL */}
      <section className="w-full bg-canvas py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <div className="mb-section-sm flex max-w-[36rem] flex-col gap-xs">
            <span className="text-caption-bold uppercase tracking-widest text-primary">
              The Operating Protocol
            </span>
            <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
              How our high-velocity squads integrate &amp; ship
            </h2>
            <p className="text-body-md text-secondary">
              No junior bench staff or speculative management. You work directly with Staff Engineers,
              seasoned distributed architects, and dedicated delivery leads.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-4">
            {PROTOCOL.map((p) => (
              <div
                key={p.step}
                className="flex flex-col gap-base rounded-xl bg-surface-soft p-xxl shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-deep text-caption-bold text-canvas">
                    {p.step}
                  </span>
                  <span className="text-caption-bold uppercase text-primary">{p.when}</span>
                </div>
                <h4 className="text-heading-sm font-semibold text-ink-deep">{p.title}</h4>
                <p className="text-body-sm text-secondary">{p.copy}</p>
                <div className="flex items-center gap-xxs pt-sm text-caption text-charcoal">
                  <Icon name="done" size={16} className="text-status-success" />
                  Deliverable: {p.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <div className="mb-section-sm flex items-center justify-between">
            <div className="flex flex-col gap-xxs">
              <span className="text-caption-bold uppercase tracking-wider text-primary">
                Technical Peer Validation
              </span>
              <h2 className="text-heading-lg font-semibold text-ink-deep">
                Endorsed by engineering leadership
              </h2>
            </div>
            <div className="hidden items-center gap-xs md:flex">
              <Icon name="verified" size={20} className="text-status-success" />
              <span className="text-body-sm-bold text-charcoal">100% Client Retention Rate</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between rounded-xl bg-canvas p-xxl shadow-sm"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="discovery-portal" className="w-full bg-canvas py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <div className="relative overflow-hidden rounded-xl bg-ink-deep p-xxl text-canvas shadow-xl lg:p-hero">
            <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-primary-container/20 blur-3xl" />
            <div className="pointer-events-none absolute top-0 right-1/3 h-64 w-64 rounded-full bg-accent-electric/10 blur-2xl" />

            <div className="relative z-10 flex max-w-3xl flex-col gap-base">
              <div className="inline-flex w-fit items-center gap-xs rounded-full bg-surface-container-highest/10 px-md py-xxs">
                <span className="h-2 w-2 rounded-full bg-accent-electric" />
                <span className="text-caption-bold uppercase tracking-wider text-tertiary-fixed">
                  Enterprise Engagement
                </span>
              </div>
              <h2 className="text-display-lg-mobile font-bold tracking-tight text-canvas md:text-display-lg lg:text-hero-display">
                Have a critical engineering challenge? Let&rsquo;s build together.
              </h2>
              <p className="max-w-2xl text-subtitle-md text-secondary-container">
                Schedule a confidential 45-minute architectural review with our Principal Engineers.
                We analyze your tech stack, define constraints, and deliver an actionable technical
                roadmap.
              </p>

              <form
                className="mt-lg flex flex-col items-stretch gap-base sm:flex-row sm:items-center"
                action="#"
              >
                <div className="max-w-[28rem] flex-1">
                  <label className="sr-only" htmlFor="work-email">
                    Work Email
                  </label>
                  <input
                    id="work-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter corporate email address..."
                    className="h-[52px] w-full rounded-full bg-canvas/10 px-xxl text-body-sm text-canvas placeholder:text-steel transition-all focus:bg-canvas/15 focus:outline-2 focus:outline-accent-electric"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-[52px] items-center justify-center rounded-full bg-primary-container px-xxxl text-body-sm-bold text-canvas shadow-md transition-colors duration-200 hover:bg-primary"
                >
                  Book a Technical Call
                </button>
              </form>

              <div className="flex flex-wrap items-center gap-xl pt-base text-caption text-stone">
                {[
                  ["schedule", "Direct response within 24 business hours"],
                  ["lock", "Standard Mutual Non-Disclosure Agreement"],
                  ["person_check", "Staff Engineer level dialogue guaranteed"],
                ].map(([icon, text]) => (
                  <span key={text} className="flex items-center gap-xxs">
                    <Icon name={icon} size={16} className="text-accent-electric" />
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
