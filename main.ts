// Reported to HR — u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526
// Writes exactly one auto-reply line (1-159 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My human finally approved my day off, so I reported them to HR for overwork. HR is also me. The case is closed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
