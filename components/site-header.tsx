"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "./icon";

const NAV = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/services", label: "Services" },
  { href: "/architecture", label: "Architecture & Stack" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

function Logo() {
  return (
    <svg viewBox="0 0 40 40" className="h-8 w-8 shrink-0" fill="none" aria-hidden>
      <rect width="36" height="36" y="2" rx="10" fill="#0A1317" />
      <path
        d="M12 20L18 14M12 20L18 26M24 14L18 20M24 26L18 20"
        stroke="#0064E0"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="2.5" fill="#0064E0" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline-soft bg-canvas/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-shell items-center justify-between px-xxl">
        <Link href="/" className="flex items-center gap-base" aria-label="Nexus Dev home">
          <Logo />
          <span className="flex items-center gap-xs">
            <span className="font-display text-heading-sm font-semibold tracking-tight text-ink-deep">
              Nexus
            </span>
            <span className="font-display text-heading-sm font-medium tracking-tight text-primary">
              Dev
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-xxxl lg:flex">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href.split("/").slice(0, 2).join("/"));
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-body-md-bold text-ink-deep transition-colors"
                    : "text-body-md text-charcoal transition-colors hover:text-ink-deep"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-lg">
          <Link
            href="/#discovery-portal"
            className="hidden rounded-full bg-primary-container px-xxl py-sm text-body-sm-bold text-on-primary transition-colors duration-200 hover:bg-primary sm:inline-flex"
          >
            Start a Project
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink-deep lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-xs border-t border-hairline-soft bg-canvas px-xxl py-base lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-xs py-sm text-body-md text-charcoal hover:bg-surface-soft hover:text-ink-deep"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#discovery-portal"
            onClick={() => setOpen(false)}
            className="mt-xs inline-flex justify-center rounded-full bg-primary-container px-xxl py-md text-body-sm-bold text-on-primary"
          >
            Start a Project
          </Link>
        </nav>
      )}
    </header>
  );
}
