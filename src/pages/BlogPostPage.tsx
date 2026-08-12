import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import BlogPost from '@/components/BlogPost';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import PageSEO from '@/components/PageSEO';
import { API_BASE_URL } from '@/lib/constants';

type BlogPostData = {
  id: string;
  title: string;
  slug: string; // Added slug field
  content: string;
  author: string;
  created_at: string;
  updated_at?: string;
  image_url: string | null; // Matches backend field name
  published: boolean; // Matches backend field type
  category: string; // Added category field
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  
  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        console.log('Fetching post with slug:', slug);
        
        // Assuming backend has an endpoint to fetch by slug or we fetch all and filter
        const response = await fetch(
          `${API_BASE_URL}/blog_posts.php?slug=${encodeURIComponent(slug)}&_=${Date.now()}`,
          { cache: 'no-store' }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: BlogPostData = await response.json(); // Backend now returns single object for slug query
        
        if (!data || !data.id) { // Check if data is valid
          throw new Error("Blog post not found");
        }
        
        // If we're not in admin and post is not published, consider it not found
        if (!isAdmin && data.published === false) {
          throw new Error("This post is not published");
        }
        
        console.log('Fetched post:', data);
        setPost(data); // Directly set the fetched data
      } catch (error: any) {
        console.error('Error fetching blog post:', error);
        toast({
          title: "Post not found",
          description: "The blog post you're looking for doesn't exist or has been removed.",
          variant: "destructive"
        });
        
        // Only navigate away if we're not in the admin section
        if (!window.location.pathname.includes('/admin')) {
          navigate('/blog');
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchPost();
  }, [slug, toast, navigate, isAdmin]);
  
  // SEO metadata
  const title = post ? `${post.title} | MK Srinidhi Blog` : 'Blog Post | MK Srinidhi';
  const description = post?.content || 'Read our latest insights on surveying and construction.';
  const keywords = post?.title ? `${post.title}, ${post.category}, ${post.slug}, surveying, construction, MK Srinidhi` : 'blog, surveying, construction, MK Srinidhi';
  const getFullImageUrl = (url: string | null) => {
    if (!url) return '/uploads/lovable-uploads/847779eb-be4d-4547-af8d-f9665c2586a7.png';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `${window.location.origin}/${url.replace(/^\/*/, '')}`;
  };
  const ogImage = getFullImageUrl(post?.image_url || null);
  
  return (
    <Layout>
      <PageSEO 
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
      />
      <div className="pt-20">
        <BlogPost post={post} loading={loading} />
      </div>
    </Layout>
  );
};

export default BlogPostPage;
