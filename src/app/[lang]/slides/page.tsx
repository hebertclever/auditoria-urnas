import { Section, Heading, Lead, Eyebrow } from "@/components/ui/section";
import { resolveLang, metaFor } from "@/i18n/server";

export const generateMetadata = metaFor("slides");

export default async function SlidesPage({ params }: PageProps<"/[lang]/slides">) {
  const { dict } = await resolveLang(params);
  return (
    <Section>
      <Eyebrow tone="amber">slides</Eyebrow>
      <Heading as="h1">{dict.slides.meta.title}</Heading>
      <Lead className="mt-6">{dict.slides.meta.description}</Lead>
    </Section>
  );
}
