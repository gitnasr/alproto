"use client";

import { useEffect, useRef } from "react";

/**
 * The hero constellation: a shaped cloud of a few thousand particles turning
 * slowly in the void, with loose triangles drifting through the space around
 * it.
 *
 * Canvas 2D rather than WebGL. The reference's field is thousands of *flat*
 * marks — dots and tiny outlined triangles — with no lighting, no depth of
 * field and no surface shading, so there is nothing here a fragment shader
 * would do better. 2D also means no context to lose, no compile step, and it
 * composites over the page like any other element.
 *
 * Cost is controlled in three places rather than by lowering the particle
 * count, which is what gives the cloud its density:
 *   - draws are bucketed by colour and quantised depth, so a frame is ~24
 *     state changes instead of one per particle;
 *   - the loop stops entirely when the canvas scrolls out of view or the tab
 *     is hidden;
 *   - the backing store is capped at 2x regardless of the device ratio.
 */

/** Points on the shell. Dense enough to read as a surface, not a scatter. */
const COUNT = 2600;
/** How many of those are drawn as outlined triangles rather than dots. */
const TRIANGLE_SHARE = 0.12;
/** Loose marks drifting in the surrounding void. */
const AMBIENT = 44;
/** Depth is quantised into this many alpha steps so draws can be batched. */
const DEPTH_STEPS = 6;

/* Saffron at the top of the shape falling through bone white into Electric
   Iris and Deep Verdant at the bottom — the gradient the reference runs down
   its cloud. Ordered light to dark; a particle picks its colour by height. */
const RAMP = [
  [255, 184, 41],
  [255, 255, 255],
  [128, 82, 255],
  [21, 132, 110],
] as const;

type Point = {
  x: number;
  y: number;
  z: number;
  colour: number;
  triangle: boolean;
  /** Per-particle size jitter, so the shell does not read as a regular mesh. */
  scale: number;
};

type Drifter = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  spin: number;
  rotation: number;
  colour: number;
  alpha: number;
};

/**
 * Fibonacci sphere: the only distribution that stays even at every latitude.
 * A naive random lat/long bunches particles at the poles, which reads as two
 * bright caps rather than a shell.
 */
function buildShell(): Point[] {
  const points: Point[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < COUNT; i++) {
    const y = 1 - (i / (COUNT - 1)) * 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    /* Pushing a minority of particles inside the shell gives the cloud a
       little volume, so the silhouette does not look like a hollow balloon. */
    const depth = i % 7 === 0 ? 0.55 + Math.random() * 0.35 : 1;
    /* Screen Y grows downward while this Y grows up, so -1 is what lands at
       the top of the canvas — which is where the ramp has to start for
       saffron to crown the shape and the violet to pool underneath it. */
    const height = (y + 1) / 2;
    points.push({
      x: Math.cos(theta) * radius * depth,
      y: y * depth,
      z: Math.sin(theta) * radius * depth,
      colour: Math.min(
        RAMP.length - 1,
        Math.floor(height * (RAMP.length - 1) + Math.random() * 0.6),
      ),
      triangle: Math.random() < TRIANGLE_SHARE,
      scale: 0.7 + Math.random() * 0.9,
    });
  }
  return points;
}

function buildDrifters(w: number, h: number): Drifter[] {
  return Array.from({ length: AMBIENT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.12,
    vy: (Math.random() - 0.5) * 0.12,
    size: 4 + Math.random() * 12,
    spin: (Math.random() - 0.5) * 0.004,
    rotation: Math.random() * Math.PI * 2,
    colour: Math.floor(Math.random() * RAMP.length),
    alpha: 0.12 + Math.random() * 0.3,
  }));
}

