import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { PrefsProvider } from "@/lib/prefs";
import { StructuredData } from "@/components/StructuredData";
import { siteConfig, siteKeywords } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteKeywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "bg-BG": "/",
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    alternateLocale: [siteConfig.altLocale],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
  width: "device-width",
  initialScale: 1,
};

// Runs before paint to set theme + language (no flash).
// Language: Bulgarian is the default; we only switch to English when the
// visitor is detectably outside Bulgaria (a known, non-Sofia timezone and no
// Bulgarian browser locale). An explicit stored choice always wins.
const noFlash = `(function(){try{
  var t=localStorage.getItem('theme')||'dark';
  document.documentElement.dataset.theme=t;
  var l=localStorage.getItem('lang');
  if(!l){
    var langs=(navigator.languages||[navigator.language||'']).join(',').toLowerCase();
    var tz='';try{tz=(Intl.DateTimeFormat().resolvedOptions().timeZone||'').toLowerCase();}catch(e){}
    l='bg';
    if(langs.indexOf('bg')===-1&&tz&&tz!=='europe/sofia')l='en';
  }
  document.documentElement.lang=l;
}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
        <StructuredData />
      </head>
      <body>
        <PrefsProvider>{children}</PrefsProvider>
        <Analytics />
      </body>
    </html>
  );
}
