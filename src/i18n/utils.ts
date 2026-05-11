import zh from "./zh.json" assert { type: "json" };
import en from "./en.json" assert { type: "json" };

const dictionaries = {
  zh,
  en,
};

export const locales = ["zh", "en"] as const;
export const defaultLocale = "zh" as const;

export function getLocaleFromUrl(url: URL): "zh" | "en" {
  const path = url.pathname;
  if (path.startsWith("/en")) return "en";
  return "zh";
}

export function t(key: string, locale: "zh" | "en" = "zh"): string {
  const keys = key.split(".");
  let value: any = dictionaries[locale];
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      // Fallback to zh
      let fallback: any = dictionaries.zh;
      for (const fk of keys) {
        if (fallback && typeof fallback === "object" && fk in fallback) {
          fallback = fallback[fk];
        } else {
          return key;
        }
      }
      return fallback;
    }
  }
  return typeof value === "string" ? value : key;
}
