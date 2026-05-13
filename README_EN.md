# Awesome AI

> Extracting real signals from the noise of AI news

**Website:** [https://ai.doocs.org/](https://ai.doocs.org/)

Awesome AI is a static site that curates and publishes AI industry news daily and weekly, with bilingual support (Chinese and English). It also features AI tool recommendations and global model leaderboards with auto-updated data.

## Content Types

| Type | Description | Frequency |
|------|-------------|-----------|
| **Daily** | 3-5 curated AI stories, concise with analysis | Twice daily (08:00 / 22:00 CST) |
| **Weekly** | Weekly roundup with in-depth commentary | Every Sunday 20:00 CST |
| **Discussions** | Feature articles on AI industry topics | Irregular |
| **Rankings** | AI tool recommendations + model leaderboards | Auto-updated weekly |

## AI Rankings

### Tool Recommendations

Top 20 AI tools curated across 7 categories:

| Category | Link |
|----------|------|
| Coding | [/ai/tools/coding](https://ai.doocs.org/ai/tools/coding) |
| Writing | [/ai/tools/writing](https://ai.doocs.org/ai/tools/writing) |
| Design | [/ai/tools/design](https://ai.doocs.org/ai/tools/design) |
| Video | [/ai/tools/video](https://ai.doocs.org/ai/tools/video) |
| Audio | [/ai/tools/audio](https://ai.doocs.org/ai/tools/audio) |
| Data | [/ai/tools/data](https://ai.doocs.org/ai/tools/data) |
| Agent | [/ai/tools/agent](https://ai.doocs.org/ai/tools/agent) |

### Model Leaderboards

Top 20 global model rankings across 4 dimensions:

| Leaderboard | Benchmarks | Link |
|-------------|------------|------|
| Arena | LMSYS Chatbot Arena, MMLU-Pro, IFEval | [/ai/models/arena](https://ai.doocs.org/ai/models/arena) |
| Coding | SWE-bench Verified, BigCodeBench, LiveCodeBench | [/ai/models/coding](https://ai.doocs.org/ai/models/coding) |
| Reasoning | AIME, GPQA Diamond, LiveBench | [/ai/models/reasoning](https://ai.doocs.org/ai/models/reasoning) |
| Multimodal | MMMU, MathVista, MMBench | [/ai/models/multimodal](https://ai.doocs.org/ai/models/multimodal) |

## i18n

Available in **Chinese** and **English**.

| Language | README | Website |
|----------|--------|---------|
| Chinese | [README.md](./README.md) | [ai.doocs.org](https://ai.doocs.org/) |
| English | [README_EN.md](./README_EN.md) | [ai.doocs.org/en/](https://ai.doocs.org/en/) |

## Project Structure

Static site built with Astro + Tailwind CSS. All pages are generated at build time -- zero runtime dependencies.

```
src/
├── content/                    # Chinese content
│   ├── daily/                  # Daily digests (YYYY-MM-DD.md)
│   ├── weekly/                 # Weekly digests (YYYY-wXX.md)
│   ├── topics/                 # Topic articles
│   ├── tools/                  # AI tool recommendations (7 categories)
│   └── models/                 # AI model leaderboards (4 dimensions)
├── content/en/                 # English content (same structure)
│   ├── daily/
│   ├── weekly/
│   ├── topics/
│   ├── tools/
│   └── models/
├── components/                 # Reusable Astro components
│   ├── Card.astro
│   ├── Footer.astro
│   └── NavBar.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/                      # Route definitions
│   ├── index.astro             # Homepage
│   ├── search.astro            # Search page
│   ├── ai/                     # Rankings (tools + models)
│   ├── daily/                  # Daily archive
│   ├── weekly/                 # Weekly archive
│   ├── industry/               # Industry news
│   ├── topics/                 # Discussions
│   └── en/                     # English mirror of above
├── i18n/                       # i18n strings (zh.json, en.json, utils.ts)
└── styles/
    └── global.css              # Tailwind + custom prose styles
```

## Follow Us

### WeChat Official Account

Scan to follow and get daily AI news curated for you:

![WeChat Official Account QR](./src/assets/wechat-qrcode.jpg)

### Add Author on WeChat

Scan to add the author's personal WeChat for English-speaking community:

![Author WeChat](./src/assets/wechat-qr-en.jpg)
