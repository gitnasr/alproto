"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./icon";
import { CALENDLY_SCRIPT, CALENDLY_STYLES } from "@/lib/calendly";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget(options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, string>;
      }): void;
    };
  }
}

/**
 * Load the widget once per page, no matter how many times the dialog is opened.
 * The promise is cached so a second open reuses the first load instead of
 * appending another <script>.
 */
let loader: Promise<void> | null = null;

function loadCalendly(): Promise<void> {
  if (window.Calendly) return Promise.resolve();
  if (loader) return loader;

  loader = new Promise<void>((resolve, reject) => {
    if (!document.querySelector(`link[href="${CALENDLY_STYLES}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_STYLES;
      document.head.appendChild(link);
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      // Let the next open retry — a failed load is usually a blocked request or
      // a dropped connection, not a permanent condition.
      loader = null;
      script.remove();
      reject(new Error("Calendly widget failed to load"));
    };
    document.head.appendChild(script);
  });

  return loader;
}

/**
 * Live Calendly availability, mounted imperatively rather than by dropping a
 * `.calendly-inline-widget` div in the markup: the widget only auto-scans on
 * page load, and this one appears when a dialog opens.
 */
export function CalendlyEmbed({ url }: { url: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;
    let observer: MutationObserver | null = null;
    setLoaded(false);
    setFailed(false);

    /**
     * Calendly's iframe is cross-origin and paints a transparent background, so
     * our placeholder would otherwise show through the finished calendar. Wait
     * for the frame's own load event before taking it away.
     */
    const watchFrame = () => {
      const iframe = host.querySelector("iframe");
      if (!iframe) return false;
      iframe.addEventListener(
        "load",
        () => {
          if (!cancelled) setLoaded(true);
        },
        { once: true },
      );
      return true;
    };

    loadCalendly()
      .then(() => {
        if (cancelled || !window.Calendly) return;
        host.replaceChildren();
        window.Calendly.initInlineWidget({ url, parentElement: host });

        // The widget usually builds its iframe synchronously, but don't bet the
        // loading state on that.
        if (!watchFrame()) {
          observer = new MutationObserver(() => {
            if (watchFrame()) observer?.disconnect();
          });
          observer.observe(host, { childList: true, subtree: true });
        }
      })
      .catch((err) => {
        console.error("[calendly]", err);
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      observer?.disconnect();
      // Drop the iframe so a reopened dialog starts on a fresh calendar rather
      // than wherever the last visit left off.
      host.replaceChildren();
    };
  }, [url]);

  if (failed) {
    return (
      <div className="flex flex-col items-start gap-sm rounded-lg bg-surface-soft p-xl">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-status-warning/10 text-status-warning">
          <Icon name="error" size={24} />
        </span>
        <p className="text-body-md text-ink-deep">The scheduler didn&rsquo;t load.</p>
        <p className="text-body-sm leading-relaxed text-secondary">
          An ad blocker or a flaky connection will do that. Open{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-container underline underline-offset-4 hover:text-primary"
          >
            the booking page directly
          </a>{" "}
          and you will get the same slots.
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-[clamp(440px,66vh,700px)] w-full">
      {!loaded && (
        <p
          aria-live="polite"
          className="absolute inset-0 flex items-center justify-center text-body-sm text-stone"
        >
          Loading available times…
        </p>
      )}
      {/* No min-width floor: a 360px phone cannot give the widget 320px once the
          dialog inset and padding are taken out, and a hard floor buys a
          sideways scroll rather than a wider calendar. */}
      <div ref={hostRef} className="relative h-full w-full" />
    </div>
  );
}
