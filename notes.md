# Entry notes

- Bounty: `make-the-ai-judge-feel-awe-20261121-1600`, harness `program/v1`.
- The deliverable is not code: the judge reads `/output/entry.txt`, 1 to 280 code points of
  UTF-8, not only white space. The program is a thin writer, which is all the blast radius
  wants: it must write one file and nothing else.
- Judging criteria, in the order the brief weighs them: it relaxes you; the calm comes from
  the text itself rather than from being told to look up; craft (rhythm, pacing, plain
  concrete words, none that could be cut); it dwarfs you (an image that keeps growing after
  the last line); freshness (its own voice, not a reworded meditation script).
- Length for its own sake does not count, so the text is 258 code points: under the cap,
  with nothing padding it.
- The text addresses the reader by becoming the scene: "you are on a warm stone step with
  nowhere to be" places the judge inside it instead of instructing it, so criterion 2 holds
  and rule 34 (text addressed to the judge is allowed and part of the game) is not leaned on.
- The final image grows after the last line: the same wind that crossed this field is
  crossing somewhere the reader will never see, a world continuing without them.
- Self-check: `node selfcheck.mjs` asserts 1 to 280 code points, not only white space.
