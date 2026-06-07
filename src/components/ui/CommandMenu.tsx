"use client";

import React, { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { useT } from "@/lib/prefs";

export interface CmdAction {
  label: string;
  icon: string;
  run: () => void;
  hint?: string;
  kw?: string;
}
export interface CmdGroup {
  label: string;
  items: CmdAction[];
}

interface CommandMenuProps {
  open: boolean;
  setOpen: (v: boolean) => void;
  groups: CmdGroup[];
}

export function CommandMenu({ open, setOpen, groups }: CommandMenuProps) {
  const cm = useT().t.cmd;
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const flat = groups.flatMap((g) => g.items.map((it) => ({ ...it, group: g.label })));
  const filtered = flat.filter(
    (it) =>
      it.label.toLowerCase().includes(q.toLowerCase()) ||
      (it.kw || "").toLowerCase().includes(q.toLowerCase())
  );

  const rendered: CmdGroup[] = [];
  filtered.forEach((it) => {
    let g = rendered.find((x) => x.label === it.group);
    if (!g) {
      g = { label: it.group, items: [] };
      rendered.push(g);
    }
    g.items.push(it);
  });

  useEffect(() => {
    if (open) {
      setQ("");
      setSel(0);
      const id = setTimeout(() => inputRef.current?.focus(), 30);
      return () => clearTimeout(id);
    }
  }, [open]);

  useEffect(() => setSel(0), [q]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSel((s) => Math.min(s + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSel((s) => Math.max(s - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const it = filtered[sel];
        if (it) {
          it.run();
          setOpen(false);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, sel, setOpen]);

  let idx = -1;
  return (
    <div
      className={`cmd-overlay ${open ? "open" : ""}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="cmd" role="dialog" aria-modal="true" aria-label="Command menu">
        <div className="cmd-input-row">
          <Icon name="search" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={cm.ph}
            aria-label="Command input"
            data-testid="cmd-input"
          />
          <span className="esc">{cm.esc}</span>
        </div>
        <div className="cmd-list">
          {filtered.length === 0 && (
            <div className="cmd-empty">
              {cm.noResults} {"\u201c"}{q}{"\u201d"}
            </div>
          )}
          {rendered.map((g) => (
            <div key={g.label}>
              <div className="cmd-group-label">{g.label}</div>
              {g.items.map((it) => {
                idx++;
                const myIdx = idx;
                return (
                  <div
                    key={it.label}
                    className={`cmd-item ${myIdx === sel ? "sel" : ""}`}
                    onMouseEnter={() => setSel(myIdx)}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      it.run();
                      setOpen(false);
                    }}
                  >
                    <span className="ci">
                      <Icon name={it.icon} />
                    </span>
                    <span className="cl">{it.label}</span>
                    {it.hint && <span className="ck">{it.hint}</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
