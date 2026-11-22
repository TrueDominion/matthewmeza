/**
 * The Matthew Meza truss mark (Direction 4B).
 * Strokes use currentColor (graphite on paper, paper on graphite or navy);
 * nodes are always Signal Orange. Do not recolor, stretch, rotate or add effects.
 */
const NODES: [number, number][] = [
  [10, 86],
  [55, 14],
  [100, 86],
  [145, 14],
  [190, 86],
];

const MEMBERS = [
  "M10 86 L55 14 L100 86 L145 14 L190 86",
  "M55 14 L55 62 M10 86 L55 62 L100 86",
  "M145 14 L145 62 M100 86 L145 62 L190 86",
];

export function Mark({
  size = 48,
  title,
  className,
}: {
  size?: number;
  title?: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={size * 2}
      height={size}
      viewBox="0 0 200 100"
      fill="none"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {MEMBERS.map((d) => (
        <path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {NODES.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={8} fill="var(--orange)" />
      ))}
    </svg>
  );
}

export function Lockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "lockup lockup--compact" : "lockup"}>
      <Mark size={compact ? 18 : 22} />
      <span className="lockup__text">
        <span className="lockup__name">Matthew Meza</span>
        <span className="lockup__tag">Systems / Governance / Mission</span>
      </span>
    </span>
  );
}
