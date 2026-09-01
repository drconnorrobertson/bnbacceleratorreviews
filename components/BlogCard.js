import Link from "next/link";

export default function BlogCard({ post }) {
  const formattedDate = new Date(post.publishDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
        <time dateTime={post.publishDate}>{formattedDate}</time>
        <span className="w-1 h-1 bg-gray-300 rounded-full" />
        <span>{post.readTime}</span>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
        <Link
          href={`/blog/${post.slug}`}
          className="hover:text-blue-600 transition-colors duration-200"
        >
          {post.title}
        </Link>
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{post.author}</span>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          Read article
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
    </div>
  );
}
