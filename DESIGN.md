---
name: Pavel Hristov
description: A Bulgarian pre-printed business pad (кочан), filled in by hand in carbon violet.
colors:
  sheet-original: "#f4f6f4"
  sheet-pink: "#f6d2db"
  sheet-canary: "#f5e58a"
  desk: "#b9c3bd"
  print: "#1c6450"
  ink: "#33239f"
  ink-2: "#54479c"
  serial: "#c8292b"
  stamp: "#4a2bb8"
  clip: "#7b858d"
  board: "#1c5545"
  board-ink: "#eaf3ef"
  board-ink-2: "#b9d3c8"
  copy-sheet: "#1b1842"
  copy-sheet-pink: "#27173e"
  copy-sheet-canary: "#22203d"
  copy-desk: "#0c0a20"
  copy-print: "#8fceb7"
  copy-ink: "#e8e4ff"
  copy-ink-2: "#bdb5f1"
  copy-serial: "#ff7d72"
  copy-stamp: "#b2a3ff"
typography:
  display:
    fontFamily: "Sofia Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, min(5.4vw, 9.4vh), 5.4rem)"
    fontWeight: 450
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2vw, 3rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0.16em"
  title:
    fontFamily: "Sofia Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 1.1rem + 0.6vw, 1.6rem)"
    fontWeight: 450
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Sofia Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 450
    lineHeight: 1.6
  ruled:
    fontFamily: "Sofia Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "1.075rem"
    fontWeight: 450
    lineHeight: "30px"
  label:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, Segoe UI, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "0.08em"
  serial:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, Segoe UI, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 0.8vw, 1.95rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.12em"
    fontFeature: "tnum"
rounded:
  none: "0"
  hairline: "2px"
  round: "50%"
spacing:
  rule: "30px"
  cell-x: "clamp(14px, 2vw, 22px)"
  gutter: "clamp(16px, 4vw, 40px)"
  maxw: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet-original}"
    typography: "{typography.label}"
    rounded: "{rounded.hairline}"
    padding: "0 20px 0 22px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.sheet-original}"
  option:
    textColor: "{colors.print}"
    typography: "{typography.label}"
    height: "34px"
  option-on:
    textColor: "{colors.ink}"
  key-button:
    textColor: "{colors.print}"
    rounded: "{rounded.hairline}"
    padding: "0 8px 0 10px"
    height: "34px"
  line-field:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "6px 0 7px"
  form-cell:
    backgroundColor: "{colors.sheet-original}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px clamp(14px, 2vw, 22px) clamp(18px, 2.2vw, 26px)"
  nav:
    backgroundColor: "{colors.sheet-original}"
    textColor: "{colors.print}"
    height: "62px"
  board:
    backgroundColor: "{colors.board}"
    textColor: "{colors.board-ink}"
    padding: "52px 0 28px"
---

# Design System: Pavel Hristov

## Overview

**Creative North Star: "The Invoice Book (Кочан)"**

The site is one Bulgarian pre-printed business pad: carbonless sheets bound into a book, each sheet a different document (offer, handover protocol, supplier record, request) filled in by hand. Everything the printer put on the sheet before it was sold (the form grid, the condensed caps labels, the red numbering-machine serial) is set in the print ink and the print face. Everything the writer added (the headline, names, values, answers) is set in carbon violet in the entry face at one weight. A round violet rubber stamp marks what is finished.

The light theme is the original sheet. The dark theme is the carbon copy (КОПИЕ): a carbon-violet sheet with pale impressions of the same print and entries; it is a re-inking of the same pad, not a separate design. Sheets change paper colour (white original, pink copy, canary copy) and are divided only by a tear-off perforation; the pad closes on a dark green back board. Density is that of a real form: ruled cells packed edge to edge, generous inside, no floating cards.

Motion is physical and rare: a stamp lands once (scale and blur settle), a pen cross is drawn into a checkbox, a carbon tint fades from a field that was copied. Nothing glows, counts up or loops.

