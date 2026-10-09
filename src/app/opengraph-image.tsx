import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
import { ENTRY, PRINT, og, ogFonts } from "./_og/fonts";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const label = { fontFamily: PRINT, fontSize: 19, letterSpacing: 2, color: og.print, textTransform: "uppercase" as const };

/** The shared-link face: the offer sheet, its subject line and the stamp. */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "40px 56px 48px",
          background: og.sheet,
          borderTop: `8px solid ${og.print}`,
          fontFamily: ENTRY,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 18 }}>
          <div style={{ fontFamily: PRINT, fontSize: 54, letterSpacing: 9, color: og.print, lineHeight: 1 }}>ОФЕРТА</div>
          <div style={{ fontFamily: PRINT, fontSize: 40, letterSpacing: 5, color: og.serial, lineHeight: 1 }}>№ 0000000001</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: 1, border: `3px solid ${og.print}` }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "18px 26px 22px", borderBottom: `1.5px solid ${og.line}` }}>
            <div style={label}>Предмет</div>
            <div style={{ marginTop: 14, fontSize: 62, lineHeight: 1.05, color: og.ink, letterSpacing: -1.6, maxWidth: 900 }}>
              {siteConfig.tagline}
            </div>
          </div>
          <div style={{ display: "flex", height: 150 }}>
            <div style={{ display: "flex", flexDirection: "column", flex: 7, padding: "16px 26px", borderRight: `1.5px solid ${og.line}` }}>
              <div style={label}>Доставчик</div>
              <div style={{ marginTop: 10, fontSize: 36, color: og.ink }}>{siteConfig.nameBg}</div>
              <div style={{ fontSize: 24, color: og.ink, opacity: 0.85 }}>{`${siteConfig.jobTitle} · София`}</div>
            </div>
            <div style={{ display: "flex", flex: 5, padding: "16px 26px", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={label}>Сайт</div>
                <div style={{ marginTop: 10, fontSize: 30, color: og.ink }}>pavelhristov.dev</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 124,
                  height: 124,
                  marginTop: -6,
                  borderRadius: 62,
                  border: `5px solid ${og.stamp}`,
                  transform: "rotate(-12deg)",
                  opacity: 0.88,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 98,
                    height: 98,
                    borderRadius: 49,
                    border: `2px solid ${og.stamp}`,
                    fontFamily: PRINT,
                    fontSize: 46,
                    color: og.stamp,
                  }}
                >
                  PH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() }
  );
}
