"use client";

import { motion } from "motion/react";
import type { Grave } from "@/data/codigo";
import { useLang } from "@/i18n/context";
import { ease, mono, sans } from "./shared";

type Props = { play: boolean };
const VB = "0 0 280 170";
const spring = { type: "spring", stiffness: 240, damping: 16 } as const;

function Trava({ play }: Props) {
  const { dict } = useLang();
  const m = dict.codigo.mini;
  return (
    <svg viewBox={VB} className="block h-auto w-full" aria-hidden>
      <path d="M112 72V54a28 28 0 0 1 56 0v18" fill="none" stroke="var(--fg-2)" strokeWidth={6} strokeLinecap="round" />
      <rect x={96} y={72} width={88} height={68} rx={14} fill="var(--bg-sunk)" stroke="var(--fg-2)" strokeWidth={2} />
      <circle cx={140} cy={100} r={8} fill="var(--bg)" stroke="var(--fg-3)" strokeWidth={1.5} />
      <rect x={137} y={104} width={6} height={16} rx={2} fill="var(--bg)" stroke="var(--fg-3)" strokeWidth={1.5} />
      {/* ghost key that never arrives */}
      <motion.g
        initial={{ x: 0, opacity: 0.9 }}
        animate={play ? { x: [0, 52, 56], opacity: [0.9, 0.9, 0] } : {}}
        transition={{ duration: 1.6, delay: 0.3, ease }}
      >
        <circle cx={38} cy={104} r={9} fill="none" stroke="var(--amber)" strokeWidth={1.5} strokeDasharray="3 3" />
        <path d="M47 104h30M70 104v8M78 104v6" fill="none" stroke="var(--amber)" strokeWidth={2} strokeDasharray="3 3" strokeLinecap="round" />
      </motion.g>
      {/* swallowed error */}
      <motion.g
        initial={{ scale: 1, opacity: 1 }}
        animate={play ? { scale: [1, 1.1, 0], opacity: [1, 1, 0] } : {}}
        transition={{ duration: 1.1, delay: 2.0, ease }}
        style={{ transformOrigin: "222px 60px" }}
      >
        <circle cx={222} cy={60} r={16} fill="var(--rose-soft)" stroke="var(--rose)" strokeWidth={1.5} />
        <text x={222} y={66} textAnchor="middle" fontSize={18} fontWeight={700} fill="var(--rose)" style={mono}>!</text>
        <text x={222} y={92} textAnchor="middle" fontSize={10} fill="var(--fg-3)" style={mono}>{m.erro}</text>
      </motion.g>
      <motion.text x={222} y={92} textAnchor="middle" fontSize={10} fill="var(--fg-3)" style={mono} initial={{ opacity: 0 }} animate={play ? { opacity: 1 } : {}} transition={{ delay: 3.0 }}>
        {m.engolido}
      </motion.text>
      {/* stamp */}
      <motion.g
        initial={{ opacity: 0, scale: 1.4, rotate: -8 }}
        animate={play ? { opacity: 1, scale: 1, rotate: -8 } : {}}
        transition={{ ...spring, delay: 3.3 }}
        style={{ transformOrigin: "140px 150px" }}
      >
        <rect x={62} y={138} width={156} height={26} rx={6} fill="none" stroke="var(--amber)" strokeWidth={2} />
        <text x={140} y={156} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--amber)" style={mono}>
          {m.naoVerificado.toUpperCase()}
        </text>
      </motion.g>
    </svg>
  );
}

