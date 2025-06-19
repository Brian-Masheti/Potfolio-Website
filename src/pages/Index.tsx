import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import ServiceBooking from '@/components/ServiceBooking';
import ChatContact from '@/components/ChatContact';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import DataAnalysis from '@/components/DataAnalysis';
import SoftwareEngineering from '@/components/SoftwareEngineering';
import CustomerService from '@/components/CustomerService';
import Testimonials from '@/components/Testimonials';
import { ThemeProvider } from '@/components/ThemeProvider';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');

  // Handle deep linking on page load and URL changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const validSections = ['home', 'about', 'services', 'data-analysis', 'software-engineering', 'customer-service', 'skills', 'resume', 'testimonials', 'booking', 'contact'];
        if (validSections.includes(hash)) {
          setCurrentSection(hash);
          // Scroll to top when hash changes (browser navigation)
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    window.history.pushState({}, '', `/#${section}`);
    // (Scroll will be handled in useEffect below)
  };

  // Always scroll to top after section changes (ensures new content is visible from the top)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <Hero onSectionChange={handleSectionChange} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services onSectionChange={handleSectionChange} />;
      case 'data-analysis':
        return <DataAnalysis onSectionChange={handleSectionChange} />;
      case 'software-engineering':
        return <SoftwareEngineering onSectionChange={handleSectionChange} />;
      case 'customer-service':
        return <CustomerService onSectionChange={handleSectionChange} />;
      case 'skills':
        return <Skills />;
      case 'resume':
        return <Resume />;
      case 'testimonials':
        return <Testimonials />;
      case 'booking':
        return <ServiceBooking />;
      case 'contact':
        return <ChatContact />;
      default:
        return <Hero onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation currentSection={currentSection} onSectionChange={handleSectionChange} />
        <main className="flex-1 pt-16">
          {renderCurrentSection()}
        </main>
        <NewsletterSignup />
        <Footer onSectionChange={handleSectionChange} />
      </div>
    </ThemeProvider>
  );
};

export default Index;