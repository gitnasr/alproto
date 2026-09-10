import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { MediaFrame } from "@/components/media-frame";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes from production cutovers, distributed systems postmortems, and inference benchmarks — written by the engineers who ran them.",
};

const FEATURED = {
  category: "Distributed Systems",
  read: "18 min read",
  date: "May 2026",
  title: "Why Your Two-Phase Commit Is a Latency Tax You Never Agreed To",
  excerpt:
    "We replaced distributed 2PC with saga orchestration across a three-region ledger and cut p99 write latency from 340ms to 1.4ms. This is the full decision record: where 2PC actually earns its coordinator, why it almost never does at this scale, and the compensating-transaction model we shipped instead.",
  author: "Dana Keller",
  initials: "DK",
  role: "Founder & Principal Architect",
  tags: ["Rust", "Saga Orchestration", "Kafka", "CQRS"],
  media:
    "Coordinator timeline diagram contrasting two-phase commit round trips against compensating saga steps across three regions.",
};

const ARTICLES = [
  {
    category: "Modernization",
    title: "Parallel-Shadow Diffing: Proving a Rewrite Before You Trust It",
    excerpt:
      "Forking production traffic into an unreleased engine and reconciling 100M+ transactions is the only cutover evidence worth having. The harness, the diff taxonomy, and the failure classes it caught.",
    author: "Marek Brandt",
    initials: "MB",
    date: "Apr 2026",
    read: "14 min",
  },
  {
    category: "Applied ML",
    title: "Continuous Batching Is the Only Inference Optimization That Matters First",
    excerpt:
      "Before you quantize, before you distill, before you buy more GPUs: fix your scheduler. Measured TTFT and throughput across vLLM configurations at 10,000 concurrent sessions.",
    author: "Riya Tandon",
    initials: "RT",
    date: "Apr 2026",
    read: "11 min",
  },
  {
    category: "Platform",
    title: "Your Cluster Is Not Immutable Until You Have Destroyed It on Purpose",
    excerpt:
      "GitOps convergence claims are cheap. We tear down and reconstitute every production cluster from bare metal on a timer, and the 90-second budget is a hard sign-off gate.",
    author: "Sam Oyelaran",
    initials: "SO",
    date: "Mar 2026",
    read: "9 min",
  },
  {
    category: "Observability",
    title: "eBPF Told Us the Database Was Fine. The Connection Pool Was Not.",
    excerpt:
      "A postmortem on three weeks of misattributed latency. Kernel-level tracing found the contention four layers above where every dashboard was pointing.",
    author: "Sam Oyelaran",
    initials: "SO",
    date: "Mar 2026",
    read: "12 min",
  },
  {
    category: "Data Engineering",
    title: "Postgres Will Take You Further Than Your Architecture Diagram Suggests",
    excerpt:
      "Partitioning, logical replication, and pgvector cover more ground than most teams assume. A pragmatic ceiling analysis, and the three signals that mean you have genuinely outgrown it.",
    author: "Marek Brandt",
    initials: "MB",
    date: "Feb 2026",
    read: "15 min",
  },
  {
    category: "Engineering Practice",
    title: "The RFC Is the Product: Writing Specs That Survive Contact With Production",
    excerpt:
      "Every engagement opens with a written architectural record. What belongs in it, what must be an explicit non-goal, and why an unwritable design is an ununderstood one.",
    author: "Dana Keller",
    initials: "DK",
    date: "Feb 2026",
    read: "10 min",
  },
];

function Byline({
  initials,
  author,
  date,
  read,
}: {
  initials: string;
  author: string;
  date: string;
  read: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-xs">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-caption-bold font-bold text-primary">
        {initials}
      </span>
      <span className="text-body-sm-bold text-ink-deep">{author}</span>
      <span className="text-caption text-stone">•</span>
      <span className="text-caption text-secondary">{date}</span>
      <span className="text-caption text-stone">•</span>
      <span className="text-caption text-secondary">{read}</span>
    </div>
  );
}

