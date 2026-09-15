import Image from "next/image";
import Link from "next/link";
import { SOLUTIONS } from "@/lib/solutions";
import { Cta } from "@/components/cta";

const COMPANY = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Open Source", href: "/open-source" },
  { label: "FAQ", href: "/project-check#faq" },
];

const PRIMARY = [
  { label: "Solutions", href: "/solutions" },
  ...COMPANY,
];

/**
 * What the studio actually does, in the position the reference footer gives its
 * "analog & digital / grammy-winning engineers" block. Every line is drawn from
 * copy already on the site — there is no founding year anywhere in the project,
 * so there is no "est." line to print.
 */
const META = ["Project rescue & completion", "Cloud · Data · AI · Web & mobile", "Taken to production"];

/** Focus ring borrowed from shadcn's button: a real 3px ring, not the UA outline. */
const FOCUS =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-deep";

export function SiteFooter() {
  return (
    /* The backdrop strip is the outer element and the panel sits on top of it,
       overlapping from below — so the lit surface stays visible above the
       panel’s rounded top edge, the way the reference shows its photograph. */
    <footer className="relative isolate w-full overflow-hidden pt-[7rem] sm:pt-[9rem]">
      <div aria-hidden className="footer-backdrop absolute inset-0 -z-10" />

      <div className="rounded-t-[2rem] border-t border-hairline bg-ink-deep/95 pt-section-lg pb-xxl backdrop-blur-sm sm:rounded-t-[3rem]">
        <div className="mx-auto max-w-shell px-xxl">
        {/* --- Centred brand stack --- */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logos/silosage-mark.svg"
            alt=""
            width={175}
            height={190}
            unoptimized
            className="h-12 w-auto shrink-0"
          />
          <p className="mt-lg font-display text-display-lg-mobile leading-none text-canvas md:text-display-lg lg:text-hero-display">
            Silosage
          </p>
          {/* --- Two actions, dash-separated, the way the reference pairs them --- */}
          <div className="mt-xxl flex items-center gap-base text-caption-bold uppercase tracking-widest">
            <Cta size="sm">Book a call</Cta>
            <Cta variant="secondary" size="sm" href="/project-check">
              Project check
            </Cta>
          </div>

          {/* The reference puts social glyphs here. Nothing in this project
              records a handle for any network, so rather than invent accounts
              the row carries the primary navigation instead — which also keeps
              the footer's internal links from disappearing with the columns. */}
          <nav
            aria-label="Footer"
            className="mt-xxl flex flex-wrap items-center justify-center gap-x-xl gap-y-md"
          >
            {PRIMARY.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-sm text-body-sm-bold text-canvas transition-colors hover:text-primary ${FOCUS}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Every solution still reachable, one step quieter. */}
          <div className="mt-lg flex max-w-3xl flex-wrap items-center justify-center gap-x-lg gap-y-xs">
            {SOLUTIONS.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className={`rounded-sm text-caption text-secondary underline-offset-4 transition-colors hover:text-canvas hover:underline ${FOCUS}`}
              >
                {s.navLabel}
              </Link>
            ))}
          </div>
        </div>

        <hr className="mt-section border-0 border-t border-hairline-soft" />

        {/* --- Copyright left, studio meta right-aligned, as in the reference --- */}
        <div className="flex flex-col items-center gap-lg pt-xl sm:flex-row sm:items-start sm:justify-between">
          <span className="text-caption text-secondary">
            © {new Date().getFullYear()} Silosage. All rights reserved.
          </span>
          {/* Privacy Policy / Terms / Security are still absent on purpose —
              they were grey text that looked like links and went nowhere. */}
          <ul className="flex flex-col gap-xxs text-center sm:text-right">
            {META.map((line) => (
              <li key={line} className="text-caption uppercase tracking-wider text-steel">
                {line}
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </footer>
  );
}
