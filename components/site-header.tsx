"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./icon";
import { SOLUTIONS } from "@/lib/solutions";
import { SERVICES } from "@/lib/services";
import { useContactModal } from "./contact-modal";

type MenuItem = { href: string; label: string; desc: string; icon: string };
type Menu = { label: string; href: string; items: MenuItem[] };

const MENUS: Menu[] = [
  {
    label: "Solutions",
    href: "/solutions",
    items: SOLUTIONS.map((s) => ({
      href: `/solutions/${s.slug}`,
      label: s.navLabel,
      desc: s.tagline,
      icon: s.icon,
    })),
  },
  {
    label: "Services",
    href: "/services",
    items: SERVICES.map((s) => ({
      href: `/services#${s.slug}`,
      label: s.name,
      desc: s.tagline,
      icon: s.icon,
    })),
  },
];

const LINKS = [
  { href: "/project-check", label: "Project Check" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const { open: openContact } = useContactModal();

  // Any navigation closes whatever is open.
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openMenu]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-hairline-soft bg-canvas/90 backdrop-blur-xl"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto flex h-20 max-w-shell items-center justify-between px-xxl">
        <Link href="/" className="flex items-center gap-base" aria-label="Nahjj home">
          <Logo />
          <span className="font-display text-heading-sm font-semibold tracking-tight text-ink-deep">
            Nahjj
          </span>
        </Link>

        <nav className="hidden items-center gap-xl xl:flex">
          {MENUS.map((menu) => (
            <div
              key={menu.label}
              onMouseEnter={() => setOpenMenu(menu.label)}
              onFocus={() => setOpenMenu(menu.label)}
            >
              {/* Hover or focus reveals the panel; activating the trigger goes to the index. */}
              <Link
                href={menu.href}
                aria-haspopup="true"
                aria-expanded={openMenu === menu.label}
                className={`flex items-center gap-xxs transition-colors ${
                  isActive(menu.href) || openMenu === menu.label
                    ? "text-body-md-bold text-ink-deep"
                    : "text-body-md text-charcoal hover:text-ink-deep"
                }`}
              >
                {menu.label}
                <Icon
                  name="expand_more"
                  size={18}
                  className={`transition-transform duration-200 ${
                    openMenu === menu.label ? "rotate-180" : ""
                  }`}
                />
              </Link>
            </div>
          ))}

          {LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onMouseEnter={() => setOpenMenu(null)}
              className={
                isActive(item.href)
                  ? "text-body-md-bold text-ink-deep transition-colors"
                  : "text-body-md text-charcoal transition-colors hover:text-ink-deep"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-lg">
          <button
            type="button"
            onClick={openContact}
            className="hidden rounded-full bg-primary-container px-xxl py-sm text-body-sm-bold text-on-primary transition-colors duration-200 hover:bg-primary sm:inline-flex"
          >
            Book a 15 Minute Call
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink-deep xl:hidden"
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {/* Desktop mega-menu */}
      {MENUS.map((menu) =>
        openMenu === menu.label ? (
          <div
            key={`panel-${menu.label}`}
            className="hidden border-t border-hairline-soft bg-canvas shadow-lg xl:block"
          >
            <div className="mx-auto max-w-shell px-xxl py-xxl">
              <div className="flex items-center justify-between pb-base">
                <span className="text-caption-bold uppercase tracking-widest text-primary">
                  {menu.label}
                </span>
                <Link
                  href={menu.href}
                  className="inline-flex items-center gap-xs text-body-sm-bold text-ink-deep transition-colors hover:text-primary"
                >
                  View all {menu.label.toLowerCase()}
                  <Icon name="arrow_forward" size={16} />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-base">
                {menu.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-start gap-base rounded-lg p-base transition-colors hover:bg-surface-soft"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-container/10 text-primary-container transition-colors group-hover:bg-primary-container group-hover:text-canvas">
                      <Icon name={item.icon} size={20} />
                    </span>
                    <span className="flex flex-col gap-xxs">
                      <span className="text-body-sm-bold text-ink-deep transition-colors group-hover:text-primary">
                        {item.label}
                      </span>
                      <span className="text-caption text-secondary">{item.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null,
      )}

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-hairline-soft bg-canvas px-xxl py-base xl:hidden">
          {MENUS.map((menu) => (
            <div key={menu.label} className="border-b border-hairline-soft py-xs">
              <button
                type="button"
                aria-expanded={mobileSection === menu.label}
                onClick={() =>
                  setMobileSection(mobileSection === menu.label ? null : menu.label)
                }
                className="flex w-full items-center justify-between px-xs py-sm text-body-md-bold text-ink-deep"
              >
                {menu.label}
                <Icon
                  name="expand_more"
                  size={20}
                  className={`transition-transform duration-200 ${
                    mobileSection === menu.label ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSection === menu.label && (
                <div className="flex flex-col gap-xxs pb-sm">
                  <Link
                    href={menu.href}
                    className="rounded-sm px-xs py-xs text-body-sm-bold text-primary"
                  >
                    View all {menu.label.toLowerCase()}
                  </Link>
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-xs rounded-sm px-xs py-xs text-body-sm text-charcoal hover:bg-surface-soft hover:text-ink-deep"
                    >
                      <Icon name={item.icon} size={18} className="text-primary-container" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block border-b border-hairline-soft px-xs py-md text-body-md text-charcoal hover:text-ink-deep"
            >
              {item.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              openContact();
            }}
            className="mt-base inline-flex w-full justify-center rounded-full bg-primary-container px-xxl py-md text-body-sm-bold text-on-primary"
          >
            Book a 15 Minute Call
          </button>
        </nav>
      )}
    </header>
  );
}
