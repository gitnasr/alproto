"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";

type Discipline = {
  cat: "core" | "cloud" | "data" | "client";
  tier: string;
  title: string;
  icon: string;
  summary: string;
  copy: string;
  chips: string[];
  specs: [string, string, boolean?][];
};

const FILTERS = [
  { id: "all", label: "All Disciplines" },
  { id: "core", label: "Distributed Systems & Core" },
  { id: "cloud", label: "Cloud Native & Infra" },
  { id: "data", label: "Storage & High-Volume Data" },
  { id: "client", label: "Frontend, Edge & WebGPU" },
] as const;

const DISCIPLINES: Discipline[] = [
  {
    cat: "core",
    tier: "Tier 01 // Runtime",
    title: "Distributed Consensus & Low-Latency",
    icon: "memory",
    summary: "Rust • Go • eBPF",
    copy: "Zero-allocation kernel-bypass networking, lock-free concurrency, and state-machine replication tailored for trading desks, real-time telemetry, and blockchain validators.",
    chips: [
      "Rust (Tokio / Actix)",
      "Go (gRPC, netpoll)",
      "Apache Kafka / Redpanda",
      "eBPF / XDP Filters",
      "FlatBuffers / Protobuf",
    ],
    specs: [
      ["Deterministic Sourcing", "Strict serializability & verifiable logs"],
      ["Packet Serialization", "Zero-copy mmap with Cap'n Proto"],
      ["Network Bypass", "Sub-100μs socket latency via io_uring", true],
    ],
  },
  {
    cat: "cloud",
    tier: "Tier 02 // Orchestration",
    title: "Cloud Native & Mesh Infrastructure",
    icon: "hub",
    summary: "K8s • Terraform",
    copy: "Self-healing sovereign mesh clusters spanning multi-cloud targets. GitOps declarative state management with continuous automated chaos resilience testing.",
    chips: [
      "Kubernetes (EKS / GKE)",
      "Envoy Proxy / Istio",
      "Cilium / WireGuard mTLS",
      "Terraform CDK / Pulumi",
      "ArgoCD / Flux Engine",
    ],
    specs: [
      ["Multi-Region RTO", "< 3.0 seconds automated drain", true],
      ["Policy Enforcement", "OPA Gatekeeper + Sigstore attestation"],
      ["Telemetry Plane", "OpenTelemetry native with Grafana Mimir"],
    ],
  },
  {
    cat: "data",
    tier: "Tier 03 // State Engines",
    title: "Real-Time Data & Distributed Stores",
    icon: "database",
    summary: "Scylla • ClickHouse",
    copy: "Multi-master storage fabrics engineered for write-heavy loads, column-oriented analytical OLAP query engines, and stateful streaming windows.",
    chips: [
      "ScyllaDB Enterprise",
      "CockroachDB Dedicated",
      "ClickHouse Cloud",
      "AWS Aurora Serverless v2",
      "Apache Flink • Kafka Streams",
    ],
    specs: [
      ["Throughput Stress", "125,000+ durable writes/sec", true],
      ["OLAP Aggregation", "1.2B rows scanned < 40ms in ClickHouse"],
      ["Consensus Engine", "Raft partition tolerant, Raft leader election"],
    ],
  },
  {
    cat: "client",
    tier: "Tier 04 // Interactive Surface",
    title: "High-Performance Web & GPU Interfaces",
    icon: "terminal",
    summary: "Next.js • WebGPU",
    copy: "Hardware-accelerated analytical surfaces, complex financial and geospatial canvas dashboards rendering 60fps streams, integrated with WebAssembly pipelines.",
    chips: [
      "Next.js App Router",
      "TypeScript Strict-Null",
      "WebGPU • Three.js Shaders",
      "Rust WASM Bindgen",
      "Tailwind UI Architecture",
    ],
    specs: [
      ["Client FPS Floor", "Solid 60fps on 200k rendered points", true],
      ["Bundle Optimization", "< 38kb First Load JS initial chunk"],
      ["Client Encryption", "SubtleCrypto client-side envelope sealing"],
    ],
  },
];

type Blueprint = {
  id: string;
  btnIcon: string;
  btnLabel: string;
  domain: string;
  domainTone: string;
  ref: string;
  title: string;
  copy: string;
  steps: [string, string][];
  kpis: [string, string, string][];
  panelTitle: string;
  panelDotTone: string;
  panelRegion: string;
  nodes: { icon: string; iconTone: string; title: string; sub: string; stat: string; statTone: string }[];
  split?: { label: string; title: string; note: string; noteTone: string }[];
  stack: string;
  footNote: string;
};

