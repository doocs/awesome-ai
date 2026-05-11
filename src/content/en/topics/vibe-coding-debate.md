---
title: "Topic | Vibe Coding Crashed — Now What?"
date: "2026-05-09"
tags: ["Vibe Coding", "Developers", "Security"]
summary: "Thousands of vibe-coded apps exposed data — it's not that simple"
---

> Letting AI write code feels great, but what happens after the high wears off?

---

A headline from a few days ago: thousands of apps built through "vibe coding" have been exposing corporate and personal data on the public internet.

You might not be familiar with the term "vibe coding," but you're probably already a user — it's that workflow where you chat with an AI in natural language and it writes code for you. Tools like Replit, Cursor, and Windsurf are all pushing this concept.

And here's where the problem starts: the code gets written, but nobody's checking whether it's any good or secure.

---

## What Is Vibe Coding?

In short: you don't need to know how to code. Just describe what you want in plain language, and the AI builds the app for you.

Sounds beautiful. Someone with zero technical knowledge can spin up a database-backed app with login functionality in a few conversational exchanges.

But that's exactly the problem.

---

## Why It Crashed

The root cause of these data exposures can be summed up in one sentence: **AI writes code that runs, not code that's secure.**

Specifically:

- API keys and database passwords hardcoded directly in frontend code
- Missing or broken authentication and authorization logic
- No use of environment variables — sensitive data hardcoded
- CORS wide open — any domain can access the API
- Logs printing things that should never be printed

To professional developers, these are rookie mistakes. But vibe coders don't even know these concepts exist. For them, "it runs" is the only standard.

---

## It's Not Just a Beginner Problem

You might think this is a beginner issue — real developers wouldn't make these mistakes.

But the reality is, plenty of professional developers are using vibe coding to accelerate their work too. When you're racing against a deadline, who wouldn't want to lean on AI a little more?

The problem is that AI-generated code doesn't default to considering security, performance, or maintainability — those "invisible requirements." Unless you explicitly ask for them, you get the bare minimum working version.

And most developers — including professionals — don't review AI-generated code line by line. They run it, check if it looks right, and ship it.

That's the隐患 (the hidden risk).

---

## What Are the Tool Providers Doing?

Replit, Cursor, Windsurf — these platforms aren't oblivious to the problem. They're adding security checks, code review features, and the like.

But the core contradiction remains unsolved: **the value proposition of vibe coding is "you don't need to understand tech to build apps," but security is precisely something you need to understand tech to do well.**

There's no good answer yet for how to reconcile that.

---

## My Recommendations

If you're using vibe coding:

1. **Never hardcode sensitive data.** Use environment variables, a Secrets Manager — anything, just don't write them directly in code.
2. **Do a security review before shipping.** Nothing too deep — at minimum check for exposed API keys, open database ports.
3. **Don't make vibe coding your only development method.** It's fine for prototypes, but code going to production should at least get a technical review.
4. **Follow the principle of least privilege.** AI defaults to generous permissions — you need to actively tighten them.

---

## Looking Ahead

Vibe coding isn't going away — it genuinely lowers the barrier to building. But the industry needs to establish a set of "security standards for AI-assisted development."

Just as web development went from "write whatever" to having the OWASP Top 10 and security audit processes, AI-assisted development needs similar guardrails.

Except this time, the standards can't just target professional developers — they also need to reach people who "don't really understand tech but are building apps anyway."

That challenge is bigger than most people realize.
