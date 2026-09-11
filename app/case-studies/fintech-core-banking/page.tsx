import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";

function Dot() {
  return <span className="text-accent-electric">.</span>;
}

export const metadata: Metadata = {
  title: "Fintech Core Banking Re-architecture",
  description:
    "Re-architecting a multi-region core banking ledger for 50,000+ TPS and zero-defect settlement — 9 months, zero unbudgeted downtime.",
};

const META = [
  {
    label: "Client",
    value: "Confidential Tier-1 NeoBank",
    note: "Global Retail & Treasury",
  },
  {
    label: "Squad Composition",
    value: "6 Staff-Level Specialists",
    note: "1 Architect, 3 Systems, 2 SRE",
  },
  {
    label: "Execution Timeline",
    value: "9 Months Discovery to Cutover",
    note: "Strict Zero-Downtime Gate",
  },
];

const METRICS = [
  {
    label: "p99 End-to-End Latency",
    icon: "speed",
    iconTone: "text-status-success",
    value: "40ms",
    bar: "bg-status-success",
    pct: "95%",
    copy: (
      <>
        Down from <span className="text-steel line-through">840ms</span> legacy peak locks. Immediate
        UX boost for card authorization paths.
      </>
    ),
  },
  {
    label: "Sustained TPS Capacity",
    icon: "bolt",
    iconTone: "text-primary",
    value: "50k+",
    bar: "bg-primary",
    pct: "92%",
    copy: (
      <>
        <span className="text-body-sm-bold text-ink-deep">4.2x capacity</span> expansion handling
        simultaneous Black Friday and payroll burst volumes.
      </>
    ),
  },
  {
    label: "Reconciliation Drift",
    icon: "fact_check",
    iconTone: "text-primary-container",
    value: "0.00%",
    bar: "bg-primary-container",
    pct: "100%",
    copy: <>Zero discrepancy across $18.4B quarterly volume via deterministic event log replay validation.</>,
  },
  {
    label: "Cutover Availability",
    icon: "dns",
    iconTone: "text-status-success",
    value: "99.999%",
    bar: "bg-status-success",
    pct: "100%",
    copy: <>Zero unbudgeted downtime during the live phase transition of 42M active deposit accounts.</>,
  },
];

const PROBLEMS = [
  {
    icon: "lock_clock",
    title: "Database Row Locks",
    copy: "During morning payroll runs and promotional deposit spikes, pessimistic row-level database locking blocked authorization microservices, creating thread starvation and timeout cascades that degraded consumer card swipes.",
    result: "Result: Up to 840ms latency spikes",
  },
  {
    icon: "sync_problem",
    title: "Multi-Hop Batch Latency",
    copy: "Cross-border balance reconciliations relied on batch ETL scripts running every 4 hours. If any intermediary settlement step failed, ledger state desynchronized between primary accounts and FX shadow ledgers.",
    result: "Result: $2.4M avg daily float at risk",
  },
  {
    icon: "policy",
    title: "Audit & SOX Friction",
    copy: "Regulatory compliance teams lacked a deterministic, append-only immutable event stream. Proving historical account balance state at a given timestamp required slow database table restorations and manual SQL forensics.",
    result: "Result: 14-day audit prep cycles",
  },
];

const COMPARISON: [string, string, string][] = [
  [
    "Concurrency Model",
    "Pessimistic relational locking on account balances",
    "Optimistic concurrency via partitioned Rust event streams",
  ],
  [
    "Settlement Model",
    "Synchronous multi-phase batch (T+1 / 4-hr batches)",
    "Real-time CQRS with sub-second event-driven saga orchestration",
  ],
  [
    "Regional Topology",
    "Single active datacenter with hot-standby (RTO: 45 min)",
    "Active-Active 3-region Aurora & Kafka replication (RTO: <1s)",
  ],
  [
    "Audit Trail Protocol",
    "Relational changelog tables with mutable DB access",
    "Cryptographic append-only Merkle-verified ledger stream",
  ],
];

