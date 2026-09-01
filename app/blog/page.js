import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import BlogCard from '@/components/BlogCard';
import Schema from '@/components/Schema';

export const metadata = {
  title: 'STR Investing Blog - Tips, Guides & BnB Accelerator Insights',
  description:
    'Expert short-term rental investing tips, STR market analysis, and BnB Accelerator program insights. Learn strategies for Airbnb hosting, rental arbitrage, property management, and scaling your STR portfolio.',
  openGraph: {
    title: 'STR Investing Blog - Tips, Guides & BnB Accelerator Insights',
    description:
      'Expert short-term rental investing tips, STR market analysis, and BnB Accelerator program insights. Learn strategies for Airbnb hosting, rental arbitrage, and scaling your STR portfolio.',
    type: 'website',
    url: 'https://bnbacceleratorreviews.com/blog',
    siteName: 'BnB Accelerator Reviews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STR Investing Blog - Tips, Guides & BnB Accelerator Insights',
    description:
      'Expert short-term rental investing tips, market analysis, and BnB Accelerator program insights.',
  },
  alternates: {
    canonical: 'https://bnbacceleratorreviews.com/blog',
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
  ],
};

export default function BlogPage() {
  return (
    <>
      <Schema data={breadcrumbData} type="BreadcrumbList" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Short-Term Rental Investing Blog
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Educational guides, market analysis, and actionable strategies for
              building a profitable STR portfolio. Written by investors, for
              investors.
            </p>
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              All Articles
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Browse our full library of short-term rental investing guides and
              insights
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Stay Up to Date
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get the latest STR investing tips, market updates, and program
            insights delivered straight to your inbox. No spam, just valuable
            content.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full max-w-md rounded-lg border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:w-auto sm:min-w-[320px]"
            />
            <button
              type="button"
              className="w-full rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg sm:w-auto"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Join 2,500+ STR investors. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Accelerate Your STR Business?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            BnB Accelerator gives you the coaching, community, and deal analysis
            tools to build a profitable short-term rental portfolio faster than
            going it alone.
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
