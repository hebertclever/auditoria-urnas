"use client";

import Link from "next/link";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/ui/section";
import { Callout } from "@/components/ui/callout";
import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/i18n/context";
import { href } from "@/i18n/routes";

export function NaoProvamos() {
  const { lang, dict } = useLang();
  const n = dict.home.naoProvamos;
  return (
    <Section className="pt-0 sm:pt-0">
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <Eyebrow tone="amber">{n.eyebrow}</Eyebrow>
            <Heading className="mt-3">{n.title}</Heading>
            <Link
              href={href(lang, "/metodo/#limites")}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber"
            >
              {n.link}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <Callout tone="amber">
            <ul className="flex flex-col gap-4">
              {n.items.map((it, i) => (
                <li key={i} className="flex gap-3">
                  <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </Callout>
        </div>
      </Reveal>
    </Section>
  );
}
