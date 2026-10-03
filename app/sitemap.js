import { featuredCases } from "../data/cases";
import { blogPosts } from "../data/all-blog-posts";


const base = "https://bnbacceleratorreviews.vercel.app";


export default function sitemap() {
  return [
    { url: base, lastModified: new Date("2026-10-03") },
    { url: `${base}/blog`, lastModified: new Date("2026-10-03") },
    { url: `${base}/case-studies`, lastModified: new Date("2026-09-26") },
    ...featuredCases.map((item) => ({
      url: `${base}/case-studies/${item.slug}`,
      lastModified: new Date("2026-09-26"),
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.publishDate || "2026-10-03"),
    })),
  ];
}

