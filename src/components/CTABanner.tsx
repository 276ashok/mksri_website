import React from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

interface CTABannerProps {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTABanner: React.FC<CTABannerProps> = () => {
  return (
    <section className="py-12 md:py-16 bg-[#0B132B] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
          {/* Left Text */}
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              Get accurate results and expert guidance from our team.
            </p>
          </div>

          {/* Right Action Elements */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 flex-wrap justify-center">
            {/* Request a Quote Orange Button */}
            <Link
              to="/contact"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-xs md:text-sm py-3.5 px-6 rounded shadow hover:shadow-lg transition-all duration-200"
            >
              REQUEST A QUOTE
            </Link>

            {/* Book a Survey Outline Button */}
            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white hover:text-[#0B132B] text-white font-bold text-xs md:text-sm py-3 px-6 rounded transition-all duration-200"
            >
              BOOK A SURVEY
            </Link>

            {/* Phone Info */}
            <a
              href="tel:+919597636766"
              className="flex items-center space-x-2 text-white hover:text-brand-orange transition-colors pl-2"
            >
              <div className="bg-brand-orange/20 p-2.5 rounded-full">
                <Phone size={18} className="text-brand-orange" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-gray-400 font-medium leading-none">Call Us Now</span>
                <span className="text-base font-bold tracking-tight mt-1">+91 9597636766</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