function Caneta({ play }: Props) {
  const { dict } = useLang();
  const m = dict.codigo.mini;
  return (
    <svg viewBox={VB} className="block h-auto w-full" aria-hidden>
      <rect x={40} y={22} width={200} height={126} rx={10} fill="var(--bg)" stroke="var(--line-strong)" strokeWidth={1.5} />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={58} x2={58 + [120, 90, 110][i]} y1={44 + i * 12} y2={44 + i * 12} stroke="var(--line-strong)" strokeWidth={3} strokeLinecap="round" />
      ))}
      {/* HW signature */}
      <motion.path
        d="M58 100c10-14 16 6 26-6s14 10 26-2 12-10 22-2 14 6 20-4"
        fill="none"
        stroke="var(--teal)"
        strokeWidth={2.5}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={play ? { pathLength: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease }}
      />
      <text x={226} y={103} textAnchor="end" fontSize={11} fontWeight={600} fill="var(--teal)" style={mono}>{m.hw}</text>
      {/* SW signature — invisible ink */}
      <motion.path
        d="M58 128c12-12 18 8 28-4s12 10 24 0 14-10 24-2 12 6 20-4"
        fill="none"
        stroke="var(--fg-3)"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeDasharray="4 5"
        initial={{ opacity: 0.1 }}
        animate={play ? { opacity: [0.1, 0.1, 0.7, 0.7, 0.1] } : {}}
        transition={{ duration: 2.4, delay: 1.6, times: [0, 0.2, 0.45, 0.75, 1] }}
      />
      <motion.circle
        cx={60}
        cy={126}
        r={22}
        fill="var(--amber)"
        initial={{ opacity: 0, x: 0 }}
        animate={play ? { opacity: [0, 0.22, 0.22, 0], x: [0, 60, 120, 160] } : {}}
        transition={{ duration: 2.4, delay: 1.6, times: [0, 0.2, 0.8, 1] }}
      />
      <text x={226} y={131} textAnchor="end" fontSize={11} fontWeight={600} fill="var(--fg-3)" style={mono}>{m.sw}</text>
      <motion.text x={140} y={164} textAnchor="middle" fontSize={10} fill="var(--amber)" style={sans} initial={{ opacity: 0 }} animate={play ? { opacity: 1 } : {}} transition={{ delay: 4.0 }}>
        {m.luz}
      </motion.text>
    </svg>
  );
}

function Certificado({ play }: Props) {
  const { dict } = useLang();
  const m = dict.codigo.mini;
  return (
    <svg viewBox={VB} className="block h-auto w-full" aria-hidden>
      <rect x={40} y={22} width={200} height={92} rx={10} fill="var(--bg)" stroke="var(--line-strong)" strokeWidth={1.5} />
      <text x={56} y={46} fontSize={12} fontWeight={700} fill="var(--fg)" style={mono}>{m.acUrna}</text>
      <text x={56} y={66} fontSize={10.5} fill="var(--fg-2)" style={sans}>{m.validoAte}</text>
      <circle cx={214} cy={44} r={12} fill="var(--bg-sunk)" stroke="var(--line-strong)" />
      {/* timeline */}
      <line x1={50} x2={230} y1={140} y2={140} stroke="var(--line-strong)" strokeWidth={1.5} />
      <line x1={120} x2={120} y1={132} y2={148} stroke="var(--amber)" strokeWidth={2} />
      <text x={120} y={160} textAnchor="middle" fontSize={9.5} fill="var(--fg-3)" style={mono}>18/07</text>
      <line x1={218} x2={218} y1={132} y2={148} stroke="var(--fg-2)" strokeWidth={2} />
      <text x={218} y={160} textAnchor="middle" fontSize={9.5} fill="var(--fg-3)" style={mono}>{m.eleicao}</text>
      <motion.path d="M122 126h94" stroke="var(--rose)" strokeWidth={2} strokeDasharray="3 3" fill="none" initial={{ pathLength: 0 }} animate={play ? { pathLength: 1 } : {}} transition={{ duration: 1, delay: 0.6 }} />
      <motion.text x={169} y={120} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--rose)" style={mono} initial={{ opacity: 0 }} animate={play ? { opacity: 1 } : {}} transition={{ delay: 1.5 }}>
        −99 d
      </motion.text>
      {/* stamp */}
      <motion.g initial={{ opacity: 0, scale: 1.5, rotate: -10 }} animate={play ? { opacity: 1, scale: 1, rotate: -10 } : {}} transition={{ ...spring, delay: 2.0 }} style={{ transformOrigin: "150px 92px" }}>
        <rect x={74} y={80} width={152} height={24} rx={5} fill="none" stroke="var(--rose)" strokeWidth={2} />
        <text x={150} y={97} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--rose)" style={mono}>{m.expirado}</text>
      </motion.g>
      {/* check passes without looking */}
      <motion.g initial={{ x: -40, opacity: 0 }} animate={play ? { x: [-40, 0, 0], opacity: [0, 1, 1] } : {}} transition={{ duration: 1.2, delay: 3.0, ease }}>
        <circle cx={236} cy={80} r={14} fill="var(--teal-soft)" stroke="var(--teal)" strokeWidth={1.5} />
        <text x={236} y={85} textAnchor="middle" fontSize={14} fontWeight={700} fill="var(--teal)" style={mono}>✓</text>
      </motion.g>
      <motion.text x={236} y={108} textAnchor="end" fontSize={9.5} fill="var(--teal)" style={sans} initial={{ opacity: 0 }} animate={play ? { opacity: 1 } : {}} transition={{ delay: 3.9 }}>
        {m.aceito}
      </motion.text>
    </svg>
  );
}