const DESIGN_PILLARS = [
  {
    n: "01",
    title: "Event Sourcing Core in Rust",
    copy: "Every transaction is expressed as an immutable fact in an append-only stream. The core execution engine is compiled in memory-safe Rust with zero garbage-collection pauses, ensuring predictable <5ms compute cycles on balance derivations.",
    bullets: [
      "Zero-allocation JSON & Protobuf serialization",
      "Deterministic state machines replayable to nano-sec",
    ],
  },
  {
    n: "02",
    title: "Active-Active Partitioning",
    copy: "Kafka partition keys are calculated using a deterministic shard hashing strategy tied to account routing identifiers, guaranteeing strict order within accounts while enabling completely parallel processing across regions (us-east, eu-central, ap-southeast).",
    bullets: [
      "Cross-region async consensus via Raft state nodes",
      "Conflict-free Replicated Data Types (CRDT) for limits",
    ],
  },
  {
    n: "03",
    title: "Automated Saga Orchestrator",
    copy: "Complex multi-institution wire transfers and currency exchanges execute through self-healing transactional sagas. In the event of downstream partner failures, automated compensating transactions execute in reverse order within 120ms.",
    bullets: [
      "Zero distributed two-phase commit database deadlocks",
      "Strict idempotent retry tokens via Redis cluster",
    ],
  },
];

const PHASES = [
  {
    weeks: "WEEKS 1–6",
    phase: "PHASE 01",
    title: "Architectural RFC & Shadow Ledger",
    copy: "Constructed an un-intrusive shadow pipeline that forked production traffic into the Rust prototype. Ran automated reconciliation diffs over 100M+ real customer transactions to prove 100% calculation parity.",
  },
  {
    weeks: "WEEKS 7–20",
    phase: "PHASE 02",
    title: "High-Velocity Domain Isolation",
    copy: "Carved out distinct bounded contexts: Account Balance, Ingestion, FX Routing, and Card Authorizations. Built gRPC interconnects with sub-millisecond serialization benchmarks.",
  },
  {
    weeks: "WEEKS 21–32",
    phase: "PHASE 03",
    title: "Canary Multi-Region Cutover",
    copy: "Conducted chaos engineering simulations, cutting whole cloud regions under full peak load. Gradually rerouted live production traffic from 1% to 100% over a 4-week validation window.",
  },
  {
    weeks: "WEEKS 33–36",
    phase: "PHASE 04",
    title: "Runbooks & Team Handover",
    copy: "Conducted 12 paired engineering workshops with client staff engineers. Delivered comprehensive Grafana dashboards, automated alerts, and emergency disaster recovery playbooks.",
  },
];

const CERTS = [
  "Built for SOC2 & PCI-DSS environments",
  "Immutable audit trail architecture",
  "Encryption in transit and at rest",
  "Designed for regulatory review",
];

const RELATED = [
  {
    tag: "Healthcare & Computer Vision",
    title: "AI-Powered Real-Time Medical Diagnostic Suite",
    copy: "Sub-10ms WebGL rendering pipeline for high-throughput DICOM 3D scans, processing 140,000 daily oncology screening inferences.",
    stack: ["Rust", "WebGPU", "PyTorch TensorRT"],
  },
  {
    tag: "Logistics & Graph Networks",
    title: "Global B2B Supply Chain & Route Compute Platform",
    copy: "Dijkstra distributed graph traversal algorithm managing 4.8M route re-computations every second for enterprise maritime fleets.",
    stack: ["Go", "Neo4j Distributed", "Apache Flink"],
  },
];

