"use client";

import { motion } from "motion/react";
import { useId, useMemo, useState } from "react";
import { useFmt, useLang } from "@/i18n/context";
import { municipios } from "@/data/cadastro";
import { AnimLabel, Chip, Person } from "./figures";

const PER_SEAT = 50;
const davi = municipios.top20[0]; // Davinópolis
const COLS = 12;
const DX = 32;
const DY = 24;
const X0 = 36;
const Y_SEATS = 64;

export function AnimEstadio({ stage, controls = true }: { stage: number; controls?: boolean }) {
  const { dict } = useLang();
  const a = dict.cadastro.p4.anim;
  const { fmtInt, fmtPct } = useFmt();
  const [margem, setMargem] = useState(0);
  const sliderId = useId();

  const popAdj = Math.round(davi.pop * (1 + margem / 100));
  const seats = Math.round(popAdj / PER_SEAT);
  const tickets = Math.round(davi.aptos / PER_SEAT);
  const people = Math.round(davi.votos / PER_SEAT);
  const outside = Math.max(0, davi.votos - popAdj);
  const showPeople = stage >= 2 || margem > 0;
  const showTickets = stage >= 1;

  const restantes = useMemo(() => {
    const s = [...municipios.sensibilidade].reverse().find((r) => r.margem <= margem) ?? municipios.sensibilidade[0];
    return s.restantes;
  }, [margem]);

  const seatRows = Math.ceil(seats / COLS);
  const fenceY = Y_SEATS + seatRows * DY + 6;
  const outsideCount = Math.max(0, people - seats);
  const outsideRows = Math.ceil(outsideCount / COLS);
  const H = fenceY + 20 + Math.max(1, outsideRows) * DY + 10;
  const W = X0 * 2 + (COLS - 1) * DX + 10;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <AnimLabel>{dict.cadastro.ui.visualDe}</AnimLabel>
        <Chip tone="fg">{a.cidade}</Chip>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full max-h-[34vh] lg:max-h-none" role="img" aria-label={a.moradores}>
        {/* tickets strip */}
        <g opacity={showTickets ? 1 : 0.15}>
          <text x={X0 - 8} y={16} fontSize={9} fill="var(--amber)" className="font-mono">
            {fmtInt(davi.aptos)} · {a.titulos.toUpperCase()}
          </text>
          {Array.from({ length: tickets }).map((_, i) => (
            <motion.rect
              key={`t${i}`}
              x={X0 - 8 + (i % 42) * 9}
              y={24 + Math.floor(i / 42) * 10}
              width={6}
              height={7}
              rx={1}
              fill="var(--amber)"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: showTickets ? 0.9 : 0.15, x: 0 }}
              transition={{ delay: showTickets ? i * 0.012 : 0, type: "spring", stiffness: 120, damping: 16 }}
            />
          ))}
        </g>

        {/* seats */}
        <text x={X0 - 8} y={Y_SEATS - 12} fontSize={9} fill="var(--teal)" className="font-mono">
          {fmtInt(popAdj)} · {a.moradores.toUpperCase()}
        </text>
        {Array.from({ length: seats }).map((_, i) => (
          <motion.rect
            key={`s${i}`}
            layout
            x={X0 + (i % COLS) * DX - 9}
            y={Y_SEATS + Math.floor(i / COLS) * DY - 4}
            width={18}
            height={12}
            rx={3}
            fill="var(--teal-soft)"
            stroke="var(--teal)"
            strokeOpacity={0.7}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.01 }}
          />
        ))}

        {/* fence */}
        <line x1={X0 - 12} x2={W - 12} y1={fenceY} y2={fenceY} stroke="var(--line-strong)" strokeDasharray="3 3" />

        {/* people */}
        {showPeople &&
          Array.from({ length: people }).map((_, i) => {
            const seated = i < seats;
            const idx = seated ? i : i - seats;
            const x = X0 + (idx % COLS) * DX;
            const y = seated ? Y_SEATS + Math.floor(idx / COLS) * DY + 6 : fenceY + 24 + Math.floor(idx / COLS) * DY;
            return <Person key={`p${i}-${seats}`} x={x} y={y} s={0.75} fill={seated ? "var(--teal)" : "var(--rose)"} delay={0.1 + i * 0.015} />;
          })}
        {showPeople && outsideCount > 0 && (
          <text x={W - 12} y={fenceY + 14} textAnchor="end" fontSize={9} fill="var(--rose)" className="font-mono">
            {fmtInt(outside)} · {a.semAssento.toUpperCase()}
          </text>
        )}
      </svg>

      {/* slider */}
      {controls && (
      <div className="rounded-2xl border border-line bg-bg p-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <label htmlFor={sliderId} className="text-sm text-fg-2">
            {a.slider} <span className="display tabular text-lg font-semibold text-amber">+{fmtPct(margem, 0)}</span>?
          </label>
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-fg-3">{a.assento}</span>
        </div>
        <input
          id={sliderId}
          type="range"
          min={0}
          max={60}
          step={5}
          value={margem}
          onChange={(e) => setMargem(Number(e.target.value))}
          className="mt-3 h-11 w-full accent-amber sm:h-auto"
        />
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="display tabular text-lg font-semibold text-teal">{fmtInt(popAdj)}</div>
            <div className="text-[0.65rem] leading-tight text-fg-3">{a.popAjustada}</div>
          </div>
          <div>
            <div className="display tabular text-lg font-semibold text-rose">{fmtInt(outside)}</div>
            <div className="text-[0.65rem] leading-tight text-fg-3">{a.semAssento}</div>
          </div>
          <div>
            <div className="display tabular text-lg font-semibold text-amber">{restantes}/20</div>
            <div className="text-[0.65rem] leading-tight text-fg-3">{a.restantes}</div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
