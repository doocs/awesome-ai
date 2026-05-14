# 🤖 Awesome AI Agent Guide

本文档旨在指导 AI Agent 如何规范、安全地为 **Awesome AI** 项目生成内容、执行更新和部署。

## 📋 项目概览
- **仓库**: `doocs/awesome-ai`
- **线上地址**: https://ai.doocs.org
- **技术栈**: Astro + Tailwind CSS
- **核心策略**: **严格双语同步** (中文/英文)，所有核心内容更新必须包含双语版本。

## 📁 项目结构
```text
awesome-ai/
├── src/
│   ├── content/              # 📂 中文内容源文件
│   │   ├── daily/            # 日报 (文件名: YYYY-MM-DD.md)
│   │   ├── weekly/           # 周报 (文件名: YYYY-wWW.md)
│   │   ├── topics/           # 专题深度讨论
│   │   ├── tools/            # 工具推荐分类
│   │   └── models/           # 模型排行榜分类
│   ├── content/en/           # 📂 英文内容源文件 (结构对应中文)
│   ├── pages/                # Astro 路由页面
│   ├── components/           # UI 组件
│   └── i18n/                 # 国际化翻译字典 (zh.json / en.json)
├── public/                   # 📂 静态资源 (⚠️ 包含关键文件: CNAME)
├── scripts/                  # 🔧 部署脚本 (deploy_ai_pulse.py)
├── README.md                 # 📖 项目介绍 (中文)
└── README_EN.md              # 📖 项目介绍 (英文)
```

## 📝 内容生成规范 (CRITICAL)

### 1. Frontmatter 格式红线 ⚠️
所有 Markdown 文件的 Frontmatter **必须**严格符合 `src/content/config.ts` 中的 Schema 定义。

- **致命错误**：`date` 字段**必须加双引号**！
  - ✅ `date: "2026-05-11"` (正确)
  - ❌ `date: 2026-05-11` (会导致 Astro 构建失败)

**标准模板：**
```yaml
---
title: "Awesome AI 日报 | 2026-05-11"
date: "2026-05-11"
tags: ["Tag1", "Tag2"]
summary: "简短总结..."
---
```

### 2. 标题与排版统一规范 ⭐️
所有生成的 Markdown 文件在标题层级（Heading levels）上必须保持高度统一。

**📄 日报 (Daily) 模板:**
- 不使用 `## 今日要闻` 等包裹标题，直接以 `## 1.` 开始。
- 每条新闻使用 `##` (H2) 作为标题。
- 观点部分使用引用块 `> **Awesome AI 观点：**`。
```markdown
## 1. 新闻标题
新闻内容段落...
> **Awesome AI 观点：** 观点内容...

## 2. 新闻标题
新闻内容段落...

## 其他动态
- **公司/人物** 动态详情
```

**📰 周报 (Weekly) 模板:**
- 开头使用一个 `#` (H1) 作为本期主标题。
- 每个独立板块使用 `##` (H2)。
```markdown
# 本周聚焦：核心主题一句话概括

简介段落...

## 板块一标题
内容...

## 板块二标题
内容...
```

**💡 专题 (Topics) 模板:**
- 不使用 `#` (H1)，所有内容区块使用 `##` (H2)。
```markdown
> 引导语/核心观点引用

## 板块一标题
内容...
```

### 3. 内容质量
- **观点输出**：每条资讯/工具推荐后需包含 `> **Awesome AI 观点/View:**`，提供深度分析，拒绝简单堆砌。
- **双语一致**：英文版内容需适配英文语境，保持专业度。
- **🔴 绝对禁止编造新闻**：所有新闻必须来自真实可验证的来源。如果无法搜索到真实新闻，宁可跳过更新也不发布虚假内容。

## 🔄 更新与部署流程

### Step 1: 生成与验证
1. 在 `src/content/` 和 `src/content/en/` 生成对应的双语 Markdown 文件。
2. 运行本地验证：`npm run build`。**只有构建成功 (Exit 0) 的文件才允许提交。**

### Step 2: 部署推送
使用 `scripts/deploy_ai_pulse.py` 推送文件。
```bash
# 推送中文
python3 scripts/deploy_ai_pulse.py src/content/daily/YYYY-MM-DD.md "docs: add daily news YYYY-MM-DD"

# 推送英文
python3 scripts/deploy_ai_pulse.py src/content/en/daily/YYYY-MM-DD.md "docs: add daily news EN YYYY-MM-DD"
```

## 🔒 安全与敏感信息规范
1. **Token 保密**：
   - 部署脚本 (`deploy_ai_pulse.py`) 会从环境文件读取 Token。**Agent 在执行脚本时，绝不能在日志、回复或输出中打印 Token 的值。**
   - 若遇到认证失败，仅提示 "Authentication failed" 或 "Check token validity"。
2. **禁止硬编码**：
   - 永远不要将 Token 硬编码在生成的脚本代码或 Markdown 内容中。
   - 仓库根目录或 `public/` 下禁止出现 `.env` 或包含密钥的临时文件。

## 🚀 Git Commit 规范
遵循 [Conventional Commits](https://www.conventionalcommits.org/)：

| Type | 场景 | 示例 |
|:---|:---|:---|
| `docs` | 日报、周报、专题文章、README | `docs: add daily news 2026-05-11` |
| `feat` | 新功能 (页面、组件) | `feat: add dark mode toggle` |
| `fix` | 修复错误 (格式、链接、代码) | `fix: correct date format in daily news` |
| `chore` | 构建配置、CNAME、依赖 | `chore: update CNAME to ai.doocs.org` |
| `refactor` | 代码重构 (无功能变动) | `refactor: optimize image loading` |
