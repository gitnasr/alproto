"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import SpecularButton from "./specular-button";
import { useContactModal } from "./contact-modal";
import { isLite } from "@/lib/lite";

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

/* `primary` is the reference's one filled pill: Electric Iris violet with a
   white label. Violet appears nowhere else — not as a surface, not as type —
   which is what keeps it reading as "the action" against the void.
   `secondary` is the ghost form beside it: no fill, white label.
   Both are flat. The reference carries no shadows and no gradients on UI, so
   the specular sweep is only a whisper of rim, not a gloss. */
const PRESETS = {
  primary: {
    tint: "#8052ff",
    tintOpacity: 1,
    textColor: "#ffffff",
    lineColor: "#d9caff",
    baseColor: "#5a2fd6",
    intensity: 0.4,
    shineSize: 10,
    shineFade: 46,
  },
  secondary: {
    tint: "#ffffff",
    tintOpacity: 0.04,
    textColor: "#ffffff",
    lineColor: "#ffffff",
    baseColor: "#3f3f46",
    intensity: 0.35,
    shineSize: 10,
    shineFade: 46,
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

  /* Plain until proven capable. The server and the first client render both
     produce the CSS-only pill, so hydration always matches; a desktop with a
     real pointer then upgrades to the WebGL rim after mount. A phone never
     does — and never creates a GPU context for an effect it could not show. */
  const [rich, setRich] = useState(false);
  useEffect(() => {
    setRich(!isLite());
  }, []);

  if (!rich) {
    /* The same classes and custom properties SpecularButton sets, so the pill
       is visually identical at rest — only the canvas layer is missing. */
    const pill = {
      "aria-label": ariaLabel,
      className: `specular-button specular-button--${size}${className ? ` ${className}` : ""}`,
      style: {
        "--sb-radius": "999px",
        "--sb-tint": preset.tint,
        "--sb-tint-opacity": preset.tintOpacity,
        "--sb-blur": "0px",
        "--sb-text-color": preset.textColor,
      } as CSSProperties,
    };
    const label = <span className="specular-button__label">{children}</span>;

    return href ? (
      <Link href={href} {...pill}>
        {label}
      </Link>
    ) : (
      <button type="button" onClick={open} {...pill}>
        {label}
      </button>
    );
  }

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
