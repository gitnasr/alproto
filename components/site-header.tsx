"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./icon";
import { SOLUTIONS } from "@/lib/solutions";
import { useContactModal } from "./contact-modal";
import { Cta } from "./cta";

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
];

const LINKS = [
  { href: "/project-check", label: "Project Check" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

/** Focus ring taken from the shadcn button: a real 3px ring, not the UA outline. */
const FOCUS =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-deep";

/**
 * The Silosage mark: the folded ribbon in bone white over an Electric Iris
 * chevron — the same #8052FF the filled actions use.
 *
 * `unoptimized` because the source is an SVG. Next's image optimizer refuses
 * to process SVG unless `dangerouslyAllowSVG` is turned on globally — which
 * would relax it for every remote image too — and there is nothing to
 * optimize in two vector paths anyway, so it is served as authored.
 */
function Logo() {
  return (
    <Image
      src="/logos/silosage-mark.svg"
      alt=""
      width={175}
      height={190}
      priority
      unoptimized
      className="h-9 w-auto shrink-0"
    />
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { open: openContact } = useContactModal();

  /* The reference's nav is transparent, sitting directly on the void with no
     border and no backdrop blur. That only holds while it is over the top of
     the page: this one is fixed, so once the page scrolls the copy would run
     underneath it. It takes the void as a ground from that point on, which
     keeps the transparent-on-hero reading the reference describes without
     letting text collide with the wordmark. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    /* The shell holds both the row and the mega-panel, so opening a menu grows
       the same element instead of dropping a separate sheet beneath it. The
       ground is carried full-bleed on the header rather than on the shell:
       inset, it would leave a strip of scrolling copy visible above the bar. */
    <header
      className={`fixed inset-x-0 top-0 z-50 px-base pt-md transition-colors duration-300 ease-out sm:pt-base ${
        openMenu || mobileOpen || scrolled ? "bg-void pb-md sm:pb-base" : "bg-transparent"
      }`}
    >
      <div
        onMouseLeave={() => setOpenMenu(null)}
        className="mx-auto w-full max-w-shell overflow-hidden rounded-lg"
      >
        {/* --- The row --- */}
        <div className="flex h-16 items-center justify-between gap-md pr-xs pl-lg">
          <Link
            href="/"
            className={`flex shrink-0 items-center gap-xs rounded-full ${FOCUS}`}
            aria-label="Silosage home"
          >
            <Logo />
            <span className="font-display text-subtitle-lg font-bold tracking-tight text-canvas">
              Silosage
            </span>
          </Link>

          <nav className="hidden items-center gap-xxs xl:flex">
            {MENUS.map((menu) => (
              <div
                key={menu.label}
                onMouseEnter={() => setOpenMenu(menu.label)}
                onFocus={() => setOpenMenu(menu.label)}
              >
                {/* Hover or focus reveals the panel; activating goes to the index. */}
                <Link
                  href={menu.href}
                  aria-haspopup="true"
                  aria-expanded={openMenu === menu.label}
                  className={`flex items-center gap-xxs rounded-full px-md py-xs text-body-sm transition-colors ${FOCUS} ${
                    isActive(menu.href) || openMenu === menu.label
                      ? "bg-canvas/8 font-bold text-canvas"
                      : "text-charcoal hover:bg-canvas/5 hover:text-canvas"
                  }`}
                >
                  {menu.label}
                  <Icon
                    name="expand_more"
                    size={16}
                    className={`transition-transform duration-300 ${
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
                className={`rounded-full px-md py-xs text-body-sm transition-colors ${FOCUS} ${
                  isActive(item.href)
                    ? "bg-canvas/8 font-bold text-canvas"
                    : "text-charcoal hover:bg-canvas/5 hover:text-canvas"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-xs">
            {/* The dialog opener lives in Cta now; the wrapper only has to
                close any open mega-panel as the pointer arrives. */}
            <span onMouseEnter={() => setOpenMenu(null)} className="hidden sm:inline-flex">
              <Cta size="sm">Book a call</Cta>
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-canvas transition-colors hover:bg-canvas/5 xl:hidden ${FOCUS}`}
            >
              <Icon name={mobileOpen ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>

        {/* --- The panel, growing inside the same shell ---
            grid-template-rows 0fr -> 1fr animates to the content's own height,
            so no magic max-height has to be kept in sync with the item count. */}
        <div
          /* The two rows utilities must never be emitted together: they carry
             equal specificity, so the stylesheet order would pick the winner
             rather than the order written here, and 0fr would always hold. */
          className={`hidden transition-[grid-template-rows] duration-300 ease-out xl:grid ${
            openMenu ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            {MENUS.map((menu) =>
              openMenu === menu.label ? (
                <div key={`panel-${menu.label}`} className="px-lg pb-lg">
                  <div className="flex items-center justify-between border-t border-hairline-soft py-base">
                    <span className="text-caption-bold uppercase text-kicker">
                      {menu.label}
                    </span>
                    <Link
                      href={menu.href}
                      className={`inline-flex items-center gap-xs rounded-sm text-body-sm-bold text-canvas transition-colors hover:text-primary ${FOCUS}`}
                    >
                      View all {menu.label.toLowerCase()}
                      <Icon name="arrow_forward" size={16} />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-xs">
                    {menu.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`group flex items-start gap-base rounded-xl border border-hairline-soft bg-surface-soft/40 p-base transition-colors hover:border-primary-container/40 hover:bg-surface-soft ${FOCUS}`}
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-canvas/5 text-canvas transition-colors group-hover:bg-primary-container group-hover:text-on-primary">
                          <Icon name={item.icon} size={20} />
                        </span>
                        <span className="flex flex-col gap-xxs">
                          <span className="text-body-sm-bold text-canvas">{item.label}</span>
                          <span className="text-caption text-secondary">{item.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null,
            )}
          </div>
        </div>

        {/* --- Mobile navigation, in the same shell --- */}
        {mobileOpen && (
          <nav className="max-h-[calc(100vh-8rem)] overflow-y-auto border-t border-hairline-soft px-lg py-base xl:hidden">
            {MENUS.map((menu) => (
              <div key={menu.label} className="border-b border-hairline-soft py-xs">
                <button
                  type="button"
                  aria-expanded={mobileSection === menu.label}
                  onClick={() =>
                    setMobileSection(mobileSection === menu.label ? null : menu.label)
                  }
                  className={`flex w-full items-center justify-between rounded-md px-xs py-sm text-body-md-bold text-canvas ${FOCUS}`}
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
                      className={`rounded-sm px-xs py-xs text-body-sm-bold text-primary ${FOCUS}`}
                    >
                      View all {menu.label.toLowerCase()}
                    </Link>
                    {menu.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-xs rounded-md px-xs py-xs text-body-sm text-charcoal hover:bg-surface-soft hover:text-canvas ${FOCUS}`}
                      >
                        <Icon name={item.icon} size={18} className="text-canvas" />
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
                className={`block rounded-md border-b border-hairline-soft px-xs py-md text-body-md text-charcoal hover:text-canvas ${FOCUS}`}
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
              className={`mt-base inline-flex w-full justify-center rounded-full bg-primary-container px-xxl py-md text-body-sm-bold text-on-primary ${FOCUS}`}
            >
              Book a call
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
