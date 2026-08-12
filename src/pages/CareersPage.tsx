
import React from 'react';
import Layout from '@/components/Layout';
import Careers from '@/components/Careers';
import PageSEO from '@/components/PageSEO';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom";

const CareersPage = () => {
  return (
    <Layout>
      <PageSEO
        title="Careers | Join Our Team | MK Srinidhi Surveyors and Builders"
        description="Explore job opportunities with MK Srinidhi Surveyors and Builders. Join our team of skilled professionals in construction and surveying."
        keywords="construction jobs, surveyor jobs, building careers, engineering jobs, employment opportunities, Bangalore, India, career application"
      />
      <div className="container pt-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            Careers
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      </div>
      <div className="pt-8">
        <Careers />
      </div>
    </Layout>
  );
};

export default CareersPage;
