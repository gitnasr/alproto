import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SOLUTIONS, getSolution } from "@/lib/solutions";
import { SERVICES } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.summary,
  };
}

function Dot() {
  return <span className="text-accent-electric">.</span>;
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const others = SOLUTIONS.filter((s) => s.slug !== solution.slug);

  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-primary-container/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-24 h-[380px] w-[380px] rounded-full bg-accent-electric/10 blur-3xl" />

        <div className="relative mx-auto max-w-shell px-xxl">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-xl flex items-center gap-xs text-caption text-canvas/50"
            >
              <Link href="/solutions" className="transition-colors hover:text-canvas">
                Solutions
              </Link>
              <Icon name="chevron_right" size={14} />
              <span className="text-canvas/80">{solution.name}</span>
            </nav>
          </Reveal>

          <div className="grid grid-cols-1 items-start gap-xxxl lg:grid-cols-12">
            <div className="flex flex-col gap-base lg:col-span-7">
              <Reveal delay={100}>
                <div className="flex items-center gap-base">
                  <span className="flex h-14 w-14 items-center justify-center rounded-md bg-accent-electric/15 text-accent-electric">
                    <Icon name={solution.icon} size={28} />
                  </span>
                  <h1 className="text-display-lg-mobile font-bold tracking-tight text-canvas md:text-display-lg">
                    {solution.name}
                    <Dot />
                  </h1>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-xs text-heading-sm font-normal text-accent-electric">
                  {solution.tagline}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p className="max-w-2xl text-subtitle-md leading-relaxed text-stone">
                  {solution.summary}
                </p>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-lg flex flex-wrap items-center gap-base">
                  <Link
                    href="/#discovery-portal"
                    className="inline-flex items-center justify-center gap-xs rounded-full bg-primary-container px-xxl py-[14px] text-body-sm-bold text-on-primary shadow-md transition-colors duration-200 hover:bg-primary"
                  >
                    Request a Project Assessment
                    <Icon name="arrow_forward" size={18} />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-xs rounded-full border border-canvas/25 px-xxl py-[14px] text-body-sm-bold text-canvas transition-colors duration-200 hover:border-canvas/50 hover:bg-canvas/10"
                  >
                    How We Work
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={250} className="lg:col-span-5">
              <div className="rounded-xl border border-canvas/10 bg-canvas/5 p-xxl">
                <span className="text-caption-bold uppercase tracking-wider text-canvas/50">
                  Typical Stack
                </span>
                <div className="mt-base flex flex-wrap gap-xs">
                  {solution.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-canvas/15 bg-canvas/5 px-md py-xxs text-caption-bold text-canvas/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-xl border-t border-canvas/10 pt-base text-caption text-stone">
                  We work in whatever the project already uses. This is what we most often find and
                  extend in this domain.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Signals */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="flex flex-col gap-base lg:sticky lg:top-32">
                <span className="text-caption-bold uppercase tracking-widest text-primary">
                  When Teams Call Us
                </span>
                <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
                  The signals that bring this work to us
                  <Dot />
                </h2>
                <p className="text-body-md text-secondary">
                  If more than one of these sounds familiar, an assessment is usually the cheapest
                  next step — it replaces guesswork with a scoped plan.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col gap-base lg:col-span-7">
              {solution.signals.map((signal, i) => (
                <Reveal key={signal} delay={i * 80}>
                  <div className="flex items-start gap-base rounded-xl bg-canvas p-xl shadow-sm">
                    <Icon
                      name="error"
                      size={22}
                      className="mt-xxs shrink-0 text-status-warning"
                    />
                    <p className="text-body-md text-ink-body">{signal}</p>
                  </div>
                </Reveal>
              ))}

              {solution.reassurance && (
                <Reveal delay={120}>
                  <div className="flex items-start gap-base rounded-xl border border-primary/20 bg-primary/5 p-xl">
                    <Icon
                      name="volunteer_activism"
                      size={22}
                      className="mt-xxs shrink-0 text-primary"
                    />
                    <p className="text-body-sm leading-relaxed text-charcoal">
                      {solution.reassurance}
                    </p>
                  </div>
                </Reveal>
              )}

              <Reveal delay={160}>
                <Link
                  href="/project-check"
                  className="group flex items-center gap-base rounded-xl border border-dashed border-hairline p-xl transition-colors hover:border-primary hover:bg-canvas"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-surface-container-low text-primary">
                    <Icon name="fact_check" size={22} />
                  </span>
                  <span className="flex flex-col gap-xxs">
                    <span className="text-body-sm-bold text-ink-deep">
                      Not sure how far along this is?
                    </span>
                    <span className="text-caption text-secondary">
                      Take the two-minute project check — nothing is sent anywhere.
                    </span>
                  </span>
                  <Icon
                    name="arrow_forward"
                    size={20}
                    className="ml-auto shrink-0 text-steel transition-colors group-hover:text-primary"
                  />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary-container/10 blur-3xl" />
        <div className="relative mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="mb-section-sm flex max-w-2xl flex-col gap-xs">
              <span className="text-caption-bold uppercase tracking-widest text-accent-electric">
                What We Deliver
              </span>
              <h2 className="text-heading-lg font-semibold tracking-tight text-canvas">
                Concrete work, not a capability list
                <Dot />
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-3">
            {solution.deliverables.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 100}>
                <div className="flex h-full flex-col gap-base rounded-xl border border-canvas/10 bg-canvas/5 p-xxl transition-colors hover:bg-canvas/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-electric/15 text-accent-electric">
                    <Icon name={d.icon} size={24} />
                  </span>
                  <h3 className="text-heading-sm font-bold text-canvas">{d.title}</h3>
                  <p className="text-body-sm text-stone">{d.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="w-full bg-canvas py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="mb-section-sm flex flex-col justify-between gap-base md:flex-row md:items-end">
              <div className="flex max-w-2xl flex-col gap-xs">
                <span className="text-caption-bold uppercase tracking-widest text-primary">
                  How It Runs
                </span>
                <h2 className="text-heading-lg font-semibold tracking-tight text-ink-deep">
                  The same arc, whatever the domain
                  <Dot />
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-xs text-body-sm-bold text-primary-container transition-colors hover:text-primary"
              >
                See the Full Process
                <Icon name="arrow_forward" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-base md:grid-cols-3 lg:grid-cols-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group flex h-full flex-col gap-xs rounded-lg bg-surface-soft p-base transition-colors hover:bg-surface-container-low"
                >
                  <span className="text-caption-bold text-primary">{s.step}</span>
                  <span className="text-body-sm-bold text-ink-deep transition-colors group-hover:text-primary">
                    {s.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other solutions */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <h2 className="mb-section-sm text-heading-lg font-semibold tracking-tight text-ink-deep">
              Other solution areas
              <Dot />
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-base md:grid-cols-2 lg:grid-cols-4">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 80}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col gap-xs rounded-xl bg-canvas p-xl shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-container/10 text-primary-container">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <span className="mt-xs text-body-md-bold text-ink-deep transition-colors group-hover:text-primary">
                    {s.name}
                  </span>
                  <span className="text-caption text-secondary">{s.tagline}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
