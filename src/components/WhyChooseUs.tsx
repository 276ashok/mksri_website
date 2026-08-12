import React from "react";
import { motion } from "framer-motion";
import { Target, Cpu, Award, ShieldAlert, Clock, UserCheck } from "lucide-react";

const propositions = [
  {
    id: 1,
    title: "Accuracy",
    description: "High precision in every survey.",
    icon: <Target className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "Advanced Technology",
    description: "Modern instruments & software.",
    icon: <Cpu className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "Experienced Team",
    description: "Skilled professionals you can trust.",
    icon: <Award className="w-6 h-6 text-white" />,
  },
  {
    id: 4,
    title: "Safety First",
    description: "Committed to health, safety & quality.",
    icon: <ShieldAlert className="w-6 h-6 text-white" />,
  },
  {
    id: 5,
    title: "Timely Delivery",
    description: "On-time results every time.",
    icon: <Clock className="w-6 h-6 text-white" />,
  },
  {
    id: 6,
    title: "Client Focused",
    description: "Solutions tailored to your needs.",
    icon: <UserCheck className="w-6 h-6 text-white" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-bold tracking-wider text-brand-orange uppercase block mb-2">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            We deliver precision, reliability and value in every project.
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
        </div>

        {/* Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propositions.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-5 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              {/* Circular Icon (Dark Navy Background) */}
              <div className="flex-shrink-0 bg-[#0B132B] p-3 rounded-full flex items-center justify-center shadow-md">
                {prop.icon}
              </div>
              {/* Text */}
              <div>
                <h3 className="text-lg font-bold text-[#1C2541] mb-1.5">{prop.title}</h3>
                <p className="text-brand-gray text-sm md:text-base leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
