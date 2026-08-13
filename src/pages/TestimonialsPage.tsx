import React from 'react';
import Layout from '@/components/Layout';
import Testimonials from '@/components/Testimonials';
import PageSEO from '@/components/PageSEO';

const TestimonialsPage = () => {
  return (
    <Layout>
      <PageSEO
        title="Testimonials | MK Srinidhi Surveyors and Builders"
        description="Read what our clients say about our construction and surveying services."
        keywords="testimonials, client reviews, construction, surveying, MK Srinidhi"
      />
      <div className="pt-20">
        <Testimonials />
      </div>
    </Layout>
  );
};

export default TestimonialsPage;
