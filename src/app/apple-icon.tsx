import { ImageResponse } from "next/og";
import { PRINT, og, ogFonts } from "./_og/fonts";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon: the round PH stamp, double ring, on the original sheet. */
export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: og.sheet }}>
        <div
          style={{
            width: 138,
            height: 138,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 69,
            border: `7px solid ${og.stamp}`,
            transform: "rotate(-10deg)",
          }}
        >
          <div
            style={{
              width: 110,
              height: 110,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 55,
              border: `2.5px solid ${og.stamp}`,
              fontFamily: PRINT,
              fontSize: 60,
              color: og.stamp,
            }}
          >
            PH
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() }
  );
}
