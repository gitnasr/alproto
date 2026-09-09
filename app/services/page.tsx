import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We embed specialized pods of Staff-level engineers, distributed systems architects, and ML specialists to solve critical performance, scale, and delivery roadblocks.",
};

const QUICK_STATS = [
  {
    icon: "verified_user",
    tag: "STAFF CALIBER",
    title: "Zero Junior Engineers",
    copy: "100% Staff & Principal engineers with proven multi-region production records.",
  },
  {
    icon: "speed",
    tag: "CADENCE",
    title: "2-Week Sprint Velocity",
    copy: "Deployable code shipped directly to production under contractually backed delivery SLAs.",
  },
  {
    icon: "cloud_sync",
    tag: "RESILIENCE",
    title: "Zero-Downtime Guarantee",
    copy: "Blue/green traffic cutovers with automated cryptographic verification and instant rollback proof.",
  },
  {
    icon: "precision_manufacturing",
    tag: "GOVERNANCE",
    title: "Deterministic Quality",
    copy: "Rigorous contract testing, chaos simulation, and verified production runbooks for your team.",
  },
];

type Metric = { label: string; sub: string; value: string; valueTone: string; note: string };

type Discipline = {
  n: string;
  badge: string;
  badgeTone: string;
  title: string;
  copy: string;
  focus: string;
  stackLabel: string;
  stack: string[];
  metric?: Metric;
  sparkline?: { label: string; value: string };
  footerLabel: string;
  footerNote: string;
  cta: string;
};

const DISCIPLINES: Discipline[] = [
  {
    n: "01",
    badge: "Tier-1 Architecture",
    badgeTone: "bg-primary/10 text-primary",
    title: "Full-Lifecycle Core Systems Architecture & Greenfield Builds",
    copy: "End-to-end design and implementation of resilient, distributed backends, transaction clearing ledgers, and low-latency API layers designed for high-concurrency environments.",
    focus:
      "High-concurrency engines, Raft/Paxos consensus, multi-region database topology, zero-allocation microservices, deterministic serialization.",
    stackLabel: "Validated Tech Stack:",
    stack: ["Rust", "Go (Golang)", "ScyllaDB", "Apache Kafka", "AWS Aurora", "gRPC / Protobuf"],
    sparkline: {
      label: "Throughput Under Load (ScyllaDB + Rust Cluster)",
      value: "120K ops/sec p99 < 2.1ms",
    },
    footerLabel: "Deliverables & Deployment",
    footerNote: "6–12 mo. engagement • Pod of 4–6 Staff Engineers",
    cta: "Request Pod RFC",
  },
  {
    n: "02",
    badge: "High-Stakes Cutover",
    badgeTone: "bg-accent-electric/10 text-primary-container",
    title: "Enterprise Legacy Modernization & Monolith Strangulation",
    copy: "De-risking critical Java, .NET, and legacy monolithic databases. We isolate bounded contexts into asynchronous event streams with real-time shadow replication and zero disruption.",
    focus:
      "Parallel-run validation diffing, CDC event pipelines, automated database migration gates, cryptographic verification, circuit breaking.",
    stackLabel: "Validated Tech Stack:",
    stack: [
      "Debezium CDC",
      "Apache Kafka",
      "Kubernetes EKS",
      "Envoy Proxy",
      "OpenTelemetry",
      "PostgreSQL 16",
    ],
    metric: {
      label: "Banking System Cutover Metric",
      sub: "Production legacy core replacement",
      value: "840ms → 40ms",
      valueTone: "text-status-success",
      note: "p99 latency reduction",
    },
    footerLabel: "Deliverables & Deployment",
    footerNote: "Zero-downtime cutover pipeline • Shadow diff audit matrix",
    cta: "Modernization Audit",
  },
  {
    n: "03",
    badge: "GPU & Inference Acceleration",
    badgeTone: "bg-primary-container/10 text-primary-container",
    title: "High-Throughput AI Systems & Specialized ML Infrastructure",
    copy: "Productionizing low-latency inference pipelines, agentic execution runtimes, multi-modal vector search systems, and high-performance WebGPU client interfaces.",
    focus:
      "vLLM inference orchestration, custom TensorRT kernels, localized embedding pipelines, streaming token WebSocket gateways, model distillation.",
    stackLabel: "Validated Tech Stack:",
    stack: ["PyTorch 2.3", "TensorRT-LLM", "Ray Cluster", "pgvector", "ClickHouse", "WebGPU / WGSL"],
    metric: {
      label: "SLA Benchmark Guarantee",
      sub: "Time-to-First-Token (TTFT) @ 10,000 Concurrent",
      value: "< 14.8ms",
      valueTone: "text-primary",
      note: "Continuous batching SLA",
    },
    footerLabel: "Deliverables & Deployment",
    footerNote: "Inference API • Fine-tuning pipeline • Model eval harness",
    cta: "Deploy AI Pod",
  },
  {
    n: "04",
    badge: "Rapid 3-Week Intensive",
    badgeTone: "bg-status-warning/10 text-ink-deep",
    title: "Staff-Level Architectural Audits & Concurrency Optimization",
    copy: "A rapid-strike diagnostic deep dive examining thread contention, distributed lock hot-spots, database IOPS starvation, memory leaks, and infrastructure cost anomalies.",
    focus:
      "Heap profiling, CPU flame graphs, kernel bypass (eBPF/XDP), distributed consensus analysis, infrastructure FinOps modeling.",
    stackLabel: "Diagnostic Tooling:",
    stack: [
      "eBPF / BCC",
      "pprof / FlameGraph",
      "Grafana Pyroscope",
      "Wireshark TLS",
      "Terraform Drifts",
    ],
    metric: {
      label: "Guaranteed Audit Deliverable",
      sub: "Full executive & staff-level breakdown",
      value: "60-Page RFC",
      valueTone: "text-ink-deep",
      note: "Prioritized refactor roadmap",
    },
    footerLabel: "Turnaround & Scope",
    footerNote: "3 weeks total • Principal Architect led pairing sessions",
    cta: "Book Rapid Audit",
  },
];

