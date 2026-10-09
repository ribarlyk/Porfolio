import { ImageResponse } from "next/og";
import { PRINT, og, ogFonts } from "./_og/fonts";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon: the round PH stamp on the original sheet. */
export default async function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: og.sheet, borderRadius: 14 }}>
        <div
          style={{
            width: 54,
            height: 54,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 27,
            border: `4px solid ${og.stamp}`,
            transform: "rotate(-10deg)",
            fontFamily: PRINT,
            fontSize: 27,
            color: og.stamp,
          }}
        >
          PH
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() }
  );
}
