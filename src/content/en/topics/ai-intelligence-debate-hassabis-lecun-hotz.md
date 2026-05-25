---
title: "Topic | The Great AI Debate: Hassabis Sees the Singularity, LeCun and Hotz Say the Path Is Wrong"
date: "2026-05-25"
type: "topic"
tags: ["AI Intelligence", "DeepMind", "George Hotz", "Yann LeCun", "AI Coding Agents", "Industry Analysis"]
summary: "At Google I/O 2026, DeepMind founder Hassabis declares humanity is 'in the foothills of the singularity,' while LeCun says current LLMs aren't truly intelligent and George Hotz warns AI coding agents will be 'one of the costliest mistakes in software history' — three voices converge on the deepest divide in AI"
---

> When the brightest minds in AI fundamentally disagree on whether we're approaching AGI, perhaps the biggest question isn't "how smart is AI" — it's "do we actually understand intelligence itself?"

---

In late May 2026, three stories emerged in the AI industry — each powerful enough to shift the narrative on its own. Together, they point to a single, fundamental question: **Is the current AI trajectory a highway to AGI, or a dead end that keeps getting wider?**

At the closing of Google I/O 2026, DeepMind co-founder Demis Hassabis said something that will likely end up in history books — he believes humanity is already **"standing in the foothills of the singularity."** In the same week, Meta's chief AI scientist Yann LeCun posted on LinkedIn to say that current LLMs are not genuine intelligence at all. Meanwhile, renowned programmer George Hotz, after six months of intensive testing of AI coding agents, issued a stark warning.

These three voices come from three of the most influential figures in AI. Their disagreement isn't about whether a product works well — it's about what we're actually building.

---

## Hassabis: "We're in the Foothills of the Singularity"

At the tail end of the Google I/O 2026 keynote (1:50:17), Hassabis made his statement.

He believes AGI is achievable within the next five years, and when it arrives, it will be "the most profound moment for humanity." As co-founder of DeepMind — the company behind AlphaGo and AlphaFold — Hassabis doesn't speak lightly. He's known for his restraint, which makes this historical framing all the more significant.

Importantly, Hassabis isn't speaking into a vacuum. Google just showcased multiple breakthrough capabilities with the Gemini 2.5 family at I/O: ultra-long context understanding, native multimodal reasoning, and deep agent integration across the entire Workspace suite. Gemini co-lead Oriol Vinyals also weighed in at the same event, staking out a middle ground between Hassabis's optimism and LeCun's skepticism.

> **Awesome AI View:** Hassabis's "foothills of the singularity" framing needs to be read in Google's strategic context. Google I/O is the world's largest developer conference, and as a closing keynote speaker, Hassabis's words are both personal conviction and strategic signal. But the key question remains: if AGI really arrives within five years, what does that mean? Hassabis suggests AI capabilities will be 10× what they are today — a number that, if realized, would reshape every industry. The core question is whether the Transformer/LLM-based route actually leads there.

---

## LeCun: "Intelligence Is What You Do When You Don't Know"

In sharp contrast to Hassabis's optimism stands Yann LeCun's position.

The Turing Award laureate and Meta's chief AI scientist published a long post on LinkedIn with a single core argument: **current LLMs are not genuine intelligence.**

LeCun's argument hinges on a paraphrase of psychologist Jean Piaget: "Intelligence is not what you know, it's what you do when you don't know."

In LeCun's view, everything LLMs do is built on the accumulation of massive training data — the "understanding" they display is essentially the reproduction of statistical patterns, not genuine reasoning. When faced with a problem that has never appeared in training data and cannot be solved through statistical inference, LLMs expose a fundamental limitation.

LeCun is actively working on AI architectures that go beyond Transformers. He has argued — even in direct debates with DeepMind researchers — that LLMs are not the right path to child-like learning, which he sees as a prerequisite for true intelligence.

> **Awesome AI View:** LeCun's critique is not new, but it carries unusual weight in the current atmosphere of collective AI enthusiasm. Notably, LeCun is no "AI skeptic" — he's one of the founding figures of deep learning and a Turing Award winner. His criticism comes from inside the industry, from someone who understands the boundaries of AI technology better than most. His core argument — "accumulating knowledge is not intelligence" — points to a question the industry has been eager to ignore: are our high benchmark scores measuring intelligence, or are they measuring memorization?

---

## George Hotz: "AI Coding Agents Will Be One of the Costliest Mistakes"

If LeCun's critique is academic, George Hotz's warning is a field report from the front lines.

The renowned programmer and founder of tinygrad and comma.ai published a blog post titled **"The Eternal Sloptember"** in which he writes: after six months of intensive testing of multiple AI coding models, he has now "joined the LeCun/Marcus camp."

