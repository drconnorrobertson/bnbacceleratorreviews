import Link from 'next/link';
import Schema from '@/components/Schema';
import { reviews } from '@/data/reviews';
import { portfolioStats, performanceBreakdown, marketBreakdown, clientAcquisitions } from '@/data/portfolio';

export const metadata = {
  title: 'BnB Accelerator Client Results - Real Numbers from Real STR Portfolios',
  description: 'See real aggregate statistics from 70+ BnB Accelerator clients: $22.3M in properties acquired, 14.1% average cash-on-cash returns, and 92% cashflow-positive rate across 11 U.S. markets.',
  openGraph: {
    title: 'BnB Accelerator Client Results - Real Numbers from Real STR Portfolios',
    description: 'Verified client results from BnB Accelerator: $22.3M in properties acquired, 14.1% avg cash-on-cash, 92% cashflow-positive across 11 markets.',
    type: 'website',
    url: 'https://bnbacceleratorreviews.com/results',
    siteName: 'BnB Accelerator Reviews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BnB Accelerator Client Results - Real Numbers from Real Portfolios',
    description: 'Aggregate statistics, market breakdowns, and real acquisition data from BnB Accelerator client portfolios.',
  },
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bnbacceleratorreviews.com' },
    { '@type': 'ListItem', position: 2, name: 'Results', item: 'https://bnbacceleratorreviews.com/results' },
  ],
};

