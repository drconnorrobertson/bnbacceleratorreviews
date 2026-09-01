import Link from 'next/link';
import Schema from '@/components/Schema';
import { reviews } from '@/data/reviews';

export const metadata = {
  title: 'BnB Accelerator Client Results - Real Portfolio Performance Data (2026)',
  description:
    'Aggregate BnB Accelerator client results: total properties under management, combined monthly revenue, average revenue per property, market-level performance, and ROI compared to other asset classes.',
  openGraph: {
    title: 'BnB Accelerator Client Results - Real Portfolio Performance Data (2026)',
    description:
      'See the actual numbers behind BnB Accelerator client portfolios: revenue per property, time to first booking, market performance ranges, and cash-on-cash returns.',
    type: 'website',
    url: 'https://bnbacceleratorreviews.com/results',
    siteName: 'BnB Accelerator Reviews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BnB Accelerator Client Results - Real Portfolio Performance Data',
    description:
      'Aggregate performance data from BnB Accelerator client portfolios, including revenue per property and market-level benchmarks.',
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
      name: 'Results',
      item: 'https://bnbacceleratorreviews.com/results',
    },
  ],
};

const marketPerformance = [
  {
    market: 'Gatlinburg / Pigeon Forge, TN',
    range: '$3,400 - $4,200/mo',
    note: 'Four-season cabin demand anchored by the Smokies and Dollywood',
    barWidth: 'w-[95%]',
  },
  {
    market: 'Gulf Coast (Gulf Shores / Destin)',
    range: '$3,000 - $4,500/mo',
    note: 'Beachfront inventory with deep spring-through-fall seasons',
    barWidth: 'w-full',
  },
  {
    market: 'Scottsdale / Phoenix, AZ',
    range: '$3,200 - $4,100/mo',
    note: 'Spring training, golf, corporate travel, and event-driven demand',
    barWidth: 'w-[92%]',
  },
  {
    market: 'Nashville, TN',
    range: '$2,800 - $3,800/mo',
    note: 'Diversified tourism, music, and convention demand with strong midweek',
    barWidth: 'w-[85%]',
  },
  {
    market: 'Savannah, GA',
    range: '$2,800 - $3,800/mo',
    note: 'Year-round walkable historic district tourism and event weekends',
    barWidth: 'w-[85%]',
  },
  {
    market: 'Atlanta, GA',
    range: '$2,800 - $3,400/mo',
    note: 'Urban business, event, and airport-adjacent travel demand',
    barWidth: 'w-[76%]',
  },
];

const roiComparison = [
  {
    vehicle: 'BnB Accelerator (Done-for-You STR)',
    returns: '18% - 32% cash-on-cash',
    time: '~15 min/month',
    control: 'Own the asset, none of the operations',
    highlight: true,
  },
  {
    vehicle: 'DIY Short-Term Rental',
    returns: '10% - 20% cash-on-cash',
    time: '15 - 25 hrs/month',
    control: 'Own the asset and the second job',
    highlight: false,
  },
  {
    vehicle: 'Traditional Long-Term Rental',
    returns: '6% - 9% cash-on-cash',
    time: '2 - 5 hrs/month',
    control: 'Own the asset, tenant and turnover risk',
    highlight: false,
  },
  {
    vehicle: 'S&P 500 Index',
    returns: '~10% long-run average',
    time: 'None',
    control: 'No leverage, no depreciation benefits',
    highlight: false,
  },
  {
    vehicle: 'High-Yield Savings',
    returns: '4% - 5% APY',
    time: 'None',
    control: 'Fully liquid, no asset appreciation',
    highlight: false,
  },
];

function parseCurrency(value) {
  return Number(String(value).replace(/[^0-9.]/g, '')) || 0;
}

function parseMonths(value) {
  return Number(String(value).replace(/[^0-9.]/g, '')) || 0;
}

function formatCurrency(value) {
  return '$' + Math.round(value).toLocaleString('en-US');
}

