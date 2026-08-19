import React from "react";
import { Link } from "react-router-dom";

interface CTABannerProps {
  title?: string;
  description?: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ 
  title = "Ready to Start Your Project?",
  description = "Let's turn your ideas into reality with precision and excellence. Contact our team to discuss your structural needs."
}) => {
  return (
    <section className="pb-16 pt-8 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="bg-[#0B132B] text-white rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12 relative border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
            {/* Left Content Column */}
            <div className="lg:col-span-7 pr-0 lg:pr-8 space-y-3.5 text-center lg:text-left">
              <h4 className="text-2xl md:text-3xl font-extrabold text-white">
                {title}
              </h4>
              <p className="text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed">
                {description}
              </p>
            </div>

            {/* Right Buttons Column */}
            <div className="lg:col-span-5 pl-0 lg:pl-10 pt-6 lg:pt-0 flex flex-col sm:flex-row gap-4 justify-start lg:justify-center">
              <a
                href="tel:+919597636766"
                className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold text-xs md:text-sm py-3.5 px-6 rounded transition-all duration-200"
              >
                <span>CALL US NOW</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-brand-orange hover:bg-brand-orange/95 text-white font-bold text-xs md:text-sm py-3.5 px-6 rounded shadow hover:shadow-lg transition-all duration-200"
              >
                <span>REQUEST A QUOTE</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
