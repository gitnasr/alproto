import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { ProjectCheck } from "@/components/project-check";
import { Faq } from "@/components/faq";
import { ContactTrigger } from "@/components/contact-trigger";

export const metadata: Metadata = {
  title: "Project Check",
  description:
    "A two-minute checklist for working out whether a software project is in trouble, and what kind of trouble. Runs entirely in your browser, nothing is sent anywhere.",
};

export default function ProjectCheckPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute hidden md:block -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-canvas/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute hidden md:block bottom-0 -left-24 h-[380px] w-[380px] rounded-full bg-canvas/[0.04] blur-3xl" />

        <div className="relative mx-auto flex max-w-shell flex-col gap-xl px-xxl">
          
          <Reveal delay={100}>
            <h1 className="max-w-3xl text-heading-md text-canvas md:text-display-lg-mobile lg:text-heading-lg">
              Is your project <span className="text-accent-electric">in trouble</span>, and what
              kind
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-2xl text-subtitle-md leading-relaxed text-stone">
              Most projects do not fail loudly. They accumulate small, reasonable-sounding problems
              until the date stops meaning anything. Tick whatever sounds familiar and you will get
              an honest read on how far along that path you are.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-wrap items-center gap-xl pt-xs text-caption text-stone">
              {[
                ["lock", "Runs in your browser, nothing is sent or stored"],
                ["schedule", "About two minutes"],
                ["sentiment_satisfied", "No email required to see your result"],
              ].map(([icon, text]) => (
                <span key={text} className="flex items-center gap-xxs">
                  <Icon name={icon} size={16} className="text-accent-electric" />
                  {text}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* The checklist */}
      <section className="w-full bg-page py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <ProjectCheck />
        </div>
      </section>

      {/* Reassurance */}
      <section className="relative w-full overflow-hidden bg-ink-deep py-section-lg text-canvas">
        <div className="pointer-events-none absolute hidden md:block -top-24 right-0 h-[420px] w-[420px] rounded-full bg-canvas/[0.05] blur-3xl" />
        <div className="relative mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="flex max-w-3xl flex-col gap-base">
              <span className="text-caption-bold uppercase tracking-widest text-accent-electric">
                For What It&rsquo;s Worth
              </span>
              <h2 className="text-heading-lg text-canvas">
                Projects rarely go wrong for interesting reasons
              </h2>
              <p className="text-body-md leading-relaxed text-stone">
                Almost every build we are called into went sideways the same ordinary way: the scope
                moved, someone key left, a deadline that was never real got committed to anyway, and
                the work that would have caught it kept losing to the work that was visible. None of
                that requires anyone to have been careless. It is what happens when a team is asked
                to move fast for long enough.
              </p>
              <p className="text-body-md leading-relaxed text-stone">
                The reason projects become unrecoverable is not the original problem. It is how long
                it stays unexamined. Asking someone to look is not an admission of failure. It is the
                cheapest thing available to you right now.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Faq />

      {/* CTA */}
      <section className="w-full bg-page py-section-lg">
        <div className="mx-auto max-w-shell px-xxl">
          <Reveal>
            <div className="flex flex-col justify-between gap-xxl border-t border-canvas/15 pt-xxl lg:flex-row lg:items-end">
              <div className="flex max-w-2xl flex-col gap-base">
                <h2 className="text-heading-lg text-canvas">
                  Rather just describe it in your own words?
                </h2>
                <p className="text-body-md leading-relaxed text-secondary">
                  Tell us where the project stands, however messy, and we will come back with an
                  honest read on what finishing it involves.
                </p>
              </div>
              <ContactTrigger
                className="inline-flex shrink-0 items-center justify-center gap-xs rounded-full bg-ink-deep px-xxxl py-base text-center text-body-md-bold text-canvas shadow-md transition-colors duration-200 hover:bg-charcoal"
              >
                Get in Touch
                <Icon name="arrow_forward" size={20} />
              </ContactTrigger>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
