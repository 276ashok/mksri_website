
import React from 'react';
import Layout from '@/components/Layout';
import Blog from '@/components/Blog';
import PageSEO from '@/components/PageSEO';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <Layout>
      <PageSEO
        title="Blog | MK Srinidhi Surveyors and Builders"
        description="Read the latest news, insights, and tips from MK Srinidhi Surveyors and Builders on construction, surveying, and building industry trends."
        keywords="construction blog, surveying blog, building tips, construction news, surveying insights, MK Srinidhi blog"
      />
      <Breadcrumb className="container pt-20">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            Blog
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="pt-8">
        <Blog fullPage={true} />
      </div>
    </Layout>
  );
};

export default BlogPage;
