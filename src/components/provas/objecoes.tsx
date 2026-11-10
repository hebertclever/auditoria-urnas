"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { objecoes } from "@/data/objecoes";
import { useLang } from "@/i18n/context";
import { t } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function Objecoes() {
  const { lang } = useLang();
  const L = <T extends { pt: string; en: string }>(x: T) => t(x, lang);
  const [open, setOpen] = useState(0);

  return (
    <ul className="flex flex-col gap-3">
      {objecoes.itens.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={i} className="overflow-hidden rounded-2xl border border-line bg-bg-elev">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
            >
              <span className="display-md text-base font-semibold text-fg sm:text-lg">{L(it.objecao)}</span>
              <Plus className={cn("h-5 w-5 shrink-0 text-amber transition-transform", isOpen && "rotate-45")} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-line px-5 py-4 text-[0.98rem] leading-relaxed text-fg-2 sm:px-6">
                    {L(it.resposta)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
