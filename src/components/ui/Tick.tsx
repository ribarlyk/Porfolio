"use client";

import React from "react";

/** A pre-printed checkbox square; when on, a pen cross is drawn into it. */
export function Tick({ on }: { on: boolean }) {
  return (
    <span className={`tick ${on ? "on" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 16 16">
        <path d="M3.4 3.2c2.9 3 6.1 6.3 9.3 9.7" />
        <path d="M12.9 3.6c-3.1 2.8-6.3 6-9.6 9.3" />
      </svg>
    </span>
  );
}

/** A form option: the checkbox square plus its printed label. */
export function Opt({
  on,
  label,
  onClick,
  title,
  ariaLabel,
}: {
  on: boolean;
  label: React.ReactNode;
  onClick: () => void;
  title?: string;
  ariaLabel?: string;
}) {
  return (
    <button type="button" className="opt" aria-pressed={on} onClick={onClick} title={title} aria-label={ariaLabel}>
      <Tick on={on} />
      <span>{label}</span>
    </button>
  );
}
