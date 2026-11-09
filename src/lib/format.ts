import { intlLocale, type Locale } from "@/i18n/config";

export function makeFormatters(lang: Locale) {
  const loc = intlLocale[lang];
  const plain = new Intl.NumberFormat(loc);
  const compact = new Intl.NumberFormat(loc, { notation: "compact", maximumFractionDigits: 1 });

  const fmt = (n: number) => plain.format(n);
  const fmtCompact = (n: number) => compact.format(n);
  const fmtPct = (n: number, digits = 1, signed = false) => {
    const s = n.toLocaleString(loc, { minimumFractionDigits: digits, maximumFractionDigits: digits });
    return (signed && n > 0 ? "+" : "") + s + "%";
  };
  const fmtX = (n: number, digits = 1) =>
    n.toLocaleString(loc, { minimumFractionDigits: digits, maximumFractionDigits: digits }) + "×";
  const fmtInt = (n: number) => plain.format(Math.round(n));

  return { loc, fmt, fmtCompact, fmtPct, fmtX, fmtInt };
}

export type Formatters = ReturnType<typeof makeFormatters>;

/** Chaves de formatação serializáveis — passáveis de server para client components. */
export type StatFormat = "int" | "compact" | "dec1" | "pct0" | "pct1" | "x0" | "x1";

export function applyFormat(f: Formatters, key: StatFormat | undefined, n: number): string {
  switch (key) {
    case "compact": return f.fmtCompact(n);
    case "dec1": return n.toLocaleString(f.loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    case "pct0": return f.fmtPct(n, 0);
    case "pct1": return f.fmtPct(n, 1);
    case "x0": return f.fmtX(n, 0);
    case "x1": return f.fmtX(n, 1);
    case "int":
    default: return f.fmtInt(n);
  }
}
