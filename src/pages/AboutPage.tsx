import React from "react";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import CTABanner from "@/components/CTABanner";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Award, FileText, Users, Calendar, CheckCircle, DollarSign, UserCheck } from "lucide-react"; // Import icons
import dassImage from "@/assets/images/dass.png";
import poogothaiImage from "@/assets/images/poogothai.png";
import kumarImage from "@/assets/images/kumar.png";
import ResponsiveImage from "@/components/ResponsiveImage";

const AboutPage = () => {
  return (
    <Layout>
      <PageSEO
        title="About MK Srinidhi Surveyors and Builders Pvt. Ltd."
        description="Learn about MK Srinidhi Surveyors and Builders Pvt. Ltd. - our story, mission, values, milestones, and why choose us for your construction and surveying needs."
        keywords="about us, MK Srinidhi Surveyors and Builders, company history, mission, vision, values, construction company, surveying firm, Bangalore, Bangalore, India"
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
              <BreadcrumbPage>About Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Our Story / Introduction */}
        <section id="our-story" className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              Founded in 2018, MK Srinidhi Surveyors and Builders Pvt. Ltd. has grown from a vision to a leading name in the construction and surveying industry. Our journey began with a commitment to precision, integrity, and client satisfaction.
            </p>
            <p className="mb-4">
              <strong>Mission:</strong> To deliver exceptional construction and surveying services, ensuring accuracy, durability, and sustainable solutions for every project.
            </p>
            <p className="mb-4">
              <strong>Vision:</strong> To be the most trusted and innovative construction and surveying firm, recognized for our unwavering commitment to quality and client success.
            </p>
            <p className="mb-4">
              <strong>Values:</strong> Integrity, Excellence, Innovation, Collaboration, and Client-Centricity.
            </p>
            <p>
              Our core strengths lie in our experienced team, cutting-edge technology, and a deep understanding of both traditional and modern construction techniques. What makes MK Srinidhi Surveyors and Builders unique is our holistic approach, combining meticulous surveying with robust construction, ensuring seamless project execution from concept to completion.
            </p>
          </div>
        </section>

        {/* Milestones / Achievements Timeline */}
        <section id="milestones" className="py-12 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12">Our Milestones</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line - visible only on medium and larger screens */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-orange rounded-full hidden md:block"></div>
            
            <div className="space-y-12">
              {/* Milestone 1 */}
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-1/2 text-center md:text-right md:pr-12">
                  <h3 className="text-xl font-semibold text-brand-dark">2018: Company Foundation</h3>
                  <p className="text-gray-600">Established with a vision to redefine construction and surveying standards.</p>
                </div>
                {/* Circle for Milestone 1 */}
                <div className="w-4 h-4 bg-brand-orange rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block" style={{ top: 'calc(0% + 6px)' }}></div> {/* Adjust top based on content */}
                <div className="md:w-1/2 text-center md:text-left md:pl-12"></div>
              </div>

              {/* Milestone 2 */}
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-1/2 text-center md:text-right md:pr-12 order-2 md:order-1"></div>
                {/* Circle for Milestone 2 */}
                <div className="w-4 h-4 bg-brand-orange rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block" style={{ top: 'calc(33% + 6px)' }}></div> {/* Adjust top based on content */}
                <div className="md:w-1/2 text-center md:text-left md:pl-12 order-1 md:order-2">
                  <h3 className="text-xl font-semibold text-brand-dark">2024: Achieved 100+ Projects</h3>
                  <p className="text-gray-600">Successfully delivered over a hundred diverse projects, building a strong portfolio.</p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-1/2 text-center md:text-right md:pr-12">
                  <h3 className="text-xl font-semibold text-brand-dark">2025: Company Registered in MCA</h3>
                  <p className="text-gray-600 text-sm">Company officially registered in MCA as a private limited company.</p>
                </div>
                {/* Circle for Milestone 3 */}
                <div className="w-4 h-4 bg-brand-orange rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block" style={{ top: 'calc(66% + 6px)' }}></div> {/* Adjust top based on content */}
                <div className="md:w-1/2 text-center md:text-left md:pl-12"></div>
              </div>

              {/* Milestone 4 */}
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-1/2 text-center md:text-right md:pr-12 order-2 md:order-1"></div>
                {/* Circle for Milestone 4 */}
                <div className="w-4 h-4 bg-brand-orange rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block" style={{ top: 'calc(100% + 6px)' }}></div> {/* Adjust top based on content */}
                <div className="md:w-1/2 text-center md:text-left md:pl-12 order-1 md:order-2">
                  <h3 className="text-xl font-semibold text-brand-dark">2025: Major Project Awards</h3>
                  <p className="text-gray-600 text-sm">Recognized for excellence in several major projects, a testament to our quality and innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section id="meet-the-team" className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Founders & Executives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Member Card 1: Founder */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <ResponsiveImage src={dassImage} alt="Karuppaiya Dass" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-1">Karuppaiya Dass</h3>
              <p className="text-brand-dark mb-2">Founder</p>
              <p className="text-gray-600 text-sm">Dedicated to the company's vision and growth, Karuppaiya Dass laid the groundwork for MK Srinidhi Surveyors and Builders with a commitment to excellence.</p>
            </div>
            {/* Team Member Card 2: CEO */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <ResponsiveImage src={poogothaiImage} alt="Poogothai" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-1">Poogothai</h3>
              <p className="text-brand-dark mb-2">CEO</p>
              <p className="text-gray-600 text-sm">Poogothai drives the company's strategic direction, ensuring operational efficiency and market leadership in the construction and surveying sectors.</p>
            </div>
            {/* Team Member Card 3: CTO */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <ResponsiveImage src={kumarImage} alt="Selva Kumar" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-1">Selva Kumar</h3>
              <p className="text-brand-dark mb-2">CTO</p>
              <p className="text-gray-600 text-sm">Selva Kumar leads technological innovation, integrating advanced solutions to enhance project delivery and operational capabilities.</p>
            </div>
          </div>
        </section>

        {/* Certifications & Licenses Section */}
        <section id="certifications" className="py-12 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications & Licenses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-center justify-center">
            {/* Certification 1 */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
              <Award size={64} className="text-brand-orange mb-4" /> {/* Replaced image with icon */}
              <h3 className="text-lg font-semibold">ISO 9001:2015 Certified</h3>
              <p className="text-gray-600 text-sm">Quality Management System</p>
            </div>
            {/* Certification 2 */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
              <FileText size={64} className="text-brand-orange mb-4" /> {/* Replaced image with icon */}
              <h3 className="text-lg font-semibold">Government Approved Contractor</h3>
              <p className="text-gray-600 text-sm">Licensed for Public & Private Projects</p>
            </div>
            {/* Certification 3 */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
              <Users size={64} className="text-brand-orange mb-4" /> {/* Replaced image with icon */}
              <h3 className="text-lg font-semibold">Industry Association Member</h3>
              <p className="text-gray-600 text-sm">Committed to Industry Best Practices</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us (Reinforced) */}
        <section id="why-choose-us-about" className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center p-4">
              <Calendar size={64} className="text-brand-orange mb-4" /> {/* Replaced image with icon */}
              <h3 className="text-xl font-semibold mb-2">10+ Years of Experience</h3>
              <p className="text-gray-600">A decade of proven expertise in diverse construction and surveying projects.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <CheckCircle size={64} className="text-brand-orange mb-4" /> {/* Replaced image with icon */}
              <h3 className="text-xl font-semibold mb-2">Verified Government Contracts</h3>
              <p className="text-gray-600">Trusted by government bodies for reliable and high-quality project delivery.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-brand-orange mb-4 text-6xl font-bold">₹</span> {/* Replaced icon with Indian Rupee symbol */}
              <h3 className="text-xl font-semibold mb-2">Transparent Billing & Estimates</h3>
              <p className="text-gray-600">Clear, honest, and detailed financial dealings with no hidden costs.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <UserCheck size={64} className="text-brand-orange mb-4" /> {/* Replaced image with icon */}
              <h3 className="text-xl font-semibold mb-2">Trained & Certified Professionals</h3>
              <p className="text-gray-600">Our team comprises highly skilled and officially certified engineers and surveyors.</p>
            </div>
          </div>
        </section>
      </div>

      <CTABanner
        title="Looking for a reliable construction partner?"
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default AboutPage;