const MODELS = [
  {
    tag: "Most Popular",
    tagTone: "bg-primary-container text-on-primary",
    glow: true,
    title: "Embedded Staff Pod",
    copy: "Seamlessly integrates into your internal engineering organization. Our engineers join your Slack channels, sprint rituals, and Git repositories as high-output force multipliers.",
    listLabel: "Pod Composition:",
    list: [
      "1x Lead Principal Architect",
      "3x Senior / Staff Distributed Engineers",
      "1x Dedicated Platform / SRE Specialist",
    ],
    footKey: "Commit Access",
    footValue: "Direct PR & Merge",
    footValueTone: "text-status-success",
    cta: "Assemble Pod",
    ctaTone: "bg-primary-container hover:bg-primary",
  },
  {
    tag: "Autonomous Execution",
    tagTone: "bg-canvas text-ink-deep shadow-sm",
    title: "Turnkey Greenfield Build",
    copy: "End-to-end delivery of an isolated, critical subsystem. We own the architecture, delivery pipeline, performance benchmarking, and final handover to your in-house staff.",
    listLabel: "Pod Composition:",
    list: [
      "1x Solutions Director / Arch Lead",
      "4x Full-Lifecycle Systems Engineers",
      "1x QA & Chaos Engineering Specialist",
    ],
    footKey: "Accountability",
    footValue: "Turnkey SLA Delivery",
    footValueTone: "text-ink-deep",
    cta: "Commission Project",
    ctaTone: "bg-ink-deep hover:bg-charcoal",
  },
  {
    tag: "Strategic Oversight",
    tagTone: "bg-canvas text-ink-deep shadow-sm",
    title: "Fractional Chief Architect",
    copy: "Executive architectural advisory for CTOs, VPs of Engineering, and technical founders navigating complex platform inflections, acquisitions, or vendor audits.",
    listLabel: "Retainer Scope:",
    list: [
      "15-20 hrs/month Chief Architect access",
      "Mandatory RFC & ADR Sign-offs",
      "Priority Sev-1 Incident Escalation",
    ],
    footKey: "Cadence",
    footValue: "Monthly Retainer",
    footValueTone: "text-ink-deep",
    cta: "Retain Architect",
    ctaTone: "bg-ink-deep hover:bg-charcoal",
  },
];

