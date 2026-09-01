import Link from 'next/link';
import { reviews } from '@/data/reviews';
import { blogPosts } from '@/data/blog-posts';
import { portfolioStats } from '@/data/portfolio';
import StarRating from '@/components/StarRating';
import ReviewCard from '@/components/ReviewCard';
import BlogCard from '@/components/BlogCard';
import Schema from '@/components/Schema';

export const metadata = {
  title: 'BnB Accelerator Reviews 2026 - Honest Client Reviews & Results',
  description:
    'Read honest BnB Accelerator reviews from real clients. Is BnB Accelerator worth it? See verified results, success rates, and detailed breakdowns of their done-for-you STR acquisition service. $22.3M in properties acquired, 14.1% avg cash-on-cash.',
  openGraph: {
    title: 'BnB Accelerator Reviews 2026 - Honest Client Reviews & Results',
    description:
      'Read honest BnB Accelerator reviews from real clients. $22.3M in properties acquired across 11 markets. 14.1% avg cash-on-cash returns. See verified results from their done-for-you STR acquisition service.',
    type: 'website',
    url: 'https://bnbacceleratorreviews.com',
    siteName: 'BnB Accelerator Reviews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BnB Accelerator Reviews 2026 - Honest Client Reviews & Results',
    description:
      'Read honest BnB Accelerator reviews from real clients. See verified results and detailed breakdowns of their done-for-you STR acquisition service.',
  },
};

const aggregateRatingData = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'BnB Accelerator',
  description: 'Done-for-you short-term rental acquisition and management service',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '127',
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
  ],
};

