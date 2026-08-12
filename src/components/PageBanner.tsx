import React from "react";
import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="relative flex items-center pt-16 min-h-[calc(var(--vh)*100)] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Page Banner Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div> {/* Apply the gradient overlay */}
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 text-center text-white">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We’re here to help you start your construction or surveying journey.
        </motion.p>
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

export default PageBanner;
