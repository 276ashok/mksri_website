import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom"; // Import Link
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
import projectPrecisionImage from "@/assets/images/project_precision.png";
import precision1Image from "@/assets/images/precision1.png";
import precision2Image from "@/assets/images/precision2.png";
import precision3Image from "@/assets/images/precision3.png";
import projectHeritageImage from "@/assets/images/project_heritage.png";
import heritage1Image from "@/assets/images/heritage1.png";
import heritage2Image from "@/assets/images/heritage2.png";
import heritage3Image from "@/assets/images/heritage3.png";
import projectCustomVillaImage from "@/assets/images/project_custom_villa.png";
import customVilla1Image from "@/assets/images/custom_villa1.png";
import customVilla2Image from "@/assets/images/custom_villa2.png";
import customVilla3Image from "@/assets/images/custom_villa3.png";
import ResponsiveImage from "@/components/ResponsiveImage";

interface ProjectsProps {
  fullPage?: boolean;
}

// Projects data (using placeholder images)
export const projects = [ // Export the projects array
  {
    id: 1,
    title: "Modern Residential Complex",
    description: "A modern 12-unit residential complex featuring contemporary architecture and energy-efficient design.",
    image: homeModernImage, // Image path to be provided by user
    location: "Bangalore",
    status: "Completed",
    category: "Residential",
    slug: "modern-residential-complex",
    galleryImages: [homeModern1Image, homeModern2Image, homeModern3Image],
  },
  {
    id: 2,
    title: "Downtown Commercial Hub",
    description: "A state-of-the-art commercial building with flexible office spaces and integrated smart technologies.",
    image: homeDowntownImage, // Image path to be provided by user
    location: "Chennai",
    status: "Completed",
    category: "Commercial",
    slug: "downtown-commercial-hub",
    galleryImages: [downtown1Image, downtown2Image, downtown3Image],
  },
  {
    id: 3,
    title: "Industrial Logistics Park",
    description: "A purpose-built industrial facility designed for operational efficiency and specialized manufacturing processes.",
    image: homeIndustrialImage, // Image path to be provided by user
    location: "Hyderabad",
    status: "Completed",
    category: "Commercial",
    slug: "industrial-logistics-park",
    galleryImages: [industrial1Image, industrial2Image, industrial3Image],
  },
  {
    id: 5,
    title: "Precision Land Survey for Infrastructure",
    description: "Detailed land surveying for a major highway expansion project, ensuring accurate route planning and land acquisition.",
    image: projectPrecisionImage, // Image path to be provided by user
    location: "Mumbai",
    status: "Completed",
    category: "Surveying Projects",
    slug: "precision-land-survey",
    galleryImages: [precision1Image, precision2Image, precision3Image],
  },
  {
    id: 6,
    title: "Heritage Building Renovation",
    description: "Restoration and modernization of a historical building, preserving its architectural integrity while adding contemporary amenities.",
    image: projectHeritageImage, // Image path to be provided by user
    location: "Delhi",
    status: "Ongoing",
    category: "Renovation & Remodeling",
    slug: "heritage-building-renovation",
    galleryImages: [heritage1Image, heritage2Image, heritage3Image],
  },
  {
    id: 7,
    title: "Custom Villa Design & Build",
    description: "Design and construction of a bespoke luxury villa, incorporating client-specific architectural preferences and smart home features.",
    image: projectCustomVillaImage, // Image path to be provided by user
    location: "Bangalore",
    status: "Ongoing",
    category: "Residential",
    slug: "custom-villa-design",
    galleryImages: [customVilla1Image, customVilla2Image, customVilla3Image],
  },
];

interface ProjectsProps {
  fullPage?: boolean;
  projectsData?: typeof projects; // Add projectsData prop
}

const Projects: React.FC<ProjectsProps> = ({ fullPage = false, projectsData }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const sourceProjects = projectsData || projects; // Use projectsData if provided, else use internal projects
  const displayedProjects = fullPage ? sourceProjects : sourceProjects.slice(0, 3);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Projects</h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Explore our diverse portfolio of completed and ongoing projects, showcasing our expertise across various sectors.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" // Changed to 3 columns for larger screens
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="rounded-lg shadow-md overflow-hidden card-hover group"
            >
              <Link to={`/projects/${project.slug}`} className="block"> {/* Link to individual project detail page */}
                <div className="h-48 overflow-hidden">
                  <ResponsiveImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-brand-gray text-sm mb-2">
                    Location: {project.location}
                  </p>
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {project.status}
                  </span>
                  <p className="text-brand-gray mt-4 mb-4">{project.description}</p>
                  <div className="flex">
                    <span className="text-brand-orange hover:text-brand-red font-medium transition-colors flex items-center">
                      <span>View Details</span>
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
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {!fullPage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
