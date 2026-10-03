import { blogPosts as originalPosts } from './blog-posts';
import { blogPostsBatch2 } from './blog-posts-batch2';

export const blogPosts = [...originalPosts, ...blogPostsBatch2].filter(Boolean);