Hotz's findings are specific and pointed: LLMs can rapidly generate prototype code but fall apart entirely during fine-tuning and debugging. They "merely imitate programming patterns statistically," producing code riddled with subtle bugs that are difficult to catch. In his view, this seemingly efficient but actually error-laden development approach will ultimately become "one of the industry's most expensive mistakes."

Hotz's criticism carries weight not just because he's a well-known figure in tech, but because he works with code every day — he isn't evaluating models in a lab, he's testing them in real projects.

> **Awesome AI View:** Hotz's critique hits on a question the industry has been sidestepping: is there a fundamental contradiction between the "speed" and "quality" of code generation? When AI can produce 200 lines of code in 30 seconds, reviewing those 200 lines might take 30 minutes — and if there's a subtle bug hidden inside, the debugging cost could be multiples of what hand-writing the code would have required. But this doesn't mean AI coding agents are useless. A more nuanced assessment might be: they're highly valuable in certain scenarios (prototyping, boilerplate, refactoring suggestions) but blindly trusting them in critical system development is genuinely dangerous.

---

## The Counter-Evidence: Claude Code Discovered a New AI Algorithm

However, the story has another side.

Right around the time Hotz published his post, a different story emerged with an entirely different narrative. A research team from the University of Maryland (UMD), Google, Meta, and other institutions published **AutoTTS** — a study in which they let Claude Code, the coding agent, autonomously search for better AI reasoning control algorithms in a simulated environment.

The result was surprising: Claude Code discovered an algorithm that humans would probably never have designed. This algorithm, applied to test-time scaling (TTS), outperformed human-written methods while burning significantly less compute.

The research team's core idea was this: rather than having researchers manually design control algorithms to decide when a model should start a new solution path, double down on a promising direction, or abandon one, why not let an AI agent search for the optimal strategy itself? They defined a control space based on "width" (how many solution paths run simultaneously) and "depth" (how far each path goes), then let Claude Code explore it autonomously.

> **Awesome AI View:** This story creates an interesting tension with Hotz's critique. Hotz says AI coding agents fall apart during fine-tuning, but Claude Code just surpassed human researchers in algorithmic search — a highly specialized task. This may point to a crucial distinction: **having AI write production code and having AI explore algorithms are fundamentally different tasks.** The former requires precision, maintainability, and understanding of business logic; the latter requires creativity, search capability, and grasp of abstract rules. AI may struggle with the former while excelling at the latter. This doesn't mean Hotz is wrong, nor does it mean AI coding agents are万能 — it means we need a more nuanced understanding of AI's capabilities across different task types.

---

## DeepSeek's Pricing War: When Philosophical Debates Become Price Wars

Beyond this philosophical debate about the nature of AI, a more practical force is reshaping the industry.

DeepSeek announced that its 75% discount on the flagship model DeepSeek V4 Pro is now permanent. Under the new pricing, one million input tokens cost just $0.435, and output tokens cost $0.87. By comparison, GPT-5.5 charges $5 per million input tokens and $30 per million output tokens — **DeepSeek's output pricing is roughly 1/34th of GPT-5.5's.**

What does this mean? It means that even if the LLM route is a "dead end," the dead end is currently hosting the largest price war in human history.

> **Awesome AI View:** Price wars are never proof of technological superiority, but they reshape competitive dynamics. When DeepSeek costs a fraction of OpenAI's price, cost-sensitive applications will migrate en masse — regardless of what LeCun and Hotz say about LLMs' fundamental nature. OpenAI and Anthropic face a difficult choice: cut prices and crush margins, or hold prices and lose market share. Meanwhile, Alibaba released Qwen3.7-Max — a model purpose-built for autonomous agent tasks, capable of running code optimization autonomously for 35 hours straight. Chinese AI companies are attacking on two fronts (low price + autonomous agent capability), redefining the standards of industry competition.

---

## Summary: AI at the Crossroads

Put these five stories together, and you see the AI industry in mid-2026 standing at a delicate crossroads.

Hassabis sees the coming AGI revolution. LeCun sees fundamental flaws in the current trajectory. Hotz sees engineering-level hazards. Claude Code's algorithmic discovery shows the potential of AI autonomous research. And DeepSeek's price war proves that regardless of how the philosophical debate plays out, market competition has already entered a white-hot phase.

Perhaps the most accurate assessment is this: **we're neither on a straight road to AGI nor in a dead end.** We're in a phase that demands a rethinking of what "intelligence" means. LLM capabilities are real — Claude Code discovering a new algorithm is the best proof — but their limitations are equally real, as both Hotz's field report and LeCun's theoretical critique point in the same direction.

Future breakthroughs may not come from "bigger LLMs" but from "different architectures" — precisely the direction LeCun has been pursuing. But until new architectures mature, LLM-based tools will continue to evolve in practical applications.

This isn't a black-and-white question. It's an ongoing, profound conversation — conducted by the brightest minds in the field — about what exactly we're building.
