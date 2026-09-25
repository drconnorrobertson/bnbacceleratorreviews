import { notFound } from "next/navigation";
import { allMarkets } from "@/data/markets";
import ArticleLayout, { articleMetadata } from "@/components/ArticleLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return allMarkets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return articleMetadata(allMarkets.find((p) => p.slug === slug), "/markets");
}

export default async function Page({ params }) {
  const { slug } = await params;
  const item = allMarkets.find((p) => p.slug === slug);
  if (!item) notFound();
  const idx = allMarkets.indexOf(item);
  const related = [1, 2, 3, 4].map((n) => allMarkets[(idx + n) % allMarkets.length]).filter((r) => r.slug !== item.slug);
  return <ArticleLayout item={item} basePath="/markets" sectionLabel="STR Markets" related={related} />;
}