const KERNEL_SOURCE = `// Deterministic transaction commitment step with cryptographic hash verification
pub async fn process_inbound_settlement(
    &self,
    intent: SettlementIntent,
    ctx: &ValidationContext,
) -> Result<TransactionReceipt, LedgerExecutionError> {
    // 1. Compute deterministic hash and verify replay protection cache
    let idempotent_key = intent.generate_composite_key();
    self.idempotency_guard.assert_unique(&idempotent_key).await?;

    // 2. Verify account vector clocks across active-active regional partitions
    let current_balance = self.state_store.fetch_vector_clock(&intent.source_account).await?;
    intent.evaluate_invariants(&current_balance)?;

    // 3. Emit immutable append-only event to Kafka cluster with sub-5ms commit
    let event = LedgerEvent::TransactionExecuted { intent, timestamp: ctx.nanos() };
    self.event_publisher.publish_and_await_ack(&event).await?;

    Ok(TransactionReceipt::new(event.hash()))
}`;

/** `fn <name>` (name highlighted separately) | bare keyword. Anything unmatched renders as-is. */
const TOKEN = /(\bfn\s+)(\w+)|\b(?:pub|async|let|self)\b/g;

function RustSource({ source }: { source: string }) {
  return (
    <>
      {source.split("\n").map((line, i) => {
        if (line.trimStart().startsWith("//")) {
          return (
            <span key={i} className="text-stone">
              {line + "\n"}
            </span>
          );
        }
        const out: React.ReactNode[] = [];
        let last = 0;
        for (const m of line.matchAll(TOKEN)) {
          const at = m.index;
          if (at > last) out.push(line.slice(last, at));
          if (m[2]) {
            out.push(
              <span key={`${at}k`} className="text-accent-electric">
                {m[1]}
              </span>,
              <span key={`${at}n`} className="font-bold text-canvas">
                {m[2]}
              </span>,
            );
          } else {
            out.push(
              <span key={`${at}k`} className="text-accent-electric">
                {m[0]}
              </span>,
            );
          }
          last = at + m[0].length;
        }
        out.push(line.slice(last) + "\n");
        return <span key={i}>{out}</span>;
      })}
    </>
  );
}

