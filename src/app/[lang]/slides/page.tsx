import { metaFor } from "@/i18n/server";
import { Deck } from "@/components/slides/deck";

export const generateMetadata = metaFor("slides");

export default function SlidesPage() {
  return <Deck />;
}
