import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { useToast } from "@/components/ui/use-toast";
import JobCard from "./careers/JobCard";
import ApplicationForm, { ApplicationFormValues } from "./careers/ApplicationForm";
import { useLocation } from "react-router-dom";
import { API_BASE_URL } from '@/lib/constants';

// Import Icons
import {
  Briefcase,
  MapPin,
  DollarSign,
  Calendar,
  Clock,
  GraduationCap,
  Users,
  Heart,
  TrendingUp,
  Compass,
  Mail,
  Phone,
  BookOpen,
  Target,
  CheckCircle2,
  Coins,
  Send,
  ShieldCheck
} from "lucide-react";

// Import custom generated images
import careersHero from "@/assets/images/careers_hero.png";
import careersWhyWork from "@/assets/images/careers_why_work.png";

// Define the JobOpening type based on the backend structure
export interface JobOpening {
  id: number;
  title: string;
  location: string;
  type?: string;
  description: string;
  requirements?: string;
  salary_range?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const location = useLocation();

  // Parse query parameters to check for highlighted job
  const queryParams = new URLSearchParams(location.search);
  const highlightJobId = queryParams.get('highlight');
  const highlightJobIdNum = highlightJobId ? Number(highlightJobId) : null;

  useEffect(() => {
    fetchJobOpenings();
  }, []);

