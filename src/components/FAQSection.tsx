import React, { useState } from 'react';
import { FAQS_DATA } from '../data/staticData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQSection() {
  const [activeId, setActiveId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'booking', label: 'Booking & Transit' },
    { id: 'process', label: 'Cleaning Process' },
    { id: 'care', label: 'Garment Care' },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? FAQS_DATA
    : FAQS_DATA.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq-section" className="py-20 lg:py-28 bg-[#f9f9f9] text-[#1a1a1a] scroll-mt-10 relative border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-display font-bold tracking-widest text-[#C5A059] block mb-3">
            Reduced Uncertainty
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#0A192F]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-3 font-sans text-sm sm:text-base">
            Find immediate clarity on our collection cycles, delicate organic solvents, stain-treating policies, and insurance coverage.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-1 border border-gray-200 max-w-md mx-auto">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                // Expand first one of the filtered list automatically
                const firstOfCat = cat.id === 'all' 
                  ? 'faq-1' 
                  : FAQS_DATA.find(f => f.category === cat.id)?.id || null;
                setActiveId(firstOfCat);
              }}
              className={`px-4 py-1.5 text-xs font-bold tracking-widest uppercase transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0A192F] text-white'
                  : 'text-gray-500 hover:text-[#0A192F] hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4 text-left">
          {filteredFaqs.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#0A192F] shadow-sm'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-[#0A192F] pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 border border-gray-100 bg-gray-50 text-gray-500 transition-all duration-300 ${
                    isOpen ? 'rotate-180 bg-gold-500/10 text-gold-600' : ''
                  }`}>
                    <ChevronDown className="w-4.5 h-4.5" />
                  </div>
                </button>

                {/* Collapsible Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-sm sm:text-base text-gray-500 font-sans leading-relaxed border-t border-gray-100 pt-4 bg-gray-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA help card */}
        <div className="mt-12 p-6 bg-[#0A192F] text-white flex flex-col sm:flex-row justify-between items-center gap-6 text-left border border-navy-850">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-white">Have a highly technical fabric query?</h4>
              <p className="text-xs text-navy-300 mt-1 max-w-md">Our textile master is happy to discuss details about silk coatings, linen weights, or historical stain treatments directly.</p>
            </div>
          </div>
          
          <a
            href="tel:02084407777"
            className="px-5 py-3 bg-[#C5A059] hover:bg-gold-600 text-navy-950 text-xs font-bold tracking-widest uppercase shadow-lg shrink-0 flex items-center gap-1.5 transition-all active:scale-98 cursor-pointer"
          >
            <span>Ask Our Master</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
