# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: owners and managers of Bulgarian businesses, typically small and mid-size companies with an online store or website that already exists but is slow, dated, or hurting sales. They reach the site from search, a referral, or a shared link, mostly read in Bulgarian, and are deciding whether Pavel is the person to hire. They are not engineers; tech names reassure them but do not persuade them.

Secondary: English-speaking visitors (served by the EN toggle). They are a courtesy audience, not the lead.

## Product Purpose

The personal portfolio of Pavel Hristov (Павел Христов), a frontend engineer based in Sofia. Its job is to convince a Bulgarian business owner that Pavel can make their existing web product faster and better, then get them to send an inquiry through the contact form or by email. Success means qualified inquiries.

## Positioning

Pavel fixes what you already have. He rebuilds the slow, dated frontend of an existing store or site and leaves the working backend intact, so the business keeps its infrastructure, data, and operations and gets speed, UX, SEO, and a smoother checkout. The proof is Omekotitel.bg: a Magento store whose frontend was replaced while Magento stayed.

## Operating Context

- Single-page site. Bulgarian is the default; the site switches to English when the visitor is detectably outside Bulgaria with no Bulgarian browser locale, and a stored choice always wins.
- Dark/light theme toggle (⌘J), a ⌘K command menu, the contact form via Web3Forms (`NEXT_PUBLIC_WEB3FORMS_KEY`), Vercel Analytics, SEO metadata, JSON-LD, and generated OG/icon images.

## Capabilities and Constraints

- Next.js 16 (app router), React 19, TypeScript, Tailwind v4 plus global CSS. Static assets in `/public`. All copy lives in the typed bilingual dictionary `src/lib/content.ts`.
- Every visible string must exist in both BG and EN.
- Vitest and Playwright suites rely on `data-testid` hooks (project cards, filters, hero CTAs).
- Experience and Writing section components exist in code but are not rendered; they hold placeholder content.

## Brand Commitments

- Name: Pavel Hristov / Павел Христов. Domain: pavelhristov.dev. Monogram: PH.
- Portrait: `public/assets/pavel.webp`, a stylized "digital code / pixel dissolve" treatment of Pavel's face. The user chose to keep this image as is.
- Voice: first person, direct, outcome-focused. Speak about the business's problem before the tech.
- The site must not read as hacker/tech-bro (neon, matrix code, terminal cosplay) or as a faceless corporate agency (stock polish, "we deliver solutions").

## Evidence on Hand

- **Real, confirmed:** the Omekotitel.bg project: problem/solution write-up, Revolut payments integration, live at https://omekotitel.bg, with screenshots `public/projects/omekotitel-desk.webp` and `public/projects/omekotitel-mob.webp`.
- **Confirmed claim:** 5+ years of experience.
- **Pavel's own copy:** the About narrative (SoftUni, then IT Talents, then a SaaS team in the insurance industry) and the four principles.
- **Not confirmed, never display:** work-history entries (Omekoitel, Northwind Labs, Brightpath Studio) and their metrics; the stat counters (40+ projects, 15 technologies, 99% Lighthouse); the technical scores (99/100/100, 30% smaller bundles, 90% test coverage); the three blog posts; the "thousands of people use every day" line.
- **Absent, never invent:** testimonials, client logos, pricing, or before/after performance numbers for Omekotitel.

## Product Principles

1. Proof over claims. One real case, shown properly, outweighs any number of counters.
2. Bulgarian first. Write for a business owner in Sofia or Plovdiv, not a tech recruiter.
3. Outcomes before tools. Speed, sales, findability, and checkout come first; the stack is a footnote.
4. The site is itself evidence. It has to be fast, accessible, and carefully built.
5. Contact is always one step away.
