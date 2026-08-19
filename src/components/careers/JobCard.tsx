import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { JobOpening } from "../Careers";
import { MapPin, Briefcase, DollarSign } from "lucide-react";

type JobCardProps = {
  job: JobOpening;
  handleApplyClick: (job: JobOpening) => void;
  isHighlighted?: boolean;
};

const JobCard = ({ job, handleApplyClick, isHighlighted = false }: JobCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isHighlighted && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      cardRef.current.classList.add('ring-2', 'ring-brand-orange');
      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.classList.remove('ring-2', 'ring-brand-orange');
        }
      }, 3000);
    }
  }, [isHighlighted]);

  return (
    <motion.div
      ref={cardRef}
      id={`job-${job.id}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md border border-gray-150 p-6 md:p-8 hover:shadow-lg transition-all duration-300 w-full"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3 flex-grow">
          <h3 className="text-xl md:text-2xl font-extrabold text-[#0B132B]">{job.title}</h3>
          
          <div className="flex flex-wrap gap-4 text-xs md:text-sm text-gray-500 font-semibold">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1.5 text-brand-orange" />
              {job.location}
            </span>
            {job.type && (
              <span className="flex items-center">
                <Briefcase className="w-4 h-4 mr-1.5 text-brand-orange" />
                {job.type}
              </span>
            )}
            {job.salary_range && (
              <span className="flex items-center">
                <DollarSign className="w-4 h-4 mr-1.5 text-brand-orange" />
                {job.salary_range}
              </span>
            )}
          </div>
          
          <p className="text-brand-gray text-xs md:text-sm leading-relaxed max-w-3xl">
            {job.description}
          </p>
        </div>
        
        <div className="flex-shrink-0 self-start md:self-center">
          <button
            onClick={() => handleApplyClick(job)}
            className="inline-flex items-center space-x-1.5 text-brand-orange hover:text-[#0B132B] font-extrabold text-sm group"
          >
            <span>View Position</span>
            <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
