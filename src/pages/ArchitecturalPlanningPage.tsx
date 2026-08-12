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

const ArchitecturalPlanningPage = () => {
  return (
    <Layout>
      <PageSEO
        title="Architectural Planning & Design | MK Srinidhi Surveyors and Builders Pvt. Ltd."
        description="Explore MK Srinidhi Surveyors and Builders Pvt. Ltd.'s architectural planning and design services, including 2D/3D designs, floor planning, and structural drawings."
        keywords="architectural planning, architectural design, 2D design, 3D design, floor planning, elevation rendering, structural drawings, building design, Bangalore, India"
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
              <BreadcrumbPage>Architectural Planning & Design</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Architectural Design Expertise</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              At MK Srinidhi Surveyors and Builders Pvt. Ltd., we believe that great construction begins with exceptional design. Our architectural planning and design services transform your ideas into detailed blueprints, ensuring every aspect of your project is meticulously planned for aesthetics, functionality, and structural integrity.
            </p>
            <p className="mb-4">
              Our team of skilled architects and designers leverages the latest software and creative insights to produce comprehensive 2D and 3D designs. From initial conceptual sketches to detailed floor plans, elevation renderings, and precise structural drawings, we cover all phases of architectural planning. We focus on creating innovative designs that optimize space, enhance natural light, and align with sustainable building practices.
            </p>
            <p className="mb-4">
              We work collaboratively with our clients, ensuring that your vision is at the forefront of the design process. Our goal is to create spaces that are not only visually appealing but also highly functional and tailored to your specific needs, whether for residential, commercial, or industrial projects.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-4">What We Offer:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>2D and 3D Architectural Designs</li>
              <li>Detailed Floor Planning and Layouts</li>
              <li>Stunning Elevation Renderings</li>
              <li>Precise Structural Drawings and Analysis</li>
              <li>Interior Design Consultation</li>
              <li>Sustainable and Eco-friendly Design Solutions</li>
            </ul>
            <p className="mt-8">
              Let MK Srinidhi Surveyors and Builders bring your architectural visions to life with designs that inspire and endure.
            </p>
          </div>
        </section>
      </div>

      <CTABanner
        title="Ready to design your next project?"
        buttonText="Request a Free Consultation"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default ArchitecturalPlanningPage;
