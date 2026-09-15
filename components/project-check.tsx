"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Icon } from "./icon";
import { SOLUTIONS } from "@/lib/solutions";
import { ContactTrigger } from "@/components/contact-trigger";

type Symptom = { id: string; label: string; detail: string; areas: string[] };

/** Symptoms are phrased as observations, never as accusations. */
const SYMPTOMS: Symptom[] = [
  {
    id: "no-estimate",
    label: "Nobody can say what's actually left to do",
    detail: "Remaining scope is a guess, and each estimate contradicts the last one.",
    areas: ["project-rescue"],
  },
  {
    id: "moving-dates",
    label: "The launch date has moved more than once",
    detail: "Each slip is explained individually, but the pattern never breaks.",
    areas: ["project-rescue"],
  },
  {
    id: "team-gone",
    label: "The people who built it have moved on",
    detail: "An agency finished its contract, or the engineers who knew it left.",
    areas: ["project-rescue"],
  },
  {
    id: "manual-deploys",
    label: "Releases are manual, and only one person can do them",
    detail: "Deployment is an event people schedule around rather than a routine step.",
    areas: ["cloud-infrastructure"],
  },
  {
    id: "no-staging",
    label: "There's no environment that behaves like production",
    detail: "Changes are validated in production, or in something that only half resembles it.",
    areas: ["cloud-infrastructure"],
  },
  {
    id: "silent-outages",
    label: "Customers notice outages before monitoring does",
    detail: "Failures surface through support tickets rather than alerts.",
    areas: ["cloud-infrastructure"],
  },
  {
    id: "half-migration",
    label: "A migration or rewrite was started and never finished",
    detail: "Two systems are being kept alive where there should be one.",
    areas: ["data-platforms", "project-rescue"],
  },
  {
    id: "numbers-disagree",
    label: "Reports disagree depending on who runs them",
    detail: "The same question returns different answers from different teams or tools.",
    areas: ["data-platforms"],
  },
  {
    id: "ai-stuck",
    label: "An AI feature demos well but isn't trusted in production",
    detail: "Quality can't be measured, costs are unpredictable, or nobody will sign off on it.",
    areas: ["ai-automation"],
  },
  {
    id: "fragile-ui",
    label: "Changing one screen breaks unrelated ones",
    detail: "The front end has no shared structure, so every change carries hidden risk.",
    areas: ["product-engineering"],
  },
  {
    id: "no-tests",
    label: "There are no tests, or nobody trusts the ones that exist",
    detail: "The suite is red, skipped, or passing without proving anything.",
    areas: ["project-rescue", "product-engineering"],
  },
  {
    id: "deferred-security",
    label: "Security and dependency updates have been deferred for months",
    detail: "Upgrades keep losing to feature work, and the gap is widening.",
    areas: ["project-rescue", "cloud-infrastructure"],
  },
];

type Band = {
  min: number;
  title: string;
  copy: string;
  tone: string;
  chip: string;
  icon: string;
};

const BANDS: Band[] = [
  {
    min: 9,
    title: "This needs intervention, not encouragement",
    copy: "What you are describing is not a rough patch — it is a project that has lost the ability to correct itself from the inside. That is recoverable, but not by pushing harder on the current plan. The first useful step is an outside read of what exists.",
    tone: "text-status-critical",
    chip: "bg-status-critical/10 text-status-critical",
    icon: "emergency_home",
  },
  {
    min: 5,
    title: "These are the warning signs, and they compound",
    copy: "Individually each of these is survivable. Together they tend to reinforce each other — no tests makes releases risky, risky releases slow delivery, slow delivery pushes the date, and the date pressure defers the fixes. Breaking that loop early is far cheaper than breaking it late.",
    tone: "text-status-warning",
    chip: "bg-status-warning/15 text-canvas",
    icon: "warning",
  },
  {
    min: 2,
    title: "Real problems, still contained",
    copy: "Nothing here is unusual and nothing here is fatal. These are the issues worth fixing while they are still isolated, before they start setting the delivery pace for everything else.",
    tone: "text-primary",
    chip: "bg-primary/10 text-primary",
    icon: "info",
  },
  {
    min: 1,
    title: "Worth a second opinion, not an intervention",
    copy: "One symptom on its own is usually a specific, fixable thing rather than a sign of systemic trouble. If it has been persistent, it may still be worth having someone look.",
    tone: "text-status-success",
    chip: "bg-status-success/10 text-status-success",
    icon: "check_circle",
  },
];

function bandFor(count: number) {
  return BANDS.find((b) => count >= b.min);
}

