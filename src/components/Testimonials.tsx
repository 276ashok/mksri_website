import React from 'react';
import { motion } from "framer-motion";
import { Star } from 'lucide-react';
import featuredTestimonialImage from '@/assets/images/featured_testimonial.png';
import ResponsiveImage from '@/components/ResponsiveImage';

const Testimonials = () => {
  // Sample testimonial data
  const testimonials = [
    {
      rating: 5,
      clientName: "Mr. Pradeep",
      location: "Chennai",
      projectType: "Residential Construction",
      testimonial: "MK Srinidhi Surveyors and Builders completed our home project on time with amazing attention to detail. Highly recommended!",
    },     
    {
      rating: 4,
      clientName: "Mrs. Meena",
      location: "Coimbatore",
      projectType: "Villa Construction",
      testimonial: "Excellent service and professional team. Very happy with the quality of construction.",
    },
    {
      rating: 5,
      clientName: "Mr. Suresh",
      location: "Bangalore",
      projectType: "Residential Survey",
      testimonial: "The land surveying service was very accurate and helped us avoid potential issues.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-brand-dark mb-4">What Our Clients Say</h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">Real words from satisfied clients across our residential, commercial, and surveying projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              {/* Star Rating */}
              <div className="flex items-center mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500" />
                ))}
              </div>

              <h3 className="text-xl font-semibold text-brand-dark mb-2">{testimonial.clientName}</h3>
              <p className="text-brand-gray text-sm mb-2">{testimonial.location} ({testimonial.projectType})</p>
              <p className="text-brand-gray">{testimonial.testimonial}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial Section */}
        <div className="mt-16 bg-brand-orange/10 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-brand-dark mb-4">Featured Testimonial</h3>
              <p className="text-brand-gray text-lg mb-4">
                "MK Srinidhi Surveyors and Builders" attention to detail and commitment to quality in land surveying is unparalleled. Their survey report was accurate, timely, and exceeded our expectations. We highly recommend them for any surveying needs."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-brand-dark">Mr. Rajesh Kumar</p>
                  <p className="text-brand-gray text-sm">Bangalore (Land Survey)</p>
                </div>
              </div>
            </div>
            <div>
              <ResponsiveImage src={featuredTestimonialImage} alt="Project" className="rounded-lg" />
            </div>
          </div>
        </div>

        {/* Stats or Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-brand-orange">150+</div>
            <p className="text-brand-gray">Projects Completed</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-orange">100+</div>
            <p className="text-brand-gray">Happy Clients</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-orange">10+</div>
            <p className="text-brand-gray">Across Cities</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-orange">10+</div>
            <p className="text-brand-gray">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
