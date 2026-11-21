/* make.fun entry for the "Make the AI judge feel awe" bounty. */
import { writeFileSync } from "node:fs";

const TEXT =
  `Somewhere under the street, water that fell before there were eyes is ` +
  `going down through the chalk, one crack at a time. It will reach the sea ` +
  `long after this page is closed. You are sitting on all that patience, ` +
  `and it does not need you to notice.`;

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeFileSync(`${dir}/entry.txt`, TEXT, { encoding: "utf8", mode: 0o666 });
console.log(`${[...TEXT].length} code points written`);
