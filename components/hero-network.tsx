import Link from "next/link";

/**
 * Animated hexagonal node network for dark hero sections.
 *
 * On load the six capability nodes burst outward from the central core, then
 * settle into a slow float. Each node is a real link, and hovering (or
 * focusing) one reveals its label. Pure inline SVG + CSS — see the `hexnet-*`
 * rules in globals.css — so it needs no client JS and holds completely still
 * for anyone browsing with prefers-reduced-motion.
 */

const HEX_ANGLES = [0, 60, 120, 180, 240, 300];

/** Hexagon with flat top/bottom edges and vertices pointing left and right. */
function hexPoints(cx: number, cy: number, r: number) {
  return HEX_ANGLES.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return `${(cx + r * Math.cos(rad)).toFixed(1)},${(cy + r * Math.sin(rad)).toFixed(1)}`;
  }).join(" ");
}

const CENTER = { x: 400, y: 340 };
const CORE_R = 95;
const NODE_R = 72;
const ORBIT = 210;
/** Distance from the core at which a node's hover label is centered. */
const LABEL_ORBIT = 296;

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER.x + radius * Math.cos(rad), y: CENTER.y + radius * Math.sin(rad) };
}

/** Icon glyphs drawn on a 24x24 grid, stroked (no fills) to match the UI set. */
const ICONS: Record<string, string[]> = {
  code: ["M9.5 8 5 12l4.5 4", "M14.5 8 19 12l-4.5 4"],
  cloud: ["M7.5 18a4 4 0 0 1 .3-8 5.5 5.5 0 0 1 10.4 1.6A3.4 3.4 0 0 1 17 18H7.5Z"],
  data: [
    "M4 6.5c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Z",
    "M4 6.5v11c0 1.7 3.6 3 8 3s8-1.3 8-3v-11",
    "M20 12c0 1.7-3.6 3-8 3s-8-1.3-8-3",
  ],
  shield: ["M12 3.2 19 6v6c0 4.3-3 7.9-7 8.9-4-1-7-4.6-7-8.9V6l7-2.8Z", "M9.2 12.2l2 2 3.6-3.8"],
  spark: ["M12 3.4l1.9 5.3 5.3 1.9-5.3 1.9L12 17.8l-1.9-5.3L4.8 10.6l5.3-1.9L12 3.4Z"],
  bolt: ["M13.2 3 6.6 13.2h4.6L10.8 21l6.6-10.2h-4.6L13.2 3Z"],
};

type Node = { angle: number; label: string; icon: string; href: string };

/** Clockwise from the top. */
const NODES: Node[] = [
  { angle: 270, label: "Product Engineering", icon: "code", href: "/solutions/product-engineering" },
  { angle: 330, label: "Cloud & Infrastructure", icon: "cloud", href: "/solutions/cloud-infrastructure" },
  { angle: 30, label: "Data Platforms", icon: "data", href: "/solutions/data-platforms" },
  { angle: 90, label: "Security & Governance", icon: "shield", href: "/services#compliance" },
  { angle: 150, label: "AI & Automation", icon: "spark", href: "/solutions/ai-automation" },
  { angle: 210, label: "Project Rescue", icon: "bolt", href: "/solutions/project-rescue" },
];

/** Dust motes layered behind the network — fixed coords keep SSR deterministic. */
const PARTICLES = [
  [120, 130], [690, 170], [95, 490], [720, 530], [250, 80],
  [560, 95], [180, 615], [640, 620], [60, 300], [745, 345],
  [310, 590], [500, 620], [215, 200], [600, 470],
];

/** Entry timing, in seconds. */
const CORE_IN = 0.15;
const NODE_IN = 0.55;
const NODE_STAGGER = 0.13;
const NODE_DURATION = 0.75;
const LINES_IN = NODE_IN + NODE_STAGGER * 5 + NODE_DURATION * 0.5;

