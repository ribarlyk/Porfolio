"use client";

import { useState } from "react";
import { Icon } from "../ui/Icon";
import { Opt } from "../ui/Tick";
import { Paperclip } from "../ui/Paperclip";
import { RectStamp } from "../ui/Stamp";
import { SheetHead } from "../ui/SheetHead";
import { useT } from "@/lib/prefs";
import type { Project } from "@/lib/content";

type Dictish = ReturnType<typeof useT>;

/** One delivered project, filed as a handover record with its screenshots attached. */
function Protocol({ p, dict }: { p: Project; dict: Dictish }) {
  const pr = dict.t.pad.protocol;
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const mobile = view === "mobile" && Boolean(p.imageMobile);
  const shown = mobile ? p.imageMobile : p.image;
  const [status, ...rest] = p.impact;

  return (
    <div className="form protocol" data-testid="project-card" data-name={p.name}>
      <div className="cell c-client">
        <span className="lbl">{pr.client}</span>
        {p.url ? (
          <a className="entry-xl ink-link" href={p.url} target="_blank" rel="noreferrer" data-testid="project-demo">
            {p.name}
            <Icon name="arrowUpRight" />
          </a>
        ) : (
          <p className="entry-xl">{p.name}</p>
        )}
      </div>

      <div className="cell c-object">
        <span className="lbl">{pr.object}</span>
        <p className="entry-lg cap">{p.shot}</p>
        <p className="entry entry-2">{p.tag}</p>
      </div>

      {p.image && (
        <div className="cell c-attach">
          <div className="attach-head">
            <span className="lbl">{pr.attachment}</span>
            {p.imageMobile && (
              <div className="opts" role="group" aria-label={`${p.name} — ${pr.attachment}`}>
                <Opt on={view === "desktop"} label={dict.t.proj.desktopView} onClick={() => setView("desktop")} />
                <Opt on={view === "mobile"} label={dict.t.proj.mobileView} onClick={() => setView("mobile")} />
              </div>
            )}
          </div>
          <a
            className={`attach ${mobile ? "is-mobile" : ""}`}
            href={p.url ?? dict.profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${pr.open} — ${p.name}`}
          >
            <span className="print">
              <Paperclip />
              {/* Static export uses plain <img>; the asset lives in /public. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={shown}
                src={shown}
                alt={`${p.name} — ${mobile ? dict.t.proj.mobileView : dict.t.proj.desktopView}`}
                loading="lazy"
                width={mobile ? 377 : 1903}
                height={mobile ? 783 : 910}
              />
            </span>
          </a>
        </div>
      )}

      <div className="cell c-problem">
        <span className="lbl">{pr.problem}</span>
        <p className="ruled">{p.problem}</p>
      </div>

      <div className="cell c-solution">
        <span className="lbl">{pr.solution}</span>
        <p className="ruled">{p.solution}</p>
      </div>

      <div className="cell c-materials">
        <span className="lbl">{pr.materials}</span>
        <p className="entry materials">
          {p.stack.map((s, i) => (
            <span key={s}>
              {s}
              {i < p.stack.length - 1 && <span className="sep" aria-hidden="true"> · </span>}
            </span>
          ))}
        </p>
      </div>

      <div className="cell c-status">
        <span className="lbl">{pr.status}</span>
        <div className="status">
          {status && <RectStamp lines={[status.v, status.l]} />}
          <ul className="entry entry-2">
            {status && <li className="sr-only">{`${status.v} — ${status.l}`}</li>}
            {rest.map((m) => (
              <li key={m.l}>
                {m.v} — {m.l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** Sheet 2 — the handover record: real, delivered work only. */
export function Projects() {
  const dict = useT();
  const pr = dict.t.pad.protocol;
  return (
    <section className="sheet sheet-pink perf" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <SheetHead id="projects-title" title={pr.title} sub={pr.sub} serial="0000000001" marker={pr.archive} />
        {dict.projects.map((p) => (
          <Protocol key={p.name} p={p} dict={dict} />
        ))}
      </div>
    </section>
  );
}
