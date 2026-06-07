"use client";

import { useEffect, useRef } from "react";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { Counter } from "../ui/Counter";
import { useGlow } from "../ui/Magnetic";
import { useT } from "@/lib/prefs";

export function About() {
  const dict = useT();
  return (
    <section className="section-pad" id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="idx">01</span> {dict.t.sec.aboutEy}
          </div>
        </Reveal>
        <div className="about-grid">
          <div>
            <Reveal as="p" className="about-lead">
              {dict.about.lead}
            </Reveal>
            <div className="about-body" style={{ marginTop: 28 }}>
              {dict.about.body.map((para, i) => (
                <Reveal as="p" delay={i * 80} key={i}>
                  {para}
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="principles" delay={120}>
            {dict.about.principles.map((pr) => (
              <div className="principle" key={pr.n}>
                <span className="pn">{pr.n}</span>
                <div>
                  <h4>{pr.h}</h4>
                  <p>{pr.p}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const dict = useT();
  return (
    <section className="section-pad" id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="idx">02</span> {dict.t.sec.expEy}
          </div>
          <h2>{dict.t.sec.expH}</h2>
        </Reveal>
        <div className="exp-list">
          {dict.experience.map((e, i) => (
            <Reveal className="exp-row" key={i} delay={i * 60}>
              <div className="exp-period">
                {e.now ? (
                  <span>
                    <span className="now">●</span> {e.period}
                  </span>
                ) : (
                  e.period
                )}
              </div>
              <div className="exp-main">
                <h3>{e.role}</h3>
                <div className="co">
                  <strong style={{ fontWeight: 500 }}>{e.company}</strong>
                </div>
                <p className="exp-desc">{e.desc}</p>
                <div className="exp-metrics">
                  {e.metrics.map((m) => (
                    <span className="metric-chip" key={m.l}>
                      <b>{m.v}</b>
                      <span>{m.l}</span>
                    </span>
                  ))}
                </div>
                <div className="exp-stack">
                  {e.stack.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const dict = useT();
  const glow = useGlow();
  return (
    <section className="section-pad" id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="idx">02</span> {dict.t.sec.skillsEy}
          </div>
          <h2>{dict.t.sec.skillsH}</h2>
          <p>{dict.t.sec.skillsP}</p>
        </Reveal>
        <div className="skills-grid">
          {dict.skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 50}>
              <div className="card card-glow skill-card" onMouseMove={glow}>
                <div className="sc-head">
                  <span className="skill-ico">
                    <Icon name={s.icon} />
                  </span>
                  <h3>{s.title}</h3>
                </div>
                <div className="skill-tags">
                  {s.tags.map((tg) => (
                    <span className="tag" key={tg}>
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Technical() {
  const dict = useT();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fill = () =>
      el.querySelectorAll<HTMLElement>(".tech-meter i").forEach((bar) => {
        bar.style.width = (bar.dataset.w || "0") + "%";
      });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            fill();
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    const fallback = setTimeout(fill, 1600);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section className="section-pad" id="excellence">
      <div className="wrap" ref={ref}>
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="idx">04</span> {dict.t.sec.techEy}
          </div>
          <h2>{dict.t.sec.techH}</h2>
        </Reveal>
        <div className="tech-grid">
          {dict.technical.map((tc, i) => (
            <Reveal key={tc.l} delay={i * 60}>
              <div className="card tech-card">
                <div className="tn">
                  <Counter to={tc.n} suffix="" />
                  <span className="suf">{tc.suf}</span>
                </div>
                <div className="tl">{tc.l}</div>
                <div className="td">{tc.d}</div>
                <div className="tech-meter">
                  <i data-w={tc.meter} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Writing() {
  const dict = useT();
  const glow = useGlow();
  return (
    <section className="section-pad" id="writing">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="idx">05</span> {dict.t.sec.writeEy}
          </div>
          <h2>{dict.t.sec.writeH}</h2>
          <p>{dict.t.sec.writeP}</p>
        </Reveal>
        <div className="blog-grid">
          {dict.blog.map((b, i) => (
            <Reveal key={b.title} delay={i * 60}>
              <a href="#" className="card card-glow blog-card" onMouseMove={glow}>
                <div className="blog-meta">
                  <span className="tag" style={{ color: "var(--accent-text)" }}>
                    {b.tag}
                  </span>
                  <span>{b.date}</span>
                  <span>·</span>
                  <span>{b.read}</span>
                </div>
                <h3>{b.title}</h3>
                <p>{b.excerpt}</p>
                <span className="read">
                  {dict.t.writing.read} <Icon name="arrow" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
