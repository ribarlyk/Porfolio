"use client";

import React, { useEffect, useState } from "react";
import { usePrefs } from "@/lib/prefs";

/** Today's date as written on a Bulgarian form. Null until mounted, so the
 *  server render shows the blank pre-printed line instead of a stale date. */
function useToday(): string | null {
  const { lang } = usePrefs();
  const [d, setD] = useState<string | null>(null);
  useEffect(() => {
    const n = new Date();
    const pad = (x: number) => String(x).padStart(2, "0");
    const s = `${pad(n.getDate())}.${pad(n.getMonth() + 1)}.${n.getFullYear()}`;
    setD(lang === "bg" ? `${s} г.` : s);
  }, [lang]);
  return d;
}

/**
 * The pre-printed head of a sheet: document title in spaced caps on the
 * left; numbering-machine serial, date and copy marker on the right.
 */
export function SheetHead({
  id,
  title,
  sub,
  serial,
  marker,
  dated = false,
  plainTitle = false,
}: {
  id?: string;
  title: string;
  sub: string;
  serial?: string;
  marker?: React.ReactNode;
  dated?: boolean;
  /** The offer sheet carries the page h1 below its head, so its title is not a heading. */
  plainTitle?: boolean;
}) {
  const { dict } = usePrefs();
  const pad = dict.t.pad;
  const today = useToday();
  return (
    <div className="sheet-head">
      <div className="sh-title">
        {plainTitle ? <p className="sh-h">{title}</p> : <h2 className="sh-h" id={id}>{title}</h2>}
        <p className="sh-sub">{sub}</p>
      </div>
      <div className="sh-meta">
        {serial && (
          <span className="serial">
            <span className="no">№</span>
            {serial}
          </span>
        )}
        <span className="sh-line">
          {dated && (
            <>
              <span className="lbl">{pad.date}</span>
              <span className={`fill ${today ? "" : "blank"}`}>{today ?? " "}</span>
              <span className="lbl">{pad.place}</span>
            </>
          )}
          {marker && <span className="marker">{marker}</span>}
        </span>
      </div>
    </div>
  );
}
