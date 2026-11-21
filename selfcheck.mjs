import { readFileSync } from "node:fs";
const s = readFileSync("main.ts", "utf8");
const m = s.match(/const TEXT =[\s\S]*?;\n\nconst dir/);
if (!m) throw new Error("TEXT block not found");
const TEXT = m[0]
  .replace("const TEXT =", "")
  .replace(/;\n\nconst dir$/, "")
  .split(" +\n")
  .map((p) => p.trim().replace(/^`/, "").replace(/`$/, ""))
  .join("");
const cps = [...TEXT].length;
console.assert(cps >= 1 && cps <= 280, `over 280 code points: ${cps}`);
console.assert(TEXT.trim().length > 0, "blank");
console.assert(!TEXT.includes("\\"), "escape in text");
console.log(`ok: ${cps} code points, ${TEXT.split("\n").length} lines`);
