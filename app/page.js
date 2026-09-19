import Link from "next/link";

export const metadata = {
  title: "BNB Accelerator Reviews | Verified Sources and Client Evidence",
  description:
    "A BNB Accelerator-owned review and evidence website. Review the verification policy, independent ratings, documented client case studies, and service disclosures.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://bnbacceleratorreviews.com" },
  openGraph: {
    title: "BNB Accelerator Reviews | Verified Sources and Client Evidence",
    description:
      "Review independent ratings, documented client case studies, and the standards used to publish client evidence.",
    type: "website",
    url: "https://bnbacceleratorreviews.com",
    siteName: "BNB Accelerator Reviews",
  },
};

const evidenceLinks = [
  {
    label: "Independent platform",
    title: "Trustpilot profile",
    text: "Read ratings and comments published on a third-party review platform.",
    href: "https://www.trustpilot.com/review/mybnbaccelerator.com",
    external: true,
  },
  {
    label: "Company documentation",
    title: "Client case studies",
    text: "Review property-specific acquisition stories and the assumptions attached to each result.",
    href: "https://www.bnbaccelerator.com/case-studies/",
    external: true,
  },
  {
    label: "Property evidence",
    title: "Selected client deals",
    text: "Explore selected properties and follow links to deeper supporting material.",
    href: "https://www.bnbaccelerator.com/deals/",
    external: true,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-[#111a26] text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.2fr_.8fr] lg:px-8 lg:py-32">
          <div className="self-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#d1b47e]">
              Reviews and client evidence
            </p>
            <h1 className="font-display max-w-4xl text-5xl font-normal leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Evaluate BNB Accelerator with the source material in front of you.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              This website is owned and operated by BNB Accelerator. Its purpose is to organize review sources, documented client examples, and clear service disclosures in one place.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.trustpilot.com/review/mybnbaccelerator.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-[#b9975b] px-7 py-3.5 text-center font-semibold text-[#111a26] transition hover:bg-[#d1b47e]"
              >
                Read Independent Reviews
              </a>
              <a
                href="https://www.bnbaccelerator.com/case-studies/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-white/25 px-7 py-3.5 text-center font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                Review Case Studies
              </a>
            </div>
          </div>

          <aside className="border border-white/15 bg-white/[0.045] p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d1b47e]">Ownership disclosure</p>
            <h2 className="font-display mt-4 text-3xl font-normal text-white">A first-party evidence library</h2>
            <p className="mt-5 leading-7 text-slate-300">
              This is not an independent editorial publication. BNB Accelerator controls this website. Independent reviews are identified and linked to their original third-party source.
            </p>
            <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
              Individual results vary. Nothing on this website is tax, legal, investment, lending, or property management advice.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-[#f6f3ed] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#967744]">Start with evidence</p>
            <h2 className="font-display mt-4 text-4xl font-normal tracking-[-0.025em] text-[#111a26] sm:text-5xl">
              Three places to verify what you are reading
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A credible review should make it easy to distinguish an independent opinion, a company-published case study, and a financial projection.
            </p>
          </div>

          <div className="mt-14 grid border-y border-[#d8d1c4] lg:grid-cols-3">
            {evidenceLinks.map((item, index) => (
              <article key={item.title} className={`py-9 lg:px-8 ${index > 0 ? "border-t border-[#d8d1c4] lg:border-l lg:border-t-0" : ""}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#967744]">{item.label}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#111a26]">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex font-semibold text-[#4a5c78] hover:text-[#111a26]"
                >
                  Open source <span aria-hidden="true" className="ml-2">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#967744]">Publication standard</p>
            <h2 className="font-display mt-4 text-4xl font-normal tracking-[-0.025em] text-[#111a26] sm:text-5xl">
              What a published client review should include
            </h2>
          </div>
          <ol className="space-y-7">
            {[
              ["Identity and permission", "The reviewer is matched to an internal client record and has approved public use."],
              ["Original source", "The written review links to its original video, survey, interview, or third-party platform."],
              ["Result definitions", "Gross revenue, net cash flow, projections, annualized figures, and realized results are labeled separately."],
              ["Relevant period", "Every financial result states the property, market, and measurement period."],
              ["Balanced context", "Material limitations, delays, unusual circumstances, and the fact that results vary are not omitted."],
            ].map(([title, text], index) => (
              <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-slate-200 pb-7 last:border-0">
                <span className="font-display text-2xl text-[#b9975b]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-semibold text-[#111a26]">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#111a26] py-20 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center lg:px-8">
          <div>
            <h2 className="font-display text-4xl font-normal">Understand the service before evaluating the outcome.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              See exactly what BNB Accelerator coordinates, what remains the client's responsibility, and where independent advisers are required.
            </p>
          </div>
          <a
            href="https://www.bnbaccelerator.com/how-it-works/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-sm bg-[#b9975b] px-7 py-3.5 font-semibold text-[#111a26] transition hover:bg-[#d1b47e]"
          >
            How It Works
          </a>
        </div>
      </section>
    </>
  );
}
