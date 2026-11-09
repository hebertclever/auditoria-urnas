import { Section, Heading, Lead, Eyebrow } from "@/components/ui/section";
import { resolveLang, metaFor } from "@/i18n/server";

export const generateMetadata = metaFor("dashboard");

export default async function DashboardPage({ params }: PageProps<"/[lang]/dashboard">) {
  const { dict } = await resolveLang(params);
  return (
    <Section>
      <Eyebrow tone="teal">dashboard</Eyebrow>
      <Heading as="h1">{dict.dashboard.meta.title}</Heading>
      <Lead className="mt-6">{dict.dashboard.meta.description}</Lead>
    </Section>
  );
}
