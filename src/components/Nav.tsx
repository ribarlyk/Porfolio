"use client";

import { useEffect, useState } from "react";
import { Icon } from "./ui/Icon";
import { Opt } from "./ui/Tick";
import { usePrefs } from "@/lib/prefs";

/** The pad's binding strip: brand stamp, the sheets, and the form options. */
export function Nav({ openCmd }: { openCmd: () => void }) {
  const { theme, toggleTheme, lang, setLang, dict } = usePrefs();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = dict.t.nav;
  const pad = dict.t.pad;
  const links: [string, string][] = [
    ["projects", nav.projects],
    ["about", nav.about],
    ["contact", nav.contact],
  ];

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            {dict.profile.monogram}
          </span>
          <span className="brand-name">{dict.profile.nameLocal}</span>
          <span className="brand-domain">{dict.profile.domain}</span>
        </a>

        <div className="nav-links">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="kbtn" onClick={openCmd} aria-label={nav.search}>
            <Icon name="search" />
            <span className="kbtn-lbl">{nav.search}</span>
            <kbd>⌘K</kbd>
          </button>
          <div className="opts" role="group" aria-label={pad.lang}>
            <Opt on={lang === "bg"} label="БГ" onClick={() => setLang("bg")} ariaLabel="Български" />
            <Opt on={lang === "en"} label="EN" onClick={() => setLang("en")} ariaLabel="English" />
          </div>
          <Opt on={theme === "dark"} label={pad.dark} onClick={toggleTheme} title={`${pad.dark} (⌘J)`} />
          <a className="icon-btn" href={dict.profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon name="github" />
          </a>
        </div>
      </div>
    </nav>
  );
}