const COMPARISON: [string, string, string, string][] = [
  [
    "Day-to-day Integration",
    "Native Slack, Standups, Direct Jira/Linear",
    "Bi-weekly milestones, Dedicated Syncs",
    "Weekly 1:1s, Async RFC comments",
  ],
  [
    "IP & Source Ownership",
    "100% Client Owned (Real-time GitHub)",
    "100% Client Owned upon delivery",
    "100% Client Owned architecture specs",
  ],
  [
    "Roster Caliber Guarantee",
    "100% Staff/Principal (No Juniors)",
    "Senior-Led Pod + QA Engineers",
    "Ex-FAANG / Tier-1 Principal Only",
  ],
  [
    "Minimum Commitment",
    "3 Months (Bi-weekly sprint retainers)",
    "Scope-bounded milestones (typically 4-9 mo.)",
    "6 Month rolling advisory",
  ],
];

const PROTOCOL = [
  {
    n: "01",
    when: "WEEKS 1–2",
    title: "Diagnostic & RFC Blueprint",
    copy: "Deep architecture mapping, latency flame graphs, thread contention analysis, and a signed Architectural RFC specifying contracts and latency budgets.",
    icon: "assignment_turned_in",
    deliverable: "Deliverable: RFC Spec & Benchmarks",
  },
  {
    n: "02",
    when: "WEEKS 3–4",
    title: "Shadow Pipeline & Chaos Harness",
    copy: "Deployment of isolated ephemeral environments, synthetic traffic replay at 10M+ TPS, and automated chaos simulations to validate resilience bounds.",
    icon: "biotech",
    deliverable: "Deliverable: Shadow Test Suite",
  },
  {
    n: "03",
    when: "WEEKS 5+",
    title: "High-Velocity Production Sprints",
    copy: "Strict 2-week deployable cycles with canary rollouts, strict semantic API versioning, and zero accumulation of architectural debt in the backlog.",
    icon: "rocket_launch",
    deliverable: "Deliverable: Bi-weekly Production Releases",
  },
  {
    n: "04",
    when: "FINAL PHASE",
    title: "Runbook Handover & Knowledge Transfer",
    copy: "Extensive pair-programming with internal staff, production runbooks, Grafana observability dashboards, and failover incident drills.",
    icon: "menu_book",
    deliverable: "Deliverable: Verified Runbooks & Drills",
  },
];

const COMPLIANCE = [
  {
    icon: "shield",
    title: "SOC 2 Type II",
    copy: "Annual external AICPA compliance audit verification.",
  },
  {
    icon: "health_and_safety",
    title: "HIPAA Compliant",
    copy: "BAA ready for secure ePHI health data streaming pipelines.",
  },
  {
    icon: "payments",
    title: "PCI-DSS Level 1",
    copy: "Architectures certified for high-frequency financial ledgers.",
  },
  {
    icon: "security",
    title: "ISO 27001",
    copy: "Information Security Management System certified.",
  },
];

