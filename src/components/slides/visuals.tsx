"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Landmark, ScrollText, Vote } from "lucide-react";
import { useFmt, useLang } from "@/i18n/context";
import { href } from "@/i18n/routes";
import { centenarios, deltaPorFaixa2022, historicoInversao } from "@/data/cadastro";
import { cn } from "@/lib/utils";

export type VisualProps = { active: boolean; tech: boolean };

const ease = [0.22, 1, 0.36, 1] as const;
const spring = { type: "spring" as const, stiffness: 120, damping: 16 };

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-center font-mono text-[0.68rem] uppercase tracking-widest text-fg-3">{children}</p>;
}

/* ---------- 1. Capa ---------- */
function Capa() {
  return (
    <div className="flex items-center justify-center">
      <svg viewBox="0 0 240 200" className="w-full max-w-[280px]">
        <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
          <rect x="54" y="70" width="110" height="86" rx="8" fill="var(--bg-elev)" stroke="var(--line-strong)" strokeWidth="2" />
          <rect x="84" y="56" width="50" height="22" rx="4" fill="var(--amber)" />
          <rect x="100" y="48" width="18" height="12" rx="2" fill="var(--amber)" />
        </motion.g>
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={190} cy={60 + i * 10} r={3}
            fill="var(--teal)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.3] }}
            transition={{ duration: 2, delay: 0.5 + i * 0.2, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
        <motion.circle
          cx={150} cy={118} r={26} fill="none" stroke="var(--teal)" strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.line
          x1={168} y1={136} x2={186} y2={154} stroke="var(--teal)" strokeWidth="4" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.1 }}
        />
      </svg>
    </div>
  );
}

/* ---------- 2. Pergunta ---------- */
function Pergunta() {
  const nodes = [
    { x: 40, label: "IBGE", color: "var(--teal)" },
    { x: 150, label: "TSE", color: "var(--amber)" },
    { x: 260, label: "DATASUS", color: "var(--rose)" },
  ];
  return (
    <svg viewBox="0 0 300 200" className="w-full max-w-[380px]">
      {nodes.map((n, i) => (
        <g key={n.label}>
          <motion.line
            x1={n.x} y1={70} x2={150} y2={130} stroke="var(--line-strong)" strokeWidth="1.5" strokeDasharray="4 4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
          />
          <motion.g initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12, ...spring }}>
            <circle cx={n.x} cy={54} r={20} fill="var(--bg-elev)" stroke={n.color} strokeWidth="2" />
            <text x={n.x} y={58} textAnchor="middle" className="font-mono" fontSize="9" fill="var(--fg)">{n.label}</text>
          </motion.g>
        </g>
      ))}
      <motion.circle cx={150} cy={150} r={26} fill="var(--amber-soft)" stroke="var(--amber)" strokeWidth="2"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, ...spring }} />
      <motion.text x={150} y={159} textAnchor="middle" fontSize="26" fontWeight="700" fill="var(--amber)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>?</motion.text>
    </svg>
  );
}

/* ---------- 3. Estádios (centenários choque) ---------- */
function Stadium({ x, fill, label, value }: { x: number; fill: string; label: string; value: string }) {
  return (
    <g>
      <motion.ellipse cx={x} cy={150} rx={44} ry={16} fill="none" stroke={fill} strokeWidth="3"
        initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={spring} />
      <motion.ellipse cx={x} cy={150} rx={26} ry={9} fill={fill} opacity={0.25}
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ...spring, delay: 0.2 }} />
      <text x={x} y={182} textAnchor="middle" fontSize="18" fontWeight="700" fill={fill} className="tabular font-mono">{value}</text>
      <text x={x} y={198} textAnchor="middle" fontSize="9" fill="var(--fg-3)">{label}</text>
    </g>
  );
}
function Centenarios() {
  const { fmt } = useFmt();
  const { lang } = useLang();
  const labels = lang === "pt" ? { censo: "Censo IBGE", tse: "Cadastro TSE" } : { censo: "IBGE Census", tse: "TSE registry" };
  return (
    <div>
      <svg viewBox="0 0 240 210" className="w-full max-w-[360px]">
        {/* Censo ~0.5 Maracanã: one small ring. TSE ~3.8: four rings */}
        <Stadium x={66} fill="var(--teal)" label={labels.censo} value={fmt(37814)} />
        <g>
          {[0, 1, 2, 3].map((i) => (
            <motion.ellipse key={i} cx={174} cy={150 - i * 7} rx={44 - i * 2} ry={16 - i} fill="none" stroke="var(--amber)" strokeWidth="2.5"
              initial={{ scale: 0.3, opacity: 0 }} animate={{ scale: 1, opacity: 1 - i * 0.12 }} transition={{ ...spring, delay: 0.2 + i * 0.12 }} />
          ))}
          <text x={174} y={182} textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--amber)" className="tabular font-mono">{fmt(298239)}</text>
          <text x={174} y={198} textAnchor="middle" fontSize="9" fill="var(--fg-3)">{labels.tse}</text>
        </g>
      </svg>
      <Caption>1 Maracanã ≈ 78.838 lugares</Caption>
    </div>
  );
}

