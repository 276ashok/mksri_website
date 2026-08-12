import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link, useLocation } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { API_BASE_URL } from '@/lib/constants'; // Import API_BASE_URL
import DOMPurify from 'dompurify'; // Import DOMPurify

type BlogPost = {
  id: number;
  title: string;
  slug: string; // Added slug
  excerpt: string; // Added excerpt
  content: string;
  author: string;
  created_at: string;
  image_url: string | null;
  published: boolean;
  category: string;
  updated_at: string;
};

interface BlogProps {
  fullPage?: boolean;
}

const POSTS_PER_PAGE = 6;

const Blog: React.FC<BlogProps> = ({ fullPage = false }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const { toast } = useToast();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const categories = ["Construction", "Surveying", "Tips", "Estimation & Costing", "Residential"]; // Example categories

  useEffect(() => {
    fetchPosts();
  }, [isAdmin]); // Fetch all posts once, then filter client-side

  useEffect(() => {
    applyFiltersAndPagination();
  }, [posts, searchQuery, activeCategory, currentPage]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      
      let url = `${API_BASE_URL}/blog_posts.php`;
      // Re-enable published filter for public-facing blog page
      if (!isAdmin) {
        url += "?published=true";
      }
      const separator = url.includes('?') ? '&' : '?';
      url += `${separator}_=${Date.now()}`;
      // Backend already orders by created_at descending

      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: BlogPost[] = await response.json();
      
      setPosts(data || []);
    } catch (error: any) {
      console.error('Error fetching blog posts:', error);
      toast({
        title: "Error loading blog posts",
        description: "Please refresh the page to try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const applyFiltersAndPagination = () => {
    let tempPosts = posts;

    // Apply search filter
    if (searchQuery) {
      tempPosts = tempPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) || // Search excerpt
          getPlainTextExcerpt(post.content).toLowerCase().includes(searchQuery.toLowerCase()) // Use plain text for search
      );
    }

    // Apply category filter
    if (activeCategory !== "all") {
      tempPosts = tempPosts.filter((post) => post.category === activeCategory);
    }

    setTotalPages(Math.ceil(tempPosts.length / POSTS_PER_PAGE));
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    setFilteredPosts(tempPosts.slice(startIndex, endIndex));
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

  const getFullImageUrl = (url: string | null) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `${window.location.origin}/${url.replace(/^\/*/, '')}`;
  };

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="section-title">
            {fullPage ? "Insights, Tips & Updates from MK Srinidhi Surveyors and Builders" : "Latest from Our Blog"}
          </h1>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            {fullPage ? "Explore expert articles on construction, surveying, planning, and more." : "Stay updated with our insights, news, and expert articles on construction, surveying, and industry trends."}
          </p>
        </motion.div>

        {fullPage && (
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <Input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-sm w-full md:w-auto"
            />
            <Tabs defaultValue="all" onValueChange={setActiveCategory} className="inline-block">
              <TabsList className="flex flex-wrap justify-center h-auto p-2">
                <TabsTrigger value="all" className="px-4 py-2">All</TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="px-4 py-2">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-orange"></div>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-brand-gray">No blog posts available yet.</p>
            <p className="text-brand-gray mt-2">Check back soon for new content!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${!post.published ? 'border-2 border-dashed border-amber-400' : ''}`}
                >
                  <Link to={`/blog/${post.slug}`}> {/* Use post.slug for linking */}
                    <div className="relative h-48 bg-gray-200">
                      {post.image_url ? (
                        <img
                          src={getFullImageUrl(post.image_url)}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-brand-orange/10">
                          <span className="text-brand-orange font-semibold">MK Srinidhi</span>
                        </div>
                      )}
                      {!post.published && isAdmin && (
                        <div className="absolute top-2 right-2 bg-amber-400 text-white text-xs font-bold py-1 px-2 rounded">
                          Draft
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-brand-gray mb-2 flex items-center justify-between">
                        <span>{post.author}</span>
                        <span>{format(new Date(post.created_at), 'MMM dd, yyyy')}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-brand-dark mb-3 hover:text-brand-orange transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-brand-gray mb-4">
                        {post.excerpt || getPlainTextExcerpt(post.content)}
                      </p>
                      <div className="text-brand-orange font-medium hover:underline">
                        Read More
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            {console.log('Filtered Posts:', filteredPosts)}
            
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious onClick={() => setCurrentPage(curr => Math.max(curr - 1, 1))} />
                      </PaginationItem>
                    )}
                    
                    {Array.from({ length: totalPages }).map((_, i) => {
                      // Show first page, last page, and pages around current page
                      if (
                        i === 0 || 
                        i === totalPages - 1 || 
                        (i >= currentPage - 2 && i <= currentPage + 1)
                      ) {
                        return (
                          <PaginationItem key={i}>
                            <PaginationLink 
                              isActive={currentPage === i + 1}
                              onClick={() => setCurrentPage(i + 1)}
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      }
                      
                      // Add ellipsis for page gaps
                      if (i === 1 && currentPage > 3) {
                        return (
                          <PaginationItem key="ellipsis-start">
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }
                      
                      if (i === totalPages - 2 && currentPage < totalPages - 2) {
                        return (
                          <PaginationItem key="ellipsis-end">
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }
                      
                      return null;
                    })}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext onClick={() => setCurrentPage(curr => Math.min(curr + 1, totalPages))} />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Blog;
