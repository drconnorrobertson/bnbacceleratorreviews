import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, formatMoney, topicLabels } from "../../../data/cases";

export function generateStaticParams() {
  return cases.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const item = cases.find((record) => record.slug === params.slug);
  if (!item) return { title: "Case study unavailable", robots: { index: false } };
  const title = item.insight ? `${item.insight.headline} | ${item.market}` : `Acquisition record | ${item.market}`;
  return {
    title,
    description: item.insight ? item.insight.detail : `A sanitized BNB Accelerator acquisition record from ${item.market}. Recorded price and process categories, with no claim of rental performance.`,
    robots: { index: Boolean(item.insight), follow: true },
    alternates: { canonical: `https://www.bnbacceleratorreviews.co/case-studies/${item.slug}` },
  };
}

export default function CaseStudyPage({ params }) {
  const item = cases.find((record) => record.slug === params.slug);
  if (!item) notFound();
  const related = cases.filter((record) => record.market === item.market && record.slug !== item.slug).slice(0, 3);
  return (
    <>
      <section className="bg-[#111a26] text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
          <Link href="/case-studies" className="text-sm text-[#d1b47e] hover:underline">← All case studies</Link>
          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-[#d1b47e]">{item.market} · {item.year} acquisition record</p>
          <h1 className="font-display mt-4 max-w-4xl text-5xl leading-tight sm:text-6xl">{item.insight?.headline || `An acquisition in ${item.market}`}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A sanitized look at a transaction the internal {item.year} tracker labels {item.sourceStatus === "CLOSED & FUNDED" ? "closed and funded" : "closed"}. This page documents acquisition context and does not claim operating performance.</p>
        </div>
      </section>
      <section className="bg-[#f6f3ed] py-14">
        <div className={`mx-auto grid max-w-5xl gap-4 px-6 sm:grid-cols-2 ${item.sellerCredit > 0 ? "lg:grid-cols-4" : "lg:grid-cols-3"} lg:px-8`}>
          <div className="bg-white p-6"><p className="text-xs font-semibold uppercase tracking-wider text-[#967744]">Market</p><p className="mt-2 text-xl font-semibold text-[#111a26]">{item.market}</p></div>
          <div className="bg-white p-6"><p className="text-xs font-semibold uppercase tracking-wider text-[#967744]">Tracker purchase-price field</p><p className="mt-2 text-xl font-semibold text-[#111a26]">{formatMoney(item.price)}</p></div>
          <div className="bg-white p-6"><p className="text-xs font-semibold uppercase tracking-wider text-[#967744]">Tracker closing date</p><p className="mt-2 text-xl font-semibold text-[#111a26]">{item.recordedDate || "Not recorded"}</p></div>
          {item.sellerCredit > 0 && <div className="bg-white p-6"><p className="text-xs font-semibold uppercase tracking-wider text-[#967744]">Seller-concession field</p><p className="mt-2 text-xl font-semibold text-[#111a26]">{formatMoney(item.sellerCredit)}</p></div>}
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[1.6fr_.8fr] lg:px-8">
          <article>
            <h2 className="font-display text-4xl text-[#111a26]">The acquisition record</h2>
            {item.insight ? (
              <>
                <p className="mt-6 text-lg leading-9 text-slate-700">{item.insight.detail}</p>
                <div className="mt-10 border-l-4 border-[#b9975b] bg-[#f6f3ed] p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#967744]">Practical lesson</p>
                  <p className="mt-3 text-lg leading-8 text-[#111a26]">{item.insight.takeaway}</p>
                </div>
              </>
            ) : (
              <p className="mt-6 text-lg leading-9 text-slate-700">The tracker identifies a transaction in {item.market} marked {item.sourceStatus === "CLOSED & FUNDED" ? "closed and funded" : "closed"}, with a purchase-price field of {formatMoney(item.price)}. It does not contain a verified public narrative, closing statement, or measured operating results for this record. Further details will be added only after they can be documented for publication.</p>
            )}
            <h2 className="font-display mt-12 text-3xl text-[#111a26]">What the record can and cannot establish</h2>
            <p className="mt-5 leading-8 text-slate-700">The figures and date above come from an internal management sheet. The tracker status is not an independent title or deed verification. A seller concession is a recorded transaction term, not profit or cash received by the buyer. Some narrative notes conflict with summary fields. Purchase price is not total acquisition cost, equity invested, appraised value, net cash flow, or return on investment. No annual revenue or tax savings are claimed here.</p>
          </article>
          <aside className="h-fit border border-[#ded8cc] bg-[#fdfcf9] p-7">
            <h2 className="text-lg font-semibold text-[#111a26]">Process topics in the file</h2>
            <ul className="mt-5 space-y-3">{item.topics.map((topic) => <li key={topic} className="border-b border-slate-200 pb-3 text-sm text-slate-700">{topicLabels[topic]}</li>)}</ul>
            <p className="mt-5 text-sm leading-6 text-slate-500">Topics reflect mentions in internal notes. They do not certify a particular outcome.</p>
            <a href="https://www.bnbaccelerator.com/discovery/" className="mt-7 inline-block bg-[#111a26] px-5 py-3 text-sm font-semibold text-white">Book a call</a>
          </aside>
        </div>
      </section>
      {related.length > 0 && <section className="bg-[#f6f3ed] py-12"><div className="mx-auto max-w-5xl px-6 lg:px-8"><h2 className="font-display text-3xl text-[#111a26]">More in {item.market}</h2><div className="mt-6 grid gap-4 sm:grid-cols-3">{related.map((record) => <Link href={`/case-studies/${record.slug}`} key={record.slug} className="bg-white p-5 text-sm font-semibold text-[#4a5c78] hover:underline">{record.insight?.headline || `Acquisition at ${formatMoney(record.price)}`} →</Link>)}</div></div></section>}
    </>
  );
}
