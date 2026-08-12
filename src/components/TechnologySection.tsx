import React from "react";
import { Compass, Globe, Scan, Box, Map, Info } from "lucide-react";
import precisionImage from "@/assets/images/precision2.png";
import ResponsiveImage from "@/components/ResponsiveImage";

const technologies = [
  {
    id: 1,
    title: "Total Stations",
    description: "High-precision optical instruments for measuring angles and distances in land surveying.",
    icon: <Compass className="w-8 h-8 text-brand-orange animate-pulse" />,
  },
  {
    id: 2,
    title: "GNSS / GPS",
    description: "Satellite navigation receivers for centimeter-level coordinates and mapping.",
    icon: <Globe className="w-8 h-8 text-brand-orange" />,
  },
  {
    id: 3,
    title: "3D Laser Scanning",
    description: "Rapidly captures high-resolution 3D spatial data of complex structures and topography.",
    icon: <Scan className="w-8 h-8 text-brand-orange" />,
  },
  {
    id: 4,
    title: "Drone / UAV Survey",
    description: "Aerial mapping and photogrammetry for large-scale topographic mapping.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-brand-orange"
      >
        <path d="M12 2v20M17 5H7M21 12H3" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="17" cy="5" r="1.5" />
        <circle cx="7" cy="5" r="1.5" />
        <circle cx="21" cy="12" r="1.5" />
        <circle cx="3" cy="12" r="1.5" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "BIM & CAD",
    description: "Building Information Modeling and Computer-Aided Design for detailed drawings.",
    icon: <Box className="w-8 h-8 text-brand-orange" />,
  },
  {
    id: 6,
    title: "GIS & Mapping",
    description: "Geographic Information Systems for spatial analysis and data visualization.",
    icon: <Map className="w-8 h-8 text-brand-orange" />,
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Tech Info */}
          <div>
            <div className="mb-8">
              <span className="text-sm font-semibold tracking-wider text-brand-orange uppercase">
                Technology & Equipment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4 leading-tight">
                We use the latest technology to deliver accurate and reliable results.
              </h2>
              <p className="text-brand-gray text-base md:text-lg">
                Our investment in cutting-edge geospatial equipment and software allows us to deliver high-quality reports and drawings on time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.id}
                  className="flex space-x-4 p-4 border border-gray-100 rounded-lg hover:border-brand-orange/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1 bg-brand-orange/10 p-2.5 rounded-lg h-fit">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark text-base mb-1">
                      {tech.title}
                    </h3>
                    <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-orange/10 rounded-2xl transform rotate-2 -z-10"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
              <ResponsiveImage
                src={precisionImage}
                alt="State of the art surveying equipment"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
