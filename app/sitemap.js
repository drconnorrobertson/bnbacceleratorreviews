import { featuredCases } from "../data/cases";

const base = "https://bnbacceleratorreviews.vercel.app";

export default function sitemap() {
  return [
    { url: base, lastModified: new Date("2026-09-26") },
    { url: `${base}/case-studies`, lastModified: new Date("2026-09-26") },
    ...featuredCases.map((item) => ({
      url: `${base}/case-studies/${item.slug}`,
      lastModified: new Date("2026-09-26"),
    })),
  ];
}
