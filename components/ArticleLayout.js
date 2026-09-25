import Link from "next/link";
import Schema from "@/components/Schema";

const SITE = "https://bnbacceleratorreviews.com";

export function articleMetadata(item, basePath) {
  if (!item) return { title: "Page Not Found" };
  const url = `${SITE}${basePath}/${item.slug}`;
  return {
    title: item.metaTitle || item.title,
    description: item.metaDescription,
    openGraph: {
      title: item.metaTitle || item.title,
      description: item.metaDescription,
      type: "article",
      url,
      siteName: "BnB Accelerator Reviews",
      publishedTime: item.publishDate,
    },
    alternates: { canonical: url },
  };
}

export default function ArticleLayout({ item, basePath, sectionLabel, related }) {
  const url = `${SITE}${basePath}/${item.slug}`;
  const date = new Date(item.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    datePublished: item.publishDate,
    dateModified: item.publishDate,
    author: { "@type": "Organization", name: item.author },
    publisher: { "@type": "Organization", name: "BnB Accelerator Reviews", url: SITE },
    description: item.metaDescription,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: sectionLabel, item: `${SITE}${basePath}` },
      { "@type": "ListItem", position: 3, name: item.title, item: url },
    ],
  };

  return (
    <>
      <Schema data={articleData} type="Article" />
      <Schema data={crumbs} type="BreadcrumbList" />

      <nav className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href={basePath} className="hover:text-blue-600">{sectionLabel}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium truncate max-w-xs">{item.title}</li>
          </ol>
        </div>
      </nav>

      <header className="bg-white pt-12 pb-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            {item.category || item.region || sectionLabel}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {item.question || item.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="font-medium text-gray-700">{item.author}</span>
            <span>|</span>
            <time dateTime={item.publishDate}>{date}</time>
            <span>|</span>
            <span>{item.readTime}</span>
          </div>
          <p className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
            Disclosure: BnB Accelerator owns and controls this website. This page is educational
            and is not legal, tax, or investment advice. Individual results vary.
          </p>
        </div>
      </header>

      <article className="bg-white pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose-custom" dangerouslySetInnerHTML={{ __html: item.content }} />
        </div>
      </article>

      {related && related.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">Keep reading</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug} className="rounded-xl border border-gray-200 bg-white p-5">
                  <Link href={`${basePath}/${r.slug}`} className="font-semibold text-gray-900 hover:text-blue-600">
                    {r.title}
                  </Link>
                  <p className="mt-2 text-sm text-gray-600">{r.excerpt}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Want to see documented client evidence?</h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/results" className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-900 hover:bg-blue-50">
              View documented results
            </Link>
            <a href="https://bnbaccelerator.com" target="_blank" rel="noopener noreferrer" className="rounded-lg border-2 border-white/30 px-8 py-3 font-semibold text-white hover:bg-white/10">
              Visit BnB Accelerator
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
