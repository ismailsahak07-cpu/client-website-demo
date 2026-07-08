/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import SocialProof from './components/SocialProof';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingFormModal from './components/BookingFormModal';
import { BookingDetails } from './types';
import { SERVICES_DATA } from './data/staticData';
import { 
  Sparkles, CheckCircle, Clock, Truck, ShieldCheck, MapPin, 
  Trash2, X, Phone, Calendar, ArrowRight, HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeBookings, setActiveBookings] = useState<BookingDetails[]>([]);
  const [justBookedId, setJustBookedId] = useState<string | null>(null);

  // SEO Optimization & Metadata injection on mount
  useEffect(() => {
    // Perfect premium Title tag
    document.title = "Take 7 Dry Cleaners Barnet | Premium Professional Garment Care London";

    // Inject Meta Description for SEO
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Experience premium organic dry cleaning & expert fabric restoration in Barnet, Hadley Wood & Totteridge. Free valet collection & delivery.');

    // Inject Open Graph tags for premium social SEO
    const ogTags = [
      { property: 'og:title', content: 'Take 7 Dry Cleaners Barnet | Premium Garment Care' },
      { property: 'og:description', content: 'London’s finest bespoke dry cleaning, wedding dress preservation, and tailoring. Free contactless home pickup & delivery.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=1000&q=80' }
    ];

    ogTags.forEach(tag => {
      let ogMeta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', tag.property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute('content', tag.content);
    });

    // Load active bookings from local storage
    const loaded = localStorage.getItem('take7_bookings');
    if (loaded) {
      try {
        setActiveBookings(JSON.parse(loaded));
      } catch (e) {
        console.error('Error parsing local storage bookings', e);
      }
    }
  }, []);

  const handleBookingSuccess = (newBooking: BookingDetails) => {
    setActiveBookings(prev => [newBooking, ...prev]);
    setJustBookedId(newBooking.id);
    
    // Auto-scroll to the top of the tracker so the user can see their active progress instantly!
    setTimeout(() => {
      const tracker = document.getElementById('active-tracker-section');
      if (tracker) {
        tracker.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  const handleCancelBooking = (bookingId: string) => {
    if (window.confirm('Are you sure you want to request cancellation for this scheduled valet pickup?')) {
      const updated = activeBookings.filter(b => b.id !== bookingId);
      setActiveBookings(updated);
      localStorage.setItem('take7_bookings', JSON.stringify(updated));
      if (justBookedId === bookingId) setJustBookedId(null);
    }
  };

  const getServiceLabel = (serviceId: string) => {
    return SERVICES_DATA.find(s => s.id === serviceId)?.name || serviceId;
  };

  return (
    <div className="min-h-screen flex flex-col bg-warm-white font-sans text-almost-black selection:bg-gold-200 selection:text-navy-900 overflow-x-hidden">
      
      {/* Premium Navigation Header */}
      <Header onBookClick={() => setIsBookingOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero onBookClick={() => setIsBookingOpen(true)} />

        {/* Real-time Order Tracker (CRO Golden Touch - displays only when a booking is present) */}
        <AnimatePresence>
          {activeBookings.length > 0 && (
            <motion.section
              id="active-tracker-section"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-12 bg-navy-900 border-b border-navy-800 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.04),transparent_35%)]" />
              
              <div className="max-w-4xl mx-auto px-6 relative z-10 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-navy-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-display font-bold tracking-widest text-gold-400 block">
                        Valet Tracking Live
                      </span>
                      <h3 className="font-serif text-lg font-bold text-white">
                        Your Active Garment Journeys
                      </h3>
                    </div>
                  </div>

                  {justBookedId && (
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="px-3.5 py-1.5 rounded-full bg-gold-500 text-navy-950 text-xs font-sans font-bold flex items-center gap-1.5 shadow-lg"
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Booking Scheduled Successfully!</span>
                    </motion.div>
                  )}
                </div>

                {/* Tracking list */}
                <div className="space-y-6">
                  {activeBookings.map((booking) => (
                    <div 
                      key={booking.id} 
                      className={`p-6 rounded-2xl bg-navy-950 border transition-all ${
                        justBookedId === booking.id ? 'border-gold-500/50 shadow-lg' : 'border-white/5'
                      }`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        
                        {/* Order identifier metadata */}
                        <div className="md:col-span-4 space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="font-display font-black text-lg text-white">
                              {booking.id}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider bg-navy-900 border border-navy-800 text-gold-400 font-bold px-2.5 py-0.5 rounded-full">
                              {booking.status}
                            </span>
                          </div>

                          <div className="text-xs text-navy-300 font-sans space-y-1">
                            <p className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-navy-500 shrink-0" />
                              <span className="truncate max-w-[200px]">{booking.address}</span>
                            </p>
                            <p className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-navy-500 shrink-0" />
                              <span>Pickup: {booking.pickupDate} ({booking.pickupTimeSlot})</span>
                            </p>
                            <p className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-navy-500 shrink-0" />
                              <span>Return: {booking.deliveryDate} ({booking.deliveryTimeSlot})</span>
                            </p>
                          </div>
                        </div>

                        {/* Order contents & status indicator progress bar */}
                        <div className="md:col-span-5 text-left space-y-4">
                          <div>
                            <span className="text-[10px] uppercase font-display font-semibold tracking-wider text-navy-400 block mb-1">
                              Garments Packaged
                            </span>
                            <div className="flex flex-wrap gap-1.5 max-h-[60px] overflow-y-auto no-scrollbar pr-1">
                              {booking.servicesSelected.map((item, idx) => (
                                <span key={idx} className="text-xs font-sans bg-navy-900 border border-white/5 px-2.5 py-1 rounded-md text-navy-200">
                                  {getServiceLabel(item.serviceId)} x{item.quantity}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Progress bar visual representation */}
                          <div>
                            <div className="flex justify-between text-[10px] font-display font-semibold text-navy-400 mb-1.5 uppercase">
                              <span>Atelier Logistics</span>
                              <span className="text-gold-400">Scheduled for pickup</span>
                            </div>
                            <div className="w-full bg-navy-900 h-1.5 rounded-full overflow-hidden flex">
                              <div className="w-1/4 h-full bg-gradient-to-r from-gold-400 to-gold-500 rounded-full" />
                              <div className="flex-1 h-full bg-transparent" />
                            </div>
                          </div>
                        </div>

                        {/* Actions Suite */}
                        <div className="md:col-span-3 flex flex-col gap-2 pt-2 md:pt-0">
                          <div className="p-3 bg-navy-900 border border-white/5 rounded-xl text-center space-y-0.5">
                            <span className="text-[9px] uppercase tracking-wider text-navy-400 font-display block">Estimated Quote</span>
                            <span className="text-base font-display font-bold text-gold-300">£{booking.estimatedTotal.toFixed(2)}</span>
                          </div>

                          <div className="flex gap-2">
                            <a
                              href="tel:02084407777"
                              className="flex-1 py-2 rounded-lg border border-white/10 hover:border-gold-500/20 text-navy-200 hover:text-white bg-white/5 hover:bg-white/10 text-xs font-sans font-semibold text-center flex items-center justify-center gap-1.5"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>Support</span>
                            </a>
                            <button
                              onClick={() => handleCancelBooking(booking.id)}
                              className="p-2 rounded-lg bg-navy-900 hover:bg-red-950 border border-white/5 hover:border-red-900 text-navy-400 hover:text-red-400 transition-all flex items-center justify-center focus:outline-none"
                              title="Request Cancellation"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Services Showcase Section */}
        <ServicesSection 
          onSelectService={() => {}} 
          onBookClick={() => setIsBookingOpen(true)} 
        />

        {/* Process Section */}
        <ProcessSection />

        {/* Social Proof (Testimonials & stats) Section */}
        <SocialProof />

        {/* About Section */}
        <AboutSection />

        {/* FAQ Accordion Section */}
        <FAQSection />

        {/* Contact Coordinates & Map Section */}
        <ContactSection />

      </main>

      {/* Luxury minimal footer */}
      <Footer />

      {/* Floating Call to Action panel at the very bottom on screens for conversion boosting */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2 items-end">
        {/* Click to Call Floating button */}
        <a
          href="tel:02084407777"
          className="flex lg:hidden items-center justify-center w-12 h-12 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 hover:text-white shadow-xl hover:scale-105 active:scale-95 transition-all"
          title="Call Atelier Now"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating Book button */}
        <button
          onClick={() => setIsBookingOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950 font-sans font-bold py-3.5 px-6 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer text-sm tracking-wide border border-gold-400/20"
        >
          <Calendar className="w-4 h-4 text-navy-950" />
          <span>Book Collection</span>
        </button>
      </div>

      {/* Interactive Booking Scheduler Modal Container */}
      <BookingFormModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        onBookingSuccess={handleBookingSuccess} 
      />

    </div>
  );
}
