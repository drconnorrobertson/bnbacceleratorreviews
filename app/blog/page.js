import Link from 'next/link';
import { blogPosts } from '@/data/all-blog-posts';
import BlogCard from '@/components/BlogCard';
import Schema from '@/components/Schema';


export const metadata = {
  title: 'STR Investing Blog - Tips, Guides & BnB Accelerator Insights',
  description:
    'Expert short-term rental investing tips, STR market analysis, and BnB Accelerator program insights. Learn strategies for Airbnb hosting, rental arbitrage, property management, and scaling your STR portfolio.',
  openGraph: {
    title: 'STR Investing Blog - Tips, Guides & BnB Accelerator Insights',
    description:
      'Expert short-term rental investing tips, STR market analysis, and BnB Accelerator program insights. Learn strategies for Airbnb hosting, rental arbitrage, and scaling your STR portfolio.',
    type: 'website',
    url: 'https://bnbacceleratorreviews.com/blog',
    siteName: 'BnB Accelerator Reviews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STR Investing Blog - Tips, Guides & BnB Accelerator Insights',
    description:
      'Expert short-term rental investing tips, market analysis, and BnB Accelerator program insights.',
  },
  alternates: {
    canonical: 'https://bnbacceleratorreviews.com/blog',
  },
};


const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
