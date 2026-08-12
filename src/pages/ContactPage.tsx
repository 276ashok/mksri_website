import React from 'react';
import Layout from '@/components/Layout';
import Contact from '@/components/Contact';
import PageSEO from '@/components/PageSEO';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <Layout>
      <PageSEO
        title="Contact Us | MK Srinidhi Surveyors and Builders"
        description="Get in touch with MK Srinidhi Surveyors and Builders for your surveying and construction needs. Contact us via phone, email, or visit our office."
        keywords="contact us, construction company contact, surveyor contact, Bangalore, India, office location, phone number, email"
      />
      <Breadcrumb className="container pt-20">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            Contact
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="pt-8">
        <Contact />
      </div>
    </Layout>
  );
};

export default ContactPage;
