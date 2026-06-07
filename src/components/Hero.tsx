"use client";

import { Icon } from "./ui/Icon";
import { Reveal } from "./ui/Reveal";
import { Magnetic } from "./ui/Magnetic";
import { Typewriter } from "./ui/Typewriter";
import { useT } from "@/lib/prefs";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function HeroCTAs() {
  const t = useT().t;
  return (
    <div className="hero-cta">
      <Magnetic className="btn btn-primary" strength={0.35} onClick={() => scrollTo("projects")} data-testid="cta-projects">
        {t.cta.view} <Icon name="arrow" style={{ width: 16, height: 16 }} />
      </Magnetic>
      <Magnetic className="btn btn-ghost" strength={0.3} onClick={() => scrollTo("contact")} data-testid="cta-contact">
        {t.cta.connect}
      </Magnetic>
    </div>
  );
}

function HeroPhotoBg() {
  const p = useT().profile;
  return (
    <div className="hero-bg-photo" aria-hidden="true">
      {/* Static export uses plain <img>; the asset lives in /public. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/pavel.webp" alt={p.name} />
    </div>
  );
}

/** Production hero — the split layout with a code card on the right. */
export function Hero() {
  const p = useT().profile;
  return (
    <header className="hero heroB hero-has-photo" id="top">
      <HeroPhotoBg />
      <div className="wrap heroB-grid">
        <div className="hero-copy" style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <Reveal delay={40}>
            <p className="hero-greeting">
              <Typewriter text={p.greeting} />
            </p>
          </Reveal>
          <Reveal delay={60} as="h1">
            {p.headline.map((line, i) => (
              <div key={i} className={i === p.headline.length - 1 ? "grad-text" : ""}>
                {line}
              </div>
            ))}
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">{p.lede}</p>
          </Reveal>
          <Reveal delay={180}>
            <HeroCTAs />
          </Reveal>
        </div>
      </div>
    </header>
  );
}

export function TechMarquee() {
  const dict = useT();
  return (
    <div className="wrap" style={{ paddingTop: 8, paddingBottom: 8 }}>
      <Reveal>
        <div
          className="mono"
          style={{ fontSize: 11.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-4)", marginBottom: 18, textAlign: "center" }}
        >
          {dict.t.marqueeLabel}
        </div>
        <div className="marquee">
          <div className="marquee-track">
            <div className="mi">
              {dict.marquee.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="mi" aria-hidden="true">
              {dict.marquee.map((tech) => (
                <span key={tech + "2"}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