const BLUEPRINTS: Blueprint[] = [
  {
    id: "patternA",
    btnIcon: "alt_route",
    btnLabel: "Pattern A: Active-Active Event Sourcing",
    domain: "Fintech & High Volume",
    domainTone: "bg-primary/10 text-primary",
    ref: "Pattern #ARCH-204-EVS",
    title: "Active-Active Multi-Region Event Sourcing",
    copy: "Engineered for global clearinghouses requiring total order serialization without cross-continental locking penalties. Combines Rust asynchronous dispatchers with partition-tolerant Kafka event backbones and Aurora multi-master snapshots.",
    steps: [
      [
        "Deterministic Edge Ingress",
        "Anycast routing terminates TLS 1.3 at local edge with ephemeral state validation.",
      ],
      [
        "Non-Blocking Command Bus",
        "Tokio actor system validates state transitions against immutable ledger in <300μs.",
      ],
      [
        "Cross-Region Raft Append",
        "Kafka topic partitioned with strict idempotent producers; asynchronous ACK guarantees durability.",
      ],
      [
        "Materialized Read Models",
        "CQRS consumer instances reproject events into ScyllaDB & Redis for sub-millisecond query caches.",
      ],
    ],
    kpis: [
      ["Throughput", "380k ops/sec", "text-ink-deep"],
      ["Write Latency", "< 1.4ms p99", "text-primary"],
      ["Data Loss (RPO)", "0 (Strictly Zero)", "text-status-success"],
    ],
    panelTitle: "Interactive Topology Preview",
    panelDotTone: "bg-status-success",
    panelRegion: "US-EAST • EU-CENTRAL",
    nodes: [
      {
        icon: "router",
        iconTone: "text-accent-electric",
        title: "Envoy Gateway Ingress",
        sub: "HTTP/3 • gRPC Multiplexing",
        stat: "220,000 conn",
        statTone: "text-status-success",
      },
      {
        icon: "speed",
        iconTone: "text-status-warning",
        title: "Rust / Tokio Command Sinks",
        sub: "Deterministic Mutex-Free Actors",
        stat: "p99: 410μs",
        statTone: "text-primary-fixed",
      },
    ],
    split: [
      {
        label: "Event Ledger",
        title: "Kafka Cluster",
        note: "Triple Replication",
        noteTone: "text-status-success",
      },
      {
        label: "Read Projection",
        title: "ScyllaDB Shards",
        note: "< 800μs read queries",
        noteTone: "text-accent-electric",
      },
    ],
    stack: "Stack: Rust 1.78, Kafka 3.6, ScyllaDB 5.4",
    footNote: "Verified Architecture",
  },
  {
    id: "patternB",
    btnIcon: "camera",
    btnLabel: "Pattern B: Sub-10ms Edge Vision Pipeline",
    domain: "Edge AI & Diagnostics",
    domainTone: "bg-accent-purple/10 text-accent-purple",
    ref: "Pattern #ARCH-712-VIS",
    title: "Sub-10ms Medical & Financial Edge Vision",
    copy: "Designed for real-time surgical and biometric identity verification hardware. Integrates client-side WebGPU compute shaders with quantized PyTorch TensorRT inference running within local Kubernetes edge gateways.",
    steps: [
      [
        "Client Pre-Processing in WebGPU",
        "Frame normalization, noise reduction, and vector tensor mapping on client GPUs via WGSL.",
      ],
      [
        "Low-Overhead gRPC Streaming",
        "Bidirectional binary pipe over HTTP/2 using custom zero-copy Protobuf envelopes.",
      ],
      [
        "Quantized TensorRT Execution",
        "NVIDIA Triton server runs INT8 batching with automatic GPU core pinning.",
      ],
    ],
    kpis: [
      ["Inference", "6.8ms p99", "text-primary"],
      ["Frame Rate", "120 FPS Sustained", "text-ink-deep"],
      ["Model Footprint", "42MB (Quantized)", "text-secondary"],
    ],
    panelTitle: "Edge Processing Mesh",
    panelDotTone: "bg-accent-electric",
    panelRegion: "ON-DEVICE • TRITON CORE",
    nodes: [
      {
        icon: "videocam",
        iconTone: "text-accent-electric",
        title: "Client WebGPU Shader Shaper",
        sub: "WGSL Fast-Fourier Transform",
        stat: "1.1ms",
        statTone: "text-status-success",
      },
      {
        icon: "developer_board",
        iconTone: "text-status-warning",
        title: "Triton Inference Cluster",
        sub: "TensorRT-LLM / INT8 Acceleration",
        stat: "5.2ms",
        statTone: "text-primary-fixed",
      },
    ],
    stack: "Stack: WebGPU, PyTorch 2.3, NVIDIA Triton, gRPC",
    footNote: "ISO 13485 Compliant",
  },
  {
    id: "patternC",
    btnIcon: "schema",
    btnLabel: "Pattern C: High-Capacity Graph Routing",
    domain: "Logistics & Spatial Graph",
    domainTone: "bg-status-warning/10 text-charcoal",
    ref: "Pattern #ARCH-553-GEO",
    title: "Graph-Based Dynamic Route Computation at Scale",
    copy: "High-throughput dispatch engine recalculating optimal multi-modal travel paths under live traffic anomalies for enterprise courier fleets across 180 metropolitan sectors.",
    steps: [
      [
        "Geospatial Ingestion via Apache Flink",
        "Sliding temporal windows aggregate continuous telemetry from 850k active couriers.",
      ],
      [
        "Distributed In-Memory Neo4j Shards",
        "Graph partition trees update edge weights synchronously with negligible lock contention.",
      ],
      [
        "A* Heuristic Solver in Go Netpoll",
        "Multi-threaded branch pruning delivers rerouted navigation bundles directly via WebSocket.",
      ],
    ],
    kpis: [
      ["Graph Edges", "4.2 Billion", "text-ink-deep"],
      ["Query Latency", "< 4.1ms", "text-primary"],
      ["Stream SLA", "99.999%", "text-status-success"],
    ],
    panelTitle: "Graph Sharding Matrix",
    panelDotTone: "bg-status-warning",
    panelRegion: "DISTRIBUTED SPATIAL",
    nodes: [
      {
        icon: "stream",
        iconTone: "text-accent-electric",
        title: "Flink Window Aggregator",
        sub: "Real-time GPS point deduplication",
        stat: "1.2M msg/s",
        statTone: "text-status-success",
      },
      {
        icon: "share",
        iconTone: "text-primary-fixed",
        title: "Neo4j Enterprise Clustered",
        sub: "Dynamic Dijkstra traversal",
        stat: "Sub-5ms",
        statTone: "text-primary-fixed",
      },
    ],
    stack: "Stack: Go 1.22, Apache Flink, Neo4j, Redis Enterprise",
    footNote: "Production Live",
  },
];

