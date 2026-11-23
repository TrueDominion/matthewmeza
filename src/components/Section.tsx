import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHead({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  id: string;
}) {
  return (
    <Reveal as="header" className="section-head" onScroll y="0.5rem" duration={1400}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {intro && <p className="lede">{intro}</p>}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  tone,
}: {
  id?: string;
  children: ReactNode;
  tone?: "navy";
}) {
  return (
    <section id={id} className={tone ? `section section--${tone}` : "section"} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="container">{children}</div>
    </section>
  );
}
