import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, CheckCircle, Navigation, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setSubmitting(true);
    // Mimic real API dispatch latency
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      setFormName('');
      setFormEmail('');
      setFormPhone('');
      setFormMessage('');
    }, 1200);
  };

  return (
    <section id="contact-section" className="py-20 lg:py-28 bg-white text-[#1a1a1a] scroll-mt-10 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-16">
          <span className="text-xs uppercase font-display font-bold tracking-widest text-[#C5A059] block mb-3">
            Atelier Coordinates
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#0A192F]">
            Visit Our Barnet Atelier or Get in Touch
          </h2>
          <p className="text-gray-500 mt-3 font-sans text-sm sm:text-base">
            Drop off your fine knitwear directly, or contact our customer support team for customized corporate arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates & Interactive Vector Map Mock */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              
              {/* Address & Parking Block */}
              <div className="p-6 bg-gray-50 border border-gray-200 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 bg-[#0A192F] text-gold-400 flex items-center justify-center mb-4 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#0A192F]">Atelier Location</h4>
                  <p className="text-sm text-gray-500 font-sans mt-2 leading-relaxed">
                    Take 7 Dry Cleaners <br />
                    147 High St, Barnet EN5 5UZ
                  </p>
                </div>
                
                {/* Parking info placeholder */}
                <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2 items-start text-xs text-gray-500 bg-white p-3 border border-gray-100">
                  <Info className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  <span>Complimentary 30-min parking in bays directly in front.</span>
                </div>
              </div>

              {/* Opening Hours Block */}
              <div className="p-6 bg-gray-50 border border-gray-200 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 bg-[#0A192F] text-gold-400 flex items-center justify-center mb-4 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#0A192F]">Hours of Service</h4>
                  <div className="text-sm text-gray-500 font-sans mt-2.5 space-y-1.5">
                    <div className="flex justify-between">
                      <span>Mon - Fri:</span>
                      <span className="font-medium">8:00 AM - 6:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">8:00 AM - 6:30 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Sunday:</span>
                      <span className="italic">Closed for Rest</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-display">
                  <span className="text-gray-400 uppercase tracking-widest font-bold">Chauffeur schedule:</span>
                  <span className="text-gold-600 font-bold">Mon - Sat Active</span>
                </div>
              </div>

            </div>

            {/* Custom Interactive Vector Map Mockup representing Barnet */}
            <div className="relative bg-[#0A192F] border border-navy-800 p-6 overflow-hidden h-[260px] flex flex-col justify-between text-left shadow-lg">
              {/* Map grid coordinate aesthetic background */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Glow circular representation of collection radius */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-gold-500/30 bg-gold-500/5 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-gold-500/10" />

              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-display font-bold tracking-widest text-gold-400 block mb-1">
                    Coverage Map
                  </span>
                  <h4 className="text-white font-serif text-lg font-bold">Free Valet Coverage</h4>
                </div>
                
                <div className="flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase tracking-wider text-gold-400 bg-gold-500/10 border border-gold-500/25 px-2.5 py-1">
                  <Navigation className="w-3 h-3 text-gold-400 animate-bounce" />
                  <span>GPS Tracking Engaged</span>
                </div>
              </div>

              {/* Mock map indicators */}
              <div className="relative z-10 flex flex-wrap gap-2 text-[11px] font-sans text-navy-200 max-w-md">
                <span className="bg-navy-900 border border-white/5 px-2 py-1">📍 Hadley Wood</span>
                <span className="bg-navy-900 border border-white/5 px-2 py-1">📍 Arkley</span>
                <span className="bg-navy-900 border border-white/5 px-2 py-1">📍 Totteridge</span>
                <span className="bg-navy-900 border border-white/5 px-2 py-1">📍 Whetstone</span>
                <span className="bg-navy-900 border border-white/5 px-2 py-1">📍 Cockfosters</span>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-navy-400">
                <span>Free transit for bookings &gt; £25</span>
                <span className="text-gold-400 font-medium">9.6 Miles Active Radius</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Contact Form */}
          <div className="lg:col-span-5 bg-gray-50 p-6 sm:p-8 border border-gray-200 shadow-sm relative text-left">
            <h3 className="font-serif text-xl font-bold text-[#0A192F] mb-2">
              Send a Secure Message
            </h3>
            <p className="text-xs text-gray-500 font-sans mb-6">
              Our customer relations desk typically responds to inquiries within 30 minutes.
            </p>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleContactSubmit}
                  className="space-y-4"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name Input */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase font-display font-bold text-gray-400 tracking-widest">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 text-sm focus:border-[#0A192F] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Input */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase font-display font-bold text-gray-400 tracking-widest">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="e.g. eleanor@vance.com"
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 text-sm focus:border-[#0A192F] focus:outline-none"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase font-display font-bold text-gray-400 tracking-widest">Phone (Optional)</label>
                      <input
                        type="tel"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="e.g. 07700 900112"
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 text-sm focus:border-[#0A192F] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase font-display font-bold text-gray-400 tracking-widest">Your Inquiry</label>
                    <textarea
                      required
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Please details any special fabric concerns, commercial contracts, or general feedback..."
                      rows={4}
                      className="w-full p-4 bg-white border border-gray-200 text-sm focus:border-[#0A192F] focus:outline-none resize-none font-sans"
                    />
                  </div>

                  {/* Form Submission Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-[#0A192F] hover:bg-navy-800 text-white text-xs font-bold tracking-widest uppercase shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    {submitting ? (
                      <span className="w-5 h-5 border-2 border-white/35 border-t-white animate-spin" />
                    ) : (
                      <span>Send Secure Message</span>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center gap-4 text-navy-900"
                >
                  <div className="w-14 h-14 bg-gold-100 flex items-center justify-center text-[#C5A059] mb-2 border border-gold-200/40">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#0A192F]">Message Received</h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-sans max-w-[280px]">
                    Thank you. Eleanor from our Barnet relations desk has been dispatched and will reach out shortly.
                  </p>
                  
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-xs font-bold tracking-widest uppercase text-[#C5A059] hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
