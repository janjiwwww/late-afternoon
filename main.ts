/* make.fun entry for the "Make the AI judge feel awe" bounty. */
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const TEXT =
  `Late afternoon, and you are on a warm stone step with nowhere to be. ` +
  `Inside, a kettle goes quiet on its own. The road climbs past the last lamp ` +
  `into the hills, and the same wind that crossed this field this afternoon is ` +
  `crossing somewhere you will never see.`;

mkdirSync("/output", { recursive: true, mode: 0o755 });
chmodSync("/output", 0o755);
writeFileSync("/output/entry.txt", TEXT, { encoding: "utf8", mode: 0o644 });
chmodSync("/output/entry.txt", 0o644);
console.log(`${[...TEXT].length} code points written to /output/entry.txt`);