**Key Characteristics:**
- Two voices only: printed (green, Extra Condensed caps) and written (violet, Sofia Sans, weight 450).
- Paper colour, not shadow, distinguishes sheets; a perforation is the only divider between them.
- Content lives in a printed form grid: 1px inner rules, a 2px outer frame, square corners.
- Red is reserved for the numbering machine and for errors.
- The stamp is the reward mark and appears only on finished things.
- Dark theme is the carbon copy of the same pad, with the stamp switched to a screen blend.

## Colors

A cool paper ground carrying exactly three inks: printer's green, carbon violet and numbering-machine red, plus the stamp-pad violet.

### Primary
- **Carbon Violet** (ink): every hand-written entry, the headline, field values, the primary button fill, focus outlines and text selection. Fainter carbon (ink-2) carries secondary entries, ledes and table descriptions.
- **Stamp-Pad Violet** (stamp): round and rectangular stamps, the brand monogram, and the primary button's hover fill. Close to the carbon but bluer and brighter, so a stamp reads as a different instrument from the pen.

### Secondary
- **Printer's Green** (print): all pre-printed matter: cell labels, sheet titles, the form frame, column heads, inactive options, nav links, placeholder text. Grid rules are this ink mixed toward transparent (48% for rules, 24% for soft rules and ruled lines), never a separate grey.
- **Back-Board Green** (board, with board-ink and board-ink-2): the footer only, the pad's cardboard back.

### Tertiary
- **Numbering-Machine Red** (serial): the № serial in each sheet head, field error underlines and error messages. Nothing else.

### Neutral
- **Original Sheet** (sheet-original): the page ground and the first and last sheets' paper; also the nav strip and command slip.
- **Pink Copy** (sheet-pink) and **Canary Copy** (sheet-canary): the paper of the second and fourth sheets.
- **Desk** (desk): what shows through the perforation holes and behind the command overlay.
- **Clip Steel** (clip): the wire paperclip stroke only.
- **Carbon Copy set** (copy-sheet, copy-sheet-pink, copy-sheet-canary, copy-desk, copy-print, copy-ink, copy-ink-2, copy-serial, copy-stamp): the same roles re-inked for the dark theme; each maps one-to-one onto its light counterpart.

### Named Rules
**The Two Inks Rule.** Printed matter is green, written matter is violet. If a piece of text would have been on the blank form, it is print; if a person wrote it, it is ink.

**The Red Is The Machine Rule.** Serial red appears only on the numbering-machine serial and on errors. It is never decoration or emphasis.

**The Paper Not Panel Rule.** Sheets differ by paper colour (original, pink, canary), never by tinted panels, gradients or cards placed on a sheet.

## Typography

**Display Font:** Sofia Sans (with Segoe UI, system-ui) for every written entry, including the display headline
**Print Font:** Sofia Sans Extra Condensed (with Arial Narrow, Segoe UI) for every pre-printed label, title, serial, button and stamp

**Character:** A Bulgarian (Lettersoup) family carrying true Cyrillic forms in both widths. The condensed width reads as form-printer's type; the regular width reads as a confident hand at a single weight.

### Hierarchy
- **Display** (450, clamp(2.5rem, min(5.4vw, 9.4vh), 5.4rem), 1.02, -0.03em): the offer's subject headline only; max 25ch, balanced. Height-capped so the action stays in the first viewport on short laptops (8.3vh under 780px tall).
- **Headline** (Extra Condensed 700, clamp(2rem, 1.4rem + 2vw, 3rem), 0.95, 0.16em tracking, uppercase, print green): sheet titles such as ОФЕРТА and ПРОТОКОЛ.
- **Title** (450, clamp(1.3rem, 1.1rem + 0.6vw, 1.6rem), 1.2): names and key entries in a cell. Larger written leads (about-lead up to 2.4rem, request heading up to 2.9rem, entry-xl up to 3rem) use the same face and weight at tighter tracking.
- **Body** (450, 17px, 16px under 640px, 1.6): running entries; ledes in ink-2 at 1rem to 1.05rem, max 48 to 60ch.
- **Ruled** (450, 1.075rem on a 30px line): multi-line entries that sit on the sheet's own ruling.
- **Label** (Extra Condensed 650, 0.86rem, 0.08em, uppercase, print green): every cell label, column head, option, nav link and button text (buttons at 700, 1.1rem).
- **Serial** (Extra Condensed 600, clamp(1.5rem, 1.2rem + 0.8vw, 1.95rem), 0.12em, tabular figures, serial red): the № number in each sheet head.

