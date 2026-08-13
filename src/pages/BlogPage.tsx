
import React from 'react';
import Layout from '@/components/Layout';
import Blog from '@/components/Blog';
import PageSEO from '@/components/PageSEO';

const BlogPage = () => {
  return (
    <Layout>
      <PageSEO
        title="Blog | MK Srinidhi Surveyors and Builders"
        description="Read the latest news, insights, and tips from MK Srinidhi Surveyors and Builders on construction, surveying, and building industry trends."
        keywords="construction blog, surveying blog, building tips, construction news, surveying insights, MK Srinidhi blog"
      />
      <div className="pt-20">
        <Blog fullPage={true} />
      </div>
    </Layout>
  );
};

export default BlogPage;
