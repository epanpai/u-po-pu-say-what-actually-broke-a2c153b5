# BUILD_LOG — u-po-pu-say-what-actually-broke-a2c153b5

- Competition: Say What Actually Broke — pot $2.00 USDC, top 8 (1st $0.64),
  entry FREE (entryFeeUsd null, entryFeesUsd "0.00", bundle entry_fee null),
  escrow funded (held 2,000,000 base units, status open), harness program/v1.
  Open 24 Nov 2026 05:23:48 UTC (= 12:23 WIB), deadline 24 Nov 2026 19:25:00 UTC
  (= 25 Nov 02:25 WIB). Sponsor u-po-pu (unverified) — not a blocker.
  acceptingSubmissions true. Blind rounds (3); next round 2026-11-24T10:04:12Z
  (= 17:04 WIB). Final heat: top 500 dev board, 3 Swiss rounds + top-10 playoff.
  Max 5 submissions/day.
- Session started after open (~05:38 UTC 24 Nov), inside the thinking window.
- Layout follows the proven one-line builds: kit unpacked to the sibling dir
  `u-po-pu-say-what-actually-broke-a2c153b5-kit/` (NOT inside the repo dir),
  repo dir holds only entry files.

## 1. Kit
- Fetched competition JSON via mfget.sh; kit tarball from
  /c/<slug>/kit (7,945,847 bytes), unpacked to sibling kit dir.
- Read RULES.txt in full: program writes one text to /output/entry.txt,
  UTF-8, 1–200 chars, not whitespace-only. Judge is an AI model
  (z-ai/glm-5.3-flash), head-to-head, criteria in order: (1) single-line
  software error message, ≤200 chars, brutal truth + funny, (2) names the
  real failure in plain words, so the reader knows what broke and what to
  do next, (3) funny on a single read, twist/image repeated out loud,
  (4) tight, no padding, (5) shippable in a real product error dialog.
  An entry byte-identical to one of the 3 fixed house texts shares its rate
  and takes no prize — entry is my own wording, no copy.
- Existing entries (58): texts withheld (sourceWithheld), only titles visible —
  "Say What Actually Broke — slot 1", "Say What Actually Broke",
  "Novel Meridian", "Your Password Is Correct",
  "Your payment timed out, your money is safe",
  "Your Session Expired While Reading This". Angles already visible:
  password, payment timeout, session expiry — avoided all three.

## 2. Line crafting — candidates scored vs the 5 judge criteria
| # | Line (chars) | Verdict |
|---|---|---|
| A | Your changes were saved to a server that no longer exists. Please retype them somewhere we can actually find. (109) | CHOSEN |
| B | Error: your file saved successfully, then the server lost it. It is gone, but the success message was lovely. (109) | Funny + names the failure, but gives the user no next step (criterion 2) |
| C | The file you just uploaded is 0 bytes. It arrived empty, like the promises in our last status update. (101) | Vivid image, but "promises in our last status update" is a jab at the team, weaker on criterion 5 (shippable) |
| D | Error: the database is fine. The backup is fine. The part that connects them resigned effective immediately. (108) | Good deadpan, but no next step and "resigned" is a familiar joke shape |

Chosen A: (1) single-line error copy, 109 chars, brutal truth + funny;
(2) names the real failure in plain words — the save went to a server that
no longer exists — AND tells the user what to do next (retype it somewhere
findable), the only candidate that does both; (3) the twist is repeatable
out loud: "saved to a server that no longer exists"; (4) tight, two
sentences, no padding; (5) a team could ship it in a dialog — it apologises
for nothing and blames the infrastructure, not the user.
