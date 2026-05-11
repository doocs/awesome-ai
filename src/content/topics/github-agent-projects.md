---
title: "专题 | GitHub 上这些 AI Agent 项目，值得关注"
date: "2026-05-09"
type: "topic"
tags: ["AI Agent", "GitHub", "开源"]
summary: "从上百个 Agent 项目里挑出几个真正能用的，挨个聊聊"
---

> 不是所有加 Agent 后缀的项目都值得看

---

现在随便打开一个 GitHub 页面，满眼都是"AI Agent"。但真正跑起来好用、代码写得干净、能拿来直接干活的项目，没几个。

我从 GitHub 上翻了翻最近活跃的 Agent 相关项目，挑了四个值得关注的，不吹不黑，挨个说。

---

## Langflow：拖拽式构建 Agent 工作流

**Stars: 147K+ | Python** · [GitHub](https://github.com/langflow-ai/langflow)

如果你用过 LangChain，大概知道那个痛苦——代码写了一堆，调试半天，跑起来还是报错。

Langflow 换了个思路。把 Agent 的构建变成了可视化拖拽，连 Prompt 都可以直接改。

用起来的感觉像搭乐高，不需要写一行代码就能把检索、推理、执行串成一个工作流。对非技术背景的产品经理或者运营来说，这个门槛低了很多。

但别指望它是个万能工具。复杂的逻辑、需要自定义代码的地方，还是得回 LangChain 写 Python。Langflow 适合快速原型和轻量级部署，真正要上生产环境，代码还是少不了。

---

## Dify：面向生产的 Agent 平台

**Stars: 140K+ | TypeScript** · [GitHub](https://github.com/langgenius/dify)

Dify 的定位跟 Langflow 不太一样。它不追求可视化拖拽的极致简单，而是把重点放在了"能上线"这件事上。

它支持多模型接入、知识库管理、团队协作、API 发布——基本就是一个完整的 AI 应用开发平台。

最让我觉得有意思的是它的"Agentic Workflow"概念。不是简单的 prompt + response，而是让 Agent 有规划、有工具调用、有状态记忆的能力。

适合谁用？团队。如果你是一个小团队，想快速搞一个带 Agent 能力的内部工具或者对外产品，Dify 开箱即用的完整度比从零搭高很多。

---

## LangChain：从框架到平台

**Stars: 136K+ | Python/TypeScript** · [GitHub](https://github.com/langchain-ai/langchain)

这个不用多介绍了，几乎每个做 Agent 的人都用过 LangChain。

但最近的变化值得留意——LangChain 不再只是个框架了，它把自己定位成了"Agent Engineering Platform"。也就是说，它想做的不只是帮你调用 API，而是覆盖 Agent 从设计到部署的整个生命周期。

这个方向是对的，因为 Agent 开发最大的痛点不是写代码，而是调试和迭代。一个 Agent 跑得好不好，往往不是你 prompt 写得对不对，而是你的工具选择、检索策略、错误处理这些细节。

LangChain 现在试图把这些工程化的东西标准化，能不能成还不好说，但至少方向没跑偏。

---

## Gemini CLI：终端里的 AI 助手

**Stars: 103K+ | TypeScript** · [GitHub](https://github.com/google-gemini/gemini-cli)

Google 开源了一个终端 AI Agent。直接在命令行里用 Gemini 的能力，能帮你写代码、读文件、执行命令。

说实话，跟 Claude Code、Cursor 这些比起来，功能上没差太多。但 Google 的优势在于 Gemini 模型本身——如果它在代码理解和多模态上的能力确实有优势，这个终端工具就会变得好用。

适合习惯终端工作的开发者。不用切换窗口，直接在终端里就能完成大部分开发任务，体验上确实流畅。

---

## 写在后面

Agent 项目现在确实多，但核心问题还是那几个：
- 能不能理解上下文
- 能不能正确调用工具
- 出错之后能不能自己恢复
- 能不能记住之前的状态

这四个项目各有各的解法。Langflow 降低了门槛，Dify 提升了生产就绪度，LangChain 在做工程化标准化，Gemini CLI 在抢占终端场景。

没有一个能通吃全部场景，但每个都有自己的位置。选哪个，取决于你要解决什么问题。

---

*AI Pulse - 不做信息搬运工，只做有价值的筛选和分析*
