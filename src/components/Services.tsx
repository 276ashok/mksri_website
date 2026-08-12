import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Link } from "react-router-dom"; // Import Link

interface ServicesProps {
  fullPage?: boolean;
}

// Services data
const services = [
  {
    id: 1,
    title: "Residential Construction",
    description: "Full house building from foundation to finish, including Vastu compliance and custom design.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7m7-7v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    link: "/services/residential-construction",
  },
  {
    id: 2,
    title: "Commercial Construction",
    description: "Offices, shops, and small-scale commercial buildings with cost-effective execution.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    link: "/services/commercial-construction",
  },
  {
    id: 3,
    title: "Land Surveying & Plot Marking",
    description: "Total station surveys, layout marking, and boundary identification with reports.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    link: "/services/land-surveying",
  },
  {
    id: 4,
    title: "Architectural Planning & Design",
    description: "2D/3D designs, floor planning, elevation rendering, and structural drawings.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    link: "/services/architectural-planning",
  },
  {
    id: 5,
    title: "Renovation & Remodeling",
    description: "Structural changes, home upgrades, and design improvements for old buildings.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    link: "/services/renovation-remodeling",
  },
  {
    id: 6,
    title: "Construction Estimation & Consulting",
    description: "Budget planning, BOQ, cost control, and expert guidance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    link: "/services/construction-estimation-consulting",
  },
];

const Services: React.FC<ServicesProps> = ({ fullPage = false }) => {
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

  const displayedServices = fullPage ? services : services.slice(0, 3);

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            We offer a comprehensive range of construction and surveying services tailored to meet your specific needs and ensure project success.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {displayedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
            >
              <Link to={service.link} className="block p-6">
                <div className="flex justify-center mb-6">
                  <div className="bg-brand-orange/10 rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                    <span className="text-brand-orange">{service.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-brand-gray text-center mb-4">
                  {service.description}
                </p>
                <div className="flex justify-center">
                  <span className="btn-secondary text-sm px-4 py-2 cursor-pointer"> {/* Changed to span */}
                    Learn More
                  </span>
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
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
