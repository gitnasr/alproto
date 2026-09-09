import Link from "next/link";

const CAPABILITIES = [
  "Core System Architecture",
  "Enterprise Cloud Platforms",
  "High-Load API Frameworks",
  "Real-Time Data Pipelines",
  "Bespoke Frontend Platforms",
];

const STUDIOS = [
  { city: "San Francisco", address: "555 Mission St, Suite 2400" },
  { city: "London", address: "10 Finsbury Square, EC2A" },
  { city: "Berlin", address: "Münzstraße 12, Mitte" },
];

const ENGAGEMENT = [
  "Client Portal",
  "Technical Audits",
  "Security & Compliance",
  "Engineering Careers",
  "Open Source Registry",
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
        <div className="grid grid-cols-1 gap-xxxl border-b border-hairline-soft pb-section-sm md:grid-cols-2 lg:grid-cols-5">
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
                <li
                  key={item}
                  className="cursor-pointer text-body-sm text-secondary transition-colors hover:text-ink-deep"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-md">
            <span className="text-body-sm-bold uppercase tracking-wider text-ink-deep">Studios</span>
            <ul className="flex flex-col gap-base">
              {STUDIOS.map((studio) => (
                <li key={studio.city} className="flex flex-col">
                  <span className="text-body-sm-bold text-ink-deep">{studio.city}</span>
                  <span className="text-caption text-secondary">{studio.address}</span>
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
                <li
                  key={item}
                  className="cursor-pointer text-body-sm text-secondary transition-colors hover:text-ink-deep"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-base pt-xl md:flex-row">
          <span className="text-caption text-secondary">
            © {new Date().getFullYear()} Nexus Dev Engineering Studio AG. All rights reserved.
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