/* ---------- 4. Sala 10 → 79 ---------- */
function RoomRatio() {
  const teal = Array.from({ length: 10 });
  const amber = Array.from({ length: 79 });
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-xl border border-line bg-bg-elev p-3">
        <div className="grid grid-cols-5 gap-1.5">
          {teal.map((_, i) => (
            <motion.span key={i} className="aspect-square rounded-full bg-teal" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.02, ...spring }} />
          ))}
        </div>
        <p className="mt-2 text-center font-mono text-[0.65rem] text-teal">IBGE · 10</p>
      </div>
      <div className="rounded-xl border border-line bg-bg-elev p-3">
        <div className="grid grid-cols-10 gap-1">
          {amber.map((_, i) => (
            <motion.span key={i} className="aspect-square rounded-full bg-amber" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.012, ...spring }} />
          ))}
        </div>
        <p className="mt-2 text-center font-mono text-[0.65rem] text-amber">TSE · 79</p>
      </div>
    </div>
  );
}

/* ---------- 5. Países ---------- */
function CountryBars() {
  const { lang } = useLang();
  const rows = [
    ...centenarios.internacionalPor100k.map((r) => ({ label: r.pais[lang], v: r.valor })),
  ];
  const max = 140;
  return (
    <div className="w-full max-w-[420px] space-y-2">
      {rows.map((r, i) => {
        const tse = r.v === 140;
        return (
          <div key={i} className="flex items-center gap-2">
            <span className="w-28 shrink-0 truncate text-right text-xs text-fg-2">{r.label}</span>
            <div className="h-5 flex-1 overflow-hidden rounded bg-bg-sunk">
              <motion.div
                className={cn("h-full rounded", tse ? "bg-amber" : "bg-slate")}
                initial={{ width: 0 }} animate={{ width: `${(r.v / max) * 100}%` }} transition={{ duration: 0.8, delay: i * 0.08, ease }}
              />
            </div>
            <span className={cn("w-10 shrink-0 font-mono text-xs tabular", tse ? "text-amber" : "text-fg-3")}>{r.v}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- 6. Inversão por idade ---------- */
const ELDER = new Set(["70-74", "75-79", "80-84", "85-89", "90-94", "95-99", "100+"]);
function AgeInversion() {
  const show = ["40-44", "50-54", "60-64", "65-69", "70-74", "75-79", "80-84", "85-89", "90-94", "95-99", "100+"];
  const rows = show.map((l) => deltaPorFaixa2022.find((d) => d.faixa_label === l)!).filter(Boolean);
  const max = 35;
  const h = 150;
  return (
    <div>
      <svg viewBox="0 0 330 185" className="w-full max-w-[460px]">
        <line x1={0} y1={h} x2={330} y2={h} stroke="var(--line-strong)" strokeWidth="1" />
        {rows.map((d, i) => {
          const bw = 24;
          const x = 8 + i * 29;
          const bh = Math.max(2, (d.delta_pct / max) * h);
          const elder = ELDER.has(d.faixa_label);
          return (
            <g key={d.faixa_label}>
              <motion.rect
                x={x} width={bw} rx={3} fill={elder ? "var(--amber)" : "var(--teal)"}
                initial={{ height: 0, y: h }} animate={{ height: bh, y: h - bh }} transition={{ duration: 0.7, delay: i * 0.05, ease }}
              />
              <text x={x + bw / 2} y={h + 12} textAnchor="middle" fontSize="7.5" fill="var(--fg-3)" className="font-mono">{d.faixa_label}</text>
              {elder && <text x={x + bw / 2} y={h - bh - 4} textAnchor="middle" fontSize="8" fill="var(--amber)" className="font-mono tabular">{Math.round(d.delta_pct)}%</text>}
            </g>
          );
        })}
      </svg>
      <Caption><span className="text-teal">21–69 ≈ +0%</span> · <span className="text-amber">70+ sobe com a idade</span></Caption>
    </div>
  );
}

/* ---------- 7. Histórico ---------- */
function History() {
  const { fmt } = useFmt();
  const max = 198_738;
  return (
    <div className="flex items-end justify-center gap-6">
      {historicoInversao.map((hh, i) => {
        const bh = Math.max(14, (hh.excesso / max) * 150);
        return (
          <div key={hh.ano} className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs tabular text-fg-2">{fmt(hh.excesso)}</span>
            <motion.div
              className={cn("w-16 rounded-t-lg", hh.ano === "2022" ? "bg-amber" : "bg-slate")}
              initial={{ height: 0 }} animate={{ height: bh }} transition={{ duration: 0.8, delay: i * 0.12, ease }}
              style={{ height: bh }}
            />
            <span className="font-mono text-sm font-semibold text-fg">{hh.ano}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- 8. Capacidade: grade 100, 43 cinza ---------- */
function CapacityGrid() {
  const cells = Array.from({ length: 100 });
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="grid grid-cols-10 gap-1">
        {cells.map((_, i) => {
          const limited = i < 43;
          return (
            <motion.span
              key={i}
              className={cn("h-3.5 w-3.5 rounded-sm", limited ? "bg-rose" : "bg-teal/40")}
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.006, duration: 0.3 }}
            />
          );
        })}
      </div>
      <p className="font-mono text-[0.68rem] text-rose">43 de 100 não saem sozinhos (75+)</p>
    </div>
  );
}

/* ---------- 9. Funil limpeza ---------- */
function Funnel() {
  const { fmt } = useFmt();
  return (
    <div>
      <svg viewBox="0 0 260 200" className="w-full max-w-[340px]">
        <motion.path d="M40 30 H220 L150 100 V150 H110 V100 Z" fill="var(--bg-elev)" stroke="var(--line-strong)" strokeWidth="2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.circle key={i} cx={60 + i * 15} cy={20} r={4} fill="var(--fg-3)"
            initial={{ cy: 10, opacity: 0 }} animate={{ cy: 40, opacity: 1 }} transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }} />
        ))}
        {/* 6 cancelados saem (teal) */}
        <motion.g initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.5 }}>
          <text x={46} y={176} fontSize="10" fill="var(--teal)" className="font-mono">✓ 56% cancelados</text>
        </motion.g>
        {/* 4 acumulam (amber) */}
        <motion.rect x={120} y={158} width={24} height={30} rx={3} fill="var(--amber)"
          initial={{ height: 0, y: 188 }} animate={{ height: 30, y: 158 }} transition={{ delay: 1.1, duration: 0.6 }} />
        <text x={132} y={200} textAnchor="middle" fontSize="8" fill="var(--amber)" className="font-mono">44%</text>
      </svg>
      <Caption>+{fmt(629203)} títulos de mortos por ano</Caption>
    </div>
  );
}

/* ---------- 9b. Quantos mortos aptos ---------- */
function DeadCount({ active }: VisualProps) {
  const { fmt } = useFmt();
  const { lang } = useLang();
  // 1.491.608 adultos (95% com título ≈ 1.417.028) mortes -> 787.825 cancelados -> 629.203 restam
  const rows = [
    { v: 1_491_608, w: 100, fill: "var(--slate)", lbl: lang === "pt" ? "adultos mortos (DATASUS)" : "adult deaths (DATASUS)" },
    { v: 787_825, w: 53, fill: "var(--teal)", lbl: lang === "pt" ? "cancelados" : "cancelled" },
    { v: 629_203, w: 42, fill: "var(--rose)", lbl: lang === "pt" ? "mortos ainda aptos" : "dead still eligible" },
  ];
  return (
    <div className="w-full max-w-[420px]">
      <div className="flex flex-col gap-2.5">
        {rows.map((r, i) => (
          <motion.div
            key={i}
            className="mx-auto w-full"
            style={{ maxWidth: `${30 + r.w * 0.7}%` }}
            initial={{ opacity: 0, y: 12 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.4, duration: 0.6, ease }}
          >
            <div
              className="rounded-xl border px-3 py-2.5 text-center"
              style={{ background: i === 2 ? "var(--rose-soft)" : "var(--bg-elev)", borderColor: i === 2 ? "var(--rose)" : "var(--line-strong)" }}
            >
              <div className="font-mono text-base font-semibold tabular sm:text-xl" style={{ color: r.fill }}>
                {i === 1 ? "−" : ""}{fmt(r.v)}
              </div>
              <div className="font-mono text-[0.6rem] uppercase tracking-wider text-fg-3">{r.lbl}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-4 rounded-xl border border-rose/40 bg-rose-soft px-4 py-3 text-center"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={active ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1.4, duration: 0.5, ease }}
      >
        <div className="font-mono text-[0.6rem] uppercase tracking-widest text-fg-3">
          {lang === "pt" ? "no ciclo 2022–2026" : "across the 2022–2026 cycle"}
        </div>
        <div className="display tabular text-[clamp(1.8rem,7vw,2.8rem)] font-semibold text-rose">≈ {fmt(2_517_000)}</div>
      </motion.div>
    </div>
  );
}

/* ---------- 10. Ônibus Davinópolis ---------- */
function Bus() {
  return (
    <div>
      <svg viewBox="0 0 300 160" className="w-full max-w-[400px]">
        <motion.rect x={20} y={40} width={210} height={74} rx="12" fill="var(--bg-elev)" stroke="var(--line-strong)" strokeWidth="2"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} />
        <circle cx={70} cy={120} r={13} fill="var(--bg-sunk)" stroke="var(--fg-3)" strokeWidth="2" />
        <circle cx={185} cy={120} r={13} fill="var(--bg-sunk)" stroke="var(--fg-3)" strokeWidth="2" />
        {/* 40 seats (4x10) filled */}
        <g>
          {Array.from({ length: 40 }).map((_, i) => {
            const r = Math.floor(i / 10), c = i % 10;
            return <motion.circle key={i} cx={34 + c * 19} cy={54 + r * 15} r={4.5} fill="var(--teal)"
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + i * 0.01, ...spring }} />;
          })}
        </g>
        {/* 24 overflow outside (standing) */}
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.circle key={i} cx={246 + (i % 4) * 12} cy={54 + Math.floor(i / 4) * 15} r={4.5} fill="var(--rose)"
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 + i * 0.02, ...spring }} />
        ))}
      </svg>
      <Caption><span className="text-teal">40 lugares</span> · <span className="text-fg-2">64 votaram</span> · <span className="text-rose">88 títulos</span></Caption>
    </div>
  );
}

