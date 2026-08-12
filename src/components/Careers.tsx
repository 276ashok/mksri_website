import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { useToast } from "@/components/ui/use-toast";
import JobCard from "./careers/JobCard";
import ApplicationForm, { ApplicationFormValues } from "./careers/ApplicationForm";
import { useLocation } from "react-router-dom";
import BenefitCarousel from "./careers/BenefitCarousel";
import { API_BASE_URL } from '@/lib/constants'; // Import the API_BASE_URL

// Define the JobOpening type based on the backend structure
export interface JobOpening {
  id: number; // Changed to number based on typical backend ID
  title: string;
  location: string;
  type?: string; // Assuming this might be a string like "Full-time", "Part-time"
  description: string;
  requirements?: string;
  salary_range?: string;
  is_active: boolean;
  created_at: string; // Added based on backend models
  updated_at: string; // Added based on backend models
}

const benefitsData = [
  {
    title: "Competitive Salaries",
    description: "We offer attractive compensation packages that recognize your skills and contributions.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659L9 9.182m.347.879a2.105 2.105 0 010 2.976V15m0 0a3 3 0 003.003 3 3 3 0 003-3m-3 0h0" /></svg>
  },
  {
    title: "Comprehensive Health Insurance",
    description: "Your well-being is our priority. We provide extensive health coverage for you and your family.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "Paid Time Off",
    description: "Enjoy a healthy work-life balance with generous paid time off for vacations and personal needs.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm10.5-6h.008v.008H18v-.008zm0 2.25h.008v.008H18V15zm0 2.25h.008v.008H18v-.008z" /></svg>
  },
  {
    title: "Professional Development Opportunities",
    description: "We invest in your growth with continuous learning programs, workshops, and career advancement paths.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L13.5 21.75 15 13.5H3.75z" /></svg>
  },
  {
    title: "Employee Assistance Program",
    description: "Access confidential counseling and support services for personal and work-related challenges.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.75c-.276 0-.5-.447-.5-.999 0-.553.224-1 .5-1s.5.447.5 1c0 .552-.224 1-.5 1zm0-10.5c-.276 0-.5-.447-.5-.999 0-.553.224-1 .5-1s.5.447.5 1c0 .552-.224 1-.5 1zm0 7.5c-.276 0-.5-.446-.5-.999 0-.552.224-1 .5-1s.5.447.5 1c0 .553-.224 1-.5 1zm0-10.5c-.276 0-.5-.447-.5-.999 0-.553.224-1 .5-1s.5.447.5 1c0 .552-.224 1-.5 1zm0 7.5c-.276 0-.5-.446-.5-.999 0-.552.224-1 .5-1s.5.447.5 1c0 .553-.224 1-.5 1zm0-10.5c-.276 0-.5-.447-.5-.999 0-.553.224-1 .5-1s.5.447.5 1c0 .552-.224 1-.5 1zM12 18.75c-.276 0-.5-.447-.5-.999 0-.553.224-1 .5-1s.5.447.5 1c0 .552-.224 1-.5 1zm0-10.5c-.276 0-.5-.447-.5-.999 0-.553.224-1 .5-1s.5.447.5 1c0 .552-.224 1-.5 1zm0 7.5c-.276 0-.5-.446-.5-.999 0-.552.224-1 .5-1s.5.447.5 1c0 .553-.224 1-.5 1zm0-10.5c-.276 0-.5-.447-.5-.999 0-.553.224-1 .5-1s.5.447.5 1c0 .552-.224 1-.5 1zm0 7.5c-.276 0-.5-.446-.5-.999 0-.552.224-1 .5-1s.5.447.5 1c0 .553-.224 1-.5 1zm0-10.5c-.276 0-.5-.447-.5-.999 0-.553.224-1 .5-1s.5.447.5 1c0 .552-.224 1-.5 1zM6 18.75c-.276 0-.5-.447-.5-.999 0-.553.224-1 .5-1s.5.447.5 1c0 .552-.224 1-.5 1zm0-10.5c-.276 0-.5-.447-.5-.999 0-.553.224-1 .5-1s.5.447.5 1c0 .552-.224 1-.5 1zm0 7.5c-.276 0-.5-.446-.5-.999 0-.552.224-1 .5-1s.5.447.5 1c0 .553-.224 1-.5 1zm0-10.5c-.276 0-.5-.447-.5-.999 0-.553.224-1 .5-1s.5.447.5 1c0 .552-.224 1-.5 1zm0 7.5c-.276 0-.5-.446-.5-.999 0-.552.224-1 .5-1s.5.447.5 1c0 .553-.224 1-.5 1zm0-10.5c-.276 0-.5-.447-.5-.999 0-.553.224-1 .5-1s.5.447.5 1c0 .552-.224 1-.5 1z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" /></svg>
  },
];

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
    // If there's a highlighted job ID, find and select that job
    if (highlightJobIdNum !== null && jobOpenings.length > 0) {
      const jobToHighlight = jobOpenings.find(job => job.id === highlightJobIdNum);
      if (jobToHighlight) {
        // Scroll to the job card and highlight it
        setTimeout(() => {
          const element = document.getElementById(`job-${highlightJobId}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.classList.add('highlight-job');
            setTimeout(() => element.classList.remove('highlight-job'), 2000);
          }
        }, 500);
      }
    }
  }, [highlightJobIdNum, jobOpenings]);

  const fetchJobOpenings = async () => {
    setIsLoading(true);
    try {
      // Fetch active job vacancies from the backend API
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
      const resumePath = uploadResult.file_path; // Assuming backend returns the path

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
          status: 'new' // Default status
        }),
      });
        
      if (!applicationResponse.ok) {
        const errorData = await applicationResponse.json();
        throw new Error(errorData.detail || `Failed to submit application: ${applicationResponse.statusText}`);
      }
      
      // Success!
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
    <section id="careers" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Join Our Team</h1>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto mb-8">
            Grow with MK Srinidhi Surveyors and Builders. Join our team of skilled professionals and be part of our journey to excellence.
          </p>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            At MK Srinidhi, we foster a culture of innovation, collaboration, and continuous learning. We offer competitive salaries, comprehensive benefits, and opportunities for professional development.
          </p>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Our Employee Benefits</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <BenefitCarousel benefits={benefitsData} />
          </motion.div>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
          </div>
        ) : jobOpenings.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">No job openings available at the moment.</p>
            <p className="mt-2">Please check back later or contact us directly.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </section>
  );
};

export default Careers;
