"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Icon } from "./icon";
import { CalendlyEmbed } from "./calendly-embed";
import { ContactForm } from "./contact-form";
import { buildCalendlyUrl } from "@/lib/calendly";

const ContactModalContext = createContext<{ open: () => void } | null>(null);

/** Opens the shared booking dialog from anywhere in the tree. */
export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used inside <ContactModalProvider>");
  return ctx;
}

const TITLE_ID = "contact-modal-title";

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const calendlyUrl = buildCalendlyUrl();

  const open = useCallback(() => dialogRef.current?.showModal(), []);
  const close = useCallback(() => dialogRef.current?.close(), []);

  // Track the dialog's own state rather than setting it alongside open/close:
  // the UA can close a <dialog> without us (Escape, form dismissal), and this
  // way every path stays in sync. The embed only mounts while the dialog is up,
  // so a closed dialog costs nothing.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const sync = () => {
      setIsOpen(dialog.open);
      document.body.style.overflow = dialog.open ? "hidden" : "";
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });
    return () => {
      observer.disconnect();
      document.body.style.overflow = "";
    };
  }, []);

  // The UA closes a modal <dialog> on Escape, but handle it ourselves too so the
  // close path (and the body-scroll restore) is identical however it is dismissed.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      e.preventDefault();
      close();
    };
    dialog.addEventListener("keydown", onKey);
    return () => dialog.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <ContactModalContext.Provider value={{ open }}>
      {children}

      <dialog
        ref={dialogRef}
        aria-labelledby={TITLE_ID}
        onClick={(e) => {
          // A click that lands on the dialog itself is a backdrop click.
          if (e.target === dialogRef.current) close();
        }}
        className={`contact-modal rounded-xl bg-canvas p-0 text-ink-deep shadow-2xl ${
          // Calendly renders a single centred column once its event-type panel is
          // hidden, so a wide dialog just buys empty gutters.
          calendlyUrl ? "w-[min(34rem,calc(100vw-2rem))]" : "w-[min(40rem,calc(100vw-2rem))]"
        }`}
      >
        <div className="relative max-h-[92vh] overflow-y-auto p-xl max-sm:px-base sm:p-xxl [@media(max-height:840px)]:p-base [@media(max-height:840px)]:sm:p-xl">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-base right-base z-10 flex h-9 w-9 items-center justify-center rounded-full text-steel transition-colors hover:bg-surface-soft hover:text-ink-deep"
          >
            <Icon name="close" size={22} />
          </button>

          {calendlyUrl ? (
            <>
              <h2
                id={TITLE_ID}
                className="pr-xxxl text-heading-lg font-semibold tracking-tight text-ink-deep"
              >
                Book a 15 minute call
              </h2>
              <p className="mt-xxs text-body-sm-bold text-charcoal">
                Pick a time that suits you. Tell us what stalled and we&rsquo;ll come back with an
                honest read on what it takes to finish.
              </p>

              <div className="mt-base">{isOpen && <CalendlyEmbed url={calendlyUrl} />}</div>
            </>
          ) : (
            <ContactForm titleId={TITLE_ID} onClose={close} />
          )}
        </div>
      </dialog>
    </ContactModalContext.Provider>
  );
}
