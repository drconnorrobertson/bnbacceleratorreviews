import { notFound } from "next/navigation";
import { learnGuides } from "@/data/learn";
import ArticleLayout, { articleMetadata } from "@/components/ArticleLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return learnGuides.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return articleMetadata(learnGuides.find((p) => p.slug === slug), "/learn");
}

export default async function Page({ params }) {
  const { slug } = await params;
  const item = learnGuides.find((p) => p.slug === slug);
  if (!item) notFound();
  const idx = learnGuides.indexOf(item);
  const related = [1, 2, 3, 4].map((n) => learnGuides[(idx + n) % learnGuides.length]).filter((r) => r.slug !== item.slug);
  return <ArticleLayout item={item} basePath="/learn" sectionLabel="STR Learning Guides" related={related} />;
}
