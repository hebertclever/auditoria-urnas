import type { Locale } from "../config";
import { common } from "./common";
import { home } from "./home";
import { cadastro } from "./cadastro";
import { codigo } from "./codigo";
import { dados } from "./dados";
import { metodo } from "./metodo";
import { dashboard } from "./dashboard";
import { slides } from "./slides";
import { provas } from "./provas";
import { parlamentar } from "./parlamentar";

export function getDictionary(lang: Locale) {
  return {
    common: common[lang],
    home: home[lang],
    cadastro: cadastro[lang],
    codigo: codigo[lang],
    dados: dados[lang],
    metodo: metodo[lang],
    dashboard: dashboard[lang],
    slides: slides[lang],
    provas: provas[lang],
    parlamentar: parlamentar[lang],
  };
}

export type Dictionary = ReturnType<typeof getDictionary>;
