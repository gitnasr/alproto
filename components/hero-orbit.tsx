"use client";

import { useEffect, useMemo, useState } from "react";
import InfiniteMenu from "./infinite-menu";
import { SOLUTIONS } from "@/lib/solutions";

/**
 * Hero capability sphere — the draggable replacement for the old static
 * hexagonal node network.
 *
 * InfiniteMenu is texture-driven: it wants an image URL per item, which it
 * bakes into a WebGL atlas. We have no photography for the five solution
 * domains, and would not want any — the site's visual language is the
 * Material Symbols glyph in a hexagon. So the tiles are drawn here at runtime
 * on a 2D canvas and handed over as data URLs: same-origin (no CORS on the
 * atlas), no new asset files, and the colours are read from the live theme
 * tokens so a re-theme carries into the sphere for free.
 */

const TILE = 512;
/** The disc geometry maps the tile's inscribed circle to the visible face, so
 *  everything has to live inside a centred circle of radius TILE/2. */
const HEX_RADIUS = 188;
const GLYPH_SIZE = 150;
const FONT = '"Material Symbols Outlined"';

type Item = { image: string; link: string; title: string; description: string };

function token(name: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

function hexPath(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.beginPath();
  // Flat top and bottom, vertices pointing left and right — the same
  // orientation the old hero-network drew.
  for (let i = 0; i < 6; i++) {
    const rad = ((i * 60) * Math.PI) / 180;
    const x = cx + r * Math.cos(rad);
    const y = cy + r * Math.sin(rad);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
}

function drawTile(icon: string, label: string, ligaturesWork: boolean) {
  const canvas = document.createElement("canvas");
  canvas.width = TILE;
  canvas.height = TILE;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const sand = token("--color-accent-electric", "#e8c489");
  const rust = token("--color-primary-container", "#b85434");
  const c = TILE / 2;

  // Face: espresso panel with a sand keyline. Everything outside the hexagon
  // stays transparent — any fill out there turns the disc into an orange coin
  // instead of a hexagon floating against the hero.
  hexPath(ctx, c, c, HEX_RADIUS);
  ctx.fillStyle = "#3a2018ee";
  ctx.fill();

  // Warm core, clipped to the face, the way the hero's node diagram glows.
  ctx.save();
  hexPath(ctx, c, c, HEX_RADIUS);
  ctx.clip();
  const glow = ctx.createRadialGradient(c, c, 0, c, c, HEX_RADIUS);
  glow.addColorStop(0, `${rust}59`);
  glow.addColorStop(0.6, `${rust}1a`);
  glow.addColorStop(1, `${rust}00`);
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, TILE, TILE);
  ctx.restore();

  hexPath(ctx, c, c, HEX_RADIUS);
  ctx.strokeStyle = `${sand}b3`;
  ctx.lineWidth = 6;
  ctx.stroke();

  ctx.fillStyle = sand;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  if (ligaturesWork) {
    ctx.font = `${GLYPH_SIZE}px ${FONT}`;
    ctx.fillText(icon, c, c);
  } else {
    // Canvas refused to shape the icon ligature — fall back to the domain's
    // initial in the display face rather than painting the ligature's name.
    ctx.font = `600 ${GLYPH_SIZE}px ${token("--font-display", "system-ui")}`;
    ctx.fillText(label.charAt(0).toUpperCase(), c, c);
  }

  return canvas.toDataURL("image/png");
}

/**
 * Material Symbols renders `home` as a house through an OpenType ligature.
 * Canvas2D usually applies default ligatures, but it is not guaranteed — and
 * when it does not, fillText would paint the literal word. A substituted
 * glyph measures about one em; the spelled-out name measures far wider, so
 * the width tells us which one we got.
 */
function detectLigatures() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return false;
  ctx.font = `100px ${FONT}`;
  return ctx.measureText("engineering").width < 150;
}

export function HeroOrbit() {
  const [items, setItems] = useState<Item[]>([]);

  // Identity must be stable: InfiniteMenu rebuilds the whole GL scene whenever
  // `items` changes, so this is computed once and never re-derived per render.
  const solutions = useMemo(
    () =>
      SOLUTIONS.map((s) => ({
        icon: s.icon,
        link: `/solutions/${s.slug}`,
        title: s.navLabel,
        description: s.tagline,
      })),
    [],
  );

  useEffect(() => {
    let cancelled = false;

    const build = async () => {
      // The glyph font is loaded by the document, but fillText can run before
      // it is ready and would silently draw in the fallback face.
      try {
        await document.fonts.load(`${GLYPH_SIZE}px ${FONT}`, "engineering");
        await document.fonts.ready;
      } catch {
        /* fall through — detectLigatures() decides what we can draw */
      }
      if (cancelled) return;

      const ligaturesWork = detectLigatures();
      setItems(
        solutions.map((s) => ({
          image: drawTile(s.icon, s.title, ligaturesWork),
          link: s.link,
          title: s.title,
          description: s.description,
        })),
      );
    };

    build();
    return () => {
      cancelled = true;
    };
  }, [solutions]);

  /* Node count is the spacing dial, and it fights repetition:
     5 nodes (one per domain) sit ~86deg apart and the depth fade leaves a
     neighbour at 0.10 alpha, so you only ever see one disc, alone. 12 nodes
     sit ~52deg apart and read as a cluster, at the cost of each domain
     appearing 2-3 times. falloffStart drops from 0.5 so those neighbours are
     actually drawn (0.70 alpha instead of 0.22).
     settleOnLoad + dragHint: a canvas looks inert, so the sphere rotates
     itself into place on load and says what to do, once. A continuous drift
     was worse — it never snaps, so the middle of the frame sits empty. */
  return (
    <InfiniteMenu
      items={items}
      scale={2.4}
      fit={0.72}
      discCount={12}
      falloffStart={0}
      discScale={0.38}
      settleOnLoad
      dragHint="Drag to explore"
      backgroundColor="transparent"
    />
  );
}
