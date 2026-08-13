import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Compass,
  Map,
  Building2,
  HardHat,
  Target,
  Ruler,
  Globe,
  Milestone,
} from "lucide-react";

import { servicesData } from "@/data/servicesData";

const getServiceIcon = (slug: string) => {
  switch (slug) {
    case "land-surveying-plot-marking":
      return <Compass className="w-10 h-10" />;
    case "topographical-survey":
      return <Map className="w-10 h-10" />;
    case "construction-surveying":
      return <Building2 className="w-10 h-10" />;
    case "measured-building-survey":
      return <Ruler className="w-10 h-10" />;
    case "setting-out":
      return <Target className="w-10 h-10" />;
    case "civil-engineering":
      return <Milestone className="w-10 h-10" />;
    case "site-engineering":
      return <HardHat className="w-10 h-10" />;
    case "gis-geospatial":
      return <Globe className="w-10 h-10" />;
    default:
      return <Compass className="w-10 h-10" />;
  }
};

interface ServicesProps {
  limit?: number;
  fullPage?: boolean;
}

const Services: React.FC<ServicesProps> = ({ limit = 8, fullPage = false }) => {
  const displayedServices = fullPage ? servicesData : servicesData.slice(0, limit);

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-bold tracking-wider text-brand-orange uppercase block mb-2">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            End-to-end solutions for all your surveying and construction needs.
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-150 rounded-lg p-6 text-center hover:border-brand-orange hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full"
            >
              <Link to={`/services/${service.slug}`} className="flex flex-col items-center flex-grow">
                {/* Icon wrapper */}
                <div className="text-brand-orange bg-brand-orange/10 p-4 rounded-full mb-5 group-hover:scale-110 transition-transform duration-300">
                  {getServiceIcon(service.slug)}
                </div>
                {/* Title */}
                <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-brand-gray text-xs md:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-sm py-3.5 px-8 rounded shadow hover:shadow-lg transition-all duration-200"
          >
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
