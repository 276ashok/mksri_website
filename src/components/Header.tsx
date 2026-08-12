import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

// Navigation links
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Land Surveying", href: "/services/land-surveying" },
      { name: "Topographical Survey", href: "/services/land-surveying" },
      { name: "Construction Surveying", href: "/services/land-surveying" },
      { name: "Measured Building Survey", href: "/services/land-surveying" },
      { name: "Setting Out", href: "/services/land-surveying" },
      { name: "Civil Engineering", href: "/services/architectural-planning" },
      { name: "Site Engineering", href: "/services/construction-estimation-consulting" },
      { name: "GIS & Geospatial", href: "/services/land-surveying" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Technology", href: "/#technology" },
  { name: "Industries", href: "/#footer" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote-section");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact#quote";
    }
  };

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#0B132B] text-gray-300 text-xs py-2.5 px-4 border-b border-gray-800 z-50 relative hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: Contact Info */}
          <div className="flex items-center space-x-6">
            <a
              href="mailto:info@mksribuilders.com"
              className="flex items-center space-x-2 hover:text-brand-orange transition-colors"
            >
              <Mail size={14} className="text-brand-orange" />
              <span>info@mksribuilders.com</span>
            </a>
            <span className="flex items-center space-x-2">
              <MapPin size={14} className="text-brand-orange" />
              <span>Tenkasi, Tamil Nadu</span>
            </span>
          </div>

          {/* Right: Pages & Social Links */}
          <div className="flex items-center space-x-6">
            <Link to="/careers" className="hover:text-brand-orange transition-colors">
              Careers
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/blog" className="hover:text-brand-orange transition-colors">
              Resources
            </Link>
            <span className="text-gray-600">|</span>
            <div className="flex items-center space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-orange transition-colors"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-orange transition-colors"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-orange transition-colors"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-orange transition-colors"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 bg-white ${isScrolled ? "top-0 shadow-lg py-2" : "top-0 md:top-[38px] shadow-md py-4"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2.5">
              <img
                src="/uploads/lovable-uploads/847779eb-be4d-4547-af8d-f9665c2586a7.png"
                alt="MK Srinidhi Surveyors and Builders Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-[#0B132B] text-sm md:text-base leading-tight tracking-wide">
                  MK SRINIDHI
                </span>
                <span className="text-[9px] md:text-[10px] text-gray-500 font-semibold tracking-wider">
                  <span className="text-brand-red font-bold">SURVEYOURS & BUILDERS</span> PVT. LTD.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-7">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative group"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <button className="flex items-center space-x-1.5 font-semibold text-sm text-[#1C2541] hover:text-brand-orange transition-colors py-2 focus:outline-none">
                        <span>{link.name}</span>
                        <ChevronDown size={14} className="mt-0.5" />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-xl py-3 border border-gray-100 grid grid-cols-1 z-50"
                          >
                            {link.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="px-5 py-2.5 text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors"
                                onClick={() => setIsServicesDropdownOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`font-semibold text-sm hover:text-brand-orange transition-colors ${location.pathname === link.href && !link.href.includes("#")
                      ? "text-brand-orange"
                      : "text-[#1C2541]"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: Phone & Quote CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="tel:+919597636766"
                className="flex items-center space-x-2 text-[#1C2541] hover:text-brand-orange transition-colors"
              >
                <div className="bg-brand-orange/10 p-2 rounded-full">
                  <Phone size={16} className="text-brand-orange" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium">Call Us Now</span>
                  <span className="text-sm font-bold tracking-tight">+91 9597636766</span>
                </div>
              </a>

              <button
                onClick={handleQuoteClick}
                className="bg-brand-orange hover:bg-brand-orange/95 text-white font-bold text-xs md:text-sm py-3 px-6 rounded-md shadow-md hover:shadow-lg active:scale-95 transition-all duration-200"
              >
                REQUEST A QUOTE
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 rounded-md hover:bg-gray-100 text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden bg-white shadow-inner border-t border-gray-100 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => {
                    if (link.dropdown) {
                      return (
                        <div key={link.name} className="flex flex-col space-y-2">
                          <span className="font-semibold text-sm text-gray-400 uppercase tracking-wider">
                            {link.name}
                          </span>
                          <div className="pl-4 flex flex-col space-y-2 border-l border-gray-100">
                            {link.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={`font-semibold text-base py-1 hover:text-brand-orange transition-colors ${location.pathname === link.href ? "text-brand-orange" : "text-[#1C2541]"
                          }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>

                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <a
                    href="tel:+919597636766"
                    className="flex items-center space-x-3 text-[#1C2541] hover:text-brand-orange transition-colors"
                  >
                    <div className="bg-brand-orange/10 p-2.5 rounded-full">
                      <Phone size={18} className="text-brand-orange" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Call Us Now</div>
                      <div className="font-bold">+91 9597636766</div>
                    </div>
                  </a>

                  <button
                    onClick={(e) => {
                      handleQuoteClick(e);
                      setIsMenuOpen(false);
                    }}
                    className="bg-brand-orange text-white text-center font-bold py-3 px-6 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto"
                  >
                    REQUEST A QUOTE
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
