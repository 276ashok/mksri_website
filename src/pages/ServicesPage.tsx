import React from "react";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import CTABanner from "@/components/CTABanner";
import Services from "@/components/Services"; // Import the updated Services component
import Testimonials from "@/components/Testimonials"; // Import Testimonials component

import { Clock, CheckCircle, Hammer, UserCheck } from "lucide-react"; // Import icons

const ServicesPage = () => {
  return (
    <Layout>
      <PageSEO
        title="Our Services | MK Srinidhi Surveyors and Builders Pvt. Ltd."
        description="Explore the comprehensive range of construction, surveying, and design services offered by MK Srinidhi Surveyors and Builders Pvt. Ltd."
        keywords="construction services, surveying services, residential construction, commercial construction, land surveying, architectural planning, renovation, remodeling, construction estimation, consulting, Bangalore, India"
      />


      <div className="container mx-auto px-4 py-8 pt-20">

        {/* Core Services Grid / Card Layout - using the Services component with fullPage prop */}
        <Services fullPage={true} />

        {/* Why Choose Our Services */}
        <section id="why-choose-our-services" className="py-12 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center p-4">
              <Clock size={64} className="text-brand-orange mb-4" /> {/* Replaced image with icon */}
              <h3 className="text-xl font-semibold mb-2">Timely Completion</h3>
              <p className="text-gray-600">We ensure projects are delivered on schedule, every time.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-brand-orange mb-4 text-6xl font-bold">₹</span> {/* Replaced icon with Indian Rupee symbol */}
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Clear, upfront estimates with no hidden costs.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <CheckCircle size={64} className="text-brand-orange mb-4" /> {/* Replaced image with icon */}
              <h3 className="text-xl font-semibold mb-2">Government-Approved Contracts</h3>
              <p className="text-gray-600">Trusted and certified for public and private sector projects.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Hammer size={64} className="text-brand-orange mb-4" /> {/* Replaced image with icon */}
              <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
              <p className="text-gray-600">Utilizing only the best materials for durability and longevity.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <UserCheck size={64} className="text-brand-orange mb-4" /> {/* Replaced image with icon */}
              <h3 className="text-xl font-semibold mb-2">Certified Surveyors & Engineers</h3>
              <p className="text-gray-600">Our team comprises highly skilled and officially certified experts.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Snippet */}
        <Testimonials />

      </div>

      <CTABanner
        title="Need help planning your next project?"
        buttonText="Request a Free Quote"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default ServicesPage;