function triangle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, rot: number) {
  ctx.beginPath();
  for (let i = 0; i < 3; i++) {
    const a = rot + (i * Math.PI * 2) / 3 - Math.PI / 2;
    const px = x + Math.cos(a) * r;
    const py = y + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

export function ParticleConstellation({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const shell = buildShell();
    let drifters: Drifter[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;
    let spin = 0;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    /* Buckets are allocated once and refilled in place each frame: a frame
       that allocated 24 arrays would hand the collector 1,400 arrays a
       second. */
    const buckets: number[][] = Array.from(
      { length: RAMP.length * DEPTH_STEPS },
      () => [],
    );

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      drifters = buildDrifters(width, height);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.42;
      const cos = Math.cos(spin);
      const sin = Math.sin(spin);
      /* A fixed tilt reads as a globe seen slightly from above, which is what
         stops the rotation looking like a flat disc spinning. */
      const tiltCos = Math.cos(0.42);
      const tiltSin = Math.sin(0.42);

      for (const bucket of buckets) bucket.length = 0;

      // Ambient drift, behind the shell.
      for (const d of drifters) {
        d.x += d.vx;
        d.y += d.vy;
        d.rotation += d.spin;
        if (d.x < -20) d.x = width + 20;
        if (d.x > width + 20) d.x = -20;
        if (d.y < -20) d.y = height + 20;
        if (d.y > height + 20) d.y = -20;
        const [r, g, b] = RAMP[d.colour];
        ctx.strokeStyle = `rgba(${r},${g},${b},${d.alpha})`;
        ctx.lineWidth = 1;
        triangle(ctx, d.x, d.y, d.size, d.rotation);
        ctx.stroke();
      }

      // Project the shell, and sort each particle into a colour+depth bucket.
      for (let i = 0; i < shell.length; i++) {
        const p = shell[i];
        const x1 = p.x * cos - p.z * sin;
        const z1 = p.x * sin + p.z * cos;
        const y1 = p.y * tiltCos - z1 * tiltSin;
        const z2 = p.y * tiltSin + z1 * tiltCos;

        /* Perspective, and the depth cue that does most of the work: the far
           side of the shell is smaller and fainter, so the cloud reads as a
           volume rather than a ring. */
        const perspective = 1 / (2.1 - z2);
        const sx = cx + x1 * radius * perspective * 2.1;
        const sy = cy + y1 * radius * perspective * 2.1;
        const depth = (z2 + 1) / 2; // 0 far, 1 near

        const step = Math.min(DEPTH_STEPS - 1, Math.floor(depth * DEPTH_STEPS));
        const bucket = buckets[p.colour * DEPTH_STEPS + step];
        bucket.push(sx, sy, (0.5 + depth * 1.6) * p.scale, p.triangle ? 1 : 0);
      }

      // One state change per bucket instead of one per particle.
      for (let c = 0; c < RAMP.length; c++) {
        const [r, g, b] = RAMP[c];
        for (let s = 0; s < DEPTH_STEPS; s++) {
          const bucket = buckets[c * DEPTH_STEPS + s];
          if (!bucket.length) continue;
          const alpha = 0.1 + (s / (DEPTH_STEPS - 1)) * 0.75;
          const style = `rgba(${r},${g},${b},${alpha})`;
          ctx.fillStyle = style;
          ctx.strokeStyle = style;
          ctx.lineWidth = 0.8;
          for (let i = 0; i < bucket.length; i += 4) {
            const x = bucket[i];
            const y = bucket[i + 1];
            const size = bucket[i + 2];
            if (bucket[i + 3]) {
              triangle(ctx, x, y, size * 1.9, x + y);
              ctx.stroke();
            } else {
              ctx.fillRect(x, y, size, size);
            }
          }
        }
      }
    };

    const tick = () => {
      if (!running) return;
      spin += 0.0013;
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
    draw(); // A still frame, so the shape is there before the loop starts.

    /* Off-screen and background tabs cost nothing: an animation loop the
       visitor cannot see is pure battery. */
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting && !document.hidden ? start() : stop()),
      { threshold: 0 },
    );
    observer.observe(canvas);

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
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      reduced.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`h-full w-full ${className}`}
    />
  );
}
