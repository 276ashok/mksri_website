import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResponsiveImage from "@/components/ResponsiveImage";
import { projectsData as projects } from "@/data/projectsData";

export { projects };

interface ProjectsProps {
  limit?: number;
  fullPage?: boolean;
  projectsData?: typeof projects;
}

const Projects: React.FC<ProjectsProps> = ({ limit = 4, fullPage = false, projectsData }) => {
  const sourceProjects = projectsData || projects;
  const displayedProjects = fullPage ? sourceProjects : sourceProjects.slice(0, limit);

  return (
    <section id="projects" className="py-8 bg-transparent">
      <div className="container mx-auto px-0">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-150 shadow-md overflow-hidden card-hover group flex flex-col justify-between h-full"
            >
              <div className="flex flex-col flex-grow">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <ResponsiveImage
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Pill Overlay */}
                  <div className="absolute bottom-3 left-3 bg-white border border-gray-200 py-1 px-3 rounded text-[10px] md:text-xs font-bold text-brand-dark shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-5 flex-grow">
                  <h3 className="font-bold text-brand-dark text-base mb-1.5 group-hover:text-brand-orange transition-colors duration-200 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-brand-gray text-xs md:text-sm leading-relaxed mb-3 line-clamp-3">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* View Project Action footer */}
              <div className="p-5 pt-0">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-brand-orange group-hover:text-brand-orange/95 font-bold text-xs md:text-sm tracking-wide inline-flex items-center space-x-1 hover:translate-x-1 transition-transform duration-200"
                >
                  <span>View Project</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
