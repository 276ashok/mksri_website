import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"; // Import social icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <img 
                src="/uploads/lovable-uploads/847779eb-be4d-4547-af8d-f9665c2586a7.png" 
                alt="MK Srinidhi Surveyors and Builders Logo" 
                className="h-12 mr-3" 
              />
              <span className="font-bold text-xl">MK Srinidhi</span>
            </div>
            <p className="text-gray-400 mb-4">
              Expert construction and surveying services delivering excellence and precision for every project.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/mksrinidhi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/mksrinidhi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/mksrinidhi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-brand-orange mt-0.5" />
                <span className="text-gray-400">
                  53F3, Mitta Office Street,<br />
                  Krishnapuram, Kadayanallur,<br />
                  Tenkasi District - 627759,<br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-orange" />
                <span className="text-gray-400">info@mksribuilders.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-brand-orange" />
                <span className="text-gray-400">+91 9597636766</span>
              </li>
              <li className="flex items-start space-x-3">
                <a href="https://www.google.com/maps/search/53f3,+Mitta+Office+Street,+Krishnapuram,+Kadayanallur,+Tenkasi+District+-+627759,+Tamil+Nadu,+India" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:text-white transition-colors flex items-center">
                  <MapPin size={20} className="mr-2" /> View on Map
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 MK Srinidhi Surveyors and Builders. All rights reserved.
            </p>
          </div>
        </div>
        <div className="py-6 text-center">
          <p className="text-sm text-gray-500">Want to discuss a project with our experts?</p>
          <Link to="/contact" className="inline-block mt-2 px-6 py-3 bg-brand-orange text-white rounded-md hover:bg-brand-dark transition-colors">
            Contact Our Team
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
