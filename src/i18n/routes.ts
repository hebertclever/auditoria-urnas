import type { Route } from "next";
import type { Locale } from "./config";

/** Prefixa um caminho interno com o locale. Função pura — pode ser usada em server e client components. */
export function href(lang: Locale, path: string): Route {
  return `/${lang}${path}` as Route;
}
