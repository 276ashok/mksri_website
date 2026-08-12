import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import homeAboutImage from "@/assets/images/home_about.png";
import ResponsiveImage from "@/components/ResponsiveImage";

const About = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="section-padding bg-white relative"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          About MK Srinidhi Surveyors and Builders
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.p
              className="text-lg text-brand-gray"
              variants={itemVariants}
            >
              With over a decade of experience, MK Srinidhi has established itself as a trusted name in construction and surveying. We deliver exceptional quality and precision in every project, ensuring client satisfaction.
            </motion.p>

            <motion.p
              className="text-lg text-brand-gray"
              variants={itemVariants}
            >
              Our highly skilled professionals combine technical expertise with innovative approaches to provide comprehensive solutions that meet and exceed expectations.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link to="/about" className="btn-primary mt-4">
                Know More About Us
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center items-center h-64 bg-brand-gray-light rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <ResponsiveImage src={homeAboutImage} alt="About Us" className="w-full h-full object-cover rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
