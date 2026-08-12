import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO = ({ 
  title = "MK Srinidhi Surveyors and Builders - Construction & Surveying Services",
  description = "Expert construction and surveying services in Bangalore, India. Explore careers and projects with MK Srinidhi Surveyors and Builders.",
  keywords = "construction, surveying, builders, Bangalore, MK Srinidhi, careers, architectural design"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="MK Srinidhi Surveyors and Builders" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/uploads/lovable-uploads/847779eb-be4d-4547-af8d-f9665c2586a7.png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/uploads/lovable-uploads/847779eb-be4d-4547-af8d-f9665c2586a7.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.mksrinidhi.com" />
    </Helmet>
  );
};

export default SEO;
