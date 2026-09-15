"use client";

import { useState } from "react";
import { Icon } from "./icon";
import { HONEYPOT, submitForm, type SubmitState } from "@/lib/form";

/**
 * The fallback path for the contact dialog. Booking runs through Calendly (see
 * lib/calendly.ts); this form only renders when NEXT_PUBLIC_CALENDLY_URL is
 * unset, so a misconfigured or not-yet-configured deploy still has a way for
 * someone to reach us instead of an empty box.
 */

const COMPANY_SIZE = [
  "1–10 people",
  "11–50 people",
  "51–200 people",
  "201–1,000 people",
  "More than 1,000",
];

const TIMELINE = [
  "As soon as possible",
  "Within 1–3 months",
  "Within 3–6 months",
  "Still working that out",
];

const FIELD =
  "h-11 w-full rounded-md border border-transparent bg-surface-soft px-base text-body-sm text-canvas placeholder:text-stone transition-colors focus:border-primary-container focus:bg-page focus:outline-none";
const LABEL = "mb-xxs block text-body-sm text-charcoal";

export function ContactForm({
  titleId,
  onClose,
}: {
  titleId: string;
  onClose: () => void;
}) {
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    setError("");
    const result = await submitForm(form);
    if (result.ok) {
      setState("sent");
      form.reset();
    } else {
      setState("error");
      setError(result.reason);
    }
  }

  if (state === "sent") {
    return (
      <div className="flex flex-col items-start gap-base py-xxl">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-status-success/10 text-status-success">
          <Icon name="check" size={28} />
        </span>
        <h2
          id={titleId}
          className="text-heading-lg text-canvas"
        >
          Thanks. That came through
          <span className="text-rust">.</span>
        </h2>
        <p className="max-w-2xl text-body-md leading-relaxed text-secondary">
          An engineer will read it and reply within 24 business hours, not a form letter, and not a
          sales sequence. If it turns out you do not need us, we will say that too.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-base inline-flex items-center justify-center rounded-full bg-primary-container px-xxl py-sm text-body-sm-bold text-on-primary transition-colors hover:bg-primary"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 id={titleId} className="pr-xxxl text-heading-lg text-canvas">
        Let&rsquo;s talk about your project
      </h2>
      <p className="mt-xxs text-body-sm-bold text-charcoal">
        We&rsquo;ll come back with an honest read on what it takes to finish.
      </p>

      <form className="mt-base flex flex-col gap-md" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
          <div>
            <label className={LABEL} htmlFor="cm-first">
              First name
            </label>
            <input
              id="cm-first"
              name="first_name"
              required
              autoComplete="given-name"
              placeholder="Alex"
              className={FIELD}
            />
          </div>
          <div>
            <label className={LABEL} htmlFor="cm-last">
              Last name
            </label>
            <input
              id="cm-last"
              name="last_name"
              required
              autoComplete="family-name"
              placeholder="Rivera"
              className={FIELD}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
          <div>
            <label className={LABEL} htmlFor="cm-email">
              Email
            </label>
            <input
              id="cm-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className={FIELD}
            />
          </div>
          <div>
            <label className={LABEL} htmlFor="cm-phone">
              Phone
            </label>
            <input
              id="cm-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+1 555 010 0000"
              className={FIELD}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
          <div>
            <label className={LABEL} htmlFor="cm-industry">
              What industry are you in?
            </label>
            <input
              id="cm-industry"
              name="industry"
              placeholder="Fintech, healthcare, logistics…"
              className={FIELD}
            />
          </div>
          <div>
            <label className={LABEL} htmlFor="cm-size">
              Company size
            </label>
            <select id="cm-size" name="company_size" defaultValue="" className={FIELD}>
              <option value="" disabled>
                Select…
              </option>
              {COMPANY_SIZE.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={LABEL} htmlFor="cm-project">
            What project needs finishing?
          </label>
          <input
            id="cm-project"
            name="project"
            required
            placeholder="A customer portal, a data migration, a mobile app…"
            className={FIELD}
          />
        </div>

        <div>
          <label className={LABEL} htmlFor="cm-state">
            Where does it stand right now?
          </label>
          <textarea
            id="cm-state"
            name="current_state"
            rows={2}
            required
            placeholder="How far it got, who built it, and where it stopped. Rough notes are fine. You do not need to tidy it up first."
            className="w-full rounded-md border border-transparent bg-surface-soft px-base py-sm text-body-sm leading-relaxed text-canvas placeholder:text-stone transition-colors focus:border-primary-container focus:bg-page focus:outline-none"
          />
        </div>

        <div>
          <label className={LABEL} htmlFor="cm-timeline">
            When do you need it live?
          </label>
          <select id="cm-timeline" name="timeline" defaultValue="" className={FIELD}>
            <option value="" disabled>
              Select…
            </option>
            {TIMELINE.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        {/* Spam trap: invisible to people, irresistible to bots. */}
        <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="cm-hp">Leave this field empty</label>
          <input id="cm-hp" name={HONEYPOT} type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex h-[52px] w-full items-center justify-center gap-xs rounded-md bg-primary-container text-body-sm-bold text-on-primary transition-colors duration-200 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "sending" ? "Sending" : "Submit"}
          {state === "sending" && <Icon name="progress_activity" size={18} className="animate-spin" />}
        </button>

        <p aria-live="polite" className="sr-only">
          {state === "error" ? error : ""}
        </p>
        {state === "error" && <p className="text-body-sm text-status-critical">{error}</p>}

        <p className="flex items-center gap-xs text-caption text-secondary">
          <Icon name="lock" size={14} className="shrink-0 text-stone" />
          Mutual NDA before any code review. We reply within 24 business hours.
        </p>
      </form>
    </>
  );
}
