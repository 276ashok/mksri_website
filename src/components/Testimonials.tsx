import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonialData = [
  {
    quote:
      "MK Srinidhi Surveyors & Builders Pvt. Ltd. delivered accurate survey data and excellent support throughout our project. Their professionalism and timely delivery made a huge difference.",
    author: "Project Manager, IT Park Development",
  },
  {
    quote:
      "The land surveying work was performed with outstanding speed and absolute precision. The digital models provided were flawless, making engineering coordination seamless.",
    author: "Chief Engineer, Road & Bridge Project",
  },
  {
    quote:
      "Highly professional team. They handled our complex topographic mapping requirements with ease and kept us updated at every stage of the process.",
    author: "Director, Premium Apartment Project",
  },
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-bold tracking-wider text-brand-orange uppercase block mb-2">
            WHAT OUR CLIENTS SAY
          </span>
          <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
        </div>

        {/* Testimonial Display Area */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12 px-6">
          {/* Giant Quote Icon */}
          <div className="flex-shrink-0 text-gray-100 select-none">
            <svg
              className="w-20 h-20 md:w-32 md:h-32 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Testimonial Quote & Attribution */}
          <div className="flex-grow pt-4">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <p className="text-[#333] text-lg md:text-2xl font-medium leading-relaxed italic">
                "{testimonialData[activeSlide].quote}"
              </p>
              <div className="text-brand-gray font-bold text-sm md:text-base tracking-wide uppercase">
                — {testimonialData[activeSlide].author}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel Indicators (3 dots) */}
        <div className="flex justify-center items-center space-x-2.5 mt-12">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                activeSlide === index ? "bg-brand-orange w-8" : "bg-gray-250 hover:bg-gray-400"
              }`}
              style={{
                backgroundColor: activeSlide === index ? undefined : "#E5E7EB",
              }}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
