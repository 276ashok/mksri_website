import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { API_BASE_URL } from '@/lib/constants';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import DOMPurify from 'dompurify'; // Keep DOMPurify for potential future use or if content is used elsewhere

interface BlogPost {
  id: number;
  title: string;
  slug: string; // Use slug for linking
  excerpt: string; // Added excerpt field
  image_url: string; // Use image_url from backend
  content: string; // Use content for excerpt
  published: boolean; // Use published status
  created_at: string;
}

const BlogPreview = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_BASE_URL}/blog_posts.php?published=true&_=${Date.now()}`,
          { cache: 'no-store' }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: BlogPost[] = await response.json();
        // Sort by created_at in descending order and take the latest 3
        const latestPosts = (data || [])
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, 3);
        setBlogPosts(latestPosts);
      } catch (error: any) {
        toast({
          title: "Error fetching blog posts",
          description: error.message,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, [toast]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Helper function to strip HTML tags and truncate text for preview using regex
  const getPlainTextExcerpt = (htmlContent: string, maxLength: number = 150) => {
    // Remove HTML tags using a regular expression
    const strippedContent = htmlContent.replace(/<[^>]*>/g, '');
    const textContent = strippedContent || "";
    if (textContent.length > maxLength) {
      return textContent.substring(0, maxLength) + "...";
    }
    return textContent;
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="blog-preview" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Latest from Our Blog</h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Stay updated with our insights, news, and expert articles on construction, surveying, and industry trends.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center p-4">
            <Loader2 className="h-8 w-8 animate-spin text-brand-orange" />
          </div>
        ) : blogPosts.length === 0 ? (
          <p className="text-center py-4 text-gray-500">No blog posts found.</p>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md overflow-hidden card-hover group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image_url || "/placeholder.svg"} // Use image_url, fallback to placeholder
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brand-dark mb-2">
                      {post.title}
                    </h3>
                    <p className="text-brand-gray text-sm mb-4">
                      {post.excerpt || getPlainTextExcerpt(post.content)}
                    </p>
                    <span className="text-brand-orange hover:text-brand-red font-medium transition-colors flex items-center">
                      <span>Read More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <Link to="/blog" className="btn-primary">
            Visit Our Blog
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
