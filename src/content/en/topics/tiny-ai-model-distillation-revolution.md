---
title: "Topic | Needle Distills Gemini 3.1 into a 26M Model — The 'Tiny AI' Era Is Here"
date: "2026-05-14"
type: "topic"
tags: ["Model Distillation", "Tiny AI", "Gemini", "Local AI", "Open Source", "Industry Analysis"]
summary: "Cactus Compute distills Gemini 3.1's tool calling into a 26M-parameter Simple Attention Network, earning 675 points on HN. Alongside Anthropic's Claude for Small Business and OpenAI's Codex Windows sandbox plus DeployCo launch, the industry is witnessing a shift toward lightweight, accessible AI running on consumer devices"
---

> When a 26M-parameter model can handle tool calling, and distillation makes powerful AI runnable on consumer devices, "Tiny AI" is no longer a buzzword — it's an ongoing paradigm shift.

---

## Needle: Distilling Gemini 3.1 Down to 26M

Cactus Compute released **Needle**, an open-source project that distills Gemini 3.1's tool calling capability into a model with just **26 million parameters**. To put this in perspective: it's an order of magnitude smaller than the smallest open-source coding models, small enough to run on phones, smartwatches, and even smart glasses.

Needle uses Cactus Compute's own **Simple Attention Network** architecture — an experimental attention design. It consists of 12 encoder layers and 8 decoder layers, using GQA+RoPE, cross-attention mechanisms, but notably removing the traditional FFN (Feed-Forward Network), drastically cutting parameter count.

Performance-wise, Needle achieves **6,000 toks/sec prefill** and **1,200 toks/sec decode** on the Cactus inference engine. On single-shot function calling, it outperforms FunctionGemma-270M, Qwen-0.6B, and Granite-350M — all specifically designed small models.

Training efficiency is equally remarkable: pre-training on 16 TPU v6e chips for 200B tokens took just 27 hours. Post-training on a 2B-token single-shot function calling dataset took 45 minutes. Weights and dataset generation code are fully open-sourced.

> **Awesome AI View:** Needle's significance isn't that it replaces Gemini — it falls far short on conversational abilities compared to models with hundreds of billions of parameters. Its significance lies in proving a critical thesis: specific tasks don't need general-purpose large models. For tool calling, 26M parameters is enough. This means every consumer device could ship with a dedicated "AI tool calling engine" built in — no internet, no cloud inference, no subscription fees. This is the moment "on-device AI" transitions from concept to reality.

---

## Tiny AI: From "Bigger Is Better" to "Just Right"

Needle is not an isolated case. Over recent months, the AI industry has shown a clear trend shift:

**Model distillation is accelerating.** Beyond Needle, Google's FunctionGemma, Meta's distilled Llama variants, and Alibaba's TinyLLM series are all validating the same direction: compressing large model capabilities on specific tasks into smaller models that perform near-par on those tasks.

**Consumer devices are the new battleground.** Apple's M4 chip with 24GB unified memory, Qualcomm's Snapdragon X Elite NPU, MediaTek's Dimensity 9400 on-device LLM inference — chipmakers are paving the way for local AI. A 26M model like Needle means AI features can ship pre-installed in phones, watches, and earbuds, without depending on cloud APIs.

**The open-source community is redefining "good enough."** When a 26M model handles tool calling and a 14B model (like NousCoder-14B) handles most coding tasks, the question of "how big is big enough" is being answered differently. For most use cases, a "good enough" small model is more practical, cheaper, and more private than an "omnipotent" large one.

> **Awesome AI View:** "Tiny AI" isn't replacing large models — it's complementing them. Future AI architectures will likely be layered: cloud large models handle complex reasoning and creative tasks, while on-device small models handle high-frequency, low-latency specialized tasks. The critical inflection point is this — when on-device models cross a capability threshold (like Needle reaching usable tool calling), many cloud-dependent scenarios migrate local. Once that migration starts, it creates a self-reinforcing flywheel: more local scenarios → more local data → better local models → more local scenarios.

---

## Anthropic's Small Business Strategy

Around the same time as Needle's release, Anthropic announced **Claude for Small Business** — a package of connectors and ready-to-run workflows that embed Claude directly into the tools small businesses use daily.

The pricing and positioning are noteworthy. This isn't custom deployment for enterprises, nor a personal subscription. It targets a long-overlooked market: businesses that need AI capabilities but lack dedicated IT teams.

> **Awesome AI View:** Anthropic's small business strategy and Needle's Tiny AI may seem like opposite directions, but they point to the same trend — AI is transitioning from "exclusive tool for tech companies and enterprises" to "infrastructure everyone can use." Anthropic achieves this by lowering the usage barrier (pre-built workflows, connectors), while open-source small models like Needle lower the deployment barrier (local runtime, zero cost). Both routes eventually converge: small businesses need both easy-to-use cloud AI services and lightweight local AI capabilities.

---

## OpenAI's Codex Expansion and DeployCo

Meanwhile, OpenAI is also making aggressive moves:

**Codex arrives on Windows.** OpenAI published its sandbox solution for running Codex safely on Windows. Codex — OpenAI's AI coding agent — is no longer limited to macOS and Linux. Given Windows' dominance in the desktop market, this is a significant expansion.

**DeployCo launched.** OpenAI announced the formation of Deployment Company (DeployCo), dedicated to helping businesses build and deploy AI-powered workflows. This marks OpenAI's shift from "providing model APIs" to "delivering end-to-end enterprise solutions."

> **Awesome AI View:** OpenAI's moves and Needle's Tiny AI may seem like opposite strategies — OpenAI is making AI "heavier" (enterprise deployment, sandboxing, end-to-end solutions), while Needle is making AI "lighter" (26M parameters, local runtime, zero deployment cost). But these routes aren't contradictory. Enterprises need controlled, secure, auditable AI deployment (OpenAI's approach), while individual developers and consumer devices need lightweight, low-cost, plug-and-play AI (Needle's approach). The AI industry in 2026 is expanding in both directions simultaneously, squeezing the "general cloud service" middle ground from both sides.

---

## Summary: Three Paradigm Shifts in AI for 2026

Taken together, these stories reveal three simultaneous paradigm shifts in the AI industry:

1. **From "bigger is better" to "just right"** — Needle proves 26M parameters can handle tool calling. Model distillation is breaking the assumption that "only large models are useful."

2. **From "cloud-exclusive" to "local-first"** — Consumer chip NPUs combined with mature lightweight models make local AI a viable product strategy, not just a hacker toy.

3. **From "tech giant exclusive" to "accessible to all"** — Whether it's Anthropic's small business product, OpenAI's DeployCo, or Needle's open-source distillation, AI capability is being pushed to broader user bases.

These aren't four separate stories. They represent an industry redefining AI's value proposition: it's no longer about the strongest model winning — it's about the most appropriate model winning.
