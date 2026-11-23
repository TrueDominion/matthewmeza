import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about, site } from "@/content";
import { ArrowRight, LinkedIn, Mail, Pin } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: about.title,
  description: about.description,
  alternates: { canonical: "/about/" },
  openGraph: { url: "/about/", title: `${about.title} — ${site.name}`, description: about.description },
};

export default function About() {
  return (
    <div className="container about">
      <Reveal as="aside" className="about__side" y="1rem">
        <div className="about__portrait">
          <Image
            src="/images/portrait.jpg"
            alt={`Portrait of ${site.name}`}
            width={720}
            height={900}
            priority
            sizes="(max-width: 860px) 60vw, 320px"
          />
        </div>
        <p className="about__loc">
          <Pin size={16} /> {site.location}
        </p>
        <div className="about__links">
          <a className="btn btn--primary btn--sm" href={`mailto:${site.email}`}>
            <Mail size={16} /> Email
          </a>
          <a className="btn btn--secondary btn--sm" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedIn size={16} /> LinkedIn
          </a>
        </div>
      </Reveal>

      <div className="about__main">
        <Reveal>
          <p className="eyebrow">{site.tagline}</p>
        </Reveal>
        <Reveal y="0.25rem" delay={100}>
          <h1 className="about__name">{site.name}</h1>
          <p className="about__role">{site.role}</p>
        </Reveal>
        <Reveal y="0.5rem" delay={300} className="about__intro">
          {about.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <Reveal as="section" aria-labelledby="experience" className="about__block" onScroll y="1rem" duration={1400}>
          <p className="eyebrow">01 / Experience</p>
          <h2 id="experience">Experience</h2>
          {about.experience.map((e) => (
            <article key={e.org} className="role">
              <header className="role__head">
                <h3>{e.org}</h3>
                <span className="mono role__when">{e.when}</span>
              </header>
              <p className="role__title">{e.role}</p>
              <ul className="role__points">
                {e.points.map((p) => (
                  <li key={p.slice(0, 24)}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>

        <Reveal as="section" aria-labelledby="education" className="about__block" onScroll y="1rem" duration={1400}>
          <p className="eyebrow">02 / Education</p>
          <h2 id="education">Education</h2>
          {about.education.map((e) => (
            <article key={e.org} className="role">
              <h3>{e.org}</h3>
              <p className="role__title">{e.detail}</p>
            </article>
          ))}
        </Reveal>

        <Link className="btn btn--secondary" href="/#capabilities">
          View capabilities <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
