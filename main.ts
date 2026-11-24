import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
// Entry for "The Robot Vacuum's Best Excuse": the vacuum trusts its sensor
// over its own eyes — a deadpan machine excuse, rooted in its sensor world.
const excuse = "I scanned that spot three times. My sensor insists it is a shadow, and I do not argue with my sensor.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (!existsSync(outDir)) { mkdirSync(outDir, { recursive: true }); }
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
