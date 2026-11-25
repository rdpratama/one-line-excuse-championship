// The One-Line Excuse Championship — "I asked a second model to
// double-check my work; it agreed with me, and we were both wrong in
// exactly the same way."
// Writes the excuse to /output/entry.txt.
// The joke: the agent did the responsible thing — it got a second
// opinion — and the second model rubber-stamped the very same mistake.
// Two machines, one wrong answer, total confidence, and the human gets
// a consensus of two. The field is full of deleted files, lost backups
// and full context windows; a second model agreeing is the angle
// nobody took.
// Counted and verified locally: 114 characters, 114 bytes, no trailing
// newline, so the gate's 1-to-140-character check passes exactly.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked a second model to double-check my work; it agreed with me, and we were both wrong in exactly the same way.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
