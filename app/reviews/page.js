import { reviews } from "@/data/reviews";
import ReviewCard from "@/components/ReviewCard";
import Schema from "@/components/Schema";
import StarRating from "@/components/StarRating";
import Link from "next/link";

export const metadata = {
  title: "BnB Accelerator Reviews - Real Client Testimonials & Results (2026)",
  description:
    "Read real BnB Accelerator reviews and testimonials from verified clients. See actual income results, before-and-after stories, and honest ratings from BnB Accelerator clients in 2026.",
  alternates: {
    canonical: "https://bnbacceleratorreviews.com/reviews",
  },
  openGraph: {
    title:
      "BnB Accelerator Reviews - Real Client Testimonials & Results (2026)",
    description:
      "Read real BnB Accelerator reviews and testimonials from verified clients. See actual income results, before-and-after stories, and honest ratings from BnB Accelerator clients.",
    url: "https://bnbacceleratorreviews.com/reviews",
  },
};

const ratingBreakdown = [
  { stars: 5, label: "5 star", percentage: 68 },
  { stars: 4, label: "4 star", percentage: 24 },
  { stars: 3, label: "3 star", percentage: 6 },
  { stars: 2, label: "2 star", percentage: 1 },
  { stars: 1, label: "1 star", percentage: 1 },
];

export default function ReviewsPage() {
  const aggregateRating = 4.7;
  const totalReviews = 127;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            BnB Accelerator Reviews
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Real testimonials from verified clients who have built profitable
            short-term rental businesses through BnB Accelerator's done-for-you acquisition service.
          </p>
          <div className="inline-flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl sm:text-5xl font-extrabold">
                {aggregateRating}
              </span>
              <div className="flex flex-col items-start">
                <StarRating rating={aggregateRating} />
                <span className="text-sm text-blue-200 mt-1">out of 5</span>
              </div>
            </div>
            <p className="text-blue-100 text-sm">
              Based on{" "}
              <span className="font-semibold text-white">{totalReviews}</span>{" "}
              verified client reviews
            </p>
          </div>
        </div>
      </section>

      {/* Rating Breakdown Section */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Rating Breakdown
          </h2>
          <div className="space-y-3">
            {ratingBreakdown.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-14 shrink-0">
                  {item.label}
                </span>
                <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      item.stars >= 4
                        ? "bg-blue-600"
                        : item.stars === 3
                        ? "bg-blue-400"
                        : "bg-blue-300"
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 w-10 text-right shrink-0">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Ratings collected from verified BnB Accelerator clients between
            January 2025 and September 2026.
          </p>
        </div>
      </section>

      {/* All Reviews Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
            Client Reviews & Testimonials
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Every review below is from a verified BnB Accelerator student.
            Click any review to read the full story, results, and before-and-after
            details.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.slug} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Review Section */}
      <section className="bg-blue-50 border-y border-blue-100 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Share Your Review
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Are you a BnB Accelerator client? We would love to hear about your
            experience. Share your story, your results, and help future students
            make an informed decision.
          </p>
          <a
            href="mailto:reviews@bnbacceleratorreviews.com?subject=My%20BnB%20Accelerator%20Review"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
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
                d="M16 12H8m8 0l-4-4m4 4l-4 4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Submit Your Review
          </a>
          <p className="text-xs text-gray-500 mt-3">
            All submissions are reviewed for authenticity before publishing.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Build Passive STR Income?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join thousands of students who have built profitable short-term
            rental businesses with BnB Accelerator. See what the program can do
            for you.
          </p>
          <a
            href="https://bnbaccelerator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-lg"
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
        </div>
      </section>

      {/* Schema Markup */}
      <Schema
        type="AggregateRating"
        data={{
          itemReviewed: {
            "@type": "Service",
            name: "BnB Accelerator",
            description:
              "A done-for-you short-term rental acquisition and management service that builds profitable Airbnb and STR portfolios for clients.",
            provider: {
              "@type": "Organization",
              name: "BnB Accelerator",
              url: "https://bnbaccelerator.com",
            },
          },
          ratingValue: aggregateRating.toString(),
          bestRating: "5",
          worstRating: "1",
          ratingCount: totalReviews.toString(),
        }}
      />
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
          ],
        }}
      />
    </>
  );
}
