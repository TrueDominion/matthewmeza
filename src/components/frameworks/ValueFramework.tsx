"use client";

import type React from "react";
import { useMemo, useRef, useState } from "react";
import { AnimatedBeam, type BeamAnchor, type BeamRoute } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import {
  DECISIONS,
  EDGE_COLORS,
  EDGE_LABELS,
  EDGES,
  NODES,
  PRINCIPLES,
  type EdgeKind,
  type FrameworkEdge,
  type NodeId,
} from "./valueFramework.data";
import styles from "./ValueFramework.module.scss";

type Geometry = {
  fromAnchor: BeamAnchor;
  toAnchor: BeamAnchor;
  route?: BeamRoute;
  reverse?: boolean;
};

function geometry(edge: FrameworkEdge): Geometry {
  switch (edge.kind) {
    case "lateral":
      return { fromAnchor: "right", toAnchor: "left" };
    case "monitoring":
      return { fromAnchor: "right", toAnchor: "right", route: "gutter-right" };
    case "feedback":
      return { fromAnchor: "left", toAnchor: "left", route: "gutter-left" };
    default:
      return { fromAnchor: "bottom", toAnchor: "top" };
  }
}

const DURATION: Record<EdgeKind, number> = {
  mandate: 3,
  lateral: 2.6,
  decision: 3.2,
  monitoring: 4.2,
  feedback: 5,
};