/* ---------- 11. Transição ---------- */
function Transicao() {
  return (
    <svg viewBox="0 0 320 140" className="w-full max-w-[420px]">
      <motion.g initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <rect x={20} y={40} width="90" height="60" rx="8" fill="var(--amber-soft)" stroke="var(--amber)" strokeWidth="1.5" />
        <Vote x={50} y={56} width={28} height={28} color="var(--amber)" />
        <text x={65} y={94} textAnchor="middle" fontSize="9" fill="var(--fg-2)" className="font-mono">cadastro</text>
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <ArrowRight x={140} y={56} width={28} height={28} color="var(--fg-3)" />
      </motion.g>
      <motion.g initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
        <rect x={210} y={40} width="90" height="60" rx="8" fill="var(--bg-elev)" stroke="var(--line-strong)" strokeWidth="1.5" />
        <text x={255} y={78} textAnchor="middle" fontSize="22" fill="var(--teal)" className="font-mono">{"{ }"}</text>
        <text x={255} y={94} textAnchor="middle" fontSize="9" fill="var(--fg-2)" className="font-mono">kit de verificação</text>
      </motion.g>
    </svg>
  );
}

/* ---------- 12. Densidade de gaps ---------- */
function GapsDensity() {
  const lines = Array.from({ length: 63 });
  return (
    <div className="w-full max-w-[420px]">
      <div className="grid grid-cols-9 gap-1 rounded-xl border border-line bg-bg-elev p-3">
        {lines.map((_, i) => (
          <motion.span key={i} className="h-3 rounded-sm bg-rose"
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: i * 0.01, duration: 0.3 }} />
        ))}
      </div>
      <Caption>63 falhas · 1 a cada 45 linhas</Caption>
    </div>
  );
}

