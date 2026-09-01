import { reviews } from "@/data/reviews";
import { notFound } from "next/navigation";
import StarRating from "@/components/StarRating";
import Schema from "@/components/Schema";
import Link from "next/link";

export async function generateStaticParams() {
  return reviews.map((review) => ({
    slug: review.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const review = reviews.find((r) => r.slug === slug);

  if (!review) {
    return {
      title: "Review Not Found",
    };
  }

  return {
    title: `${review.name}'s BnB Accelerator Review - From ${review.occupation} to STR Investor`,
    description: `Read ${review.name}'s honest BnB Accelerator review. ${review.name} from ${review.location} built ${review.results.properties} ${review.results.properties === 1 ? "property" : "properties"} generating ${review.results.monthlyRevenue}/month in ${review.results.timeframe}. See the full before-and-after story.`,
    alternates: {
      canonical: `https://bnbacceleratorreviews.com/reviews/${review.slug}`,
    },
    openGraph: {
      title: `${review.name}'s BnB Accelerator Review - From ${review.occupation} to STR Investor`,
      description: `${review.name} from ${review.location} shares their real BnB Accelerator experience. ${review.results.properties} properties, ${review.results.monthlyRevenue}/month in ${review.results.timeframe}.`,
      url: `https://bnbacceleratorreviews.com/reviews/${review.slug}`,
    },
  };
}

export default async function ReviewPage({ params }) {
  const { slug } = await params;
  const review = reviews.find((r) => r.slug === slug);

  if (!review) {
    notFound();
  }

  const formattedReviewDate = new Date(review.reviewDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const formattedJoinDate = new Date(review.joinDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <>
      {/* Breadcrumb Navigation */}
      <nav
        className="bg-white border-b border-gray-200 py-3"
        aria-label="Breadcrumb"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li>
              <Link
                href="/reviews"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Reviews
              </Link>
            </li>
            <li>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li className="text-gray-900 font-medium truncate">
              {review.name}&apos;s Review
            </li>
          </ol>
        </div>
      </nav>

      {/* Review Header */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">
                {review.name}
              </h1>
              <p className="text-blue-100 text-lg mb-1">{review.occupation}</p>
              <p className="text-blue-200 text-sm flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {review.location}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-2">
              <StarRating rating={review.rating} />
              <p className="text-blue-200 text-sm">
                Reviewed on {formattedReviewDate}
              </p>
              <p className="text-blue-200 text-xs">
                Member since {formattedJoinDate}
              </p>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 text-blue-50">
            &ldquo;{review.title}&rdquo;
          </h2>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12">
        {/* The Before Story */}
        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-sm font-bold">
              1
            </span>
            The Before Story
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed">{review.beforeStory}</p>
          </div>
        </section>

        {/* Results Highlight Box */}
        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
              2
            </span>
            Results Achieved
          </h3>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 sm:p-8 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <p className="text-3xl sm:text-4xl font-extrabold mb-1">
                  {review.results.properties}
                </p>
                <p className="text-blue-200 text-sm font-medium">
                  {review.results.properties === 1
                    ? "Property Acquired"
                    : "Properties Acquired"}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <p className="text-3xl sm:text-4xl font-extrabold mb-1">
                  {review.results.monthlyRevenue}
                </p>
                <p className="text-blue-200 text-sm font-medium">
                  Monthly Revenue
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <p className="text-3xl sm:text-4xl font-extrabold mb-1">
                  {review.results.timeframe}
                </p>
                <p className="text-blue-200 text-sm font-medium">Timeframe</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Full Review */}
        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
              3
            </span>
            The Full Review
          </h3>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed text-base">
              {review.fullReview}
            </p>
          </div>
        </section>

        {/* The After Story */}
        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-bold">
              4
            </span>
            The After Story
          </h3>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed">
              {review.afterStory}
            </p>
          </div>
        </section>

        {/* Property Types */}
        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
              5
            </span>
            Property Types Managed
          </h3>
          <div className="flex flex-wrap gap-3">
            {review.propertyTypes.map((type) => (
              <span
                key={type}
                className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full border border-blue-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"
                  />
                </svg>
                {type}
              </span>
            ))}
          </div>
        </section>

        {/* Would Recommend To */}
        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Would Recommend To
          </h3>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Anyone looking to build a short-term rental business from
                  scratch
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  People who want a structured, step-by-step program with real
                  community support
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Working professionals seeking additional income through rental
                  arbitrage or property investment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Existing real estate professionals who want to add STR
                  expertise to their skill set
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Back to Reviews + CTA */}
        <section className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-200">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to All Reviews
          </Link>
          <a
            href="https://bnbaccelerator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Visit BnB Accelerator
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </section>
      </div>

      {/* Review Schema */}
      <Schema
        type="Review"
        data={{
          author: {
            "@type": "Person",
            name: review.name,
            jobTitle: review.occupation,
          },
          datePublished: review.reviewDate,
          reviewBody: review.fullReview,
          reviewRating: {
            "@type": "Rating",
            ratingValue: review.rating.toString(),
            bestRating: "5",
            worstRating: "1",
          },
          itemReviewed: {
            "@type": "Course",
            name: "BnB Accelerator",
            description:
              "A comprehensive short-term rental education program that teaches students how to build profitable Airbnb and STR businesses.",
            provider: {
              "@type": "Organization",
              name: "BnB Accelerator",
              url: "https://bnbaccelerator.com",
            },
          },
        }}
      />

      {/* Breadcrumb Schema */}
      <Schema
        type="BreadcrumbList"
        data={{
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://bnbacceleratorreviews.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Reviews",
              item: "https://bnbacceleratorreviews.com/reviews",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: `${review.name}'s Review`,
              item: `https://bnbacceleratorreviews.com/reviews/${review.slug}`,
            },
          ],
        }}
      />
    </>
  );
}
