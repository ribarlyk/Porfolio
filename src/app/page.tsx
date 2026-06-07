"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Hero, TechMarquee } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { About, Skills, Technical } from "@/components/sections/Narrative";
import { Projects } from "@/components/sections/Projects";
import { CommandMenu, type CmdGroup } from "@/components/ui/CommandMenu";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
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

function Contact() {
  const dict = useT();
  const [values, setValues] = useState<ContactValues>(initialContactValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const contact = dict.t.contact;

  const links = [
    { label: contact.linkEmail, value: dict.profile.email, href: `mailto:${dict.profile.email}`, icon: "mail" },
    { label: contact.linkGithub, value: dict.profile.githubHandle, href: dict.profile.github, icon: "github" },
    { label: contact.linkLinkedin, value: "Pavel Hristov", href: dict.profile.linkedin, icon: "linkedin" },
  ];

  function updateField(field: keyof ContactValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values, contact);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

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
    <section className="section-pad" id="contact">
      <div className="wrap contact-grid">
        <div>
          <Reveal>
            <div className="eyebrow">
              <span className="idx">07</span> {dict.t.sec.contactEy}
            </div>
            <h2 className="contact-h" style={{ marginTop: 18 }}>
              {contact.h}
            </h2>
            <p className="lede" style={{ marginTop: 18, textAlign: "left" }}>
              {contact.p}
            </p>
          </Reveal>

          <div className="contact-links">
            {links.map((link, index) => (
              <Reveal key={link.label} delay={index * 50}>
                <a className="clink" href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <span className="ci">
                    <Icon name={link.icon} />
                  </span>
                  <span className="cmeta">
                    <b>{link.label}</b>
                    <span>{link.value}</span>
                  </span>
                  <Icon name="arrowUpRight" style={{ width: 16, height: 16 }} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          {sent ? (
            <div className="form form-sent">
              <span className="ok">
                <Icon name="check" />
              </span>
              <h3>{contact.sentTitle}</h3>
              <p className="muted">{contact.sentBody(values.name)}</p>
              <button
                className="btn btn-ghost"
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
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className={`field ${errors.name ? "err" : ""}`}>
                  <label htmlFor="name">{contact.name}</label>
                  <input id="name" value={values.name} placeholder={contact.namePh} onChange={(event) => updateField("name", event.target.value)} />
                  {errors.name && <span className="msg">{errors.name}</span>}
                </div>
                <div className={`field ${errors.email ? "err" : ""}`}>
                  <label htmlFor="email">{contact.email}</label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    placeholder={contact.emailPh}
                    onChange={(event) => updateField("email", event.target.value)}
                  />
                  {errors.email && <span className="msg">{errors.email}</span>}
                </div>
              </div>
              <div className={`field ${errors.message ? "err" : ""}`}>
                <label htmlFor="message">{contact.message}</label>
                <textarea id="message" value={values.message} placeholder={contact.messagePh} onChange={(event) => updateField("message", event.target.value)} />
                {errors.message && <span className="msg">{errors.message}</span>}
              </div>
              {sendError && (
                <p className="msg" role="alert">
                  {contact.errSend}
                </p>
              )}
              <button className="btn btn-primary" type="submit" disabled={sending} aria-busy={sending}>
                {sending ? contact.sending : contact.send} {!sending && <Icon name="arrow" />}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const dict = useT();
  const footer = dict.t.footer;
  const siteLinks = [
    ["top", dict.t.cmd.home],
    ["about", dict.t.nav.about],
    ["projects", dict.t.nav.projects],
    ["contact", dict.t.nav.contact],
  ];

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <strong>{dict.profile.name}</strong>
            <p className="muted" style={{ marginTop: 8, maxWidth: 440 }}>
              {footer.tagline(dict.profile.title, dict.profile.location)}
            </p>
          </div>
          <div className="footer-nav">
            <div className="footer-col">
              <span className="ft">{footer.site}</span>
              {siteLinks.map(([id, label]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </div>
            <div className="footer-col">
              <span className="ft">{footer.connect}</span>
              <a href={`mailto:${dict.profile.email}`}>{dict.profile.email}</a>
              <a href={dict.profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={dict.profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{footer.craft}</span>
          <span className="footer-press">{footer.press}</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const { theme, toggleTheme, toggleLang, dict } = usePrefs();
  const [cmdOpen, setCmdOpen] = useState(false);

  const copyEmail = useCallback(() => {
    void navigator.clipboard?.writeText(dict.profile.email);
  }, [dict.profile.email]);

  const groups = useMemo<CmdGroup[]>(
    () => [
      {
        label: dict.t.cmd.navigate,
        items: [
          { label: dict.t.cmd.home, icon: "home", run: () => scrollToSection("top"), kw: "top hero" },
          { label: dict.t.cmd.about, icon: "user", run: () => scrollToSection("about") },
          { label: dict.t.cmd.projects, icon: "folder", run: () => scrollToSection("projects") },
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
      <div className="bg-field" />
      <div className="bg-grid" />
      <Nav openCmd={() => setCmdOpen(true)} />
      <CommandMenu open={cmdOpen} setOpen={setCmdOpen} groups={groups} />
      <main className="shell">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Technical />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
