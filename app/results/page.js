export const metadata = {
  title: "BNB Accelerator Client Evidence",
  description: "Review documented BNB Accelerator client case studies and property examples at their original company sources.",
  robots: { index: false, follow: true },
};

export default function ResultsPage() {
  return (
    <section className="bg-[#f6f3ed] py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#967744]">Client evidence</p>
        <h1 className="font-display mt-4 text-5xl font-normal tracking-[-0.035em] text-[#111a26] sm:text-6xl">
          Review each result with its supporting context.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          Client-level financial figures are not republished here without a verified source and permission record. Use the company case studies and selected deals pages to review currently documented examples.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="https://www.bnbaccelerator.com/case-studies/" className="rounded-sm bg-[#111a26] px-7 py-3.5 text-center font-semibold text-white">
            Open Case Studies
          </a>
          <a href="https://www.bnbaccelerator.com/deals/" className="rounded-sm border border-[#111a26]/20 px-7 py-3.5 text-center font-semibold text-[#111a26]">
            Open Selected Deals
          </a>
        </div>
      </div>
    </section>
  );
}
