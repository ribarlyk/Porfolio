import type { MetadataRoute } from "next";
import { siteConfig, siteSections } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: siteConfig.url,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: {
        bg: siteConfig.url,
        en: siteConfig.url,
      },
    },
  };

  // The site is a single page; expose its section anchors so crawlers can
  // surface deep links to the individual sections.
  const sections: MetadataRoute.Sitemap = siteSections.map((section) => ({
    url: `${siteConfig.url}/#${section}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [home, ...sections];
}
