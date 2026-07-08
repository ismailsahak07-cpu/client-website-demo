import React from 'react';
import { Shield, Sparkles, Heart, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section id="about-section" className="py-20 lg:py-28 bg-white text-[#1a1a1a] scroll-mt-10 overflow-hidden relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        
        {/* Left Column: Premium Images Collage */}
        <div className="lg:col-span-5 relative">
          
          <div className="space-y-4">
            {/* Primary Image */}
            <div className="relative border border-gray-200 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1545173168-9f1907e80020?auto=format&fit=crop&w=800&q=80"
                alt="Pristine white folded linens in clean modern laundry room"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0A192F]/5" />
            </div>

            {/* Asymmetrical Overlap Detail Card */}
            <div className="p-6 bg-[#0A192F] text-white border border-navy-800 shadow-xl text-left max-w-[280px] sm:max-w-xs absolute -bottom-6 -right-4 sm:-right-8">
              <span className="text-[10px] uppercase font-display font-bold text-gold-400 tracking-widest">
                Our Guarantee
              </span>
              <p className="font-serif text-sm font-semibold text-white mt-1 leading-normal">
                "If we cannot treat a delicate fabric safely, we will always consult with you first. No surprise chemical degradation, ever."
              </p>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-navy-800">
                <span className="text-xs font-display font-bold text-gold-500">M. Sterling</span>
                <span className="text-[10px] text-navy-400">— Head Master Cleaner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6 lg:pl-6 mt-8 lg:mt-0">
          <span className="text-xs uppercase font-display font-bold tracking-widest text-[#C5A059] block">
            Our Atelier Story
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#0A192F]">
            A family legacy of garment preservation and professional care
          </h2>

          <div className="space-y-4 text-gray-500 font-sans text-sm sm:text-base leading-relaxed">
            <p>
              Take 7 Dry Cleaners was founded in Barnet, London, out of frustration with industrial cleaning chains. The modern garment care market is dominated by speed and cheap, harsh solvents. Clothes come back with chemical odors, brittle fibers, and ruined buttons.
            </p>
            <p>
              We wanted to build a business that returned to the traditional art of sartorial dry-cleaning. We set up an independent atelier operating with a singular thesis: **Garments are an investment, and treating them is a craft.**
            </p>
            <p>
              Each item you hand to our valets undergoes an individual assessment. We treat wools, cashmeres, silks, drapes, and wedding gowns with dedicated biological detergents and non-toxic organic solvents. We inspect collars, check cuffs, verify stitches, and shape shoulders by hand.
            </p>
          </div>

          {/* Key Value Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4 mt-2">
            <div className="flex gap-3.5">
              <div className="w-10 h-10 bg-gray-50 border border-gray-100 flex items-center justify-center text-gold-500 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-serif text-sm font-bold text-[#0A192F]">Zero Aggressive Solvents</h4>
                <p className="text-xs text-gray-500 mt-1">We utilize eco-certified, skin-safe solvents that conserve fiber structure.</p>
              </div>
            </div>

            <div className="flex gap-3.5">
              <div className="w-10 h-10 bg-gray-50 border border-gray-100 flex items-center justify-center text-gold-500 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-serif text-sm font-bold text-[#0A192F]">Task Light Inspections</h4>
                <p className="text-xs text-gray-500 mt-1">Every button and seam is verified by our Head Quality Inspector under cold illumination.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
