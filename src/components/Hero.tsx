import React from 'react';
import { Calendar, Phone, ShieldCheck, Sparkles, Star, Award, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 20, stiffness: 100 }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section id="hero-section" className="relative min-h-[90vh] flex items-center bg-[#f9f9f9] text-[#1a1a1a] overflow-hidden py-16 lg:py-24 border-b border-gray-100">
      {/* Decorative clean minimalist lines (very subtle) */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gray-200/40 hidden lg:block" />
      <div className="absolute top-0 left-2/3 w-[1px] h-full bg-gray-200/40 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
        
        {/* Left Side: Compelling Copy and Actions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start gap-6 lg:pr-4"
        >
          {/* Quality badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-gold-500 text-xs font-bold uppercase tracking-widest font-display"
          >
            <span className="h-[1px] w-8 bg-[#C5A059]" />
            <span>Barnet's Premier Garment Care</span>
          </motion.div>

          {/* Core Localized Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] text-[#0A192F] text-left"
          >
            Your Wardrobe, <br />
            <span className="italic font-serif font-normal text-gold-500">
              Mastered.
            </span>
          </motion.h1>

          {/* High-converting, confidence-building subhead */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md font-sans text-left"
          >
            Professional garment care for those who value craftsmanship. Expert cleaning, delicate handling, and seamless collection from your doorstep.
          </motion.p>

          {/* Micro-interactive Action Suite */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto mt-2 text-left"
          >
            <button
              onClick={onBookClick}
              className="group flex items-center justify-center gap-2.5 bg-[#0A192F] hover:bg-navy-900 text-white text-xs font-bold tracking-widest uppercase py-5 px-10 shadow-xl hover:translate-y-[-2px] transition-all cursor-pointer"
              id="hero-cta-book"
            >
              <Calendar className="w-4 h-4 text-white group-hover:rotate-6 transition-transform" />
              <span>Book a Collection</span>
            </button>
            
            <a
              href="#services-section"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-bold tracking-widest uppercase border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-all text-center sm:text-left"
              id="hero-cta-view-services"
            >
              <span>View Services</span>
            </a>
          </motion.div>

          {/* Social Proof Trust Badges under Buttons */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-8 mt-12 border-t border-gray-200 w-full text-left"
          >
            <div>
              <p className="text-[10px] uppercase tracking-tighter font-bold text-gold-500 mb-1">Experience</p>
              <p className="text-sm font-medium text-[#0A192F]">25+ Years Care</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-tighter font-bold text-gold-500 mb-1">Location</p>
              <p className="text-sm font-medium text-[#0A192F]">Barnet, London</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-tighter font-bold text-gold-500 mb-1">Service</p>
              <p className="text-sm font-medium text-[#0A192F]">Express Turnaround</p>
            </div>
          </motion.div>

          {/* Location reassurance anchor */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mt-4 text-xs text-gray-500 bg-gray-100 px-3.5 py-2.5"
          >
            <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
            <span>Complimentary pickup across Barnet, Totteridge, Hadley Wood, and Arkley (Orders over £25)</span>
          </motion.div>
        </motion.div>

        {/* Right Side: Elegant Layered Image Layout */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center lg:justify-end h-[500px]">
          
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="relative w-full max-w-[380px] h-full bg-[#0A192F] rounded-[40px] overflow-hidden shadow-2xl transform rotate-1"
          >
            {/* Main high-end wardrobe visual */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
            
            {/* Overlay Graphic */}
            <div className="absolute bottom-8 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="flex space-x-1 mb-2.5 text-gold-400">
                <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
              </div>
              <p className="text-white text-xs font-light leading-relaxed italic">
                "The only dry cleaner I trust with my silk dresses and wedding gown. Truly exceptional care."
              </p>
              <p className="text-white/60 text-[9px] uppercase tracking-widest mt-3">— Elena R., Barnet Resident</p>
            </div>
          </motion.div>
          
          {/* Floating Card */}
          <div className="absolute top-12 -right-4 bg-white p-5 rounded-2xl shadow-2xl flex items-center space-x-3.5 border border-gray-100 max-w-[240px]">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gold-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-[#0A192F]">Couture & Wedding Care</p>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest">Specialist Service</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
