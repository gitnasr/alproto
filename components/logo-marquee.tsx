/**
 * Continuously scrolling client strip.
 *
 * The track holds the list twice and slides exactly half its width, so the loop
 * is seamless. Pure CSS (see `marquee-*` in globals.css) — no client JS — and it
 * stops moving under prefers-reduced-motion, wrapping onto multiple lines
 * instead so every name stays readable.
 *
 * Logos live in /public/logos. Each entry sets its own height because the marks
 * differ wildly in proportion — a stacked lockup needs far more height than a
 * wordmark to read at the same optical size. An entry without `src` falls back
 * to rendering its name as a wordmark.
 */

type Client = {
  name: string;
  src?: string;
  /**
   * Tailwind height class for the mark. Logos arrive in wildly different
   * proportions — a stacked lockup needs more height than a wordmark to read at
   * the same optical size — so each entry sets its own.
   */
  height?: string;
};

const CLIENTS: Client[] = [
  { name: "Better Business Bureau", src: "/logos/bbb.svg", height: "h-16" },
  { name: "Everything To Gain", src: "/logos/etg.svg", height: "h-9" },
  { name: "Unilever", src: "/logos/unilever.svg", height: "h-7" },
  { name: "AstraZeneca", src: "/logos/astrazeneca.png", height: "h-7" },
  { name: "Skillsoft", src: "/logos/skillsoft.svg", height: "h-10" },
];

function Mark({ client }: { client: Client }) {
  if (client.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={client.src}
        alt={client.name}
        className={`${client.height ?? "h-8"} w-auto shrink-0 object-contain opacity-55 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0`}
      />
    );
  }
  return (
    <span className="font-display text-heading-sm font-semibold tracking-wide whitespace-nowrap text-stone transition-colors duration-300 hover:text-ink-deep">
      {client.name}
    </span>
  );
}

export function LogoMarquee({
  label = "Teams that have trusted us with unfinished work",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <section
      className={`w-full border-y border-hairline-soft bg-canvas py-xl ${className}`}
      aria-label="Selected clients"
    >
      <div className="mx-auto flex max-w-shell flex-col gap-base px-xxl lg:flex-row lg:items-center lg:gap-xxxl">
        <p className="max-w-[16rem] shrink-0 text-body-sm leading-snug text-charcoal">{label}</p>

        <div className="marquee relative min-w-0 flex-1 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-xxxl lg:gap-hero">
            {/* Rendered twice: the second copy is what the loop scrolls into. */}
            {[0, 1].map((pass) =>
              CLIENTS.map((client) => (
                <Mark key={`${pass}-${client.name}`} client={client} />
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
