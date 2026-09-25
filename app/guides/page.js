import Link from 'next/link';
import { guides } from '@/data/guides';
import Schema from '@/components/Schema';

const BASE = 'https://bnbacceleratorreviews.com';

export const metadata = {
  title: 'STR Program Buyer Guides',
  description:
    'Practical guides for evaluating short-term rental coaching, accelerator, and done-for-you programs: questions to ask, red flags, realistic results, and service models compared.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE}/guides` },
  openGraph: {
    title: 'STR Program Buyer Guides | BnB Accelerator Reviews',
    description:
      'Practical guides for evaluating short-term rental coaching, accelerator, and done-for-you programs.',
    url: `${BASE}/guides`,
    type: 'website',
    siteName: 'BnB Accelerator Reviews',
  },
};

export default function GuidesIndexPage() {
  const itemList = {
    itemListElement: guides.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE}/guides/${g.slug}`,
      name: g.title,
    })),
  };

  return (
    <>
      <Schema data={itemList} type="ItemList" />
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#967744]">Buyer Guides</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How to Choose a Short-Term Rental Program
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 leading-relaxed">
            Independent-minded guides to help you evaluate any STR coaching, accelerator, or
            done-for-you service, including ours. This site is owned by BNB Accelerator, and we
            encourage you to apply these standards to every program you consider.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="block rounded-sm border border-[#e2ddd3] bg-white p-6 hover:border-[#967744] transition-colors"
            >
              <h2 className="text-xl font-semibold text-gray-900">{g.title}</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">{g.excerpt}</p>
              <p className="mt-4 text-sm text-gray-500">{g.readTime}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
