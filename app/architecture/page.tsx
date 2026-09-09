import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { BlueprintSelector, DisciplineMatrix } from "./interactive";

export const metadata: Metadata = {
  title: "Architecture & Stack",
  description:
    "Battle-tested architectural foundations for high-throughput systems: the technologies, infrastructure paradigms, and standards our staff-level squads deploy.",
};

const TELEMETRY = [
  ["verified", "100% Production Tested"],
  ["lock_reset", "Zero External Dependency Debt"],
  ["speed", "Sub-Millisecond p99 Benchmarks"],
  ["shield", "SOC2 Type II & PCI-DSS Ready"],
];

const KPIS = [
  {
    label: "Global Latency",
    icon: "timer",
    value: "< 1.2ms",
    note: "End-to-end consensus p99 SLA",
  },
  {
    label: "Target TPS Capacity",
    icon: "dataset",
    value: "2.4M/sec",
    note: "Zero-copy sharded pipeline scale",
  },
  {
    label: "Failover RTO / RPO",
    icon: "sync_saved_locally",
    value: "0s / <3s",
    note: "Active-active Byzantine fault isolated",
  },
  {
    label: "GitOps Convergence",
    icon: "terminal",
    value: "< 90 sec",
    note: "Deterministic ephemeral provisioning",
  },
];

const TENETS = [
  {
    n: "01",
    icon: "tune",
    title: "Deterministic Over Speculative",
    copy: "No mutable global state in core transactional pipelines. Every event is captured append-only, reproducible in test environments with bit-for-bit replayability.",
    rule: "Zero-Side-Effect Rule",
  },
  {
    n: "02",
    icon: "fingerprint",
    title: "Zero-Trust Cryptographic Proof",
    copy: "We treat every internal service network as fundamentally compromised. All inter-service communications enforce SPIFFE/SPIRE mTLS identities with Merkle tree state proofs.",
    rule: "Strict Cryptographic Verifiability",
  },
  {
    n: "03",
    icon: "bolt",
    title: "Chaos as a First-Class Citizen",
    copy: "Continuous automated partition insertion via LitmusChaos in pre-production. Blast radiuses must be programmatically restricted to single isolated pod partitions.",
    rule: "Resilience Verification",
  },
  {
    n: "04",
    icon: "timer_10",
    title: "Strict Ephemeral Runbooks",
    copy: "If a cluster cannot be torn down and completely reconstituted from bare metal within 90 seconds via GitOps controllers, it does not pass Nexus technical sign-off.",
    rule: "100% Immutable GitOps",
  },
];

const RADAR = [
  {
    ring: "Adopt in Core",
    tone: "text-status-success",
    dot: "bg-status-success",
    note: "Default standard",
    copy: "High operational stability, proven scalability, zero unexpected security CVE vectors.",
    entries: [
      ["Rust / Tokio", "Engine Core"],
      ["Kubernetes + Cilium", "Mesh Infra"],
      ["Next.js App Router", "Interface"],
      ["ClickHouse", "Real-Time OLAP"],
    ],
    entryTone: "text-primary font-semibold",
  },
  {
    ring: "Trial for Edge",
    tone: "text-accent-electric",
    dot: "bg-accent-electric",
    note: "Specialized tier",
    copy: "Clear performance advantages for low-latency clients and intensive inference tasks.",
    entries: [
      ["WebGPU / WGSL", "Client Compute"],
      ["vLLM Inference", "Paged Attention"],
      ["Wasm Edge Run", "Sandbox Envoy"],
      ["DuckDB Embedded", "In-Memory OLAP"],
    ],
    entryTone: "text-secondary font-semibold",
  },
  {
    ring: "Assess",
    tone: "text-status-warning",
    dot: "bg-status-warning",
    note: "Active R&D Lab",
    copy: "Promising paradigms undergoing rigorous stress testing inside Nexus benchmark testbeds.",
    entries: [
      ["Mojo Programming", "Kernel SIMD"],
      ["Tigris Data Engine", "Fly Object Store"],
      ["Bun Ecosystem", "Toolchain Build"],
      ["Postgres pgvector", "Hybrid Indexing"],
    ],
    entryTone: "text-stone",
  },
  {
    ring: "Hold & Deprecate",
    tone: "text-status-critical",
    dot: "bg-status-critical",
    note: "Do Not Deploy",
    copy: "Architectural liabilities that introduce unmanageable runtime overhead or lock-in.",
    entries: [
      ["Heavyweight ORMs", "N+1 Latency"],
      ["Monolithic Batch ETL", "Stale Buffers"],
      ["Unbounded REST APIs", "Payload Bloat"],
      ["Raw Docker Swarm", "Dead Protocol"],
    ],
    entryTone: "text-status-critical font-semibold",
    strike: true,
  },
];

