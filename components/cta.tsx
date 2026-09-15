"use client";

import type { ReactNode } from "react";
import SpecularButton from "./specular-button";
import { useContactModal } from "./contact-modal";

/**
 * The site's two calls to action, as SpecularButton presets.
 *
 * SpecularButton takes fourteen colour and light props. Fixing them here means
 * a page writes `<Cta>` instead of restating the palette at every call site,
 * and a retheme changes one file rather than twenty.
 *
 * `primary` is the orange pill: the tint is opaque, so the specular sweep reads
 * as a lit rim around a solid fill. `secondary` is the outlined pill: no tint
 * at all, so the sweep *is* the border — which is what the effect is really
 * for.
 *
 * One instance is one WebGL context and one render loop. Browsers keep only
 * ~16 live contexts and drop the oldest without warning, so these belong on
 * the calls to action that matter, not on every button on a page.
 */

const PRESETS = {
  primary: {
    tint: "#f0601e",
    tintOpacity: 1,
    textColor: "#150e08",
    lineColor: "#ffd7c0",
    baseColor: "#8a3208",
    intensity: 1.15,
    shineSize: 12,
    shineFade: 38,
  },
  secondary: {
    tint: "#f5f5f7",
    tintOpacity: 0.03,
    textColor: "#f5f5f7",
    lineColor: "#ff8a4c",
    baseColor: "#2c2c36",
    intensity: 1,
    shineSize: 10,
    shineFade: 40,
  },
} as const;

type Props = {
  children: ReactNode;
  variant?: keyof typeof PRESETS;
  size?: "sm" | "md" | "lg";
  /** Given, the button renders as a link. Omitted, it opens the contact dialog. */
  href?: string;
  ariaLabel?: string;
  className?: string;
};

export function Cta({
  children,
  variant = "primary",
  size = "md",
  href,
  ariaLabel,
  className = "",
}: Props) {
  const { open } = useContactModal();
  const preset = PRESETS[variant];

  return (
    <SpecularButton
      {...preset}
      size={size}
      radius={999}
      href={href}
      ariaLabel={ariaLabel}
      className={className}
      proximity={220}
      onClick={href ? undefined : open}
    >
      {children}
    </SpecularButton>
  );
}
