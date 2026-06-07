import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(900px 600px at 12% -10%, rgba(40,52,138,0.55), transparent 60%), radial-gradient(700px 500px at 100% 110%, rgba(90,108,224,0.35), transparent 55%), #08090b",
          color: "#ededee",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 84,
              height: 84,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.04em",
              background: "linear-gradient(150deg, #1c2150, #28348A)",
              borderRadius: 20,
            }}
          >
            PH
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.02em" }}>{siteConfig.name}</div>
            <div style={{ fontSize: 24, color: "#8e9bf2" }}>{siteConfig.jobTitle}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 66, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 960 }}>
            {siteConfig.tagline}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#82858e" }}>
          <span>React</span>
          <span>·</span>
          <span>Next.js</span>
          <span>·</span>
          <span>Vue</span>
          <span>·</span>
          <span>Nuxt</span>
          <span>·</span>
          <span>TypeScript</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
