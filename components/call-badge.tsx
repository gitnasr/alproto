"use client";

import { useContactModal } from "./contact-modal";

/**
 * Rotating "sticker" CTA — a dotted ring that turns continuously around a
 * static two-line label. Pure CSS (see the `call-badge-*` rules in globals.css),
 * so the ring stops turning under prefers-reduced-motion.
 *
 * Opens the shared contact dialog rather than navigating, so the visitor never
 * loses their place on the page.
 */
export function CallBadge({
  className = "",
  tone = "dark",
}: {
  className?: string;
  /** "dark" steps up from the deepest band; "light" steps down from a lifted one. */
  tone?: "dark" | "light";
}) {
  const { open } = useContactModal();

  // Every band is dark now, so both tones carry a dark face with light type;
  // the tone only decides which way it steps away from the band behind it.
  const face =
    tone === "dark"
      ? "bg-surface-soft text-canvas shadow-xl ring-1 ring-primary-container/35"
      : "bg-ink-deep text-canvas shadow-lg ring-1 ring-primary-container/35";
  const lead = "text-canvas/70";

  return (
    <button
      type="button"
      onClick={open}
      aria-label="Book a 15 minute call"
      className={`call-badge group relative inline-flex h-[168px] w-[168px] shrink-0 items-center justify-center lg:h-[196px] lg:w-[196px] ${className}`}
    >
      {/* Turning ring */}
      <svg
        viewBox="0 0 200 200"
        className="call-badge-ring absolute inset-0 h-full w-full"
        aria-hidden
      >
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="var(--color-accent-electric)"
          strokeOpacity="0.75"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 11"
        />
        <circle
          cx="100"
          cy="100"
          r="87"
          fill="none"
          stroke="var(--color-accent-electric)"
          strokeOpacity="0.2"
          strokeWidth="1"
          strokeDasharray="14 10"
        />
      </svg>

      {/* Static face */}
      <span
        className={`call-badge-face flex h-[76%] w-[76%] flex-col items-center justify-center gap-xxs rounded-full text-center leading-none transition-transform duration-300 group-hover:scale-[1.06] ${face}`}
      >
        <span className={`text-caption-bold uppercase tracking-widest ${lead}`}>Book a</span>
        <span className="font-display text-subtitle-lg leading-none text-canvas">
          15-Min Call
        </span>
      </span>
    </button>
  );
}
