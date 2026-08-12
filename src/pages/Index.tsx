
import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs"; // New import
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview"; // New import
import CTABanner from "@/components/CTABanner"; // New import
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";

const Index = () => {
  return (
    <Layout>
      <PageSEO
        title="MK Srinidhi Surveyors and Builders | Building Dreams with Precision and Trust"
        description="MK Srinidhi Surveyors and Builders are experts in residential, commercial, and land surveying projects, delivering excellence and precision."
        keywords="construction, surveying, builders, residential, commercial, land development, Bangalore, India, corporate website, precision, trust"
      />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <BlogPreview />
      <CTABanner
        title="Ready to build your dream space? Let’s talk."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default Index;
