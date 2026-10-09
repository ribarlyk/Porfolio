"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { About } from "@/components/sections/Narrative";
import { Projects } from "@/components/sections/Projects";
import { CommandMenu, type CmdGroup } from "@/components/ui/CommandMenu";
import { Icon } from "@/components/ui/Icon";
import { RectStamp } from "@/components/ui/Stamp";
import { SheetHead } from "@/components/ui/SheetHead";
import { usePrefs, useT } from "@/lib/prefs";
import { type ContactErrors, type ContactValues, validateContact } from "@/lib/validation";
import { siteConfig } from "@/lib/site";

const initialContactValues: ContactValues = {
  name: "",
  email: "",
  message: "",
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/**
 * Sheet 4 — the request. The site field shares its value with the offer's
 * recipient field (a carbon copy); a successful send stamps the sheet.
 */
function Contact({
  site,
  onSite,
  carbonPulse,
}: {
  site: string;
  onSite: (value: string) => void;
  carbonPulse: number;
}) {
  const dict = useT();
  const [values, setValues] = useState<ContactValues>(initialContactValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const contact = dict.t.contact;
  const rq = dict.t.pad.request;

  const links = [
    { label: contact.linkEmail, value: dict.profile.email, href: `mailto:${dict.profile.email}`, icon: "mail" },
    { label: contact.linkGithub, value: dict.profile.githubHandle, href: dict.profile.github, icon: "github" },
    { label: contact.linkLinkedin, value: dict.profile.nameLocal, href: dict.profile.linkedin, icon: "linkedin" },
  ];

  function updateField(field: keyof ContactValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values, contact);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = (["name", "email", "message"] as const).find((f) => nextErrors[f]);
      if (first) document.getElementById(first)?.focus();
      return;
    }

    setSendError(false);
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.contactFormKey,
          subject: `Portfolio contact — ${values.name}`,
          from_name: values.name,
          name: values.name,
          email: values.email,
          website: site.trim() || "—",
          message: values.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="sheet sheet-canary perf" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <SheetHead id="contact-title" title={rq.title} sub={rq.sub} marker={rq.ref} dated />

        <form className={`form request ${sent ? "is-sent" : ""}`} onSubmit={onSubmit} noValidate>
          <div className="cell c-intro">
            <p className="request-h">{contact.h}</p>
            <p className="lede">{contact.p}</p>
          </div>

          <div className={`cell c-name ${errors.name ? "err" : ""}`}>
            <label className="lbl" htmlFor="name">{contact.name}</label>
            <input
              id="name"
              autoComplete="name"
              value={values.name}
              placeholder={contact.namePh}
              readOnly={sent}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-err" : undefined}
              onChange={(event) => updateField("name", event.target.value)}
            />
            {errors.name && <span className="msg" id="name-err">{errors.name}</span>}
          </div>

          <div className={`cell c-email ${errors.email ? "err" : ""}`}>
            <label className="lbl" htmlFor="email">{contact.email}</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={values.email}
              placeholder={contact.emailPh}
              readOnly={sent}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-err" : undefined}
              onChange={(event) => updateField("email", event.target.value)}
            />
            {errors.email && <span className="msg" id="email-err">{errors.email}</span>}
          </div>

          <div className="cell c-site">
            <label className="lbl" htmlFor="site">{rq.site}</label>
            <input
              id="site"
              type="text"
              inputMode="url"
              autoComplete="url"
              spellCheck={false}
              value={site}
              placeholder={dict.t.pad.offer.sitePh}
              readOnly={sent}
              onChange={(event) => onSite(event.target.value)}
              key={carbonPulse}
              className={carbonPulse > 0 && site ? "carbon" : ""}
            />
            {site.trim() && <span className="carbon-note">{rq.carbon}</span>}
          </div>

          <div className={`cell c-message ${errors.message ? "err" : ""}`}>
            <label className="lbl" htmlFor="message">{contact.message}</label>
            <textarea
              id="message"
              rows={5}
              value={values.message}
              placeholder={contact.messagePh}
              readOnly={sent}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-err" : undefined}
              onChange={(event) => updateField("message", event.target.value)}
            />
            {errors.message && <span className="msg" id="message-err">{errors.message}</span>}
          </div>

          <div className="cell c-direct">
            <span className="lbl">{rq.direct}</span>
            <ul className="direct">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <Icon name={link.icon} />
                    <span className="d-label">{link.label}</span>
                    <span className="d-value">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="cell c-submit" aria-live="polite">
            <div className="mp" aria-hidden="true">
              <span className="mp-place">{rq.mp}</span>
              {sent && <RectStamp lines={[rq.received, dict.profile.nameLocal]} className="stamp-received" land />}
            </div>
            {sent ? (
              <div className="sent">
                <p className="entry-lg">{contact.sentTitle}</p>
                <p className="entry entry-2">{contact.sentBody(values.name)}</p>
                <button
                  type="button"
                  className="link"
                  onClick={() => {
                    setValues(initialContactValues);
                    setErrors({});
                    setSent(false);
                    setSendError(false);
                  }}
                >
                  {contact.sendAnother}
                </button>
              </div>
            ) : (
              <>
                <button className="btn" type="submit" disabled={sending} aria-busy={sending}>
                  {sending ? contact.sending : contact.send} {!sending && <Icon name="arrow" />}
                </button>
                {sendError && (
                  <p className="msg" role="alert">
                    {contact.errSend}
                  </p>
                )}
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

/** The pad's back board: who made it, where to go, how to reach him. */
function Footer() {
  const dict = useT();
  const footer = dict.t.footer;
  const siteLinks = [
    ["top", dict.t.cmd.home],
    ["projects", dict.t.nav.projects],
    ["about", dict.t.nav.about],
    ["contact", dict.t.nav.contact],
  ];

  return (
    <footer className="board">
      <div className="wrap">
        <div className="board-top">
          <div>
            <p className="board-name">{dict.profile.nameLocal}</p>
            <p className="board-tag">{footer.tagline(dict.profile.title, dict.profile.location)}</p>
          </div>
          <nav className="board-nav" aria-label={footer.site}>
            <div className="board-col">
              <span className="board-lbl">{footer.site}</span>
              {siteLinks.map(([id, label]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </div>
            <div className="board-col">
              <span className="board-lbl">{footer.connect}</span>
              <a href={`mailto:${dict.profile.email}`}>{dict.profile.email}</a>
              <a href={dict.profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={dict.profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </nav>
        </div>
        <div className="board-bottom">
          <span>
            {dict.profile.domain} · {footer.craft}
          </span>
          <span className="board-press">{footer.press}</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const { theme, toggleTheme, toggleLang, dict } = usePrefs();
  const [cmdOpen, setCmdOpen] = useState(false);
  const [site, setSite] = useState("");
  const [carbonPulse, setCarbonPulse] = useState(0);
  const pulseTimer = useRef<number | undefined>(undefined);

  const copyEmail = useCallback(() => {
    void navigator.clipboard?.writeText(dict.profile.email);
  }, [dict.profile.email]);

  // The offer's primary action: carry the site over and open the request.
  const inquire = useCallback(() => {
    setCarbonPulse((n) => n + 1);
    scrollToSection("contact");
    window.clearTimeout(pulseTimer.current);
    pulseTimer.current = window.setTimeout(() => {
      document.getElementById("name")?.focus({ preventScroll: true });
    }, 650);
  }, []);

  useEffect(() => () => window.clearTimeout(pulseTimer.current), []);

  const groups = useMemo<CmdGroup[]>(
    () => [
      {
        label: dict.t.cmd.navigate,
        items: [
          { label: dict.t.cmd.home, icon: "home", run: () => scrollToSection("top"), kw: "top hero" },
          { label: dict.t.cmd.projects, icon: "folder", run: () => scrollToSection("projects") },
          { label: dict.t.cmd.about, icon: "user", run: () => scrollToSection("about") },
          { label: dict.t.cmd.contact, icon: "mail", run: () => scrollToSection("contact") },
        ],
      },
      {
        label: dict.t.cmd.actions,
        items: [
          { label: theme === "dark" ? dict.t.cmd.toLight : dict.t.cmd.toDark, icon: theme === "dark" ? "sun" : "moon", run: toggleTheme },
          { label: dict.t.cmd.lang, icon: "command", run: toggleLang },
          { label: dict.t.cmd.copyEmail, icon: "copy", run: copyEmail },
          { label: dict.t.cmd.openGithub, icon: "github", run: () => window.open(dict.profile.github, "_blank", "noreferrer") },
          { label: dict.t.cmd.openLinkedin, icon: "linkedin", run: () => window.open(dict.profile.linkedin, "_blank", "noreferrer") },
        ],
      },
    ],
    [copyEmail, dict, theme, toggleLang, toggleTheme]
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCmdOpen((open) => !open);
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "j") {
        event.preventDefault();
        toggleTheme();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggleTheme]);

  return (
    <>
      <a className="skip" href="#main">
        {dict.t.nav.skip}
      </a>
      <Nav openCmd={() => setCmdOpen(true)} />
      <CommandMenu open={cmdOpen} setOpen={setCmdOpen} groups={groups} />
      <main className="pad" id="main">
        <Hero site={site} onSite={setSite} onInquire={inquire} />
        <Projects />
        <About />
        <Contact site={site} onSite={setSite} carbonPulse={carbonPulse} />
      </main>
      <Footer />
    </>
  );
}