/* ---------- 13. 63 moedas ---------- */
function Coins() {
  const coins = Array.from({ length: 63 });
  return (
    <div className="w-full max-w-[380px]">
      <div className="grid grid-cols-9 gap-1.5">
        {coins.map((_, i) => (
          <motion.div
            key={i}
            className="flex aspect-square items-center justify-center rounded-full border border-amber/50 bg-amber-soft"
            initial={{ rotateY: 0, scale: 0 }}
            animate={{ rotateY: [0, 540, 720], scale: 1 }}
            transition={{ delay: 0.2 + i * 0.03, duration: 0.9, ease }}
          >
            <span className="text-[0.6rem] font-bold text-amber">C</span>
          </motion.div>
        ))}
      </div>
      <Caption>todas dão “cara” · 1 em 9,2 quintilhões</Caption>
    </div>
  );
}

/* ---------- 14. Banco e extrato ---------- */
function Bank() {
  const { lang } = useLang();
  const steps = lang === "pt"
    ? ["dinheiro", "caixa fechada", "extrato", "confere ✓"]
    : ["money", "closed box", "statement", "checks ✓"];
  return (
    <div className="w-full max-w-[440px] space-y-4">
      <div className="flex items-center justify-between gap-1">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-1">
            <motion.div
              className={cn("flex h-14 w-14 items-center justify-center rounded-lg border text-center text-[0.6rem] leading-tight",
                i === 1 ? "border-fg-3 bg-bg-sunk text-fg-3" : i === 3 ? "border-teal bg-teal-soft text-teal" : "border-line bg-bg-elev text-fg-2")}
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.2, ...spring }}
            >{s}</motion.div>
            {i < 3 && <ArrowRight className="h-3 w-3 shrink-0 text-fg-3" />}
          </div>
        ))}
      </div>
      <motion.div
        className="flex items-center gap-3 rounded-lg border border-rose/40 bg-rose-soft p-3"
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="font-mono text-xs text-rose">⚠</span>
        <p className="text-xs text-fg-2">{lang === "pt" ? "Caixa adulterada → o extrato ainda bate. A calculadora não vê dentro da caixa." : "Tampered box → the statement still matches. The calculator cannot see inside the box."}</p>
      </motion.div>
    </div>
  );
}