function Juiz({ play }: Props) {
  const { dict } = useLang();
  const m = dict.codigo.mini;
  return (
    <svg viewBox={VB} className="block h-auto w-full" aria-hidden>
      <motion.g initial={{ opacity: 1 }} animate={play ? { opacity: [1, 1, 0.18] } : {}} transition={{ duration: 1, delay: 3.0, times: [0, 0.3, 1] }}>
        <text x={140} y={22} textAnchor="middle" fontSize={10.5} fill="var(--fg-3)" style={mono}>{m.v1}</text>
        {/* BU doc */}
        <rect x={34} y={40} width={82} height={104} rx={8} fill="var(--bg)" stroke="var(--line-strong)" strokeWidth={1.5} />
        <text x={75} y={60} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--fg)" style={mono}>{m.bu}</text>
        {[0, 1, 2].map((i) => (
          <line key={i} x1={48} x2={102} y1={74 + i * 10} y2={74 + i * 10} stroke="var(--line-strong)" strokeWidth={2.5} strokeLinecap="round" />
        ))}
        {/* verifier */}
        <rect x={164} y={40} width={82} height={104} rx={8} fill="var(--bg-sunk)" stroke="var(--line-strong)" strokeWidth={1.5} />
        <text x={205} y={60} textAnchor="middle" fontSize={10.5} fontWeight={600} fill="var(--fg-2)" style={sans}>{m.verificador}</text>
        {/* key travels from BU into verifier */}
        <motion.g initial={{ x: 0 }} animate={play ? { x: 130 } : {}} transition={{ duration: 1.3, delay: 0.5, ease }}>
          <circle cx={62} cy={122} r={8} fill="none" stroke="var(--amber)" strokeWidth={2.2} />
          <path d="M70 122h26M88 122v7M95 122v5" fill="none" stroke="var(--amber)" strokeWidth={2.2} strokeLinecap="round" />
        </motion.g>
        <text x={75} y={140} textAnchor="middle" fontSize={9} fill="var(--amber)" style={mono}>{m.chave}</text>
        <motion.text x={205} y={102} textAnchor="middle" fontSize={22} fontWeight={700} fill="var(--teal)" initial={{ opacity: 0, scale: 0.4 }} animate={play ? { opacity: 1, scale: 1 } : {}} transition={{ ...spring, delay: 1.9 }} style={{ ...mono, transformOrigin: "205px 96px" }}>
          ✓
        </motion.text>
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={play ? { opacity: 1 } : {}} transition={{ delay: 3.6, duration: 0.6 }}>
        <rect x={54} y={78} width={172} height={30} rx={8} fill="var(--bg-elev)" stroke="var(--line-strong)" />
        <text x={140} y={97} textAnchor="middle" fontSize={10.5} fontWeight={600} fill="var(--fg)" style={mono}>{m.removido}</text>
      </motion.g>
    </svg>
  );
}

