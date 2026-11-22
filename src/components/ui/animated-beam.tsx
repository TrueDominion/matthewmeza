"use client";

import type React from "react";
import { useCallback, useEffect, useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/*
 * AnimatedBeam: an SVG connector drawn between two elements inside a shared,
 * position: relative container, with a glowing pulse travelling along it.
 *
 * Adapted from the animated-beam-integration component for this codebase:
 *  - no Tailwind (the site uses Once UI + SCSS), so positioning is inline
 *  - anchors (top/bottom/left/right/center) instead of centre-only endpoints
 *  - "gutter" routes for orthogonal loop-back lines (feedback, monitoring)
 *  - pathLength-normalised pulse: one pulse per traversal on any path length
 *  - muted / emphasised states for focus-and-context highlighting
 *  - honours prefers-reduced-motion (static gradient line, no pulse)
 */

export type BeamAnchor = "center" | "top" | "bottom" | "left" | "right";
export type BeamRoute = "curve" | "gutter-left" | "gutter-right";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  fromAnchor?: BeamAnchor;
  toAnchor?: BeamAnchor;
  /** "curve": quadratic bezier. "gutter-*": orthogonal route down the container's side gutter. */
  route?: BeamRoute;
  /** Distance of the gutter line from the container edge, in px. */
  gutter?: number;
  /** Vertical pull on the bezier control point (curve route only). */
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  /** Fades the whole beam back, for focus-and-context highlighting. */
  muted?: boolean;
  /** Strengthens the baseline line, for the selected node's connections. */
  emphasized?: boolean;
  /** Dashed baseline, for secondary relationships such as feedback. */
  dashed?: boolean;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

type Point = { x: number; y: number };

function anchorPoint(rect: DOMRect, container: DOMRect, anchor: BeamAnchor): Point {
  const left = rect.left - container.left;
  const top = rect.top - container.top;
  switch (anchor) {
    case "top":
      return { x: left + rect.width / 2, y: top };
    case "bottom":
      return { x: left + rect.width / 2, y: top + rect.height };
    case "left":
      return { x: left, y: top + rect.height / 2 };
    case "right":
      return { x: left + rect.width, y: top + rect.height / 2 };
    default:
      return { x: left + rect.width / 2, y: top + rect.height / 2 };
  }
}

/** Orthogonal path S -> gutter -> E with rounded corners. */
function gutterPath(s: Point, e: Point, gx: number, radius: number): string {
  const dirOut = Math.sign(gx - s.x) || 1; // horizontal direction from start to gutter
  const dirIn = Math.sign(e.x - gx) || 1; // horizontal direction from gutter to end
  const dirV = Math.sign(e.y - s.y) || 1;
  const r = Math.max(0, Math.min(radius, Math.abs(gx - s.x), Math.abs(e.x - gx), Math.abs(e.y - s.y) / 2));
  return [
    `M ${s.x},${s.y}`,
    `L ${gx - dirOut * r},${s.y}`,
    `Q ${gx},${s.y} ${gx},${s.y + dirV * r}`,
    `L ${gx},${e.y - dirV * r}`,
    `Q ${gx},${e.y} ${gx + dirIn * r},${e.y}`,
    `L ${e.x},${e.y}`,
  ].join(" ");
}

export function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  fromAnchor = "center",
  toAnchor = "center",
  route = "curve",
  gutter = 16,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  pathColor = "currentColor",
  pathWidth = 1.5,
  pathOpacity = 0.14,
  gradientStartColor = "#3b82f6",
  gradientStopColor = "#8b5cf6",
  muted = false,
  emphasized = false,
  dashed = false,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) {
  const rawId = useId();
  const id = `beam-${rawId.replace(/:/g, "")}`;
  const reduceMotion = useReducedMotion();
  const [pathD, setPathD] = useState("");
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [grad, setGrad] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

  const updatePath = useCallback(() => {
    const container = containerRef.current;
    const from = fromRef.current;
    const to = toRef.current;
    if (!container || !from || !to) return;

    const c = container.getBoundingClientRect();
    const s = anchorPoint(from.getBoundingClientRect(), c, fromAnchor);
    const e = anchorPoint(to.getBoundingClientRect(), c, toAnchor);
    s.x += startXOffset;
    s.y += startYOffset;
    e.x += endXOffset;
    e.y += endYOffset;

    setSize({ width: c.width, height: c.height });

    if (route === "curve") {
      const cx = (s.x + e.x) / 2;
      const cy = (s.y + e.y) / 2 - curvature;
      setPathD(`M ${s.x},${s.y} Q ${cx},${cy} ${e.x},${e.y}`);
    } else {
      const gx = route === "gutter-left" ? gutter : c.width - gutter;
      setPathD(gutterPath(s, e, gx, 14));
    }
    setGrad({ x1: s.x, y1: s.y, x2: e.x, y2: e.y });
  }, [
    containerRef,
    fromRef,
    toRef,
    fromAnchor,
    toAnchor,
    route,
    gutter,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  useEffect(() => {
    updatePath();
    const ro = new ResizeObserver(() => updatePath());
    for (const el of [containerRef.current, fromRef.current, toRef.current]) {
      if (el) ro.observe(el);
    }
    window.addEventListener("resize", updatePath);
    // Web fonts shift layout after first paint.
    document.fonts?.ready.then(updatePath).catch(() => {});
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [updatePath, containerRef, fromRef, toRef]);

  const baseOpacity = emphasized ? Math.min(1, pathOpacity * 3) : pathOpacity;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${size.width} ${size.height}`}
      className={cn(className)}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "visible",
        opacity: muted ? 0.18 : 1,
        transition: "opacity 300ms ease",
      }}
    >
      <defs>
        <linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          x1={grad.x1}
          y1={grad.y1}
          x2={grad.x2}
          y2={grad.y2}
        >
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity={reduceMotion ? 0.7 : 0} />
          <stop offset="25%" stopColor={gradientStartColor} stopOpacity="0.85" />
          <stop offset="60%" stopColor={gradientStopColor} stopOpacity="1" />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity={reduceMotion ? 0.7 : 0} />
        </linearGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Baseline */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={baseOpacity}
        strokeLinecap="round"
        strokeDasharray={dashed ? "4 6" : undefined}
        style={{ transition: "stroke-opacity 300ms ease" }}
      />

      {/* Pulse */}
      {pathD && reduceMotion && (
        <path
          d={pathD}
          stroke={`url(#${id})`}
          strokeWidth={pathWidth * 1.4}
          strokeLinecap="round"
          strokeOpacity={0.55}
        />
      )}
      {pathD && !reduceMotion && (
        <motion.path
          d={pathD}
          pathLength={1}
          stroke={`url(#${id})`}
          strokeWidth={pathWidth * 1.8}
          strokeLinecap="round"
          strokeDasharray="0.22 1"
          filter={`url(#${id}-glow)`}
          initial={{ strokeDashoffset: reverse ? -1 : 0.22 }}
          animate={{ strokeDashoffset: reverse ? 0.22 : -1 }}
          transition={{
            duration,
            delay,
            ease: [0.45, 0.05, 0.55, 0.95],
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            repeatDelay: 0.4,
          }}
        />
      )}
    </svg>
  );
}

export default AnimatedBeam;
