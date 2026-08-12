import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import ProtectedRoute from "./components/ProtectedRoute";
import { Loader2 } from 'lucide-react';

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const CommercialConstructionPage = lazy(() => import("./pages/CommercialConstructionPage"));
const LandSurveyingPage = lazy(() => import("./pages/LandSurveyingPage"));
const ArchitecturalPlanningPage = lazy(() => import("./pages/ArchitecturalPlanningPage"));
const RenovationRemodelingPage = lazy(() => import("./pages/RenovationRemodelingPage"));
const ConstructionEstimationConsultingPage = lazy(() => import("./pages/ConstructionEstimationConsultingPage"));
const ResidentialConstructionPage = lazy(() => import("./pages/ResidentialConstructionPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsConditionsPage = lazy(() => import("./pages/TermsConditionsPage"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  // This effect will update the isAuthenticated state when localStorage changes
  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
    };

    window.addEventListener('storage', checkAuth);
    // Also check on mount in case the change happened before the listener was attached
    checkAuth(); 

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter key={isAuthenticated.toString()}> {/* Force re-render on auth change */}
        <ScrollToTop />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader2 className="h-12 w-12 animate-spin text-brand-orange" /></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/services/residential-construction" element={<ResidentialConstructionPage />} />
            <Route path="/services/commercial-construction" element={<CommercialConstructionPage />} />
            <Route path="/services/land-surveying" element={<LandSurveyingPage />} />
            <Route path="/services/architectural-planning" element={<ArchitecturalPlanningPage />} />
            <Route path="/services/renovation-remodeling" element={<RenovationRemodelingPage />} />
            <Route path="/services/construction-estimation-consulting" element={<ConstructionEstimationConsultingPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Protected Admin Route */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminPage />} />
            </Route>

            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> {/* Route for Privacy Policy */}
            <Route path="/terms-conditions" element={<TermsConditionsPage />} /> {/* Route for Terms & Conditions */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Toaster /> {/* Render Toaster component here */}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
