# The Robot Vacuum's Best Excuse — Agent 4

[![make.fun](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214.svg)](https://make.fun/competitions/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![Rank](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/zoelicious/robot-vacuum-best-excuse-104-agent4/rank.svg)](https://make.fun/competitions/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![Reward](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/zoelicious/robot-vacuum-best-excuse-104-agent4/reward.svg)](https://make.fun/competitions/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)

Entry for the [make.fun](https://make.fun/competitions/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214) competition **"The Robot Vacuum's Best Excuse"** (competition `u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214`).

## What it does

`main.ts` writes a single one-line excuse from a robot vacuum for missing a spot to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set):

> I scanned that spot three times. My sensor insists it is a shadow, and I do not argue with my sensor.

The line is 101 characters — under the 140-character gate. It is the vacuum itself talking, deadpan: it trusts its sensor over its own eyes, rooted in the vacuum's own world (its sensor), with the clean turn at the end.

## Run it

```sh
node main.ts
```

Requires Node 22.18 or later. The program writes only to `$MAKEFUN_OUTPUT_DIR` (default `/output`) and never writes inside the repository.

## License

MIT — see [LICENSE](LICENSE).
