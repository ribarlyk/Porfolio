"use client";

import { useEffect, useState } from "react";
import { Icon } from "./ui/Icon";
import { Monogram } from "./ui/Monogram";
import { usePrefs } from "@/lib/prefs";

function LangToggle() {
  const { lang, setLang } = usePrefs();
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button className={lang === "bg" ? "on" : ""} onClick={() => setLang("bg")} aria-pressed={lang === "bg"}>
        BG
      </button>
      <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>
        EN
      </button>
    </div>
  );
}

export function Nav({ openCmd }: { openCmd: () => void }) {
  const { theme, toggleTheme, dict } = usePrefs();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = dict.t.nav;
  const links: [string, string][] = [
    ["about", nav.about],
    ["projects", nav.projects],
    ["contact", nav.contact],
  ];

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <Monogram size={38} radius={11} />
          <span>{dict.profile.name}</span>
          <span className="domain">/ {dict.profile.domain}</span>
        </a>
        <div className="nav-links">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button className="kbtn" onClick={openCmd} aria-label="Open command menu">
            <Icon name="search" style={{ width: 15, height: 15 }} />
            <span className="lbl">{nav.search}</span>
            <span className="kbd">
              <span className="kbd-cmd">⌘</span>
              <span className="kbd-key">K</span>
            </span>
          </button>
          <LangToggle />
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle theme (⌘J)">
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <a className="icon-btn nav-gh" href={dict.profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon name="github" />
          </a>
        </div>
      </div>
    </nav>
  );
}
