/**
 * Types for the vendored JavaScript OptionWheel (option-wheel.jsx).
 * Without this, TS infers the props from the component's own defaults.
 */

export type OptionWheelProps = {
  items?: string[];
  defaultSelected?: number;
  onChange?: (index: number, item: string) => void;
  /** Resting colour of the labels. */
  textColor?: string;
  /** Colour an option blends toward as it reaches the middle. */
  activeColor?: string;
  /** Which edge the wheel curves around. */
  side?: "left" | "right";
  /** Label size in rem. */
  fontSize?: number;
  /** Row pitch, as a multiple of the font size. */
  spacing?: number;
  /** Depth of the curve; 0 flattens the wheel into a straight list. */
  curve?: number;
  /** Degrees between neighbouring options — higher curls it tighter. */
  tilt?: number;
  /** Blur in px added per step away from the middle. */
  blur?: number;
  /** Opacity lost per step away from the middle. */
  fade?: number;
  minOpacity?: number;
  /** Easing time constant in ms; higher feels heavier. */
  smoothing?: number;
  /** Padding in px between the anchored edge and the centred option. */
  inset?: number;
  loop?: boolean;
  draggable?: boolean;
  /**
   * Whether wheel/touchpad scrolling drives the list. Not upstream, which
   * always captures it — set false where the component sits inside a scrolling
   * page so it cannot hold the page scroll hostage.
   */
  captureScroll?: boolean;
  /** Short tick sound on change; empty disables it. */
  soundUrl?: string;
  soundVolume?: number;
  className?: string;
};

export default function OptionWheel(props: OptionWheelProps): React.JSX.Element;