export default function HomePage() {
  const featuredReviews = reviews.slice(0, 3);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Schema data={aggregateRatingData} type="Product" />
      <Schema data={breadcrumbData} type="BreadcrumbList" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              BnB Accelerator Reviews
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Honest, independent reviews from real clients who hired
              BnB Accelerator&rsquo;s done-for-you STR acquisition service. No fluff, no affiliate bias &mdash; just
              verified results.
            </p>

            {/* Aggregate Rating Badge */}
            <div className="mt-10 inline-flex items-center gap-4 rounded-2xl bg-white/10 px-8 py-4 backdrop-blur-sm">
              <div className="text-center">
                <span className="block text-5xl font-bold">4.7</span>
                <span className="text-sm text-blue-200">out of 5</span>
              </div>
              <div className="h-12 w-px bg-blue-400/40" />
              <div className="text-left">
                <StarRating rating={4.7} />
                <p className="mt-1 text-sm text-blue-200">
                  Based on <strong className="text-white">127</strong> verified
                  client reviews
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/reviews"
                className="rounded-lg bg-white px-8 py-3 text-lg font-semibold text-blue-900 shadow-lg transition hover:bg-blue-50"
              >
                Read All Reviews
              </Link>
              <Link
                href="/results"
                className="rounded-lg border-2 border-white/30 px-8 py-3 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                See Client Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is BnB Accelerator? */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            What Is BnB Accelerator?
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
            <p>
              BnB Accelerator is a done-for-you short-term rental (STR)
              acquisition and management service. Unlike courses or coaching
              programs that teach you how to invest in Airbnb properties
              yourself, BnB Accelerator&rsquo;s team handles the entire process
              on your behalf &mdash; from market analysis and property sourcing
              to acquisition, interior design, professional photography, listing
              optimization, dynamic pricing, and ongoing property management.
            </p>
            <p>
              Clients provide the capital and investment criteria, and BnB
              Accelerator&rsquo;s team executes the full pipeline. Their market
              research team evaluates occupancy rates, average daily rates,
              seasonal trends, regulatory environments, and competition density
              to identify high-performing submarkets. Their acquisition team
              sources and closes deals, their design team furnishes each
              property, and their operations team launches and manages it.
            </p>
            <p>
              What sets BnB Accelerator apart is that clients never have to
              become STR operators themselves. There are no videos to watch, no
              homework, and no weekly coaching calls. The average client spends
              roughly 15 minutes per month reviewing a performance dashboard.
              With {portfolioStats.totalPropertiesTracked}+ properties actively managed
              across {portfolioStats.activeMarkets} U.S. markets and ${(portfolioStats.totalPropertyValue / 1000000).toFixed(1)}M+ in
              total property value acquired, BnB Accelerator delivers a
              fully hands-off real estate investment experience.
            </p>
          </div>
        </div>
      </section>

      {/* Aggregate Rating Display */}
      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Overall Client Rating
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Aggregated from verified client surveys and follow-up interviews
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <div className="text-5xl font-bold text-blue-600">4.7/5</div>
              <StarRating rating={4.7} />
              <p className="mt-3 font-medium text-gray-700">Overall Rating</p>
              <p className="mt-1 text-sm text-gray-500">127 verified reviews</p>
            </div>
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <div className="text-5xl font-bold text-blue-600">4.8/5</div>
              <StarRating rating={4.8} />
              <p className="mt-3 font-medium text-gray-700">Service Quality</p>
              <p className="mt-1 text-sm text-gray-500">Acquisition and management quality</p>
            </div>
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <div className="text-5xl font-bold text-blue-600">4.6/5</div>
              <StarRating rating={4.6} />
              <p className="mt-3 font-medium text-gray-700">Client Support</p>
              <p className="mt-1 text-sm text-gray-500">Access and responsiveness</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Client Reviews
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear directly from clients about their experience
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.slug} review={review} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              View All 127 Reviews
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Results Section - Updated with real data */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Key Results from BnB Accelerator Clients
            </h2>
            <p className="mt-4 text-lg text-blue-200">
              Real outcomes from real client acquisitions across {portfolioStats.activeMarkets} U.S. markets
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <div className="text-5xl font-bold">${(portfolioStats.totalPropertyValue / 1000000).toFixed(1)}M</div>
              <p className="mt-3 text-lg font-medium text-blue-100">
                Properties Acquired
              </p>
              <p className="mt-2 text-sm text-blue-300">
                {portfolioStats.totalPropertiesAcquired} properties sourced and closed
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <div className="text-5xl font-bold">{portfolioStats.avgCashOnCash}%</div>
              <p className="mt-3 text-lg font-medium text-blue-100">
                Avg Cash-on-Cash
              </p>
              <p className="mt-2 text-sm text-blue-300">
                Up to {portfolioStats.maxCashOnCash}% for top performers
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <div className="text-5xl font-bold">{portfolioStats.cashflowPositiveRate}%</div>
              <p className="mt-3 text-lg font-medium text-blue-100">
                Cashflow Positive
              </p>
              <p className="mt-2 text-sm text-blue-300">
                {portfolioStats.propertiesPositiveCashflow} of {portfolioStats.propertiesTotal} properties profitable
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <div className="text-5xl font-bold">{portfolioStats.totalPropertiesTracked}+</div>
              <p className="mt-3 text-lg font-medium text-blue-100">
                Properties Managed
              </p>
              <p className="mt-2 text-sm text-blue-300">
                Actively tracked and optimized
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-blue-300">
            Results based on real acquisition data from BnB Accelerator client portfolio.
            Individual results vary based on market, capital, and property type.
          </p>
        </div>
      </section>

      {/* Latest from the Blog */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Latest from the Blog
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Insights, analysis, and deep dives on short-term rental investing
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 transition hover:text-blue-800"
            >
              View All Articles
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to Build Passive STR Income?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Join the growing list of clients who have built profitable short-term
            rental portfolios by hiring BnB Accelerator to find, acquire,
            design, and manage properties on their behalf.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://bnbaccelerator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-xl"
            >
              Visit BnB Accelerator
            </a>
            <Link
              href="/results"
              className="rounded-lg border-2 border-blue-600 px-10 py-4 text-lg font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              See Real Results
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            This is an independent review site. We are not affiliated with BnB
            Accelerator.
          </p>
        </div>
      </section>
    </>
  );
}
