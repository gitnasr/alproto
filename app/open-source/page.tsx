import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Open Source Registry",
  description:
    "How Nexus Dev engages with open source: upstream-first contributions, responsible disclosure, and tooling we release from client-funded work.",
};

function Dot() {
  return <span className="text-accent-electric">.</span>;
}

const PRINCIPLES = [
  {
    icon: "upload",
    title: "Upstream First",
    copy: "Fixes and improvements to the libraries we depend on go back upstream, not into private forks that rot.",
  },
  {
    icon: "license",
    title: "Clean Licensing",
    copy: "Every dependency in a client system is license-audited. Releases from our own work ship under permissive licenses.",
  },
  {
    icon: "bug_report",
    title: "Responsible Disclosure",
    copy: "Vulnerabilities we uncover during audits are reported privately to maintainers and disclosed on their timeline.",
  },
  {
    icon: "diversity_3",
    title: "Maintainer Support",
    copy: "We sponsor and contribute engineering time to the critical projects our production stacks are built on.",
  },
];

const FOCUS_AREAS = [
  {
    tag: "Reliability Tooling",
    title: "Chaos & Verification Harnesses",
    copy: "Test harnesses for failure injection, shadow-traffic diffing, and cutover verification, generalized from engagement work.",
    stack: ["Kubernetes", "Envoy", "OpenTelemetry"],
  },
  {
    tag: "Data Infrastructure",
    title: "Streaming Pipeline Utilities",
    copy: "Connectors, schema-migration gates, and replay tooling for change-data-capture and event-stream pipelines.",
    stack: ["Kafka", "Debezium", "PostgreSQL"],
  },
  {
    tag: "Performance",
    title: "Profiling & Benchmark Kits",
    copy: "Reproducible load-generation and flame-graph tooling used in our architectural audits, packaged for general use.",
    stack: ["eBPF", "pprof", "Grafana"],
  },
];

export default function OpenSourcePage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-[520px] w-[520px] rounded-full bg-accent-electric/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-[380px] w-[380px] rounded-full bg-primary-container/15 blur-3xl" />

        <div className="relative mx-auto flex max-w-shell flex-col gap-xl px-xxl">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-xs rounded-full bg-canvas/10 px-base py-xxs backdrop-blur">
              <Icon name="code" size={16} className="text-accent-electric" />
              <span className="text-caption-bold uppercase tracking-wider text-canvas/80">
                Open Source Registry
              </span>
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-3xl text-display-lg-mobile font-bold tracking-tight text-canvas md:text-display-lg">
              We build on open source.{" "}
              <span className="text-accent-electric">We build it back</span>
              <Dot />
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-2xl text-subtitle-md leading-relaxed text-stone">
              Every system we ship stands on open infrastructure. This registry documents how we
              engage with that ecosystem: the principles we follow, and the areas where tooling from
              our engagements is generalized and released.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl px-xxl">
          <Reveal>
            <div className="flex flex-col gap-xs">
              <span className="text-caption-bold uppercase tracking-widest text-primary">
                Engagement Principles
              </span>
              <h2 className="text-heading-lg font-semibold text-ink-deep">
                How we participate
                <Dot />
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-base sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="flex h-full flex-col gap-xs rounded-xl bg-canvas p-xxl shadow-sm transition-shadow duration-200 hover:shadow-md">
                  <Icon name={p.icon} size={28} className="text-primary" />
                  <span className="mt-xs font-display text-heading-sm font-semibold text-ink-deep">
                    {p.title}
                  </span>
                  <p className="text-body-sm text-secondary">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas — dark */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary-container/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-shell flex-col gap-xxxl px-xxl">
          <Reveal>
            <div className="flex flex-col justify-between gap-base md:flex-row md:items-end">
              <div className="flex flex-col gap-xs">
                <span className="text-caption-bold uppercase tracking-widest text-accent-electric">
                  Release Pipeline
                </span>
                <h2 className="text-heading-lg font-semibold tracking-tight text-canvas">
                  Tooling focus areas
                  <Dot />
                </h2>
              </div>
              <p className="max-w-[28rem] text-body-sm text-stone">
                Where client-funded engineering is generalized into reusable tooling, subject to IP
                agreements and security review before any public release.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-xl md:grid-cols-3">
            {FOCUS_AREAS.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <article className="flex h-full flex-col gap-base rounded-xl border border-canvas/10 bg-canvas/5 p-xxl transition-colors duration-200 hover:bg-canvas/10">
                  <span className="self-start rounded-full bg-accent-electric/15 px-sm py-xxs text-caption-bold uppercase tracking-wide text-accent-electric">
                    {f.tag}
                  </span>
                  <h3 className="text-heading-sm font-semibold text-canvas">{f.title}</h3>
                  <p className="text-body-sm text-stone">{f.copy}</p>
                  <div className="mt-auto flex flex-wrap gap-xs pt-base">
                    {f.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-canvas/15 px-sm py-xxs text-caption-bold text-canvas/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-canvas py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="flex flex-col justify-between gap-xxl rounded-xl bg-surface-soft p-xxxl lg:flex-row lg:items-center">
              <div className="flex max-w-2xl flex-col gap-base">
                <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
                  Maintain a project we should be supporting?
                </h2>
                <p className="text-body-md leading-relaxed text-secondary">
                  If your project sits in one of our production stacks, we would like to hear from
                  you — for sponsorship, contribution, or coordinated security work.
                </p>
              </div>
              <Link
                href="/#discovery-portal"
                className="inline-flex shrink-0 items-center justify-center gap-xs rounded-full bg-ink-deep px-xxxl py-base text-center text-body-md-bold text-canvas shadow-md transition-colors duration-200 hover:bg-charcoal"
              >
                Contact the Team
                <Icon name="arrow_forward" size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
