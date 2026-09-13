import Link from "next/link";
import { SOLUTIONS } from "@/lib/solutions";
import { SERVICES } from "@/lib/services";
import { ContactTrigger } from "@/components/contact-trigger";

const COMPANY = [
  { label: "Project Check", href: "/project-check" },
  { label: "FAQ", href: "/services#faq" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Engineering Careers", href: "/careers" },
  { label: "Open Source Registry", href: "/open-source" },
];

/**
 * Column heading that is also the way into the index page behind it. Without
 * these the footer listed every child page and offered no route to the parent.
 */
function ColumnHeading({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex w-fit items-center gap-xxs text-body-sm-bold uppercase tracking-wider text-ink-deep transition-colors hover:text-primary"
    >
      {children}
      <span
        aria-hidden
        className="text-primary-container opacity-0 transition-opacity group-hover:opacity-100"
      >
        →
      </span>
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-hairline-soft bg-surface-soft pt-section pb-xxxl">
      <div className="mx-auto max-w-shell px-xxl">
        <div className="grid grid-cols-1 gap-xxxl border-b border-hairline-soft pb-section-sm md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-base lg:col-span-2">
            <span className="font-display text-heading-sm font-bold text-ink-deep">Silo-Dev</span>
            <p className="max-w-[24rem] text-body-sm text-secondary">
              We take unfinished software all the way to production — stalled builds, inherited
              codebases, and migrations that never completed.
            </p>
            <ContactTrigger
              className="mt-base inline-flex w-fit items-center rounded-full bg-primary-container px-xl py-xs text-body-sm-bold text-on-primary transition-colors hover:bg-primary"
            >
              Book a 15 Minute Call
            </ContactTrigger>
          </div>

          <div className="flex flex-col gap-md">
            <ColumnHeading href="/solutions">Solutions</ColumnHeading>
            <ul className="flex flex-col gap-xs">
              {SOLUTIONS.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="text-body-sm text-secondary transition-colors hover:text-ink-deep"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-md">
            <ColumnHeading href="/services">Services</ColumnHeading>
            <ul className="flex flex-col gap-xs">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-body-sm text-secondary transition-colors hover:text-ink-deep"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-md">
            <span className="text-body-sm-bold uppercase tracking-wider text-ink-deep">
              Company
            </span>
            <ul className="flex flex-col gap-xs">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-secondary transition-colors hover:text-ink-deep"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Privacy Policy / Terms / Security used to sit here as grey text that
            looked like links and went nowhere. They come back as real links when
            there are real documents to point them at. */}
        <div className="flex flex-col items-center justify-between gap-base pt-xl md:flex-row">
          <span className="text-caption text-secondary">
            © {new Date().getFullYear()} Silo-Dev. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
