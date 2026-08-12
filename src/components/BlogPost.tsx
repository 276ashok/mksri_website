import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { ArrowLeft, Calendar, User, AlertCircle } from "lucide-react";
import DOMPurify from 'dompurify';

type BlogPostProps = {
  post: {
    id: string;
    title: string;
    slug: string; // Added slug
    content: string;
    author: string;
    created_at: string;
    updated_at?: string;
    image_url: string | null; // Changed to image_url
    published: boolean; // Changed to boolean
    category: string; // Added category
  } | null;
  loading: boolean;
};

const getFullImageUrl = (url: string | null) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `${window.location.origin}/${url.replace(/^\/*/, '')}`;
};

const BlogPost = ({ post, loading }: BlogPostProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.pathname.includes('/admin');

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-orange"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Post not found</h2>
        <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="inline-flex items-center justify-center px-6 py-2 bg-brand-orange text-white font-medium rounded-md hover:bg-brand-orange/90 transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Link to="/blog" className="inline-flex items-center text-brand-gray hover:text-brand-orange transition-colors mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {post.published === false && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-center">
              <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-amber-700">
                This is an unpublished draft post and is not visible to the public.
              </span>
            </div>
          )}
          
          {post.image_url && (
            <div className="w-full h-96 rounded-lg overflow-hidden mb-8">
              <img 
                src={getFullImageUrl(post.image_url)} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-brand-gray mb-8 space-x-6">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>{post.author}</span>
            </div>
            
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{format(new Date(post.created_at), 'MMMM dd, yyyy')}</span>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
          </div>

          {/* Inline CTA */}
          <div className="mt-8 text-center">
            <p className="text-xl text-brand-gray mb-4">Need a quote? Contact us!</p>
            <Link to="/contact" className="inline-block px-6 py-3 bg-brand-orange text-white rounded-md hover:bg-brand-dark transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Social Share Buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Facebook
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href={`https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${post.title}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>

          {/* Comment Box (Optional) */}
          {/* <div className="mt-8">
            <h3>Comments</h3>
            <p>Comment functionality can be added here.</p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPost;
