import Link from "next/link";
import StarRating from "./StarRating";

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {review.name}
          </h3>
          <p className="text-sm text-gray-500">
            {review.occupation} &middot; {review.location}
          </p>
        </div>
        <StarRating rating={review.rating} />
      </div>

      <h4 className="text-base font-medium text-gray-800 mb-2">
        {review.title}
      </h4>

      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {review.summary}
      </p>

      <div className="bg-blue-50 rounded-lg p-4 mb-4">
        <h5 className="text-xs font-semibold text-blue-800 uppercase tracking-wider mb-2">
          Results Achieved
        </h5>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="text-lg font-bold text-blue-700">
              {review.results.properties}
            </p>
            <p className="text-xs text-blue-600">
              {review.results.properties === 1 ? "Property" : "Properties"}
            </p>
          </div>
          <div>
            <p className="text-lg font-bold text-blue-700">
              {review.results.monthlyRevenue}
            </p>
            <p className="text-xs text-blue-600">Monthly Revenue</p>
          </div>
          <div>
            <p className="text-lg font-bold text-blue-700">
              {review.results.timeframe}
            </p>
            <p className="text-xs text-blue-600">Timeframe</p>
          </div>
        </div>
      </div>

      <Link
        href={`/reviews/${review.slug}`}
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
      >
        Read full review
        <svg
          className="w-4 h-4 ml-1"
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
      </Link>
    </div>
  );
}
