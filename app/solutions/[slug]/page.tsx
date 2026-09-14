import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SOLUTIONS, getSolution } from "@/lib/solutions";
import { SERVICES } from "@/lib/services";
import { ContactTrigger } from "@/components/contact-trigger";

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
  return <span className="text-rust">.</span>;
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
            <div className="flex flex-col gap-base lg:col-span-8">
              <Reveal delay={100}>
                <h1 className="text-display-lg-mobile font-bold tracking-tight text-canvas md:text-display-lg">
                  {solution.name}
                  <Dot />
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-heading-sm font-normal text-accent-electric">
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
                  <ContactTrigger className="inline-flex items-center justify-center gap-xs rounded-full bg-primary-container px-xxl py-[14px] text-body-sm-bold text-on-primary shadow-md transition-colors duration-200 hover:bg-primary">
                    Book a 15 Minute Call
                    <Icon name="arrow_forward" size={18} />
                  </ContactTrigger>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-xs rounded-full border border-canvas/25 px-xxl py-[14px] text-body-sm-bold text-canvas transition-colors duration-200 hover:border-canvas/50 hover:bg-canvas/10"
                  >
                    How We Work
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* No stack list: we work in whatever the project already uses, and
                naming tools we "typically" use claims a house stack we do not have. */}
            <Reveal delay={250} className="lg:col-span-4">
              <p className="border-t border-canvas/20 pt-base text-body-sm leading-relaxed text-stone">
                We work in whatever the project already uses — its language, its framework, its
                cloud. Taking over a build means adopting the decisions already made, not restarting
                on ours.
              </p>
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
                <p className="text-body-md leading-relaxed text-secondary">
                  If more than one of these sounds familiar, an assessment is usually the cheapest
                  next step — it replaces guesswork with a scoped plan.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col lg:col-span-7">
              {solution.signals.map((signal, i) => (
                <Reveal key={signal} delay={i * 80}>
                  <div
                    className={`flex items-baseline gap-base py-base ${
                      i > 0 ? "border-t border-hairline" : "lg:pt-0"
                    }`}
                  >
                    <span className="shrink-0 text-caption-bold tabular-nums text-stone">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-body-md leading-relaxed text-ink-body">{signal}</p>
                  </div>
                </Reveal>
              ))}

              {/* Set apart by a rule and a shift in voice, not by a tinted box */}
              {solution.reassurance && (
                <Reveal delay={120}>
                  <p className="mt-xl border-l-2 border-primary pl-xl text-body-sm leading-relaxed text-charcoal italic">
                    {solution.reassurance}
                  </p>
                </Reveal>
              )}

              <Reveal delay={160}>
                <Link
                  href="/project-check"
                  className="group mt-xl flex items-baseline justify-between gap-base border-t border-ink-deep/20 pt-base transition-colors hover:border-primary"
                >
                  <span className="flex flex-col gap-xxs">
                    <span className="text-body-sm-bold text-ink-deep transition-colors group-hover:text-primary">
                      Not sure how far along this is?
                    </span>
                    <span className="text-caption text-secondary">
                      Take the two-minute project check — nothing is sent anywhere.
                    </span>
                  </span>
                  <Icon
                    name="arrow_forward"
                    size={20}
                    className="shrink-0 text-steel transition-colors group-hover:text-primary"
                  />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables — numbered rows on dark, no tiles */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary-container/10 blur-3xl" />
        <div className="relative mx-auto max-w-shell px-xxl">
          <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="flex flex-col gap-xs lg:sticky lg:top-32">
                <span className="text-caption-bold uppercase tracking-widest text-accent-electric">
                  What We Deliver
                </span>
                <h2 className="text-heading-lg font-semibold tracking-tight text-canvas">
                  Concrete work, not a capability list
                  <Dot />
                </h2>
              </div>
            </Reveal>

            <div className="flex flex-col lg:col-span-8">
              {solution.deliverables.map((d, i) => (
                <Reveal key={d.title} delay={(i % 3) * 90}>
                  <div
                    className={`grid grid-cols-1 gap-xs py-xl sm:grid-cols-12 sm:gap-xl ${
                      i > 0 ? "border-t border-canvas/10" : "lg:pt-0"
                    }`}
                  >
                    <span className="font-display text-body-md-bold text-canvas/30 sm:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-heading-sm font-bold text-canvas sm:col-span-4">
                      {d.title}
                    </h3>
                    <p className="text-body-md leading-relaxed text-stone sm:col-span-7">
                      {d.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process strip — the same rail the services hero uses */}
      <section className="w-full bg-canvas py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="mb-xxl flex flex-col justify-between gap-base md:flex-row md:items-end">
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

          <Reveal>
            <div className="grid grid-cols-2 gap-base border-t border-hairline pt-xl md:grid-cols-3 lg:grid-cols-6">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services#${s.slug}`}
                  className="group flex flex-col gap-xxs border-l border-hairline pl-base transition-colors hover:border-primary"
                >
                  <span className="text-caption-bold text-primary">{s.step}</span>
                  <span className="text-body-sm-bold text-ink-deep transition-colors group-hover:text-primary">
                    {s.name}
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other solutions — an index */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <h2 className="mb-xxl text-heading-lg font-semibold tracking-tight text-ink-deep">
              Other solution areas
              <Dot />
            </h2>
          </Reveal>
          <div className="flex flex-col border-t border-hairline">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group grid grid-cols-1 items-baseline gap-xxs border-b border-hairline py-lg transition-colors hover:bg-canvas sm:grid-cols-12 sm:gap-xl"
                >
                  <span className="text-heading-sm font-bold text-ink-deep transition-colors group-hover:text-primary sm:col-span-5">
                    {s.name}
                  </span>
                  <span className="text-body-sm text-secondary sm:col-span-6">{s.tagline}</span>
                  <span className="hidden justify-self-end text-primary-container sm:col-span-1 sm:block">
                    <Icon name="arrow_forward" size={18} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
