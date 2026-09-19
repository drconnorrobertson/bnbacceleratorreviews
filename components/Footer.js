import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d141e] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <svg
                className="w-7 h-7 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z"
                />
              </svg>
              <span className="text-lg font-bold text-white">
                BnB Accelerator Reviews
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              A first-party review and evidence website operated by BNB Accelerator.
              Independent sources are identified and linked to their original platform.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Site Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://bnbaccelerator.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Visit BnB Accelerator
                </a>
              </li>
              <li>
                <Link
                  href="/blog/how-to-start-str-business-2026"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  STR Beginner Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/bnb-accelerator-vs-other-programs"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Program Comparison
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            <strong>Ownership disclosure:</strong> This website is owned and operated by
            BNB Accelerator. Company-published case studies are first-party material.
            Independent reviews are identified and linked to the original third-party
            platform. Individual results vary. This website does not provide tax,
            legal, investment, lending, or property management advice.
          </p>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} BnB Accelerator Reviews. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
