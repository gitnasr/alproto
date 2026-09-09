/** Material Symbols glyph. `name` is the ligature, e.g. "arrow_forward". */
export function Icon({
  name,
  className = "",
  size = 18,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  return (
    <span
      aria-hidden
      className={`material-symbols-outlined leading-none ${className}`}
      style={{ fontSize: size }}
    >
      {name}
    </span>
  );
}
