"use client";

/* ============================================================
   Preferences (language + theme) with localStorage persistence.
   The dictionary for the active language is exposed via useT().
   ============================================================ */

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { dictionaries, type Dict, type Lang, type Theme } from "./content";

interface PrefsContextValue {
  lang: Lang;
  theme: Theme;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  dict: Dict;
}

const PrefsContext = createContext<PrefsContextValue | null>(null);

function readStored<T extends string>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    return (localStorage.getItem(key) as T) || fallback;
  } catch {
    return fallback;
  }
}

/**
 * Detect the initial language for a first-time visitor.
 * Bulgarian is the default; we only fall back to English when the visitor is
 * detectably *outside* Bulgaria (a known timezone other than Europe/Sofia and
 * no Bulgarian browser locale). An explicit stored choice always wins.
 */
function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "bg";
  try {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "bg") return stored;
  } catch {
    // ignore storage access errors
  }

  // The pre-hydration script already resolved this onto <html lang>.
  const fromDom = document.documentElement.lang;
  if (fromDom === "bg" || fromDom === "en") return fromDom;

  try {
    const langs = (navigator.languages ?? [navigator.language ?? ""]).join(",").toLowerCase();
    if (langs.includes("bg")) return "bg";

    // Outside Bulgaria only if we have a known, non-Sofia timezone.
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone?.toLowerCase() ?? "";
    if (tz && tz !== "europe/sofia") return "en";
  } catch {
    // ignore environment detection errors
  }

  return "bg";
}

export function PrefsProvider({ children }: { children: React.ReactNode }) {
  // Defaults match the SSR markup; the pre-hydration script in layout.tsx
  // sets <html data-theme/lang> first, so there's no flash.
  const [lang, setLangState] = useState<Lang>("bg");
  const [theme, setThemeState] = useState<Theme>("dark");

  // Sync from storage / DOM after mount. Language is detected (storage wins,
  // then browser locale / timezone) so Bulgarian visitors default to BG.
  useEffect(() => {
    setLangState(detectInitialLang());
    setThemeState(readStored<Theme>("theme", "dark"));
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
    document.documentElement.lang = l;
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try { localStorage.setItem("theme", t); } catch {}
    document.documentElement.dataset.theme = t;
  }, []);

  const toggleLang = useCallback(() => setLang(lang === "en" ? "bg" : "en"), [lang, setLang]);
  const toggleTheme = useCallback(() => setTheme(theme === "dark" ? "light" : "dark"), [theme, setTheme]);

  // Keep the document attributes in step with state.
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const value: PrefsContextValue = {
    lang, theme, setLang, toggleLang, setTheme, toggleTheme, dict: dictionaries[lang],
  };

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export function usePrefs(): PrefsContextValue {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs must be used inside <PrefsProvider>");
  return ctx;
}

/** Convenience: the active-language dictionary. */
export function useT(): Dict {
  return usePrefs().dict;
}
