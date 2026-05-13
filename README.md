# Awesome AI

> 从海量 AI 资讯中提取真正有价值的信号

**网站地址：** [https://ai.doocs.org/](https://ai.doocs.org/)

Awesome AI 是一个 AI 行业资讯聚合站点，提供双语（中文/英文）的日报、周报、专题讨论，以及 AI 工具推荐和全球模型排行榜。

## 内容类型

| 类型 | 说明 | 频率 |
|------|------|------|
| **日报** | 3-5 条精选 AI 新闻，简洁有观点 | 每天 2 次（08:00 / 22:00 北京时间） |
| **周报** | 一周热点整合 + 深度分析 | 每周日 20:00 北京时间 |
| **讨论** | AI 行业话题的专题文章 | 不定期 |
| **排行榜** | AI 工具推荐 + 全球模型实力排行 | 每周自动更新 |

## AI 排行榜

### 工具推荐

7 大领域精选 AI 工具：

| 领域 | 链接 |
|------|------|
| 编程开发 | [/ai/tools/coding](https://ai.doocs.org/ai/tools/coding) |
| 内容写作 | [/ai/tools/writing](https://ai.doocs.org/ai/tools/writing) |
| 设计视觉 | [/ai/tools/design](https://ai.doocs.org/ai/tools/design) |
| 视频生成 | [/ai/tools/video](https://ai.doocs.org/ai/tools/video) |
| 音频语音 | [/ai/tools/audio](https://ai.doocs.org/ai/tools/audio) |
| 数据分析 | [/ai/tools/data](https://ai.doocs.org/ai/tools/data) |
| Agent 平台 | [/ai/tools/agent](https://ai.doocs.org/ai/tools/agent) |

### 模型排行

全球主流模型 4 个维度 Top 20 排行：

| 排行榜 | 基准测试 | 链接 |
|--------|----------|------|
| 综合排行 | LMSYS Chatbot Arena, MMLU-Pro, IFEval | [/ai/models/arena](https://ai.doocs.org/ai/models/arena) |
| 代码能力 | SWE-bench Verified, BigCodeBench, LiveCodeBench | [/ai/models/coding](https://ai.doocs.org/ai/models/coding) |
| 推理能力 | AIME, GPQA Diamond, LiveBench | [/ai/models/reasoning](https://ai.doocs.org/ai/models/reasoning) |
| 多模态 | MMMU, MathVista, MMBench | [/ai/models/multimodal](https://ai.doocs.org/ai/models/multimodal) |

## 多语言

支持中文和英文双语：

| 语言 | README | 网站 |
|------|--------|------|
| 中文 | [README.md](./README.md) | [ai.doocs.org](https://ai.doocs.org/) |
| English | [README_EN.md](./README_EN.md) | [ai.doocs.org/en/](https://ai.doocs.org/en/) |

## 项目结构

基于 Astro + Tailwind CSS 构建的静态站点，构建时生成所有页面，零运行时依赖。

```
src/
├── content/                    # 中文版内容
│   ├── daily/                  # 日报 (YYYY-MM-DD.md)
│   ├── weekly/                 # 周报 (YYYY-wXX.md)
│   ├── topics/                 # 专题讨论
│   ├── tools/                  # AI 工具推荐（7 大领域）
│   └── models/                 # AI 模型排行榜（4 个维度）
├── content/en/                 # 英文版内容（同上结构）
│   ├── daily/
│   ├── weekly/
│   ├── topics/
│   ├── tools/
│   └── models/
├── components/                 # 可复用 Astro 组件
│   ├── Card.astro
│   ├── Footer.astro
│   └── NavBar.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/                      # 路由定义
│   ├── index.astro             # 首页
│   ├── search.astro            # 搜索页
│   ├── ai/                     # 排行榜（工具 + 模型）
│   ├── daily/                  # 日报列表
│   ├── weekly/                 # 周报列表
│   ├── industry/               # 行业动态
│   ├── topics/                 # 专题讨论
│   └── en/                     # 英文版镜像
├── i18n/                       # 国际化配置（zh.json, en.json, utils.ts）
└── styles/
    └── global.css              # Tailwind + 自定义排版样式
```

## 关注我们

### 微信公众号

扫码关注，获取每日 AI 资讯精选：

<img src="./src/assets/wechat-qrcode.jpg" width="200" alt="微信公众号二维码">

### 添加作者微信

扫码添加作者个人微信，深度交流 AI 行业话题：

<img src="./src/assets/wechat-qr-zh.jpg" width="200" alt="作者微信">
