import React, { useState } from "react";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import CTABanner from "@/components/CTABanner";
import Projects from "@/components/Projects"; // Import the updated Projects component
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import homeModernImage from "@/assets/images/home_modern.jpg";
import ResponsiveImage from "@/components/ResponsiveImage";

// Re-import projects data from the Projects component to use for filtering
import { projects as allProjectsData } from "@/components/Projects";

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = allProjectsData.filter((project) => {
    if (activeTab === "all") {
      return true;
    } else if (activeTab.toLowerCase().trim() === "ongoing") {
      return project.status.toLowerCase().trim() === "ongoing";
    } else if (activeTab.toLowerCase().trim() === "completed") {
      return project.status.toLowerCase().trim() === "completed";
    } else {
      return project.category.toLowerCase().trim() === activeTab.toLowerCase().trim();
    }
  });

  return (
    <Layout>
      <PageSEO
        title="Our Projects | MK Srinidhi Surveyors and Builders Pvt. Ltd."
        description="Explore MK Srinidhi Surveyors and Builders Pvt. Ltd.'s portfolio of completed and ongoing residential, commercial, and surveying projects."
        keywords="construction projects, completed projects, ongoing projects, residential projects, commercial projects, surveying projects, project gallery, Bangalore, India"
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
              <BreadcrumbPage>Projects</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Project Filter / Category Tabs */}
        <div className="text-center mb-12">
          <Tabs defaultValue="all" onValueChange={setActiveTab} className="inline-block">
            <TabsList className="flex flex-wrap justify-center h-auto p-2">
              <TabsTrigger value="all" className="px-4 py-2">All Projects</TabsTrigger>
              <TabsTrigger value="Residential" className="px-4 py-2">Residential</TabsTrigger>
              <TabsTrigger value="Commercial" className="px-4 py-2">Commercial</TabsTrigger>
              <TabsTrigger value="Surveying Projects" className="px-4 py-2">Surveying Projects</TabsTrigger>
              <TabsTrigger value="Ongoing" className="px-4 py-2">Ongoing</TabsTrigger>
              <TabsTrigger value="Completed" className="px-4 py-2">Completed</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Project Gallery Grid - Display filtered projects */}
        <section id="project-gallery" className="py-8">
          {/* Reusing the Projects component, but passing filtered data and fullPage prop */}
          <Projects key={activeTab} fullPage={true} projectsData={filteredProjects} /> {/* Pass filtered data and a key */}
        </section>

        {/* Featured Project Highlight (Optional Section) */}
        <section id="featured-project" className="py-12 bg-gray-100 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Project: Modern Residential Complex</h2>
          <div className="max-w-4xl mx-auto px-4">
            <ResponsiveImage src={homeModernImage} alt="Featured Project" className="w-full h-96 object-cover rounded-lg mb-6" />
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                Our Modern Residential Complex project in Bangalore stands as a testament to our commitment to innovative design and sustainable construction. Completed in 2023, this project features 12 luxurious units, each designed with contemporary aesthetics and energy-efficient systems.
              </p>
              <p className="mb-4">
                **Timeline:** Jan 2022 - Dec 2023 | **Client:** Green Valley Developers
              </p>
              <p className="mb-4">
                This project involved complex architectural planning, meticulous execution of Vastu-compliant designs, and integration of smart home technologies. We successfully navigated challenging terrain by employing advanced surveying techniques and optimizing resource allocation.
              </p>
              <Link to="/projects/modern-residential-complex" className="btn-primary mt-4 inline-block">
                View Full Project
              </Link>
            </div>
          </div>
        </section>

        {/* Client Quote or Badge Strip */}
        <section id="client-quote" className="py-12 bg-brand-orange text-white text-center rounded-lg mb-12">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-2xl font-semibold italic mb-4">
              "MK Srinidhi Surveyors and Builders' dedication to quality and their transparent approach made our commercial project a resounding success. They truly deliver excellence."
            </p>
            <p className="text-lg font-medium">- Satisfied Commercial Client</p>
            {/* Optional: Client Logos */}
            {/* <div className="flex justify-center items-center space-x-8 mt-8">
              <img src="" alt="Client Logo 1" className="h-16" />
              <img src="" alt="Client Logo 2" className="h-16" />
            </div> */}
          </div>
        </section>
      </div>

      <CTABanner
        title="Interested in working with us?"
        buttonText="Contact Our Team"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default ProjectsPage;
