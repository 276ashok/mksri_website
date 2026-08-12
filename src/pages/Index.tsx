import React from "react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import TechnologySection from "@/components/TechnologySection";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";

const Index = () => {
  return (
    <Layout>
      <PageSEO
        title="MK Srinidhi Surveyors and Builders | Building Dreams with Precision and Trust"
        description="MK Srinidhi Surveyors & Builders Pvt. Ltd. are experts in residential, commercial, and land surveying projects, delivering excellence and precision."
        keywords="construction, surveying, builders, residential, commercial, land development, Chennai, India, corporate website, precision, trust"
      />
      <Hero />
      <StatsBar />
      <About />
      <Services limit={8} />
      <WhyChooseUs />
      <Projects limit={4} />
      <TechnologySection />
      <Testimonials />
      <CTABanner />
    </Layout>
  );
};

export default Index;
