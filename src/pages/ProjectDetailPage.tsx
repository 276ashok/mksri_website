import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import ResponsiveImage from "@/components/ResponsiveImage";
import { projectsData } from "@/data/projectsData";

import {
  MapPin,
  Calendar,
  User,
  Building2,
  CheckCircle2,
  FileText,
  Ruler,
  Clock,
  Compass,
  Check,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  X,
  Diamond,
  Leaf,
  Users,
  Grid,
  Phone,
  LayoutGrid,
} from "lucide-react";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Find active project
  const currentIdx = projectsData.findIndex((p) => p.slug === slug);
  const project = currentIdx !== -1 ? projectsData[currentIdx] : null;

  // Handle keyboard events in Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen || !project) return;
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % project.gallery.length);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
      } else if (e.key === "Escape") {
        setLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, project]);

  if (!project) {
    return (
      <Layout>
        <PageSEO title="Project Not Found" description="The requested project could not be found." keywords="project not found, error" />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4 text-brand-dark">Project Not Found</h1>
          <p className="text-lg text-brand-gray mb-8">
            We couldn't find the project you're looking for.
          </p>
          <Link
            to="/projects"
            className="bg-[#0B132B] hover:bg-brand-orange text-white font-bold py-3.5 px-8 rounded shadow transition-all duration-200"
          >
            Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  // Next / Prev Project Navigation
  const prevProject = projectsData[currentIdx === 0 ? projectsData.length - 1 : currentIdx - 1];
  const nextProject = projectsData[currentIdx === projectsData.length - 1 ? 0 : currentIdx + 1];

  // Icon Mappers
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case "building": return <Building2 className="w-7 h-7 text-brand-orange" />;
      case "ruler": return <Ruler className="w-7 h-7 text-brand-orange" />;
      case "calendar": return <Calendar className="w-7 h-7 text-brand-orange" />;
      case "clock": return <Clock className="w-7 h-7 text-brand-orange" />;
      case "check": return <CheckCircle2 className="w-7 h-7 text-brand-orange" />;
      default: return <Building2 className="w-7 h-7 text-brand-orange" />;
    }
  };

  const getDetailIcon = (iconName: string) => {
    switch (iconName) {
      case "location": return <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />;
      case "calendar": return <Calendar className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />;
      case "user": return <User className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />;
      case "type": return <Building2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />;
      case "status": return <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />;
      case "style": return <Compass className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />;
      case "area": return <Ruler className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />;
      case "contract": return <FileText className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />;
      default: return <Building2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />;
    }
  };

  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case "design": return <Diamond className="w-8 h-8 text-brand-orange" />;
      case "sustainable": return <Leaf className="w-8 h-8 text-brand-orange" />;
      case "quality": return <ShieldCheck className="w-8 h-8 text-brand-orange" />;
      case "client": return <Users className="w-8 h-8 text-brand-orange" />;
      case "precision": return <Compass className="w-8 h-8 text-brand-orange" />;
      case "tech": return <Compass className="w-8 h-8 text-brand-orange" />;
      default: return <Diamond className="w-8 h-8 text-brand-orange" />;
    }
  };

  return (
    <Layout>
      <PageSEO
        title={`${project.title} | Projects | MK Srinidhi Surveyors and Builders Pvt. Ltd.`}
        description={project.tagline}
        keywords={`${project.title}, ${project.category}, ${project.location}, construction project, engineering, Tamil Nadu`}
      />

      {/* Dynamic Project Hero Section */}
      <section className="relative h-[350px] md:h-[450px] lg:h-[500px] flex items-center overflow-hidden bg-gray-900 mt-[48px] md:mt-0">
        <div className="absolute inset-0 z-0">
          <ResponsiveImage
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover opacity-35"
          />
          {/* Bottom vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full text-white pt-8">
          <div className="max-w-4xl space-y-4">
            {/* Eyebrow */}
            <div className="flex items-center space-x-2">
              <span className="text-xs md:text-sm font-bold tracking-wider text-brand-orange uppercase">
                OUR PROJECTS
              </span>
              <span className="text-xs text-gray-400 font-bold">|</span>
              <span className="text-xs md:text-sm text-gray-300 font-bold uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            {/* Project Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              {project.title}
            </h1>

            {/* Tagline */}
            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl font-medium leading-relaxed italic border-l-2 border-brand-orange pl-4 py-0.5">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Hero Bottom Floating Navy Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-15 bg-[#0B132B] text-white border-t border-gray-800 py-5 hidden md:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-6 text-xs md:text-sm divide-x divide-gray-800">
              {/* Location */}
              <div className="flex items-center space-x-3 justify-center px-2">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div>
                  <div className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Location</div>
                  <div className="font-bold text-white mt-0.5 font-sans">{project.location}</div>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex items-center space-x-3 justify-center px-2">
                <Calendar className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div>
                  <div className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Timeline</div>
                  <div className="font-bold text-white mt-0.5">{project.timeline}</div>
                </div>
              </div>

              {/* Client */}
              <div className="flex items-center space-x-3 justify-center px-2">
                <User className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div>
                  <div className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Client</div>
                  <div className="font-bold text-white mt-0.5">{project.client}</div>
                </div>
              </div>

              {/* Project Type */}
              <div className="flex items-center space-x-3 justify-center px-2">
                <Building2 className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div>
                  <div className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Project Type</div>
                  <div className="font-bold text-white mt-0.5">{project.projectType}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout container */}
      <section className="py-12 bg-white relative z-30">
        <div className="container mx-auto px-4">

          {/* Two-Column Overview & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Project Overview heading & paragraphs */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-3xl font-extrabold text-[#0B132B]">Project Overview</h2>
                  <div className="w-16 h-1 bg-brand-orange mt-2"></div>
                </div>
                {project.overviewText.map((para, i) => (
                  <p key={i} className="text-[#4F5B73] text-sm md:text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Project Statistics panel */}
              <div className="bg-[#FAFBFD] border border-gray-150 rounded-xl p-6 shadow-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y-0 divide-x-0 md:divide-x md:divide-gray-200">
                  {project.statistics.map((stat, idx) => (
                    <div key={idx} className="flex items-center space-x-3 px-2 justify-start md:justify-center">
                      <div className="flex-shrink-0 bg-white p-2.5 rounded-lg border border-gray-150 shadow-sm">
                        {getStatIcon(stat.icon)}
                      </div>
                      <div>
                        <div className="text-xl md:text-2xl font-extrabold text-[#0B132B] leading-tight">
                          {stat.value}
                        </div>
                        <div className="text-[10px] md:text-xs text-gray-500 font-bold">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services & Challenges Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Services Utilized (Navy Card) */}
                <div className="bg-[#0B132B] text-white rounded-xl p-6 md:p-8 shadow-md border border-gray-800 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-6 border-b border-gray-800 pb-3 flex items-center justify-between">
                      <span>Services Utilized</span>
                      <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                    </h3>
                    <ul className="space-y-3">
                      {project.services.map((srv, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs md:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 font-medium">{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Challenges (Border Card) */}
                <div className="bg-[#FAFBFD] border border-gray-150 rounded-xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0B132B] mb-6 border-b border-gray-200 pb-3 flex items-center justify-between">
                      <span>Challenges</span>
                      <X className="w-5 h-5 text-brand-orange" />
                    </h3>
                    <ul className="space-y-4">
                      {project.challenges.map((ch, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs md:text-sm">
                          <span className="w-2 h-2 rounded-full bg-brand-orange mt-1.5 flex-shrink-0" />
                          <span className="text-[#4F5B73] font-medium leading-relaxed">{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Project Details Panel Card */}
              <div className="bg-white border border-gray-150 rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-xl font-extrabold text-[#0B132B] mb-6 border-b border-gray-150 pb-3">
                  Project Details
                </h3>
                <div className="space-y-5">
                  {project.details.map((det, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs md:text-sm">
                      {getDetailIcon(det.icon)}
                      <div>
                        <div className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-wide">
                          {det.label}
                        </div>
                        <div className="text-[#0B132B] font-bold mt-0.5">
                          {det.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Solutions Card */}
              <div className="bg-[#FAFBFD] border border-gray-150 rounded-xl p-6 md:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#0B132B] mb-6 border-b border-gray-200 pb-3 flex items-center justify-between">
                  <span>Our Solutions</span>
                  <Check className="w-5 h-5 text-green-600" />
                </h3>
                <ul className="space-y-4">
                  {project.solutions.map((sol, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs md:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-650 flex-shrink-0 mt-0.5" />
                      <span className="text-[#4F5B73] font-medium leading-relaxed">{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Project Gallery Horizontal Row */}
          <div className="mt-16 space-y-4">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0B132B]">Project Gallery</h2>
              <div className="w-16 h-1 bg-brand-orange mt-2"></div>
            </div>
            
            {/* Horizontal Grid (desktop row, mobile wrapping grid) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 pt-4">
              {project.gallery.slice(0, 5).map((img, index) => {
                const isLast = index === 4 && project.gallery.length > 5;
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setLightboxIndex(index);
                      setLightboxOpen(true);
                    }}
                    className="relative rounded-xl overflow-hidden shadow-md border border-gray-150 h-24 sm:h-36 lg:h-40 cursor-pointer group bg-gray-100"
                  >
                    <ResponsiveImage
                      src={img}
                      alt={`${project.title} Gallery Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {isLast && (
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white font-bold transition-colors group-hover:bg-black/60">
                        <span className="text-base sm:text-lg">+{project.gallery.length - 4}</span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-wider mt-0.5">More Photos</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Project Highlights Grid Section */}
          <div className="mt-20 border-t border-gray-100 pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-gray-100">
              {project.highlights.map((hl, idx) => (
                <div key={idx} className="text-center sm:text-left px-4 space-y-3">
                  <div className="text-brand-orange flex justify-center sm:justify-start">
                    {getHighlightIcon(hl.icon)}
                  </div>
                  <h3 className="font-extrabold text-[#0B132B] text-base leading-snug">{hl.title}</h3>
                  <p className="text-brand-gray text-xs md:text-sm leading-relaxed">{hl.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details Dynamic Navigation Footer Links */}
          <div className="mt-20 border-t border-gray-150 pt-10 flex items-center justify-between text-xs md:text-sm max-w-5xl mx-auto">
            {/* Prev Project */}
            <Link
              to={`/projects/${prevProject.slug}`}
              className="flex items-center space-x-2 text-brand-gray hover:text-brand-orange font-bold transition-colors"
            >
              <ChevronLeft size={16} />
              <div className="hidden sm:block text-left">
                <div className="text-[9px] uppercase text-gray-400">Previous Project</div>
                <div className="leading-tight">{prevProject.title}</div>
              </div>
              <div className="sm:hidden font-bold">Prev</div>
            </Link>

            {/* Back to All Projects */}
            <Link
              to="/projects"
              className="flex items-center space-x-2 bg-gray-50 border border-gray-150 p-2.5 rounded-lg text-brand-dark hover:text-brand-orange hover:bg-gray-100 font-bold transition-all duration-200"
            >
              <LayoutGrid size={16} />
              <span className="hidden sm:inline">Back to All Projects</span>
            </Link>

            {/* Next Project */}
            <Link
              to={`/projects/${nextProject.slug}`}
              className="flex items-center space-x-2 text-brand-gray hover:text-brand-orange font-bold transition-colors"
            >
              <div className="hidden sm:block text-right">
                <div className="text-[9px] uppercase text-gray-400">Next Project</div>
                <div className="leading-tight">{nextProject.title}</div>
              </div>
              <div className="sm:hidden font-bold">Next</div>
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Custom Enquiry / Request Quote Conversion Block */}
          <div className="mt-16">
            <section className="bg-[#0B132B] text-white rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12 relative border border-gray-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
                {/* Have a Project block */}
                <div className="lg:col-span-7 pr-0 lg:pr-8 space-y-3.5">
                  <h4 className="text-2xl md:text-3xl font-extrabold text-white">
                    Have a project in mind?
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed">
                    Let's bring your vision to life with precision, quality and trust. Contact our team to request a quote or discuss a custom development plan for your property.
                  </p>
                </div>

                {/* Enquiry Actions button block */}
                <div className="lg:col-span-5 pl-0 lg:pl-10 pt-6 lg:pt-0 flex flex-col sm:flex-row gap-4 justify-start lg:justify-center">
                  <button
                    onClick={() => navigate("/contact", { state: { projectInterest: project.title } })}
                    className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold text-xs md:text-sm py-3.5 px-6 rounded transition-all duration-200"
                  >
                    <span>DISCUSS YOUR PROJECT</span>
                  </button>
                  <button
                    onClick={() => navigate("/contact", { state: { quoteInterest: project.title } })}
                    className="inline-flex items-center justify-center space-x-2 bg-brand-orange hover:bg-brand-orange/95 text-white font-bold text-xs md:text-sm py-3.5 px-6 rounded shadow hover:shadow-lg transition-all duration-200"
                  >
                    <span>REQUEST A QUOTE</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </section>
          </div>

        </div>
      </section>

      {/* Lightbox Modal / Overlay component */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 select-none animate-fade-in">
          {/* Top Panel Actions */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs md:text-sm z-11">
            <span className="font-semibold tracking-wider">
              {project.title} &mdash; Photo {lightboxIndex + 1} of {project.gallery.length}
            </span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Gallery Main Photo Display container */}
          <div className="relative flex items-center justify-center w-full max-w-5xl px-12 h-[75vh]">
            {/* Prev Image Click Button */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
              className="absolute left-2 p-3.5 rounded-full bg-white/5 hover:bg-white/15 text-white focus:outline-none transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Photo Container */}
            <div className="relative max-h-full max-w-full overflow-hidden flex items-center justify-center">
              <img
                src={project.gallery[lightboxIndex]}
                alt={`${project.title} Gallery slide`}
                className="max-h-[70vh] max-w-full object-contain rounded-md shadow-2xl animate-zoom-in"
              />
            </div>

            {/* Next Image Click Button */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev + 1) % project.gallery.length)}
              className="absolute right-2 p-3.5 rounded-full bg-white/5 hover:bg-white/15 text-white focus:outline-none transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Micro Slider thumbnail preview strip */}
          <div className="absolute bottom-6 flex items-center space-x-2 z-11">
            {project.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  lightboxIndex === idx ? "bg-brand-orange scale-110" : "bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProjectDetailPage;
