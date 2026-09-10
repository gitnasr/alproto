import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Open Source Registry",
  description:
    "How Nexus Dev engages with open source: upstream-first contributions, responsible disclosure, and tooling we release from client-funded work.",
};

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
      <section className="relative w-full overflow-hidden bg-canvas px-xxl pt-section pb-section-lg">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-accent-electric/5 blur-3xl" />
        <div className="relative mx-auto flex max-w-shell flex-col gap-xl">
          <span className="inline-flex w-fit items-center gap-xs rounded-full bg-surface-soft px-base py-xxs shadow-sm">
            <Icon name="code" size={16} className="text-primary" />
            <span className="text-caption-bold uppercase tracking-wider text-ink-deep">
              Open Source Registry
            </span>
          </span>
          <h1 className="max-w-3xl text-display-lg-mobile font-semibold tracking-tight text-ink-deep md:text-display-lg">
            We build on open source. <span className="text-primary">We build it back.</span>
          </h1>
          <p className="max-w-2xl text-subtitle-md leading-relaxed text-charcoal">
            Every system we ship stands on open infrastructure. This registry documents how we
            engage with that ecosystem: the principles we follow, and the areas where tooling from
            our engagements is generalized and released.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="w-full bg-surface-soft px-xxl py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex flex-col gap-xs">
            <span className="text-caption-bold uppercase tracking-widest text-primary">
              Engagement Principles
            </span>
            <h2 className="text-heading-lg font-semibold text-ink-deep">
              How We Participate
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-base sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-xs rounded-lg bg-canvas p-xxl shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <Icon name={p.icon} size={28} className="text-primary" />
                <span className="mt-xs font-display text-heading-sm font-semibold text-ink-deep">
                  {p.title}
                </span>
                <p className="text-body-sm text-secondary">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="w-full bg-canvas px-xxl py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex flex-col justify-between gap-base md:flex-row md:items-end">
            <div className="flex flex-col gap-xs">
              <span className="text-caption-bold uppercase tracking-widest text-primary">
                Release Pipeline
              </span>
              <h2 className="text-heading-lg font-semibold text-ink-deep">Tooling Focus Areas</h2>
            </div>
            <p className="max-w-[28rem] text-body-sm text-secondary">
              Where client-funded engineering is generalized into reusable tooling, subject to IP
              agreements and security review before any public release.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-xxl md:grid-cols-3">
            {FOCUS_AREAS.map((f) => (
              <article
                key={f.title}
                className="flex flex-col gap-base rounded-lg bg-surface-soft p-xxl"
              >
                <span className="self-start rounded-full bg-primary/10 px-sm py-xxs text-caption-bold uppercase tracking-wide text-primary">
                  {f.tag}
                </span>
                <h3 className="text-heading-sm font-semibold text-ink-deep">{f.title}</h3>
                <p className="text-body-sm text-secondary">{f.copy}</p>
                <div className="mt-auto flex flex-wrap gap-xs pt-base">
                  {f.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface-container-low px-sm py-xxs text-caption-bold text-ink-body"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-canvas px-xxl pb-hero">
        <div className="relative mx-auto max-w-shell overflow-hidden rounded-lg bg-ink-deep p-xxxl text-on-primary shadow-xl">
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-accent-electric/10 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-xxl lg:flex-row lg:items-center">
            <div className="flex max-w-2xl flex-col gap-base">
              <h2 className="text-heading-lg font-semibold tracking-tight text-on-primary">
                Maintain a project we should be supporting?
              </h2>
              <p className="text-body-md leading-relaxed text-hairline">
                If your project sits in one of our production stacks, we would like to hear from
                you — for sponsorship, contribution, or coordinated security work.
              </p>
            </div>
            <Link
              href="/#discovery-portal"
              className="inline-flex shrink-0 items-center justify-center gap-xs rounded-full bg-primary-container px-xxxl py-base text-center text-body-md-bold text-on-primary shadow-md transition-colors duration-200 hover:bg-primary"
            >
              Contact the Team
              <Icon name="arrow_forward" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
