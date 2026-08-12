import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import homeModernImage from "@/assets/images/home_modern.jpg";
import homeModern1Image from "@/assets/images/home_modern1.jpg";
import homeModern2Image from "@/assets/images/home_modern2.jpg";
import homeModern3Image from "@/assets/images/home_modern3.jpg";
import homeDowntownImage from "@/assets/images/home_downtown.png";
import downtown1Image from "@/assets/images/downtown1.png";
import downtown2Image from "@/assets/images/downtown2.png";
import downtown3Image from "@/assets/images/downtown3.png";
import homeIndustrialImage from "@/assets/images/home_industrial.png";
import industrial1Image from "@/assets/images/industrial1.png";
import industrial2Image from "@/assets/images/industrial2.png";
import industrial3Image from "@/assets/images/industrial3.png";
import precision1Image from "@/assets/images/precision1.png";
import precision2Image from "@/assets/images/precision2.png";
import precision3Image from "@/assets/images/precision3.png";
import ResponsiveImage from "@/components/ResponsiveImage";

// The full projects array matching both homepage reference and internal data structure
export const projects = [
  {
    id: 1,
    title: "Premium Apartment Project",
    category: "Residential",
    location: "Chennai, Tamil Nadu",
    image: homeModernImage,
    slug: "premium-apartment-project",
    status: "Completed",
    description: "A premium 12-unit residential complex featuring contemporary architecture and energy-efficient design.",
    galleryImages: [homeModern1Image, homeModern2Image, homeModern3Image],
  },
  {
    id: 2,
    title: "IT Park Development",
    category: "Commercial",
    location: "Chennai, Tamil Nadu",
    image: homeDowntownImage,
    slug: "it-park-development",
    status: "Completed",
    description: "A state-of-the-art commercial IT park with flexible office spaces and intelligent infrastructure.",
    galleryImages: [downtown1Image, downtown2Image, downtown3Image],
  },
  {
    id: 3,
    title: "Road & Bridge Project",
    category: "Infrastructure",
    location: "Chennai, Tamil Nadu",
    image: precision1Image,
    slug: "road-bridge-project",
    status: "Completed",
    description: "Detailed construction and alignment surveys for major highway and bridge projects.",
    galleryImages: [precision2Image, precision3Image],
  },
  {
    id: 4,
    title: "Factory & Warehouse",
    category: "Industrial",
    location: "Chennai, Tamil Nadu",
    image: homeIndustrialImage,
    slug: "factory-warehouse-project",
    status: "Completed",
    description: "Industrial warehouse and manufacturing facility development with exact structural alignment.",
    galleryImages: [industrial1Image, industrial2Image, industrial3Image],
  },
];

interface ProjectsProps {
  limit?: number;
  fullPage?: boolean;
  projectsData?: typeof projects;
}

const Projects: React.FC<ProjectsProps> = ({ limit = 4, fullPage = false, projectsData }) => {
  const sourceProjects = projectsData || projects;
  const displayedProjects = fullPage ? sourceProjects : sourceProjects.slice(0, limit);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        {!fullPage && (
          <div className="text-center mb-16">
            <span className="text-xs md:text-sm font-bold tracking-wider text-brand-orange uppercase block mb-2">
              OUR PROJECTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Explore some of our successfully completed projects.
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover group"
            >
              <Link to={`/projects/${project.slug}`} className="block">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <ResponsiveImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Pill Overlay */}
                  <div className="absolute bottom-3 left-3 bg-white border border-gray-200 py-1 px-3 rounded text-[10px] md:text-xs font-bold text-brand-dark shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-5">
                  <h3 className="font-bold text-brand-dark text-base mb-1.5 group-hover:text-brand-orange transition-colors duration-200 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-brand-gray text-xs md:text-sm font-medium">
                    {project.location}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button (Outlined Navy Style) */}
        {!fullPage && (
          <div className="text-center">
            <Link
              to="/projects"
              className="inline-block border-2 border-[#0B132B] hover:bg-[#0B132B] hover:text-white text-[#0B132B] font-bold text-sm py-3 px-8 rounded transition-all duration-200"
            >
              VIEW ALL PROJECTS
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
