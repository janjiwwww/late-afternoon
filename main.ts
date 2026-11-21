/* make.fun entry for the "Make the AI judge feel awe" bounty. */
import { writeFileSync } from "node:fs";

const TEXT =
  `Your mother is washing the last plates.
She hums, and does not send you to bed.

Under the yard that same water is going on
without her, down through the chalk,
a crack at a time, toward a sea
it will not reach for a thousand years.

You are asleep before the tap stops.`;

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeFileSync(`${dir}/entry.txt`, TEXT, { encoding: "utf8", mode: 0o666 });
console.log(`${[...TEXT].length} code points written`);
