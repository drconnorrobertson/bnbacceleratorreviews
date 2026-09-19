export const metadata = {
  title: "BNB Accelerator Review Sources",
  description: "Independent review links and the publication standard used by the BNB Accelerator-owned reviews website.",
  robots: { index: false, follow: true },
};

export default function ReviewsPage() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#967744]">Review sources</p>
        <h1 className="font-display mt-4 text-5xl font-normal tracking-[-0.035em] text-[#111a26] sm:text-6xl">
          Reviews should be traceable to their original source.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          The previously drafted review profiles are not being presented as verified client reviews. A profile will be eligible for publication only after identity, permission, source, result definitions, property context, and the relevant measurement period are documented.
        </p>
        <div className="mt-10 border-l-4 border-[#b9975b] bg-[#f6f3ed] p-7">
          <h2 className="text-lg font-semibold text-[#111a26]">Current independent source</h2>
          <p className="mt-2 leading-7 text-slate-600">Use the original third-party platform to review ratings and comments that BNB Accelerator does not publish or control.</p>
          <a href="https://www.trustpilot.com/review/mybnbaccelerator.com" className="mt-5 inline-flex font-semibold text-[#4a5c78]">
            Open Trustpilot <span aria-hidden="true" className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
