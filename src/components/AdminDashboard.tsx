import React, { useState, useEffect } from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { useToast } from '@/components/ui/use-toast';
import { Loader2, Trash2, Edit, Check, X, Plus, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import BlogImageUpload from './Admin/BlogImageUpload';
import SearchFilter from './Admin/SearchFilter';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { API_BASE_URL } from '@/lib/constants';

// Types
interface BlogPost {
  id: number;
  title: string;
  slug: string; // Added slug field
  excerpt: string; // Added excerpt field
  content: string;
  author: string;
  created_at: string;
  image_url: string | null;
  published: boolean;
  category: string;
  updated_at: string;
}

interface QuoteRequest {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  service_type: string | null;
  message: string;
  created_at: string;
  status: string;
}

interface CareerApplication {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  job_title: string;
  resume_path: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

interface JobVacancy {
  id: number;
  title: string;
  description: string;
  requirements: string | null;
  location: string;
  salary_range: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Define props interface for AdminDashboard component
interface AdminDashboardProps {
  activeTab: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ activeTab }) => {
  // State
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [filteredBlogPosts, setFilteredBlogPosts] = useState<BlogPost[]>([]);
  const [blogSearch, setBlogSearch] = useState('');
  const [blogFilter, setBlogFilter] = useState('all');
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);
  const [filteredQuoteRequests, setFilteredQuoteRequests] = useState<QuoteRequest[]>([]);
  const [quoteSearch, setQuoteSearch] = useState('');
  const [quoteFilter, setQuoteFilter] = useState('all');
  
  const [careerApplications, setCareerApplications] = useState<CareerApplication[]>([]);
  const [filteredCareerApplications, setFilteredCareerApplications] = useState<CareerApplication[]>([]);
  const [careerSearch, setCareerSearch] = useState('');
  const [careerFilter, setCareerFilter] = useState('all');
  
  const [jobVacancies, setJobVacancies] = useState<JobVacancy[]>([]);
  const [filteredJobVacancies, setFilteredJobVacancies] = useState<JobVacancy[]>([]);
  const [jobSearch, setJobSearch] = useState('');
  const [jobFilter, setJobFilter] = useState('all');
  
  const [loading, setLoading] = useState({
    blog: false,
    quotes: false,
    careers: false,
    jobs: false
  });
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: '',
    slug: '', // Added slug field
    excerpt: '', // Added excerpt field
    content: '',
    author: '',
    image_url: '',
    category: ''
  });
  const [newJob, setNewJob] = useState<Partial<JobVacancy>>({
    title: '',
    description: '',
    requirements: '',
    location: '',
    salary_range: '',
    is_active: true
  });
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [editingJob, setEditingJob] = useState<JobVacancy | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isJobDialogOpen, setIsJobDialogOpen] = useState(false);

  const { toast } = useToast();
  const navigate = useNavigate();

  // Fetch data based on active tab
  useEffect(() => {
    if (activeTab === 'blog') {
      fetchBlogPosts();
    } else if (activeTab === 'quotes') {
      fetchQuoteRequests();
    } else if (activeTab === 'careers') {
      fetchCareerApplications();
    } else if (activeTab === 'jobs') {
      fetchJobVacancies();
    } else if (activeTab === 'dashboard') {
      // Fetch all for dashboard overview (consider if pagination is needed here)
      fetchBlogPosts(); // Fetch all for overview
      fetchQuoteRequests();
      fetchCareerApplications();
      fetchJobVacancies();
    }
  }, [activeTab]);

  // Apply filters when search/filter values change
  useEffect(() => {
    filterBlogPosts();
  }, [blogPosts, blogSearch, blogFilter]);

  useEffect(() => {
    filterQuoteRequests();
  }, [quoteRequests, quoteSearch, quoteFilter]);

  useEffect(() => {
    filterCareerApplications();
  }, [careerApplications, careerSearch, careerFilter]);

  useEffect(() => {
    filterJobVacancies();
  }, [jobVacancies, jobSearch, jobFilter]);

  // Filter functions
  const filterBlogPosts = () => {
    let filtered = [...blogPosts];
    
    // Apply search
    if (blogSearch) {
      const searchTerm = blogSearch.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm) || 
        post.author.toLowerCase().includes(searchTerm) || 
        post.content.toLowerCase().includes(searchTerm) // Changed from excerpt to content
      );
    }
    
    // Apply filter
    if (blogFilter !== 'all') {
      filtered = filtered.filter(post => 
        blogFilter === 'published' ? post.published : !post.published
      );
    }
    
    setFilteredBlogPosts(filtered);
  };

  const filterQuoteRequests = () => {
    let filtered = [...quoteRequests];
    
    // Apply search
    if (quoteSearch) {
      const searchTerm = quoteSearch.toLowerCase();
      filtered = filtered.filter(quote => 
        quote.name.toLowerCase().includes(searchTerm) || 
        quote.email.toLowerCase().includes(searchTerm) || 
        (quote.service_type && quote.service_type.toLowerCase().includes(searchTerm)) || // Changed from service to service_type
        quote.message.toLowerCase().includes(searchTerm)
      );
    }
    
    // Apply filter
    if (quoteFilter !== 'all') {
      filtered = filtered.filter(quote => quote.status.toLowerCase() === quoteFilter.toLowerCase());
    }
    
    setFilteredQuoteRequests(filtered);
  };

  const filterCareerApplications = () => {
    let filtered = [...careerApplications];
    
    // Apply search
    if (careerSearch) {
      const searchTerm = careerSearch.toLowerCase();
      filtered = filtered.filter(app => 
        app.name.toLowerCase().includes(searchTerm) || 
        app.email.toLowerCase().includes(searchTerm) || 
        app.job_title.toLowerCase().includes(searchTerm) // Changed from position to job_title
      );
    }
    
    // Apply filter
    if (careerFilter !== 'all') {
      filtered = filtered.filter(app => app.status.toLowerCase() === careerFilter.toLowerCase());
    }
    
    setFilteredCareerApplications(filtered);
  };

  const filterJobVacancies = () => {
    let filtered = [...jobVacancies];
    
    // Apply search
    if (jobSearch) {
      const searchTerm = jobSearch.toLowerCase();
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm) || 
        job.location.toLowerCase().includes(searchTerm) || 
        job.description.toLowerCase().includes(searchTerm) ||
        (job.requirements && job.requirements.toLowerCase().includes(searchTerm))
      );
    }
    
    // Apply filter
    if (jobFilter !== 'all') {
      const isActive = jobFilter === 'active';
      filtered = filtered.filter(job => job.is_active === isActive);
    }
    
    setFilteredJobVacancies(filtered);
  };

  const fetchBlogPosts = async () => {
    setLoading((prev) => ({ ...prev, blog: true }));
    try {
      const response = await fetch(`${API_BASE_URL}/blog_posts.php`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setBlogPosts(result || []);
      setFilteredBlogPosts(result || []);
    } catch (error: any) {
      toast({
        title: "Error fetching blog posts",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading((prev) => ({ ...prev, blog: false }));
    }
  };

  const fetchQuoteRequests = async () => {
    setLoading((prev) => ({ ...prev, quotes: true }));
    try {
      const response = await fetch(`${API_BASE_URL}/api.php?action=quote_requests`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();

      const formattedData = (result || []).map((item: QuoteRequest) => ({
        id: item.id,
        name: item.name,
        email: item.email,
        phone: item.phone || null,
        service_type: item.service_type || null,
        message: item.message,
        created_at: item.created_at,
        status: item.status,
      }));

      setQuoteRequests(formattedData);
      setFilteredQuoteRequests(formattedData);
    } catch (error: any) {
      toast({
        title: "Error fetching quote requests",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading((prev) => ({ ...prev, quotes: false }));
    }
  };

  const fetchCareerApplications = async () => {
    setLoading(prev => ({ ...prev, careers: true }));
    try {
      const response = await fetch(`${API_BASE_URL}/api.php?action=career_applications`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      
      setCareerApplications(result || []);
      setFilteredCareerApplications(result || []);
    } catch (error: any) {
      toast({
        title: "Error fetching career applications",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(prev => ({ ...prev, careers: false }));
    }
  };

  const fetchJobVacancies = async () => {
    setLoading(prev => ({ ...prev, jobs: true }));
    try {
      const response = await fetch(`${API_BASE_URL}/job_vacancies.php`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      
      setJobVacancies(result || []);
      setFilteredJobVacancies(result || []);
    } catch (error: any) {
      toast({
        title: "Error fetching job vacancies",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(prev => ({ ...prev, jobs: false }));
    }
  };

  // Blog post functions
  const handleCreatePost = async () => {
    try {
      const postData = {
        title: newPost.title,
        slug: newPost.slug, // Include slug
        excerpt: newPost.excerpt, // Include excerpt
        content: newPost.content,
        author: newPost.author,
        image_url: newPost.image_url || null,
        category: newPost.category,
        published: newPost.published, // Use the state value from the checkbox
      };

      const response = await fetch(`${API_BASE_URL}/blog_posts.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json(); // Backend returns { message: ..., id: ..., slug: ... }
      const newPostId = responseData.id;

      // Fetch the newly created post to get the full object including the generated slug
      const fetchResponse = await fetch(`${API_BASE_URL}/blog_posts.php?id=${newPostId}`);
      if (!fetchResponse.ok) {
        throw new Error(`Failed to fetch new post: ${fetchResponse.status}`);
      }
      const newBlogPost: BlogPost = await fetchResponse.json();

      toast({
        title: "Blog post created",
        description: "Your post has been created as a draft. You can publish it when ready.",
      });

      setBlogPosts([newBlogPost, ...blogPosts]); // Add new post to the beginning
      setNewPost({
        title: "",
        slug: "",
        excerpt: "", // Clear excerpt
        content: "",
        author: "",
        image_url: "",
        category: "",
      });
      setIsDialogOpen(false);
    } catch (error: any) {
      toast({
        title: "Error creating post",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleUpdatePost = async (postToUpdate: BlogPost) => {
    try {
      const postData = {
        title: postToUpdate.title,
        slug: postToUpdate.slug, // Include slug
        excerpt: postToUpdate.excerpt, // Include excerpt
        content: postToUpdate.content,
        author: postToUpdate.author,
        image_url: postToUpdate.image_url,
        category: postToUpdate.category,
        published: postToUpdate.published, // Include published status
      };

      const response = await fetch(
        `${API_BASE_URL}/blog_posts.php?id=${postToUpdate.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      // Fetch the updated post to get the full object including the potentially regenerated slug
      const fetchResponse = await fetch(`${API_BASE_URL}/blog_posts.php?id=${postToUpdate.id}`);
      if (!fetchResponse.ok) {
        throw new Error(`Failed to fetch updated post: ${fetchResponse.status}`);
      }
      const updatedBlogPost: BlogPost = await fetchResponse.json();

      toast({
        title: "Blog post updated",
        description: "Your changes have been saved successfully.",
      });

      setBlogPosts(
        blogPosts.map((post) => (post.id === updatedBlogPost.id ? updatedBlogPost : post))
      );
      setEditingPost(null);
      setIsDialogOpen(false);
    } catch (error: any) {
      toast({
        title: "Error updating post",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDeletePost = async (id: number) => {
    if (
      !confirm(
        "Are you sure you want to delete this post? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/blog_posts.php?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      toast({
        title: "Blog post deleted",
        description: "The post has been removed successfully.",
      });

      setBlogPosts(blogPosts.filter((post) => post.id !== id));
    } catch (error: any) {
      toast({
        title: "Error deleting post",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  // Quote request functions
  const updateQuoteStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api.php?action=quote_requests&id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: status }), // Only sending status for update
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      toast({
        title: "Status updated",
        description: `Quote request marked as ${status}.`,
      });

      setQuoteRequests((prevQuotes) =>
        prevQuotes.map((quote) =>
          quote.id === id ? { ...quote, status: status } : quote
        )
      );
      await fetchQuoteRequests();
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deleteQuoteRequest = async (id: number) => {
    if (
      !confirm(
        "Are you sure you want to delete this quote request? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api.php?action=quote_requests&id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      toast({
        title: "Quote request deleted",
        description: "The request has been removed successfully.",
      });

      setQuoteRequests((prevQuotes) => prevQuotes.filter((quote) => quote.id !== id));
      await fetchQuoteRequests();
    } catch (error: any) {
      toast({
        title: "Error deleting request",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  // Career application functions
  const updateApplicationStatus = async (id: number, status: string) => { // Changed id to number
    try {
      const response = await fetch(`${API_BASE_URL}/api.php?action=career_applications&id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: status }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      toast({
        title: "Status updated",
        description: `Application marked as ${status}.`
      });
      
      setCareerApplications(careerApplications.map(app => 
        app.id === id ? { ...app, status } : app
      ));
      
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const deleteApplication = async (id: number) => { // Changed id to number
    if (!confirm("Are you sure you want to delete this application? This action cannot be undone.")) {
      return;
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/api.php?action=career_applications&id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }
      
      toast({
        title: "Application deleted",
        description: "The application has been removed successfully."
      });
      
      setCareerApplications(careerApplications.filter(app => app.id !== id));
    } catch (error: any) {
      toast({
        title: "Error deleting application",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  // Job vacancy functions
  const handleCreateJob = async () => {
    try {
      if (!newJob.title || !newJob.description || !newJob.requirements || !newJob.location) {
        toast({
          title: "Missing required fields",
          description: "Please fill in all required fields",
          variant: "destructive"
        });
        return;
      }

      const jobData = {
        title: newJob.title,
        description: newJob.description,
        requirements: newJob.requirements || null,
        location: newJob.location,
        salary_range: newJob.salary_range || null,
        is_active: newJob.is_active !== undefined ? newJob.is_active : true,
      };

      const response = await fetch(`${API_BASE_URL}/job_vacancies.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const data: JobVacancy = await response.json();
      
      toast({
        title: "Job vacancy created",
        description: "Your job vacancy has been published successfully."
      });
      
      setJobVacancies([data, ...jobVacancies]);
      await fetchJobVacancies();
      setNewJob({
        title: '',
        description: '',
        requirements: '',
        location: '',
        salary_range: '',
        is_active: true
      });
      setIsJobDialogOpen(false);
    } catch (error: any) {
      toast({
        title: "Error creating job vacancy",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleUpdateJob = async () => {
    if (!editingJob) return;
    
    try {
      const jobData = {
        title: editingJob.title,
        description: editingJob.description,
        requirements: editingJob.requirements || null,
        location: editingJob.location,
        salary_range: editingJob.salary_range || null,
        is_active: editingJob.is_active,
      };

      const response = await fetch(
        `${API_BASE_URL}/job_vacancies.php?id=${editingJob.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jobData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const data: JobVacancy = await response.json();
      
      toast({
        title: "Job vacancy updated",
        description: "Your changes have been saved successfully."
      });
      
      setJobVacancies(jobVacancies.map(job => 
        job.id === data.id ? data : job
      ));
      await fetchJobVacancies();
      setEditingJob(null);
      setIsJobDialogOpen(false);
    } catch (error: any) {
      toast({
        title: "Error updating job vacancy",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleDeleteJob = async (id: number) => { // Changed id to number
    if (!confirm("Are you sure you want to delete this job vacancy? This action cannot be undone.")) {
      return;
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/job_vacancies.php?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }
      
      toast({
        title: "Job vacancy deleted",
        description: "The job vacancy has been removed successfully."
      });
      
      setJobVacancies(jobVacancies.filter(job => job.id !== id));
      await fetchJobVacancies();
    } catch (error: any) {
      toast({
        title: "Error deleting job vacancy",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const toggleJobStatus = async (id: number, currentStatus: boolean) => { // Changed id to number
    try {
      const jobData = { is_active: !currentStatus };

      const response = await fetch(
        `${API_BASE_URL}/job_vacancies.php?id=${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jobData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      toast({
        title: `Job vacancy ${!currentStatus ? 'activated' : 'deactivated'}`,
        description: `The job vacancy is now ${!currentStatus ? 'active' : 'inactive'}.`
      });
      
      setJobVacancies(jobVacancies.map(job => 
        job.id === id ? { ...job, is_active: !currentStatus } : job
      ));
      await fetchJobVacancies();
    } catch (error: any) {
      toast({
        title: "Error updating job status",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const getStatusBadge = (status: string) => {
    if (!status) return <Badge>No Status</Badge>;
    
    switch (status.toLowerCase()) {
      case 'new':
        return <Badge className="bg-blue-500">New</Badge>;
      case 'in progress':
        return <Badge className="bg-yellow-500">In Progress</Badge>;
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      case 'rejected':
        return <Badge className="bg-red-500">Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch (e) {
      return dateString;
    }
  };

  const getPublicResumeUrl = (path: string) => {
    if (!path) return '';
    // Construct the base URL for public assets by replacing '/backend' with '/public' in API_BASE_URL
    // This assumes static assets are served from a /public/ path relative to the base URL.
    const baseUrl = API_BASE_URL.replace('/backend', '/public');
    return `${baseUrl}/${path}`;
  };

  const getPublicBlogImageUrl = (path: string | null) => {
    if (!path) return '';
    // Construct the base URL for public assets by replacing '/backend' with '/public' in API_BASE_URL
    // This assumes static assets are served from a /public/ path relative to the base URL.
    const baseUrl = API_BASE_URL.replace('/backend', '/public');
    return `${baseUrl}/${path}`;
  };

  const handleImageUploaded = (imageUrl: string) => {
    if (editingPost) {
      setEditingPost({ ...editingPost, image_url: imageUrl }); // Changed featured_image to image_url
    } else {
      setNewPost({ ...newPost, image_url: imageUrl }); // Changed featured_image to image_url
    }
  };

  const togglePostPublishStatus = async (id: number, currentStatus: boolean) => {
    try {
      const response = await fetch(`${API_BASE_URL}/blog_posts.php/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const postToUpdate: BlogPost = await response.json();

      const updatedPost = { ...postToUpdate, published: !currentStatus };

      await handleUpdatePost(updatedPost);

      toast({
        title: `Blog post ${!currentStatus ? "published" : "unpublished"}`,
        description: `The blog post is now ${!currentStatus ? "published" : "unpublished"}.`,
      });

      setBlogPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === id ? { ...post, published: !currentStatus } : post
        )
      );
    } catch (error: any) {
      toast({
        title: "Error updating post status",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <TabsContent value="dashboard">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Overview</CardTitle>
              <CardDescription>Summary of your website activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h3 className="font-medium text-lg">Blog Posts</h3>
                  <p className="text-3xl font-bold">{blogPosts.length}</p>
                </div>
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h3 className="font-medium text-lg">Quote Requests</h3>
                  <p className="text-3xl font-bold">{quoteRequests.length}</p>
                </div>
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h3 className="font-medium text-lg">Job Applications</h3>
                  <p className="text-3xl font-bold">{careerApplications.length}</p>
                </div>
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h3 className="font-medium text-lg">Job Vacancies</h3>
                  <p className="text-3xl font-bold">{jobVacancies.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
        </div>
      </TabsContent>
      
      <TabsContent value="blog">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-2">
              <CardTitle>Blog Management</CardTitle>
              <CardDescription>Create, edit, and manage your blog posts</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => {
                  setEditingPost(null); // Ensure no post is being edited
                  setNewPost({ // Explicitly clear new post state when opening for a new post
                    title: '',
                    slug: '',
                    excerpt: '',
                    content: '',
                    author: '',
                    image_url: '',
                    category: '',
                    published: false,
                  });
                }}>
                  <Plus className="mr-2 h-4 w-4" /> New Post
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingPost ? "Edit Blog Post" : "Create New Blog Post"}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">Title</label>
                    <Input
                      id="title"
                      value={editingPost ? editingPost.title : newPost.title}
                      onChange={(e) => editingPost 
                        ? setEditingPost({...editingPost, title: e.target.value})
                        : setNewPost({...newPost, title: e.target.value})
                      }
                      placeholder="Enter post title"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="slug" className="text-sm font-medium">Slug</label>
                    <Input
                      id="slug"
                      value={editingPost ? editingPost.slug : newPost.slug || ''}
                      onChange={(e) => editingPost 
                        ? setEditingPost({...editingPost, slug: e.target.value})
                        : setNewPost({...newPost, slug: e.target.value})
                      }
                      placeholder="Enter unique slug (e.g., my-awesome-blog-post)"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="author" className="text-sm font-medium">Author</label>
                    <Input
                      id="author"
                      value={editingPost ? editingPost.author : newPost.author || ''}
                      onChange={(e) => editingPost 
                        ? setEditingPost({...editingPost, author: e.target.value})
                        : setNewPost({...newPost, author: e.target.value})
                      }
                      placeholder="Enter author name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">Category</label>
                    <Select
                      value={editingPost ? editingPost.category : newPost.category}
                      onValueChange={(value) => editingPost
                        ? setEditingPost({...editingPost, category: value})
                        : setNewPost({...newPost, category: value})
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Construction">Construction</SelectItem>
                        <SelectItem value="Surveying">Surveying</SelectItem>
                        <SelectItem value="Tips">Tips</SelectItem>
                        <SelectItem value="Estimation & Costing">Estimation & Costing</SelectItem>
                        <SelectItem value="Residential">Residential</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="image_url" className="text-sm font-medium">Featured Image</label>
                    <BlogImageUpload 
                      onImageUploaded={handleImageUploaded} 
                      currentImage={editingPost ? editingPost.image_url : newPost.image_url}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="excerpt" className="text-sm font-medium">Excerpt</label>
                    <Textarea
                      id="excerpt"
                      value={editingPost ? editingPost.excerpt : newPost.excerpt || ''}
                      onChange={(e) => editingPost 
                        ? setEditingPost({...editingPost, excerpt: e.target.value})
                        : setNewPost({...newPost, excerpt: e.target.value})
                      }
                      placeholder="A short summary of the blog post"
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="content" className="text-sm font-medium">Content</label>
                    <ReactQuill
                      theme="snow"
                      value={editingPost ? editingPost.content : newPost.content || ''}
                      onChange={(value) => editingPost
                        ? setEditingPost({...editingPost, content: value})
                        : setNewPost({...newPost, content: value})
                      }
                      placeholder="Write your blog post content here"
                      modules={{
                        toolbar: [
                          [{ 'header': [1, 2, false] }],
                          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                          ['link', 'image'],
                          [{ 'align': [] }], // Add alignment options
                          ['clean']
                        ],
                      }}
                      formats={[
                        'header',
                        'bold', 'italic', 'underline', 'strike', 'blockquote',
                        'list', 'bullet', 'indent',
                        'link', 'image',
                        'align' // Add align to formats
                      ]}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="published"
                      checked={editingPost ? editingPost.published || false : (newPost.published || false)}
                      onChange={(e) => editingPost 
                        ? setEditingPost({...editingPost, published: e.target.checked})
                        : setNewPost({...newPost, published: e.target.checked})
                      }
                      className="h-4 w-4"
                    />
                    <label htmlFor="published" className="text-sm font-medium">
                      Published (Visible to public)
                    </label>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => {
                    setIsDialogOpen(false);
                    setEditingPost(null);
                  }}>
                    Cancel
                  </Button>
                  <Button onClick={editingPost ? () => handleUpdatePost(editingPost) : handleCreatePost}>
                    {editingPost ? "Update Post" : "Create Post"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <SearchFilter 
              searchPlaceholder="Search blog posts..."
              searchValue={blogSearch}
              onSearchChange={setBlogSearch}
              filterOptions={[
                { value: 'published', label: 'Published' },
                { value: 'draft', label: 'Draft' }
              ]}
              filterValue={blogFilter}
              onFilterChange={setBlogFilter}
              filterLabel="Status"
            />
            
            {loading.blog ? (
              <div className="flex justify-center p-4">
                <Loader2 className="h-8 w-8 animate-spin text-brand-orange" />
              </div>
            ) : filteredBlogPosts.length === 0 ? (
              <p className="text-center py-4 text-gray-500">No blog posts found</p>
            ) : (
                <div className="space-y-4">
                  {filteredBlogPosts.map((post) => (
                    <div key={post.id} className="border p-4 rounded-lg">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div className="mb-2 sm:mb-0">
                          <h3 className="font-medium">{post.title}</h3>
                          <p className="text-sm text-gray-500">By {post.author} • {formatDate(post.created_at)}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Badge className={post.published ? "bg-green-500" : "bg-yellow-500"}>
                            {post.published ? "Published" : "Draft"}
                          </Badge>
                        </div>
                      </div>
                      <div className="mt-2 text-sm prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                      <div className="mt-4 flex flex-col sm:flex-row justify-end sm:space-x-2 space-y-2 sm:space-y-0">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => togglePostPublishStatus(post.id, post.published)}
                          className="w-full sm:w-auto"
                        >
                          {post.published ? "Unpublish" : "Publish"}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => {
                            setEditingPost(post);
                            setIsDialogOpen(true);
                          }}
                          className="w-full sm:w-auto"
                        >
                          <Edit className="h-4 w-4 mr-1" /> Edit
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-red-500 hover:text-red-700 w-full sm:w-auto"
                          onClick={() => handleDeletePost(post.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" /> Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="quotes">
        <Card>
          <CardHeader>
            <CardTitle>Quote Requests</CardTitle>
            <CardDescription>Manage incoming quote requests from customers</CardDescription>
          </CardHeader>
          <CardContent>
            <SearchFilter 
              searchPlaceholder="Search quote requests..."
              searchValue={quoteSearch}
              onSearchChange={setQuoteSearch}
              filterOptions={[
                { value: 'new', label: 'New' },
                { value: 'in progress', label: 'In Progress' },
                { value: 'completed', label: 'Completed' },
                { value: 'rejected', label: 'Rejected' }
              ]}
              filterValue={quoteFilter}
              onFilterChange={setQuoteFilter}
              filterLabel="Status"
            />
            
            {loading.quotes ? (
              <div className="flex justify-center p-4">
                <Loader2 className="h-8 w-8 animate-spin text-brand-orange" />
              </div>
            ) : filteredQuoteRequests.length === 0 ? (
              <p className="text-center py-4 text-gray-500">No quote requests found</p>
            ) : (
                <div className="space-y-4">
                  {filteredQuoteRequests.map((quote) => (
                    <div key={quote.id} className="border p-4 rounded-lg">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div className="mb-2 sm:mb-0">
                          <h3 className="font-medium">{quote.name}</h3>
                          <p className="text-sm text-gray-500">{quote.email} • {quote.phone}</p>
                          <p className="mt-2"><span className="font-medium">Service:</span> {quote.service_type}</p>
                          <p className="mt-2"><span className="font-medium">Message:</span></p>
                          <p className="mt-1 text-sm">{quote.message}</p>
                          <p className="mt-2 text-xs text-gray-500">Received: {formatDate(quote.created_at)}</p>
                        </div>
                        <div className="mt-2 sm:mt-0">{getStatusBadge(quote.status)}</div>
                      </div>
                      <div className="mt-4 flex flex-col sm:flex-row justify-end sm:space-x-2 space-y-2 sm:space-y-0">
                        {quote.status !== 'in progress' && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="bg-yellow-50 hover:bg-yellow-100 w-full sm:w-auto"
                            onClick={() => updateQuoteStatus(quote.id, 'in progress')}
                          >
                            Mark as In Progress
                          </Button>
                        )}
                        {quote.status !== 'completed' && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="bg-green-50 hover:bg-green-100 w-full sm:w-auto"
                            onClick={() => updateQuoteStatus(quote.id, 'completed')}
                          >
                            <Check className="h-4 w-4 mr-1" /> Complete
                          </Button>
                        )}
                        {quote.status !== 'rejected' && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="bg-red-50 hover:bg-red-100 w-full sm:w-auto"
                            onClick={() => updateQuoteStatus(quote.id, 'rejected')}
                          >
                            <X className="h-4 w-4 mr-1" /> Reject
                          </Button>
                        )}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-red-500 hover:text-red-700 w-full sm:w-auto"
                          onClick={() => deleteQuoteRequest(quote.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" /> Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="careers">
        <Card>
          <CardHeader>
            <CardTitle>Career Applications</CardTitle>
            <CardDescription>View and manage job applications</CardDescription>
          </CardHeader>
          <CardContent>
            <SearchFilter 
              searchPlaceholder="Search applications..."
              searchValue={careerSearch}
              onSearchChange={setCareerSearch}
              filterOptions={[
                { value: 'new', label: 'New' },
                { value: 'in progress', label: 'In Progress' },
                { value: 'completed', label: 'Interviewed' },
                { value: 'rejected', label: 'Rejected' }
              ]}
              filterValue={careerFilter}
              onFilterChange={setCareerFilter}
              filterLabel="Status"
            />
            
            {loading.careers ? (
              <div className="flex justify-center p-4">
                <Loader2 className="h-8 w-8 animate-spin text-brand-orange" />
              </div>
            ) : filteredCareerApplications.length === 0 ? (
              <p className="text-center py-4 text-gray-500">No applications found</p>
            ) : (
              <div className="space-y-4">
                {filteredCareerApplications.map((app) => (
                  <div key={app.id} className="border p-4 rounded-lg">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div className="mb-2 sm:mb-0">
                        <h3 className="font-medium">{app.name}</h3>
                        <p className="text-sm text-gray-500">{app.email} • {app.phone}</p>
                        <p className="mt-2"><span className="font-medium">Position:</span> {app.job_title}</p>
                        {app.resume_path && (
                          <div className="mt-2">
                            <a 
                              href={getPublicResumeUrl(app.resume_path)} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline flex items-center"
                            >
                              View Resume <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </div>
                        )}
                        <p className="mt-2 text-xs text-gray-500">Applied: {formatDate(app.created_at)}</p>
                      </div>
                      <div className="mt-2 sm:mt-0">{getStatusBadge(app.status || 'New')}</div>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row justify-end sm:space-x-2 space-y-2 sm:space-y-0">
                      {app.status !== 'in progress' && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="bg-yellow-50 hover:bg-yellow-100 w-full sm:w-auto"
                          onClick={() => updateApplicationStatus(app.id, 'in progress')}
                        >
                          Mark as In Review
                        </Button>
                      )}
                      {app.status !== 'completed' && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="bg-green-50 hover:bg-green-100 w-full sm:w-auto"
                          onClick={() => updateApplicationStatus(app.id, 'completed')}
                        >
                          <Check className="h-4 w-4 mr-1" /> Mark as Interviewed
                        </Button>
                      )}
                      {app.status !== 'rejected' && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="bg-red-50 hover:bg-red-100 w-full sm:w-auto"
                          onClick={() => updateApplicationStatus(app.id, 'rejected')}
                        >
                          <X className="h-4 w-4 mr-1" /> Reject
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-red-500 hover:text-red-700 w-full sm:w-auto"
                        onClick={() => deleteApplication(app.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="jobs">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-2">
              <CardTitle>Job Vacancies</CardTitle>
              <CardDescription>Create and manage job vacancies</CardDescription>
            </div>
            <Dialog open={isJobDialogOpen} onOpenChange={(open) => {
              setIsJobDialogOpen(open);
              if (!open) { // Dialog is closing
                setEditingJob(null); // Clear editing state
                setNewJob({ // Clear new job state
                  title: '',
                  description: '',
                  requirements: '',
                  location: '',
                  salary_range: '',
                  is_active: true,
                });
              }
            }}>
              <DialogTrigger asChild>
                <Button onClick={() => {
                  setEditingJob(null); // Ensure no job is being edited
                  setNewJob({ // Explicitly clear new job state when opening for a new job
                    title: '',
                    description: '',
                    requirements: '',
                    location: '',
                    salary_range: '',
                    is_active: true,
                  });
                }}>
                  <Plus className="mr-2 h-4 w-4" /> New Job
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingJob ? "Edit Job Vacancy" : "Create New Job Vacancy"}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="job-title" className="text-sm font-medium">Job Title</label>
                    <Input
                      id="job-title"
                      value={editingJob ? editingJob.title : newJob.title}
                      onChange={(e) => editingJob 
                        ? setEditingJob({...editingJob, title: e.target.value})
                        : setNewJob({...newJob, title: e.target.value})
                      }
                      placeholder="Enter job title"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="job-location" className="text-sm font-medium">Location</label>
                    <Input
                      id="job-location"
                      value={editingJob ? editingJob.location : newJob.location || ''}
                      onChange={(e) => editingJob 
                        ? setEditingJob({...editingJob, location: e.target.value})
                        : setNewJob({...newJob, location: e.target.value})
                      }
                      placeholder="Enter job location"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="job-salary" className="text-sm font-medium">Salary Range</label>
                    <Input
                      id="job-salary"
                      value={editingJob ? editingJob.salary_range : newJob.salary_range || ''}
                      onChange={(e) => editingJob 
                        ? setEditingJob({...editingJob, salary_range: e.target.value})
                        : setNewJob({...newJob, salary_range: e.target.value})
                      }
                      placeholder="E.g., ₹30,000 - ₹50,000 per month"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="job-description" className="text-sm font-medium">Description</label>
                    <Textarea
                      id="job-description"
                      value={editingJob ? editingJob.description : newJob.description || ''}
                      onChange={(e) => editingJob 
                        ? setEditingJob({...editingJob, description: e.target.value})
                        : setNewJob({...newJob, description: e.target.value})
                      }
                      placeholder="Enter job description"
                      rows={5}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="job-requirements" className="text-sm font-medium">Requirements</label>
                    <Textarea
                      id="job-requirements"
                      value={editingJob ? editingJob.requirements : newJob.requirements || ''}
                      onChange={(e) => editingJob 
                        ? setEditingJob({...editingJob, requirements: e.target.value})
                        : setNewJob({...newJob, requirements: e.target.value})
                      }
                      placeholder="Enter job requirements"
                      rows={5}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="job-active"
                      checked={editingJob ? editingJob.is_active : newJob.is_active}
                      onChange={(e) => editingJob 
                        ? setEditingJob({...editingJob, is_active: e.target.checked})
                        : setNewJob({...newJob, is_active: e.target.checked})
                      }
                      className="h-4 w-4"
                    />
                    <label htmlFor="job-active" className="text-sm font-medium">
                      Active (Visible to applicants)
                    </label>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => {
                    setIsJobDialogOpen(false);
                    setEditingJob(null);
                  }}>
                    Cancel
                  </Button>
                  <Button onClick={editingJob ? handleUpdateJob : handleCreateJob}>
                    {editingJob ? "Update Job" : "Create Job"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <SearchFilter 
              searchPlaceholder="Search job vacancies..."
              searchValue={jobSearch}
              onSearchChange={setJobSearch}
              filterOptions={[
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' }
              ]}
              filterValue={jobFilter}
              onFilterChange={setJobFilter}
              filterLabel="Status"
            />
            
            {loading.jobs ? (
              <div className="flex justify-center p-4">
                <Loader2 className="h-8 w-8 animate-spin text-brand-orange" />
              </div>
            ) : filteredJobVacancies.length === 0 ? (
              <p className="text-center py-4 text-gray-500">No job vacancies found</p>
            ) : (
              <div className="space-y-4">
                {filteredJobVacancies.map((job) => (
                  <div key={job.id} className="border p-4 rounded-lg">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div className="mb-2 sm:mb-0">
                        <h3 className="font-medium">{job.title}</h3>
                        <p className="text-sm text-gray-500">{job.location} • {job.salary_range || 'Salary not specified'}</p>
                      </div>
                      <Badge className={job.is_active ? "bg-green-500" : "bg-gray-500"}>
                        {job.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Description:</p>
                      <p className="text-sm">{job.description.length > 150 ? `${job.description.substring(0, 150)}...` : job.description}</p>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">Posted: {formatDate(job.created_at)}</p>
                    <div className="mt-4 flex flex-col sm:flex-row justify-end sm:space-x-2 space-y-2 sm:space-y-0">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => toggleJobStatus(job.id, job.is_active)}
                        className="w-full sm:w-auto"
                      >
                        {job.is_active ? "Deactivate" : "Activate"}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => {
                          setEditingJob(job);
                          setIsJobDialogOpen(true);
                        }}
                        className="w-full sm:w-auto"
                      >
                        <Edit className="h-4 w-4 mr-1" /> Edit
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-red-500 hover:text-red-700 w-full sm:w-auto"
                        onClick={() => handleDeleteJob(job.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};

export default AdminDashboard;
