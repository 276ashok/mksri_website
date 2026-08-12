
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import CookieConsent from './CookieConsent';
import { Toaster } from "@/components/ui/sonner";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
      <CookieConsent />
      <Toaster />
    </div>
  );
};

export default Layout;