export function DisciplineMatrix() {
  const [filter, setFilter] = useState<string>("all");
  const visible = DISCIPLINES.filter((d) => filter === "all" || d.cat === filter);

  return (
    <section id="stack-matrix" className="mx-auto w-full max-w-shell px-xxl py-section-sm">
      <div className="mb-xl flex flex-col gap-lg">
        <div className="flex flex-col gap-xs">
          <span className="text-caption-bold uppercase tracking-wider text-primary">
            Discipline Catalog
          </span>
          <h2 className="text-heading-lg text-ink-deep">Core Engineering Matrix</h2>
        </div>

        <div
          role="tablist"
          aria-label="Filter engineering disciplines"
          className="flex w-fit max-w-full gap-xs overflow-x-auto rounded-full bg-surface-soft p-xxs"
        >
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.id)}
                className={`shrink-0 rounded-full px-base py-xs whitespace-nowrap text-body-sm-bold transition-all ${
                  active
                    ? "bg-primary-container text-on-primary shadow-sm"
                    : "text-charcoal hover:text-ink-deep"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-xxl md:grid-cols-2">
        {visible.map((d) => (
          <article
            key={d.title}
            className="flex flex-col rounded-xl bg-canvas p-xxxl shadow-md transition-all hover:shadow-xl"
          >
            <div className="mb-base flex flex-wrap items-center justify-between gap-base pb-base">
              <div className="flex items-center gap-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-container text-primary">
                  <Icon name={d.icon} size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-caption-bold uppercase text-primary">{d.tier}</span>
                  <h3 className="text-heading-sm font-semibold text-ink-deep">{d.title}</h3>
                </div>
              </div>
              <span className="rounded-full bg-surface-soft px-xs py-xxs text-caption-bold text-secondary">
                {d.summary}
              </span>
            </div>

            <p className="mb-xl text-body-md text-secondary">{d.copy}</p>

            <div className="mb-xl flex flex-wrap gap-xs">
              {d.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-surface-soft px-md py-xxs text-caption-bold text-ink-body"
                >
                  {chip}
                </span>
              ))}
            </div>

            <dl className="mt-auto flex flex-col gap-xs rounded-md bg-surface-soft/60 p-base">
              {d.specs.map(([label, value, highlight]) => (
                <div
                  key={label}
                  className="flex flex-wrap items-center justify-between gap-xs py-xs"
                >
                  <dt className="text-body-sm-bold text-ink-deep">{label}</dt>
                  <dd
                    className={
                      highlight ? "text-body-sm font-semibold text-primary" : "text-body-sm text-secondary"
                    }
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BlueprintSelector() {
  const [active, setActive] = useState(BLUEPRINTS[0].id);
  const bp = BLUEPRINTS.find((b) => b.id === active)!;

  return (
    <section className="w-full bg-surface-soft py-section">
      <div className="mx-auto flex max-w-shell flex-col gap-section-sm px-xxl">
        <div className="flex max-w-3xl flex-col gap-xs">
          <span className="text-caption-bold uppercase tracking-wider text-primary">
            Production Blueprint Selector
          </span>
          <h2 className="text-heading-lg text-ink-deep">Battle-Tested Architectural Topologies</h2>
          <p className="text-body-md text-secondary">
            Click through verified patterns engineered by Nexus for tier-1 enterprises. Examine
            complete data paths, failover guarantees, and live pipeline topology diagrams.
          </p>
        </div>

        <div role="tablist" aria-label="Architecture blueprints" className="flex flex-wrap gap-sm">
          {BLUEPRINTS.map((b) => {
            const on = b.id === active;
            return (
              <button
                key={b.id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setActive(b.id)}
                className={`flex items-center gap-xs rounded-full px-xl py-sm text-body-sm-bold transition-all ${
                  on ? "bg-ink-deep text-on-primary shadow-md" : "bg-canvas text-charcoal shadow-sm"
                }`}
              >
                <Icon name={b.btnIcon} />
                {b.btnLabel}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-xxxl rounded-xl bg-canvas p-xxl shadow-xl lg:flex-row lg:p-xxxl">
          <div className="flex flex-1 flex-col gap-xl">
            <div className="flex flex-wrap items-center gap-xs">
              <span
                className={`rounded-full px-xs py-xxs text-caption-bold uppercase ${bp.domainTone}`}
              >
                {bp.domain}
              </span>
              <span className="text-caption text-stone">{bp.ref}</span>
            </div>

            <h3 className="text-heading-md font-bold text-ink-deep">{bp.title}</h3>
            <p className="text-body-md leading-relaxed text-secondary">{bp.copy}</p>

            <ol className="mt-xs flex flex-col gap-base">
              {bp.steps.map(([title, copy], i) => (
                <li key={title} className="flex items-start gap-md">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-container text-caption-bold text-on-primary">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block text-body-sm-bold text-ink-deep">{title}</span>
                    <span className="text-body-sm text-secondary">{copy}</span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="grid grid-cols-1 gap-md rounded-md bg-surface-soft p-base pt-base sm:grid-cols-3">
              {bp.kpis.map(([label, value, tone]) => (
                <div key={label}>
                  <span className="block text-caption uppercase text-stone">{label}</span>
                  <span className={`text-body-md-bold ${tone}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Topology panel */}
          <div className="flex flex-1 flex-col justify-between rounded-xl bg-ink-deep p-xxl text-on-primary shadow-2xl lg:p-xxxl">
            <div className="mb-base flex flex-wrap items-center justify-between gap-xs pb-base">
              <div className="flex items-center gap-xs">
                <span className={`h-3 w-3 rounded-full ${bp.panelDotTone}`} />
                <span className="text-caption-bold uppercase tracking-wider text-surface-container">
                  {bp.panelTitle}
                </span>
              </div>
              <span className="text-caption text-stone">{bp.panelRegion}</span>
            </div>

            <div className="flex flex-col gap-base py-xl">
              {bp.nodes.map((n, i) => (
                <div key={n.title} className="flex flex-col gap-base">
                  {i > 0 && (
                    <div className="flex justify-center text-accent-electric">
                      <Icon name="south" size={20} className="animate-bounce" />
                    </div>
                  )}
                  <div
                    className={`flex items-center justify-between gap-base rounded-md p-base ${
                      i === 0 ? "bg-surface-container/10 backdrop-blur" : "bg-surface-container/20 shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-base">
                      <Icon name={n.icon} size={24} className={n.iconTone} />
                      <div className="flex flex-col">
                        <span className="text-body-sm-bold text-on-primary">{n.title}</span>
                        <span className="text-caption text-stone">{n.sub}</span>
                      </div>
                    </div>
                    <span className={`text-caption-bold ${n.statTone}`}>{n.stat}</span>
                  </div>
                </div>
              ))}

              {bp.split && (
                <>
                  <div className="flex justify-center text-accent-electric">
                    <Icon name="south" size={20} className="animate-bounce" />
                  </div>
                  <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
                    {bp.split.map((s) => (
                      <div
                        key={s.label}
                        className="flex flex-col gap-xxs rounded-md bg-surface-container/10 p-base"
                      >
                        <span className="text-caption-bold uppercase text-stone">{s.label}</span>
                        <span className="text-body-sm-bold text-on-primary">{s.title}</span>
                        <span className={`text-caption ${s.noteTone}`}>{s.note}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-xs pt-base text-caption text-stone">
              <span>{bp.stack}</span>
              <span className="flex items-center gap-1 text-on-primary">
                <Icon name="check_circle" size={14} className="text-status-success" />
                {bp.footNote}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
