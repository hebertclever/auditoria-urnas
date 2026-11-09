"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/section";
import { useLang } from "@/i18n/context";
import { href } from "@/i18n/routes";
import { HeroCounter } from "./hero-counter";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { lang, dict } = useLang();
  const h = dict.home.hero;
  return (
    <section className="relative overflow-hidden">
      <div className="grid-texture pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="glow-amber pointer-events-none absolute left-1/2 top-[-18rem] -z-10 h-[42rem] w-[70rem] -translate-x-1/2 opacity-70 blur-3xl" aria-hidden />
      <Container className="grid items-end gap-12 pb-20 pt-20 sm:pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28">
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Eyebrow tone="amber">{h.eyebrow}</Eyebrow>
          </motion.div>
          <h1 className="display mt-6 text-[clamp(2.5rem,6.4vw,5.1rem)] font-semibold">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.08 }}
            >
              {h.h1a}
            </motion.span>
            <motion.span
              className="block text-fg-2"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.22 }}
            >
              {h.h1b}
            </motion.span>
          </h1>
          <motion.p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-2 sm:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.38 }}
          >
            {h.lead}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
          >
            <Link
              href={href(lang, "/cadastro/")}
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-semibold text-[#0a0c10] shadow-[0_0_0_0_var(--glow-amber)] transition hover:shadow-[0_0_0_6px_var(--glow-amber)]"
            >
              {h.ctaCadastro}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={href(lang, "/codigo/")}
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-semibold text-fg transition hover:border-fg"
            >
              {h.ctaCodigo}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
        >
          <HeroCounter />
        </motion.div>
      </Container>
    </section>
  );
}
