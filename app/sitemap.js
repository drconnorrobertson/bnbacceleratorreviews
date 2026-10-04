import { featuredCases } from "../data/cases";
import { guides } from "../data/guides";
const base = "https://www.bnbacceleratorreviews.co";
// Only routes with an explicit index:true override belong in this sitemap.
// Legacy blog/review pages retain the layout's evidence-quality noindex policy.
export default function sitemap() {
  return [
    { url: base, lastModified: new Date("2026-10-04") },
    { url: `${base}/case-studies`, lastModified: new Date("2026-10-04") },
    { url: `${base}/guides`, lastModified: new Date("2026-10-04") },
    ...featuredCases.map(item => ({ url: `${base}/case-studies/${item.slug}`, lastModified: new Date("2026-09-26") })),
    ...guides.map(guide => ({ url: `${base}/guides/${guide.slug}`, lastModified: new Date("2026-10-04") })),
  ];
}