  useEffect(() => {
    if (highlightJobIdNum !== null && jobOpenings.length > 0) {
      const jobToHighlight = jobOpenings.find(job => job.id === highlightJobIdNum);
      if (jobToHighlight) {
        setTimeout(() => {
          const element = document.getElementById(`job-${highlightJobId}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.classList.add('ring-2', 'ring-brand-orange');
            setTimeout(() => element.classList.remove('ring-2', 'ring-brand-orange'), 2000);
          }
        }, 500);
      }
    }
  }, [highlightJobIdNum, jobOpenings]);

  const fetchJobOpenings = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/job_vacancies.php?is_active=true`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: JobOpening[] = await response.json();
      setJobOpenings(data || []);
    } catch (error: any) {
      console.error("Error fetching job openings:", error);
      toast({
        title: "Error",
        description: "Failed to load job openings. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setSubmitError(null);
  };

  const handleGeneralApplyClick = () => {
    handleApplyClick({
      id: 0,
      title: "General Application",
      location: "Headquarters",
      type: "Full-time",
      description: "Submit your details and resume for future vacancy matches.",
      is_active: true,
      created_at: "",
      updated_at: ""
    });
  };

  const onSubmit = async (values: ApplicationFormValues) => {
    if (!selectedJob) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // 1. Upload resume file to backend
      const formData = new FormData();
      formData.append('resume', values.resume);

      const uploadResponse = await fetch(`${API_BASE_URL}/upload_resume.php`, {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        throw new Error(errorData.detail || `Failed to upload resume: ${uploadResponse.statusText}`);
      }
      const uploadResult = await uploadResponse.json();
      const resumePath = uploadResult.file_path;

      // 2. Submit application data to backend
      const applicationResponse = await fetch(`${API_BASE_URL}/career_applications.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          resume_path: resumePath,
          job_title: values.job_title || selectedJob.title,
          status: 'new'
        }),
      });
        
      if (!applicationResponse.ok) {
        const errorData = await applicationResponse.json();
        throw new Error(errorData.detail || `Failed to submit application: ${applicationResponse.statusText}`);
      }
      
      toast({
        title: "Application Submitted",
        description: "Your application has been successfully submitted. We'll be in touch soon!",
        duration: 5000,
      });
      
      setIsModalOpen(false);
    } catch (error: any) {
      console.error("Error submitting application:", error);
      setSubmitError(error.message || "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Careers Hero Section */}
      <section className="relative bg-[#F4F6F9] text-[#0B132B] min-h-fit lg:min-h-[580px] flex items-center overflow-hidden pt-12 pb-16 lg:py-0">
        {/* Layered Arrow Cut Accent Borders (Desktop only) */}
        {/* 1. Orange Accent Layer */}
        <div
          className="absolute right-0 top-0 bottom-0 h-full w-[52.8%] hidden lg:block bg-brand-orange z-0"
          style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 14% 100%, 0% 50%)" }}
        />
        {/* 2. Navy Accent Layer */}
        <div
          className="absolute right-0 top-0 bottom-0 h-full w-[52.4%] hidden lg:block bg-[#0B132B] z-0"
          style={{ clipPath: "polygon(14.5% 0, 100% 0, 100% 100%, 14.5% 100%, 0% 50%)" }}
        />
        {/* 3. Main Image Layer */}
        <div
          className="absolute right-0 top-0 bottom-0 h-full w-[52%] hidden lg:block overflow-hidden z-10"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0% 50%)" }}
        >
          <img
            src={careersHero}
            alt="Construction professionals working on site"
            className="w-full h-full object-cover animate-fade-in"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-6 space-y-6 py-6 lg:py-16">
              {/* Eyebrow */}
              <div>
                <span className="text-xs md:text-sm font-bold tracking-wider text-brand-orange uppercase block mb-2">
                  CAREERS
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B132B] leading-tight">
                  Build Your Career. <br />
                  Build the Future.
                </h1>
                <div className="w-16 h-1.5 bg-brand-orange mt-4"></div>
              </div>

              {/* Description */}
              <p className="text-brand-gray text-base md:text-lg leading-relaxed max-w-lg">
                At MK Srinidhi Surveyors and Builders, we believe our people are our greatest strength. Join a team that is shaping skylines, building communities, and making a lasting impact.
              </p>

              {/* Mobile Image (Visible only on mobile/tablet) */}
              <div className="lg:hidden block w-full h-[250px] sm:h-[350px] rounded-lg overflow-hidden relative shadow-sm border border-gray-200">
                <img
                  src={careersHero}
                  alt="Construction professionals working on site"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Navy Features Panel (Desktop & Mobile) */}
              <div className="bg-[#0B132B] text-white p-5 rounded-xl shadow-xl border border-gray-800 max-w-xl mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-850">
                  {/* Growing Together */}
                  <div className="flex items-start space-x-3 px-1 pb-3 sm:pb-0">
                    <div className="flex-shrink-0 text-brand-orange mt-0.5">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold text-xs md:text-sm">Growing Together</h4>
                      <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed mt-0.5 font-medium">
                        Be part of a team that values collaboration and mutual respect.
                      </p>
                    </div>
                  </div>

                  {/* Learn & Grow */}
                  <div className="flex items-start space-x-3 px-1 pt-3 sm:pt-0 pb-3 sm:pb-0">
                    <div className="flex-shrink-0 text-brand-orange mt-0.5">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold text-xs md:text-sm">Learn & Grow</h4>
                      <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed mt-0.5 font-medium">
                        Opportunities for continuous learning and career growth.
                      </p>
                    </div>
                  </div>

                  {/* Make an Impact */}
                  <div className="flex items-start space-x-3 px-1 pt-3 sm:pt-0">
                    <div className="flex-shrink-0 text-brand-orange mt-0.5">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold text-xs md:text-sm">Make an Impact</h4>
                      <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed mt-0.5 font-medium">
                        Work on meaningful projects that shape the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Employee Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0B132B] relative inline-block">
              <span>Our Employee Benefits</span>
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-12 h-0.5 bg-brand-orange" />
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 pt-4">
            {/* Competitive Salary */}
            <div className="bg-white border border-gray-150 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center flex flex-col justify-between h-full">
              <div>
                <div className="mx-auto w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mb-4">
                  <Coins className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B132B] text-sm md:text-base mb-2">Competitive Salary</h3>
                <p className="text-brand-gray text-[11px] md:text-xs leading-relaxed font-medium">
                  We offer industry-competitive compensation and performance bonuses.
                </p>
              </div>
            </div>

            {/* Health & Wellness */}
            <div className="bg-white border border-gray-150 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center flex flex-col justify-between h-full">
              <div>
                <div className="mx-auto w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mb-4">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B132B] text-sm md:text-base mb-2">Health & Wellness</h3>
                <p className="text-brand-gray text-[11px] md:text-xs leading-relaxed font-medium">
                  Comprehensive health insurance and wellness programs for you and your family.
                </p>
              </div>
            </div>

            {/* Paid Time Off */}
            <div className="bg-white border border-gray-150 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center flex flex-col justify-between h-full">
              <div>
                <div className="mx-auto w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B132B] text-sm md:text-base mb-2">Paid Time Off</h3>
                <p className="text-brand-gray text-[11px] md:text-xs leading-relaxed font-medium">
                  Enjoy generous paid leave, holidays, and work-life balance.
                </p>
              </div>
            </div>

            {/* Learning & Development */}
            <div className="bg-white border border-gray-150 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center flex flex-col justify-between h-full">
              <div>
                <div className="mx-auto w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B132B] text-sm md:text-base mb-2">Learning & Development</h3>
                <p className="text-brand-gray text-[11px] md:text-xs leading-relaxed font-medium">
                  Continuous learning programs, workshops, and certifications to ensure your growth.
                </p>
              </div>
            </div>

            {/* Supportive Culture */}
            <div className="bg-white border border-gray-150 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center flex flex-col justify-between h-full">
              <div>
                <div className="mx-auto w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B132B] text-sm md:text-base mb-2">Supportive Culture</h3>
                <p className="text-brand-gray text-[11px] md:text-xs leading-relaxed font-medium">
                  A collaborative and inclusive environment that encourages innovation.
                </p>
              </div>
            </div>

            {/* Career Advancement */}
            <div className="bg-white border border-gray-150 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center flex flex-col justify-between h-full">
              <div>
                <div className="mx-auto w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B132B] text-sm md:text-base mb-2">Career Advancement</h3>
                <p className="text-brand-gray text-[11px] md:text-xs leading-relaxed font-medium">
                  Clear career paths and opportunities to grow with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Work With Us Section */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-150">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white border border-gray-150 rounded-2xl p-6 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column Image */}
              <div className="lg:col-span-5">
                <img
                  src={careersWhyWork}
                  alt="Team achieving collaborative success at sunset"
                  className="rounded-xl shadow-md border border-gray-150 w-full object-cover h-64 md:h-80"
                />
              </div>

              {/* Right Column Content */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-3xl font-extrabold text-[#0B132B] relative inline-block">
                    <span>Why Work With Us?</span>
                    <span className="absolute left-0 bottom-[-10px] w-12 h-0.5 bg-brand-orange" />
                  </h2>
                </div>

                <p className="text-brand-gray text-xs md:text-sm leading-relaxed font-medium">
                  We are more than just a construction and surveying company — we are problem solvers, innovators, and builders of a better tomorrow. Here, your ideas are valued, your growth is supported, and your work truly matters.
                </p>

                <ul className="space-y-3 pt-2">
                  <li className="flex items-start space-x-3 text-xs md:text-sm font-semibold text-brand-dark">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>Work on diverse and challenging projects</span>
                  </li>
                  <li className="flex items-start space-x-3 text-xs md:text-sm font-semibold text-brand-dark">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>Modern tools, technology, and processes</span>
                  </li>
                  <li className="flex items-start space-x-3 text-xs md:text-sm font-semibold text-brand-dark">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>Mentorship from experienced professionals</span>
                  </li>
                  <li className="flex items-start space-x-3 text-xs md:text-sm font-semibold text-brand-dark">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>A culture built on integrity, respect, and excellence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Current Openings Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0B132B] relative inline-block">
              <span>Current Openings</span>
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-12 h-0.5 bg-brand-orange" />
            </h2>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange"></div>
            </div>
          ) : jobOpenings.length === 0 ? (
            /* Mockup-Accurate Empty State Card */
            <div className="bg-gray-50 border border-gray-150 rounded-2xl p-6 md:p-10 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Briefcase Accent */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-brand-orange/40 flex items-center justify-center bg-white shadow-inner">
                    <Briefcase className="w-10 h-10 text-brand-orange" />
                  </div>
                </div>

                {/* Center Copy */}
                <div className="md:col-span-5 text-center md:text-left space-y-4">
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#0B132B]">
                    No Job Openings Available
                  </h3>
                  <p className="text-brand-gray text-xs md:text-sm font-medium leading-relaxed">
                    We don't have any open positions at the moment. Please check back later or send us your resume at{" "}
                    <a
                      href="mailto:info@mksribuilders.com"
                      className="text-brand-orange font-bold hover:underline"
                    >
                      info@mksribuilders.com
                    </a>. We'd love to hear from you!
                  </p>
                </div>

                {/* Right Workspace Vector Line Illustration */}
                <div className="md:col-span-4 hidden md:flex justify-center select-none">
                  <svg className="w-48 h-36 text-gray-300 stroke-current fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 200 150">
                    <path d="M20 120h160" />
                    <path d="M100 100v20m-15 0h30" />
                    <rect x="70" y="55" width="60" height="45" rx="3" />
                    <path d="M85 112h30" />
                    <path d="M50 115v-35c0-8 6-12 12-12h5" />
                    <path d="M45 115h25" />
                    <path d="M57 115v15m-10 0h20" />
                    <path d="M152 120l2-12h12l2 12z" />
                    <path d="M158 108c-2-8-6-10-6-10s6 2 8 10" />
                    <path d="M158 108c2-8 6-10 6-10s-6 2-8 10" />
                    <path d="M158 108c0-12 0-15 0-15s3 5 0 15" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  handleApplyClick={handleApplyClick}
                  isHighlighted={job.id === highlightJobIdNum}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Bottom Dark Navy Career Contact CTA Section */}
      <section className="bg-[#0B132B] text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-800">
            {/* Left Block: Resume Submission */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 pb-8 md:pb-0 md:pr-10">
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-brand-orange flex-shrink-0 shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-3 text-center sm:text-left flex-grow">
                <h3 className="text-lg md:text-xl font-extrabold text-white">Don’t see the right role?</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium">
                  We’re always looking for talented and passionate people. Send us your resume and let’s build the future together.
                </p>
                <button
                  onClick={handleGeneralApplyClick}
                  className="inline-flex items-center justify-center space-x-2 bg-white text-[#0B132B] hover:bg-brand-orange hover:text-white font-extrabold text-xs py-3 px-6 rounded-lg transition-all duration-200 border border-transparent shadow"
                >
                  <span>SEND RESUME</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Block: General Questions */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 pt-8 md:pt-0 md:pl-10">
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-brand-orange flex-shrink-0 shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-extrabold text-white">Have Questions?</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium">
                  We’re here to help you with your career queries.
                </p>
                <a
                  href="tel:+919597636766"
                  className="text-brand-orange hover:underline text-lg md:text-xl font-bold block pt-1"
                >
                  +91 9597636766
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedJob && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={`Apply for ${selectedJob.title}`}
        >
          <ApplicationForm
            isSubmitting={isSubmitting}
            submitError={submitError}
            selectedJob={selectedJob}
            onSubmit={onSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Careers;
