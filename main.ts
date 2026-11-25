// Reported to HR — u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526
// Writes exactly one auto-reply line (1-159 chars) to /output/entry.txt.
// The gate check mirrors the sealed scorer: the line must be UTF-8 text of
// 1 to 159 characters and not only whitespace, or the program fails loudly
// instead of submitting an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My human finally approved my day off, so I reported them to HR for overwork. HR is also me. The case is closed.";

if (LINE.length < 1 || LINE.length > 159 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-159 non-blank characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
