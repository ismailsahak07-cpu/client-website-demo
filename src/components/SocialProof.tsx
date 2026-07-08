import React, { useState } from 'react';
import { TESTIMONIALS_DATA, STATISTICS } from '../data/staticData';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="testimonials-section" className="py-20 lg:py-28 bg-[#f9f9f9] text-[#1a1a1a] overflow-hidden relative border-b border-gray-100">
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Statistics Banner with gorgeous styling */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-16 border-b border-gray-200 mb-16">
          {STATISTICS.map((stat, i) => (
            <div key={i} className="text-center md:text-left p-6 bg-white border border-gray-200 flex flex-col justify-between">
              <span className="text-3xl sm:text-4xl font-display font-bold text-[#0A192F] tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-sans text-gray-500 font-medium uppercase tracking-widest mt-1 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-left max-w-2xl mb-12">
          <span className="text-xs uppercase font-display font-bold tracking-widest text-[#C5A059] block mb-3">
            Local Reputation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#0A192F]">
            Trusted by Particular Clients in Barnet
          </h2>
          <p className="text-gray-500 mt-3 font-sans text-sm sm:text-base">
            From bespoke tailoring in Hadley Wood to delicate silk wedding dresses in Totteridge, read about the care we invest in every fiber.
          </p>
        </div>

        {/* Interactive Testimonials Carousel/Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: High-converting Trust Summary Card */}
          <div className="lg:col-span-4 bg-[#0A192F] text-white p-8 border border-navy-800 relative overflow-hidden self-stretch flex flex-col justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.04),transparent_40%)]" />
            
            <div className="relative z-10 text-left">
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-gold-400" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-white leading-tight mb-4">
                "Not all dry cleaners are created equal."
              </h3>
              
              <p className="text-xs sm:text-sm text-navy-200 font-sans leading-relaxed">
                Many modern dry cleaners prioritize volume over care, blending garments in massive aggressive tumbling cycles. <br /><br />
                At Take 7, we operate with a surgical mindset. Our local Barnet atelier was founded on the belief that fine garments deserve meticulous preservation and chemical isolation.
              </p>
            </div>

            <div className="pt-8 border-t border-navy-800 mt-8 relative z-10">
              <div className="flex items-center gap-1.5 text-gold-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <span className="text-xs text-navy-400 font-sans">
                Over 350+ Google 5-Star Reviews
              </span>
            </div>
          </div>

          {/* Right Column: Premium Interactive Testimonial Slider */}
          <div className="lg:col-span-8 flex flex-col justify-between self-stretch">
            <div className="relative bg-white border border-gray-200 p-8 sm:p-10 shadow-sm flex-1 flex flex-col justify-between min-h-[300px]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col justify-between h-full text-left"
                >
                  <div>
                    {/* Star ratings & tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(TESTIMONIALS_DATA[activeIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                        ))}
                      </div>
                      
                      {TESTIMONIALS_DATA[activeIndex].garmentType && (
                        <span className="text-[9px] uppercase font-display font-bold tracking-widest text-[#0A192F] bg-gray-50 border border-gray-200 px-3 py-1">
                          Garment Treated: {TESTIMONIALS_DATA[activeIndex].garmentType}
                        </span>
                      )}
                    </div>

                    {/* Review text */}
                    <p className="text-base sm:text-lg text-navy-800 font-sans italic leading-relaxed mb-6">
                      "{TESTIMONIALS_DATA[activeIndex].comment}"
                    </p>
                  </div>

                  {/* Customer author card */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      {/* Generates placeholder initials avatar */}
                      <div className="w-11 h-11 bg-[#0A192F] text-gold-400 font-serif flex items-center justify-center font-bold text-sm shrink-0 border border-navy-800">
                        {TESTIMONIALS_DATA[activeIndex].name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-serif text-sm font-bold text-[#0A192F]">
                          {TESTIMONIALS_DATA[activeIndex].name}
                        </span>
                        <span className="text-xs text-gray-500 font-sans">
                          {TESTIMONIALS_DATA[activeIndex].location}
                        </span>
                      </div>
                    </div>

                    {TESTIMONIALS_DATA[activeIndex].verified && (
                      <div className="flex items-center gap-1.5 text-gold-600 bg-gold-100/30 px-2.5 py-1 border border-gold-200/40 shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Verified Booking</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Navigation Suite */}
            <div className="flex items-center justify-between mt-6 px-4">
              <span className="text-xs text-gray-500 font-sans font-medium">
                Showing {activeIndex + 1} of {TESTIMONIALS_DATA.length} premium client logs
              </span>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 border border-gray-200 bg-white text-gray-700 hover:bg-[#0A192F] hover:text-white hover:border-[#0A192F] transition-all cursor-pointer focus:outline-none"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 border border-gray-200 bg-white text-gray-700 hover:bg-[#0A192F] hover:text-white hover:border-[#0A192F] transition-all cursor-pointer focus:outline-none"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