export default function InsightsPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-canvas px-xxl pt-section pb-section-sm">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-primary-container/5 blur-3xl" />

        <div className="relative mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex flex-wrap items-center gap-xs">
            <span className="inline-flex items-center gap-xs rounded-full bg-surface-soft px-base py-xxs shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-status-success" />
              <span className="text-caption-bold uppercase tracking-wider text-ink-deep">
                Engineering Journal // Written From Production
              </span>
            </span>
            <span className="hidden text-caption text-secondary sm:inline-block">
              NO GUEST POSTS • NO GHOSTWRITERS
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-xxl lg:grid-cols-12">
            <div className="flex flex-col gap-lg lg:col-span-8">
              <h1 className="text-display-lg-mobile font-semibold tracking-tight text-ink-deep md:text-display-lg lg:text-hero-display">
                Field notes from <span className="text-primary">real cutovers.</span>
              </h1>
            </div>
            <div className="flex flex-col gap-base lg:col-span-4 lg:pt-base">
              <p className="text-subtitle-md leading-relaxed text-charcoal">
                Every article here is written by the engineer who ran the system it describes.
                Benchmarks come from production, postmortems name the wrong turn, and nothing is
                published unless we would defend it in an architecture review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="w-full bg-canvas px-xxl pb-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-section-sm">
          <div className="flex flex-col justify-between gap-base md:flex-row md:items-end">
            <div className="flex flex-col gap-xs">
              <div className="flex items-center gap-xs">
                <span className="h-2.5 w-2.5 rounded-full bg-primary-container" />
                <span className="text-caption-bold uppercase tracking-wider text-primary">
                  Latest Deep Dive
                </span>
              </div>
              <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
                This month from the studio
              </h2>
            </div>
          </div>

          <article className="grid grid-cols-1 items-center gap-xxl overflow-hidden rounded-xl bg-surface-soft p-xxl shadow-sm lg:grid-cols-12 lg:p-xxxl">
            <div className="flex flex-col gap-base lg:col-span-7">
              <div className="flex flex-wrap items-center gap-xs">
                <span className="rounded-full bg-primary-container px-xs py-xxs text-caption-bold uppercase text-canvas">
                  {FEATURED.category}
                </span>
                <span className="rounded-full bg-canvas px-xs py-xxs text-caption text-secondary">
                  {FEATURED.read}
                </span>
                <span className="rounded-full bg-canvas px-xs py-xxs text-caption text-secondary">
                  {FEATURED.date}
                </span>
              </div>

              <h3 className="text-heading-lg font-bold text-ink-deep">{FEATURED.title}</h3>
              <p className="text-subtitle-md text-secondary">{FEATURED.excerpt}</p>

              <div className="flex flex-wrap gap-xs pt-xs">
                {FEATURED.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-canvas px-md py-xxs text-caption-bold text-ink-body shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-base pt-base">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-body-md-bold font-bold text-primary">
                  {FEATURED.initials}
                </span>
                <div className="flex flex-col">
                  <span className="text-body-md-bold text-ink-deep">{FEATURED.author}</span>
                  <span className="text-caption text-secondary">{FEATURED.role}</span>
                </div>
              </div>

              <div className="pt-base">
                <span className="inline-flex items-center gap-xs rounded-full bg-canvas px-md py-xxs text-caption-bold uppercase tracking-wide text-secondary">
                  <Icon name="schedule" size={16} />
                  Full write-up coming soon
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-[360px] w-full overflow-hidden rounded-xl shadow-md">
                <MediaFrame icon="schema" label={FEATURED.media} />
                <div className="absolute inset-0 flex items-end bg-linear-to-t from-ink-deep/60 via-transparent to-transparent p-xl">
                  <div className="flex items-center gap-xs text-caption-bold text-canvas">
                    <Icon name="query_stats" className="text-accent-electric" />
                    Benchmarks reproduced on production traffic
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Article grid */}
      <section className="w-full bg-surface-soft px-xxl py-section-lg">
        <div className="mx-auto flex max-w-shell flex-col gap-xxxl">
          <div className="flex flex-col justify-between gap-base md:flex-row md:items-end">
            <div className="flex flex-col gap-xs">
              <span className="text-caption-bold uppercase tracking-widest text-primary">
                The Archive
              </span>
              <h2 className="text-heading-lg font-semibold text-ink-deep">
                Postmortems, benchmarks &amp; decision records
              </h2>
            </div>
            <p className="max-w-[28rem] text-body-sm text-secondary">
              Published when there is something measured to report. We would rather run six articles
              a year that hold up than a weekly post that does not.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a) => (
              <article
                key={a.title}
                className="group flex flex-col justify-between gap-xl rounded-lg bg-canvas p-xxl shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex flex-col gap-base">
                  <div className="flex items-center justify-between gap-xs">
                    <span className="rounded-full bg-surface-container-low px-sm py-xxs text-caption-bold uppercase text-secondary">
                      {a.category}
                    </span>
                  </div>
                  <h3 className="text-heading-sm font-semibold text-ink-deep transition-colors group-hover:text-primary">
                    {a.title}
                  </h3>
                  <p className="text-body-sm leading-relaxed text-charcoal">{a.excerpt}</p>
                </div>

                <div className="border-t border-hairline-soft pt-base">
                  <Byline
                    initials={a.initials}
                    author={a.author}
                    date={a.date}
                    read={a.read}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Digest CTA */}
      <section className="w-full bg-canvas px-xxl py-section-lg">
        <div className="relative mx-auto max-w-shell overflow-hidden rounded-lg bg-ink-deep p-xxxl text-on-primary shadow-xl">
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-primary-container/20 blur-3xl" />
          <div className="pointer-events-none absolute top-0 right-1/3 h-64 w-64 rounded-full bg-accent-electric/10 blur-2xl" />

          <div className="relative flex flex-col justify-between gap-xxxl lg:flex-row lg:items-center">
            <div className="flex max-w-2xl flex-col gap-base">
              <span className="inline-flex items-center gap-xs self-start rounded-full bg-canvas/10 px-base py-xxs text-caption-bold uppercase text-on-primary-container">
                <span className="h-2 w-2 rounded-full bg-accent-electric" />
                The Architecture Digest
              </span>
              <h2 className="text-display-lg-mobile font-semibold tracking-tight text-on-primary md:text-display-lg">
                One engineering write-up a month. Nothing else.
              </h2>
              <p className="text-subtitle-md leading-relaxed text-hairline">
                New postmortems and benchmark reports as they publish, sent by the engineer who wrote
                them. No product announcements, no event invitations, no drip sequence.
              </p>
            </div>

            <form action="#" className="flex w-full shrink-0 flex-col gap-base lg:w-auto">
              <label className="sr-only" htmlFor="digest-email">
                Work email
              </label>
              <input
                id="digest-email"
                name="email"
                type="email"
                required
                placeholder="Enter your work email..."
                className="h-[52px] w-full rounded-full bg-canvas/10 px-xxl text-body-sm text-canvas placeholder:text-steel transition-all focus:bg-canvas/15 focus:outline-2 focus:outline-accent-electric lg:w-[22rem]"
              />
              <button
                type="submit"
                className="inline-flex h-[52px] items-center justify-center gap-xs rounded-full bg-primary-container px-xxxl text-body-md-bold text-on-primary shadow-md transition-colors duration-200 hover:bg-primary"
              >
                Subscribe
                <Icon name="mail" size={20} />
              </button>
              <span className="flex items-start gap-xs text-caption text-secondary-fixed-dim">
                <Icon name="lock" size={16} className="mt-0.5 shrink-0 text-primary-fixed" />
                Unsubscribe in one click. We never share the list.
              </span>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
