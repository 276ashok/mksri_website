import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  User,
  Send,
  ShieldCheck,
  Compass,
  MessageSquare,
  Users,
  FileText,
  Handshake,
  Headphones,
  Edit2,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { API_BASE_URL } from "@/lib/constants";
import contactHero from "@/assets/images/contact_hero.png";
import ResponsiveImage from "@/components/ResponsiveImage";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields (Full Name, Email, Message).",
        variant: "destructive",
        duration: 5000,
      });
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
        duration: 5000,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api.php?action=quote_requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone || null,
          service_type: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully. We will get back to you shortly.",
        duration: 5000,
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (error: any) {
      console.error("Error sending contact message:", error);
      toast({
        title: "Error",
        description: `There was a problem sending your message: ${error.message}. Please try again.`,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white overflow-hidden pb-16">
      {/* Redesigned Hero Section */}
      <section className="relative bg-[#F4F6F9] pt-12 pb-12 lg:py-0 min-h-fit lg:min-h-[500px] flex items-center overflow-hidden">
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
            src={contactHero}
            alt="Redesigned modern luxury villa hero background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-6 space-y-6 py-6 lg:py-12">
              <div>
                <span className="text-xs md:text-sm font-bold tracking-wider text-brand-orange uppercase block mb-2 font-mono">
                  GET IN TOUCH
                </span>
                <h1 className="text-3xl md:text-4.5xl lg:text-5xl font-extrabold text-[#0B132B] leading-tight">
                  Let's Build <br />
                  Something Great Together
                </h1>
                <div className="w-16 h-1.5 bg-brand-orange mt-4"></div>
              </div>

              <p className="text-[#4F5B73] text-sm md:text-base leading-relaxed max-w-lg">
                Have a project in mind or need expert advice? We're here to help. Reach out to us and
                our team will get back to you shortly.
              </p>

              {/* Mobile Image Fallback */}
              <div className="lg:hidden block w-full h-[250px] sm:h-[350px] rounded-lg overflow-hidden mt-6 relative shadow-md border border-gray-150">
                <ResponsiveImage
                  src={contactHero}
                  alt="Modern luxury villa fallback background"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Navy Card (Absolute positioned to align to bottom of the image) */}
        <div className="absolute right-12 bottom-0 z-30 hidden lg:block">
          <div className="bg-[#0B132B]/95 backdrop-blur text-white p-7 rounded-xl shadow-2xl border border-gray-800 w-80 text-center space-y-4">
            <div className="bg-brand-orange/20 text-brand-orange w-12 h-12 rounded-full mx-auto flex items-center justify-center">
              <Headphones className="w-6 h-6 animate-bounce" />
            </div>
            <h3 className="font-extrabold text-sm md:text-base leading-snug">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-300 text-xs">Call us directly for quick support</p>
            <a
              href="tel:+919597636766"
              className="w-full inline-flex items-center justify-center space-x-2 bg-brand-orange hover:bg-brand-orange/95 text-white font-bold text-xs py-3 px-5 rounded transition-all duration-200"
            >
              <span>+91 9597636766</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Form & Info Grid section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-150 rounded-2xl p-6 md:p-8 shadow-md">
              <h2 className="text-2xl font-extrabold text-[#0B132B] mb-6 relative">
                <span>Send Us a Message</span>
                <span className="absolute left-0 bottom-[-8px] w-12 h-0.5 bg-brand-orange" />
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <User size={16} />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-150 rounded-lg text-xs md:text-sm text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-all duration-200 placeholder-gray-400 font-medium"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Mail size={16} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-150 rounded-lg text-xs md:text-sm text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-all duration-200 placeholder-gray-400 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Phone size={16} />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-150 rounded-lg text-xs md:text-sm text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-all duration-200 placeholder-gray-400 font-medium"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Edit2 size={16} />
                    </div>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-150 rounded-lg text-xs md:text-sm text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-all duration-200 font-medium appearance-none"
                    >
                      <option>General Inquiry</option>
                      <option>Construction Quote</option>
                      <option>Survey Request</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Message TextArea */}
                <div className="relative">
                  <div className="absolute top-3 left-3 text-gray-400">
                    <MessageSquare size={16} />
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-150 rounded-lg text-xs md:text-sm text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-all duration-200 placeholder-gray-400 font-medium"
                  ></textarea>
                </div>

                {/* Submit Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-brand-orange hover:bg-[#0B132B] text-white font-bold text-xs md:text-sm py-3.5 px-8 rounded shadow hover:shadow-lg transition-all duration-200"
                  >
                    <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
                    <Send size={14} />
                  </button>

                  <div className="flex items-center space-x-2 text-gray-400 text-xs font-semibold">
                    <ShieldCheck size={16} className="text-brand-orange flex-shrink-0" />
                    <span>We respect your privacy. Your information is safe with us.</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-[#0B132B] relative">
                <span>Contact Information</span>
                <span className="absolute left-0 bottom-[-8px] w-12 h-0.5 bg-brand-orange" />
              </h2>

              <div className="space-y-5 pt-4">
                {/* Our Office */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-orange/10 text-brand-orange p-3 rounded-full flex-shrink-0 shadow-sm mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0B132B] text-sm md:text-base leading-tight">
                      Our Office
                    </h3>
                    <p className="text-brand-gray text-xs md:text-sm leading-relaxed mt-1 font-medium">
                      MK Srinidhi Surveyors and Builders Pvt. Ltd.
                      <br />
                      53/3, Mitta Office Street, Krishnapuram,
                      <br />
                      Kadayanallur, Tenkasi District - 627759,
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-orange/10 text-brand-orange p-3 rounded-full flex-shrink-0 shadow-sm mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0B132B] text-sm md:text-base leading-tight">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@mksribuilders.com"
                      className="text-brand-orange hover:underline text-xs md:text-sm mt-1 font-medium block"
                    >
                      info@mksribuilders.com
                    </a>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-orange/10 text-brand-orange p-3 rounded-full flex-shrink-0 shadow-sm mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0B132B] text-sm md:text-base leading-tight">
                      Call Us
                    </h3>
                    <a
                      href="tel:+919597636766"
                      className="text-[#0B132B] hover:text-brand-orange text-xs md:text-sm mt-1 font-bold block"
                    >
                      +91 9597636766
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-orange/10 text-brand-orange p-3 rounded-full flex-shrink-0 shadow-sm mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0B132B] text-sm md:text-base leading-tight">
                      Office Hours
                    </h3>
                    <p className="text-brand-gray text-xs md:text-sm mt-1 font-medium leading-relaxed">
                      Mon - Sat: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Directions Map Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-150 h-52 group bg-gray-100 flex items-center justify-center">
              {/* Map background image outline */}
              <div className="absolute inset-0 bg-cover bg-center opacity-30 select-none bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/77.3000,9.0000,12,0/500x300?access_token=pk.mock')]"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B132B]/20 to-transparent"></div>
              
              {/* Giant compass marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-4 bg-brand-orange text-white p-3 rounded-full shadow-lg border-2 border-white z-10 animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>

              {/* Action Overlay Button */}
              <div className="absolute bottom-5 left-4 right-4 z-20">
                <a
                  href="https://maps.google.com/?q=MK+Srinidhi+Surveyors+and+Builders+Kadayanallur+Tenkasi"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-white text-[#0B132B] hover:bg-brand-orange hover:text-white font-extrabold text-xs py-3 px-5 rounded-lg shadow-md border border-gray-150 transition-all duration-200"
                >
                  <Compass size={14} className="animate-spin-slow" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4-Column Feature Highlights Strip */}
        <div className="mt-16 bg-[#FAFBFD] border border-gray-150 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y-0 divide-x-0 lg:divide-x lg:divide-gray-150">
            {/* Quick Response */}
            <div className="flex items-center space-x-3.5 justify-start lg:justify-center">
              <div className="bg-white p-2.5 rounded-lg border border-gray-150 text-brand-orange shadow-sm flex-shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#0B132B] text-xs md:text-sm">Quick Response</h4>
                <p className="text-gray-500 text-[10px] md:text-xs mt-0.5">We reply within 24 hours</p>
              </div>
            </div>

            {/* Expert Team */}
            <div className="flex items-center space-x-3.5 justify-start lg:justify-center pt-4 lg:pt-0 pl-0 lg:pl-4">
              <div className="bg-white p-2.5 rounded-lg border border-gray-150 text-brand-orange shadow-sm flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#0B132B] text-xs md:text-sm">Expert Team</h4>
                <p className="text-gray-500 text-[10px] md:text-xs mt-0.5">Experienced professionals</p>
              </div>
            </div>

            {/* Free Consultation */}
            <div className="flex items-center space-x-3.5 justify-start lg:justify-center pt-4 lg:pt-0 pl-0 lg:pl-4">
              <div className="bg-white p-2.5 rounded-lg border border-gray-150 text-brand-orange shadow-sm flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#0B132B] text-xs md:text-sm">Free Consultation</h4>
                <p className="text-gray-500 text-[10px] md:text-xs mt-0.5">Get expert advice at no cost</p>
              </div>
            </div>

            {/* Trusted Partner */}
            <div className="flex items-center space-x-3.5 justify-start lg:justify-center pt-4 lg:pt-0 pl-0 lg:pl-4">
              <div className="bg-white p-2.5 rounded-lg border border-gray-150 text-brand-orange shadow-sm flex-shrink-0">
                <Handshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#0B132B] text-xs md:text-sm">Trusted Partner</h4>
                <p className="text-gray-500 text-[10px] md:text-xs mt-0.5">Committed to quality</p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Conversion CTA Banner Block */}
        <div className="mt-16">
          <section className="bg-[#0B132B] text-white rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12 relative border border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
              <div className="lg:col-span-7 pr-0 lg:pr-8 space-y-3.5">
                <h4 className="text-2xl md:text-3xl font-extrabold text-white">
                  Ready to Start Your Project?
                </h4>
                <p className="text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed">
                  Let's turn your ideas into reality with precision and excellence. Contact our team to
                  discuss your structural needs.
                </p>
              </div>

              <div className="lg:col-span-5 pl-0 lg:pl-10 pt-6 lg:pt-0 flex flex-col sm:flex-row gap-4 justify-start lg:justify-center">
                <a
                  href="tel:+919597636766"
                  className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold text-xs md:text-sm py-3.5 px-6 rounded transition-all duration-200"
                >
                  <span>CALL US NOW</span>
                </a>
                <a
                  href="#fullName"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("fullName")?.focus();
                  }}
                  className="inline-flex items-center justify-center space-x-2 bg-brand-orange hover:bg-brand-orange/95 text-white font-bold text-xs md:text-sm py-3.5 px-6 rounded shadow hover:shadow-lg transition-all duration-200"
                >
                  <span>REQUEST A QUOTE</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contact;
