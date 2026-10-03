import { featuredCases } from "../data/cases";
import { blogPosts } from "../data/blog-posts";
import { competitorReviewsB1 } from "../data/cr-b1";
import { competitorReviewsB2 } from "../data/cr-b2";
import { competitorReviewsB3 } from "../data/cr-b3";
import { competitorReviewsB4 } from "../data/cr-b4";
import { competitorReviewsB5 } from "../data/cr-b5";

const allBlogPosts = [...blogPosts, ...competitorReviewsB1, ...competitorReviewsB2, ...competitorReviewsB3, ...competitorReviewsB4, ...competitorReviewsB5];

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
    ...allBlogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.publishDate || "2026-10-03"),
    })),
  ];
}
