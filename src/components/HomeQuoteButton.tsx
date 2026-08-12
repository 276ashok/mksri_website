
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const HomeQuoteButton = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Check if we're on the homepage
    const quoteSection = document.getElementById('quote-section');
    
    if (quoteSection) {
      // If on homepage, scroll to the quote section
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    } else if (window.location.pathname === '/contact') {
      // If on contact page, scroll to quote form
      setTimeout(() => {
        const contactQuoteElement = document.getElementById('quote');
        if (contactQuoteElement) {
          contactQuoteElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          toast({
            title: "Quote form not found",
            description: "Please navigate to the contact page to request a quote.",
            variant: "destructive",
          });
        }
      }, 100);
    } else {
      // If on any other page, navigate to contact page with quote anchor
      navigate('/contact#quote');
      
      // After navigation, we need to scroll to the element
      setTimeout(() => {
        const quoteElement = document.getElementById('quote');
        if (quoteElement) {
          quoteElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Give the page time to load
    }
  };

  return (
    <div className="mt-8">
      <a 
        href="#quote-section" 
        className="inline-flex items-center justify-center px-8 py-3 bg-brand-orange text-white font-medium rounded-md shadow-lg hover:bg-brand-orange/90 transition-colors"
        onClick={handleQuoteClick}
      >
        Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </div>
  );
};

export default HomeQuoteButton;