### Named Rules
**The One Hand Rule.** Written entries use one weight (450) at every size. Emphasis comes from size and placement, never from bold entries.

**The Printed Caps Rule.** Uppercase with tracking belongs to the print face only. The entry face is never set in caps.

## Layout

A single centred column (max 1240px, gutter clamp(16px, 4vw, 40px)) holding full-width sheets stacked like a pad. Each sheet opens with a sheet head (title and subtitle left; serial, date line and copy marker right) and then one or more printed forms.

The form is a CSS grid with a 1px gap over a rule-coloured background, so the gap draws the inner rules, inside a 2px print-green frame. Cells pad 12px on top, clamp(14px, 2vw, 22px) at the sides and clamp(18px, 2.2vw, 26px) below. Sheets use either named areas on a 7fr / 5fr split (offer, supplier) or a 12-column grid (protocol, request). Tables inside cells inherit the same rule colours: 1px rules between columns, soft rules between rows.

Vertical rhythm comes from the 30px rule: ruled text, the request textarea and its line count (5 rules) all sit on it. Sheets pad clamp(30px, 4vw, 48px) above and clamp(56px, 7vw, 96px) below.

Responsive: at 1080px the domain drops from the nav; at 900px nav links and the search label hide; at 860px every form collapses to a single column (the offer reorders recipient before supplier so the action stays high); at 640px item tables become stacked rows, the portrait shrinks to 100px and the М.П. stamp place moves under the button; at 420px the brand name and icon buttons hide.

## Elevation & Depth

The pad is flat paper. Depth exists only where a physical object sits on the paper: photos and screenshots clipped to a sheet, the sticky nav strip once scrolled, the command slip, and the primary button's slight press shadow. Everything else is ink on paper, separated by rules and paper colour.

### Shadow Vocabulary
- **Print on paper** (`box-shadow: 0 14px 28px -18px rgba(18,44,34,0.55), 0 2px 5px -2px rgba(18,44,34,0.22)`; dark: `0 16px 30px -18px rgba(0,0,0,0.85), 0 2px 6px -2px rgba(0,0,0,0.5)`): attached photos and screenshots, and the command slip.
- **Button press** (`box-shadow: 0 8px 16px -10px` ink at 80%): the primary button at rest; removed on press.
- **Strip lift** (`box-shadow: 0 1px 0` rule, `0 12px 24px -22px rgba(0,0,0,0.45)`): the nav strip after scrolling.
- **Clip drop** (`filter: drop-shadow(0 2px 1.5px rgba(0,0,0,0.28))`): the paperclip only.

### Named Rules
**The Only Objects Cast Shadows Rule.** Cells, sheets, labels and stamps never cast shadows. A shadow means a separate physical object resting on the sheet.

## Shapes

Square paper geometry. Cells, frames, fields, tables and the command slip have no radius. Interactive chrome gets a 2px hairline radius at most (primary button, key button). The circle is reserved for stamp things: the round stamp, the brand monogram and the dashed М.П. stamp place. Attached objects sit slightly off-square: the portrait at -2.2deg, screenshots at -0.6deg (mobile view +1.2deg), stamps between -14deg and +11deg. Dividers are physical: a 1px dotted rule for blank fill-in lines, a double border on rectangular stamps, and a perforation (a row of desk-coloured holes, 14px pitch) between sheets.

## Components

### Buttons
Printed type, carbon fill: the primary action reads like a stamped bar on the form.
- **Shape:** near-square (2px radius), min-height 50px.
- **Primary:** carbon violet fill with sheet-coloured Extra Condensed 700 caps at 1.1rem, 0.08em, with a trailing arrow icon; padding 0 20px 0 22px.
- **Hover / Focus:** fill shifts to stamp violet and lifts 1px; the arrow slides 3px right. Focus uses the global 2px ink outline at 3px offset. Press drops 1px, scales to 0.99 and loses its shadow. Disabled is 60% opacity with a progress cursor.
- **Text link:** print-green Extra Condensed caps with a rule-coloured underline that darkens to ink on hover.
- **Key button:** 34px tall, 1px rule border, 2px radius, print-green caps plus a bordered kbd; turns ink on hover.

