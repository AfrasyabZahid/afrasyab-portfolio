/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { services } from '../data';
import { Service } from '../types';

interface ServiceAccordionProps {
  onSelectService?: (service: Service) => void;
}

export default function ServiceAccordion({ onSelectService }: ServiceAccordionProps) {
  // First item open by default
  const [openId, setOpenId] = useState<string | null>(services[0].id);

  const handleRowClick = (id: string) => {
    if (openId === id) {
      setOpenId(null); // Accordion toggle support
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="service" className="relative py-24 bg-white border-b border-gray-100">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
        {/* Section Label */}
        <div className="mb-12 flex flex-col items-start">
          <span className="text-gray-400 text-xs font-mono tracking-widest uppercase mb-1">
            /SERVICE
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            Areas of Expertise
          </h2>
        </div>

        {/* Accordion container */}
        <div className="flex flex-col border-t border-gray-200">
          {services.map((service, index) => {
            const isOpen = openId === service.id;

            return (
              <div key={service.id} className="border-b border-gray-200">
                <AnimatePresence initial={false} mode="wait">
                  {isOpen ? (
                    /* Expanded Black Card */
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="relative bg-[#161616] text-white p-6 md:p-8 rounded-3xl my-3 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
                        {/* Service Content */}
                        <div className="max-w-xl z-10 flex flex-col items-start">
                          <span className="text-gray-400 font-mono text-xs tracking-wider uppercase mb-2">
                            [ 0{index + 1} / SERVICE ]
                          </span>
                          <h3 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight uppercase mb-3">
                            {service.title}
                          </h3>
                          <p className="font-sans text-sm text-gray-300 leading-relaxed max-w-lg">
                            {service.description}
                          </p>

                          <button
                            onClick={() => onSelectService?.(service)}
                            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-white text-black hover:bg-gray-100 hover:scale-[1.02] text-xs font-black rounded-full transition-all uppercase tracking-wider"
                          >
                            <span>View Details & Stack</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                          
                          {/* Close Icon Toggle */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenId(null);
                            }}
                            className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                            aria-label="Close service details"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Tilted Floating Device Mockup graphic */}
                        <motion.div
                          initial={{ opacity: 0, rotate: -5, scale: 0.9, x: 20 }}
                          animate={{ opacity: 1, rotate: 5, scale: 1, x: 0 }}
                          exit={{ opacity: 0, rotate: -5, scale: 0.9, x: 20 }}
                          transition={{ duration: 0.5 }}
                          className="relative md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 w-40 sm:w-48 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl shrink-0 self-center border border-white/15 mix-blend-screen"
                        >
                          <img
                            src="/src/assets/images/service_mockup_1783101788841.jpg"
                            alt="Mockup"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover grayscale opacity-90"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ) : (
                    /* Collapsed Row */
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="cursor-pointer group py-6 px-2 flex items-center justify-between hover:bg-gray-50/70 transition-colors duration-200"
                      onClick={() => handleRowClick(service.id)}
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className="font-mono text-xs text-gray-400 font-medium">
                          0{index + 1}
                        </span>
                        <h3 className="font-display font-bold text-base sm:text-xl text-gray-800 group-hover:text-black transition-colors uppercase tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                      
                      {/* Diagonal Arrow Icon */}
                      <div className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-black group-hover:bg-[#161616] group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
