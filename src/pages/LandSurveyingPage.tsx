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

const LandSurveyingPage = () => {
  return (
    <Layout>
      <PageSEO
        title="Land Surveying & Plot Marking | MK Srinidhi Surveyors and Builders Pvt. Ltd."
        description="Learn about MK Srinidhi Surveyors and Builders Pvt. Ltd.'s land surveying and plot marking services, including total station surveys, layout marking, and boundary identification."
        keywords="land surveying, plot marking, total station survey, boundary identification, topographic mapping, land measurement, Bangalore, India"
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
              <BreadcrumbPage>Land Surveying & Plot Marking</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Land Surveying Expertise</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              At MK Srinidhi Surveyors and Builders Pvt. Ltd., we provide comprehensive land surveying and plot marking services crucial for any successful construction or land development project. Our team of certified surveyors utilizes advanced technology, including total station surveys, to ensure unparalleled accuracy and reliability.
            </p>
            <p className="mb-4">
              Accurate land surveying is the foundation of sound construction. We meticulously identify property boundaries, conduct detailed topographic mapping, and perform precise layout marking to guide construction activities. Our reports are thorough and legally compliant, providing you with the essential data needed for planning and execution.
            </p>
            <p className="mb-4">
              Whether you are planning a new build, resolving boundary disputes, or need precise measurements for infrastructure development, our surveying services offer the clarity and precision you need. We are committed to delivering data that you can trust, enabling smooth project progression and avoiding costly errors.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-4">What We Offer:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Total Station Surveys for precise measurements</li>
              <li>Layout Marking for construction sites</li>
              <li>Boundary Identification and demarcation</li>
              <li>Topographic Mapping for detailed terrain analysis</li>
              <li>Property Subdivision and consolidation surveys</li>
              <li>Official reports and documentation for legal and planning purposes</li>
            </ul>
            <p className="mt-8">
              Rely on MK Srinidhi Surveyors and Builders for accurate and dependable land surveying services that lay the groundwork for your project's success.
            </p>
          </div>
        </section>
      </div>

      <CTABanner
        title="Need precise land surveying for your project?"
        buttonText="Request a Free Quote"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default LandSurveyingPage;
