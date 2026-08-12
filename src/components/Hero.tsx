import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import constructionBackgroundImage from "@/assets/images/construction_background.png";
import ResponsiveImage from "@/components/ResponsiveImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center pt-24 min-h-[90vh] md:min-h-screen overflow-hidden mt-[48px] md:mt-0"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ResponsiveImage
          src={constructionBackgroundImage}
          alt="Construction Background"
          className="w-full h-full object-cover"
        />
        {/* Deep dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center text-left">
          <div className="space-y-6 max-w-3xl">
            {/* Orange eyebrow text */}
            <motion.span
              className="text-xs md:text-sm font-bold tracking-wider text-brand-orange uppercase block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              PRECISION. EXPERIENCE. TRUST.
            </motion.span>

            {/* Large bold heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-shadow"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Surveying Today, <br className="hidden md:inline" />
              Building Tomorrow.
            </motion.h1>

            {/* Supporting description */}
            <motion.p
              className="text-base md:text-lg lg:text-xl max-w-2xl text-gray-300 leading-relaxed text-shadow"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Delivering accurate surveying, engineering & construction solutions with advanced
              technology and unmatched expertise.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <Link
                to="/services"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-center py-3.5 px-8 rounded-md shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 text-sm tracking-wide"
              >
                OUR SERVICES
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white hover:bg-white hover:text-brand-dark text-white font-bold text-center py-3 px-8 rounded-md transition-all duration-200 text-sm tracking-wide"
              >
                REQUEST A SURVEY
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
