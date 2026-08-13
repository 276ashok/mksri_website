import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import ResponsiveImage from "@/components/ResponsiveImage";
import { servicesData } from "@/data/servicesData";

import {
  Compass,
  Map,
  Building2,
  Ruler,
  Target,
  Milestone,
  HardHat,
  Globe,
  CheckCircle2,
  ChevronRight,
  Phone,
  Calendar,
  Mail,
  FileText,
  ArrowRight,
  Check,
  Smile,
  Users,
  LayoutGrid,
  ChevronDown,
} from "lucide-react";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Find active service
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Layout>
        <PageSEO title="Service Not Found" description="The requested service could not be found." keywords="service not found, error" />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4 text-brand-dark">Service Not Found</h1>
          <p className="text-lg text-brand-gray mb-8">
            We couldn't find the service page you're looking for.
          </p>
          <Link
            to="/services"
            className="bg-[#0B132B] hover:bg-brand-orange text-white font-bold py-3.5 px-8 rounded shadow transition-all duration-200"
          >
            View All Services
          </Link>
        </div>
      </Layout>
    );
  }

  // Related services
  const relatedServices = servicesData.filter((s) => service.relatedSlugs.includes(s.slug));

  // Icon Mappers
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case "accuracy": return <Target className="w-6 h-6 text-brand-orange" />;
      case "compliance": return <FileText className="w-6 h-6 text-brand-orange" />;
      case "delivery": return <Calendar className="w-6 h-6 text-brand-orange" />;
      case "expert": return <HardHat className="w-6 h-6 text-brand-orange" />;
      case "mapping": return <Map className="w-6 h-6 text-brand-orange" />;
      case "monitoring": return <Building2 className="w-6 h-6 text-brand-orange" />;
      case "data": return <Ruler className="w-6 h-6 text-brand-orange" />;
      case "insight": return <Globe className="w-6 h-6 text-brand-orange" />;
      default: return <Target className="w-6 h-6 text-brand-orange" />;
    }
  };

  const getPropIcon = (iconName: string) => {
    switch (iconName) {
      case "trust": return <Smile className="w-7 h-7 text-brand-orange" />;
      case "decision": return <Compass className="w-7 h-7 text-brand-orange" />;
      case "compliance": return <FileText className="w-7 h-7 text-brand-orange" />;
      default: return <Smile className="w-7 h-7 text-brand-orange" />;
    }
  };

  const getProcessIcon = (iconName: string) => {
    switch (iconName) {
      case "consultation": return <Mail className="w-5 h-5 text-brand-dark" />;
      case "field": return <Compass className="w-5 h-5 text-brand-dark" />;
      case "processing": return <Ruler className="w-5 h-5 text-brand-dark" />;
      case "reporting": return <FileText className="w-5 h-5 text-brand-dark" />;
      case "support": return <Check className="w-5 h-5 text-brand-dark" />;
      default: return <Mail className="w-5 h-5 text-brand-dark" />;
    }
  };

  return (
    <Layout>
      <PageSEO
        title={service.seo.title}
        description={service.seo.description}
        keywords={service.seo.keywords}
      />

      {/* Hero Section */}
      <section className="relative bg-[#F4F6F9] pt-12 pb-12 lg:py-0 min-h-fit lg:min-h-[580px] flex items-center overflow-hidden mt-[48px] md:mt-0">
        {/* Layered Arrow Cut Accent Borders (Desktop only) */}
        <div
          className="absolute right-0 top-0 bottom-0 h-full w-[52.8%] hidden lg:block bg-brand-orange z-0"
          style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 14% 100%, 0% 50%)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 h-full w-[52.4%] hidden lg:block bg-[#0B132B] z-0"
          style={{ clipPath: "polygon(14.5% 0, 100% 0, 100% 100%, 14.5% 100%, 0% 50%)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 h-full w-[52%] hidden lg:block overflow-hidden z-10"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0% 50%)" }}
        >
          <ResponsiveImage
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-6 space-y-6 py-6 lg:py-12">
              <div>
                <span className="text-xs md:text-sm font-bold tracking-wider text-brand-orange uppercase block mb-2 font-mono">
                  OUR SERVICE
                </span>
                <h1 className="text-3xl md:text-4.5xl lg:text-5xl font-extrabold text-[#0B132B] leading-tight">
                  {service.title}
                </h1>
                <div className="w-16 h-1.5 bg-brand-orange mt-4"></div>
              </div>

              <h2 className="text-lg md:text-xl font-bold text-[#1C2541]">
                {service.tagline}
              </h2>

              <p className="text-[#4F5B73] text-sm md:text-base leading-relaxed max-w-lg">
                {service.description}
              </p>

              {/* Mobile Image Fallback */}
              <div className="lg:hidden block w-full h-[250px] sm:h-[350px] rounded-lg overflow-hidden mt-6 relative shadow-md border border-gray-150">
                <ResponsiveImage
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Hero Benefits row */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 max-w-lg">
                {service.benefits.map((ben, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 bg-brand-orange/10 p-2 rounded-lg text-brand-orange mt-0.5">
                      {getBenefitIcon(ben.icon)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B132B] text-xs md:text-sm">{ben.title}</h4>
                      <p className="text-gray-500 text-[10px] md:text-xs mt-0.5 leading-tight">{ben.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Navy CTA Card (Absolute positioned to align to bottom of the image) */}
        <div className="absolute right-12 bottom-0 z-30 hidden lg:block">
          <div className="bg-[#0B132B]/95 backdrop-blur text-white p-7 rounded-xl shadow-2xl border border-gray-800 w-80 text-center space-y-4">
            <div className="bg-brand-orange/20 text-brand-orange w-12 h-12 rounded-full mx-auto flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-sm md:text-base leading-snug">{service.ctaCard.heading}</h3>
            <p className="text-gray-300 text-xs">{service.ctaCard.subheading}</p>
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center space-x-2 bg-brand-orange hover:bg-brand-orange/95 text-white font-bold text-xs py-3 px-5 rounded transition-all duration-200"
            >
              <span>GET IN TOUCH</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-white relative z-30">
        <div className="container mx-auto px-4">

          {/* Value Propositions / Foundations */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B132B]">
              The Foundation of Every Successful Project
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {service.valueProps.map((prop, idx) => (
              <div key={idx} className="bg-white border border-gray-150 rounded-xl p-6 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-brand-orange/10 text-brand-orange w-12 h-12 rounded-full mx-auto flex items-center justify-center">
                  {getPropIcon(prop.icon)}
                </div>
                <h3 className="font-extrabold text-[#0B132B] text-base leading-snug">{prop.title}</h3>
                <p className="text-brand-gray text-xs md:text-sm leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>

          {/* Offerings & Equipment Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
            {/* What We Offer Card */}
            <div className="lg:col-span-6 bg-white border border-gray-150 rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#0B132B] mb-6 border-b border-gray-150 pb-3">
                What We Offer
              </h3>
              <ul className="divide-y divide-gray-100">
                {service.offerings.map((off, idx) => (
                  <li key={idx} className="py-4 flex items-center justify-between group cursor-pointer hover:bg-gray-50/50 px-2 rounded-md transition-colors duration-200">
                    <div className="flex items-start space-x-3 text-xs md:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-[#4F5B73] font-medium leading-relaxed">{off}</span>
                    </div>
                    <ChevronRight size={14} className="text-gray-400 group-hover:text-brand-orange transform group-hover:translate-x-1 transition-all duration-200" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment We Use (Navy Card) */}
            <div className="lg:col-span-6 bg-[#0B132B] text-white rounded-xl p-6 md:p-8 shadow-md border border-gray-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Equipment We Use</h3>
                <p className="text-gray-400 text-xs mb-6">Advanced technology for accurate and efficient execution</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.equipment.map((eq, idx) => (
                    <div key={idx} className="bg-[#1C2541] border border-gray-800 rounded-lg p-4 text-center space-y-3 flex flex-col justify-between">
                      <div className="h-16 w-full rounded overflow-hidden bg-gray-900">
                        <ResponsiveImage src={eq.image} alt={eq.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs md:text-sm text-white leading-tight">{eq.name}</h4>
                        <p className="text-[10px] text-gray-400 mt-1 leading-tight">{eq.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Our Process Step Timeline */}
          <div className="py-12 border-t border-b border-gray-100 bg-[#FAFBFD] -mx-4 px-4 md:-mx-8 md:px-8 mb-16 rounded-xl">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-extrabold text-[#0B132B]">{service.processTitle}</h2>
                <div className="w-16 h-1 bg-brand-orange mx-auto mt-2"></div>
              </div>

              {/* Steps grid row */}
              <div className="relative">
                {/* Connecting dashed line on desktop */}
                <div className="absolute top-10 left-16 right-16 h-0.5 border-t border-dashed border-gray-300 hidden lg:block -z-10" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="text-center space-y-4">
                      {/* Step Number Badge */}
                      <div className="relative flex items-center justify-center">
                        <div className="bg-[#0B132B] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-md z-10 border-2 border-white">
                          {step.number}
                        </div>
                        <div className="absolute bg-brand-orange/10 w-14 h-14 rounded-full flex items-center justify-center animate-pulse">
                          <div className="bg-white text-brand-orange w-11 h-11 rounded-full flex items-center justify-center border border-brand-orange/20 shadow-sm">
                            {getProcessIcon(step.icon)}
                          </div>
                        </div>
                      </div>

                      {/* Step description */}
                      <div className="pt-3">
                        <h4 className="font-extrabold text-[#0B132B] text-sm md:text-base leading-snug">{step.title}</h4>
                        <p className="text-brand-gray text-xs md:text-sm mt-1 leading-relaxed max-w-xs mx-auto">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Applications & Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Applications */}
            <div className="bg-white border border-gray-150 rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#0B132B] mb-5 border-b border-gray-150 pb-3">
                Where We Add Value
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 p-3 bg-gray-55 rounded-lg border border-gray-100">
                    <Compass className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <span className="text-[#4F5B73] font-bold text-xs md:text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="bg-white border border-gray-150 rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#0B132B] mb-5 border-b border-gray-150 pb-3">
                Typical Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 p-3 bg-gray-55 rounded-lg border border-gray-100">
                    <FileText className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <span className="text-[#4F5B73] font-bold text-xs md:text-sm">{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQs Accordion Block */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-[#0B132B]">Frequently Asked Questions</h2>
              <div className="w-16 h-1 bg-brand-orange mx-auto mt-2"></div>
            </div>

            <div className="space-y-3.5">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="border border-gray-150 rounded-xl overflow-hidden shadow-sm bg-white">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-sm md:text-base text-brand-dark hover:text-brand-orange hover:bg-gray-50/50 transition-all duration-200 focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 transform transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-brand-orange" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-5 pt-0 border-t border-gray-100 text-xs md:text-sm text-[#4F5B73] leading-relaxed bg-[#FAFBFD] animate-slide-down">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Related Services Recommendation Links */}
          <div className="mt-16 border-t border-gray-100 pt-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-[#0B132B]">Related Services</h2>
              <div className="w-16 h-1 bg-brand-orange mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedServices.map((rel, idx) => (
                <div key={idx} className="bg-white border border-gray-150 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full group">
                  <div className="space-y-3">
                    <h3 className="font-extrabold text-sm md:text-base text-brand-dark group-hover:text-brand-orange transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-brand-gray text-xs md:text-sm leading-relaxed line-clamp-2">
                      {rel.description}
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link
                      to={`/services/${rel.slug}`}
                      className="text-brand-orange font-bold text-xs md:text-sm tracking-wide inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <span>Learn More</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Enquiry / Call Us Conversion Banner Block */}
          <div className="mt-16">
            <section className="bg-[#0B132B] text-white rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12 relative border border-gray-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
                {/* Have a Project block */}
                <div className="lg:col-span-7 pr-0 lg:pr-8 space-y-3.5">
                  <h4 className="text-2xl md:text-3xl font-extrabold text-white">
                    {service.ctaBanner.title}
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed">
                    {service.ctaBanner.description}
                  </p>
                </div>

                {/* Enquiry Actions button block */}
                <div className="lg:col-span-5 pl-0 lg:pl-10 pt-6 lg:pt-0 flex flex-col sm:flex-row gap-4 justify-start lg:justify-center">
                  <a
                    href="tel:+919597636766"
                    className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold text-xs md:text-sm py-3.5 px-6 rounded transition-all duration-200"
                  >
                    <span>CALL US NOW</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 bg-brand-orange hover:bg-brand-orange/95 text-white font-bold text-xs md:text-sm py-3.5 px-6 rounded shadow hover:shadow-lg transition-all duration-200"
                  >
                    <span>REQUEST A QUOTE</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Statistics strip */}
          <div className="bg-white text-[#0B132B] py-8 rounded-2xl border border-gray-150 shadow-md max-w-5xl mx-auto mt-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y-0 divide-x-0 lg:divide-x lg:divide-gray-150">
              <div className="flex items-center space-x-3.5 justify-center px-4">
                <Compass className="w-8 h-8 text-[#0B132B]" />
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-brand-orange leading-tight">10+</div>
                  <div className="text-xs text-gray-500 font-bold">Years of Experience</div>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 justify-center px-4">
                <Building2 className="w-8 h-8 text-[#0B132B]" />
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-brand-orange leading-tight">500+</div>
                  <div className="text-xs text-gray-500 font-bold">Projects Completed</div>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 justify-center px-4">
                <HardHat className="w-8 h-8 text-[#0B132B]" />
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-brand-orange leading-tight">50+</div>
                  <div className="text-xs text-gray-500 font-bold">Expert Professionals</div>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 justify-center px-4">
                <Users className="w-8 h-8 text-[#0B132B]" />
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-brand-orange leading-tight">100%</div>
                  <div className="text-xs text-gray-500 font-bold">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetailPage;
