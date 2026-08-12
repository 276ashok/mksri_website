import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import PageBanner from "@/components/PageBanner";
import CTABanner from "@/components/CTABanner";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

// Import the projects data
import { projects } from "@/components/Projects";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
      <PageSEO title="Project Not Found" description="The requested project could not be found." keywords="project not found, error, missing page" />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-lg text-gray-700 mb-8">
            We couldn't find the project you're looking for.
          </p>
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageSEO
        title={`${project.title} | Projects | MK Srinidhi Surveyors and Builders Pvt. Ltd.`}
        description={project.description}
        keywords={`${project.title}, ${project.category}, ${project.location}, ${project.status}, construction project, surveying project, building project, Bangalore, India`}
      />

      <PageBanner
        title={project.title}
        subtitle={`Location: ${project.location} | Status: ${project.status}`}
        backgroundImage={project.image} // Use project image as banner background
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/projects">Projects</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{project.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Project Overview</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              {project.description} This project, located in {project.location}, is a prime example of our expertise in {project.category.toLowerCase()} projects. It is currently {project.status.toLowerCase()}.
            </p>
            <p className="mb-4">
              **Timeline:** March 2022 - Present
            </p>
            <p className="mb-4">
              **Client:** Private Client
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Services Utilized:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Custom Home Design</li>
              <li>Luxury Villa Construction</li>
              <li>Landscape Architecture</li>
              <li>Smart Home Integration</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Challenges & Solutions:</h3>
            <p className="mb-4">
              
            </p>
            <p className="mb-4">
              
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Photo Gallery:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.galleryImages && project.galleryImages.map((image, index) => (
                <img key={index} src={image} alt={`${project.title} Image ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
              ))}
            </div>

            <p className="mt-8">
              This project exemplifies our dedication to quality, innovation, and client satisfaction.
            </p>
          </div>
        </section>
      </div>

      <CTABanner
        title="Inspired by our projects? Let's build yours."
        buttonText="Contact Our Team"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default ProjectDetailPage;
