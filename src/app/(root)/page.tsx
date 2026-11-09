"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { defaultLocale, isLocale } from "@/i18n/config";

export default function RootRedirect() {
  const router = useRouter();
  useEffect(() => {
    let lang: string = defaultLocale;
    try {
      const saved = localStorage.getItem("lang");
      if (saved && isLocale(saved)) lang = saved;
      else if (navigator.language?.toLowerCase().startsWith("en")) lang = "en";
    } catch {}
    router.replace(`/${lang}/`);
  }, [router]);
  return (
    <div className="flex min-h-screen items-center justify-center p-8 font-mono text-sm text-fg-3">
      <p>
        <Link href="/pt/" className="underline">Português</Link> · <Link href="/en/" className="underline">English</Link>
      </p>
    </div>
  );
}
