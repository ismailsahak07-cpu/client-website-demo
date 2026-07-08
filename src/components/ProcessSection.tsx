import React, { useState } from 'react';
import { Calendar, Truck, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface ProcessStep {
  step: string;
  title: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
}

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: ProcessStep[] = [
    {
      step: '01',
      title: 'Seamless Digital Booking',
      label: 'Book in 60 Seconds',
      desc: 'Select your services online using our precise price estimator, then choose secure, 1-hour collection and delivery windows. No payment needed until inspection.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>
      )
    },
    {
      step: '02',
      title: 'Chauffeur Valet Pickup',
      label: 'We Collect From You',
      desc: 'Our uniformed valet arrives in a customized Mercedes fleet vehicle, placing your luxury suits, dresses, and linens into individual sanitizing garment carriers. Fully insured from the second it leaves your door.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.75A1.125 1.125 0 012.625 17.625V15.75m11.25 3m-3.75 0h7.5m-.124-3.75h.374a1.125 1.125 0 011.125 1.125v1.5m-1.125-2.625v1.5m-11.25-3.375h14.25M2.625 10.5h11.25m3.75 0H21m-4.5 0v3.375m0-3.375a3.375 3.375 0 00-3.375-3.375H9.75A3.375 3.375 0 006.375 10.5m10.125 0v3.375m-10.125-3.375v3.375M2.625 15.75H13.5" />
        </svg>
      )
    },
    {
      step: '03',
      title: 'Eco-Organics Purification',
      label: 'Delicate Biological Bath',
      desc: 'No aggressive, skin-irritating chemicals. Your clothing is cleaned using advanced biodegradable solvents and precise temperature controls, dissolving deep-set oils and particulate soot while keeping fibers plump and vibrant.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707" />
        </svg>
      )
    },
    {
      step: '04',
      title: 'Artisan Quality Inspection',
      label: 'Hand-Finished Inspection',
      desc: 'Every sleeve, seam, pocket, and button is inspected under task lighting. Garments are hand-pressed to correct structural alignment and lapel roll, and only passed once certified flawless by our Head Inspector.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      step: '05',
      title: 'Pristine Wardrobe Delivery',
      label: 'Returned Ready to Wear',
      desc: 'Delivered back on cedar-infused premium hangers inside breathable fabric garment bags. Your shirts are perfectly crisp and your suits have that iconic, ready-to-wear silhouette.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    }
  ];

  return (
    <section id="process-section" className="py-20 lg:py-28 bg-[#f9f9f9] text-[#1a1a1a] relative overflow-hidden scroll-mt-10 border-b border-gray-100">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-display font-bold tracking-widest text-[#C5A059] block mb-3">
            Five-Step Valet Service
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#0A192F]">
            The Take 7 Experience
          </h2>
          <p className="text-gray-500 mt-4 font-sans text-sm sm:text-base leading-relaxed">
            We have perfected our garment care process to offer high-end dry cleaning, stain removal, and structural finishing with zero effort on your part.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:grid grid-cols-5 gap-6 relative">
          
          {/* Connecting line representing the flow */}
          <div className="absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-gray-200 z-0" />
          
          {steps.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center cursor-pointer relative z-10 p-5 border transition-all duration-300 ${
                activeStep === index
                  ? 'bg-white border-[#0A192F] shadow-md'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setActiveStep(index)}
            >
              {/* Step Icon Container */}
              <div className={`w-12 h-12 flex items-center justify-center transition-all duration-300 mb-5 border ${
                activeStep === index
                  ? 'bg-[#0A192F] text-white border-[#0A192F]'
                  : 'bg-gray-50 text-gold-500 border-gray-200'
              }`}>
                {item.icon}
              </div>

              {/* Step indicator */}
              <span className="text-[10px] uppercase font-display tracking-widest text-[#C5A059] font-bold mb-1">
                STEP {item.step}
              </span>
              
              <h3 className="font-serif text-sm font-bold text-[#0A192F] mb-1 leading-tight">
                {item.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="hidden lg:block mt-12 p-8 bg-white border border-gray-200 max-w-4xl mx-auto text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-7xl font-serif font-black text-gray-100 select-none">
            {steps[activeStep].step}
          </div>
          <div className="flex gap-6 items-start relative z-10">
            <div className="w-12 h-12 bg-gray-50 border border-gray-100 flex items-center justify-center text-gold-500 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-display font-semibold tracking-widest text-gold-500">Step Detail Summary</span>
              <h4 className="text-2xl font-serif font-bold text-[#0A192F] mt-1 mb-3">
                {steps[activeStep].title}
              </h4>
              <p className="text-gray-500 font-sans leading-relaxed text-sm sm:text-base max-w-2xl">
                {steps[activeStep].desc}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Process List */}
        <div className="lg:hidden space-y-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`p-6 border text-left transition-all duration-300 ${
                activeStep === index
                  ? 'bg-white border-[#0A192F] shadow-sm'
                  : 'bg-white border-gray-200'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-serif font-bold text-gold-500">
                  {item.step}
                </span>
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-display tracking-widest text-gray-400 font-bold block">
                    {item.label}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#0A192F] mt-0.5">
                    {item.title}
                  </h3>
                </div>
                <div className={`w-8 h-8 border border-gray-200 flex items-center justify-center text-gold-500 shrink-0`}>
                  {item.icon}
                </div>
              </div>

              {activeStep === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 pt-4 border-t border-gray-100"
                >
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
