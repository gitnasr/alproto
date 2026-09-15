"use client";

import { useEffect, useRef } from "react";

/**
 * Site-wide ambient drift: a thin scatter of outlined triangles and points
 * moving slowly across the whole page, the way the reference's particles carry
 * past its central constellation and out over everything else.
 *
 * Mounted once in the root layout, so the site shares one canvas and one
 * render loop rather than one per section.
 *
 * It sits *above* the page rather than behind it. Every section paints an
 * opaque ground, so a backdrop would be covered on every route. z-40 keeps it
 * under the header (z-50) so the navigation stays crisp, and pointer-events
 * are off so it never intercepts a link.
 *
 * Density is deliberately low. This is atmosphere behind the reading, and the
 * moment it becomes legible as "particles" it competes with the type.
 */

const COUNT = 54;

/* Saffron, Electric Iris, Deep Verdant and Bone White — the constellation's
   palette, thinned out. */
const RAMP = [
  [255, 184, 41],
  [128, 82, 255],
  [21, 132, 110],
  [255, 255, 255],
] as const;

type Mote = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  spin: number;
  colour: number;
  alpha: number;
  triangle: boolean;
};

function build(w: number, h: number): Mote[] {
  return Array.from({ length: COUNT }, () => {
    const triangle = Math.random() < 0.7;
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      /* A shared downward-left bias with per-mote variation, so the field
         drifts as one body of air rather than as noise. */
      vx: -0.06 + (Math.random() - 0.5) * 0.09,
      vy: 0.05 + (Math.random() - 0.5) * 0.07,
      size: triangle ? 3 + Math.random() * 9 : 1 + Math.random() * 1.4,
      rotation: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.003,
      colour: Math.floor(Math.random() * RAMP.length),
      alpha: 0.1 + Math.random() * 0.26,
      triangle,
    };
  });
}

export function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let motes: Mote[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      motes = build(width, height);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const m of motes) {
        m.x += m.vx;
        m.y += m.vy;
        m.rotation += m.spin;
        // Wrap rather than respawn, so density never flickers.
        if (m.x < -24) m.x = width + 24;
        if (m.x > width + 24) m.x = -24;
        if (m.y < -24) m.y = height + 24;
        if (m.y > height + 24) m.y = -24;

        const [r, g, b] = RAMP[m.colour];
        const style = `rgba(${r},${g},${b},${m.alpha})`;
        if (m.triangle) {
          ctx.strokeStyle = style;
          ctx.lineWidth = 1;
          ctx.beginPath();
          for (let i = 0; i < 3; i++) {
            const a = m.rotation + (i * Math.PI * 2) / 3 - Math.PI / 2;
            const px = m.x + Math.cos(a) * m.size;
            const py = m.y + Math.sin(a) * m.size;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        } else {
          ctx.fillStyle = style;
          ctx.fillRect(m.x, m.y, m.size, m.size);
        }
      }
    };

    const tick = () => {
      if (!running) return;
      draw();
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reduced.matches) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    resize();
    draw();
    start();

    const onVisibility = () => (document.hidden ? stop() : start());
    const onResize = () => {
      resize();
      draw();
    };
    const onMotionChange = () => {
      if (reduced.matches) stop();
      else start();
      draw();
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize);
    reduced.addEventListener("change", onMotionChange);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      reduced.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 h-full w-full"
    />
  );
}
