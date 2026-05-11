/**
 * Shared content extraction utilities.
 * Used by listing pages to generate Card data from Astro content files.
 */

/** Extract first meaningful paragraph from Markdown body. */
export function extractSummary(content: string): string {
  const lines = content.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed &&
      !trimmed.startsWith("#") &&
      !trimmed.startsWith("-") &&
      !trimmed.startsWith(">") &&
      !trimmed.startsWith("---") &&
      !trimmed.startsWith("*") &&
      trimmed.length > 20
    ) {
      return trimmed.length > 140 ? trimmed.substring(0, 140) + "..." : trimmed;
    }
  }
  return "";
}

/** Extract topic tags by matching keywords in content body. */
export function extractTags(
  content: string,
  tagMap: Record<string, string[]>,
): string[] {
  const tags: string[] = [];
  const lower = content.toLowerCase();
  for (const [tag, keywords] of Object.entries(tagMap)) {
    if (keywords.some((kw) => lower.includes(kw))) {
      tags.push(tag);
    }
    if (tags.length >= 4) break;
  }
  if (tags.length === 0) tags.push("AI");
  return tags;
}

/** Chinese date formatter: "2026-05-11" → "2026 年 5 月 11 日" */
export function formatDateCn(dateStr: string): string {
  const parts = dateStr.split("-");
  return `${parts[0]} 年 ${parseInt(parts[1])} 月 ${parseInt(parts[2])} 日`;
}

/** Weekly date formatter: "2026-w19" → "2026 年第 19 周" */
export function formatWeekDate(dateStr: string): string {
  return dateStr.replace("-w", " 年第 ") + " 周";
}

/** English weekly formatter: "2026-w19" → "2026 Week 19" */
export function formatWeekDateEn(dateStr: string): string {
  return dateStr.replace("-w", " Week ") + "";
}

/** Default tag map for Chinese content. */
export const TAG_MAP_ZH: Record<string, string[]> = {
  openai: ["openai", "gpt"],
  Google: ["google", "deepmind", "gemini"],
  Anthropic: ["anthropic", "claude"],
  百度: ["百度", "文心"],
  DeepSeek: ["deepseek"],
  字节: ["字节", "tiktok"],
  NVIDIA: ["英伟达", "nvidia"],
  机器人: ["机器人", "robot"],
  "AI 视频": ["视频", "veo"],
  融资: ["融资"],
  Agent: ["agent", "智能体"],
};

/** Default tag map for English content (includes CN keyword aliases). */
export const TAG_MAP_EN: Record<string, string[]> = {
  OpenAI: ["openai", "gpt"],
  Google: ["google", "deepmind", "gemini"],
  Anthropic: ["anthropic", "claude"],
  Baidu: ["baidu", "ernie", "文心"],
  DeepSeek: ["deepseek"],
  ByteDance: ["bytedance", "tiktok", "字节"],
  NVIDIA: ["nvidia", "英伟达"],
  Robotics: ["robot", "机器人"],
  "AI Video": ["video", "veo", "视频"],
  Funding: ["funding", "融资"],
  Agent: ["agent", "智能体"],
};
