"use client";

import { SheetHead } from "../ui/SheetHead";
import { Stamp } from "../ui/Stamp";
import { useT } from "@/lib/prefs";

/**
 * Sheet 3 — the supplier record: who Pavel is (notes on ruled lines),
 * how he works (terms, numbered as clauses) and what he works with.
 */
export function About() {
  const dict = useT();
  const s = dict.t.pad.supplier;
  return (
    <section className="sheet sheet-original perf" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <SheetHead id="about-title" title={s.title} sub={s.sub} />
        <div className="form supplier-sheet">
          <div className="cell c-about">
            <p className="about-lead">{dict.about.lead}</p>
          </div>

          <div className="cell c-notes">
            <span className="lbl">{s.notes}</span>
            <div className="ruled">
              {dict.about.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="cell c-terms">
            <span className="lbl">{s.terms}</span>
            <ol className="terms">
              {dict.about.principles.map((pr, i) => (
                <li key={pr.n}>
                  <span className="clause">{i + 1}.</span>
                  <div>
                    <h3>{pr.h}</h3>
                    <p>{pr.p}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="signed">
              <span className="lbl">{s.sign}</span>
              <span className="sign-name">{dict.profile.nameLocal}</span>
              <Stamp ring={dict.t.pad.stampRing} center={dict.profile.monogram} className="stamp-terms" />
            </div>
          </div>

          <div className="cell c-tools" id="skills">
            <table className="tools">
              <thead>
                <tr>
                  <th scope="col" className="lbl">{s.colArea}</th>
                  <th scope="col" className="lbl">{s.colTools}</th>
                </tr>
              </thead>
              <tbody>
                {dict.skills.map((sk) => (
                  <tr key={sk.title}>
                    <th scope="row">{sk.title}</th>
                    <td>{sk.tags.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
