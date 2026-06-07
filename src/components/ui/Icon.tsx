"use client";

import React from "react";

export const ICON_PATHS: Record<string, string> = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  arrowUpRight: "M7 17 17 7M8 7h9v9",
  github: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
  linkedin: "M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4V8Z",
  x: "M18.9 2H22l-7.1 8.1L23.2 22h-6.5l-5.1-6.6L5.8 22H2.6l7.6-8.7L1.2 2h6.6l4.6 6.1L18.9 2Zm-1.1 18h1.8L7.3 3.9H5.4L17.8 20Z",
  mail: "M3 6h18v12H3V6Zm0 0 9 7 9-7",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM21 21l-4.3-4.3",
  sun: "M12 4V2M12 22v-2M4 12H2M22 12h-2M6 6 4.5 4.5M19.5 19.5 18 18M18 6l1.5-1.5M4.5 19.5 6 18M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
  moon: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z",
  layout: "M3 4h18v16H3V4Zm0 6h18M9 10v10",
  server: "M4 4h16v6H4V4Zm0 10h16v6H4v-6ZM7 7h.01M7 17h.01",
  cloud: "M7 18a4 4 0 0 1 .5-7.97A5.5 5.5 0 0 1 18 9.5a3.5 3.5 0 0 1-.5 8.5H7Z",
  database: "M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3ZM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  grid: "M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm11 0h7v7h-7v-7Z",
  spark: "M12 3v4M12 17v4M3 12h4M17 12h4M12 12l-3-3M12 12l3 3M12 12l3-3M12 12l-3 3",
  command: "M6 9V6a3 3 0 1 1 3 3H6Zm0 0h3v6H6a3 3 0 1 0 3-3M18 9V6a3 3 0 1 0-3 3h3Zm0 0h-3v6h3a3 3 0 1 1-3-3",
  home: "M3 11l9-8 9 8M5 10v10h14V10",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0",
  brief: "M4 7h16v13H4V7Zm5 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",
  folder: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z",
  pen: "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z",
  copy: "M9 9h11v11H9V9Zm-4 6H4V4h11v1",
  check: "M20 6 9 17l-5-5",
  external: "M14 4h6v6M20 4l-9 9M19 14v5H5V5h5",
  monitor: "M3 4h18v12H3V4Zm6 16h6M12 16v4",
  phone: "M7 2h10v20H7V2Zm4 17h2",
};

const FILLED = new Set(["github", "linkedin", "x"]);

export function Icon({ name, style }: { name: string; style?: React.CSSProperties }) {
  const filled = FILLED.has(name);
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}
