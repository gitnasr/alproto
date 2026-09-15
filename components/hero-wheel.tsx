"use client";

import { useState } from "react";
import Link from "next/link";
import OptionWheel from "./option-wheel";
import { Icon } from "./icon";
import { SOLUTIONS } from "@/lib/solutions";

/**
 * Hero solution wheel — replaces the WebGL capability sphere.
 *
 * The sphere had a structural problem this does not: disc spacing there was a
 * function of the node count, so five domains either sat too far apart to see
 * together or had to be repeated to fill the sphere. A list has no such
 * tension — all five are visible, in order, and the labels are real text
 * rather than glyphs baked into a texture.
 *
 * OptionWheel only selects; it never navigates. So the selected domain's
 * tagline and a real link sit underneath, which is also what makes the whole
 * thing reachable without a pointer.
 */

const LABELS = SOLUTIONS.map((s) => s.navLabel);

export function HeroWheel() {
  const [index, setIndex] = useState(0);
  const active = SOLUTIONS[index];

  return (
    <div className="flex h-full flex-col">
      <div className="min-h-0 flex-1">
        <OptionWheel
          items={LABELS}
          defaultSelected={0}
          onChange={(i) => setIndex(i)}
          /* Muted grey at rest, warming to the brand orange as an option
             reaches the middle — the same relationship the hero headline has
             with its highlight. */
          textColor="#8e8e9a"
          activeColor="#ff8a4c"
          side="right"
          inset={4}
          /* Sized so the longest label ("Data Platforms & Integration") still
             fits the hero column — the items are nowrap and the wheel clips. */
          fontSize={1.5}
          spacing={1.5}
          curve={1}
          tilt={7}
          blur={1.5}
          fade={0.28}
          minOpacity={0.12}
          smoothing={180}
          /* Without wrapping, selecting the first domain leaves the wheel
             top-anchored with nothing above it. Looping keeps Project Rescue —
             the core practice, per lib/solutions.ts — centred on load while
             still showing two domains either side of it. */
          loop
          /* Page scroll stays with the page; drag, click and arrows drive the
             wheel. See the NAHJJ note in option-wheel.jsx. */
          captureScroll={false}
          /* Explicit even though it is the default: the tick sound stays off,
             so playTick() returns before it ever constructs an Audio. */
          soundUrl=""
        />
      </div>

      {/* The selection needs somewhere to go. */}
      {/* Aligned to the same edge the wheel curves around. */}
      <div className="mt-base flex flex-col items-end gap-xs border-t border-hairline-soft pt-base text-right">
        <p className="min-h-[2.5em] text-body-sm text-stone">{active.tagline}</p>
        <Link
          href={`/solutions/${active.slug}`}
          className="group inline-flex w-fit items-center gap-xs rounded-sm text-body-sm-bold text-canvas outline-none transition-colors hover:text-primary focus-visible:ring-[3px] focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-page"
        >
          Explore {active.navLabel}
          <Icon
            name="arrow_forward"
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
}
