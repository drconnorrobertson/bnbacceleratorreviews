import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides } from '@/data/guides';
import Schema from '@/components/Schema';

const BASE = 'https://bnbacceleratorreviews.com';

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return { title: 'Guide Not Found' };
  const url = `${BASE}/guides/${guide.slug}`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
      type: 'article',
      siteName: 'BnB Accelerator Reviews',
      modifiedTime: guide.updated,
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const url = `${BASE}/guides/${guide.slug}`;
  const related = guides.filter((g) => g.slug !== guide.slug);

  const articleData = {
    headline: guide.title,
    description: guide.metaDescription,
    dateModified: guide.updated,
    datePublished: guide.updated,
    author: { '@type': 'Organization', name: 'BnB Accelerator Reviews' },
    publisher: { '@type': 'Organization', name: 'BnB Accelerator Reviews', url: BASE },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const faqData = {
    mainEntity: guide.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbData = {
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE}/guides` },
      { '@type': 'ListItem', position: 3, name: guide.title, item: url },
    ],
  };

  return (
    <>
      <Schema data={articleData} type="Article" />
      <Schema data={faqData} type="FAQPage" />
      <Schema data={breadcrumbData} type="BreadcrumbList" />

      <nav className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-[#967744]">Home</Link></li>
            <li>/</li>
            <li><Link href="/guides" className="hover:text-[#967744]">Guides</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium truncate max-w-xs">{guide.title}</li>
          </ol>
        </div>
      </nav>

      <header className="bg-white pt-12 pb-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            BnB Accelerator Reviews Team · Updated <time dateTime={guide.updated}>September 24, 2026</time> · {guide.readTime}
          </p>
        </div>
      </header>

      <article className="bg-white pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose-custom" dangerouslySetInnerHTML={{ __html: guide.content }} />
        </div>
      </article>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-6">
            {guide.faqs.map((f) => (
              <div key={f.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900">{f.q}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Disclosure: this site is owned by BNB Accelerator. This guide is general education, not
            financial, legal, or tax advice. Real estate investing involves risk and results vary.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">More Buyer Guides</h2>
          <ul className="mt-4 space-y-2">
            {related.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="text-[#967744] hover:underline">
                  {g.title}
                </Link>
              </li>
            ))}
            <li><Link href="/faq" className="text-[#967744] hover:underline">BNB Accelerator FAQ</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
