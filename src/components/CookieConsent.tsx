import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 w-full bg-white text-gray-800 p-6 shadow-lg z-50 md:max-w-md md:rounded-tr-lg md:rounded-br-lg"
        >
          <h2 className="text-xl font-bold mb-2">We value your privacy</h2>
          <p className="text-sm mb-4">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
          <div className="flex space-x-3">
            <button
              onClick={() => {
                localStorage.setItem('cookie_consent', 'rejected');
                setIsVisible(false);
              }}
              className="flex-1 border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Reject All
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 bg-brand-orange hover:bg-brand-red text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