export function ValueFramework() {
  const containerRef = useRef<HTMLDivElement>(null);
  const refs: Record<NodeId, React.RefObject<HTMLButtonElement | null>> = {
    goal: useRef<HTMLButtonElement>(null),
    analysis: useRef<HTMLButtonElement>(null),
    planning: useRef<HTMLButtonElement>(null),
    control: useRef<HTMLButtonElement>(null),
    investment: useRef<HTMLButtonElement>(null),
    financing: useRef<HTMLButtonElement>(null),
    distribution: useRef<HTMLButtonElement>(null),
    liquidity: useRef<HTMLButtonElement>(null),
    risk: useRef<HTMLButtonElement>(null),
    valuation: useRef<HTMLButtonElement>(null),
  };

  const [selected, setSelected] = useState<NodeId | null>(null);

  const neighbours = useMemo(() => {
    if (!selected) return new Set<NodeId>();
    const set = new Set<NodeId>([selected]);
    for (const e of EDGES) {
      if (e.from === selected) set.add(e.to);
      if (e.to === selected) set.add(e.from);
    }
    return set;
  }, [selected]);

  const toggle = (id: NodeId) => setSelected((cur) => (cur === id ? null : id));

  const nodeProps = (id: NodeId) => ({
    ref: refs[id],
    type: "button" as const,
    "aria-pressed": selected === id,
    "aria-controls": "vf-detail",
    onClick: () => toggle(id),
    "data-state": selected === id ? "active" : selected && !neighbours.has(id) ? "muted" : "idle",
  });

  const detail = selected ? NODES[selected] : null;
  const connected = selected ? [...neighbours].filter((n) => n !== selected) : [];

  return (
    <div className={styles.root}>
      <div ref={containerRef} className={styles.diagram}>
        <div className={styles.halo} aria-hidden="true" />

        {/* Objective */}
        <div className={styles.rowCenter}>
          <button {...nodeProps("goal")} className={cn(styles.node, styles.goal)}>
            <span className={styles.eyebrow}>Objective</span>
            <span className={styles.goalTitle}>Maximize long term shareholder wealth</span>
          </button>
        </div>

        {/* Functions */}
        <div className={styles.pillars}>
          {(["analysis", "planning", "control"] as NodeId[]).map((id) => (
            <button key={id} {...nodeProps(id)} className={cn(styles.node, styles.pillar)}>
              <span className={styles.eyebrow}>Function</span>
              <span className={styles.title}>{NODES[id].short}</span>
            </button>
          ))}
        </div>

        {/* Decision areas */}
        <div className={styles.decisions}>
          {DECISIONS.map((id) => (
            <button key={id} {...nodeProps(id)} className={cn(styles.node, styles.decision)}>
              <span className={styles.eyebrow}>Decision</span>
              <span className={styles.title}>{NODES[id].short}</span>
              <span className={styles.sub}>{NODES[id].title}</span>
            </button>
          ))}
        </div>

        {/* Risk and return */}
        <div className={styles.rowCenter}>
          <button {...nodeProps("risk")} className={cn(styles.node, styles.risk)}>
            <span className={styles.eyebrow}>Outcome</span>
            <span className={styles.title}>Risk and return profile</span>
            <span className={styles.chips}>
              <span className={styles.chip}>Investor perception</span>
              <span className={styles.chip}>Financial environment</span>
            </span>
          </button>
        </div>

        {/* Scoreboard */}
        <div className={styles.rowCenter}>
          <button {...nodeProps("valuation")} className={cn(styles.node, styles.valuation)}>
            <span className={styles.eyebrow}>Scoreboard</span>
            <span className={styles.title}>Resulting valuation in the market</span>
            <span className={styles.sub}>The scoreboard, not the strategy</span>
          </button>
        </div>

        {EDGES.map((edge, i) => {
          const g = geometry(edge);
          const [c1, c2] = EDGE_COLORS[edge.kind];
          const touches = selected !== null && (edge.from === selected || edge.to === selected);
          return (
            <AnimatedBeam
              key={`${edge.from}-${edge.to}`}
              containerRef={containerRef}
              fromRef={refs[edge.from]}
              toRef={refs[edge.to]}
              fromAnchor={g.fromAnchor}
              toAnchor={g.toAnchor}
              route={g.route}
              gutter={18}
              gradientStartColor={c1}
              gradientStopColor={c2}
              duration={DURATION[edge.kind]}
              delay={(i % 6) * 0.35}
              dashed={edge.kind === "feedback" || edge.kind === "monitoring"}
              muted={selected !== null && !touches}
              emphasized={touches}
              pathOpacity={0.2}
            />
          );
        })}
      </div>

      <ul className={styles.legend} aria-label="Connection types">
        {(Object.keys(EDGE_LABELS) as EdgeKind[]).map((k) => (
          <li key={k}>
            <span
              className={styles.swatch}
              style={{ background: `linear-gradient(90deg, ${EDGE_COLORS[k][0]}, ${EDGE_COLORS[k][1]})` }}
            />
            {EDGE_LABELS[k]}
          </li>
        ))}
      </ul>

      <section id="vf-detail" className={styles.detail} aria-live="polite">
        {detail ? (
          <div key={detail.id} className={styles.detailInner}>
            <div className={styles.detailHead}>
              <span className={styles.eyebrow}>{detail.eyebrow}</span>
              <button type="button" className={styles.close} onClick={() => setSelected(null)}>
                Show principles
              </button>
            </div>
            <h3 className={styles.detailTitle}>{detail.title}</h3>
            <p className={styles.question}>{detail.question}</p>
            <div className={styles.cols}>
              <div>
                <h4 className={styles.colHead}>Levers</h4>
                <ul className={styles.list}>
                  {detail.levers.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={styles.colHead}>Measured by</h4>
                <ul className={styles.list}>
                  {detail.measures.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={styles.colHead}>In the hospital</h4>
                <p className={styles.body}>{detail.hospital}</p>
              </div>
            </div>
            <p className={styles.failure}>
              <span className={styles.failureLabel}>Failure mode</span>
              {detail.failure}
            </p>
            {connected.length > 0 && (
              <div className={styles.connected}>
                <span className={styles.colHead}>Connected to</span>
                {connected.map((n) => (
                  <button key={n} type="button" className={styles.link} onClick={() => setSelected(n)}>
                    {NODES[n].short ?? NODES[n].title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className={styles.detailInner}>
            <div className={styles.detailHead}>
              <span className={styles.eyebrow}>How to read it</span>
              <span className={styles.hint}>Select any node to trace its connections</span>
            </div>
            <div className={styles.principles}>
              {PRINCIPLES.map((p, i) => (
                <div key={p.title} className={styles.principle}>
                  <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={styles.principleTitle}>{p.title}</h3>
                  <p className={styles.body}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default ValueFramework;
