import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/all-blog-posts';
import BlogCard from '@/components/BlogCard';
import Schema from '@/components/Schema';


export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}


export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);


  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }


  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url: `https://bnbacceleratorreviews.com/blog/${post.slug}`,
      siteName: 'BnB Accelerator Reviews',
      publishedTime: post.publishDate,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
