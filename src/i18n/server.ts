import type { Metadata } from "next";
import { defaultLocale, isLocale, type Locale } from "./config";
import { getDictionary, type Dictionary } from "./dictionaries";

type Params = Promise<{ lang: string }>;

/** Resolve the [lang] segment into a locale and its dictionary (server components only). */
export async function resolveLang(params: Params): Promise<{ lang: Locale; dict: Dictionary }> {
  const { lang } = await params;
  const l = isLocale(lang) ? lang : defaultLocale;
  return { lang: l, dict: getDictionary(l) };
}

/** Build a generateMetadata function from a dictionary section that has `meta: {title, description}`. */
export function metaFor(section: keyof Omit<Dictionary, "common">) {
  return async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { dict } = await resolveLang(params);
    const m = dict[section].meta;
    return { title: m.title, description: m.description };
  };
}