export default function ResultsPage() {
  const totalProperties = reviews.reduce(
    (sum, review) => sum + review.results.properties,
    0
  );
  const totalMonthlyRevenue = reviews.reduce(
    (sum, review) => sum + parseCurrency(review.results.monthlyRevenue),
    0
  );
  const avgRevenuePerProperty = totalMonthlyRevenue / totalProperties;
  const avgRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const avgPropertiesPerClient = totalProperties / reviews.length;
  const avgTimeframe =
    reviews.reduce((sum, review) => sum + parseMonths(review.results.timeframe), 0) /
    reviews.length;

  const aggregateStats = [
    {
      label: 'Properties Under Management',
      value: String(totalProperties),
      detail: 'Across ' + reviews.length + ' documented client portfolios',
    },
    {
      label: 'Combined Monthly Revenue',
      value: formatCurrency(totalMonthlyRevenue),
      detail: 'Net of operating expenses and management fees',
    },
    {
      label: 'Average per Property',
      value: formatCurrency(avgRevenuePerProperty),
      detail: 'Blended monthly net revenue across all markets',
    },
    {
      label: 'Average Client Rating',
      value: avgRating.toFixed(1) + ' / 5',
      detail: 'Based on ' + reviews.length + ' verified long-form reviews',
    },
  ];

  return (
    <>
      <Schema data={breadcrumbData} type="BreadcrumbList" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Client Results
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              The actual numbers behind BnB Accelerator client portfolios
              &mdash; properties, revenue, timelines, and returns, pulled
              directly from the reviews published on this site.
            </p>
          </div>
        </div>
      </section>

      {/* Aggregate Statistics */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Portfolio Performance at a Glance
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Aggregated from every client portfolio documented in our review
              library. Every revenue figure is net, not gross bookings.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aggregateStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-gray-100 bg-gray-50 p-8 text-center"
              >
                <div className="text-4xl font-extrabold text-blue-700">
                  {stat.value}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  {stat.label}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Benchmarks */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Performance Benchmarks
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              What the done-for-you model typically delivers on timeline,
              portfolio growth, and owner workload
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-blue-100 bg-white p-8">
              <div className="text-3xl font-extrabold text-blue-700">
                60&ndash;90 days
              </div>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                To First Booking
              </h3>
              <p className="mt-3 text-gray-600">
                From engagement to first paying guest. Sourcing and closing
                consume most of that window &mdash; furnishing, photography,
                and launch typically take about three weeks once a property is
                secured.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-blue-100 bg-white p-8">
              <div className="text-3xl font-extrabold text-blue-700">
                2.4 properties
              </div>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                Average Portfolio at 18 Months
              </h3>
              <p className="mt-3 text-gray-600">
                Across the broader client base, portfolios average 2.4
                properties by month 18. The {reviews.length} portfolios
                documented here average{' '}
                {avgPropertiesPerClient.toFixed(1)} properties over{' '}
                {Math.round(avgTimeframe)} months.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-blue-100 bg-white p-8">
              <div className="text-3xl font-extrabold text-blue-700">
                15 min/month
              </div>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                Owner Time Commitment
              </h3>
              <p className="mt-3 text-gray-600">
                Reviewing dashboards and monthly statements. Guest messaging,
                pricing, cleaning, maintenance, and compliance are handled
                entirely by the BnB Accelerator team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Case Studies */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Client Case Studies
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every documented portfolio, with the numbers each client reported
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-2">
            {reviews.map((review) => (
              <div
                key={review.slug}
                className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {review.occupation} &middot; {review.location}
                    </p>
                  </div>
                  <div
                    className="text-lg text-amber-500"
                    aria-label={review.rating + ' out of 5 stars'}
                  >
                    {'★'.repeat(review.rating)}
                    <span className="text-gray-300">
                      {'★'.repeat(5 - review.rating)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-blue-700">
                      {review.results.properties}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                      Properties
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-blue-700">
                      {review.results.monthlyRevenue}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                      Per Month
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-blue-700">
                      {review.results.timeframe.replace(' months', ' mo')}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                      Timeframe
                    </div>
                  </div>
                </div>

                <p className="mt-6 flex-1 text-gray-600">{review.summary}</p>

                <Link
                  href={'/reviews/' + review.slug}
                  className="mt-6 inline-flex items-center font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Read the full review
                  <span aria-hidden="true" className="ml-2">
                    &rarr;
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Performance */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Market Performance
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Typical net monthly revenue per property in the markets where
              BnB Accelerator is actively acquiring
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-8">
            {marketPerformance.map((market) => (
              <div
                key={market.market}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {market.market}
                  </h3>
                  <span className="font-semibold text-blue-700">
                    {market.range}
                  </span>
                </div>
                <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className={
                      'h-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 ' +
                      market.barWidth
                    }
                  />
                </div>
                <p className="mt-3 text-sm text-gray-600">{market.note}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-500">
            Ranges reflect client-reported net monthly revenue after operating
            expenses and management fees. Individual property performance
            varies with size, position within the market, and season.
          </p>
        </div>
      </section>

      {/* ROI Comparison */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              How the Returns Compare
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Done-for-you short-term rentals against the alternatives most
              investors weigh them against
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-5xl overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-lg font-semibold">Investment</th>
                  <th className="px-6 py-4 text-lg font-semibold">Typical Return</th>
                  <th className="px-6 py-4 text-lg font-semibold">Time Required</th>
                  <th className="px-6 py-4 text-lg font-semibold">Trade-Offs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {roiComparison.map((row, index) => (
                  <tr
                    key={row.vehicle}
                    className={
                      row.highlight
                        ? 'bg-blue-50'
                        : index % 2 === 0
                          ? 'bg-white'
                          : 'bg-gray-50'
                    }
                  >
                    <td
                      className={
                        'px-6 py-4 font-medium ' +
                        (row.highlight ? 'text-blue-900' : 'text-gray-900')
                      }
                    >
                      {row.vehicle}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{row.returns}</td>
                    <td className="px-6 py-4 text-gray-600">{row.time}</td>
                    <td className="px-6 py-4 text-gray-600">{row.control}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-500">
            Comparison based on client-reported results and published
            industry benchmarks. Past performance does not guarantee future
            results, and short-term rental returns are sensitive to
            regulation, supply growth, and travel demand.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Want Numbers Like These Run for Your Situation?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Every portfolio on this page started with a consultation and a
            capital position. BnB Accelerator underwrites specific properties
            against your budget and target market &mdash; then handles the
            acquisition, furnishing, launch, and management.
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
              Read Client Reviews
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
