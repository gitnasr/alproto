"use client";

import { useEffect, useState } from "react";
import PixelSnow from "./pixel-snow";

/**
 * Site-wide drifting snow.
 *
 * Mounted once in the root layout, so the whole site shares a single WebGL
 * context and a single render loop rather than one per page section.
 *
 * It has to sit *above* the page, not behind it: every section paints an
 * opaque background (`bg-page`, `bg-ink-deep`, `bg-surface-soft`), so a
 * backdrop would be covered on every route. `pointer-events-none` keeps it out
 * of the way of every link and button underneath, and z-40 puts it under the
 * header island (z-50) so the navigation stays crisp.
 *
 * Not mounted at all when the visitor asks for less motion — the component
 * runs an unconditional animation loop, so hiding it with CSS would keep
 * paying for it.
 */
export function AmbientSnow() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setAllowed(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (!allowed) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40 opacity-60">
      <PixelSnow
        color="#f5f5f7"
        variant="round"
        /* pixelResolution only quantises the ray direction, so a high value is
           free: the raymarch runs per fragment either way. High enough here
           that the blocks fall below one CSS pixel and the flakes read round
           rather than pixellated. */
        pixelResolution={1600}
        /* min and max equal pins every flake to the same 2px dot, near or
           far. flakeSize no longer controls size at all — it only sets where
           the brightness falloff starts, so it is raised to keep dots at full
           strength across the whole depth the rays travel. */
        flakeSize={0.012}
        minFlakeSize={2}
        maxFlakeSize={2}
        /* The three dials that actually cost: buffer size, how far each ray
           marches before it gives up, and how often it has to evaluate a
           cell. */
        maxPixelRatio={1}
        farPlane={7}
        density={0.16}
        speed={0.4}
        direction={115}
        brightness={0.7}
      />
    </div>
  );
}
