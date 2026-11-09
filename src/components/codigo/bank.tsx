"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Section, Eyebrow, Heading, Lead } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/i18n/context";
import { AnimFrame, ease, mono, sans } from "./shared";

/** Two-pass scene: honest box, then tampered box. Statement and calculator look identical both times. */
function BankScene({ play, labels }: { play: boolean; labels: { bate: string; adulterado: string; ok: string; tampered: string } }) {
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  useEffect(() => {
    if (!play) return;
    const t1 = setTimeout(() => setPhase(1), 0);
    const t2 = setTimeout(() => setPhase(2), 5200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [play]);

  const tampered = phase === 2;
  const boxStroke = tampered ? "var(--rose)" : "var(--fg-3)";
  const key = phase; // restart inner motion on phase change

  return (
    <div className="relative">
      <div className="absolute left-4 top-4 z-10 rounded-full border border-line bg-bg px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-fg-2">
        {tampered ? labels.tampered : labels.ok}
      </div>
      <svg viewBox="0 0 640 260" className="block h-auto w-full" role="img" aria-label="bank-statement-calculator">
        {/* money */}
        <g key={`m${key}`}>
          {[0, 1, 2].map((i) => (
            <motion.g
              key={i}
              initial={{ x: 0, opacity: 1 }}
              animate={phase ? { x: [0, 120, 150], opacity: [1, 1, 0] } : {}}
              transition={{ duration: 1.4, delay: 0.2 + i * 0.25, ease }}
            >
              <rect x={30} y={150 - i * 18} width={70} height={30} rx={6} fill="var(--teal-soft)" stroke="var(--teal)" strokeWidth={1.5} />
              <text x={65} y={170 - i * 18} textAnchor="middle" fontSize={14} fill="var(--teal)" style={mono}>
                R$
              </text>
            </motion.g>
          ))}
        </g>
        {/* box */}
        <motion.rect
          x={180}
          y={70}
          width={140}
          height={140}
          rx={16}
          fill="var(--bg-sunk)"
          stroke={boxStroke}
          strokeWidth={2}
          animate={tampered ? { strokeWidth: [2, 3.5, 2] } : {}}
          transition={{ duration: 1.2, repeat: tampered ? Infinity : 0 }}
        />
        <text x={250} y={135} textAnchor="middle" fontSize={16} fontWeight={600} fill={tampered ? "var(--rose)" : "var(--fg-2)"} style={sans}>
          ?
        </text>
        {tampered && (
          <motion.g initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease }} style={{ transformOrigin: "250px 185px" }}>
            <rect x={196} y={172} width={108} height={26} rx={13} fill="var(--rose)" />
            <text x={250} y={190} textAnchor="middle" fontSize={12} fontWeight={700} fill="#0a0c10" style={mono}>
              {labels.adulterado.toUpperCase()}
            </text>
          </motion.g>
        )}
        {/* statement */}
        <g key={`s${key}`}>
          <motion.g initial={{ x: -60, opacity: 0 }} animate={phase ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.9, delay: 1.6, ease }}>
            <rect x={360} y={80} width={110} height={130} rx={8} fill="var(--bg)" stroke="var(--line-strong)" strokeWidth={1.5} />
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.line
                key={i}
                x1={376}
                x2={376 + [70, 52, 64, 46, 70][i]}
                y1={104 + i * 20}
                y2={104 + i * 20}
                stroke="var(--fg-3)"
                strokeWidth={3}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={phase ? { pathLength: 1 } : {}}
                transition={{ duration: 0.4, delay: 2.2 + i * 0.12 }}
              />
            ))}
          </motion.g>
          <motion.path
            d="M330 140h26"
            stroke="var(--fg-3)"
            strokeWidth={1.5}
            fill="none"
            initial={{ pathLength: 0 }}
            animate={phase ? { pathLength: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.5 }}
          />
        </g>
        {/* calculator */}
        <g key={`c${key}`}>
          <rect x={520} y={100} width={90} height={110} rx={12} fill="var(--bg)" stroke="var(--line-strong)" strokeWidth={1.5} />
          <rect x={532} y={112} width={66} height={26} rx={5} fill="var(--bg-sunk)" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={532 + (i % 3) * 23} y={148 + Math.floor(i / 3) * 24} width={18} height={16} rx={4} fill="var(--bg-sunk)" />
          ))}
          <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={phase ? { opacity: 1, scale: 1 } : {}} transition={{ type: "spring", stiffness: 260, damping: 18, delay: 3.2 }} style={{ transformOrigin: "565px 125px" }}>
            <text x={565} y={131} textAnchor="middle" fontSize={16} fontWeight={700} fill="var(--teal)" style={mono}>
              ✓ {labels.bate}
            </text>
          </motion.g>
          <motion.path
            d="M480 140h34"
            stroke="var(--fg-3)"
            strokeWidth={1.5}
            fill="none"
            initial={{ pathLength: 0 }}
            animate={phase ? { pathLength: 1 } : {}}
            transition={{ duration: 0.4, delay: 2.9 }}
          />
        </g>
      </svg>
    </div>
  );
}

export function BankSection() {
  const { dict } = useLang();
  const d = dict.codigo.banco;
  return (
    <Section id="banco" className="border-t border-line">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <div>
          <Reveal>
            <Eyebrow tone="amber">{d.eyebrow}</Eyebrow>
            <Heading className="mt-3">{d.title}</Heading>
            <Lead className="mt-5">{d.lead}</Lead>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 space-y-3">
            <Callout tone="amber">
              <strong>{d.moral}</strong>
            </Callout>
            <p className="text-[0.98rem] leading-relaxed text-fg-2">{d.morale2}</p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:sticky lg:top-24 lg:self-start">
          <AnimFrame caption={`${d.captions.dinheiro} → ${d.captions.caixa} → ${d.captions.extrato} → ${d.captions.calc}`}>
            {(play) => (
              <BankScene play={play} labels={{ bate: d.bate, adulterado: d.adulterado, ok: d.phases.ok, tampered: d.phases.tampered }} />
            )}
          </AnimFrame>
        </Reveal>
      </div>
    </Section>
  );
}
