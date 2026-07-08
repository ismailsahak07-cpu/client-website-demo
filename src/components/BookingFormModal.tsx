import React, { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../data/staticData';
import { BookingDetails } from '../types';
import { 
  X, AlertTriangle, ChevronRight, ChevronLeft, ShieldCheck, Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingSuccess: (booking: BookingDetails) => void;
}

export default function BookingFormModal({ isOpen, onClose }: BookingFormModalProps) {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedServices, setSelectedServices] = useState<Record<string, number>>({});

  // Auto-fill from the Estimator if they used it
  useEffect(() => {
    if (isOpen) {
      const savedEstimator = localStorage.getItem('temp_estimator_basket');
      if (savedEstimator) {
        try {
          const parsed = JSON.parse(savedEstimator);
          // Only use if not empty
          if (Object.keys(parsed).length > 0) {
            setSelectedServices(parsed);
          }
        } catch (e) {
          console.error("Error reading temporary estimator basket", e);
        }
        // Clear it so it doesn't conflict later
        localStorage.removeItem('temp_estimator_basket');
      }
    }
  }, [isOpen]);

  // Reset to Step 1 when modal is opened/closed
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const updateServiceQty = (id: string, qty: number) => {
    setSelectedServices(prev => {
      const next = Math.max(0, qty);
      return { ...prev, [id]: next };
    });
  };

  const calculateTotal = () => {
    let total = 0;
    SERVICES_DATA.forEach(service => {
      const qty = selectedServices[service.id] || 0;
      if (service.basePrice === 'FREE') return;
      const priceNum = parseFloat(service.basePrice.replace(/[^\d.]/g, '')) || 0;
      total += priceNum * qty;
    });
    return total;
  };

  const getBasketCount = () => {
    return Object.values(selectedServices).reduce((a: number, b: number) => Number(a) + Number(b), 0);
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 1) {
      if (getBasketCount() === 0) {
        newErrors.services = 'Please select at least one garment or service to continue.';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Dark elegant backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-950 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative bg-white text-navy-900 border border-gray-200 w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col z-10 shadow-2xl rounded-none"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center bg-[#0A192F] text-white">
            <div className="text-left">
              <span className="text-[10px] uppercase font-display font-bold tracking-widest text-gold-400 block mb-0.5">
                Valet Scheduler
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Book Your Chauffeur Pickup
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 bg-navy-800 text-navy-300 hover:text-white hover:bg-navy-700 transition-all focus:outline-none border border-navy-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Progress Bar */}
          <div className="w-full bg-gray-100 h-1 flex">
            {[1, 2].map((s) => (
              <div
                key={s}
                className={`flex-1 transition-all duration-500 ${
                  s <= step ? 'bg-[#C5A059]' : 'bg-transparent'
                }`}
              />
            ))}
          </div>

          {/* Content Area - Scrollable */}
          <div className="p-6 overflow-y-auto flex-1 no-scrollbar text-left">
            <div className="space-y-6">
              
              {/* STEP 1: Garment Basket Selection */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-serif text-lg font-bold text-[#0A192F]">
                      Step 1: Select Your Wardrobe Garments
                    </h4>
                    <span className="text-xs font-display font-bold text-gold-600 bg-gold-100/40 px-3 py-1 border border-gold-200/30">
                      {getBasketCount()} Garments Selected
                    </span>
                  </div>
                  
                  {errors.services && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{errors.services}</span>
                    </div>
                  )}

                  {/* List of services inside a neat micro-container */}
                  <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1 no-scrollbar">
                    {SERVICES_DATA.map((service) => {
                      const qty = selectedServices[service.id] || 0;
                      return (
                        <div
                          key={service.id}
                          className={`p-3.5 border transition-all flex items-center justify-between rounded-none ${
                            qty > 0
                              ? 'border-[#C5A059] bg-gold-500/5'
                              : 'border-gray-200 hover:border-gray-300 bg-white'
                          }`}
                        >
                          <div className="text-left pr-4">
                            <span className="font-sans font-semibold text-sm text-[#0A192F] block">
                              {service.name}
                            </span>
                            <span className="text-xs text-gray-500">{service.basePrice} base rate</span>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={() => updateServiceQty(service.id, qty - 1)}
                              className="w-7 h-7 border border-gray-200 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-navy-700 font-bold text-sm focus:outline-none transition-colors cursor-pointer"
                            >
                              -
                            </button>
                            <span className="w-6 text-center font-display font-semibold text-sm text-[#0A192F]">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateServiceQty(service.id, qty + 1)}
                              className="w-7 h-7 border border-gray-200 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-navy-700 font-bold text-sm focus:outline-none transition-colors cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Call to Book Confirmation Screen */}
              {step === 2 && (
                <div className="space-y-6 py-4 flex flex-col items-center text-center">
                  
                  {/* Title and Subtitle */}
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-bold text-[#0A192F]">
                      Book Your Collection
                    </h4>
                    <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed font-sans">
                      Your estimated collection has been prepared. To ensure the most accurate pricing and arrange a convenient collection time, please call our team.
                    </p>
                  </div>

                  {/* Estimated Price Display */}
                  <div className="w-full max-w-md bg-gray-50 border border-gray-200 p-5 text-center mt-2">
                    <span className="text-[10px] uppercase font-display font-bold tracking-widest text-[#C5A059] block mb-1">
                      Estimated Total Quote
                    </span>
                    <span className="text-3xl font-display font-bold text-[#0A192F]">
                      £{(calculateTotal() + (calculateTotal() > 0 && calculateTotal() < 25 ? 4.95 : 0)).toFixed(2)}
                    </span>
                    <p className="text-[11px] text-gray-400 font-sans mt-2.5 leading-normal max-w-xs mx-auto">
                      Estimated price only. Final pricing may vary depending on garment condition and specialist care requirements.
                    </p>
                  </div>

                  {/* Large Premium CTA Button */}
                  <div className="w-full max-w-md mt-4">
                    <a
                      href="tel:02084417777"
                      className="flex flex-col items-center justify-center w-full py-4 px-6 bg-[#0A192F] hover:bg-[#122A4E] text-white transition-all duration-300 active:scale-98 shadow-md border border-[#0A192F] cursor-pointer group"
                    >
                      <span className="text-xs uppercase tracking-widest font-bold text-gold-400 mb-1 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-gold-400 group-hover:animate-bounce" />
                        Call Now
                      </span>
                      <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#C5A059]">
                        020 8441 7777
                      </span>
                    </a>
                    
                    <p className="text-xs text-gray-500 max-w-sm mx-auto mt-4 leading-relaxed font-sans">
                      Our team will confirm your collection time, answer any questions, and arrange a convenient pickup.
                    </p>
                  </div>

                  {/* Three Reassurance Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 border-t border-gray-150">
                    {/* Reassurance 1 */}
                    <div className="p-4 bg-gray-50 border border-gray-200 flex flex-col justify-between">
                      <div className="text-left">
                        <div className="flex items-center gap-1.5 text-[10px] uppercase font-display font-bold tracking-widest text-[#C5A059] mb-1.5">
                          <span className="text-xs font-bold text-[#C5A059]">✓</span>
                          <span>Fast Collection</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed font-sans">
                          We arrange collection at a time that suits you.
                        </p>
                      </div>
                    </div>

                    {/* Reassurance 2 */}
                    <div className="p-4 bg-gray-50 border border-gray-200 flex flex-col justify-between">
                      <div className="text-left">
                        <div className="flex items-center gap-1.5 text-[10px] uppercase font-display font-bold tracking-widest text-[#C5A059] mb-1.5">
                          <span className="text-xs font-bold text-[#C5A059]">✓</span>
                          <span>Expert Garment Care</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed font-sans">
                          Professional cleaning with specialist attention to every garment.
                        </p>
                      </div>
                    </div>

                    {/* Reassurance 3 */}
                    <div className="p-4 bg-gray-50 border border-gray-200 flex flex-col justify-between">
                      <div className="text-left">
                        <div className="flex items-center gap-1.5 text-[10px] uppercase font-display font-bold tracking-widest text-[#C5A059] mb-1.5">
                          <span className="text-xs font-bold text-[#C5A059]">✓</span>
                          <span>No Online Payment Required</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed font-sans">
                          Payment is made after your garments have been assessed or upon collection/delivery.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Footer Navigation Bar */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-1 text-xs sm:text-sm font-sans font-bold text-gray-500 hover:text-[#0A192F] focus:outline-none cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-4">
              {/* Basket quick overview info */}
              <div className="text-right hidden sm:block">
                <span className="text-[10px] text-gray-400 font-display block uppercase tracking-widest">Estimated Total</span>
                <span className="text-sm font-display font-bold text-[#0A192F]">
                  £{(calculateTotal() + (calculateTotal() > 0 && calculateTotal() < 25 ? 4.95 : 0)).toFixed(2)}
                </span>
              </div>

              {step < 2 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-1 px-5 py-2.5 bg-[#0A192F] hover:bg-navy-800 text-white text-xs font-bold tracking-widest uppercase transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              ) : null}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
