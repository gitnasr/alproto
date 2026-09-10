import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { MediaFrame } from "@/components/media-frame";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected engagements: stalled and mission-critical projects taken to production, documented with the metrics that mattered.",
};

const STUDIES = [
  {
    href: "/case-studies/fintech-core-banking",
    tag: "Fintech / Core Banking",
    title: "Fintech Core Banking Re-architecture",
    copy: "Re-architecting a multi-region core banking ledger for 50,000+ TPS and zero-defect settlement — 9 months from discovery to a zero-downtime cutover.",
    stack: ["Rust", "Kafka", "ScyllaDB", "Kubernetes"],
    media: "Core ledger topology",
    icon: "account_balance",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-canvas px-xxl pt-section pb-section-lg">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-primary-container/5 blur-3xl" />
        <div className="relative mx-auto flex max-w-shell flex-col gap-xl">
          <span className="inline-flex w-fit items-center gap-xs rounded-full bg-surface-soft px-base py-xxs shadow-sm">
            <Icon name="folder_open" size={16} className="text-primary" />
            <span className="text-caption-bold uppercase tracking-wider text-ink-deep">
              Case Studies
            </span>
          </span>
          <h1 className="max-w-3xl text-display-lg-mobile font-semibold tracking-tight text-ink-deep md:text-display-lg">
            Projects taken to <span className="text-primary">production.</span>
          </h1>
          <p className="max-w-2xl text-subtitle-md leading-relaxed text-charcoal">
            Documented engagements with the numbers that mattered: what we inherited, what we
            changed, and what shipped. More write-ups are published as client confidentiality
            windows close.
          </p>
        </div>
      </section>

      {/* Studies */}
      <section className="w-full bg-surface-soft px-xxl py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxl">
          {STUDIES.map((s) => (
            <Link
              key={s.href}
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
                      className="rounded-full bg-surface-container-low px-sm py-xxs text-caption-bold text-ink-body"
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
                  <MediaFrame icon={s.icon} label={s.media} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
