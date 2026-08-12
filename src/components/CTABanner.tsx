import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CTABannerProps {
  title: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ title, buttonText, buttonLink }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="section-padding bg-brand-orange text-white text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          {title}
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <Link to={buttonLink} className="btn-primary bg-white text-brand-red hover:bg-gray-100">
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
