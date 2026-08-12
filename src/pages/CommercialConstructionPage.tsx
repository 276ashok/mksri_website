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

const CommercialConstructionPage = () => {
  return (
    <Layout>
      <PageSEO
        title="Commercial Construction | MK Srinidhi Surveyors and Builders Pvt. Ltd."
        description="Learn about MK Srinidhi Surveyors and Builders Pvt. Ltd.'s commercial construction services, including offices, shops, and small-scale commercial buildings."
        keywords="commercial construction, office building, retail construction, commercial projects, cost-effective construction, Bangalore, India"
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
              <BreadcrumbPage>Commercial Construction</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Commercial Construction Expertise</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              MK Srinidhi Surveyors and Builders Pvt. Ltd. offers robust commercial construction services designed to meet the diverse needs of businesses. We specialize in creating functional, aesthetically pleasing, and cost-effective commercial buildings, including offices, retail spaces, and small-scale industrial facilities. Our focus is on delivering projects that support your business growth and operational efficiency.
            </p>
            <p className="mb-4">
              We understand the unique requirements of commercial projects, from strict timelines and budget constraints to specific functional layouts and compliance with commercial building codes. Our experienced team manages every phase of the construction process, ensuring seamless execution and minimal disruption to your business operations.
            </p>
            <p className="mb-4">
              Our commitment to quality materials and modern construction techniques ensures that your commercial property is not only durable but also energy-efficient and sustainable. We work closely with clients to incorporate their brand identity and operational needs into the design, creating spaces that are both practical and impressive.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-4">What We Offer:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Office building construction and fit-outs</li>
              <li>Retail and showroom development</li>
              <li>Small-scale industrial and warehouse construction</li>
              <li>Commercial space renovation and expansion</li>
              <li>Compliance with commercial building codes and regulations</li>
              <li>Efficient project management and timely handover</li>
            </ul>
            <p className="mt-8">
              Partner with MK Srinidhi Surveyors and Builders for your next commercial project and experience construction excellence that drives your business forward.
            </p>
          </div>
        </section>
      </div>

      <CTABanner
        title="Planning a commercial project?"
        buttonText="Request a Free Consultation"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default CommercialConstructionPage;
