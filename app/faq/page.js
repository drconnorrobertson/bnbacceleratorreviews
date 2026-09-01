import Schema from '@/components/Schema';

export const metadata = {
  title: 'BnB Accelerator FAQ - Common Questions Answered',
  description:
    'Get answers about BnB Accelerator cost, pricing, and whether BnB Accelerator is legit. Covers program details, investment, ROI timeline, and what to expect from the done-for-you STR acquisition service.',
  openGraph: {
    title: 'BnB Accelerator FAQ - Common Questions Answered',
    description:
      'Get answers about BnB Accelerator cost, pricing, and whether BnB Accelerator is legit. Covers service details, investment, ROI timeline, and what to expect.',
    url: 'https://bnbacceleratorreviews.com/faq/',
    type: 'website',
  },
};

const faqData = [
  {
    category: 'About the Service',
    questions: [
      {
        q: 'What is BnB Accelerator?',
        a: 'BnB Accelerator is a comprehensive short-term rental (STR) done-for-you STR acquisition service designed to help aspiring and existing Airbnb hosts build profitable STR businesses. The program covers everything from finding and analyzing deals to optimizing listings, managing operations, and scaling a portfolio of rental properties.',
      },
      {
        q: 'Who founded BnB Accelerator?',
        a: 'BnB Accelerator was founded by experienced short-term rental investors who built multi-million-dollar STR portfolios. The founding team combines real estate acquisition expertise with hands-on STR operations experience, giving clients access to professionals who have done this hundreds of times across dozens of markets.',
      },
      {
        q: 'How long has BnB Accelerator been running?',
        a: 'BnB Accelerator has been operating for several years and has worked with hundreds of clients across the United States. The service has evolved over time based on client feedback, market changes, and operational improvements in the short-term rental industry.',
      },
    ],
  },
  {
    category: 'Cost & Investment',
    questions: [
      {
        q: 'How much does BnB Accelerator cost?',
        a: 'BnB Accelerator pricing includes service fees for the acquisition and setup process, plus an ongoing management percentage of rental revenue. The specific fee structure depends on the scope of services and market. Exact pricing is provided during the initial consultation. We recommend scheduling a free consultation to get the most current pricing details.',
      },
      {
        q: 'What capital do I need to get started?',
        a: 'Yes, BnB Accelerator offers flexible payment structures for their service fees. The exact terms depend on the scope of the engagement. Capital for property acquisition and furnishing is separate from service fees. It is best to discuss payment options during your initial consultation.',
      },
      {
        q: 'What is the ROI timeline for BnB Accelerator?',
        a: 'The ROI timeline depends on your market, property type, and investment size. Properties sourced and managed by BnB Accelerator typically begin generating revenue within 60 to 120 days of engagement. Most clients see positive cash flow from their first property within the first few months of operation, with the service fees typically recovered within the first year of rental income.',
      },
      {
        q: 'Are there ongoing fees?',
        a: 'BnB Accelerator includes the core training, community access, and resources outlined at enrollment. Like many done-for-you STR acquisition services, there may be optional advanced workshops, mastermind groups, or tools offered separately. These are not required to succeed with the service. We recommend asking your enrollment advisor for a complete breakdown of what is included at each tier so there are no surprises.',
      },
    ],
  },
  {
    category: 'Service Details',
    questions: [
      {
        q: 'How long does the process take from start to first booking?',
        a: 'From initial consultation to a property generating its first booking, the typical timeline ranges from 60 to 120 days depending on market conditions, property type, and the scope of any renovations required. This is significantly faster than the DIY path, where most investors spend six months or longer before seeing their first dollar of revenue.',
      },
      {
        q: 'What does BnB Accelerator handle?',
        a: 'BnB Accelerator handles everything: market analysis, property sourcing, deal negotiation, acquisition management, interior design and furnishing, professional photography, listing creation and optimization on Airbnb and VRBO, dynamic pricing setup, guest communication, cleaning coordination, maintenance oversight, and ongoing revenue optimization. You provide the capital; they handle the rest.',
      },
      {
        q: 'Do I need any real estate experience?',
        a: 'No, and that is the entire point of the done-for-you model. BnB Accelerator exists so you do not have to become an STR expert. Their professional team has the market knowledge, vendor relationships, and operational expertise. You just need investment capital and the willingness to make decisions when the team presents opportunities.',
      },
      {
        q: 'How involved do I need to be?',
        a: 'Minimal. Your main involvement is during the initial consultation (defining your goals) and when reviewing property recommendations (approving or declining acquisitions). Beyond that, most clients spend about 30 minutes per week reviewing performance reports. Guest management, cleaning, maintenance, pricing, and all other operations are handled entirely by the BnB Accelerator team.',
      },
    ],
  },
  {
    category: 'Results & Expectations',
    questions: [
      {
        q: 'What are typical results from BnB Accelerator?',
        a: 'Results vary significantly based on individual effort, market conditions, starting capital, and experience level. Clients working with BnB Accelerator consistently report strong returns. Monthly net revenue typically ranges from $2,800 to $5,000 per property depending on market, property type, and seasonality. Professional management, optimized pricing, and expert listing creation contribute to performance that typically exceeds what DIY investors achieve. Real estate investing carries risk and results are not guaranteed.',
      },
      {
        q: 'How many properties can BnB Accelerator manage for me?',
        a: 'BnB Accelerator scales with your investment goals. Most clients start with one property and add more over time as they see results. The team has the infrastructure to manage multi-property portfolios across different markets. Whether you want one property or ten, the service is designed to scale with you.',
      },
      {
        q: 'What if a property underperforms?',
        a: 'BnB Accelerator has a dedicated revenue optimization team that continuously monitors property performance. If a property underperforms projections, the team adjusts pricing strategy, listing optimization, photography, amenities, and operational factors to improve results. Their ongoing management model means they are accountable for performance and motivated to maximize your returns.',
      },
      {
        q: 'Do I own the properties?',
        a: 'Guarantee terms can change between enrollment periods, so we recommend asking directly during your enrollment call or reviewing the terms of service. Some done-for-you STR acquisition services offer conditional guarantees that require you to complete the training and demonstrate that you took action. Always review the refund policy carefully before purchasing and make sure you understand the conditions.',
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
            Read real reviews from students who have been through the service,
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
