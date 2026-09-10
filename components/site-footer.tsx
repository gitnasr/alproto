import Link from "next/link";

const CAPABILITIES = [
  { label: "Core System Architecture", href: "/services#discipline-01" },
  { label: "Enterprise Cloud Platforms", href: "/services#discipline-02" },
  { label: "High-Load API Frameworks", href: "/services#discipline-04" },
  { label: "Real-Time Data Pipelines", href: "/services#discipline-03" },
  { label: "Bespoke Frontend Platforms", href: "/architecture" },
];

const ENGAGEMENT = [
  { label: "Client Portal", href: "/#discovery-portal" },
  { label: "Technical Audits", href: "/services#discipline-04" },
  { label: "Security & Compliance", href: "/services#compliance" },
  { label: "Engineering Careers", href: "/careers" },
  { label: "Open Source Registry", href: "/open-source" },
];

const LEGAL = [
  "Privacy Framework",
  "Terms of Architecture",
  "Security Protocols",
  "Status Core",
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-hairline-soft bg-surface-soft pt-section pb-xxxl">
      <div className="mx-auto max-w-shell px-xxl">
        <div className="grid grid-cols-1 gap-xxxl border-b border-hairline-soft pb-section-sm md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-base lg:col-span-2">
            <div className="flex items-center gap-xs">
              <span className="font-display text-heading-sm font-bold text-ink-deep">Nexus Dev</span>
              <span className="rounded-full bg-primary/10 px-xs py-xxs text-caption-bold text-primary">
                v4.2 PROD
              </span>
            </div>
            <p className="max-w-[24rem] text-body-sm text-secondary">
              High-performance digital product engineering firm. We architect, engineer, and deploy
              mission-critical software systems for global enterprises.
            </p>
            <div className="mt-base flex flex-wrap items-center gap-xs">
              <span className="text-caption-bold uppercase tracking-wider text-charcoal">
                Stack Credentials:
              </span>
              {["Distributed Systems", "Next.js / Rust", "Kubernetes"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-hairline-soft bg-canvas px-xs py-xxs text-caption text-charcoal"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-md">
            <span className="text-body-sm-bold uppercase tracking-wider text-ink-deep">
              Capabilities
            </span>
            <ul className="flex flex-col gap-xs">
              {CAPABILITIES.map((item) => (
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

          <div className="flex flex-col gap-md">
            <span className="text-body-sm-bold uppercase tracking-wider text-ink-deep">
              Engagement
            </span>
            <ul className="flex flex-col gap-xs">
              {ENGAGEMENT.map((item) => (
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
              <Link
                key={item}
                href="#"
                className="text-caption text-secondary transition-colors hover:text-ink-deep"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
