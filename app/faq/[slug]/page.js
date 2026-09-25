import { notFound } from "next/navigation";
import { faqAnswers } from "@/data/faq-answers";
import ArticleLayout, { articleMetadata } from "@/components/ArticleLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return faqAnswers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return articleMetadata(faqAnswers.find((p) => p.slug === slug), "/faq");
}

export default async function Page({ params }) {
  const { slug } = await params;
  const item = faqAnswers.find((p) => p.slug === slug);
  if (!item) notFound();
  const idx = faqAnswers.indexOf(item);
  const related = [1, 2, 3, 4].map((n) => faqAnswers[(idx + n) % faqAnswers.length]).filter((r) => r.slug !== item.slug);
  return <ArticleLayout item={item} basePath="/faq" sectionLabel="FAQ" related={related} />;
}
