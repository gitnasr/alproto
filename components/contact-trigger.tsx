"use client";

import type { ReactNode } from "react";
import { useContactModal } from "./contact-modal";

/**
 * Drop-in replacement for the old `<Link href="/#discovery-portal">` CTAs.
 * Renders a button carrying whatever classes the link had, so every call to
 * action keeps its own styling while opening the shared dialog instead of
 * scrolling to a section that no longer exists.
 */
export function ContactTrigger({
  children,
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const { open } = useContactModal();
  return (
    <button type="button" onClick={open} aria-label={ariaLabel} className={className}>
      {children}
    </button>
  );
}
