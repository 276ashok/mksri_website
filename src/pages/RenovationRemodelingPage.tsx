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

const RenovationRemodelingPage = () => {
  return (
    <Layout>
      <PageSEO
        title="Renovation & Remodeling | MK Srinidhi Surveyors and Builders Pvt. Ltd."
        description="Discover MK Srinidhi Surveyors and Builders Pvt. Ltd.'s renovation and remodeling services for structural changes, home upgrades, and design improvements."
        keywords="renovation, remodeling, home upgrades, structural changes, design improvements, old building renovation, Bangalore, India"
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
              <BreadcrumbPage>Renovation & Remodeling</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Renovation & Remodeling Expertise</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              At MK Srinidhi Surveyors and Builders Pvt. Ltd., we breathe new life into existing structures through our expert renovation and remodeling services. Whether you're looking to update a single room, undertake major structural changes, or completely transform an old building, our team delivers innovative solutions that blend modern aesthetics with enhanced functionality.
            </p>
            <p className="mb-4">
              We understand that renovation projects require a delicate balance between preserving existing charm and introducing contemporary elements. Our approach involves careful planning, precise execution, and a keen eye for design improvements. We handle everything from interior redesigns and home upgrades to complex structural modifications, ensuring safety, compliance, and a seamless integration with your existing property.
            </p>
            <p className="mb-4">
              Our goal is to create spaces that not only meet your current needs but also anticipate future requirements, adding significant value and appeal to your property. We use high-quality materials and efficient processes to minimize disruption and deliver your remodeled space on time and within budget.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-4">What We Offer:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Full-scale home and commercial remodeling</li>
              <li>Structural modifications and extensions</li>
              <li>Interior and exterior design upgrades</li>
              <li>Kitchen and bathroom renovations</li>
              <li>Space optimization and functional redesign</li>
              <li>Sustainable and energy-efficient retrofits</li>
            </ul>
            <p className="mt-8">
              Let MK Srinidhi Surveyors and Builders transform your old spaces into modern, vibrant, and highly functional environments.
            </p>
          </div>
        </section>
      </div>

      <CTABanner
        title="Ready to renovate or remodel your property?"
        buttonText="Get a Free Consultation"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default RenovationRemodelingPage;
