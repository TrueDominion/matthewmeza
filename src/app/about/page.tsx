import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about, site } from "@/content";
import { ArrowRight, LinkedIn, Mail, Pin } from "@/components/Icons";

export const metadata: Metadata = {
  title: about.title,
  description: about.description,
  alternates: { canonical: "/about/" },
  openGraph: { url: "/about/", title: `${about.title} — ${site.name}`, description: about.description },
};

export default function About() {
  return (
    <div className="container about">
      <aside className="about__side">
        <div className="about__portrait">
          <Image
            src="/images/portrait.jpg"
            alt={`Portrait of ${site.name}`}
            width={1440}
            height={1800}
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
      </aside>

      <div className="about__main">
        <p className="eyebrow">{site.tagline}</p>
        <h1 className="about__name">{site.name}</h1>
        <p className="about__role">{site.role}</p>
        <div className="about__intro">
          {about.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <section aria-labelledby="experience" className="about__block">
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
        </section>

        <section aria-labelledby="education" className="about__block">
          <p className="eyebrow">02 / Education</p>
          <h2 id="education">Education</h2>
          {about.education.map((e) => (
            <article key={e.org} className="role">
              <h3>{e.org}</h3>
              <p className="role__title">{e.detail}</p>
            </article>
          ))}
        </section>

        <Link className="btn btn--secondary" href="/#capabilities">
          View capabilities <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
