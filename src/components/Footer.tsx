import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#070C19] text-gray-300 pt-16 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-4">
        {/* Main Grid: 5 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Company Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <img
                src="/uploads/lovable-uploads/847779eb-be4d-4547-af8d-f9665c2586a7.png"
                alt="MK Srinidhi Surveyors and Builders Logo"
                className="h-10 w-auto object-contain bg-white p-1 rounded"
              />
              <div className="flex flex-col">
                <span className="font-bold text-white text-xs md:text-sm tracking-wide">
                  MK SRINIDHI
                </span>
                <span className="text-[8px] md:text-[9px] text-gray-500 font-semibold tracking-wider">
                  SURVEYORS & BUILDERS PVT. LTD.
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Delivering precision surveying, engineering & construction solutions with trust and
              technology.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-brand-orange transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-brand-orange transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-brand-orange transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-brand-orange transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm md:text-base mb-4 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <a href="#technology" className="text-gray-400 hover:text-white transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-white font-bold text-sm md:text-base mb-4 tracking-wider uppercase">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link
                  to="/services/land-surveying"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Land Surveying
                </Link>
              </li>
              <li>
                <Link
                  to="/services/land-surveying"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Topographical Survey
                </Link>
              </li>
              <li>
                <Link
                  to="/services/land-surveying"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Construction Surveying
                </Link>
              </li>
              <li>
                <Link
                  to="/services/land-surveying"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Measured Building Survey
                </Link>
              </li>
              <li>
                <Link
                  to="/services/land-surveying"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Setting Out
                </Link>
              </li>
              <li>
                <Link
                  to="/services/architectural-planning"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link
                  to="/services/land-surveying"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GIS & Geospatial
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div>
            <h3 className="text-white font-bold text-sm md:text-base mb-4 tracking-wider uppercase">
              Industries
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <span className="text-gray-400">Real Estate & Developers</span>
              </li>
              <li>
                <span className="text-gray-400">Infrastructure</span>
              </li>
              <li>
                <span className="text-gray-400">Industrial</span>
              </li>
              <li>
                <span className="text-gray-400">Government</span>
              </li>
              <li>
                <span className="text-gray-400">Commercial</span>
              </li>
              <li>
                <span className="text-gray-400">Residential</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm md:text-base mb-4 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">
                  53F3, Mitta Office Street,
                  <br />
                  Krishnapuram, Kadayanallur,
                  <br />
                  Tenkasi District - 627759,
                  <br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone size={16} className="text-brand-orange flex-shrink-0" />
                <a href="tel:+919597636766" className="text-gray-400 hover:text-white transition-colors">
                  +91 9597636766
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail size={16} className="text-brand-orange flex-shrink-0" />
                <a
                  href="mailto:info@mksribuilders.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@mksribuilders.com
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock size={16} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-gray-900 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p className="text-center md:text-left">
            &copy; 2026 MK Srinidhi Surveyors & Builders Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
