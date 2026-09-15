/**
 * Types for the vendored JavaScript SpecularButton (specular-button.jsx).
 * Without this, TS infers the props from the component's own defaults and
 * rejects anything the defaults do not already cover.
 */

import type { MouseEventHandler, ReactNode } from "react";

export type SpecularButtonProps = {
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  /** Corner radius in px; clamped to a pill at half the shorter side. */
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  textColor?: string;
  /** The moving specular highlight. */
  lineColor?: string;
  /** Static edge stroke beneath the highlight. */
  baseColor?: string;
  intensity?: number;
  /** Angular size of each shine streak, in degrees. */
  shineSize?: number;
  /** How gradually a streak fades at its ends, in degrees. */
  shineFade?: number;
  thickness?: number;
  speed?: number;
  followMouse?: boolean;
  /** Cursor distance in px over which the shine fades in. */
  proximity?: number;
  autoAnimate?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
  /** NAHJJ: renders a next/link instead of a <button>. */
  href?: string;
  /** NAHJJ: accessible name, for buttons whose label is an icon or shorthand. */
  ariaLabel?: string;
};

export default function SpecularButton(props: SpecularButtonProps): React.JSX.Element;