/* ---------- 15. O que não provamos ---------- */
function Limits() {
  const { lang } = useLang();
  const items = lang === "pt"
    ? ["caso individual de voto de falecido", "prova de intenção", "atribuição a candidato"]
    : ["individual case of a dead voter", "proof of intent", "attribution to a candidate"];
  return (
    <div className="w-full max-w-[360px] space-y-3">
      {items.map((it, i) => (
        <motion.div key={i} className="flex items-center gap-3 rounded-lg border border-line bg-bg-elev px-4 py-3"
          initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15, duration: 0.5 }}>
          <span className="text-rose">✕</span>
          <span className="text-sm text-fg-2 line-through decoration-rose/50">{it}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ---------- 16. Fecho (CTAs) ---------- */
function Fecho() {
  const { lang, dict } = useLang();
  const c = dict.slides.cta;
  return (
    <div className="flex w-full max-w-[360px] flex-col gap-3">
      <Link href={href(lang, "/dashboard/")} className="flex items-center justify-between rounded-xl bg-amber px-5 py-3.5 text-sm font-semibold text-[#0a0c10] transition hover:opacity-90">
        <span className="inline-flex items-center gap-2"><Landmark className="h-4 w-4" /> {c.dashboard}</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
      <Link href={href(lang, "/dados/")} className="flex items-center justify-between rounded-xl border border-line bg-bg-elev px-5 py-3.5 text-sm font-semibold text-fg transition hover:border-line-strong">
        <span className="inline-flex items-center gap-2"><ScrollText className="h-4 w-4" /> {c.dados}</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export const visuals: Record<string, (p: VisualProps) => React.ReactNode> = {
  capa: Capa,
  pergunta: Pergunta,
  "centenarios-choque": Centenarios,
  "centenarios-razao": RoomRatio,
  "centenarios-mundo": CountryBars,
  inversao: AgeInversion,
  historico: History,
  capacidade: CapacityGrid,
  limpeza: Funnel,
  "quantos-mortos": DeadCount,
  municipios: Bus,
  transicao: Transicao,
  gaps: GapsDensity,
  moedas: Coins,
  banco: Bank,
  naoprovamos: Limits,
  fecho: Fecho,
};