function Formularios({ play }: Props) {
  const { dict } = useLang();
  const m = dict.codigo.mini;
  const form = (x: number, title: string, row: string, tone: string) => (
    <g>
      <rect x={x} y={34} width={96} height={104} rx={8} fill="var(--bg)" stroke="var(--line-strong)" strokeWidth={1.5} />
      <text x={x + 48} y={54} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--fg)" style={mono}>{title}</text>
      <line x1={x + 12} x2={x + 84} y1={66} y2={66} stroke="var(--line-strong)" strokeWidth={2.5} strokeLinecap="round" />
      <line x1={x + 12} x2={x + 60} y1={78} y2={78} stroke="var(--line-strong)" strokeWidth={2.5} strokeLinecap="round" />
      <rect x={x + 8} y={92} width={80} height={22} rx={5} fill={tone === "amber" ? "var(--amber-soft)" : "var(--teal-soft)"} />
      <text x={x + 48} y={107} textAnchor="middle" fontSize={10.5} fontWeight={700} fill={tone === "amber" ? "var(--amber)" : "var(--teal)"} style={mono}>{row}</text>
    </g>
  );
  return (
    <svg viewBox={VB} className="block h-auto w-full" aria-hidden>
      {form(26, m.bu, m.nominal1, "teal")}
      {form(158, "RDV", m.nominal2, "amber")}
      <motion.path d="M122 103h36" stroke="var(--fg-3)" strokeWidth={2} strokeDasharray="4 4" fill="none" initial={{ pathLength: 0 }} animate={play ? { pathLength: [0, 0.45, 0.45] } : {}} transition={{ duration: 1.6, delay: 0.5 }} />
      <motion.g initial={{ opacity: 0, scale: 0.4 }} animate={play ? { opacity: 1, scale: 1 } : {}} transition={{ ...spring, delay: 1.7 }} style={{ transformOrigin: "140px 103px" }}>
        <circle cx={140} cy={103} r={11} fill="var(--rose-soft)" stroke="var(--rose)" strokeWidth={1.5} />
        <text x={140} y={108} textAnchor="middle" fontSize={14} fontWeight={700} fill="var(--rose)" style={mono}>×</text>
      </motion.g>
      <motion.text x={140} y={160} textAnchor="middle" fontSize={10.5} fill="var(--rose)" style={mono} initial={{ opacity: 0 }} animate={play ? { opacity: 1 } : {}} transition={{ delay: 2.3 }}>
        {m.cruzamento}
      </motion.text>
    </svg>
  );
}

function Fase({ play }: Props) {
  const { dict } = useLang();
  const m = dict.codigo.mini;
  const cards = [
    { label: m.simulado, tone: "var(--fg-3)" },
    { label: m.treino, tone: "var(--amber)" },
    { label: m.oficial, tone: "var(--teal)" },
  ];
  return (
    <svg viewBox={VB} className="block h-auto w-full" aria-hidden>
      {/* gate */}
      <rect x={124} y={40} width={32} height={100} rx={6} fill="var(--bg-sunk)" stroke="var(--line-strong)" strokeWidth={1.5} strokeDasharray="4 3" />
      <text x={140} y={30} textAnchor="middle" fontSize={9.5} fill="var(--fg-3)" style={mono}>kit</text>
      {cards.map((c, i) => (
        <motion.g key={i} initial={{ x: -90, opacity: 0 }} animate={play ? { x: [-90, 0, 100, 190], opacity: [0, 1, 1, 0] } : {}} transition={{ duration: 2.4, delay: 0.3 + i * 1.3, ease: "linear", times: [0, 0.25, 0.6, 1] }}>
          <rect x={60} y={74} width={64} height={38} rx={6} fill="var(--bg)" stroke={c.tone} strokeWidth={1.5} />
          <text x={92} y={90} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="var(--fg)" style={mono}>BU</text>
          <text x={92} y={103} textAnchor="middle" fontSize={8.5} fill={c.tone} style={mono}>{c.label}</text>
        </motion.g>
      ))}
      {cards.map((_, i) => (
        <motion.text key={`c${i}`} x={140} y={156} textAnchor="middle" fontSize={14} fontWeight={700} fill="var(--teal)" style={mono} initial={{ opacity: 0, y: 4 }} animate={play ? { opacity: [0, 1, 0], y: [4, 0, -4] } : {}} transition={{ duration: 0.9, delay: 1.5 + i * 1.3 }}>
          ✓
        </motion.text>
      ))}
      <motion.text x={140} y={166} textAnchor="middle" fontSize={9.5} fill="var(--rose)" style={sans} initial={{ opacity: 0 }} animate={play ? { opacity: 1 } : {}} transition={{ delay: 4.6 }}>
        {m.portao}
      </motion.text>
    </svg>
  );
}

export function MiniAnim({ kind, play }: { kind: Grave["anim"]; play: boolean }) {
  switch (kind) {
    case "trava":
      return <Trava play={play} />;
    case "caneta":
      return <Caneta play={play} />;
    case "certificado":
      return <Certificado play={play} />;
    case "juiz":
      return <Juiz play={play} />;
    case "formularios":
      return <Formularios play={play} />;
    case "fase":
      return <Fase play={play} />;
  }
}
