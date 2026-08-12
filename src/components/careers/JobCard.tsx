
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { JobOpening } from "../Careers";

type JobCardProps = {
  job: JobOpening;
  handleApplyClick: (job: JobOpening) => void;
  isHighlighted?: boolean;
};

const JobCard = ({ job, handleApplyClick, isHighlighted = false }: JobCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Apply highlight effect if the job is highlighted
    if (isHighlighted && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Add a temporary highlight class
      cardRef.current.classList.add('ring-4', 'ring-brand-primary', 'ring-opacity-50');
      
      // Remove the highlight after a delay
      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.classList.remove('ring-4', 'ring-brand-primary', 'ring-opacity-50');
        }
      }, 3000);
    }
  }, [isHighlighted]);

  return (
    <motion.div
      ref={cardRef}
      id={`job-${job.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
    >
      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-brand-primary mb-2">{job.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-brand-light text-brand-primary text-xs font-semibold px-3 py-1 rounded-full">
            {job.location}
          </span>
          {job.type && (
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
              {job.type}
            </span>
          )}
          {job.salary_range && (
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
              {job.salary_range}
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-4">{job.description}</p>
        {job.requirements && (
          <div className="mb-4">
            <strong className="text-sm text-gray-700">Requirements:</strong>
            <p className="text-gray-600">{job.requirements}</p>
          </div>
        )}
        <Button
          onClick={() => handleApplyClick(job)}
          className="w-full"
        >
          Apply Now
        </Button>
      </div>
    </motion.div>
  );
};

export default JobCard;