export default function ArchitecturePage() {
  return (
    <div className="flex w-full flex-col">
      {/* Telemetry strip */}
      <section className="w-full bg-surface-soft/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-base px-xxl py-sm">
          <div className="flex items-center gap-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-status-success/10 px-xs py-xxs text-caption-bold uppercase tracking-wider text-status-success">
              <span className="h-2 w-2 animate-ping rounded-full bg-status-success" />
              Telemetry Online
            </span>
            <span className="text-caption text-secondary">
              | Multi-Region Production Core v4.8
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-xl">
            {TELEMETRY.map(([icon, label]) => (
              <div key={label} className="flex items-center gap-xs">
                <Icon name={icon} className="text-primary" />
                <span className="text-caption-bold text-ink-deep">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="mx-auto w-full max-w-shell px-xxl pt-section pb-section-sm">
        <div className="flex max-w-4xl flex-col gap-base">
          <div className="inline-flex w-fit items-center gap-xs rounded-full bg-primary/10 px-md py-xs">
            <span className="h-2 w-2 rounded-full bg-primary-container" />
            <span className="text-caption-bold uppercase tracking-wider text-primary">
              Technical DNA &amp; Architectural Standards
            </span>
          </div>
          <h1 className="text-display-lg-mobile tracking-tight text-ink-deep md:text-display-lg lg:text-hero-display">
            Battle-Tested Architectural Foundations for High-Throughput Systems.
          </h1>
          <p className="max-w-3xl text-subtitle-md leading-relaxed text-secondary">
            Explore the technologies, infrastructure paradigms, and strict architectural standards
            our staff-level squads deploy across high-frequency ledgers, edge inference pipelines,
            and fault-tolerant cloud platforms.
          </p>
        </div>

        <div className="mt-section-sm grid grid-cols-2 gap-md md:grid-cols-4">
          {KPIS.map((k) => (
            <div key={k.label} className="flex flex-col gap-xxs rounded-md bg-surface-soft p-xl shadow-sm">
              <div className="flex items-center justify-between text-caption-bold uppercase text-secondary">
                <span>{k.label}</span>
                <Icon name={k.icon} className="text-primary" />
              </div>
              <span className="font-display text-heading-sm font-semibold tracking-tight text-ink-deep md:text-heading-lg">
                {k.value}
              </span>
              <span className="text-caption text-stone">{k.note}</span>
            </div>
          ))}
        </div>
      </section>

      <DisciplineMatrix />
      <BlueprintSelector />

      {/* Tenets */}
      <section className="mx-auto w-full max-w-shell px-xxl py-section">
        <div className="mb-section-sm flex max-w-3xl flex-col gap-xs">
          <div className="inline-flex w-fit items-center gap-xs rounded-full bg-primary/10 px-md py-xs">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-caption-bold uppercase tracking-wider text-primary">
              Engineering Discipline
            </span>
          </div>
          <h2 className="text-heading-lg text-ink-deep">Nexus Architectural Tenets</h2>
          <p className="text-body-md text-secondary">
            We adhere to uncompromising engineering principles that prioritize system determinism,
            operational transparency, and fail-safe topologies over novelty frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-4">
          {TENETS.map((t) => (
            <div
              key={t.n}
              className="flex flex-col gap-base rounded-xl bg-canvas p-xxl shadow-sm transition-all hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-primary">
                <Icon name={t.icon} size={20} />
              </div>
              <div className="flex flex-col gap-xs">
                <span className="text-caption-bold text-stone">TENET // {t.n}</span>
                <h3 className="text-heading-sm font-semibold text-ink-deep">{t.title}</h3>
              </div>
              <p className="text-body-sm leading-relaxed text-secondary">{t.copy}</p>
              <span className="mt-auto flex items-center gap-1 text-caption-bold text-primary">
                {t.rule}
                <Icon name="chevron_right" size={14} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Adoption radar */}
      <section className="w-full bg-surface-soft py-section">
        <div className="mx-auto flex max-w-shell flex-col gap-xl px-xxl">
          <div className="flex flex-col justify-between gap-base md:flex-row md:items-end">
            <div className="flex max-w-2xl flex-col gap-xs">
              <span className="text-caption-bold uppercase tracking-wider text-primary">
                Internal Engineering Standard
              </span>
              <h2 className="text-heading-lg text-ink-deep">Client Tech Adoption Radar (2025.Q1)</h2>
              <p className="text-body-md text-secondary">
                How we guide enterprise clients when modernizing mission-critical foundations. We
                evaluate hundreds of frameworks to maintain this authoritative recommendation matrix.
              </p>
            </div>
            <span className="text-caption text-secondary">
              Updated monthly by Nexus Architecture Guild
            </span>
          </div>

          <div className="grid grid-cols-1 gap-base md:grid-cols-2 lg:grid-cols-4">
            {RADAR.map((q) => (
              <div key={q.ring} className="flex flex-col gap-md rounded-xl bg-canvas p-xxl shadow-sm">
                <div className="flex items-center justify-between pb-xs">
                  <span className={`flex items-center gap-1 text-body-sm-bold uppercase ${q.tone}`}>
                    <span className={`h-2.5 w-2.5 rounded-full ${q.dot}`} /> {q.ring}
                  </span>
                  <span className="text-caption text-stone">{q.note}</span>
                </div>
                <p className="text-caption text-secondary">{q.copy}</p>
                <div className="flex flex-col gap-xs">
                  {q.entries.map(([name, tag]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between gap-xs rounded-sm bg-surface-soft p-xs"
                    >
                      <span
                        className={`text-body-sm-bold text-ink-deep ${q.strike ? "line-through" : ""}`}
                      >
                        {name}
                      </span>
                      <span className={`text-caption ${q.entryTone}`}>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-on-primary">
        <div className="relative z-10 mx-auto flex max-w-shell flex-col items-center justify-between gap-xxxl px-xxl lg:flex-row">
          <div className="flex max-w-2xl flex-col gap-base">
            <div className="inline-flex w-fit items-center gap-xs rounded-full bg-primary/20 px-md py-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-electric" />
              <span className="text-caption-bold uppercase tracking-wider text-accent-electric">
                Architecture Office Hours
              </span>
            </div>
            <h2 className="text-heading-lg tracking-tight text-on-primary">
              Have Specific Concurrency, Throughput, or Compliance Constraints?
            </h2>
            <p className="text-body-md leading-relaxed text-stone">
              Book an intensive technical discovery session with a Nexus Principal Architect. We
              review existing topology schemas, evaluate state bottlenecks, and outline a verifiable
              roadmap.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col items-center gap-base sm:flex-row lg:w-auto">
            <Link
              href="#"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary-container px-xxxl py-base text-body-sm-bold text-on-primary shadow-xl transition-colors duration-200 hover:bg-primary sm:w-auto"
            >
              Schedule Architectural Audit
              <Icon name="arrow_forward" className="ml-xs" />
            </Link>
            <Link
              href="/case-studies/fintech-core-banking"
              className="inline-flex w-full items-center justify-center rounded-full bg-surface-container/20 px-xxxl py-base text-body-sm-bold text-on-primary transition-colors duration-200 hover:bg-surface-container/30 sm:w-auto"
            >
              Explore Production Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
