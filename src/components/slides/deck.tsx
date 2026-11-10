"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { useLang } from "@/i18n/context";
import { SourceTag, type Tier } from "@/components/ui/source-tag";
import { cn } from "@/lib/utils";
import { visuals } from "./visuals";

// Fontes reais por slide (tier + url). Rótulo vem do dicionário (traduzido).
const SRC: Record<string, { tier: Tier; url: string }[]> = {
  "centenarios-choque": [
    { tier: "T0", url: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2026" },
    { tier: "T0", url: "https://sidra.ibge.gov.br/tabela/9514" },
  ],
  "centenarios-razao": [
    { tier: "T0", url: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2026" },
    { tier: "T0", url: "https://sidra.ibge.gov.br/tabela/9514" },
  ],
  "centenarios-mundo": [{ tier: "T1", url: "https://population.un.org/wpp/" }],
  inversao: [{ tier: "T0", url: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2022" }],
  historico: [{ tier: "T0", url: "https://dadosabertos.tse.jus.br/dataset/comparecimento-e-abstencao-2022" }],
  capacidade: [{ tier: "T0", url: "https://sidra.ibge.gov.br/tabela/8375" }],
  limpeza: [{ tier: "T0", url: "https://www.tse.jus.br/comunicacao/noticias/2023/Maio/justica-eleitoral-cancelou-quase-800-mil-titulos-em-2022" }],
  municipios: [{ tier: "T0", url: "https://sidra.ibge.gov.br/tabela/6579" }],
  gaps: [{ tier: "T0", url: "https://dadosabertos.tse.jus.br/dataset/resultados-2026-arquivos-transmitidos-para-totalizacao" }],
  moedas: [{ tier: "T0", url: "https://dadosabertos.tse.jus.br/dataset/resultados-2026-arquivos-transmitidos-para-totalizacao" }],
  banco: [{ tier: "T0", url: "https://www.gov.br/defesa/pt-br/acesso-a-informacao/atuacao-das-forcas-armadas-em-apoio-ao-tse-no-aprimoramento-da-seguranca-e-transparencia-do-processo-eleitoral/documentos/oficio-do-ministro-da-defesa-e-relatorio-das-forcas-armadas.pdf" }],
};

const FULL = new Set(["capa", "fecho"]);

export function Deck() {
  const { dict } = useLang();
  const d = dict.slides;
  const u = d.ui;
  const slides = d.deck;
  const n = slides.length;
  const reduced = useReducedMotion();

  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [tech, setTech] = useState(false);
  const hydrated = useRef(false);

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(n - 1, next));
      setDir(clamped >= i ? 1 : -1);
      setI(clamped);
      try {
        history.replaceState(null, "", `#s-${clamped + 1}`);
      } catch {}
    },
    [i, n],
  );

  // hash → index (once on mount + on manual hash change)
  useEffect(() => {
    const read = () => {
      const m = /^#s-(\d+)$/.exec(location.hash);
      if (m) {
        const idx = parseInt(m[1], 10) - 1;
        if (idx >= 0 && idx < n) setI(idx);
      }
      hydrated.current = true;
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, [n]);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); go(i + 1); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); go(i - 1); }
      else if (e.key === "Home") { e.preventDefault(); go(0); }
      else if (e.key === "End") { e.preventDefault(); go(n - 1); }
      else if (e.key === "t" || e.key === "T") setTech((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, i, n]);

  // swipe
  const down = useRef<number | null>(null);
  const onPointerDown = (e: React.PointerEvent) => { down.current = e.clientX; };
  const onPointerUp = (e: React.PointerEvent) => {
    if (down.current == null) return;
    const dx = e.clientX - down.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? i + 1 : i - 1);
    down.current = null;
  };

  const s = slides[i];
  const Visual = visuals[s.id];
  const full = FULL.has(s.id);
  const sources = SRC[s.id];
  const offset = reduced ? 0 : 40;

  return (
    <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col px-5 pb-6 sm:px-8">
      {/* progress */}
      <div className="sticky top-16 z-10 -mx-5 h-0.5 bg-bg-sunk sm:-mx-8">
        <motion.div className="h-full bg-amber" animate={{ width: `${((i + 1) / n) * 100}%` }} transition={{ ease: [0.22, 1, 0.36, 1] }} />
      </div>

      {/* top controls */}
      <div className="flex items-center justify-between py-4">
        <span className="font-mono text-xs tabular text-fg-3">
          {String(i + 1).padStart(2, "0")} <span className="text-fg-3/60">{u.of}</span> {n}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTech((v) => !v)}
            aria-pressed={tech}
            className={cn(
              "rounded-full border px-3 py-1.5 font-mono text-[0.7rem] font-semibold uppercase tracking-wider transition",
              tech ? "border-teal/50 bg-teal-soft text-teal" : "border-line text-fg-2 hover:border-line-strong hover:text-fg",
            )}
          >
            {tech ? dict.common.ui.modoTecnico : dict.common.ui.modoLeigo} · T
          </button>
          {i > 0 && (
            <button type="button" onClick={() => go(0)} aria-label={u.restart} className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-fg-3 transition hover:text-fg">
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* stage */}
      <div className="relative flex flex-1 items-center" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
        {/* side arrows (desktop) */}
        <button type="button" onClick={() => go(i - 1)} disabled={i === 0} aria-label={u.prev}
          className="absolute left-0 z-10 hidden h-11 w-11 -translate-x-2 items-center justify-center rounded-full border border-line bg-bg-elev text-fg-2 transition hover:border-line-strong hover:text-fg disabled:opacity-0 lg:flex">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button type="button" onClick={() => go(i + 1)} disabled={i === n - 1} aria-label={u.next}
          className="absolute right-0 z-10 hidden h-11 w-11 translate-x-2 items-center justify-center rounded-full border border-line bg-bg-elev text-fg-2 transition hover:border-line-strong hover:text-fg disabled:opacity-0 lg:flex">
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="w-full py-4 lg:px-12">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={s.id}
              custom={dir}
              initial={{ opacity: 0, x: dir * offset }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -offset }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "grid items-center gap-8",
                full ? "place-items-center text-center" : "lg:grid-cols-[1.05fr_0.95fr]",
              )}
            >
              {/* text */}
              <div className={cn(full ? "max-w-2xl" : "order-2 lg:order-1")}>
                <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-amber">{s.eyebrow}</p>
                <h2 className={cn("display mt-3 font-semibold", full ? "text-[clamp(2rem,6vw,3.6rem)]" : "text-[clamp(1.7rem,4vw,2.9rem)]")}>{s.title}</h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-fg-2 sm:text-lg">{s.lead}</p>
                {s.takeaway && (
                  <div className={cn("mt-6 rounded-xl border-l-2 border-amber bg-amber-soft px-4 py-3", full && "mx-auto inline-block text-left")}>
                    <p className="font-mono text-[0.6rem] uppercase tracking-widest text-amber">{u.takeawayLabel}</p>
                    <p className="mt-1 text-[0.95rem] font-medium text-fg">{s.takeaway}</p>
                  </div>
                )}
              </div>

              {/* visual */}
              <div className={cn("flex items-center justify-center", full ? "mt-2" : "order-1 lg:order-2")}>
                {Visual ? <Visual active key={s.id + i} tech={tech} /> : null}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* tech footer */}
          <AnimatePresence>
            {tech && (s.calc || sources) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 overflow-hidden"
              >
                <div className="rounded-xl border border-teal/30 bg-teal-soft/40 p-4">
                  {s.calc && (
                    <>
                      <p className="font-mono text-[0.6rem] uppercase tracking-widest text-teal">{u.calcLabel}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-fg-2">{s.calc}</p>
                    </>
                  )}
                  {sources && (
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                      {sources.map((src, k) => (
                        <SourceTag key={k} tier={src.tier} source={s.fonte.split(" · ")[k] ?? s.fonte} href={src.url} />
                      ))}
                    </div>
                  )}
                  {!sources && s.fonte && <p className="mt-3 text-xs text-fg-3">{s.fonte}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* dots + mobile arrows */}
      <div className="flex items-center justify-between gap-4 pt-4">
        <button type="button" onClick={() => go(i - 1)} disabled={i === 0} aria-label={u.prev}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg-2 transition hover:text-fg disabled:opacity-30 lg:hidden">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="no-scrollbar flex flex-1 items-center justify-center gap-1.5 overflow-x-auto">
          {slides.map((sl, k) => (
            <button key={sl.id} type="button" onClick={() => go(k)} aria-label={`${u.goTo} ${k + 1}`}
              className={cn("h-2 shrink-0 rounded-full transition-all", k === i ? "w-6 bg-amber" : "w-2 bg-line-strong hover:bg-fg-3")} />
          ))}
        </div>
        <button type="button" onClick={() => go(i + 1)} disabled={i === n - 1} aria-label={u.next}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg-2 transition hover:text-fg disabled:opacity-30 lg:hidden">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {i === 0 && <p className="pointer-events-none pt-3 text-center font-mono text-[0.68rem] text-fg-3">{u.hint}</p>}
    </div>
  );
}