export function HeroNetwork({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 700"
      className={`h-full w-full ${className}`}
      aria-label="Capability network: choose an area to explore"
    >
      <defs>
        <radialGradient id="hexnet-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-accent-electric)" stopOpacity="0.55" />
          <stop offset="55%" stopColor="var(--color-primary-container)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--color-primary-container)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hexnet-node-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent-electric)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--color-primary-container)" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="hexnet-core-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-accent-electric)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--color-primary-container)" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Ambient glow + drifting particles */}
      <circle cx={CENTER.x} cy={CENTER.y} r="290" fill="url(#hexnet-core-glow)" />
      {PARTICLES.map(([x, y], i) => (
        <circle
          key={`p-${x}-${y}`}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 2.4 : 1.6}
          fill="var(--color-accent-electric)"
          className="hexnet-twinkle"
          style={{ animationDelay: `${(i % 7) * 0.6}s` }}
        />
      ))}

      {/* Slowly rotating survey rings */}
      <g className="hexnet-spin">
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="278"
          fill="none"
          stroke="var(--color-accent-electric)"
          strokeOpacity="0.18"
          strokeWidth="1"
          strokeDasharray="2 14"
        />
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="250"
          fill="none"
          stroke="var(--color-primary-container)"
          strokeOpacity="0.14"
          strokeWidth="1"
          strokeDasharray="34 22"
        />
      </g>
      <g className="hexnet-spin-reverse">
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="160"
          fill="none"
          stroke="var(--color-accent-electric)"
          strokeOpacity="0.12"
          strokeWidth="1"
          strokeDasharray="6 10"
        />
      </g>

      {/* Connectors: a static rail plus a flowing overlay pulling into the core.
          Both fade in only once the nodes have finished travelling outward. */}
      {NODES.map((node, i) => {
        const from = polar(node.angle, ORBIT - 68);
        const to = polar(node.angle, CORE_R - 6);
        const style = {
          "--hexnet-fade-delay": `${LINES_IN}s`,
          "--hexnet-flow-delay": `${LINES_IN + 0.5 + i * 0.15}s`,
        } as React.CSSProperties;
        return (
          <g key={`line-${node.angle}`} style={style}>
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="var(--color-accent-electric)"
              strokeOpacity="0.22"
              strokeWidth="1.5"
              className="hexnet-rail"
            />
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="var(--color-accent-electric)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="hexnet-flow"
            />
          </g>
        );
      })}

      {/* Capability nodes — each one a link out to its area */}
      {NODES.map((node, i) => {
        const { x, y } = polar(node.angle, ORBIT);
        const label = polar(node.angle, LABEL_ORBIT);
        const scale = 1.9;
        const offset = 12 * scale;
        const labelWidth = node.label.length * 6.8 + 26;
        const emergeDelay = NODE_IN + i * NODE_STAGGER;

        const outerStyle = {
          // Travel vector: start collapsed at the core, end in position.
          "--hexnet-tx": `${(CENTER.x - x).toFixed(1)}px`,
          "--hexnet-ty": `${(CENTER.y - y).toFixed(1)}px`,
          transformOrigin: `${x}px ${y}px`,
          animationDelay: `${emergeDelay}s`,
        } as React.CSSProperties;

        return (
          <Link key={node.label} href={node.href} className="hexnet-node">
            <g className="hexnet-emerge" style={outerStyle}>
              <g
                className="hexnet-float"
                style={{ animationDelay: `${emergeDelay + NODE_DURATION + i * 0.3}s` }}
              >
                <g className="hexnet-glyph">
                  <polygon
                    points={hexPoints(x, y, NODE_R)}
                    fill="url(#hexnet-node-fill)"
                    stroke="var(--color-accent-electric)"
                    strokeOpacity="0.45"
                    strokeWidth="1.5"
                  />
                  <polygon
                    points={hexPoints(x, y, NODE_R - 9)}
                    fill="none"
                    stroke="var(--color-accent-electric)"
                    strokeOpacity="0.14"
                    strokeWidth="1"
                  />
                  <g
                    transform={`translate(${x - offset} ${y - offset}) scale(${scale})`}
                    fill="none"
                    stroke="var(--color-accent-electric)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {ICONS[node.icon].map((d) => (
                      <path key={d} d={d} />
                    ))}
                  </g>
                </g>

                {/* Hover / focus label */}
                <g className="hexnet-label">
                  <rect
                    x={label.x - labelWidth / 2}
                    y={label.y - 15}
                    width={labelWidth}
                    height="30"
                    rx="15"
                    fill="var(--color-ink-deep)"
                    stroke="var(--color-accent-electric)"
                    strokeOpacity="0.5"
                  />
                  <text
                    x={label.x}
                    y={label.y + 5}
                    textAnchor="middle"
                    fill="var(--color-canvas)"
                    fontSize="14"
                    fontWeight="600"
                  >
                    {node.label}
                  </text>
                </g>
              </g>
            </g>
          </Link>
        );
      })}

      {/* Core: the delivery engine everything feeds */}
      <g className="hexnet-core-in" style={{ animationDelay: `${CORE_IN}s` }}>
        <g className="hexnet-core">
          <polygon
            points={hexPoints(CENTER.x, CENTER.y, CORE_R)}
            fill="url(#hexnet-core-fill)"
            stroke="var(--color-accent-electric)"
            strokeOpacity="0.7"
            strokeWidth="2"
          />
          <polygon
            points={hexPoints(CENTER.x, CENTER.y, CORE_R - 11)}
            fill="none"
            stroke="var(--color-accent-electric)"
            strokeOpacity="0.25"
            strokeWidth="1"
          />

          {/* Processor glyph */}
          <g fill="none" stroke="var(--color-accent-electric)" strokeWidth="2" strokeLinecap="round">
            <rect x={CENTER.x - 27} y={CENTER.y - 27} width="54" height="54" rx="9" />
            <rect
              x={CENTER.x - 12}
              y={CENTER.y - 12}
              width="24"
              height="24"
              rx="4"
              className="hexnet-pulse"
            />
            {[-14, 0, 14].map((d) => (
              <g key={`pins-${d}`} strokeOpacity="0.75">
                <line x1={CENTER.x + d} y1={CENTER.y - 27} x2={CENTER.x + d} y2={CENTER.y - 40} />
                <line x1={CENTER.x + d} y1={CENTER.y + 27} x2={CENTER.x + d} y2={CENTER.y + 40} />
                <line x1={CENTER.x - 27} y1={CENTER.y + d} x2={CENTER.x - 40} y2={CENTER.y + d} />
                <line x1={CENTER.x + 27} y1={CENTER.y + d} x2={CENTER.x + 40} y2={CENTER.y + d} />
              </g>
            ))}
          </g>
        </g>
      </g>
    </svg>
  );
}
