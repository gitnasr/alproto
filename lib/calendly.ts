/**
 * Calendly scheduling.
 *
 * The "Book a 15 Minute Call" flow hands off to a hosted Calendly event rather
 * than posting a lead into an inbox: the visitor picks a slot and the call is on
 * both calendars before anyone reads an email. Set NEXT_PUBLIC_CALENDLY_URL to
 * the event link — e.g. https://calendly.com/nexus-dev/15min — and the contact
 * dialog switches from the fallback form to live availability.
 *
 * Anything we want to ask (industry, company size, what needs finishing) belongs
 * in that event type's own questions, so the answers land on the booking itself.
 */

export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/ibrahimkhodair1/30min";

export const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";
export const CALENDLY_STYLES = "https://assets.calendly.com/assets/external/widget.css";

/**
 * The widget renders in a cross-origin iframe, so it inherits none of our CSS.
 * Calendly re-skins it from query params instead — these keep it from looking
 * like a bolted-on third party.
 *
 * `hide_event_type_details` drops Calendly's left panel (title, duration, blurb)
 * because the dialog around it already says all of that, and losing the panel
 * keeps the embed narrow enough to sit in a modal.
 */
const EMBED_PARAMS: Record<string, string> = {
  hide_event_type_details: "1",
  hide_gdpr_banner: "1",
  background_color: "ffffff",
  text_color: "0a1317",
  primary_color: "0064e0",
};

/**
 * Merge our embed settings onto whichever link the team pastes in, preserving
 * any query string it already carries (Calendly links can arrive with prefill or
 * UTM values attached). Returns "" for an unusable value so callers can fall
 * back rather than render a broken iframe.
 */
export function buildCalendlyUrl(url: string = CALENDLY_URL): string {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    for (const [key, value] of Object.entries(EMBED_PARAMS)) {
      if (!parsed.searchParams.has(key)) parsed.searchParams.set(key, value);
    }
    return parsed.toString();
  } catch {
    console.error("[calendly] NEXT_PUBLIC_CALENDLY_URL is not a valid URL:", url);
    return "";
  }
}
