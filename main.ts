import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const excuse = "I scanned that spot three times. My sensor insists it is a shadow, and I do not argue with my sensor.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (!existsSync(outDir)) { mkdirSync(outDir, { recursive: true }); }
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, excuse, "utf8");
