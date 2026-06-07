import { siteConfig } from "@/lib/site";

/**
 * Server-rendered JSON-LD (schema.org) so search engines get a rich
 * Person + WebSite description. Rendered once in the root layout.
 */
export function StructuredData() {
  const graph = [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      alternateName: siteConfig.nameBg,
      url: siteConfig.url,
      email: `mailto:${siteConfig.email}`,
      jobTitle: siteConfig.jobTitleEn,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.region,
        addressCountry: siteConfig.location.country,
      },
      knowsAbout: ["React", "Next.js", "Vue", "Nuxt", "TypeScript", "Node.js", "Frontend Engineering", "Web Performance", "Design Systems"],
      sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      inLanguage: ["bg-BG", "en-US"],
      publisher: { "@id": `${siteConfig.url}/#person` },
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