export default function ResultsPage() {
  const avgEntryPerProperty = Math.round(portfolioStats.totalCapitalDeployed / portfolioStats.totalPropertiesAcquired);
  const avgCashflowPerProperty = Math.round(portfolioStats.totalAnnualCashflow / portfolioStats.totalPropertiesAcquired / 12);
  const topPerformers = clientAcquisitions.filter(c => c.cashOnCash >= 15).length;

  return (
    <>
      <Schema data={breadcrumbData} type="BreadcrumbList" />
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Real Client Results</h1>
            <p className="mt-6 text-xl text-blue-100">Real numbers from real acquisitions. Every property below was sourced, acquired, designed, and launched by BnB Accelerator&rsquo;s done-for-you team on behalf of their clients.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Portfolio Performance</h2>
            <p className="mt-4 text-lg text-gray-600">Aggregate results from BnB Accelerator client acquisitions</p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 text-center shadow-sm">
              <p className="text-5xl font-extrabold text-blue-600">${(portfolioStats.totalPropertyValue / 1000000).toFixed(1)}M</p>
              <p className="mt-3 text-lg font-medium text-gray-700">Property Value Acquired</p>
              <p className="mt-1 text-sm text-gray-500">{portfolioStats.totalPropertiesAcquired} properties across {portfolioStats.activeMarkets} markets</p>
            </div>
            <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-8 text-center shadow-sm">
              <p className="text-5xl font-extrabold text-green-600">{portfolioStats.avgCashOnCash}%</p>
              <p className="mt-3 text-lg font-medium text-gray-700">Avg Cash-on-Cash</p>
              <p className="mt-1 text-sm text-gray-500">Up to {portfolioStats.maxCashOnCash}% top performers</p>
            </div>
            <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-8 text-center shadow-sm">
              <p className="text-5xl font-extrabold text-purple-600">${Math.round(portfolioStats.totalAnnualCashflow / 1000)}K</p>
              <p className="mt-3 text-lg font-medium text-gray-700">Annual Cashflow</p>
              <p className="mt-1 text-sm text-gray-500">Combined across all properties</p>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-8 text-center shadow-sm">
              <p className="text-5xl font-extrabold text-amber-600">{portfolioStats.cashflowPositiveRate}%</p>
              <p className="mt-3 text-lg font-medium text-gray-700">Cashflow Positive</p>
              <p className="mt-1 text-sm text-gray-500">{portfolioStats.propertiesPositiveCashflow} of {portfolioStats.propertiesTotal} properties</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Live Property Performance</h2>
            <p className="mt-4 text-lg text-gray-600">{portfolioStats.totalPropertiesTracked} properties actively tracked across the BnB Accelerator portfolio</p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-xl border border-green-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-green-600">{performanceBreakdown.banger}</p>
              <p className="mt-2 font-semibold text-gray-800">Banger</p>
              <p className="mt-1 text-xs text-gray-500">Performing above projections</p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-emerald-600">{performanceBreakdown.crushing}</p>
              <p className="mt-2 font-semibold text-gray-800">Crushing</p>
              <p className="mt-1 text-xs text-gray-500">Significantly outperforming</p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-blue-600">{performanceBreakdown.excelling}</p>
              <p className="mt-2 font-semibold text-gray-800">Excelling</p>
              <p className="mt-1 text-xs text-gray-500">Above average performance</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-gray-600">{performanceBreakdown.live}</p>
              <p className="mt-2 font-semibold text-gray-800">Live</p>
              <p className="mt-1 text-xs text-gray-500">Operating within projections</p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-amber-600">{performanceBreakdown.liveSupportNeeded}</p>
              <p className="mt-2 font-semibold text-gray-800">Support Needed</p>
              <p className="mt-1 text-xs text-gray-500">Receiving optimization help</p>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">Performance ratings based on AirDNA tracking data and proforma projections, reviewed bi-weekly by the BnB Accelerator operations team.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Performance by Market</h2>
            <p className="mt-4 text-lg text-gray-600">Real acquisition data across {portfolioStats.activeMarkets} active U.S. markets</p>
          </div>
          <div className="mx-auto mt-14 max-w-4xl space-y-4">
            {marketBreakdown.map((m) => (
              <div key={m.market} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{m.market}, {m.state}</h3>
                    <p className="text-sm text-gray-500">{m.demandDrivers}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">{m.avgCashOnCash}% CoC</p>
                    <p className="text-sm text-gray-500">{m.properties} {m.properties === 1 ? 'property' : 'properties'} &bull; ${(m.totalValue / 1000000).toFixed(1)}M</p>
                  </div>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600" style={{ width: m.barWidth + '%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Client Acquisition Data</h2>
            <p className="mt-4 text-lg text-gray-600">Real purchase prices, total capital deployed, and annual cashflow from {portfolioStats.totalPropertiesAcquired} completed acquisitions</p>
          </div>
          <div className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-2xl border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-4 py-4 text-sm font-semibold">Client</th>
                    <th className="px-4 py-4 text-sm font-semibold">Market</th>
                    <th className="px-4 py-4 text-sm font-semibold text-right">Purchase Price</th>
                    <th className="px-4 py-4 text-sm font-semibold text-right">Total Entry</th>
                    <th className="px-4 py-4 text-sm font-semibold text-right">Annual Cashflow</th>
                    <th className="px-4 py-4 text-sm font-semibold text-right">Cash-on-Cash</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {clientAcquisitions.map((c, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{c.firstName}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{c.market}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 text-right">${c.purchasePrice.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 text-right">${c.totalEntry.toLocaleString()}</td>
                      <td className={'px-4 py-3 text-sm text-right font-medium ' + (c.annualCashflow >= 0 ? 'text-green-600' : 'text-red-500')}>${c.annualCashflow.toLocaleString()}</td>
                      <td className={'px-4 py-3 text-sm text-right font-bold ' + (c.cashOnCash >= 0 ? 'text-green-700' : 'text-red-500')}>{c.cashOnCash}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">Data from BnB Accelerator internal tracking. Annual cashflow based on proforma projections. Individual results vary by market conditions and property type.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Performance Benchmarks</h2>
            <p className="mt-4 text-lg text-gray-600">Key metrics across BnB Accelerator client portfolios</p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">$892K Avg Purchase</h3>
              <p className="mt-2 text-gray-600">Average acquisition price across all {portfolioStats.totalPropertiesAcquired} properties, ranging from $415K to $1.6M.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">${avgCashflowPerProperty.toLocaleString()}/mo Avg Cashflow</h3>
              <p className="mt-2 text-gray-600">Average monthly cashflow per property. {topPerformers} of {portfolioStats.totalPropertiesAcquired} properties return 15%+ cash-on-cash.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">15 Min / Month</h3>
              <p className="mt-2 text-gray-600">Average client time commitment. Review a dashboard monthly &mdash; BnB Accelerator handles everything else.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Client Case Studies</h2>
            <p className="mt-4 text-lg text-gray-600">Real investors, real properties, real results &mdash; all built and managed by BnB Accelerator</p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
            {reviews.map((review) => (<div key={review.slug} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"><div className="flex items-start justify-between"><div><h3 className="text-lg font-semibold text-gray-900">{review.name}</h3><p className="text-sm text-gray-500">{review.occupation} &bull; {review.location}</p></div><div className="flex gap-0.5">{[...Array(review.rating)].map((_, i) => (<svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div></div><div className="mt-4 grid grid-cols-3 gap-3"><div className="rounded-lg bg-blue-50 px-3 py-2 text-center"><p className="text-lg font-bold text-blue-700">{review.results.properties}</p><p className="text-xs text-blue-600">Properties</p></div><div className="rounded-lg bg-green-50 px-3 py-2 text-center"><p className="text-lg font-bold text-green-700">{review.results.monthlyRevenue}</p><p className="text-xs text-green-600">Monthly Rev</p></div><div className="rounded-lg bg-purple-50 px-3 py-2 text-center"><p className="text-lg font-bold text-purple-700">{review.results.timeframe}</p><p className="text-xs text-purple-600">Timeframe</p></div></div><p className="mt-4 text-sm leading-relaxed text-gray-600">{review.summary}</p><Link href={`/reviews/${review.slug}`} className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800">Read full review &rarr;</Link></div>))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Return on Investment</h2>
            <p className="mt-4 text-lg text-gray-600">How BnB Accelerator client returns compare to traditional investments</p>
          </div>
          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-left"><thead><tr className="bg-blue-600 text-white"><th className="px-6 py-4 text-lg font-semibold">Investment Vehicle</th><th className="px-6 py-4 text-lg font-semibold">Typical Annual Return</th><th className="px-6 py-4 text-lg font-semibold">Time Commitment</th></tr></thead><tbody className="divide-y divide-gray-100"><tr className="bg-blue-50 font-medium"><td className="px-6 py-4 text-gray-900">BnB Accelerator (Done-for-You STR)</td><td className="px-6 py-4 text-green-700">5&ndash;24% Cash-on-Cash</td><td className="px-6 py-4 text-gray-600">~15 min/month</td></tr><tr className="bg-white"><td className="px-6 py-4 text-gray-900">DIY Short-Term Rental</td><td className="px-6 py-4 text-gray-600">10&ndash;20%</td><td className="px-6 py-4 text-gray-600">15&ndash;25 hrs/month</td></tr><tr className="bg-gray-50"><td className="px-6 py-4 text-gray-900">Traditional Long-Term Rental</td><td className="px-6 py-4 text-gray-600">6&ndash;10%</td><td className="px-6 py-4 text-gray-600">5&ndash;10 hrs/month</td></tr><tr className="bg-white"><td className="px-6 py-4 text-gray-900">S&amp;P 500 Index Fund</td><td className="px-6 py-4 text-gray-600">8&ndash;12%</td><td className="px-6 py-4 text-gray-600">Minimal</td></tr><tr className="bg-gray-50"><td className="px-6 py-4 text-gray-900">High-Yield Savings Account</td><td className="px-6 py-4 text-gray-600">4&ndash;5%</td><td className="px-6 py-4 text-gray-600">None</td></tr></tbody></table>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to See These Results for Yourself?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">BnB Accelerator&rsquo;s done-for-you team handles everything &mdash; market analysis, acquisition, design, furnishing, launch, and ongoing management.</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://bnbaccelerator.com" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white px-10 py-4 text-lg font-semibold text-blue-900 shadow-lg transition hover:bg-blue-50">Visit BnB Accelerator</a>
            <Link href="/reviews" className="rounded-lg border-2 border-white/30 px-10 py-4 text-lg font-semibold text-white transition hover:bg-white/10">Read Client Reviews</Link>
          </div>
          <p className="mt-8 text-sm text-blue-300">BnB Accelerator Reviews is an independent review site. We are not affiliated with, endorsed by, or paid by BnB Accelerator.</p>
        </div>
      </section>
    </>
  );
}