/** Throughput-under-load sparkline: solid = Nexus cluster, dashed = baseline. */
function ThroughputSparkline() {
  return (
    <svg
      viewBox="0 0 400 48"
      preserveAspectRatio="none"
      className="h-12 w-full fill-none stroke-current"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      aria-hidden
    >
      <path
        className="stroke-primary"
        d="M 0 38 L 40 34 L 80 36 L 120 28 L 160 30 L 200 18 L 240 22 L 280 14 L 320 16 L 360 8 L 400 6"
      />
      <path
        className="stroke-stone"
        strokeDasharray="3 3"
        d="M 0 44 L 40 42 L 80 43 L 120 40 L 160 41 L 200 39 L 240 38 L 280 37 L 320 36 L 360 35 L 400 34"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <div className="flex w-full flex-col">
      {/* SECTION 1 — Hero & capability telemetry */}
      <section className="relative w-full overflow-hidden bg-canvas px-xxl pt-section pb-section-lg">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-primary-container/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-accent-electric/5 blur-3xl" />

        <div className="relative mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex flex-wrap items-center gap-xs">
            <span className="inline-flex items-center gap-xs rounded-full bg-surface-soft px-base py-xxs shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-status-success" />
              <span className="text-caption-bold uppercase tracking-wider text-ink-deep">
                Core Engagement Disciplines // Bespoke Staff Squads
              </span>
            </span>
            <span className="hidden text-caption text-secondary sm:inline-block">
              AVAILABLE CAP: 2 SQUADS FOR Q2/Q3
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-xxl lg:grid-cols-12">
            <div className="flex flex-col gap-lg lg:col-span-8">
              <h1 className="text-display-lg-mobile font-semibold tracking-tight text-ink-deep md:text-display-lg lg:text-hero-display">
                High-Consequence Software Engineering,{" "}
                <span className="text-primary">Architected for Scale.</span>
              </h1>
            </div>
            <div className="flex flex-col gap-base lg:col-span-4 lg:pt-base">
              <p className="text-subtitle-md leading-relaxed text-charcoal">
                We embed specialized pods of Staff-level engineers, distributed systems architects,
                and machine learning specialists directly into your technology organization to solve
                critical performance, scale, and delivery roadblocks.
              </p>
              <div className="flex items-center gap-sm pt-xs">
                <Link
                  href="#disciplines"
                  className="inline-flex items-center gap-xs text-body-sm-bold text-primary transition-colors hover:text-ink-deep"
                >
                  Explore Core Disciplines
                  <Icon name="arrow_downward" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-base pt-lg sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_STATS.map((s) => (
              <div
                key={s.tag}
                className="flex flex-col gap-xs rounded-lg bg-surface-soft p-xxl transition-colors duration-200 hover:bg-surface-container-low"
              >
                <div className="flex items-center justify-between">
                  <Icon name={s.icon} size={24} className="text-primary" />
                  <span className="text-caption-bold text-primary">{s.tag}</span>
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

      {/* SECTION 2 — Specialized engineering disciplines */}
      <section id="disciplines" className="w-full bg-surface-soft px-xxl py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex flex-col justify-between gap-base md:flex-row md:items-end">
            <div className="flex flex-col gap-xs">
              <span className="text-caption-bold uppercase tracking-widest text-primary">
                Technical Capability Portfolio
              </span>
              <h2 className="text-heading-lg font-semibold text-ink-deep">
                Specialized Engineering Disciplines
              </h2>
            </div>
            <p className="max-w-[28rem] text-body-sm text-secondary">
              Deep architectural practices honed on mission-critical systems processing billions in
              financial volume, petabyte-scale telemetry, and real-time inference.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-xxl lg:grid-cols-2">
            {DISCIPLINES.map((d) => (
              <article
                key={d.n}
                className="flex flex-col justify-between gap-xxl rounded-lg bg-canvas p-xxl shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex flex-col gap-lg">
                  <div className="flex flex-wrap items-center justify-between gap-xs">
                    <span
                      className={`rounded-full px-sm py-xxs text-caption-bold uppercase tracking-wide ${d.badgeTone}`}
                    >
                      {d.badge}
                    </span>
                    <span className="text-caption-bold text-stone">DISCIPLINE // {d.n}</span>
                  </div>

                  <div className="flex flex-col gap-xs">
                    <h3 className="text-heading-sm font-semibold text-ink-deep">{d.title}</h3>
                    <p className="text-body-md text-charcoal">{d.copy}</p>
                  </div>

                  <div className="flex flex-col gap-xs rounded-md bg-surface-soft p-base">
                    <span className="text-caption-bold uppercase tracking-wider text-ink-deep">
                      Core Engineering Focus:
                    </span>
                    <p className="text-body-sm text-secondary">{d.focus}</p>
                  </div>

                  <div className="flex flex-col gap-xs">
                    <span className="text-caption-bold uppercase tracking-wider text-ink-deep">
                      {d.stackLabel}
                    </span>
                    <div className="flex flex-wrap gap-xs">
                      {d.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-surface-container-low px-sm py-xxs text-caption-bold text-ink-body"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {d.sparkline && (
                    <div className="flex flex-col gap-xs rounded-md bg-surface-container-low p-base">
                      <div className="flex flex-wrap items-center justify-between gap-xs">
                        <span className="text-caption-bold uppercase tracking-wider text-ink-deep">
                          {d.sparkline.label}
                        </span>
                        <span className="text-caption-bold text-primary">{d.sparkline.value}</span>
                      </div>
                      <ThroughputSparkline />
                    </div>
                  )}

                  {d.metric && (
                    <div className="flex flex-wrap items-center justify-between gap-base rounded-md bg-surface-container-low p-base">
                      <div className="flex flex-col">
                        <span className="text-caption-bold uppercase tracking-wider text-ink-deep">
                          {d.metric.label}
                        </span>
                        <span className="text-body-sm text-secondary">{d.metric.sub}</span>
                      </div>
                      <div className="text-right">
                        <span
                          className={`font-display text-heading-sm font-bold ${d.metric.valueTone}`}
                        >
                          {d.metric.value}
                        </span>
                        <span className="block text-caption text-secondary">{d.metric.note}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="-mx-xxl -mb-xxl flex flex-col justify-between gap-base rounded-b-lg bg-surface-soft p-xxl pt-base sm:flex-row sm:items-center">
                  <div className="flex flex-col">
                    <span className="text-caption-bold text-ink-deep">{d.footerLabel}</span>
                    <span className="text-caption text-secondary">{d.footerNote}</span>
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-ink-deep px-xl py-xs text-body-sm-bold text-on-primary transition-colors duration-200 hover:bg-charcoal"
                  >
                    {d.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Engagement models */}
      <section className="w-full bg-canvas px-xxl py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex max-w-2xl flex-col gap-xs">
            <span className="text-caption-bold uppercase tracking-widest text-primary">
              Deployment Architecture
            </span>
            <h2 className="text-heading-lg font-semibold text-ink-deep">Bespoke Squad Formations</h2>
            <p className="text-body-md text-secondary">
              Select the optimal collaboration model tailored to your internal bandwidth,
              organizational velocity, and technical risk tolerance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-xxl md:grid-cols-3">
            {MODELS.map((m) => (
              <div
                key={m.title}
                className="relative flex flex-col justify-between gap-xl overflow-hidden rounded-lg bg-surface-soft p-xxl"
              >
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
                  <div className="flex flex-wrap items-center justify-between gap-xs rounded-md bg-canvas p-base">
                    <span className="text-caption-bold uppercase text-secondary">{m.footKey}</span>
                    <span className={`text-caption-bold uppercase ${m.footValueTone}`}>
                      {m.footValue}
                    </span>
                  </div>
                  <Link
                    href="#contact"
                    className={`inline-flex w-full items-center justify-center rounded-full px-xl py-sm text-center text-body-sm-bold text-on-primary transition-colors duration-200 ${m.ctaTone}`}
                  >
                    {m.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full rounded-lg bg-surface-soft p-xxl">
            <span className="block pb-base text-caption-bold uppercase tracking-wider text-ink-deep">
              Engagement Model Comparison Specifications
            </span>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="text-caption-bold uppercase tracking-wider text-charcoal">
                    <th className="py-base pr-base">Governance Dimension</th>
                    <th className="px-base py-base text-primary">Embedded Staff Pod</th>
                    <th className="px-base py-base">Turnkey Greenfield</th>
                    <th className="py-base pl-base">Fractional Advisory</th>
                  </tr>
                </thead>
                <tbody className="text-body-sm">
                  {COMPARISON.map(([dim, a, b, c]) => (
                    <tr key={dim} className="transition-colors hover:bg-canvas/50">
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
        </div>
      </section>

      {/* SECTION 4 — Delivery protocol */}
      <section className="w-full bg-surface-soft px-xxl py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex flex-col justify-between gap-base md:flex-row md:items-end">
            <div className="flex flex-col gap-xs">
              <span className="text-caption-bold uppercase tracking-widest text-primary">
                Rigorous Engineering Discipline
              </span>
              <h2 className="text-heading-lg font-semibold text-ink-deep">
                The Nexus Delivery Protocol
              </h2>
            </div>
            <p className="max-w-[28rem] text-body-sm text-secondary">
              A mathematically validated rollout cadence designed to eliminate integration surprises,
              vendor lock-in, and operational regressions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-base md:grid-cols-2 lg:grid-cols-4">
            {PROTOCOL.map((p) => (
              <div
                key={p.n}
                className="flex flex-col justify-between gap-xl rounded-lg bg-canvas p-xxl shadow-sm"
              >
                <div className="flex flex-col gap-base">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-body-sm-bold text-primary">
                      {p.n}
                    </span>
                    <span className="text-caption-bold text-stone">{p.when}</span>
                  </div>
                  <h3 className="text-heading-sm font-semibold text-ink-deep">{p.title}</h3>
                  <p className="text-body-sm text-secondary">{p.copy}</p>
                </div>
                <div className="flex items-start gap-xs rounded-md bg-surface-soft p-base">
                  <Icon name={p.icon} size={20} className="shrink-0 text-primary" />
                  <span className="text-caption-bold text-ink-deep">{p.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Governance & compliance */}
      <section className="w-full bg-canvas px-xxl py-section-lg">
        <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-xxxl lg:grid-cols-12">
          <div className="flex flex-col gap-base lg:col-span-6">
            <span className="text-caption-bold uppercase tracking-widest text-primary">
              Enterprise Governance
            </span>
            <h2 className="text-heading-lg font-semibold text-ink-deep">
              Audit-Ready Security &amp; Uncompromising IP Custody
            </h2>
            <p className="text-body-md text-charcoal">
              We operate under rigorous regulatory postures. Every member of your Nexus Dev pod is
              thoroughly vetted, background checked, and adheres to strict physical and
              cryptographical isolation policies.
            </p>
            <div className="flex flex-col gap-xs pt-xs">
              {[
                {
                  icon: "lock",
                  title: "Mutual Non-Disclosure Agreement Guaranteed",
                  copy: "Fully signed bilateral NDA prior to your initial architectural discovery session.",
                },
                {
                  icon: "fingerprint",
                  title: "100% Clean IP Assignment",
                  copy: "All written code, patents, schemas, and configurations belong exclusively to your organization from day one.",
                },
              ].map((row) => (
                <div key={row.title} className="flex items-start gap-xs">
                  <Icon
                    name={row.icon}
                    size={20}
                    className="mt-xxs shrink-0 text-status-success"
                  />
                  <div>
                    <span className="text-body-sm-bold text-ink-deep">{row.title}</span>
                    <p className="text-caption text-secondary">{row.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-base sm:grid-cols-2 lg:col-span-6">
            {COMPLIANCE.map((c) => (
              <div
                key={c.title}
                className="flex flex-col gap-xs rounded-lg bg-surface-soft p-xxl transition-colors hover:bg-surface-container-low"
              >
                <Icon name={c.icon} size={32} className="text-primary" />
                <span className="text-body-md-bold text-ink-deep">{c.title}</span>
                <span className="text-caption text-secondary">{c.copy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Conversion */}
      <section id="contact" className="w-full bg-canvas px-xxl py-hero">
        <div className="relative mx-auto max-w-shell overflow-hidden rounded-lg bg-ink-deep p-xxxl text-on-primary shadow-xl">
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-primary-container/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-xxxl lg:flex-row lg:items-center">
            <div className="flex max-w-2xl flex-col gap-base">
              <span className="inline-flex items-center gap-xs self-start rounded-full bg-canvas/10 px-base py-xxs text-caption-bold uppercase text-on-primary-container">
                <span className="h-2 w-2 animate-ping rounded-full bg-accent-electric" />
                Technical Office Hours Open
              </span>
              <h2 className="text-display-lg-mobile font-semibold tracking-tight text-on-primary md:text-display-lg">
                Have a critical scale, concurrency, or modern cutover hurdle?
              </h2>
              <p className="text-subtitle-md leading-relaxed text-hairline">
                Schedule a confidential 45-minute technical discovery session with a Nexus Principal
                Architect. We review your architecture diagrams, identify systemic bottlenecks, and
                propose an action plan.
              </p>
              <div className="flex items-start gap-xs pt-xs text-caption text-secondary-fixed-dim">
                <Icon name="verified" className="mt-0.5 shrink-0 text-primary-fixed" />
                Guaranteed Principal Engineer review within 24 business hours under mutual NDA.
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
                href="#"
                className="inline-flex items-center justify-center gap-xs rounded-full bg-canvas/10 px-xxxl py-base text-center text-body-md-bold text-on-primary transition-colors duration-200 hover:bg-canvas/20"
              >
                Download Capabilities RFC Spec
                <Icon name="download" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
