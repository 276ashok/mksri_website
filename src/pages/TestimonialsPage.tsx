import React from 'react';
import Layout from '@/components/Layout';
import Testimonials from '@/components/Testimonials';
import PageSEO from '@/components/PageSEO';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom";

const TestimonialsPage = () => {
  return (
    <Layout>
      <PageSEO
        title="Testimonials | MK Srinidhi Surveyors and Builders"
        description="Read what our clients say about our construction and surveying services."
        keywords="testimonials, client reviews, construction, surveying, MK Srinidhi"
      />
      <Breadcrumb className="container pt-20">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            Testimonials
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="pt-8">
        <Testimonials />
      </div>
    </Layout>
  );
};

export default TestimonialsPage;
