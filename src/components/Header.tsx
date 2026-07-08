import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro-bar for extreme premium details */}
      <div className="w-full bg-[#f9f9f9] text-navy-800 text-xs py-2 px-6 flex justify-between items-center font-display border-b border-gray-200 tracking-wider">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-gold-500" />
            Serving Barnet, Hadley Wood & Totteridge
          </span>
          <span className="hidden md:flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-gold-500" />
            Mon - Sat: 8:00 AM - 6:30 PM
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:02084407777" className="hover:text-gold-600 font-bold transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3 text-gold-500" />
            020 8440 7777
          </a>
        </div>
      </div>

      <header
        id="app-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Elegant minimalist branding */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col items-start text-left group cursor-pointer focus:outline-none"
            id="brand-logo-btn"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-navy-800 flex items-baseline">
              TAKE <span className="text-gold-500 font-display font-light ml-1">7</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-sans text-gold-500 font-semibold">
              Dry Cleaners & Garment Care
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-navy-800 opacity-80">
            <button
              onClick={() => scrollToSection('services-section')}
              className="hover:text-gold-500 transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process-section')}
              className="hover:text-gold-500 transition-colors cursor-pointer"
            >
              The Process
            </button>
            <button
              onClick={() => scrollToSection('about-section')}
              className="hover:text-gold-500 transition-colors cursor-pointer"
            >
              Our Atelier
            </button>
            <button
              onClick={() => scrollToSection('faq-section')}
              className="hover:text-gold-500 transition-colors cursor-pointer"
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="hover:text-gold-500 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:02084407777"
              className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-navy-800 hover:text-white transition-all px-5 py-3 border border-navy-800 bg-transparent hover:bg-navy-800"
              id="header-phone-btn"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>020 8440 7777</span>
            </a>
            <button
              onClick={onBookClick}
              className="flex items-center gap-2 bg-[#0A192F] hover:bg-navy-900 text-white text-xs font-bold tracking-widest uppercase py-3 px-6 transition-all cursor-pointer"
              id="header-book-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Collection</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:02084407777"
              className="p-2 border border-navy-800 text-navy-800 hover:bg-navy-100 transition-all"
              id="header-mobile-phone-btn"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy-800 hover:text-gold-500 transition-all focus:outline-none"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-navy-950/40 backdrop-blur-xs z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-white border-l border-gray-100 z-50 p-8 flex flex-col justify-between lg:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-8">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="font-serif text-lg font-bold text-[#0A192F]">
                    TAKE <span className="text-gold-500 font-display">7</span>
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 text-navy-400 hover:text-[#0A192F]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-5 text-sm font-semibold tracking-widest uppercase text-[#0A192F]/80">
                  <button
                    onClick={() => scrollToSection('services-section')}
                    className="text-left py-2 hover:text-gold-500 transition-colors"
                  >
                    Our Services
                  </button>
                  <button
                    onClick={() => scrollToSection('process-section')}
                    className="text-left py-2 hover:text-gold-500 transition-colors"
                  >
                    Our Cleaning Process
                  </button>
                  <button
                    onClick={() => scrollToSection('about-section')}
                    className="text-left py-2 hover:text-gold-500 transition-colors"
                  >
                    About Take 7
                  </button>
                  <button
                    onClick={() => scrollToSection('faq-section')}
                    className="text-left py-2 hover:text-gold-500 transition-colors"
                  >
                    Frequently Asked Questions
                  </button>
                  <button
                    onClick={() => scrollToSection('contact-section')}
                    className="text-left py-2 hover:text-gold-500 transition-colors"
                  >
                    Location & Contact
                  </button>
                </nav>
              </div>

              <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-gray-100">
                <a
                  href="tel:02084407777"
                  className="flex items-center justify-center gap-3 w-full py-3 border border-navy-800 text-navy-800 text-xs font-bold tracking-widest uppercase hover:bg-navy-800 hover:text-white transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 020 8440 7777</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#0A192F] text-white text-xs font-bold tracking-widest uppercase hover:bg-navy-900 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Collection</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
