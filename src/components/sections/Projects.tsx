"use client";

import { useState } from "react";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { useGlow } from "../ui/Magnetic";
import { useT } from "@/lib/prefs";
import type { Project } from "@/lib/content";

type Dictish = ReturnType<typeof useT>;
type GlowHandler = ReturnType<typeof useGlow>;

function ProjectCard({
  p,
  i,
  visible,
  glow,
  dict,
}: {
  p: Project;
  i: number;
  visible: boolean;
  glow: GlowHandler;
  dict: Dictish;
}) {
  const hasMobile = Boolean(p.imageMobile);
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const shownImage = view === "mobile" && p.imageMobile ? p.imageMobile : p.image;

  return (
    <Reveal
      className={`card card-glow proj-card ${visible ? "" : "hide"}`}
      delay={(i % 2) * 60}
      onMouseMove={glow}
      data-testid="project-card"
      data-name={p.name}
      data-visible={visible ? "true" : "false"}
    >
      {p.image ? (
        <a
          className={`proj-shot proj-shot-img ${view === "mobile" ? "is-mobile" : ""}`}
          href={p.url ?? dict.profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${dict.t.proj.liveDemo} — ${p.name}`}
        >
          {/* Static export uses plain <img>; the asset lives in /public. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shownImage} alt={p.name} loading="lazy" />
        </a>
      ) : (
        <div className="ph proj-shot">
          <span>{p.shot}</span>
        </div>
      )}
      <div className="proj-body">
        <div className="proj-top">
          <span className="ptag">{p.tag}</span>
          <div className="proj-links">
            {hasMobile ? (
              <div className="view-toggle" role="group" aria-label={`${p.name} — preview`}>
                <button
                  type="button"
                  className={view === "desktop" ? "on" : ""}
                  onClick={() => setView("desktop")}
                  aria-pressed={view === "desktop"}
                  aria-label={dict.t.proj.desktopView}
                  title={dict.t.proj.desktopView}
                >
                  <Icon name="monitor" />
                </button>
                <button
                  type="button"
                  className={view === "mobile" ? "on" : ""}
                  onClick={() => setView("mobile")}
                  aria-pressed={view === "mobile"}
                  aria-label={dict.t.proj.mobileView}
                  title={dict.t.proj.mobileView}
                >
                  <Icon name="phone" />
                </button>
              </div>
            ) : (
              <a
                href={dict.profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${dict.t.proj.viewSource} — ${p.name}`}
                title={dict.t.proj.viewSource}
                data-testid="project-github"
              >
                <Icon name="github" />
              </a>
            )}
            <a
              href={p.url ?? `${dict.profile.github}#${encodeURIComponent(p.name)}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`${dict.t.proj.liveDemo} — ${p.name}`}
              title={dict.t.proj.liveDemo}
              data-testid="project-demo"
            >
              <Icon name="external" />
            </a>
          </div>
        </div>
        <h3>
          {p.url ? (
            <a className="proj-title-link" href={p.url} target="_blank" rel="noreferrer">
              {p.name}
            </a>
          ) : (
            p.name
          )}
        </h3>
        <p className="proj-desc">
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>{dict.t.proj.problem}</strong> {p.problem}
        </p>
        <p className="proj-desc">
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>{dict.t.proj.solution}</strong> {p.solution}
        </p>
        <div className="proj-impact">
          {p.impact.map((m) => (
            <div className="pi" key={m.l}>
              <b className="accent-text">{m.v}</b>
              <span>{m.l}</span>
            </div>
          ))}
        </div>
        <div className="proj-stack">
          {p.stack.map((s) => (
            <span className="tag" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const dict = useT();
  const glow = useGlow();
  // Preselect the first filter (E-commerce). Track by index so the selection
  // survives a language switch (where the label text changes).
  const [filterIdx, setFilterIdx] = useState(0);
  const filter = dict.filters[filterIdx] ?? dict.filters[0];
  const setFilter = (f: string) => setFilterIdx(Math.max(0, dict.filters.indexOf(f)));

  const counts = dict.filters.reduce<Record<string, number>>((acc, f) => {
    acc[f] = dict.projects.filter((p) => p.cats.includes(f)).length;
    return acc;
  }, {});

  return (
    <section className="section-pad" id="projects">
      <div className="wrap">
        <Reveal className="section-head" style={{ marginBottom: 28 }}>
          <div className="eyebrow">
            <span className="idx">03</span> {dict.t.sec.projEy}
          </div>
          <h2>{dict.t.sec.projH}</h2>
          <p>{dict.t.sec.projP}</p>
        </Reveal>

        <Reveal className="filter-bar" role="tablist" aria-label="Project filters">
          {dict.filters.map((f) => (
            <button
              key={f}
              className={`chip ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              data-testid="project-filter"
              data-filter={f}
            >
              {f} <span className="ct">{counts[f]}</span>
            </button>
          ))}
        </Reveal>

        <div className="proj-grid" data-testid="project-grid">
          {dict.projects.map((p, i) => {
            const visible = p.cats.includes(filter);
            return <ProjectCard key={p.name} p={p} i={i} visible={visible} glow={glow} dict={dict} />;
          })}
        </div>
      </div>
    </section>
  );
}
