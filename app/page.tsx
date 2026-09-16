import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/cta";
import { ParticleConstellation } from "@/components/particle-constellation";
import { LogoMarquee } from "@/components/logo-marquee";
import { SOLUTIONS } from "@/lib/solutions";
import { ContactTrigger } from "@/components/contact-trigger";

/** The situations clients actually arrive with. */
const SITUATIONS = [
  {
    label: "Stalled Build",
    title: "The project has lost momentum",
    copy: "Deadlines keep moving, progress is hard to measure, and nobody can say with confidence what is left to do.",
  },
  {
    label: "Inherited Codebase",
    title: "The team that built it is gone",
    copy: "An agency moved on or key engineers left, and what remains is undocumented code nobody wants to touch.",
  },
  {
    label: "Unfinished Migration",
    title: "The cutover never happened",
    copy: "A migration or rewrite was started and abandoned partway, leaving two systems to maintain instead of one.",
  },
  {
    label: "Scaling Wall",
    title: "It works, but not at this size",
    copy: "The build was fine as a prototype and is now buckling under real users, real data, and real uptime expectations.",
  },
];

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-ink-deep text-canvas">
        {/* The atmosphere is tonal, not chromatic: the accent stays rationed to
            the call to action and the accent period, so the glow that used to
            wash the hero orange is a plain lift in the ground instead. */}
        <div className="pointer-events-none absolute hidden md:block -top-40 right-1/4 h-[600px] w-[600px] rounded-full bg-canvas/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute hidden md:block bottom-0 -left-32 h-[420px] w-[420px] rounded-full bg-canvas/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-shell px-xxl pt-section pb-section-lg">

          <div className="grid grid-cols-1 items-center gap-xxxl lg:grid-cols-12">
            <div className="flex flex-col gap-base lg:col-span-6">
              <Reveal delay={100}>
                <h1 className="max-w-[18ch] text-heading-md text-canvas md:text-display-lg-mobile lg:text-heading-lg">
                  We take unfinished software to production
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-xs max-w-[40ch] text-body-md text-stone">
                  Stalled build, inherited codebase, unfinished migration. We take ownership of
                  what is left and deliver it.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-lg flex flex-wrap items-center gap-base">
                  <Cta size="lg">Book a 15 Minute Call</Cta>
                  <Cta variant="secondary" size="lg" href="/solutions">
                    See What We Do
                    <Icon name="east" className="ml-xs" />
                  </Cta>
                </div>
              </Reveal>
            </div>

            {/* The constellation. Decorative, and deliberately carrying no
                content of its own: the five domains it replaced are listed in
                full, with links and taglines, in the Solutions section below. */}
            <div className="relative lg:col-span-6">
              <div className="mx-auto h-[360px] w-full max-w-[34rem] sm:h-[460px] lg:h-[560px] lg:max-w-none">
                <ParticleConstellation />
              </div>
            </div>
          </div>

        </div>
      </section>

      <LogoMarquee />

      {/* WHAT WE TAKE ON — the premise holds while the four states scroll past it */}
      <section className="w-full bg-surface-soft py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="flex flex-col gap-xs lg:sticky lg:top-32">
                <span className="text-caption-bold uppercase text-kicker">
                  What We Take On
                </span>
                <h2 className="text-heading-lg text-canvas">
                  Projects arrive with us in one of four states
                </h2>
                <p className="mt-xxs text-body-md leading-relaxed text-secondary">
                  Almost none of them went wrong for interesting reasons. Scope moved, someone key
                  left, a deadline that was never real got committed to anyway. That is what happens
                  when a team is asked to move fast for long enough, and all of it is recoverable.
                </p>
                <Link
                  href="/project-check"
                  className="group mt-base inline-flex items-baseline justify-between gap-xl border-t border-canvas/15 pt-base transition-colors hover:border-primary"
                >
                  <span className="flex flex-col gap-xxs text-left">
                    <span className="text-body-sm-bold text-canvas transition-colors group-hover:text-primary">
                      Not sure which one you&rsquo;re in?
                    </span>
                    <span className="text-caption text-secondary">
                      Take the two-minute project check
                    </span>
                  </span>
                  <Icon
                    name="arrow_forward"
                    size={20}
                    className="shrink-0 text-steel transition-colors group-hover:text-primary"
                  />
                </Link>
              </div>
            </Reveal>

            {/* Ruled rows rather than four boxed cards */}
            <div className="flex flex-col lg:col-span-8">
              {SITUATIONS.map((s, i) => (
                <Reveal key={s.label} delay={i * 90}>
                  <div
                    className={`grid grid-cols-1 gap-xs py-xxl sm:grid-cols-12 sm:gap-xl ${
                      i > 0 ? "border-t border-hairline" : "lg:pt-0"
                    }`}
                  >
                    <div className="sm:col-span-4">
                      <span className="font-display text-heading-lg text-canvas/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-caption-bold uppercase text-kicker">
                        {s.label}
                      </p>
                    </div>
                    <div className="sm:col-span-8">
                      <h3 className="text-heading-sm text-canvas">{s.title}</h3>
                      <p className="mt-xs text-body-md leading-relaxed text-secondary">{s.copy}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS — dark editorial split */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute hidden md:block -top-24 right-0 h-[420px] w-[420px] rounded-full bg-canvas/[0.05] blur-3xl" />
        <div className="relative mx-auto max-w-shell px-xxl">
          <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal className="flex flex-col gap-base lg:sticky lg:top-32">
                <span className="text-caption-bold uppercase tracking-widest text-accent-electric">
                  Solutions
                </span>
                <h2 className="text-heading-lg text-canvas">
                  Five domains we finish work in
                </h2>
                <p className="text-body-md text-stone">
                  Most engagements touch more than one. Whatever the domain, the commitment is the
                  same: the remaining work delivered and handed back maintainable.
                </p>
                <Link
                  href="/solutions"
                  className="inline-flex w-fit items-center gap-xs pt-base text-body-sm-bold text-canvas transition-colors hover:text-accent-electric"
                >
                  Explore All Solutions
                  <Icon name="arrow_forward" />
                </Link>
              </Reveal>
            </div>

            {/* Term over definition, divided by a hairline and given room to
                breathe. The numerals and the corner arrow are gone: they were
                furniture around the entry rather than part of it, and the rule
                already does the separating. */}
            <div className="flex flex-col lg:col-span-8">
              {SOLUTIONS.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 2) * 100}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="group block border-b border-canvas/10 py-xxl transition-colors hover:border-canvas/30"
                  >
                    <span className="block font-display text-heading-sm text-canvas transition-colors group-hover:text-accent-electric">
                      {s.name}
                    </span>
                    <span className="mt-xs block max-w-[52ch] text-body-sm text-stone">
                      {s.tagline}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
