import { createElement, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  /** Delay before the reveal starts, in ms. */
  delay?: number;
  /** Upward travel while revealing, e.g. "0.25rem", "1rem". */
  y?: string;
  /** Duration in ms. Default 2000, matching Magic Portfolio's RevealFx "medium". */
  duration?: number;
  /** Wait until scrolled into view instead of playing on load. */
  onScroll?: boolean;
  className?: string;
  id?: string;
  style?: CSSProperties;
  [key: string]: unknown;
};

/**
 * Page reveal modeled on Magic Portfolio's RevealFx: a left-to-right gradient
 * wipe combined with a blur-in and a small upward lift, ease-in-out.
 * Pure CSS (see .reveal in globals.css), so content is in the HTML for
 * crawlers and no-JS visitors, it replays on every page navigation, and it is
 * skipped for visitors who prefer reduced motion.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = "0rem",
  duration = 2000,
  onScroll = false,
  className,
  style,
  ...rest
}: RevealProps) {
  return createElement(
    as,
    {
      ...rest,
      className: className ? `reveal ${className}` : "reveal",
      "data-reveal": onScroll ? "scroll" : "load",
      style: {
        "--reveal-delay": `${delay}ms`,
        "--reveal-y": y,
        "--reveal-duration": `${duration}ms`,
        ...style,
      } as CSSProperties,
    },
    children,
  );
}