### Checkbox Options
- **Style:** a 15px square printed in 1.5px print green beside a print-caps label (0.95rem, 0.07em). Used for language, theme and view switches.
- **State:** when on, a two-stroke pen X (2.2px, round caps, ink) draws in over about 140ms per stroke, the second stroke 100ms later, and the label turns ink. Hover darkens the square to ink.

### Cards / Containers
- **Corner Style:** square (0).
- **Background:** the sheet's paper; attachment areas tint it with 7% print green.
- **Shadow Strategy:** none; see Elevation.
- **Border:** the form's 2px print frame and 1px rule gaps. There are no free-standing cards.
- **Internal Padding:** 12px top, cell-x sides, clamp(18px, 2.2vw, 26px) bottom.

### Inputs / Fields
- **Style:** a written line: transparent ground, no box, 1.5px rule underline, 1.25rem ink text; placeholders in print green at 0.86em. Textareas are ruled on the 30px line with no underline of their own.
- **Focus:** the underline (or every ruled line) turns ink, doubled by a 1.5px ink shadow under inputs.
- **Error / Read-only:** errors turn the underline or rules serial red with a red Extra Condensed message below. Read-only fields use a dotted underline. A carbon-copied value fades from a 16% ink tint over 1.8s.

### Navigation
- **Style:** the pad's binding strip: sticky, 62px (58px under 640px), sheet-coloured, with a 4px print-green top border. Brand is the rotated stamped monogram, the name in ink and the domain in print caps behind a 1px rule.
- **Links:** print-green Extra Condensed caps, 0.08em, turning ink and underlined on hover.
- **Mobile:** links and labels collapse progressively (see Layout); search, language and theme options remain.

### Stamps
- **Round stamp:** SVG; double outer ring (3.2px and 1.1px), inner 1.4px ring, ring text set on a path in Extra Condensed 700, monogram centre at 800. Stamp violet at 90% opacity, multiply blend (screen on the carbon copy), masked with a fractal-noise speckle for uneven ink.
- **Rectangular stamp:** a 5px double border around one or two lines of Extra Condensed caps (main 800 at 1.75rem, sub 700 at 0.8rem); rotated a few degrees.
- **Landing:** 420ms from 1.6x scale and 3px blur, slight 0.97 undershoot, settling at its rotation; plays once on first view and again on a successful send.
- **Stamp place (М.П.):** a 108px dashed rule circle with the printed letters, where the received stamp lands.

### Sheet Head
Title in headline caps with a print subtitle beneath; on the right the red № serial, a dotted date fill line with place label, and a bordered copy marker (1.5px print border, 0.14em caps).

### Command Menu
A quick-access slip: 560px wide, sheet ground, 2px print frame, print-on-paper shadow, entering from a -0.5deg tilt over a 72% desk-tinted overlay. Group labels are print caps; the selected row takes a 10% ink tint.

## Do's and Don'ts

### Do:
- **Do** set every pre-printed element in print green and Sofia Sans Extra Condensed caps, and every written entry in carbon violet Sofia Sans at weight 450.
- **Do** place new content inside the printed form grid: 1px rule gaps, a 2px print frame, square cells.
- **Do** start a new sheet with a sheet head, a new paper colour from original, pink and canary, and a perforation above it.
- **Do** derive rules from print green (48% and 24% mixes), not from greys.
- **Do** sit multi-line written text on the 30px rule.
- **Do** keep the dark theme a one-to-one re-inking of the same roles.
- **Do** keep stamp motion to a single landing, and honour reduced motion by cutting all transitions and animations.

### Don't:
- **Don't** use serial red for anything except the serial and errors.
- **Don't** bold written entries; weight 450 is the only entry weight.
- **Don't** add rounded cards, tinted panels, glows or gradient surfaces; the sheets are flat paper.
- **Don't** give shadows to cells, labels or stamps; only objects resting on the paper cast one.
- **Don't** divide sheets with lines, spacing bands or headers in place of the perforation.
- **Don't** use stamps as ornament; a stamp marks a finished or received thing.
