"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useLang } from "@/i18n/context";
import { useMounted } from "@/lib/use-mounted";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { dict } = useLang();
  const mounted = useMounted();
  const dark = mounted ? theme === "dark" : true;
  const t = dict.common.nav.toggleTheme;
  return (
    <button
      type="button"
      aria-label={dark ? t.toLight : t.toDark}
      title={dark ? t.toLight : t.toDark}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg-2 transition hover:border-line-strong hover:text-fg"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
