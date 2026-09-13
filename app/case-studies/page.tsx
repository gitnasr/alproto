import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { ContactTrigger } from "@/components/contact-trigger";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected engagements: CRM integration, process automation, digital transformation, and ServiceNow and Azure platform delivery.",
};

function Dot() {
  return <span className="text-accent-electric">.</span>;
}

/* ---------------------------------------------------------------------------
   Diagram. This describes the actual mechanism of the engagement, which is
   what an icon in a rounded square cannot do. Inline SVG, no data invented.
--------------------------------------------------------------------------- */

/** Two systems of record, reconciled rather than overwritten. */
function SyncDiagram() {
  const box = "fill-canvas stroke-hairline";
  return (
    <svg viewBox="0 0 380 150" className="h-auto w-full" role="img" aria-label="Two systems syncing bidirectionally through a conflict-resolution layer">
      <rect x="4" y="30" width="118" height="52" rx="10" className={box} strokeWidth="1.5" />
      <text x="63" y="54" textAnchor="middle" className="fill-ink-deep" fontSize="12" fontWeight="700">Legacy CRM</text>
      <text x="63" y="70" textAnchor="middle" className="fill-secondary" fontSize="10">system of record</text>

      <rect x="258" y="30" width="118" height="52" rx="10" className={box} strokeWidth="1.5" />
      <text x="317" y="54" textAnchor="middle" className="fill-ink-deep" fontSize="12" fontWeight="700">HubSpot</text>
      <text x="317" y="70" textAnchor="middle" className="fill-secondary" fontSize="10">system of record</text>

      {/* Outbound, then return — drawn apart so the two directions stay legible */}
      <path d="M126 46 H 254" className="stroke-primary-container" strokeWidth="1.5" markerEnd="url(#arrowF)" />
      <path d="M254 68 H 126" className="stroke-primary-container" strokeWidth="1.5" markerEnd="url(#arrowB)" />

      <rect x="150" y="98" width="80" height="34" rx="8" className="fill-primary-container/10 stroke-primary-container/40" strokeWidth="1.2" />
      <text x="190" y="119" textAnchor="middle" className="fill-primary" fontSize="10" fontWeight="700">conflict rules</text>
      <path d="M190 82 V 96" className="stroke-primary-container/50" strokeWidth="1.2" strokeDasharray="3 3" />

      <defs>
        <marker id="arrowF" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0 0 L7 3.5 L0 7 z" className="fill-primary-container" />
        </marker>
        <marker id="arrowB" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0 0 L7 3.5 L0 7 z" className="fill-primary-container" />
        </marker>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ content */

const BBB_PROJECTS = [
  {
    n: "01",
    title: "Bidirectional CRM Sync",
    copy: "Two systems of record, each behaving as though it were the authoritative one. We built a two-way sync between a legacy CRM and HubSpot — field mapping, conflict resolution, and loop prevention — so a record edited in either platform reaches the other intact instead of being overwritten on the next cycle.",
    diagram: true,
  },
  {
    n: "02",
    title: "High-Scale Business Automation",
    copy: "Manual, human-coordinated processes rebuilt as orchestrated workflows on Camunda. Long-running processes modelled explicitly in BPMN, with approval steps, retries, and failure paths made visible — so the business could see where any case actually sat instead of having to ask someone.",
    diagram: false,
  },
  {
    n: "03",
    title: "Digital Transformation, End to End",
    copy: "A modernization programme rather than a single project: auditing what already existed, deciding what to keep, replace, or retire, and sequencing the work so the organisation kept operating throughout. On engagements like this the hard part is the order of the work, not the writing of it.",
    diagram: false,
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-primary-container/15 blur-3xl" />

        <div className="relative mx-auto flex max-w-shell flex-col gap-xl px-xxl">
          <Reveal>
            <h1 className="max-w-3xl text-display-lg-mobile font-bold tracking-tight text-canvas md:text-display-lg">
              Projects taken to <span className="text-accent-electric">production</span>
              <Dot />
            </h1>
          </Reveal>
          <Reveal delay={100}>
            {/* An index rather than a paragraph — it tells you what is here at a glance. */}
            <dl className="flex flex-col gap-xs border-t border-canvas/10 pt-lg text-body-sm sm:flex-row sm:flex-wrap sm:gap-xxxl">
              {[
                ["Sectors", "Non-profit · Education · Consumer goods · Pharma"],
                ["Work", "Integration · Automation · Transformation · Platform delivery"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-xxs">
                  <dt className="text-caption-bold uppercase tracking-widest text-canvas/40">{k}</dt>
                  <dd className="text-stone">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* One client, three projects — told as a relationship, not three cards */}
      <section className="w-full bg-canvas py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="flex flex-col gap-base lg:sticky lg:top-32">
                <img
                  src="/logos/bbb.svg"
                  alt="Better Business Bureau"
                  className="h-20 w-auto self-start"
                />
                <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
                  Better Business Bureau
                  <Dot />
                </h2>
                <p className="text-body-md leading-relaxed text-secondary">
                  Three projects across one relationship, over time — integration first, then the
                  processes that ran on top of it, then the wider programme those two made possible.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col lg:col-span-8">
              {BBB_PROJECTS.map((p, i) => (
                <Reveal key={p.n} delay={i * 90}>
                  <article
                    className={`flex flex-col gap-base py-xxl ${
                      i > 0 ? "border-t border-hairline-soft" : "lg:pt-0"
                    }`}
                  >
                    <div className="flex items-baseline gap-base">
                      <span className="font-display text-heading-lg font-bold text-surface-container-high">
                        {p.n}
                      </span>
                      <h3 className="text-heading-sm font-bold text-ink-deep">{p.title}</h3>
                    </div>
                    <p className="max-w-2xl text-body-md leading-relaxed text-secondary">{p.copy}</p>
                    {p.diagram && (
                      <div className="mt-xs max-w-[26rem] rounded-lg bg-surface-soft p-xl">
                        <SyncDiagram />
                      </div>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The paired engagement — one shape, two clients */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary-container/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-shell flex-col gap-xxxl px-xxl">
          <Reveal>
            <div className="flex flex-col gap-base">
              <h2 className="max-w-3xl text-heading-lg font-semibold tracking-tight text-canvas">
                The same engagement, run twice
                <Dot />
              </h2>
              <p className="max-w-2xl text-body-md leading-relaxed text-stone">
                Platform work started and left mid-flight, at two enterprises with very different
                tolerances for risk. Same stack, same shape, different constraints.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            {[
              {
                logo: "/logos/unilever.svg",
                name: "Unilever",
                sector: "Consumer goods",
                copy: "Our specialists took ownership of the client's ServiceNow and Azure workstreams — running the queues, finishing the configuration, and keeping delivery moving — so the work reached a finished state instead of waiting on capacity that never arrived.",
              },
              {
                logo: "/logos/astrazeneca.png",
                name: "AstraZeneca",
                sector: "Pharmaceuticals",
                copy: "The same work inside a regulated environment, where access control, change process, and audit trails apply to every step of it. We carried the unfinished workstreams forward under the client's own governance rather than importing ours.",
              },
            ].map((c, i) => (
              <Reveal key={c.name} delay={i * 120}>
                <div
                  className={`flex h-full flex-col gap-base py-xxl md:py-0 ${
                    i === 0
                      ? "border-b border-canvas/10 md:border-r md:border-b-0 md:pr-xxxl"
                      : "md:pl-xxxl"
                  }`}
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-7 w-auto self-start opacity-80 brightness-0 invert"
                  />
                  <p className="text-caption-bold uppercase tracking-wider text-canvas/40">
                    {c.sector}
                  </p>
                  <p className="text-body-md leading-relaxed text-stone">{c.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The one-off, offset rather than centred so the page does not settle */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <article className="grid grid-cols-1 gap-xl lg:grid-cols-12">
              <div className="lg:col-span-7 lg:col-start-4">
                <p className="mb-xs text-caption-bold uppercase tracking-widest text-primary">
                  Education technology
                </p>
                <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
                  Gravity Lab
                  <Dot />
                </h2>
                <p className="mt-base text-body-md leading-relaxed text-secondary">
                  An interactive learning platform built around doing rather than reading: guided
                  exercises, hands-on lessons, and progress tracking, with the interactive content
                  treated as a first-class part of the product instead of media bolted onto a course
                  list.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Close */}
      <section className="w-full bg-canvas py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="flex flex-col justify-between gap-xl border-t border-hairline-soft pt-xxl lg:flex-row lg:items-end">
              <p className="max-w-2xl text-heading-sm leading-relaxed font-normal text-ink-deep">
                Longer write-ups get published once the client is happy for us to, which takes rather
                longer than the work did. If one of these resembles your situation, ask about it
                directly — we can usually say more in a call than in public
                <Dot />
              </p>
              <ContactTrigger className="inline-flex shrink-0 items-center gap-xs rounded-full bg-ink-deep px-xxl py-base text-body-sm-bold text-canvas transition-colors hover:bg-charcoal">
                Book a 15 Minute Call
                <Icon name="arrow_forward" size={18} />
              </ContactTrigger>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
