import { Icon } from "./icon";

/**
 * Stand-in for the prototype's product photography. The Stitch exports pointed at
 * expired googleusercontent URLs, so each slot renders a system-styled frame that
 * keeps the layout honest and carries the original art direction as its caption.
 * Drop a real image in via the `src` prop when the asset exists.
 */
export function MediaFrame({
  label,
  icon = "image",
  className = "",
  src,
}: {
  label: string;
  icon?: string;
  className?: string;
  src?: string;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img src={src} alt={label} className={`absolute inset-0 h-full w-full object-cover ${className}`} />
    );
  }
  return (
    <div
      title={label}
      className={`absolute inset-0 flex flex-col items-center justify-center gap-xs bg-linear-to-br from-ink-deep via-[#2a1408] to-[#d9541a] p-xl text-center ${className}`}
    >
      <Icon name={icon} size={28} className="text-accent-electric" />
      <span className="line-clamp-3 max-w-[24rem] text-caption text-canvas/55">{label}</span>
    </div>
  );
}
