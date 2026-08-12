
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import constructionBackgroundImage from "@/assets/images/construction_background.png";
import ResponsiveImage from "@/components/ResponsiveImage";

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center pt-16 min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ResponsiveImage
          src={constructionBackgroundImage}
          alt="Construction Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div> {/* Apply the gradient overlay */}
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center text-center lg:text-left"> {/* Centered text for smaller screens */}
          <div className="space-y-6 max-w-3xl mx-auto lg:mx-0"> {/* Centered content for smaller screens */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-shadow"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Building Dreams with Precision and Trust
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl max-w-lg mx-auto lg:mx-0 text-white text-shadow"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experts in Residential, Commercial & Land Surveying Projects
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link to="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <Link to="/projects" className="btn-secondary">
                View Our Projects
              </Link>
            </motion.div>
          </div>
          {/* Removed the statistics block as per new requirements */}
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
