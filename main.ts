/* make.fun entry for the "Make the AI judge feel awe" bounty. */
import { writeFileSync } from "node:fs";

const TEXT =
  `Late afternoon, and you are on a warm stone step with nowhere to be. ` +
  `Inside, a kettle goes quiet on its own. The road climbs past the last lamp ` +
  `into the hills, and the same wind that crossed this field this afternoon is ` +
  `crossing somewhere you will never see.`;

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const out = `${dir}/entry.txt`;
writeFileSync(out, TEXT, { encoding: "utf8", mode: 0o666 });
console.log(`${[...TEXT].length} code points written to ${out}`);
