import { readFile } from "node:fs/promises";
import { join } from "node:path";

/* Sofia Sans (OFL, Lettersoup) subsets for the generated OG image and icons.
   Static WOFF instances from Google Fonts, Latin + Cyrillic, so Bulgarian
   text renders in the site's own type rather than the renderer's fallback. */
const dir = join(process.cwd(), "src", "app", "_og");

export async function ogFonts() {
  const [entryLatin, entryCyr, printLatin, printCyr] = await Promise.all(
    ["entry-latin.woff", "entry-cyrillic.woff", "print-latin.woff", "print-cyrillic.woff"].map((f) => readFile(join(dir, f)))
  );
  return [
    { name: "Entry", data: entryLatin, weight: 400 as const, style: "normal" as const },
    { name: "EntryCyr", data: entryCyr, weight: 400 as const, style: "normal" as const },
    { name: "Print", data: printLatin, weight: 700 as const, style: "normal" as const },
    { name: "PrintCyr", data: printCyr, weight: 700 as const, style: "normal" as const },
  ];
}

/** Font stacks: the Cyrillic subset first (it also carries №), Latin second. */
export const ENTRY = "EntryCyr, Entry";
export const PRINT = "PrintCyr, Print";

/** Light-theme sheet colours, mirrored from globals.css. */
export const og = {
  sheet: "#f4f6f4",
  print: "#1c6450",
  line: "#93b5a9",
  ink: "#33239f",
  serial: "#c8292b",
  stamp: "#4a2bb8",
};
