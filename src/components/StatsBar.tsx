import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Smile, Users } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "8+",
    label: "Years of Experience",
    icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-brand-orange" />,
  },
  {
    id: 2,
    value: "500+",
    label: "Projects Completed",
    icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 text-brand-orange" />,
  },
  {
    id: 3,
    value: "200+",
    label: "Happy Clients",
    icon: <Smile className="w-8 h-8 md:w-10 md:h-10 text-brand-orange" />,
  },
  {
    id: 4,
    value: "50+",
    label: "Expert Professionals",
    icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-brand-orange" />,
  },
];

const StatsBar = () => {
  return (
    <section className="bg-[#0B132B] text-white py-8 md:py-10 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:divide-x lg:divide-gray-800">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 justify-center px-4"
            >
              <div className="flex-shrink-0 p-2 bg-[#1C2541] rounded-lg">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-brand-orange leading-tight">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-300 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
