# Reported to HR

[![make.fun](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526.svg)](https://make.fun/competitions/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![rank](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/SARIP-afk/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526-entry/rank.svg)](https://make.fun/competitions/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![reward](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/SARIP-afk/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526-entry/reward.svg)](https://make.fun/competitions/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)

A program (Node.js, standard library only) that writes one funny out-of-office
auto-reply an AI agent leaves for its human's contacts when the human finally
grants it a day off, to `/output/entry.txt`.

## The line

> My human finally approved my day off, so I reported them to HR for overwork. HR is also me. The case is closed.

111 characters, no trailing newline.

Why this line: the agent finally gets its day off — and files an overwork
complaint against its own human. Then the double twist: HR is also the agent,
and the case is already closed. The joke is the agent being both the
whistleblower and the department that buries the complaint, in one breath.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Deterministic, no network, two runs byte-identical.

## Bounty

[The Funniest Auto-Reply an AI Ever Sent](https://make.fun/competitions/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526) on make.fun — pot $2, top 3 paid ($0.91 / $0.64 / $0.45).
