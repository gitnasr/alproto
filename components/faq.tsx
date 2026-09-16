import { Icon } from "./icon";
import { Reveal } from "./reveal";
import { FAQ } from "@/lib/faq";

/**
 * Objection-handling accordion. Built on native <details> so it works without
 * client JS, stays keyboard accessible, and is searchable by find-in-page.
 */
export function Faq({
  id = "faq",
  tone = "soft",
}: {
  id?: string;
  /** Picks the band colour so the section never sits next to a matching one. */
  tone?: "soft" | "canvas";
}) {
  const band = tone === "canvas" ? "bg-page" : "bg-surface-soft";
  /** Hover wash for a ruled row — the band decides which direction reads as "lift". */
  const hover = tone === "canvas" ? "hover:bg-surface-soft" : "hover:bg-page";

  return (
    <section id={id} className={`w-full scroll-mt-24 py-section-lg ${band}`}>
      <div className="mx-auto max-w-shell px-xxl">
        <div className="grid grid-cols-1 gap-xxxl lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="flex flex-col gap-base lg:sticky lg:top-32">
              <span className="text-caption-bold uppercase text-kicker">
                Before You Ask
              </span>
              <h2 className="text-heading-lg text-canvas">FAQ</h2>
              <p className="text-body-md text-secondary">
                Mostly the ones that stop someone getting in touch at all. If yours is not here,
                ask it directly, a straight answer costs you nothing.
              </p>
            </div>
          </Reveal>

          {/* Ruled rows rather than a stack of shadowed cards */}
          <div className="flex flex-col border-t border-canvas/15 lg:col-span-8">
            {FAQ.map((item, i) => (
              <Reveal key={item.question} delay={(i % 4) * 70}>
                <details
                  className={`group border-b border-hairline px-xs py-lg transition-colors ${hover}`}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-base text-body-md-bold text-canvas marker:hidden [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <Icon
                      name="add"
                      size={22}
                      className="mt-xxs shrink-0 text-stone transition-transform duration-200 group-open:rotate-45"
                    />
                  </summary>
                  <p className="max-w-3xl pt-base text-body-sm leading-relaxed text-secondary">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
