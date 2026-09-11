import Link from "next/link";
import { SOLUTIONS } from "@/lib/solutions";
import { SERVICES } from "@/lib/services";

const COMPANY = [
  { label: "Project Check", href: "/project-check" },
  { label: "FAQ", href: "/services#faq" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Architecture & Stack", href: "/architecture" },
  { label: "Engineering Careers", href: "/careers" },
  { label: "Open Source Registry", href: "/open-source" },
];

/** Legal pages aren't written yet — the labels stay, the links wait for real documents. */
const LEGAL = ["Privacy Policy", "Terms of Service", "Security"];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-hairline-soft bg-surface-soft pt-section pb-xxxl">
      <div className="mx-auto max-w-shell px-xxl">
        <div className="grid grid-cols-1 gap-xxxl border-b border-hairline-soft pb-section-sm md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-base lg:col-span-2">
            <span className="font-display text-heading-sm font-bold text-ink-deep">Nexus Dev</span>
            <p className="max-w-[24rem] text-body-sm text-secondary">
              We take unfinished software all the way to production — stalled builds, inherited
              codebases, and migrations that never completed.
            </p>
            <Link
              href="/#discovery-portal"
              className="mt-base inline-flex w-fit items-center rounded-full bg-primary-container px-xl py-xs text-body-sm-bold text-on-primary transition-colors hover:bg-primary"
            >
              Request a Project Assessment
            </Link>
          </div>

          <div className="flex flex-col gap-md">
            <span className="text-body-sm-bold uppercase tracking-wider text-ink-deep">
              Solutions
            </span>
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
            <span className="text-body-sm-bold uppercase tracking-wider text-ink-deep">
              Services
            </span>
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

        <div className="flex flex-col items-center justify-between gap-base pt-xl md:flex-row">
          <span className="text-caption text-secondary">
            © {new Date().getFullYear()} Nexus Dev. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-xl">
            {LEGAL.map((item) => (
              <span key={item} className="text-caption text-stone">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
