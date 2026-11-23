import Link from "next/link";
import { approach, capabilities, connect, focus, framework, hero, metrics, site } from "@/content";
import { AnimatedMark } from "@/components/AnimatedMark";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { ArrowRight, LinkedIn, Mail } from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <AnimatedMark />
          <Reveal>
            <p className="eyebrow eyebrow--center">{hero.eyebrow}</p>
          </Reveal>
          <Reveal y="0.25rem">
            <h1 id="hero-title" className="hero__title">
              {hero.headlineLead} <span className="underline">{hero.headlineMark}</span>
            </h1>
          </Reveal>
          <Reveal y="0.5rem" delay={200}>
            <p className="hero__sub">{hero.subline}</p>
          </Reveal>
          <Reveal delay={400} className="hero__actions">
            <a className="btn btn--primary" href={`mailto:${site.email}`}>
              Get in touch <ArrowRight />
            </a>
            <Link className="btn btn--secondary" href="/about/">
              About Matthew <ArrowRight />
            </Link>
          </Reveal>
          <Reveal as="figure" y="1rem" delay={600} className="hero__band">
            <img
              src="/images/bridge-1600.jpg"
              srcSet="/images/bridge-1600.jpg 1600w, /images/bridge-2800.jpg 2800w"
              sizes="(max-width: 1240px) 100vw, 1200px"
              width={2800}
              height={1200}
              alt="A steel truss bridge in profile across still water at first light"
              fetchPriority="high"
            />
          </Reveal>
          <Reveal as="dl" y="1rem" delay={800} className="metrics">
            {metrics.map((m) => (
              <div key={m.label} className="metric">
                <dt className="metric__label">{m.label}</dt>
                <dd className="metric__value">{m.value}</dd>
                <dd className="metric__context mono">{m.context}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* The Bridge */}
      <Section id="approach">
        <SectionHead id="approach-title" eyebrow={approach.eyebrow} title={approach.title} intro={approach.intro} />
        <ol className="grid grid--3 crossings">
          {approach.crossings.map((c, i) => (
            <Reveal as="li" key={c.from} className="card crossing" onScroll y="1rem" delay={i * 150} duration={1400}>
              <div className="crossing__media">
                <img
                  src={`/images/${c.image}-720.jpg`}
                  srcSet={`/images/${c.image}-720.jpg 720w, /images/${c.image}-1200.jpg 1200w`}
                  sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 380px"
                  width={1200}
                  height={900}
                  alt={c.imageAlt}
                  loading="lazy"
                />
              </div>
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
            </Reveal>
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
            <Reveal as="li" key={c.title} className="capability" onScroll y="0.5rem" delay={(i % 3) * 150} duration={1400}>
              <span className="capability__node" aria-hidden="true" />
              <p className="mono capability__num">{String(i + 1).padStart(2, "0")}</p>
              <h3>{c.title}</h3>
              <p className="card__body">{c.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Focus areas */}
      <Section id="focus">
        <SectionHead id="focus-title" eyebrow={focus.eyebrow} title={focus.title} intro={focus.intro} />
        <ul className="grid grid--2">
          {focus.items.map((f, i) => (
            <Reveal as="li" key={f.title} className="card" onScroll y="0.5rem" delay={(i % 2) * 150} duration={1400}>
              <h3>{f.title}</h3>
              <p className="card__body">{f.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Framework */}
      <Section id="framework">
        <Reveal className="feature" onScroll y="1rem" duration={1400}>
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
        </Reveal>
      </Section>

      {/* Connect */}
      <Section id="connect" tone="navy">
        <Reveal className="connect" onScroll y="1rem" duration={1400}>
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
        </Reveal>
      </Section>
    </>
  );
}
