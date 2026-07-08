import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, ShieldAlert, FileText, Lock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Local SEO Schema Markup JSON-LD for Take 7 Dry Cleaners
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundryService",
    "name": "Take 7 Dry Cleaners",
    "image": "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=1000&q=80",
    "@id": "https://take7drycleaners.co.uk",
    "url": "https://take7drycleaners.co.uk",
    "telephone": "02084407777",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "147 High St",
      "addressLocality": "Barnet",
      "addressRegion": "London",
      "postalCode": "EN5 5UZ",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.6521,
      "longitude": -0.2017
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:30"
      }
    ],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Barnet"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Hadley Wood"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Totteridge"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Arkley"
      }
    ]
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-navy-900 relative z-10 text-left">
      {/* Schema Injection for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
        
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col items-start text-left focus:outline-none cursor-pointer"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-white flex items-baseline">
              TAKE <span className="text-gold-500 font-display font-light ml-1">7</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-sans text-gold-400 font-medium">
              Dry Cleaners & Garment Care
            </span>
          </button>
          
          <p className="text-xs sm:text-sm text-navy-300 leading-relaxed max-w-sm font-sans pt-2">
            London’s premier bespoke dry cleaners, specializing in biological fabric restoration, hand-pressing suits, and museum-grade wedding dress preservation.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-navy-900 text-navy-300 hover:text-gold-400 border border-white/5 hover:border-gold-500/20 transition-all"
              aria-label="Follow Take 7 Dry Cleaners on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-navy-900 text-navy-300 hover:text-gold-400 border border-white/5 hover:border-gold-500/20 transition-all"
              aria-label="Follow Take 7 Dry Cleaners on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Navigation links */}
        <div className="lg:col-span-2 space-y-4 text-left">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
            Explore
          </h4>
          <nav className="flex flex-col gap-2.5 text-xs sm:text-sm text-navy-300 font-sans">
            <button onClick={() => scrollToSection('services-section')} className="hover:text-gold-400 text-left transition-colors cursor-pointer">Our Services</button>
            <button onClick={() => scrollToSection('process-section')} className="hover:text-gold-400 text-left transition-colors cursor-pointer">The Experience</button>
            <button onClick={() => scrollToSection('about-section')} className="hover:text-gold-400 text-left transition-colors cursor-pointer">Our Atelier</button>
            <button onClick={() => scrollToSection('faq-section')} className="hover:text-gold-400 text-left transition-colors cursor-pointer">Expert FAQs</button>
            <button onClick={() => scrollToSection('contact-section')} className="hover:text-gold-400 text-left transition-colors cursor-pointer">Contact</button>
          </nav>
        </div>

        {/* Local Valet Logistics coordinates */}
        <div className="lg:col-span-3 space-y-4 text-left">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
            Valet Zones
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-navy-300 font-sans">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
              <span>High Barnet (EN5)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
              <span>Hadley Wood (EN4)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
              <span>Totteridge & Whetstone (N20)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
              <span>Arkley & Highwood Hills</span>
            </li>
          </ul>
        </div>

        {/* Contact Coordinates */}
        <div className="lg:col-span-3 space-y-4 text-left">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
            Atelier Contact
          </h4>
          <ul className="flex flex-col gap-3 text-xs sm:text-sm text-navy-300 font-sans">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              <span>147 High St, Barnet EN5 5UZ</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-gold-500 shrink-0" />
              <a href="tel:02084407777" className="hover:text-gold-400 transition-colors">020 8440 7777</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-gold-500 shrink-0" />
              <a href="mailto:relations@take7drycleaners.co.uk" className="hover:text-gold-400 transition-colors">relations@take7drycleaners.co.uk</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Under micro-bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-navy-900/85 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-navy-400">
        <p className="font-sans">
          &copy; {currentYear} Take 7 Dry Cleaners Ltd. All Rights Reserved. Co No: 12003301.
        </p>

        <div className="flex flex-wrap gap-5">
          <button className="hover:text-gold-400 flex items-center gap-1 cursor-pointer">
            <Lock className="w-3.5 h-3.5 text-navy-500" />
            <span>Privacy Policy</span>
          </button>
          <button className="hover:text-gold-400 flex items-center gap-1 cursor-pointer">
            <FileText className="w-3.5 h-3.5 text-navy-500" />
            <span>Terms of Service</span>
          </button>
          <button className="hover:text-gold-400 flex items-center gap-1 cursor-pointer">
            <ShieldAlert className="w-3.5 h-3.5 text-navy-500" />
            <span>Sartorial Liability</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
