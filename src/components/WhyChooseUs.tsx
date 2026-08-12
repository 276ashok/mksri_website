import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, DollarSign, Award } from "lucide-react"; // Example icons
import { Link } from "react-router-dom";

const features = [
  {
    icon: <CheckCircle size={32} />,
    title: "Certified Engineers",
    description: "Our team comprises highly qualified and certified engineers ensuring top-notch quality.",
  },
  {
    icon: <Clock size={32} />,
    title: "On-Time Delivery",
    description: "We are committed to completing projects within agreed timelines, without compromising quality.",
  },
  {
    icon: <span className="text-3xl font-bold">₹</span>, // Replaced icon with Indian Rupee symbol
    title: "Transparent Pricing",
    description: "Clear and honest pricing with no hidden costs, ensuring trust and satisfaction.",
  },
  {
    icon: <Award size={32} />,
    title: "150+ Projects Completed", // Updated to match Hero's 150+
    description: "A proven track record of successfully delivering over 150 diverse projects.",
  },
];

const WhyChooseUs = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="why-choose-us" className="section-padding bg-brand-gray-light">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          Why Choose Us
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center card-hover"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4 text-brand-orange">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-gray">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Removed "See Certifications" link as per user request */}
        {/* <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <Link to="/about#certifications" className="btn-secondary">
            See Certifications
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
