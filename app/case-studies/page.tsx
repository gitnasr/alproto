import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected engagements: stalled and mission-critical projects taken to production, documented with the metrics that mattered.",
};

function Dot() {
  return <span className="text-accent-electric">.</span>;
}

const STUDIES = [
  {
    href: "/case-studies/fintech-core-banking",
    tag: "Fintech / Core Banking",
    title: "Fintech Core Banking Re-architecture",
    copy: "Re-architecting a multi-region core banking ledger for 50,000+ TPS and zero-defect settlement — 9 months from discovery to a zero-downtime cutover.",
    stack: ["Rust", "Kafka", "ScyllaDB", "Kubernetes"],
    media: "Core ledger topology",
    photo:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70",
    icon: "account_balance",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-primary-container/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-24 h-[380px] w-[380px] rounded-full bg-accent-electric/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-shell flex-col gap-xl px-xxl">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-xs rounded-full bg-canvas/10 px-base py-xxs backdrop-blur">
              <Icon name="folder_open" size={16} className="text-accent-electric" />
              <span className="text-caption-bold uppercase tracking-wider text-canvas/80">
                Case Studies
              </span>
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-3xl text-display-lg-mobile font-bold tracking-tight text-canvas md:text-display-lg">
              Projects taken to <span className="text-accent-electric">production</span>
              <Dot />
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-2xl text-subtitle-md leading-relaxed text-stone">
              Documented engagements with the numbers that mattered: what we inherited, what we
              changed, and what shipped. More write-ups are published as client confidentiality
              windows close.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Studies */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxl px-xxl">
          {STUDIES.map((s) => (
            <Reveal key={s.href}>
              <Link
                href={s.href}
                className="group grid grid-cols-1 items-center gap-xxl overflow-hidden rounded-xl bg-canvas p-xxl shadow-sm transition-shadow duration-200 hover:shadow-md lg:grid-cols-12 lg:p-xxxl"
              >
                <div className="flex flex-col gap-base lg:col-span-7">
                  <span className="self-start rounded-full bg-primary/10 px-sm py-xxs text-caption-bold uppercase tracking-wide text-primary">
                    {s.tag}
                  </span>
                  <h2 className="text-heading-lg font-semibold text-ink-deep transition-colors group-hover:text-primary">
                    {s.title}
                  </h2>
                  <p className="text-body-md text-secondary">{s.copy}</p>
                  <div className="flex flex-wrap gap-xs pt-xs">
                    {s.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-surface-soft px-sm py-xxs text-caption-bold text-ink-body"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-xs pt-base text-body-sm-bold text-ink-deep transition-colors group-hover:text-primary">
                    Read the full study
                    <Icon name="arrow_forward" />
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative h-[280px] w-full overflow-hidden rounded-xl shadow-md">
                    <MediaFrame src={s.photo} icon={s.icon} label={s.media} />
                    <div className="absolute inset-0 bg-linear-to-t from-ink-deep/50 via-transparent to-transparent" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* More coming */}
          <Reveal delay={120}>
            <div className="flex flex-col items-start justify-between gap-base rounded-xl border border-dashed border-hairline p-xxl md:flex-row md:items-center">
              <div className="flex items-start gap-base">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-surface-container-low text-charcoal">
                  <Icon name="schedule" size={22} />
                </span>
                <div className="flex flex-col gap-xxs">
                  <span className="text-body-md-bold text-ink-deep">More studies in the queue</span>
                  <span className="text-body-sm text-secondary">
                    Additional write-ups are published as client confidentiality windows close.
                  </span>
                </div>
              </div>
              <Link
                href="/#discovery-portal"
                className="inline-flex shrink-0 items-center gap-xs text-body-sm-bold text-primary transition-colors hover:text-ink-deep"
              >
                Discuss your project
                <Icon name="arrow_forward" size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
