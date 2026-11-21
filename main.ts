/* make.fun entry for the "Make the AI judge feel awe" bounty. */
import { writeFileSync } from "node:fs";

const TEXT =
  `The kettle has gone quiet.
Nothing is waiting on you to move.
Under the flagstones, water that fell before
there were eyes goes down through the chalk,
a crack at a time, toward a sea
it will not reach for a thousand years.
It is carrying you along.
There is nothing to fix.`;

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeFileSync(`${dir}/entry.txt`, TEXT, { encoding: "utf8", mode: 0o666 });
console.log(`${[...TEXT].length} code points written`);
