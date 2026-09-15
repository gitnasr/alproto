/**
 * Types for the vendored JavaScript PixelSnow (pixel-snow.jsx).
 * Without this, TS infers the props from the component's own defaults.
 */

import type { CSSProperties } from "react";

export type PixelSnowProps = {
  color?: string;
  /** Flake size in scene units. */
  flakeSize?: number;
  /** Floor on a flake's on-screen size, in pixels. */
  minFlakeSize?: number;
  /**
   * Ceiling on a flake's on-screen size, in pixels. Not upstream: upstream
   * only floors it, so flakes grow without limit as they near the camera.
   * Set equal to minFlakeSize to pin every flake to one size at any depth.
   */
  maxFlakeSize?: number;
  /** Lower values give chunkier pixels — and cost far less to draw. */
  pixelResolution?: number;
  speed?: number;
  /** Higher values fade distant flakes faster. */
  depthFade?: number;
  /** How far into the scene flakes are drawn. */
  farPlane?: number;
  brightness?: number;
  gamma?: number;
  /** Probability a cell holds a flake, 0-1. */
  density?: number;
  variant?: "square" | "round" | "snowflake";
  /**
   * Ceiling on the device pixel ratio the canvas renders at (upstream: 2).
   * This is the performance dial: cost scales with the drawing buffer, since
   * the raymarch runs per fragment rather than per quantised block.
   */
  maxPixelRatio?: number;
  /** Wind direction in degrees. */
  direction?: number;
  className?: string;
  style?: CSSProperties;
};

export default function PixelSnow(props: PixelSnowProps): React.JSX.Element;
