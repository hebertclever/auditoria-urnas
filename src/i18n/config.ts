export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}

export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en" };
export const intlLocale: Record<Locale, string> = { pt: "pt-BR", en: "en-US" };

/** Localized string pair. Every user-facing text in data modules uses this. */
export type L = { pt: string; en: string };
export const t = (l: L, lang: Locale): string => l[lang];
