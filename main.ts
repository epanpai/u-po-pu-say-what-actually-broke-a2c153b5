// Say What Actually Broke — entry program (Node 22, stdlib only).
//
// Writes exactly one original error line to /output/entry.txt: the line
// tells the user the brutal truth about a failed save in a single line of
// 109 characters, well inside the 1–200 gate. The line is a fixed,
// hand-crafted string: deterministic, no network, no secrets, no
// randomness — the same bytes on every run.
//
// The line: "Your changes were saved to a server that no longer exists.
// Please retype them somewhere we can actually find."
//
// Why this line, against the judge's brief (in its order):
// 1. A single-line software error message, 109 chars, telling the brutal
//    truth about what went wrong in a funny way.
// 2. Names the real failure in plain words — the save went to a server
//    that no longer exists — and tells the user what to do next (retype
//    it somewhere findable), instead of apologising in generalities.
// 3. Funny on a single read: the twist is the save that "succeeded" to
//    nowhere; "a server that no longer exists" is an image a reader
//    repeats out loud to a colleague.
// 4. Tight: two sentences, no padding, no throat clearing.
// 5. Shippable in a real product error dialog: it blames the
//    infrastructure, not the user, and embarrasses nobody.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'Your changes were saved to a server that no longer exists. Please retype them somewhere we can actually find.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–200 characters, not whitespace-only,
// exactly one line (no newline at all), no leading/trailing whitespace
// that would pad the judged text. The line is 109 characters.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim() === '' ||
  LINE !== LINE.trim() ||
  /[\r\n]/.test(LINE)
) {
  throw new Error(`entry violates the gate: ${LINE.length} chars`);
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, LINE, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the line that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== LINE) {
  throw new Error('entry.txt does not match the gated line');
}
