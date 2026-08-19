import React, { useState } from "react";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import { Link } from "react-router-dom";
import Projects, { projects as allProjectsData } from "@/components/Projects";

import {
  LayoutGrid,
  Home,
  Building2,
  Compass,
  Hammer,
  CheckCircle2,
  Calendar,
  User,
  MapPin,
  FileText,
  Briefcase,
  Smile,
  Users,
  Award,
  ChevronRight,
  Phone,
} from "lucide-react";
import homeModernImage from "@/assets/images/home_modern.jpg";
import homeModern1Image from "@/assets/images/home_modern1.jpg";
import homeModern2Image from "@/assets/images/home_modern2.jpg";
import homeModern3Image from "@/assets/images/home_modern3.jpg";
import customVilla1Image from "@/assets/images/custom_villa1.png";
import projectsHeroImage from "@/assets/images/projects_hero.png";
import ResponsiveImage from "@/components/ResponsiveImage";

const categories = [
  { id: "all", label: "All Projects", icon: <LayoutGrid className="w-4 h-4" /> },
  { id: "Residential", label: "Residential", icon: <Home className="w-4 h-4" /> },
  { id: "Commercial", label: "Commercial", icon: <Building2 className="w-4 h-4" /> },
  { id: "Surveying Projects", label: "Surveying Projects", icon: <Compass className="w-4 h-4" /> },
  { id: "Ongoing", label: "Ongoing", icon: <Hammer className="w-4 h-4" /> },
  { id: "Completed", label: "Completed", icon: <CheckCircle2 className="w-4 h-4" /> },
];

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Filtering Logic
  const filteredProjects = allProjectsData.filter((project) => {
    if (activeTab === "all") {
      return true;
    } else if (activeTab === "Ongoing") {
      return project.status === "Ongoing";
    } else if (activeTab === "Completed") {
      return project.status === "Completed";
    } else {
      return project.category === activeTab;
    }
  });

  return (
    <Layout>
      <PageSEO
        title="Our Projects | MK Srinidhi Surveyors and Builders Pvt. Ltd."
        description="Explore MK Srinidhi Surveyors and Builders Pvt. Ltd.'s portfolio of completed and ongoing residential, commercial, and surveying projects."
        keywords="construction projects, completed projects, ongoing projects, residential, commercial, surveying, Chennai, Tamil Nadu, India"
      />

      {/* Hero Section */}
      <section className="relative bg-[#F4F6F9] pt-12 pb-12 lg:py-0 min-h-fit lg:min-h-[580px] flex items-center overflow-hidden mt-[48px] md:mt-0">
        {/* Layered Arrow Cut Accent Borders (Desktop only) */}
        {/* 1. Orange Accent Layer */}
        <div
          className="absolute right-0 top-0 bottom-0 h-full w-[52.8%] hidden lg:block bg-brand-orange z-0"
          style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 14% 100%, 0% 50%)" }}
        />
        {/* 2. Navy Accent Layer */}
        <div
          className="absolute right-0 top-0 bottom-0 h-full w-[52.4%] hidden lg:block bg-[#0B132B] z-0"
          style={{ clipPath: "polygon(14.5% 0, 100% 0, 100% 100%, 14.5% 100%, 0% 50%)" }}
        />
        {/* 3. Main Image Layer */}
        <div
          className="absolute right-0 top-0 bottom-0 h-full w-[52%] hidden lg:block overflow-hidden z-10"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0% 50%)" }}
        >
          <ResponsiveImage
            src={projectsHeroImage}
            alt="Construction landmarks under development"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-6 space-y-6 py-6 lg:py-12">
              {/* Eyebrow */}
              <div>
                <span className="text-xs md:text-sm font-bold tracking-wider text-brand-orange uppercase block mb-2">
                  OUR PROJECTS
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B132B]">
                  Building Landmarks. <br />
                  Delivering Excellence.
                </h1>
                <div className="w-16 h-1.5 bg-brand-orange mt-4"></div>
              </div>

              {/* Description */}
              <p className="text-brand-gray text-base md:text-lg leading-relaxed max-w-lg">
                Explore our diverse portfolio of successfully completed projects across residential,
                commercial, industrial, and infrastructure sectors. Each project reflects our
                commitment to precision, quality, and timely delivery.
              </p>

              {/* Mobile Image */}
              <div className="lg:hidden block w-full h-[250px] sm:h-[350px] rounded-lg overflow-hidden mt-6 relative shadow-md border border-gray-150">
                <ResponsiveImage
                  src={projectsHeroImage}
                  alt="Construction landmarks under development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12 relative z-30">
        {/* Floating Category Filter Navigation Bar */}
        <div className="relative -mt-20 z-25 max-w-5xl mx-auto bg-white rounded-xl shadow-xl border border-gray-150 p-3 mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-3 px-5 rounded-lg text-xs md:text-sm font-bold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#0B132B] text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#0B132B]"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Gallery Grid */}
        <div className="mb-20">
          <Projects key={activeTab} fullPage={true} projectsData={filteredProjects} />
        </div>

        {/* Featured Project Section */}
        <section className="bg-[#0B132B] text-white rounded-2xl overflow-hidden shadow-2xl border border-gray-800 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 lg:p-12 items-center">
            {/* Featured Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs md:text-sm font-bold tracking-wider text-brand-orange uppercase block mb-1">
                  FEATURED PROJECT
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
                  Modern Residential Complex
                </h3>
              </div>

              {/* Scope & Metadata Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs md:text-sm border-t border-b border-gray-850 py-5">
                <div className="flex items-start space-x-2.5">
                  <Calendar className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <div>
                    <div className="text-gray-400 font-semibold text-[10px] md:text-xs">Timeline</div>
                    <div className="font-bold text-white mt-0.5">Jan 2022 - Dec 2023</div>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <User className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <div>
                    <div className="text-gray-400 font-semibold text-[10px] md:text-xs">Client</div>
                    <div className="font-bold text-white mt-0.5">Green Valley Developers</div>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <div>
                    <div className="text-gray-400 font-semibold text-[10px] md:text-xs">Location</div>
                    <div className="font-bold text-white mt-0.5 font-sans">Bangalore, Karnataka</div>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <FileText className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <div>
                    <div className="text-gray-400 font-semibold text-[10px] md:text-xs">Scope</div>
                    <div className="font-bold text-white mt-0.5 leading-relaxed text-[11px] md:text-xs">
                      Architectural Planning, Vastu Surveying, Construction Support
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                A modern residential complex featuring 12 luxurious units with contemporary design
                and energy-efficient systems. The project involved meticulous planning, Vastu-compliant
                design, and advanced surveying for accurate execution.
              </p>

              <div>
                <Link
                  to="/projects/premium-apartment-project"
                  className="inline-flex items-center space-x-2 bg-brand-orange hover:bg-brand-orange/95 text-white font-bold text-xs md:text-sm py-3.5 px-6 rounded shadow hover:shadow-lg transition-all duration-200"
                >
                  <span>VIEW FULL PROJECT</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Featured Gallery Images */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main Photo */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-800 h-[300px] md:h-[400px]">
                <ResponsiveImage
                  src={homeModernImage}
                  alt="Modern Residential Complex Featured Photo"
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Small Thumbnails Row */}
              <div className="grid grid-cols-5 gap-3.5">
                <div className="rounded-lg overflow-hidden border border-gray-800 h-14 md:h-20">
                  <ResponsiveImage src={customVilla1Image} alt="Villa thumbnail" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden border border-gray-800 h-14 md:h-20">
                  <ResponsiveImage src={homeModern1Image} alt="Bedroom thumbnail" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden border border-gray-800 h-14 md:h-20">
                  <ResponsiveImage src={homeModern2Image} alt="Pool thumbnail" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden border border-gray-800 h-14 md:h-20">
                  <ResponsiveImage src={homeModern3Image} alt="Living room thumbnail" className="w-full h-full object-cover" />
                </div>
                {/* Overlay more block */}
                <div className="relative rounded-lg overflow-hidden border border-gray-800 h-14 md:h-20 bg-gray-900">
                  <ResponsiveImage src={customVilla1Image} alt="More thumbnails" className="w-full h-full object-cover opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-xs md:text-sm text-white bg-black/40">
                    +8 More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating White Statistics Bar */}
        <section className="bg-white text-[#0B132B] py-8 rounded-2xl border border-gray-150 shadow-lg max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y-0 divide-x-0 lg:divide-x lg:divide-gray-150">
            {/* Stat 1 */}
            <div className="flex items-center space-x-4 justify-center px-4">
              <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                <Building2 className="w-8 h-8 text-[#0B132B]" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-brand-orange leading-tight">
                  500+
                </div>
                <div className="text-xs text-gray-500 font-bold tracking-wide">
                  Projects Completed
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center space-x-4 justify-center px-4">
              <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                <Briefcase className="w-8 h-8 text-[#0B132B]" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-brand-orange leading-tight">
                  8+
                </div>
                <div className="text-xs text-gray-500 font-bold tracking-wide">
                  Years of Experience
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center space-x-4 justify-center px-4">
              <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                <Smile className="w-8 h-8 text-[#0B132B]" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-brand-orange leading-tight">
                  200+
                </div>
                <div className="text-xs text-gray-500 font-bold tracking-wide">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center space-x-4 justify-center px-4">
              <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                <Users className="w-8 h-8 text-[#0B132B]" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-brand-orange leading-tight">
                  50+
                </div>
                <div className="text-xs text-gray-500 font-bold tracking-wide">
                  Expert Professionals
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Conversion Client Quote & CTA Banner Section */}
        <section className="bg-[#0B132B] text-white rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
            {/* Quote block */}
            <div className="lg:col-span-7 pr-0 lg:pr-8 flex items-start space-x-5">
              <div className="text-brand-orange select-none opacity-20">
                <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
                  "MK Srinidhi Surveyors and Builders' dedication to quality and their transparent
                  approach made our commercial project a resounding success. They truly deliver
                  excellence."
                </p>
                <div className="text-brand-orange font-bold text-xs md:text-sm tracking-wide">
                  — Satisfied Commercial Client
                </div>
              </div>
            </div>

            {/* Have a Project block */}
            <div className="lg:col-span-5 pl-0 lg:pl-10 pt-6 lg:pt-0 space-y-4">
              <h4 className="text-xl md:text-2xl font-extrabold text-white">
                Have a project in mind?
              </h4>
              <p className="text-gray-400 text-xs md:text-sm">
                Let's work together to build something extraordinary.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-brand-orange hover:bg-brand-orange/95 text-white font-bold text-xs md:text-sm py-3.5 px-6 rounded shadow hover:shadow-lg transition-all duration-200"
                >
                  <span>GET IN TOUCH</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
