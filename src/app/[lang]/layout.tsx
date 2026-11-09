import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { Providers } from "@/components/providers";
import { Nav } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { LangProvider } from "@/i18n/context";
import { getDictionary } from "@/i18n/dictionaries";
import { htmlLang, isLocale, locales, defaultLocale, type Locale } from "@/i18n/config";

const display = Bricolage_Grotesque({ variable: "--font-display", subsets: ["latin"], axes: ["opsz", "wdth"] });
const sans = Instrument_Sans({ variable: "--font-sans", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

function resolve(lang: string): Locale {
  return isLocale(lang) ? lang : defaultLocale;
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const lang = resolve((await params).lang);
  const d = getDictionary(lang).home.meta;
  return {
    title: { default: d.title, template: `%s · ${d.title}` },
    description: d.description,
    metadataBase: new URL("https://hebertclever.github.io/auditoria-urnas/"),
    alternates: { languages: { "pt-BR": "/pt/", en: "/en/" } },
    openGraph: { title: d.title, description: d.description, locale: lang === "pt" ? "pt_BR" : "en_US", type: "website" },
  };
}

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const lang = resolve((await params).lang);
  const dict = getDictionary(lang);
  return (
    <html
      lang={htmlLang[lang]}
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-fg">
        <Providers>
          <LangProvider lang={lang} dict={dict}>
            <Nav />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </LangProvider>
        </Providers>
      </body>
    </html>
  );
}
