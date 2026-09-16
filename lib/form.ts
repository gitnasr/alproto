/**
 * Delivery for the fallback contact form. Booking normally runs through Calendly
 * (see lib/calendly.ts); this path only carries traffic when
 * NEXT_PUBLIC_CALENDLY_URL is unset.
 *
 * Provider-agnostic on purpose: set NEXT_PUBLIC_FORM_ENDPOINT to whatever the
 * team picks (Formspree, Basin, Getform, or an internal handler) and the form
 * starts working with no code change.
 *
 * The endpoint receives a normal multipart POST with an `Accept: application/json`
 * header, which is what keeps the hosted services from issuing their own redirect.
 */

export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

export type SubmitState = "idle" | "sending" | "sent" | "error";

export type SubmitResult = { ok: true } | { ok: false; reason: string };

/** Bots fill hidden fields; people do not. A filled honeypot is dropped silently. */
export const HONEYPOT = "company_website";

/** Never expose configuration detail to a visitor; they can only retry. */
const GENERIC_FAILURE =
  "We couldn't send that just now. Please try again in a moment. If it keeps failing, the problem is on our side.";

export async function submitForm(form: HTMLFormElement): Promise<SubmitResult> {
  const data = new FormData(form);

  if (String(data.get(HONEYPOT) ?? "").trim() !== "") {
    // Report success so the bot has nothing to learn from the response.
    return { ok: true };
  }
  data.delete(HONEYPOT);

  if (!FORM_ENDPOINT) {
    // Loud for whoever is building the site, generic for whoever is using it.
    console.error(
      "[contact form] NEXT_PUBLIC_FORM_ENDPOINT is not set, submissions are going nowhere.",
    );
    return { ok: false, reason: GENERIC_FAILURE };
  }

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.error("[contact form] endpoint returned", res.status);
      return { ok: false, reason: GENERIC_FAILURE };
    }
    return { ok: true };
  } catch {
    return { ok: false, reason: GENERIC_FAILURE };
  }
}
