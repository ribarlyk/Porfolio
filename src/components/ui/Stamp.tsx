"use client";

import { useId } from "react";

/**
 * Round company stamp: double outer ring, the name set around the ring,
 * the monogram in the middle. Ink colour and the speckled "uneven ink"
 * mask come from CSS (.stamp), so the same mark works on every sheet.
 */
export function Stamp({
  ring,
  center = "PH",
  className = "",
  land = false,
}: {
  ring: string;
  center?: string;
  className?: string;
  land?: boolean;
}) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const r = 47;
  return (
    <svg viewBox="0 0 132 132" className={`stamp ${land ? "land" : ""} ${className}`.trim()} aria-hidden="true">
      <defs>
        <path id={`ring-${id}`} d={`M 66,66 m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`} />
      </defs>
      <circle cx="66" cy="66" r="62" fill="none" stroke="currentColor" strokeWidth="3.2" />
      <circle cx="66" cy="66" r="56.5" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="66" cy="66" r="36" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text className="stamp-ring" fill="currentColor">
        <textPath href={`#ring-${id}`} textLength={2 * Math.PI * r - 6} lengthAdjust="spacing">
          {ring}
        </textPath>
      </text>
      <text className="stamp-center" x="66" y="78" textAnchor="middle" fill="currentColor">
        {center}
      </text>
    </svg>
  );
}

/** Rectangular status stamp (double border, one or two lines of caps). */
export function RectStamp({ lines, className = "", land = false }: { lines: string[]; className?: string; land?: boolean }) {
  return (
    <span className={`rstamp ${land ? "land" : ""} ${className}`.trim()} aria-hidden="true">
      {lines.map((l, i) => (
        <span key={i} className={i === 0 ? "rs-main" : "rs-sub"}>
          {l}
        </span>
      ))}
    </span>
  );
}