export function ProjectCheck() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setCopied(false);
  }

  const count = selected.size;
  const band = bandFor(count);

  /** Solution areas ranked by how many selected symptoms point at them. */
  const areas = useMemo(() => {
    const tally = new Map<string, number>();
    for (const s of SYMPTOMS) {
      if (!selected.has(s.id)) continue;
      for (const a of s.areas) tally.set(a, (tally.get(a) ?? 0) + 1);
    }
    return [...tally.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([slug]) => SOLUTIONS.find((s) => s.slug === slug))
      .filter((s): s is (typeof SOLUTIONS)[number] => Boolean(s));
  }, [selected]);

  async function copySummary() {
    const lines = SYMPTOMS.filter((s) => selected.has(s.id)).map((s) => `- ${s.label}`);
    const text = `Project check — ${count} of ${SYMPTOMS.length} signs present:\n\n${lines.join("\n")}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-12">
      {/* Checklist */}
      <div className="flex flex-col gap-base lg:col-span-7">
        <div className="flex items-center justify-between gap-base">
          <span className="text-caption-bold uppercase text-kicker">
            Tick anything that sounds familiar
          </span>
          {count > 0 && (
            <button
              type="button"
              onClick={() => {
                setSelected(new Set());
                setCopied(false);
              }}
              className="inline-flex items-center gap-xxs text-caption-bold text-secondary transition-colors hover:text-canvas"
            >
              <Icon name="restart_alt" size={16} />
              Clear
            </button>
          )}
        </div>

        <ul className="flex flex-col gap-xs">
          {SYMPTOMS.map((s) => {
            const on = selected.has(s.id);
            return (
              <li key={s.id}>
                <label
                  className={`flex cursor-pointer items-start gap-base rounded-xl border p-base transition-colors ${
                    on
                      ? "border-primary bg-primary/5"
                      : "border-hairline-soft bg-page hover:border-hairline"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={() => toggle(s.id)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden
                    className={`mt-xxs flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border transition-colors ${
                      on ? "border-primary bg-primary text-canvas" : "border-hairline bg-page"
                    }`}
                  >
                    {on && <Icon name="check" size={14} />}
                  </span>
                  <span className="flex flex-col gap-xxs">
                    <span className="text-body-sm-bold text-canvas">{s.label}</span>
                    <span className="text-caption text-secondary">{s.detail}</span>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Live read-out */}
      <div className="lg:col-span-5">
        <div className="flex flex-col gap-base lg:sticky lg:top-32">
          <div className="flex flex-col gap-base rounded-xl bg-ink-deep p-xxl text-canvas shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-caption-bold uppercase tracking-widest text-canvas/50">
                Your read
              </span>
              <span className="font-display text-heading-sm text-canvas">
                {count}
                <span className="text-canvas/40">/{SYMPTOMS.length}</span>
              </span>
            </div>

            <div className="h-1.5 w-full overflow-hidden rounded-full bg-canvas/10">
              <div
                className="h-full rounded-full bg-accent-electric transition-all duration-500"
                style={{ width: `${(count / SYMPTOMS.length) * 100}%` }}
              />
            </div>

            {band ? (
              <>
                <div className="flex items-start gap-xs pt-xs">
                  <Icon name={band.icon} size={22} className="mt-xxs shrink-0 text-accent-electric" />
                  <h2 className="text-heading-sm text-canvas">{band.title}</h2>
                </div>
                <p className="text-body-sm leading-relaxed text-stone">{band.copy}</p>
              </>
            ) : (
              <>
                <h2 className="pt-xs text-heading-sm text-canvas">
                  Nothing ticked yet
                </h2>
                <p className="text-body-sm leading-relaxed text-stone">
                  Work down the list on the left. Nothing is recorded or sent anywhere — this runs
                  entirely in your browser, and we only hear from you if you decide to get in touch.
                </p>
              </>
            )}

            {areas.length > 0 && (
              <div className="flex flex-col gap-xs border-t border-canvas/10 pt-base">
                <span className="text-caption-bold uppercase tracking-wider text-canvas/50">
                  Where this points
                </span>
                {areas.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/solutions/${a.slug}`}
                    className="group flex items-center gap-xs text-body-sm-bold text-canvas transition-colors hover:text-accent-electric"
                  >
                    <Icon name={a.icon} size={18} className="text-accent-electric" />
                    {a.name}
                    <Icon
                      name="arrow_outward"
                      size={16}
                      className="ml-auto text-canvas/30 transition-colors group-hover:text-accent-electric"
                    />
                  </Link>
                ))}
              </div>
            )}

            {count > 0 && (
              <div className="flex flex-col gap-xs pt-base">
                <ContactTrigger
                  className="inline-flex items-center justify-center gap-xs rounded-full bg-primary-container px-xl py-sm text-body-sm-bold text-on-primary transition-colors hover:bg-primary"
                >
                  Book a 15 Minute Call
                  <Icon name="arrow_forward" size={18} />
                </ContactTrigger>
                <button
                  type="button"
                  onClick={copySummary}
                  className="inline-flex items-center justify-center gap-xs rounded-full border border-canvas/25 px-xl py-sm text-body-sm-bold text-canvas transition-colors hover:border-canvas/50 hover:bg-canvas/10"
                >
                  <Icon name={copied ? "check" : "content_copy"} size={18} />
                  {copied ? "Copied — paste it into the form" : "Copy these results"}
                </button>
              </div>
            )}
          </div>

          <p className="px-xs text-caption text-secondary">
            A checklist is not a diagnosis. It tells you whether a conversation is worth having —
            reading the actual code is what tells you what finishing it takes.
          </p>
        </div>
      </div>
    </div>
  );
}
