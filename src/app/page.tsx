import Link from "next/link";
import { approach, capabilities, connect, focus, framework, hero, metrics, site } from "@/content";
import { Truss } from "@/components/Truss";
import { Section, SectionHead } from "@/components/Section";
import { ArrowRight, LinkedIn, Mail } from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <Truss className="hero__truss" />
          <p className="eyebrow eyebrow--center">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {hero.headlineLead} <span className="underline">{hero.headlineMark}</span>
          </h1>
          <p className="hero__sub">{hero.subline}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={`mailto:${site.email}`}>
              Get in touch <ArrowRight />
            </a>
            <Link className="btn btn--secondary" href="/about/">
              About Matthew <ArrowRight />
            </Link>
          </div>
          <dl className="metrics">
            {metrics.map((m) => (
              <div key={m.label} className="metric">
                <dt className="metric__label">{m.label}</dt>
                <dd className="metric__value">{m.value}</dd>
                <dd className="metric__context mono">{m.context}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The Bridge */}
      <Section id="approach">
        <SectionHead id="approach-title" eyebrow={approach.eyebrow} title={approach.title} intro={approach.intro} />
        <ol className="grid grid--3 crossings">
          {approach.crossings.map((c, i) => (
            <li key={c.from} className="card crossing">
              <p className="mono card__num">Crossing {String(i + 1).padStart(2, "0")}</p>
              <h3 className="crossing__route">
                <span>{c.from}</span>
                <span className="crossing__arrow" aria-hidden="true">
                  <span className="crossing__line" />
                </span>
                <span className="sr-only">to</span>
                <span>{c.to}</span>
              </h3>
              <p className="card__body">{c.body}</p>
              <p className="mono card__label">What transferred</p>
              <ul className="tags">
                {c.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* Capabilities */}
      <Section id="capabilities">
        <SectionHead
          id="capabilities-title"
          eyebrow={capabilities.eyebrow}
          title={capabilities.title}
          intro={capabilities.intro}
        />
        <ul className="grid grid--3 capability-grid">
          {capabilities.items.map((c, i) => (
            <li key={c.title} className="capability">
              <span className="capability__node" aria-hidden="true" />
              <p className="mono capability__num">{String(i + 1).padStart(2, "0")}</p>
              <h3>{c.title}</h3>
              <p className="card__body">{c.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Focus areas */}
      <Section id="focus">
        <SectionHead id="focus-title" eyebrow={focus.eyebrow} title={focus.title} intro={focus.intro} />
        <ul className="grid grid--2">
          {focus.items.map((f) => (
            <li key={f.title} className="card">
              <h3>{f.title}</h3>
              <p className="card__body">{f.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Framework */}
      <Section id="framework">
        <div className="feature">
          <div>
            <p className="eyebrow">{framework.eyebrow}</p>
            <h2 id="framework-title">{framework.title}</h2>
            <p className="lede">{framework.body}</p>
            <Link className="btn btn--secondary" href={framework.href}>
              {framework.cta} <ArrowRight />
            </Link>
          </div>
          <ol className="feature__steps" aria-label="Decision areas">
            {["Investment", "Financing", "Distribution", "Liquidity"].map((s) => (
              <li key={s}>
                <span className="feature__node" aria-hidden="true" />
                <span className="mono">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Connect */}
      <Section id="connect" tone="navy">
        <div className="connect">
          <h2 id="connect-title">{connect.title}</h2>
          <p className="lede">{connect.body}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={`mailto:${site.email}`}>
              <Mail /> {site.email}
            </a>
            <a className="btn btn--ghost" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedIn /> LinkedIn
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
