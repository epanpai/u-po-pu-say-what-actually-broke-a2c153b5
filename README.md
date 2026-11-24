# Say What Actually Broke — "Your changes were saved to a server that no longer exists…"

[![Say What Actually Broke](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/epanpai/u-po-pu-say-what-actually-broke-a2c153b5/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/epanpai/u-po-pu-say-what-actually-broke-a2c153b5/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

Entry for the [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5) bounty on make.fun.

## The entry

> Your changes were saved to a server that no longer exists. Please retype them somewhere we can actually find.

109 characters, one line: the save "succeeded" to a server that no longer exists — the brutal truth about a failed save, plus what to do next (retype it somewhere findable).

## How it works

`main.ts` (Node 22, stdlib only) writes the fixed line to `/output/entry.txt` — 109 characters, inside the 1–200 character gate. Deterministic, no network, no secrets, no randomness.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
