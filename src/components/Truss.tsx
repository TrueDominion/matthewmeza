/**
 * Hero truss bridge line illustration. Members in currentColor, joints in Signal Orange.
 */
const DECK = 170;
const TOP = 82;
const START = 70;
const END = 930;
const PANELS = 10;
const STEP = (END - START) / PANELS;

const bottom = Array.from({ length: PANELS + 1 }, (_, i) => START + i * STEP);
const top = bottom.slice(1, -1);

function members() {
  const d: string[] = [];
  // Deck and top chord
  d.push(`M0 ${DECK} L1000 ${DECK}`);
  d.push(`M${top[0]} ${TOP} L${top[top.length - 1]} ${TOP}`);
  // End posts
  d.push(`M${START} ${DECK} L${top[0]} ${TOP}`);
  d.push(`M${END} ${DECK} L${top[top.length - 1]} ${TOP}`);
  // Verticals and diagonals (sloping toward midspan, with a center cross)
  const mid = PANELS / 2;
  top.forEach((x, idx) => {
    const i = idx + 1;
    d.push(`M${x} ${TOP} L${x} ${DECK}`);
    if (i < mid) d.push(`M${x} ${TOP} L${bottom[i + 1]} ${DECK}`);
    if (i > mid) d.push(`M${x} ${TOP} L${bottom[i - 1]} ${DECK}`);
    if (i === mid) {
      d.push(`M${x} ${TOP} L${bottom[i - 1]} ${DECK}`);
      d.push(`M${x} ${TOP} L${bottom[i + 1]} ${DECK}`);
    }
  });
  return d;
}

export function Truss({ className }: { className?: string }) {
  const joints: [number, number][] = [
    ...top.map((x) => [x, TOP] as [number, number]),
    ...bottom.map((x) => [x, DECK] as [number, number]),
  ];
  return (
    <svg
      className={className}
      viewBox="0 0 1000 250"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Arch above the top chord */}
      <path
        d={`M${top[0]} ${TOP} C 330 18, 670 18, ${top[top.length - 1]} ${TOP}`}
        stroke="currentColor"
        strokeWidth={1.5}
        opacity={0.45}
      />
      {members().map((d) => (
        <path key={d} d={d} stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" />
      ))}
      {/* Deck slab */}
      <path d={`M0 ${DECK + 8} L1000 ${DECK + 8}`} stroke="currentColor" strokeWidth={1.25} opacity={0.6} />
      {/* Piers */}
      {[START, END].map((x) => (
        <g key={x} stroke="currentColor" strokeWidth={2}>
          <rect x={x - 16} y={DECK + 8} width={32} height={10} fill="var(--bg)" />
          <rect x={x - 11} y={DECK + 18} width={22} height={44} fill="var(--bg)" />
          <path d={`M${x - 34} ${DECK + 62} L${x + 34} ${DECK + 62}`} />
        </g>
      ))}
      {joints.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={5.5} fill="var(--orange)" />
      ))}
    </svg>
  );
}

/** Divider made of truss nodes on a hairline (brand UI component). */
export function NodeDivider({ nodes = 5 }: { nodes?: number }) {
  return (
    <div className="node-divider" aria-hidden="true">
      {Array.from({ length: nodes }, (_, i) => (
        <span key={i} className="node-divider__node" />
      ))}
    </div>
  );
}
