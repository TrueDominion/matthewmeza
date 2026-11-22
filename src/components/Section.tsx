import type { ReactNode } from "react";

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
    <header className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {intro && <p className="lede">{intro}</p>}
    </header>
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
