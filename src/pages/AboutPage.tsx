import React from "react";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import CTABanner from "@/components/CTABanner";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Building2,
  Smile,
  Users,
  Compass,
  Eye,
  Calendar,
  Milestone,
  CheckCircle,
  FileText,
  Clock,
  ShieldCheck,
  TrendingUp,
  Cpu,
  UserCheck,
  Ruler,
  Award,
} from "lucide-react";
import homeAboutImage from "@/assets/images/home_about.png";
import aboutHeroImage from "@/assets/images/about_hero.png";
import ResponsiveImage from "@/components/ResponsiveImage";

const AboutPage = () => {
  return (
    <Layout>
      <PageSEO
        title="About Us | MK Srinidhi Surveyors & Builders Pvt. Ltd."
        description="Learn about MK Srinidhi Surveyors & Builders Pvt. Ltd., our journey, experienced team, milestones, certifications, and commitment to precision, quality, and excellence."
        keywords="about us, MK Srinidhi, construction company, surveying firm, milestones, certifications, engineers, Chennai, Tamil Nadu, India"
      />

      {/* Hero Section & Breadcrumbs */}
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
            src={aboutHeroImage}
            alt="MK Srinidhi civil engineers and surveyors team"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-6 space-y-6 py-6 lg:py-12">


              {/* Title */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B132B]">
                  About Us
                </h1>
                <div className="w-16 h-1.5 bg-brand-orange mt-4"></div>
              </div>

              {/* Subheading */}
              <h2 className="text-xl md:text-2xl font-bold text-[#1C2541]">
                Building on Trust. Measuring Excellence.
              </h2>

              {/* Description */}
              <p className="text-brand-gray text-base md:text-lg leading-relaxed max-w-lg">
                MK Srinidhi Surveyors and Builders Pvt. Ltd. is a trusted name in land surveying,
                construction, and civil engineering. We combine precision, technology, and
                expertise to deliver accurate results and build lasting partnerships.
              </p>

              {/* Mobile Surveying Image */}
              <div className="lg:hidden block w-full h-[250px] sm:h-[350px] rounded-lg overflow-hidden mt-6 relative shadow-md border border-gray-150">
                <ResponsiveImage
                  src={aboutHeroImage}
                  alt="MK Srinidhi civil engineers and surveyors team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Navy Stats Panel */}
              <div className="bg-[#0B132B] text-white p-5 rounded-lg shadow-xl border border-gray-800 max-w-xl mt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:divide-x md:divide-gray-800">
                  {/* Stat 1 */}
                  <div className="flex items-center space-x-3.5 justify-start md:justify-center px-1">
                    <div className="flex-shrink-0 text-brand-orange">
                      <Briefcase className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-white leading-none">
                        8+
                      </div>
                      <div className="text-[10px] md:text-[11px] text-gray-400 font-medium mt-1 leading-tight">
                        Years of Experience
                      </div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex items-center space-x-3.5 justify-start md:justify-center px-1 pt-3 md:pt-0">
                    <div className="flex-shrink-0 text-brand-orange">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-white leading-none">
                        500+
                      </div>
                      <div className="text-[10px] md:text-[11px] text-gray-400 font-medium mt-1 leading-tight">
                        Projects Completed
                      </div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex items-center space-x-3.5 justify-start md:justify-center px-1 pt-3 md:pt-0">
                    <div className="flex-shrink-0 text-brand-orange">
                      <Smile className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-white leading-none">
                        200+
                      </div>
                      <div className="text-[10px] md:text-[11px] text-gray-400 font-medium mt-1 leading-tight">
                        Happy Clients
                      </div>
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="flex items-center space-x-3.5 justify-start md:justify-center px-1 pt-3 md:pt-0">
                    <div className="flex-shrink-0 text-brand-orange">
                      <Users className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-white leading-none">
                        50+
                      </div>
                      <div className="text-[10px] md:text-[11px] text-gray-400 font-medium mt-1 leading-tight">
                        Expert Professionals
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-brand-dark">Our Story</h2>
                <div className="w-16 h-1 bg-brand-orange mt-2"></div>
              </div>

              <p className="text-[#555] text-sm md:text-base leading-relaxed">
                Founded in 2018, MK Srinidhi Surveyors and Builders Pvt. Ltd. has grown from a
                vision to be a leading name in the construction and surveying industry. Our journey
                began with a commitment to precision, integrity, and client satisfaction.
              </p>

              {/* Mission & Vision Circle Icon blocks */}
              <div className="space-y-6 pt-4">
                {/* Mission */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full flex-shrink-0 text-brand-orange">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">Mission</h3>
                    <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                      To deliver exceptional construction and surveying services, ensuring
                      accuracy, durability, and sustainable solutions for every project.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full flex-shrink-0 text-brand-orange">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">Vision</h3>
                    <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                      To be the most trusted and innovative construction and surveying firm,
                      recognized for our unwavering commitment to quality and client success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Image */}
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-100 h-64 sm:h-80 md:h-[400px]">
              <ResponsiveImage
                src={homeAboutImage}
                alt="MK Srinidhi Surveyors and Builders Corporate Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Milestones Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0B132B]">Our Milestones</h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto mt-3"></div>
          </div>

          {/* Timeline Grid (Horizontal on Desktop, Stacked on Mobile) */}
          <div className="relative max-w-6xl mx-auto">
            {/* Desktop Connector Line */}
            <div className="absolute top-[35px] left-8 right-8 h-1 bg-brand-orange/30 hidden lg:block -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Milestone 1 */}
              <div className="bg-white lg:bg-transparent p-6 lg:p-0 rounded-lg shadow-md lg:shadow-none border lg:border-none border-gray-100 text-center space-y-4 relative">
                <div className="bg-brand-orange/10 text-brand-orange w-16 h-16 rounded-full mx-auto flex items-center justify-center border-2 border-brand-orange shadow-md bg-white">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-lg font-bold text-brand-orange">2018</div>
                  <h3 className="font-bold text-brand-dark text-base mt-1">Company Foundation</h3>
                  <p className="text-brand-gray text-xs md:text-sm mt-2 leading-relaxed">
                    Established with a vision to redefine construction and surveying standards.
                  </p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="bg-white lg:bg-transparent p-6 lg:p-0 rounded-lg shadow-md lg:shadow-none border lg:border-none border-gray-100 text-center space-y-4 relative">
                <div className="bg-brand-orange/10 text-brand-orange w-16 h-16 rounded-full mx-auto flex items-center justify-center border-2 border-brand-orange shadow-md bg-white">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-lg font-bold text-brand-orange">2024</div>
                  <h3 className="font-bold text-brand-dark text-base mt-1">Achieved 100+ Projects</h3>
                  <p className="text-brand-gray text-xs md:text-sm mt-2 leading-relaxed">
                    Successfully delivered over a hundred diverse projects, building a strong
                    portfolio.
                  </p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="bg-white lg:bg-transparent p-6 lg:p-0 rounded-lg shadow-md lg:shadow-none border lg:border-none border-gray-100 text-center space-y-4 relative">
                <div className="bg-brand-orange/10 text-brand-orange w-16 h-16 rounded-full mx-auto flex items-center justify-center border-2 border-brand-orange shadow-md bg-white">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-lg font-bold text-brand-orange">2025</div>
                  <h3 className="font-bold text-brand-dark text-base mt-1">
                    Company Registered in MCA
                  </h3>
                  <p className="text-brand-gray text-xs md:text-sm mt-2 leading-relaxed">
                    Company officially registered in MCA as a private limited company.
                  </p>
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="bg-white lg:bg-transparent p-6 lg:p-0 rounded-lg shadow-md lg:shadow-none border lg:border-none border-gray-100 text-center space-y-4 relative">
                <div className="bg-brand-orange/10 text-brand-orange w-16 h-16 rounded-full mx-auto flex items-center justify-center border-2 border-brand-orange shadow-md bg-white">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-lg font-bold text-brand-orange">2025</div>
                  <h3 className="font-bold text-brand-dark text-base mt-1">Major Project Awards</h3>
                  <p className="text-brand-gray text-xs md:text-sm mt-2 leading-relaxed">
                    Recognized for excellence in several major projects, a testament to our quality
                    and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our People. Our Strength. Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#0B132B] mb-4">Our People. Our Strength.</h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto mb-4"></div>
            <p className="text-brand-gray text-sm md:text-base leading-relaxed">
              Behind every successful project is a team of skilled professionals who bring
              knowledge, experience, and dedication to deliver outstanding results.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white border border-gray-150 rounded-lg p-6 text-center hover:border-brand-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between h-full group">
              <div className="flex flex-col items-center">
                <div className="text-brand-orange flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-brand-dark text-base mb-2 group-hover:text-brand-orange transition-colors">Experienced Team</h3>
                <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                  A team of qualified engineers, surveyors, and project experts with deep industry
                  knowledge.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-150 rounded-lg p-6 text-center hover:border-brand-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between h-full group">
              <div className="flex flex-col items-center">
                <div className="text-brand-orange flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-brand-dark text-base mb-2 group-hover:text-brand-orange transition-colors">Continuous Learning</h3>
                <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                  We invest in training and technology to stay ahead of industry advancements.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-150 rounded-lg p-6 text-center hover:border-brand-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between h-full group">
              <div className="flex flex-col items-center">
                <div className="text-brand-orange flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smile className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-brand-dark text-base mb-2 group-hover:text-brand-orange transition-colors">Collaborative Approach</h3>
                <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                  We work closely with our clients as partners to deliver the best possible outcomes.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-150 rounded-lg p-6 text-center hover:border-brand-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between h-full group">
              <div className="flex flex-col items-center">
                <div className="text-brand-orange flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-brand-dark text-base mb-2 group-hover:text-brand-orange transition-colors">Integrity & Accountability</h3>
                <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                  Every project is handled with transparency, responsibility, and a commitment to
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Licenses Section */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0B132B]">Certifications & Licenses</h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Cert 1 */}
            <div className="flex items-center space-x-4 p-5 bg-white rounded-lg border border-gray-150 shadow-sm">
              <div className="text-brand-orange flex-shrink-0 bg-brand-orange/10 p-3 rounded-lg">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B132B] text-sm md:text-base">
                  ISO 9001:2015 Certified
                </h3>
                <p className="text-brand-gray text-xs md:text-sm">Quality Management System</p>
              </div>
            </div>

            {/* Cert 2 */}
            <div className="flex items-center space-x-4 p-5 bg-white rounded-lg border border-gray-150 shadow-sm">
              <div className="text-brand-orange flex-shrink-0 bg-brand-orange/10 p-3 rounded-lg">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B132B] text-sm md:text-base">
                  Government Approved Contractor
                </h3>
                <p className="text-brand-gray text-xs md:text-sm">
                  Licensed for Public & Private Projects
                </p>
              </div>
            </div>

            {/* Cert 3 */}
            <div className="flex items-center space-x-4 p-5 bg-white rounded-lg border border-gray-150 shadow-sm">
              <div className="text-brand-orange flex-shrink-0 bg-brand-orange/10 p-3 rounded-lg">
                <UserCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B132B] text-sm md:text-base">
                  Industry Association Member
                </h3>
                <p className="text-brand-gray text-xs md:text-sm">
                  Committed to Industry Best Practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0B132B]">Why Choose Us</h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto lg:divide-x lg:divide-gray-100">
            {/* Prop 1 */}
            <div className="text-center md:text-left px-4 space-y-3">
              <div className="text-brand-orange flex justify-center md:justify-start">
                <Calendar className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-brand-dark text-base">8+ Years of Experience</h3>
              <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                Over 8 years of proven expertise in diverse construction and surveying projects.
              </p>
            </div>

            {/* Prop 2 */}
            <div className="text-center md:text-left px-4 space-y-3">
              <div className="text-brand-orange flex justify-center md:justify-start">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-brand-dark text-base">Verified Government Contracts</h3>
              <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                Trusted by government bodies for reliable and high-quality project delivery.
              </p>
            </div>

            {/* Prop 3 */}
            <div className="text-center md:text-left px-4 space-y-3">
              <div className="text-brand-orange flex justify-center md:justify-start">
                <span className="text-brand-orange text-4xl font-extrabold block h-10 leading-none">
                  ₹
                </span>
              </div>
              <h3 className="font-bold text-brand-dark text-base">Transparent Billing & Estimates</h3>
              <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                Clear, honest, and detailed financial dealings with no hidden costs.
              </p>
            </div>

            {/* Prop 4 */}
            <div className="text-center md:text-left px-4 space-y-3">
              <div className="text-brand-orange flex justify-center md:justify-start">
                <UserCheck className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-brand-dark text-base">Trained & Certified Professionals</h3>
              <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                Our team comprises highly skilled and officially certified engineers and surveyors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTABanner Area */}
      <CTABanner />
    </Layout>
  );
};

export default AboutPage;