export default function CaseStudyPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Breadcrumb bar */}
      <section className="w-full border-b border-canvas/10 bg-ink-deep px-xxl py-md">
        <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-base">
          <div className="flex flex-wrap items-center gap-xs text-caption text-stone">
            <Link
              href="/case-studies"
              className="flex items-center gap-xxs transition-colors hover:text-accent-electric"
            >
              <Icon name="arrow_back" size={14} />
              Case Studies
            </Link>
            <span>/</span>
            <span className="text-canvas/50">Fintech Infrastructure</span>
            <span>/</span>
            <span className="text-caption-bold text-canvas">
              Project Atlas: Global Tier-1 Banking Partner
            </span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="inline-flex items-center gap-xxs rounded-full bg-status-success/15 px-xs py-xxs text-caption-bold text-status-success">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-status-success" />
              ACTIVE IN PRODUCTION
            </span>
            <span className="text-caption text-canvas/40">Case ID: NX-8842-FIN</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-primary-container/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-24 h-[380px] w-[380px] rounded-full bg-accent-electric/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-shell flex-col gap-xxl px-xxl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-xs">
              <span className="rounded-full bg-accent-electric px-sm py-xxs text-caption-bold uppercase tracking-wider text-ink-deep">
                Tier-1 Banking Infrastructure
              </span>
              <span className="rounded-full bg-canvas/10 px-sm py-xxs text-caption-bold uppercase tracking-wider text-canvas/80">
                Series D Scale
              </span>
              {["Mission-Critical Runtime", "ACID Compliant"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-canvas/15 px-sm py-xxs text-caption-bold uppercase tracking-wider text-canvas/70"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="flex max-w-5xl flex-col gap-lg">
            <Reveal delay={100}>
              <h1 className="text-display-lg-mobile font-bold tracking-tight text-canvas md:text-display-lg lg:text-hero-display">
                Re-architecting a multi-region core banking ledger for{" "}
                <span className="text-accent-electric">50,000+ TPS</span> and zero-defect settlement
                <Dot />
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-4xl text-subtitle-lg leading-relaxed font-normal text-stone">
                How an embedded 6-person Nexus.Dev staff-level squad dismantled a 14-year-old
                monolithic legacy core, migrating $18B+ quarterly transactional throughput to an
                event-driven, multi-region active-active distributed ledger in 9 months with zero
                unbudgeted downtime.
              </p>
            </Reveal>
          </div>

          <Reveal delay={250}>
            <div className="grid grid-cols-1 gap-xl rounded-xl border border-canvas/10 bg-canvas/5 p-xxl md:grid-cols-2 lg:grid-cols-4">
              {META.map((m) => (
                <div key={m.label} className="flex flex-col gap-xxs">
                  <span className="text-caption-bold uppercase tracking-wider text-canvas/50">
                    {m.label}
                  </span>
                  <span className="text-body-md-bold text-canvas">{m.value}</span>
                  <span className="text-caption text-stone">{m.note}</span>
                </div>
              ))}
              <div className="flex flex-col gap-xxs">
                <span className="text-caption-bold uppercase tracking-wider text-canvas/50">
                  Primary Stack
                </span>
                <div className="flex flex-wrap gap-xxs pt-xxs">
                  {["Rust", "Kafka", "Aurora Multi-Master", "EKS"].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-canvas/15 px-xs py-xxs text-caption text-canvas/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero visual */}
      <section className="w-full bg-ink-deep pb-section">
        <div className="mx-auto max-w-shell px-xxl">
          <div className="relative overflow-hidden rounded-lg bg-ink-deep p-4 shadow-2xl md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-base pb-base">
              <div className="flex items-center gap-xs">
                <div className="flex gap-xxs">
                  <span className="inline-block h-3 w-3 rounded-full bg-status-critical/80" />
                  <span className="inline-block h-3 w-3 rounded-full bg-status-warning/80" />
                  <span className="inline-block h-3 w-3 rounded-full bg-status-success/80" />
                </div>
                <span className="ml-base text-caption-bold uppercase tracking-widest text-canvas/70">
                  Atlas Ledger Telemetry Console — Active Multi-Region Cluster
                </span>
              </div>
              <div className="hidden items-center gap-xs md:flex">
                <span className="rounded-full bg-status-success/20 px-xs py-xxs text-caption-bold text-status-success">
                  EKS Active-Active
                </span>
                <span className="rounded-full bg-primary/20 px-xs py-xxs text-caption text-on-primary-container">
                  SHA-256 Merkle Verification Valid
                </span>
              </div>
            </div>

            <div className="relative flex aspect-[16/9] max-h-[640px] items-center justify-center overflow-hidden rounded-md bg-charcoal/40">
              <MediaFrame
                icon="monitoring"
                label="Atlas Ledger telemetry console — multi-region cluster throughput, partition lag, and settlement latency dashboards."
              />
              <div className="absolute right-6 bottom-6 left-6 flex flex-wrap items-center justify-between gap-base rounded-md bg-ink-deep/85 p-base backdrop-blur-md">
                <div className="flex flex-wrap items-center gap-xl">
                  <div className="flex items-center gap-xs">
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-status-success" />
                    <div>
                      <span className="block text-caption uppercase text-canvas/60">
                        Cluster P99 Latency
                      </span>
                      <span className="text-body-md-bold text-canvas">38.4ms (Cross-Region)</span>
                    </div>
                  </div>
                  <span className="hidden h-8 w-px bg-canvas/10 sm:block" />
                  <div className="flex items-center gap-xs">
                    <Icon name="verified" size={20} className="text-primary" />
                    <div>
                      <span className="block text-caption uppercase text-canvas/60">
                        Ledger Invariant State
                      </span>
                      <span className="text-body-md-bold text-status-success">
                        0 Drift Across $18.4B
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-base">
                  <div className="text-right">
                    <span className="block text-caption uppercase text-canvas/60">
                      Real-Time Throughput
                    </span>
                    <span className="text-body-md-bold text-accent-electric">
                      52,400 peak TPS verified
                    </span>
                  </div>
                  <span className="hidden rounded-full bg-primary px-sm py-xs text-caption-bold text-on-primary md:inline-flex">
                    PROD-EU-WEST
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="w-full bg-surface-soft py-section-sm">
        <div className="mx-auto flex max-w-shell flex-col gap-xxl px-xxl">
          <div className="flex flex-col gap-xxs">
            <span className="text-caption-bold uppercase tracking-widest text-primary">
              Verified Deployment Metrics
            </span>
            <h2 className="text-heading-lg font-semibold text-ink-deep">
              Transformational System Benchmarks
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="flex flex-col justify-between gap-base rounded-lg bg-canvas p-xxl shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <span className="text-caption-bold uppercase text-steel">{m.label}</span>
                  <Icon name={m.icon} size={24} className={m.iconTone} />
                </div>
                <div>
                  <span className="block font-display text-display-lg font-bold tracking-tight text-ink-deep">
                    {m.value}
                  </span>
                  <p className="mt-xs text-body-sm text-charcoal">{m.copy}</p>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-soft">
                  <div className={`h-full ${m.bar}`} style={{ width: m.pct }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The bottleneck */}
      <section className="w-full bg-canvas py-section">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl px-xxl">
          <div className="flex max-w-3xl flex-col gap-base">
            <span className="text-caption-bold uppercase tracking-widest text-primary">
              The Bottleneck
            </span>
            <h2 className="text-display-lg-mobile font-semibold tracking-tight text-ink-deep md:text-display-lg">
              The Breaking Point: Concurrency Walls at Enterprise Scale
            </h2>
            <p className="text-body-md leading-relaxed text-charcoal">
              The client&rsquo;s 14-year-old monolithic Java / Oracle enterprise ledger was originally
              designed when transaction volumes were localized and predominantly batched overnight.
              As the platform expanded across 18 countries, the existing architecture experienced
              cascading systemic degradation under extreme concurrency.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-xl md:grid-cols-3">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="flex flex-col gap-base rounded-lg bg-surface-soft p-xxl">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-canvas text-status-critical shadow-sm">
                  <Icon name={p.icon} size={24} />
                </div>
                <h3 className="text-heading-sm font-semibold text-ink-deep">{p.title}</h3>
                <p className="text-body-sm leading-relaxed text-charcoal">{p.copy}</p>
                <div className="mt-auto pt-base">
                  <span className="text-caption-bold text-status-critical">{p.result}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-xl rounded-lg bg-surface-soft p-xxl">
            <h3 className="text-heading-sm font-semibold text-ink-deep">
              Technical Architecture: Before vs. After
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left">
                <thead>
                  <tr className="text-caption-bold uppercase tracking-wider text-steel">
                    <th className="pb-base">Architectural Dimension</th>
                    <th className="pb-base text-status-critical">Legacy Monolithic Engine (Before)</th>
                    <th className="pb-base text-primary">Nexus Atlas Architecture (After)</th>
                  </tr>
                </thead>
                <tbody className="text-body-sm text-charcoal">
                  {COMPARISON.map(([dim, before, after], i) => (
                    <tr key={dim} className={i % 2 === 0 ? "bg-canvas/50" : undefined}>
                      <td className="px-md py-base text-body-sm-bold text-ink-deep">{dim}</td>
                      <td className="px-md py-base text-charcoal">{before}</td>
                      <td className="bg-primary/5 px-md py-base font-medium text-ink-deep">{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* System design */}
      <section className="w-full bg-surface-soft py-section">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl px-xxl">
          <div className="flex max-w-3xl flex-col gap-base">
            <span className="text-caption-bold uppercase tracking-widest text-primary">
              System Design
            </span>
            <h2 className="text-display-lg-mobile font-semibold tracking-tight text-ink-deep md:text-display-lg">
              The Atlas Distributed Core Architecture
            </h2>
            <p className="text-body-md leading-relaxed text-charcoal">
              We designed a fault-tolerant, deterministic ledger framework around strict CQRS
              (Command Query Responsibility Segregation) principles. By completely separating
              mutating commands from queries, we achieved independent horizontal scaling and absolute
              data determinism.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-xl lg:grid-cols-3">
            {DESIGN_PILLARS.map((p) => (
              <div key={p.n} className="flex flex-col gap-lg rounded-lg bg-canvas p-xxl shadow-sm">
                <div className="flex items-center gap-base">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-body-md-bold text-primary">
                    {p.n}
                  </div>
                  <h3 className="text-heading-sm font-semibold text-ink-deep">{p.title}</h3>
                </div>
                <p className="text-body-sm leading-relaxed text-charcoal">{p.copy}</p>
                <ul className="flex flex-col gap-xs pt-base text-caption text-steel">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-xs">
                      <Icon name="check_circle" size={16} className="mt-0.5 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Kernel spec */}
          <div className="flex flex-col gap-base rounded-lg bg-ink-deep p-xxl text-canvas shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-xs">
              <div className="flex items-center gap-xs">
                <Icon name="terminal" size={20} className="text-accent-electric" />
                <span className="text-caption-bold uppercase tracking-wider text-accent-electric">
                  Distributed Ledger Validation Kernel Specification (Rust)
                </span>
              </div>
              <span className="text-caption text-canvas/50">
                atlas-engine-v4.2 / ledger_consensus.rs
              </span>
            </div>
            <div className="overflow-x-auto rounded-md bg-charcoal/40 p-xl">
              <pre className="font-mono text-[13px] leading-relaxed text-canvas/90">
                <code>
                  <RustSource source={KERNEL_SOURCE} />
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Phased delivery */}
      <section className="w-full bg-canvas py-section">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl px-xxl">
          <div className="flex flex-col gap-base">
            <span className="text-caption-bold uppercase tracking-widest text-primary">
              Phased Delivery Protocol
            </span>
            <h2 className="text-display-lg-mobile font-semibold tracking-tight text-ink-deep md:text-display-lg">
              The 9-Month Migration Path
            </h2>
            <p className="max-w-3xl text-body-md leading-relaxed text-charcoal">
              Migrating a live core ledger processing hundreds of millions of dollars daily requires
              surgical execution. Nexus deployed our signature parallel-shadow cutover framework to
              eliminate operational risk.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-4">
            {PHASES.map((p) => (
              <div key={p.phase} className="flex flex-col gap-base rounded-lg bg-surface-soft p-xxl">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary px-xs py-xxs text-caption-bold text-on-primary">
                    {p.weeks}
                  </span>
                  <span className="text-caption-bold text-steel">{p.phase}</span>
                </div>
                <h3 className="text-heading-sm font-semibold text-ink-deep">{p.title}</h3>
                <p className="text-body-sm leading-relaxed text-charcoal">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial + certifications */}
      <section className="w-full bg-surface-soft py-section-sm">
        <div className="mx-auto flex max-w-shell flex-col gap-xxl px-xxl">
          <div className="flex flex-col items-center justify-between gap-xxl rounded-lg bg-canvas p-xxl shadow-sm lg:flex-row md:p-xxxl">
            <div className="flex max-w-2xl flex-col gap-lg">
              <div className="flex items-center gap-xs text-status-warning">
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="star" size={24} />
                ))}
              </div>
              <p className="font-display text-heading-md leading-relaxed font-normal italic text-ink-deep">
                &ldquo;Nexus brought the technical rigor of top-tier Silicon Valley staff engineers
                combined with the execution pace of an elite squad. Dismantling a live banking core
                processing billions every month without a second of customer disruption seemed
                impossible until their team stepped in.&rdquo;
              </p>
              <div className="flex items-center gap-base">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-display text-heading-sm font-bold text-primary">
                  MV
                </div>
                <div className="flex flex-col">
                  <span className="text-body-md-bold text-ink-deep">Marcus Vance</span>
                  <span className="text-caption text-secondary">
                    Chief Technology Officer &amp; EVP Engineering
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-full min-w-[280px] flex-col gap-base rounded-md bg-surface-soft p-xl lg:w-auto">
              <span className="text-caption-bold uppercase tracking-wider text-steel">
                Security &amp; Compliance Posture
              </span>
              <div className="flex flex-col gap-xs">
                {CERTS.map((c) => (
                  <div key={c} className="flex items-center gap-xs text-body-sm-bold text-ink-deep">
                    <Icon name="verified_user" size={20} className="text-status-success" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="w-full bg-canvas py-section">
        <div className="mx-auto flex max-w-shell flex-col gap-xxl px-xxl">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-xxs">
              <span className="text-caption-bold uppercase tracking-widest text-primary">
                Explore More Work
              </span>
              <h2 className="text-heading-lg font-semibold text-ink-deep">
                Related Engineering Deep Dives
              </h2>
            </div>
            <Link
              href="/case-studies/fintech-core-banking"
              className="hidden items-center gap-xs text-body-sm-bold text-primary transition-colors hover:text-ink-deep sm:inline-flex"
            >
              View All Case Studies
              <Icon name="arrow_forward" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-xl md:grid-cols-2">
            {RELATED.map((r) => (
              <Link
                key={r.title}
                href="/case-studies/fintech-core-banking"
                className="group flex flex-col justify-between gap-xl rounded-lg bg-surface-soft p-xxl transition-all duration-300 hover:bg-surface-container-low"
              >
                <div className="flex flex-col gap-base">
                  <div className="flex items-center justify-between gap-xs">
                    <span className="rounded-full bg-canvas px-xs py-xxs text-caption-bold uppercase text-charcoal">
                      {r.tag}
                    </span>
                    <Icon
                      name="arrow_outward"
                      size={24}
                      className="text-steel transition-colors group-hover:text-primary"
                    />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-ink-deep transition-colors group-hover:text-primary">
                    {r.title}
                  </h3>
                  <p className="text-body-sm leading-relaxed text-charcoal">{r.copy}</p>
                </div>
                <div className="flex items-center gap-xs text-caption text-steel">
                  {r.stack.join(" • ")}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-hero">
        <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-primary-container/20 blur-3xl" />
        <div className="pointer-events-none absolute top-0 right-1/3 h-64 w-64 rounded-full bg-accent-electric/10 blur-2xl" />
        <div className="relative mx-auto max-w-shell px-xxl">
          <Reveal className="flex flex-col items-center justify-between gap-xxxl text-canvas md:flex-row">
            <div className="relative z-10 flex max-w-2xl flex-col gap-base">
              <span className="text-caption-bold uppercase tracking-widest text-accent-electric">
                Architectural Advisory
              </span>
              <h2 className="text-display-lg-mobile font-semibold tracking-tight text-canvas md:text-display-lg">
                Facing high-consequence concurrency or distributed systems challenges?
              </h2>
              <p className="text-body-md leading-relaxed text-canvas/70">
                Schedule a direct technical deep-dive with a Nexus Principal Architect. We review
                your bottleneck topologies under complete mutual NDA.
              </p>
              <div className="flex items-center gap-xs pt-xs text-caption text-canvas/50">
                <Icon name="lock" size={16} className="text-status-success" />
                Mutual NDA guaranteed prior to architectural code &amp; topology inspection
              </div>
            </div>

            <div className="relative z-10 flex w-full flex-col items-center gap-base sm:flex-row md:w-auto">
              <Link
                href="/#discovery-portal"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary-container px-xxl py-base text-body-sm-bold text-on-primary transition-colors duration-200 hover:bg-primary sm:w-auto"
              >
                Schedule Technical Discovery
              </Link>
              <Link
                href="/architecture"
                className="inline-flex w-full items-center justify-center rounded-full border border-canvas/25 px-xl py-base text-body-sm-bold text-canvas transition-colors duration-200 hover:border-canvas/50 hover:bg-canvas/10 sm:w-auto"
              >
                View Core Architecture
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
