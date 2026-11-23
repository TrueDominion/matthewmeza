"use client";

import { useEffect, useRef } from "react";

/**
 * The official logo animation (generated with Higgsfield, first and last
 * frames pinned to the exact mark). Plays once on load and again on hover.
 * Paper and graphite versions swap with the color mode via CSS.
 * Visitors who prefer reduced motion see the finished mark only.
 */
export function AnimatedMark() {
  const refs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      for (const r of refs) r.current?.pause();
      return;
    }
    for (const r of refs) r.current?.play().catch(() => {});
    // biome-ignore lint/correctness/useExhaustiveDependencies: refs are stable.
  }, []);

  const replay = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    for (const r of refs) {
      const v = r.current;
      if (v && v.ended) {
        v.currentTime = 0;
        v.play().catch(() => {});
      }
    }
  };

  return (
    <div className="animated-mark" onMouseEnter={replay} role="img" aria-label="Matthew Meza truss mark">
      {/* Without JavaScript, browsers show video controls; show the finished mark instead. */}
      {(["paper", "graphite"] as const).map((tone) => (
        <img
          key={`still-${tone}`}
          className={`animated-mark__still animated-mark__video--${tone}`}
          src={`/media/mark-${tone}.jpg`}
          width={720}
          height={360}
          alt=""
        />
      ))}
      {(["paper", "graphite"] as const).map((tone, i) => (
        <video
          key={tone}
          ref={refs[i]}
          className={`animated-mark__video animated-mark__video--${tone}`}
          src={`/media/mark-${tone}.mp4`}
          poster={`/media/mark-${tone}.jpg`}
          width={720}
          height={360}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
