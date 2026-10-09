"use client";

import { Icon } from "./ui/Icon";
import { Stamp } from "./ui/Stamp";
import { Paperclip } from "./ui/Paperclip";
import { SheetHead } from "./ui/SheetHead";
import { usePrefs } from "@/lib/prefs";

/**
 * Sheet 1 — the offer. Addressed to the visitor's business: the subject is
 * the headline, the recipient cell holds the live "your site" field (it
 * carbon-copies into the request form) and the primary action.
 */
export function Hero({
  site,
  onSite,
  onInquire,
}: {
  site: string;
  onSite: (value: string) => void;
  onInquire: () => void;
}) {
  const { dict, theme } = usePrefs();
  const p = dict.profile;
  const pad = dict.t.pad;
  const o = pad.offer;

  return (
    <header className="sheet sheet-original" id="top">
      <div className="wrap">
        <SheetHead
          title={o.title}
          sub={o.sub}
          serial="0000000001"
          dated
          plainTitle
          marker={theme === "dark" ? pad.copy : pad.original}
        />

        <div className="form offer">
          <div className="cell c-subject">
            <span className="lbl">{o.subject}</span>
            <h1 className="headline">{p.headline.join(" ")}</h1>
          </div>

          <div className="cell c-recipient">
            <span className="lbl">{o.recipient}</span>
            <p className="entry-lg">{o.recipientName}</p>
            <label className="line-field" htmlFor="offer-site">
              <span className="lbl lbl-sm">{o.site}</span>
              <input
                id="offer-site"
                type="text"
                inputMode="url"
                autoComplete="url"
                spellCheck={false}
                value={site}
                placeholder={o.sitePh}
                onChange={(e) => onSite(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    onInquire();
                  }
                }}
              />
            </label>
            <p className="note">{o.carbon}</p>
            <div className="actions">
              <button type="button" className="btn" onClick={onInquire} data-testid="cta-contact">
                {o.cta} <Icon name="arrow" />
              </button>
              <a className="link" href="#projects" data-testid="cta-projects">
                {o.seeCase}
              </a>
            </div>
          </div>

          <div className="cell c-supplier">
            <span className="lbl">{o.supplier}</span>
            <div className="supplier">
              <figure className="photo">
                <Paperclip />
                {/* Static export uses plain <img>; the asset lives in /public. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/pavel.webp" alt={p.nameLocal} width={842} height={1264} />
                <Stamp ring={pad.stampRing} center={p.monogram} className="stamp-photo" land />
              </figure>
              <div className="supplier-data">
                <p className="entry-lg">{p.nameLocal}</p>
                <p className="entry">{p.title}</p>
                <p className="entry entry-2">
                  {p.location} ·{" "}
                  <a href={`mailto:${p.email}`} className="ink-link">
                    {p.email}
                  </a>
                </p>
                <p className="lede">{p.lede}</p>
              </div>
            </div>
          </div>

          <div className="cell c-items">
            <table className="items">
              <thead>
                <tr>
                  <th scope="col" className="lbl">{o.colNo}</th>
                  <th scope="col" className="lbl">{o.colService}</th>
                  <th scope="col" className="lbl">{o.colGain}</th>
                </tr>
              </thead>
              <tbody>
                {o.items.map((it, i) => (
                  <tr key={it.s}>
                    <td className="n">{i + 1}</td>
                    <td className="s">{it.s}</td>
                    <td className="g">{it.g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cell c-words">
            <span className="lbl">{o.inWords}:</span>
            <p className="words">{o.inWordsText}</p>
          </div>

          <div className="cell c-issued">
            <span className="lbl">{o.issued}</span>
            <p className="sign">{p.nameLocal}</p>
          </div>

          <div className="cell c-accepted">
            <span className="lbl">{o.accepted}</span>
            <a className="sign sign-blank" href="#contact" onClick={(e) => { e.preventDefault(); onInquire(); }}>
              <span>{o.acceptedCta}</span>
              <Icon name="arrow" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
