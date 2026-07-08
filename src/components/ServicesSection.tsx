import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/staticData';
import { ServiceItem } from '../types';
import { 
  Shirt, Sparkles, Bed, Layers, Cloud, Flower2, 
  Pipette, Scissors, Zap, Truck, Check, HelpCircle, ArrowRight, Briefcase, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Safe Lucide icon selector
const getIcon = (name: string, className = "w-6 h-6") => {
  switch (name) {
    case 'Suitcase': return <Briefcase className={className} />;
    case 'Shirt': return <Shirt className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Bed': return <Bed className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Cloud': return <Cloud className={className} />;
    case 'Flower2': return <Flower2 className={className} />;
    case 'Pipette': return <Pipette className={className} />;
    case 'Scissors': return <Scissors className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Truck': return <Truck className={className} />;
    default: return <Sparkles className={className} />;
  }
};

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onBookClick: () => void;
}

export default function ServicesSection({ onSelectService, onBookClick }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDetailsItem, setSelectedDetailsItem] = useState<ServiceItem | null>(null);
  
  // Basket for the interactive Estimator tool
  const [estimatorBasket, setEstimatorBasket] = useState<Record<string, number>>({});

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'dry-cleaning', label: 'Dry Cleaning' },
    { id: 'laundry', label: 'Laundry & Pressing' },
    { id: 'specialist', label: 'Couture & Specialist' },
    { id: 'tailoring', label: 'Repairs & Alterations' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const updateQuantity = (id: string, delta: number) => {
    setEstimatorBasket(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const getBasketTotal = () => {
    return SERVICES_DATA.reduce((acc, item) => {
      const qty = estimatorBasket[item.id] || 0;
      if (item.basePrice === 'FREE') return acc;
      // Extract numerical value
      const priceNum = parseFloat(item.basePrice.replace(/[^\d.]/g, '')) || 0;
      return acc + (priceNum * qty);
    }, 0);
  };

  const getBasketCount = () => {
    return Object.values(estimatorBasket).reduce((a: number, b: number) => Number(a) + Number(b), 0);
  };

  const handleStartBookingWithEstimator = () => {
    // Save selected services to local storage so the booking form can pick them up!
    localStorage.setItem('temp_estimator_basket', JSON.stringify(estimatorBasket));
    onBookClick();
  };

  return (
    <section id="services-section" className="py-20 lg:py-28 bg-white text-navy-900 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left max-w-2xl">
            <span className="text-xs uppercase font-display font-bold tracking-widest text-gold-500 block mb-3">
              Meticulous Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
              Our Professional Garment Care Services
            </h2>
            <p className="text-navy-500 mt-3 font-sans text-sm sm:text-base">
              Every garment undergoes an individual multi-stage inspection and biological wash or organic dry-clean, complete with personalized hand-finishing.
            </p>
          </div>
          
          {/* Category Filter tabs */}
          <div className="flex flex-wrap gap-2 md:self-end bg-gray-50 p-1 border border-gray-200 no-scrollbar overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0A192F] text-white'
                    : 'text-gray-500 hover:text-[#0A192F] hover:bg-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Grid of Service Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layoutId={`service-card-${service.id}`}
                className="group p-6 bg-white border border-gray-200 hover:border-[#0A192F]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left relative"
              >
                {service.popular && (
                  <span className="absolute top-4 right-4 bg-gold-500 text-white text-[9px] uppercase font-display font-bold tracking-widest px-2.5 py-1">
                    Artisan Favorite
                  </span>
                )}
                
                <div>
                  <div className="w-12 h-12 bg-gray-50 border border-gray-100 text-navy-800 flex items-center justify-center group-hover:bg-[#0A192F] group-hover:text-white transition-colors duration-300 mb-5">
                    {getIcon(service.iconName)}
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-[#0A192F] mb-2 group-hover:text-gold-600 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-500 font-sans line-clamp-2 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[9px] text-gray-400 block font-display uppercase tracking-widest">Prices from</span>
                    <span className="text-base font-display font-semibold text-[#0A192F]">{service.basePrice}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedDetailsItem(service)}
                      className="text-xs text-gray-500 hover:text-gold-600 font-sans font-medium hover:underline transition-colors focus:outline-none cursor-pointer"
                    >
                      Details
                    </button>
                    <span className="text-gray-200">|</span>
                    <button
                      onClick={() => updateQuantity(service.id, 1)}
                      className="text-xs bg-gray-100 hover:bg-[#0A192F] text-[#0A192F] hover:text-white px-3 py-1.5 font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Premium live interactive estimate panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 bg-[#0A192F] text-white p-6 sm:p-8 border border-navy-800 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.05),transparent_40%)]" />
            
            <div className="relative z-10 text-left">
              <span className="text-[10px] uppercase font-display font-bold tracking-widest text-gold-400 block mb-2">
                Order Estimator
              </span>
              <h3 className="text-xl font-serif font-bold text-white mb-1">
                Your Collection Plan
              </h3>
              <p className="text-xs text-navy-300 font-sans mb-6">
                Add garments to instantly calculate your luxury care quote.
              </p>

              {/* Basket list */}
              {getBasketCount() === 0 ? (
                <div className="py-12 flex flex-col items-center justify-center text-center border-y border-navy-800/80 my-4 text-navy-400 gap-3">
                  <HelpCircle className="w-10 h-10 text-navy-600" />
                  <p className="text-xs sm:text-sm font-sans max-w-[200px]">
                    No garments added. Click <span className="font-semibold text-white">+ Add</span> on any card to begin estimating.
                  </p>
                </div>
              ) : (
                <div className="max-h-[220px] overflow-y-auto space-y-3.5 pr-2 my-4 border-y border-navy-800/80 py-4 no-scrollbar">
                  {SERVICES_DATA.map((service) => {
                    const qty = estimatorBasket[service.id] || 0;
                    if (qty === 0) return null;
                    return (
                      <div key={service.id} className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex flex-col gap-0.5 text-left pr-4">
                          <span className="font-sans font-medium text-white truncate max-w-[150px] sm:max-w-[180px]">
                            {service.name}
                          </span>
                          <span className="text-[10px] text-navy-400">{service.basePrice} each</span>
                        </div>
                        
                        <div className="flex items-center gap-2.5 shrink-0">
                          <button
                            onClick={() => updateQuantity(service.id, -1)}
                            className="w-5 h-5 bg-navy-800 hover:bg-navy-700 flex items-center justify-center text-navy-300 font-bold hover:text-white transition-all focus:outline-none cursor-pointer"
                          >
                            -
                          </button>
                          <span className="font-display font-medium text-white w-3 text-center">{qty}</span>
                          <button
                            onClick={() => updateQuantity(service.id, 1)}
                            className="w-5 h-5 bg-navy-800 hover:bg-navy-700 flex items-center justify-center text-navy-300 font-bold hover:text-white transition-all focus:outline-none cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Estimate totals */}
              <div className="space-y-2 mt-4 text-xs sm:text-sm">
                <div className="flex justify-between text-navy-300">
                  <span>Barnet Courier Transit:</span>
                  <span className="text-gold-400 font-medium font-display">
                    {getBasketTotal() >= 25 || getBasketCount() === 0 ? 'Complimentary' : '£4.95'}
                  </span>
                </div>
                <div className="flex justify-between text-navy-300">
                  <span>Chemical Treatment Solvent:</span>
                  <span className="text-white font-medium">Eco-Certified Organic</span>
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-white pt-3 border-t border-navy-800 mt-2">
                  <span>Estimated Total:</span>
                  <span className="text-gold-300 font-display text-lg">
                    £{(getBasketTotal() + (getBasketTotal() > 0 && getBasketTotal() < 25 ? 4.95 : 0)).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Trust disclaimer */}
              <p className="text-[10px] text-navy-400 mt-4 leading-normal bg-navy-950/40 p-3 border border-navy-800/50">
                ⚠️ *Pricing is estimated and confirmed during manual workshop check-in. Zero surprise surcharges guaranteed.*
              </p>

              {/* Multi-step high converting CTA */}
              <button
                onClick={handleStartBookingWithEstimator}
                className="w-full py-4 bg-[#C5A059] hover:bg-gold-600 text-navy-950 font-sans font-bold text-xs tracking-widest uppercase transition-all mt-5 cursor-pointer flex items-center justify-center gap-2"
                id="estimator-submit-btn"
              >
                <span>Schedule Pickup with Items</span>
                <ArrowRight className="w-4 h-4 text-navy-950" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Modern Pop-up Detail Drawer for Individual Service */}
      <AnimatePresence>
        {selectedDetailsItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDetailsItem(null)}
              className="fixed inset-0 bg-navy-950 z-50 cursor-pointer"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 max-w-2xl mx-auto bg-white border-t border-gray-200 p-8 z-50 text-left shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar"
            >
              <div className="flex justify-between items-start gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-50 text-navy-800 border border-gray-100 flex items-center justify-center">
                    {getIcon(selectedDetailsItem.iconName, "w-7 h-7")}
                  </div>
                  <div>
                    <span className="text-xs uppercase font-display font-bold tracking-widest text-gold-500">
                      Service Dossier
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#0A192F] mt-0.5">
                      {selectedDetailsItem.name}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDetailsItem(null)}
                  className="p-1.5 bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-navy-950 transition-all focus:outline-none cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-display uppercase tracking-widest text-gray-400 mb-2">Our Atelier Philosophy</h4>
                  <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                    {selectedDetailsItem.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-display uppercase tracking-widest text-gray-400 mb-3">Premium Inclusions</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedDetailsItem.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <div className="w-5 h-5 bg-gold-100 flex items-center justify-center text-gold-700 shrink-0">
                          <Check className="w-3.5 h-3.5 font-bold" />
                        </div>
                        <span className="font-sans">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-display block tracking-wider">Starting rate</span>
                    <span className="text-2xl font-display font-bold text-[#0A192F]">{selectedDetailsItem.basePrice}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        updateQuantity(selectedDetailsItem.id, 1);
                        setSelectedDetailsItem(null);
                      }}
                      className="px-6 py-3 bg-[#0A192F] hover:bg-navy-900 text-white text-xs font-bold tracking-widest uppercase transition-all shadow-md active:scale-98 cursor-pointer"
                    >
                      Add To Estimator
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
