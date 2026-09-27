import Link from "next/link";
import { cases, featuredCases, formatMoney, topicLabels } from "../../data/cases";

export const metadata = {
  title: "Short-Term Rental Acquisition Case Studies",
  description: "Browse BNB Accelerator acquisition records and detailed case studies across U.S. short-term rental markets. Purchase figures are not operating returns.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://bnbacceleratorreviews.vercel.app/case-studies" },
};

export default function CaseStudiesPage() {
  const markets = [...new Set(cases.map((item) => item.market))].sort();
  const confirmed2025 = cases.filter((item) => item.year === 2025);
  const markedClosed2026 = cases.filter((item) => item.year === 2026);
  const recordedCredits2025 = confirmed2025.reduce((sum, item) => sum + (item.sellerCredit || 0), 0);
  return (
    <>
      <section className="bg-[#111a26] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d1b47e]">Acquisition evidence library</p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl leading-tight sm:text-6xl">Real transactions, with the process in view.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore {cases.length} sanitized acquisition records across the 2025 and 2026 trackers. {featuredCases.length} include a fuller account of a documented acquisition issue. These are transaction records, not client reviews or verified rental-performance claims.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 text-sm">
            <span className="border border-white/25 px-4 py-2">{confirmed2025.length} marked closed and funded in 2025</span>
            <span className="border border-white/25 px-4 py-2">{markedClosed2026.length} marked closed in 2026</span>
            <span className="border border-white/25 px-4 py-2">{featuredCases.length} detailed stories</span>
            <span className="border border-white/25 px-4 py-2">{markets.length} markets</span>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ed] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#967744]">Featured cases</p>
              <h2 className="font-display mt-3 text-4xl text-[#111a26]">What happened between contract and closing</h2>
            </div>
            <a href="https://www.bnbaccelerator.com/case-studies/" className="font-semibold text-[#4a5c78] underline underline-offset-4">More published client stories</a>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredCases.map((item) => (
              <Link key={item.slug} href={`/case-studies/${item.slug}`} className="group border border-[#ded8cc] bg-white p-7 transition hover:border-[#b9975b] hover:shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#967744]">{item.market}</p>
                <h3 className="font-display mt-3 text-2xl leading-snug text-[#111a26] group-hover:text-[#806339]">{item.insight.headline}</h3>
                <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">{item.insight.detail}</p>
                <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-sm">
                  <span className="font-semibold text-[#111a26]">{formatMoney(item.price)} recorded price</span>
                  <span className="text-[#967744]">Read case →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-4xl text-[#111a26]">The transaction record</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">The 2025 sheet marks {confirmed2025.length} rows closed and funded. Its dollar-denominated seller-concession fields total {formatMoney(recordedCredits2025)} across the rows with a stated amount, including zeroes. This is a sum of tracker entries, not a verified total from settlement statements or investment profit.</p>
          {[{ title: "2025: closed and funded", items: confirmed2025 }, { title: "2026: marked closed", items: markedClosed2026 }].map((group) => <div key={group.title} className="mt-14">
            <h3 className="font-display text-3xl text-[#111a26]">{group.title}</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {group.items.map((item) => (
              <Link key={item.slug} href={`/case-studies/${item.slug}`} className="flex flex-col justify-between border border-slate-200 p-6 transition hover:border-[#b9975b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#967744]">{item.market}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[#111a26]">{item.insight?.headline || `Acquisition record in ${item.market}`}</h3>
                  <p className="mt-3 text-sm text-slate-600">Tracker purchase-price field: {formatMoney(item.price)}</p>
                  {item.sellerCredit > 0 && <p className="mt-1 text-sm text-slate-600">Recorded seller-concession field: {formatMoney(item.sellerCredit)}</p>}
                </div>
                <p className="mt-5 text-sm font-semibold text-[#4a5c78]">View record →</p>
              </Link>
            ))}
            </div>
          </div>)}
          <div className="mt-12 border-l-4 border-[#b9975b] bg-[#f6f3ed] p-6 text-sm leading-7 text-slate-700">
            <strong>How to read this library.</strong> The sources are internal acquisition trackers, not closing statements, operating ledgers, or client testimonials. Dates, prices, and seller concessions are tracker fields. Some narrative notes conflict with summary fields, so figures should be checked against executed settlement documents before use as definitive closing terms. We exclude names, exact addresses, contact details, private documents, and active negotiations. No cash flow, occupancy, tax benefit, or investment return is implied.
          </div>
        </div>
      </section>
    </>
  );
}
