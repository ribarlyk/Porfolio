/* ============================================================
   Single source of truth for site-wide SEO / identity values.
   Used by metadata, robots, sitemap, manifest and JSON-LD.
   ============================================================ */

export const siteConfig = {
  url: "https://pavelhristov.dev",
  name: "Pavel Hristov",
  nameBg: "Павел Христов",
  title: "Pavel Hristov — Опитен Frontend инженер",
  jobTitle: "Опитен Frontend инженер",
  jobTitleEn: "Experienced Frontend Engineer",
  description:
    "Pavel Hristov (Павел Христов) — опитен Frontend инженер и Full-Stack продуктов разработчик. Изграждам бързи, мащабируеми уеб приложения с React, Next.js, Vue и Nuxt.",
  tagline: "Изграждам бързи, мащабируеми уеб продукти, които носят реално бизнес въздействие.",
  locale: "bg_BG",
  altLocale: "en_US",
  email: "hristov.pavel@zohomail.eu",
  // Web3Forms access key — create one (free) at https://web3forms.com using
  // hristov.pavel@zohomail.eu, then set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local.
  contactFormKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
  location: { city: "Sofia", region: "Sofia", country: "BG" },
  ogImage: "/opengraph-image",
  social: {
    github: "https://github.com/ribarlyk",
    linkedin: "https://www.linkedin.com/in/pavel-hristov-1bb75822b",
  },
} as const;

/** Section anchors that make up the single-page site (for the sitemap). */
export const siteSections = ["about", "skills", "projects", "excellence", "contact"] as const;

export const siteKeywords = [
  "Pavel Hristov",
  "Павел Христов",
  "Frontend инженер",
  "Frontend Engineer",
  "Full-Stack разработчик",
  "уеб разработчик",
  "React",
  "Next.js",
  "Vue",
  "Nuxt",
  "TypeScript",
  "София",
  "България",
];
