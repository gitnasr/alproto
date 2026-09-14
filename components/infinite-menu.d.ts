/**
 * Types for the vendored JavaScript InfiniteMenu (components/infinite-menu.jsx).
 *
 * Without this, TS infers the props from the component's own default values,
 * so `items = []` widens to `never[]` and every real item is rejected.
 */

export type InfiniteMenuItem = {
  /** Any image source the atlas builder can load — a URL or a data URL. */
  image: string;
  /** Absolute (opens in a new tab) or app-relative (navigates in place). */
  link: string;
  title: string;
  description: string;
};

export type InfiniteMenuProps = {
  items?: InfiniteMenuItem[];
  /** Camera zoom. */
  scale?: number;
  /** Canvas backdrop; also exposed to the CSS as --infinite-menu-background. */
  backgroundColor?: string;
  /**
   * How many discs sit on the sphere, spread evenly (Fibonacci). Null keeps
   * upstream: 42 icosahedron vertices. This is the spacing dial — 5 nodes land
   * ~86deg apart, 12 ~52deg, 42 ~27deg — and it trades against repetition,
   * since discs index the items with instanceId % itemCount.
   */
  discCount?: number | null;
  /**
   * Fraction of the sphere radius the frame covers (upstream hard-codes 0.35).
   * Raise it to bring a disc's neighbours into view — essential with
   * oneDiscPerItem, where a small frame would show a single disc in isolation.
   */
  fit?: number;
  /**
   * Start off-axis so the snap rotates the sphere into place on load — one
   * unprompted movement that shows the sphere can be dragged.
   */
  settleOnLoad?: boolean;
  /**
   * Where the depth fade begins (upstream hard-codes 0.5). Lower it on a
   * sparse sphere or every neighbouring disc fades out before it is on screen.
   */
  falloffStart?: number;
  /** Disc radius in world units (upstream hard-codes 0.25). */
  discScale?: number;
  /** Text for the one-time "drag me" hint. Omit for no hint. */
  dragHint?: string | null;
};

export default function InfiniteMenu(props: InfiniteMenuProps): React.JSX.Element;
