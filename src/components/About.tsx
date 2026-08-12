import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import homeAboutImage from "@/assets/images/home_about.png";
import ResponsiveImage from "@/components/ResponsiveImage";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="text-xs md:text-sm font-bold tracking-wider text-brand-orange uppercase block mb-2">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight">
                Experts in Surveying & Construction
              </h2>
            </div>

            <p className="text-[#555] text-base md:text-lg leading-relaxed font-normal">
              MK Srinidhi Surveyors & Builders Pvt. Ltd. is a trusted name in land surveying,
              construction, and civil engineering. We combine precision, technology, and expertise
              to deliver accurate results and build lasting partnerships.
            </p>

            <div>
              <Link
                to="/about"
                className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-sm py-3.5 px-8 rounded shadow hover:shadow-lg transition-all duration-200"
              >
                LEARN MORE ABOUT US
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Office/Building Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden shadow-lg border border-gray-100 h-64 sm:h-80 md:h-[400px]"
          >
            <ResponsiveImage
              src={homeAboutImage}
              alt="MK Srinidhi Surveyors and Builders Corporate Office"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
