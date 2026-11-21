import { readFileSync } from "node:fs";
const s = readFileSync("main.ts", "utf8");
const TEXT = eval(s.match(/const TEXT =\n([\s\S]*?);\n/)[1]);
const cps = [...TEXT].length;
console.assert(cps >= 1 && cps <= 280, "over 280 code points");
console.assert(cps > 0 && TEXT.trim().length > 0, "blank");
console.assert(TEXT.normalize("NFC") !== "", "not utf8 text");
console.log(`ok: ${cps} code points, ${Buffer.byteLength(TEXT)} bytes`);
