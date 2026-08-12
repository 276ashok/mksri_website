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

const ConstructionEstimationConsultingPage = () => {
  return (
    <Layout>
      <PageSEO
        title="Construction Estimation & Consulting | MK Srinidhi Surveyors and Builders Pvt. Ltd."
        description="Explore MK Srinidhi Surveyors and Builders Pvt. Ltd.'s construction estimation and consulting services, including budget planning, BOQ, cost control, and expert guidance."
        keywords="construction estimation, construction consulting, budget planning, BOQ, bill of quantities, cost control, expert guidance, project feasibility, Bangalore, India"
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
              <BreadcrumbPage>Construction Estimation & Consulting</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Estimation & Consulting Expertise</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              At MK Srinidhi Surveyors and Builders Pvt. Ltd., we offer specialized construction estimation and consulting services to ensure your project is financially sound and strategically planned. Our expert team provides detailed budget planning, accurate Bill of Quantities (BOQ), and effective cost control strategies to maximize your investment.
            </p>
            <p className="mb-4">
              Navigating the complexities of construction costs and project feasibility can be challenging. Our consultants provide invaluable expert guidance, helping you make informed decisions from the conceptual stage through to project completion. We analyze every aspect of your project to identify potential savings, mitigate risks, and optimize resource allocation.
            </p>
            <p className="mb-4">
              Our services are designed to provide clarity and confidence, ensuring that your project stays on track and within budget. Whether you are a first-time builder or a seasoned developer, our tailored consulting solutions will equip you with the knowledge and tools needed for successful project delivery.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-4">What We Offer:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Detailed Budget Planning and Cost Analysis</li>
              <li>Accurate Bill of Quantities (BOQ) Preparation</li>
              <li>Effective Cost Control and Value Engineering</li>
              <li>Feasibility Studies and Risk Assessment</li>
              <li>Expert Project Management Consultation</li>
              <li>Procurement Strategy and Vendor Selection Guidance</li>
            </ul>
            <p className="mt-8">
              Partner with MK Srinidhi Surveyors and Builders for strategic insights and precise financial planning that ensures the success of your construction ventures.
            </p>
          </div>
        </section>
      </div>

      <CTABanner
        title="Need expert advice for your construction project?"
        buttonText="Request a Free Consultation"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default ConstructionEstimationConsultingPage;
