import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import BlogCard from '@/components/BlogCard';
import Schema from '@/components/Schema';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url: `https://bnbacceleratorreviews.com/blog/${post.slug}`,
      siteName: 'BnB Accelerator Reviews',
      publishedTime: post.publishDate,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
    alternates: {
      canonical: `https://bnbacceleratorreviews.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const blogPostingData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BnB Accelerator Reviews',
      url: 'https://bnbacceleratorreviews.com',
    },
    description: post.metaDescription,
    articleBody: post.content.replace(/<[^>]*>/g, ''),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://bnbacceleratorreviews.com/blog/${post.slug}`,
    },
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://bnbacceleratorreviews.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://bnbacceleratorreviews.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://bnbacceleratorreviews.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <Schema data={blogPostingData} type="BlogPosting" />
      <Schema data={breadcrumbData} type="BreadcrumbList" />

      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-gray-900 font-medium truncate max-w-xs">
              {post.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Post Header */}
      <header className="bg-white pt-12 pb-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                {post.author.charAt(0)}
              </div>
              <span className="font-medium text-gray-700">{post.author}</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <time dateTime={post.publishDate}>{formattedDate}</time>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="bg-white pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Author Bio Box */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
                  About the Author
                </p>
                <h3 className="mt-1 text-xl font-semibold text-gray-900">
                  {post.author}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Covering short-term rental investing, market trends, and program
                  reviews. Our editorial team researches and writes independent,
                  data-driven content to help STR investors make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Related Articles
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Continue learning about short-term rental investing
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 transition hover:text-blue-800"
              >
                View All Articles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Start Your STR Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            BnB Accelerator provides the structured coaching, community support,
            and deal analysis tools to help you build a profitable short-term
            rental portfolio.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://bnbaccelerator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-10 py-4 text-lg font-semibold text-blue-900 shadow-lg transition hover:bg-blue-50 hover:shadow-xl"
            >
              Visit BnB Accelerator
            </a>
            <Link
              href="/reviews"
              className="rounded-lg border-2 border-white/30 px-10 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
            >
              Read Student Reviews
            </Link>
          </div>
          <p className="mt-6 text-sm text-blue-300">
            This is an independent review site. We are not affiliated with BnB
            Accelerator.
          </p>
        </div>
      </section>
    </>
  );
}
