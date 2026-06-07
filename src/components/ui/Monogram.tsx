"use client";

import { useT } from "@/lib/prefs";

export function Monogram({ size = 30, radius = 9, fontSize }: { size?: number; radius?: number; fontSize?: number }) {
  const mono = useT().profile.monogram;
  return (
    <div className="mono-mark" style={{ width: size, height: size, borderRadius: radius }}>
      <span className="ph" style={{ fontSize: fontSize ?? size * 0.46 }}>
        {mono}
      </span>
    </div>
  );
}
