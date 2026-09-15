"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-reveal wrapper: fades + lifts content in the first time it enters the
 * viewport. Pure CSS transition driven by an IntersectionObserver, and inert
 * for users with prefers-reduced-motion (see globals.css).
 *
 * Two details keep it from reading as jank rather than motion:
 *
 * The root box is extended 240px *below* the viewport, so an element starts
 * arriving before it is on screen and is most of the way through its
 * transition by the time it can be read. Firing at the viewport edge instead
 * — as this did — means a second of blank space during a fast scroll, since
 * the transition runs about a second once a stagger delay is added. The old
 * `threshold: 0.15` was worse again: it asked for a proportion of the element,
 * which a tall section only reaches long after it has appeared.
 *
 * And anything already on screen at mount is revealed immediately, without a
 * transition. Landing mid-page (a `#section` link, a restored scroll position,
 * a reload) otherwise leaves whatever is under the viewport waiting for an
 * intersection change that has already happened.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight && box.bottom > 0) {
      el.classList.add("reveal-immediate", "is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px 240px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
