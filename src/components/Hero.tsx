"use client";

import { Icon } from "./ui/Icon";
import { Counter } from "./ui/Counter";
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

function StatRow() {
  const stats = useT().stats;
  return (
    <div className="stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <div className="num">
            <Counter to={s.value} suffix={s.suffix} />
          </div>
          <div className="lbl">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function HeroCodeCard() {
  const dict = useT();
  return (
    <div className="codecard" aria-hidden="true">
      <div className="bar">
        <i />
        <i />
        <i />
        <span className="fname">{dict.profile.first.toLowerCase()}.config.ts</span>
      </div>
      <div className="body">
        <div className="ln cc-com">{dict.t.codeComment}</div>
        <div className="ln">
          <span className="cc-key">export const</span> engineer = {"{"}
        </div>
        <div className="ln">
          {"  "}role: <span className="cc-str">&quot;{dict.profile.title}&quot;</span>,
        </div>
        <div className="ln">
          {"  "}stack: [<span className="cc-str">&quot;React&quot;</span>, <span className="cc-str">&quot;Next&quot;</span>,{" "}
          <span className="cc-str">&quot;Vue&quot;</span>, <span className="cc-str">&quot;TS&quot;</span>],
        </div>
        <div className="ln">
          {"  "}focus: <span className="cc-str">&quot;performance&quot;</span>,
        </div>
        <div className="ln">
          {"  "}ship: <span className="cc-fn">()</span>{"⇒"} <span className="cc-key">true</span>,
        </div>
        <div className="ln">{"}"}</div>
      </div>
    </div>
  );
}

/** Production hero — the split layout with a code card on the right. */
export function Hero() {
  const p = useT().profile;
  return (
    <header className="hero heroB" id="top">
      <div className="wrap heroB-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
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
        <Reveal delay={140} className="heroB-visual">
          <HeroCodeCard />
        </Reveal>
      </div>
      <div className="wrap" style={{ marginTop: "clamp(48px, 7vh, 80px)" }}>
        <Reveal delay={220} style={{ borderTop: "1px solid var(--border)", paddingTop: 36 }}>
          <StatRow />
        </Reveal>
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
