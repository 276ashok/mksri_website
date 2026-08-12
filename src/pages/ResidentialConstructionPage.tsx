import React from "react";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import CTABanner from "@/components/CTABanner";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const ResidentialConstructionPage = () => {
  return (
    <Layout>
      <PageSEO
        title="Residential Construction | MK Srinidhi Surveyors and Builders Pvt. Ltd."
        description="Learn about MK Srinidhi Surveyors and Builders Pvt. Ltd.'s residential construction services, including full house building, Vastu compliance, and custom design."
        keywords="residential construction, house building, custom homes, Vastu compliance, home design, Bangalore, India"
      />


      <div className="container mx-auto px-4 py-8 pt-20">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/services">Services</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Residential Construction</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Residential Construction Expertise</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              At MK Srinidhi Surveyors and Builders Pvt. Ltd., we specialize in bringing your residential dreams to life. Our comprehensive residential construction services cover every aspect of building your home, from the initial foundation work to the final finishing touches. We pride ourselves on meticulous attention to detail, ensuring that every corner of your new home reflects quality and craftsmanship.
            </p>
            <p className="mb-4">
              We understand that a home is more than just a structure; it's a personal sanctuary. That's why we offer custom design solutions tailored to your unique preferences and lifestyle. Whether you envision a modern minimalist abode or a traditional family home, our team of expert architects and builders works closely with you to translate your vision into a tangible reality.
            </p>
            <p className="mb-4">
              Our services also include Vastu compliance, integrating ancient Indian architectural principles to promote harmony and positive energy within your living space. We use only high-quality, durable materials and employ advanced construction techniques to ensure your home is not only beautiful but also built to last for generations.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-4">What We Offer:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Full-scale new home construction</li>
              <li>Custom architectural design and planning</li>
              <li>Vastu compliant layouts and construction</li>
              <li>High-quality material selection and procurement</li>
              <li>Efficient project management and timely delivery</li>
              <li>Post-construction support and maintenance guidance</li>
            </ul>
            <p className="mt-8">
              Choose MK Srinidhi Surveyors and Builders for a seamless and satisfying home-building experience. We are committed to creating spaces that are not just houses, but true homes filled with comfort, beauty, and positive energy.
            </p>
          </div>
        </section>
      </div>

      <CTABanner
        title="Ready to start building your dream home?"
        buttonText="Get a Free Consultation"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default ResidentialConstructionPage;
