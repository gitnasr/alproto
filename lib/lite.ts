/**
 * Whether to skip the site's decorative GPU and per-frame work.
 *
 * Three signals, any one of which is enough:
 *   - `hover: none` — a touch screen. The WebGL button rims are driven by
 *     pointer proximity, so without a hovering cursor they render nothing at
 *     all while still paying for a full GPU context each.
 *   - `max-width: 767px` — a phone-sized viewport, where the particle canvases
 *     cost the most relative to what they add.
 *   - `prefers-reduced-motion` — the visitor asked for less of exactly this.
 *
 * On the server there is no window to ask, so this answers `true`: the light
 * version is what gets server-rendered, and a capable client upgrades after
 * mount. Answering `false` here would hydrate the heavy version first and then
 * tear it down on every phone.
 */
export const LITE_QUERY =
  "(hover: none), (max-width: 767px), (prefers-reduced-motion: reduce)";

export function isLite(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia(LITE_QUERY).matches;
}
