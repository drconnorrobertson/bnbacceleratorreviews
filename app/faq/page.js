import Schema from '@/components/Schema';

export const metadata = {
  title: 'BnB Accelerator FAQ - Common Questions Answered',
  description:
    'Get answers about BnB Accelerator cost, pricing, and whether BnB Accelerator is legit. Covers program details, investment, ROI timeline, and what to expect from the STR coaching program.',
  openGraph: {
    title: 'BnB Accelerator FAQ - Common Questions Answered',
    description:
      'Get answers about BnB Accelerator cost, pricing, and whether BnB Accelerator is legit. Covers program details, investment, ROI timeline, and what to expect.',
    url: 'https://bnbacceleratorreviews.com/faq/',
    type: 'website',
  },
};

const faqData = [
  {
    category: 'About the Program',
    questions: [
      {
        q: 'What is BnB Accelerator?',
        a: 'BnB Accelerator is a comprehensive short-term rental (STR) coaching program designed to help aspiring and existing Airbnb hosts build profitable STR businesses. The program covers everything from finding and analyzing deals to optimizing listings, managing operations, and scaling a portfolio of rental properties.',
      },
      {
        q: 'Who founded BnB Accelerator?',
        a: 'BnB Accelerator was founded by experienced short-term rental investors who built multi-million-dollar STR portfolios. The founding team combines real estate investing expertise with hands-on Airbnb hosting experience, giving students practical strategies that have been tested in real market conditions.',
      },
      {
        q: 'How long has BnB Accelerator been running?',
        a: 'BnB Accelerator has been operating for several years and has worked with thousands of students across the United States and internationally. The program has evolved over time based on student feedback, market changes, and new strategies in the short-term rental industry.',
      },
    ],
  },
  {
    category: 'Cost & Investment',
    questions: [
      {
        q: 'How much does BnB Accelerator cost?',
        a: 'BnB Accelerator pricing varies depending on the tier and enrollment period. The program typically ranges from a few thousand dollars for the core course to higher-tier packages that include mentorship and additional resources. Exact pricing is provided during their free training or enrollment calls. We recommend attending a free webinar to get the most current pricing details.',
      },
      {
        q: 'Are there payment plans available for BnB Accelerator?',
        a: 'Yes, BnB Accelerator typically offers payment plan options to make the program more accessible. Payment plans allow you to spread the cost over several months. The exact terms and number of installments may vary, so it is best to ask about current payment options during your enrollment call.',
      },
      {
        q: 'What is the ROI timeline for BnB Accelerator?',
        a: 'The ROI timeline depends heavily on your market, capital, and execution speed. Some students report earning back their investment within their first few bookings on a single property, while others take several months to get their first deal closed. Students who follow the system and take action consistently tend to see a return on their program investment within three to six months of launching their first property.',
      },
      {
        q: 'Are there hidden fees or upsells inside BnB Accelerator?',
        a: 'BnB Accelerator includes the core training, community access, and resources outlined at enrollment. Like many coaching programs, there may be optional advanced workshops, mastermind groups, or tools offered separately. These are not required to succeed with the program. We recommend asking your enrollment advisor for a complete breakdown of what is included at each tier so there are no surprises.',
      },
    ],
  },
  {
    category: 'Program Details',
    questions: [
      {
        q: 'How long is the BnB Accelerator program?',
        a: 'The BnB Accelerator program is self-paced, so you can move through the material as fast or slow as you need. The core training modules can typically be completed in four to eight weeks of focused study. However, you retain access to the materials and community well beyond the initial training period, allowing you to revisit lessons as you scale your business.',
      },
      {
        q: 'What is included in BnB Accelerator?',
        a: 'BnB Accelerator includes video training modules, downloadable resources and templates, access to a private community of STR investors, live coaching calls or Q&A sessions, deal analysis tools, and step-by-step frameworks for finding, funding, launching, and managing short-term rental properties. Higher-tier packages may include one-on-one mentorship and additional hands-on support.',
      },
      {
        q: 'Is BnB Accelerator online or in-person?',
        a: 'BnB Accelerator is primarily an online program, making it accessible from anywhere. The training modules, community, and coaching calls are all delivered digitally. Some higher-tier packages or special events may include in-person meetups, workshops, or retreats, but the core program is fully online.',
      },
      {
        q: 'What kind of support does BnB Accelerator provide?',
        a: 'Support includes access to a private community where you can ask questions and connect with other students, regular live coaching or Q&A calls with experienced mentors, and direct access to training materials and templates. Many students highlight the community and coaching calls as the most valuable aspects of the program, providing accountability and real-time feedback on deals and strategies.',
      },
    ],
  },
  {
    category: 'Results & Expectations',
    questions: [
      {
        q: 'What are typical results from BnB Accelerator?',
        a: 'Results vary significantly based on individual effort, market conditions, starting capital, and experience level. Some students launch profitable STR properties within their first few months, while others use the program as a longer-term educational foundation. Successful students often report monthly cash flow ranging from a few hundred to several thousand dollars per property. It is important to remember that real estate investing carries risk and results are not guaranteed.',
      },
      {
        q: 'How fast can I expect to see results with BnB Accelerator?',
        a: 'The speed of results depends on your starting point, available capital, and how quickly you take action. Students who already have a property or capital ready can sometimes see results within weeks of implementing what they learn. Those starting from scratch may need two to six months to secure and launch their first property. Consistency, market research, and following the system are the biggest factors in how quickly you see returns.',
      },
      {
        q: 'What if BnB Accelerator does not work for me?',
        a: 'If you complete the program and implement the strategies without seeing results, it is worth reaching out to the coaching team for additional guidance. Many students who initially struggle find success after adjusting their market selection, pricing strategy, or listing optimization. Additionally, the community provides peer support and troubleshooting. Check the program terms for any satisfaction guarantees or refund policies before enrolling.',
      },
      {
        q: 'Does BnB Accelerator offer a money-back guarantee?',
        a: 'Guarantee terms can change between enrollment periods, so we recommend asking directly during your enrollment call or reviewing the terms of service. Some coaching programs offer conditional guarantees that require you to complete the training and demonstrate that you took action. Always review the refund policy carefully before purchasing and make sure you understand the conditions.',
      },
    ],
  },
];

const allQuestions = faqData.flatMap((cat) => cat.questions);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allQuestions.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://bnbacceleratorreviews.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'FAQ',
      item: 'https://bnbacceleratorreviews.com/faq/',
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <Schema data={faqSchema} type="FAQPage" />
      <Schema data={breadcrumbSchema} type="BreadcrumbList" />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Everything you need to know about BnB Accelerator â costs,
            expectations, program details, and more.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <a href="/" className="hover:text-blue-600 transition-colors">
              Home
            </a>
          </li>
          <li>
            <span className="mx-1">/</span>
          </li>
          <li className="text-gray-800 font-medium">FAQ</li>
        </ol>
      </nav>

      {/* FAQ Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        {faqData.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((item, qIndex) => (
                <details
                  key={qIndex}
                  className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors list-none [&::-webkit-details-marker]:hidden">
                    <span className="pr-4">{item.q}</span>
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-open:bg-blue-600 group-open:text-white transition-colors">
                      <svg
                        className="w-4 h-4 transform group-open:rotate-45 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Read real reviews from students who have been through the program,
            or check out our in-depth blog posts for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/reviews/"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read Student Reviews
            </a>
            <a
              href="/blog/"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Visit Our Blog
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
