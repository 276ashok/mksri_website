import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

// Navigation links
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  // { name: "Admin", href: "/admin" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  // Handle scroll event for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    
    // If on homepage, scroll to the quote section
    const quoteSection = document.getElementById('quote-section');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on homepage, navigate to contact page with quote section
      window.location.href = '/contact#quote';
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md py-2" // Always white and shadowed
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <img 
              src="/uploads/lovable-uploads/847779eb-be4d-4547-af8d-f9665c2586a7.png" 
              alt="MK Srinidhi Surveyors and Builders Logo" 
              className="h-10 md:h-12" 
            />
            <span className="hidden lg:inline font-bold text-xs md:text-sm">
              <span className="text-black">MK Srinidhi </span>
              <span className="text-red-600">Surveyors & Builders </span>
              <span className="text-black">Pvt Ltd</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-medium text-gray-800 hover:text-brand-orange transition-colors" // Changed text color
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={handleQuoteClick}
              className="btn-primary"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-800" // Changed text color
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="font-medium text-gray-800 hover:text-brand-orange transition-colors py-2" // Changed text color
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={(e) => {
                    handleQuoteClick(e);
                    setIsMenuOpen(false);
                  }}
                  className="btn-primary self-start"
                >
                  Get a Quote
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
