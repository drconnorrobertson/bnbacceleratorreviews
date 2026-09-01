import Link from 'next/link';
import Schema from '@/components/Schema';

export const metadata = {
  title: 'About BnB Accelerator - Program Details, Methodology & What You Learn',
  description:
    'What is BnB Accelerator? Learn about the STR coaching program, its methodology, what students learn, who it is designed for, and what makes it different from other real estate courses.',
  openGraph: {
    title: 'About BnB Accelerator - Program Details & Methodology',
    description:
      'What is BnB Accelerator? A detailed look at the STR coaching program, curriculum, coaching structure, and how students build profitable short-term rental portfolios.',
    type: 'website',
    url: 'https://bnbacceleratorreviews.com/about',
    siteName: 'BnB Accelerator Reviews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About BnB Accelerator - Program Details & Methodology',
    description:
      'What is BnB Accelerator? A detailed look at the STR coaching program, curriculum, and how students build profitable short-term rental portfolios.',
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
      name: 'About',
      item: 'https://bnbacceleratorreviews.com/about',
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <Schema data={breadcrumbData} type="BreadcrumbList" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              About BnB Accelerator
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              A detailed, unbiased look at the program &mdash; what it teaches,
              how it works, and who it is built for.
            </p>
          </div>
        </div>
      </section>

      {/* What BnB Accelerator Offers */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What BnB Accelerator Offers
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              BnB Accelerator is a structured coaching program focused
              exclusively on short-term rental investing. Rather than covering
              real estate broadly, it zeroes in on the strategies, tools, and
              operational knowledge needed to acquire, launch, and scale
              Airbnb and vacation rental properties.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Structured Coursework
              </h3>
              <p className="mt-3 text-gray-600">
                A step-by-step video curriculum covering market research,
                property analysis, financing, design, listing optimization,
                pricing strategy, and guest management. Updated quarterly to
                reflect platform changes.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Live Coaching Calls
              </h3>
              <p className="mt-3 text-gray-600">
                Weekly group coaching sessions and monthly one-on-one calls with
                experienced STR investors. Students bring their specific deals,
                questions, and roadblocks for personalized guidance.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Private Community
              </h3>
              <p className="mt-3 text-gray-600">
                An active private community of current students and alumni who
                share deals, vendor recommendations, market insights, and
                operational tips. Many students cite this as the single most
                valuable part of the program.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Deal Analysis Tools
              </h3>
              <p className="mt-3 text-gray-600">
                Proprietary spreadsheets and calculators for evaluating potential
                deals, projecting revenue using comparable data, and modeling
                cash-on-cash returns across different financing scenarios.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Property Management Systems
              </h3>
              <p className="mt-3 text-gray-600">
                Templates, SOPs, and tech stack recommendations for managing
                guest communications, turnovers, maintenance, and pricing
                automation &mdash; whether self-managing or hiring a property
                manager.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Scaling Strategies
              </h3>
              <p className="mt-3 text-gray-600">
                Advanced modules on scaling beyond a first property, including
                rental arbitrage, co-hosting, building a team, entity
                structuring, and portfolio-level financial management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Methodology */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              The Methodology
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              BnB Accelerator follows a proven five-phase framework that takes
              students from complete beginners to operational STR owners.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-blue-200 sm:block" />

              {/* Step 1 */}
              <div className="relative mb-12 flex gap-8">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg">
                  1
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Market Research
                  </h3>
                  <p className="mt-3 text-lg text-gray-600">
                    Students learn to identify high-performing STR markets using
                    data tools like AirDNA, Mashvisor, and Rabbu. The program
                    teaches how to evaluate seasonality, occupancy rates,
                    average daily rates, local regulations, and competition
                    density. Students build a shortlist of target markets before
                    ever looking at individual properties.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-12 flex gap-8">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg">
                  2
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Property Sourcing
                  </h3>
                  <p className="mt-3 text-lg text-gray-600">
                    With target markets selected, students learn to find deals
                    on and off the MLS. The curriculum covers working with
                    investor-friendly agents, analyzing listings for STR
                    potential, identifying value-add opportunities, and running
                    comparable revenue projections. Each potential deal goes
                    through the program&rsquo;s proprietary underwriting model.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-12 flex gap-8">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg">
                  3
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Financing
                  </h3>
                  <p className="mt-3 text-lg text-gray-600">
                    The financing module covers conventional mortgages, DSCR
                    loans, portfolio lenders, seller financing, partnerships,
                    and creative deal structures. Students learn how to
                    present deals to lenders, understand debt service coverage
                    ratios, and structure offers that work for both buyer and
                    seller. The goal is making capital an enabler, not a
                    barrier.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative mb-12 flex gap-8">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg">
                  4
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Setup &amp; Design
                  </h3>
                  <p className="mt-3 text-lg text-gray-600">
                    Once a property is acquired, the focus shifts to furnishing,
                    design, and guest experience. Students learn budget-conscious
                    interior design principles that maximize listing photos and
                    guest reviews. The program provides furniture shopping lists,
                    vendor contacts, and amenity checklists tailored to property
                    type and target guest demographic.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex gap-8">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg">
                  5
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Launch &amp; Optimize
                  </h3>
                  <p className="mt-3 text-lg text-gray-600">
                    The final phase covers listing creation, professional
                    photography, dynamic pricing setup, guest communication
                    templates, review generation strategies, and ongoing
                    optimization. Students learn to read Airbnb and VRBO
                    analytics, adjust pricing seasonally, and continuously
                    improve occupancy and average daily rates over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Who Is BnB Accelerator For?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The program is designed for a range of experience levels and
              backgrounds
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-xl border-2 border-blue-100 bg-blue-50/50 p-8">
              <h3 className="text-xl font-semibold text-blue-900">
                First-Time Investors
              </h3>
              <p className="mt-3 text-gray-600">
                People who have never owned an investment property but want a
                clear, structured path into short-term rentals. The program
                starts from the fundamentals and does not assume prior real
                estate experience. Many successful students came from W-2 jobs
                with no background in hospitality or investing.
              </p>
            </div>

            <div className="rounded-xl border-2 border-blue-100 bg-blue-50/50 p-8">
              <h3 className="text-xl font-semibold text-blue-900">
                Long-Term Rental Owners
              </h3>
              <p className="mt-3 text-gray-600">
                Existing landlords looking to convert properties to short-term
                rentals or add STR units to their portfolio. These students
                typically already understand real estate basics but need
                guidance on the operational, marketing, and revenue management
                differences between LTRs and STRs.
              </p>
            </div>

            <div className="rounded-xl border-2 border-blue-100 bg-blue-50/50 p-8">
              <h3 className="text-xl font-semibold text-blue-900">
                Career Changers
              </h3>
              <p className="mt-3 text-gray-600">
                Professionals looking to build a short-term rental business as
                a path to financial independence or a career transition. The
                program attracts teachers, nurses, engineers, sales
                professionals, and corporate employees who want to build
                something of their own while keeping their day job initially.
              </p>
            </div>

            <div className="rounded-xl border-2 border-blue-100 bg-blue-50/50 p-8">
              <h3 className="text-xl font-semibold text-blue-900">
                Experienced Hosts Scaling Up
              </h3>
              <p className="mt-3 text-gray-600">
                Current Airbnb or VRBO hosts who already manage one or two
                properties and want to grow to five, ten, or more. These
                students benefit most from the advanced modules on systems,
                team building, entity structuring, and portfolio-level
                financial management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              The Team Behind BnB Accelerator
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Founded by experienced STR investors who have built and managed
              portfolios across multiple markets
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-8 text-lg leading-relaxed text-gray-600">
            <p>
              BnB Accelerator was founded by a team of short-term rental
              investors who collectively manage over 150 properties across
              more than 20 markets in the United States. The founding team
              started investing in STRs in 2016 and began coaching other
              investors after consistently being asked how they built their
              portfolios.
            </p>
            <p>
              The coaching staff includes specialists in market analysis, real
              estate finance, interior design for vacation rentals, revenue
              management, and property operations. Each coach is an active
              investor who continues to acquire and manage properties,
              ensuring the advice stays grounded in current market realities
              rather than outdated theory.
            </p>
            <p>
              The program has grown primarily through student referrals and
              word of mouth. As of 2026, over 500 students have enrolled,
              with the active community representing a combined portfolio of
              more than 1,200 short-term rental units generating an estimated
              $14 million in annual gross revenue.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What Makes BnB Accelerator Different?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              How the program compares to learning on your own
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-lg font-semibold">Factor</th>
                  <th className="px-6 py-4 text-lg font-semibold">Going It Alone</th>
                  <th className="px-6 py-4 text-lg font-semibold">With BnB Accelerator</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium text-gray-900">Time to First Property</td>
                  <td className="px-6 py-4 text-gray-600">12&ndash;18 months typical</td>
                  <td className="px-6 py-4 text-gray-600">3&ndash;6 months average</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Deal Analysis</td>
                  <td className="px-6 py-4 text-gray-600">Self-taught, trial and error</td>
                  <td className="px-6 py-4 text-gray-600">Coach-reviewed before purchase</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium text-gray-900">Costly Mistakes</td>
                  <td className="px-6 py-4 text-gray-600">Learn from your own errors</td>
                  <td className="px-6 py-4 text-gray-600">Learn from others&rsquo; experience</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Network</td>
                  <td className="px-6 py-4 text-gray-600">Build from scratch</td>
                  <td className="px-6 py-4 text-gray-600">Instant access to 500+ investors</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium text-gray-900">Vendor Recommendations</td>
                  <td className="px-6 py-4 text-gray-600">Research and vet yourself</td>
                  <td className="px-6 py-4 text-gray-600">Vetted list by market</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Accountability</td>
                  <td className="px-6 py-4 text-gray-600">Self-motivated only</td>
                  <td className="px-6 py-4 text-gray-600">Weekly check-ins and milestones</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-500">
            Comparison based on student-reported experiences and industry
            surveys. Individual results depend on market conditions, available
            capital, and personal effort.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Interested in Learning More?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Visit BnB Accelerator&rsquo;s official site to explore the
            curriculum, pricing, and enrollment options. Or read what real
            students have to say about their experience.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://bnbaccelerator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-10 py-4 text-lg font-semibold text-blue-900 shadow-lg transition hover:bg-blue-50"
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
          <p className="mt-8 text-sm text-blue-300">
            BnB Accelerator Reviews is an independent review site. We are not
            affiliated with, endorsed by, or paid by BnB Accelerator.
          </p>
        </div>
      </section>
    </>
  );
}
