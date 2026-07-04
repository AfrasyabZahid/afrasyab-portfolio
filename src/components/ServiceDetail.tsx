/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Cpu, Code, Database, Server, CheckCircle, ShieldCheck, Zap,
  Brain, Search, Globe, Network, Cpu as CpuIcon, Eye, Smile, Camera
} from 'lucide-react';
import { Service } from '../types';

const OpenAIIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} style={props.style}>
    <path d="M21.74 11.9a3.84 3.84 0 00-.73-2.3c-.35-.48-.84-.85-1.42-1.07.08-.34.11-.7.09-1.05a3.87 3.87 0 00-1.12-2.7 3.8 3.8 0 00-2.67-1.15c-.4 0-.8.06-1.17.18a3.89 3.89 0 00-3.3-1.8 3.8 3.8 0 00-3.1 1.63 3.81 3.81 0 00-2-.5c-.7 0-1.39.2-1.98.57A3.87 3.87 0 002.77 6c-.57.22-1.07.6-1.42 1.08a3.85 3.85 0 00-.73 2.3c0 .65.17 1.3.48 1.86a3.85 3.85 0 00.1 3.51c-.13.36-.2.74-.2 1.13a3.87 3.87 0 001.12 2.7 3.8 3.8 0 002.67 1.15c.4 0 .8-.06 1.17-.18a3.89 3.89 0 003.3 1.8 3.8 3.8 0 003.1-1.63 3.81 3.81 0 002 .5c.7 0 1.39-.2 1.98-.57a3.87 3.87 0 001.5-2.29c.57-.22 1.07-.6 1.42-1.08a3.85 3.85 0 00.73-2.3c0-.65-.17-1.3-.48-1.86a3.85 3.85 0 00-.1-3.51c.13-.36.2-.74.2-1.13zm-10.3 7.82c-.34 0-.68-.06-.99-.18l3.43-1.98a1 1 0 00.5-.86v-4.9l1.45.84a.1.1 0 01.05.08v4.06a2.92 2.92 0 01-1.45 2.53 2.87 2.87 0 01-2.99.11zM4.14 15.6a2.88 2.88 0 01.1-3.41L7.66 10.2a1 1 0 00.5-.86v-4.9L6.7 5.28A2.9 2.9 0 015.26 7.8v4.06a.1.1 0 00.05.08zm-.73-6.63a2.87 2.87 0 011.45-2.53 2.87 2.87 0 012.99-.11l-3.43 1.98a1 1 0 00-.5.86v4.9l-1.45-.84A.1.1 0 012.87 13V8.97c0-.66.18-1.3.54-1.86zm10.9-2.17l-3.43 1.98a1 1 0 00-.5.86v4.9L8.93 13.7a.1.1 0 01-.05-.08V9.56A2.92 2.92 0 0110.33 7a2.87 2.87 0 012.99-.11l.34.2-.33-.21zm4.18 5.76a2.88 2.88 0 01-.1 3.41l-3.43 1.98a1 1 0 00-.5.86v4.9l1.45-.84a2.9 2.9 0 011.45-2.52v-4.06a.1.1 0 00-.05-.08l-1.42-.82zm1.65-2.1a2.87 2.87 0 01-1.45 2.53 2.87 2.87 0 01-2.99.11l3.43-1.98a1 1 0 00.5-.86v-4.9l1.45.84a.1.1 0 01.05.08v4.06a2.88 2.88 0 01-.49 1.74zm-9.01.27l1.41-.81 1.45.84v1.64l-1.41.81-1.45-.84v-1.64z"/>
  </svg>
);

const GeminiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} style={props.style}>
    <path d="M11.64 2.08a.39.39 0 00-.73 0C10.54 3.03 9.42 5.02 8.35 6.42 7.02 8.16 5.02 9.4 2.08 10.9a.39.39 0 000 .73c.95.37 2.94 1.49 4.34 2.56 1.74 1.33 2.98 3.33 4.48 6.27a.39.39 0 00.73 0c.37-.95 1.49-2.94 2.56-4.34 1.33-1.74 3.33-2.98 6.27-4.48a.39.39 0 000-.73c-.95-.37-2.94-1.49-4.34-2.56-1.74-1.33-2.98-3.33-4.48-6.27zM19 19a.5.5 0 00-.5-.5c-.6 0-1.1-.2-1.5-.6s-.6-.9-.6-1.5a.5.5 0 00-1 0c0 .6-.2 1.1-.6 1.5s-.9.6-1.5.6a.5.5 0 000 1c.6 0 1.1.2 1.5.6s.6.9.6 1.5a.5.5 0 001 0c0-.6.2-1.1.6-1.5s.9-.6 1.5-.6a.5.5 0 000-1z" />
  </svg>
);

interface ServiceDetailProps {
  service: Service;
  onClose: () => void;
}

interface TechDetail {
  slug?: string;
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  bg: string;
}

const TECH_INFO: Record<string, TechDetail> = {
  'python': { icon: CpuIcon, color: '#3776AB', bg: 'bg-[#3776AB]/8 hover:bg-[#3776AB]/15' },
  'langchain': { icon: Brain, color: '#1C3C3A', bg: 'bg-[#1C3C3A]/8 hover:bg-[#1C3C3A]/15' },
  'openai api': { icon: OpenAIIcon, color: '#00A67E', bg: 'bg-[#00A67E]/8 hover:bg-[#00A67E]/15' },
  'gemini sdk': { icon: GeminiIcon, color: '#38BDF8', bg: 'bg-[#38BDF8]/8 hover:bg-[#38BDF8]/15' },
  'pinecone': { icon: Database, color: '#1A1A1A', bg: 'bg-[#1A1A1A]/8 hover:bg-[#1A1A1A]/15' },
  'fastapi': { icon: Zap, color: '#009688', bg: 'bg-[#009688]/8 hover:bg-[#009688]/15' },
  'websockets': { icon: Network, color: '#010101', bg: 'bg-[#010101]/8 hover:bg-[#010101]/15' },
  'n8n': { icon: Network, color: '#FF6D5A', bg: 'bg-[#FF6D5A]/8 hover:bg-[#FF6D5A]/15' },
  'celery': { icon: CpuIcon, color: '#378140', bg: 'bg-[#378140]/8 hover:bg-[#378140]/15' },
  'redis': { icon: Database, color: '#DC382D', bg: 'bg-[#DC382D]/8 hover:bg-[#DC382D]/15' },
  'docker': { icon: Server, color: '#2496ED', bg: 'bg-[#2496ED]/8 hover:bg-[#2496ED]/15' },
  'docker compose': { icon: Server, color: '#2496ED', bg: 'bg-[#2496ED]/8 hover:bg-[#2496ED]/15' },
  'rest apis': { icon: Globe, color: '#FF6C37', bg: 'bg-[#FF6C37]/8 hover:bg-[#FF6C37]/15' },
  'postgresql': { icon: Database, color: '#4169E1', bg: 'bg-[#4169E1]/8 hover:bg-[#4169E1]/15' },
  'beautifulsoup': { icon: Search, color: '#3776AB', bg: 'bg-[#3776AB]/8 hover:bg-[#3776AB]/15' },
  'playwright': { icon: Eye, color: '#2EAD33', bg: 'bg-[#2EAD33]/8 hover:bg-[#2EAD33]/15' },
  'selenium': { icon: Eye, color: '#43B02A', bg: 'bg-[#43B02A]/8 hover:bg-[#43B02A]/15' },
  'xpath': { icon: Code, color: '#3178C6', bg: 'bg-[#3178C6]/8 hover:bg-[#3178C6]/15' },
  'flask': { icon: Server, color: '#000000', bg: 'bg-[#000000]/8 hover:bg-[#000000]/15' },
  'sqlalchemy': { icon: Database, color: '#003B57', bg: 'bg-[#003B57]/8 hover:bg-[#003B57]/15' },
  'postman': { icon: Globe, color: '#FF6C37', bg: 'bg-[#FF6C37]/8 hover:bg-[#FF6C37]/15' },
  'nginx': { icon: Server, color: '#009639', bg: 'bg-[#009639]/8 hover:bg-[#009639]/15' },
  'pytorch': { icon: Brain, color: '#EE4C2C', bg: 'bg-[#EE4C2C]/8 hover:bg-[#EE4C2C]/15' },
  'opencv': { icon: Camera, color: '#5C3EE6', bg: 'bg-[#5C3EE6]/8 hover:bg-[#5C3EE6]/15' },
  'tensorrt': { icon: Zap, color: '#76B900', bg: 'bg-[#76B900]/8 hover:bg-[#76B900]/15' },
  'hugging face': { icon: Smile, color: '#FFD21E', bg: 'bg-[#FFD21E]/8 hover:bg-[#FFD21E]/15' },
  'onnx runtime': { icon: CpuIcon, color: '#00A4EF', bg: 'bg-[#00A4EF]/8 hover:bg-[#00A4EF]/15' },
  'transformers': { icon: Network, color: '#FFD21E', bg: 'bg-[#FFD21E]/8 hover:bg-[#FFD21E]/15' },
  'mbert': { icon: CpuIcon, color: '#4285F4', bg: 'bg-[#4285F4]/8 hover:bg-[#4285F4]/15' }
};

export default function ServiceDetail({ service, onClose }: ServiceDetailProps) {
  const getTechDetails = (techName: string) => {
    const normalized = techName.toLowerCase().trim();
    if (TECH_INFO[normalized]) {
      return TECH_INFO[normalized];
    }
    return { icon: Code, color: '#000000', bg: 'bg-gray-50 hover:bg-gray-100' };
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 mountaineer-overlay z-50 overflow-y-auto bg-[#fafaf9]/95 backdrop-blur-xl px-4 py-8 sm:p-12 md:p-16 flex justify-center items-start cursor-zoom-out selection:bg-black selection:text-white"
    >
      {/* Soft Ambient Light Blooms (Luxury Minimalist Aesthetic) */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-gray-200/30 to-gray-100/10 rounded-full blur-3xl pointer-events-none select-none z-0 animate-pulse [animation-duration:12s]"></div>
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-gradient-to-br from-gray-300/20 to-gray-50/10 rounded-full blur-3xl pointer-events-none select-none z-0 animate-pulse [animation-duration:16s]"></div>

      {/* Subtle Editorial Hairline Border around the screen viewport */}
      <div className="fixed inset-6 border border-gray-200/50 pointer-events-none select-none z-20 hidden md:block rounded-[2rem]"></div>

      {/* Elegant Left Decorative Column (Minimal Architectural Grid/Line Pattern) */}
      <div className="hidden xl:flex fixed left-10 top-24 bottom-24 w-12 flex-col items-center justify-between pointer-events-none select-none z-10 opacity-40">
        <div className="w-px h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 flex flex-col items-center justify-between py-12">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
          {/* Small Dot Grid Pattern Module */}
          <div className="w-6 h-12 bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] bg-[size:6px_6px]"></div>
          <div className="w-3 h-3 border border-gray-300 rotate-45"></div>
          <div className="w-6 h-12 bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] bg-[size:6px_6px]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
        </div>
      </div>

      {/* Elegant Right Decorative Column (Minimal Architectural Grid/Line Pattern) */}
      <div className="hidden xl:flex fixed right-10 top-24 bottom-24 w-12 flex-col items-center justify-between pointer-events-none select-none z-10 opacity-40">
        <div className="w-px h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 flex flex-col items-center justify-between py-12">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
          {/* Small Dot Grid Pattern Module */}
          <div className="w-6 h-12 bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] bg-[size:6px_6px]"></div>
          <div className="w-3 h-3 border border-gray-300"></div>
          <div className="w-6 h-12 bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] bg-[size:6px_6px]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
        </div>
      </div>



      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 100, mass: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl bg-white rounded-[32px] border border-gray-200/85 shadow-2xl overflow-hidden relative text-left z-10 cursor-default"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100 bg-white sticky top-0 z-25">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 hover:border-black text-xs font-bold text-gray-800 rounded-full transition-all duration-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </button>

          {/* Service Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 text-xs font-bold text-gray-800 rounded-full">
            <Cpu className="w-4 h-4 text-gray-500" />
            <span>Production-Ready Delivery</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-10 md:p-14">
          <div className="max-w-4xl mx-auto">
            {/* Meta Title */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-black text-white text-[10px] font-mono font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Expertise Area
              </span>
              <span className="text-gray-300">•</span>
              <span className="font-mono text-xs text-gray-400 font-bold uppercase">
                {service.id.replace('-', ' ')}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-2xl sm:text-4xl text-gray-900 tracking-tight leading-tight uppercase mb-2">
              {service.title}
            </h1>

            {/* Subtitle / Focus Statement */}
            <p className="text-sm font-mono font-bold text-gray-400 uppercase tracking-widest mb-8">
              {service.subtitle || 'High-Performance Solution Architecture'}
            </p>

            {/* Detailed Intro */}
            <div className="mb-12">
              <p className="font-sans text-base sm:text-lg text-gray-650 leading-relaxed font-medium italic border-l-4 border-black pl-5 py-2 text-justify">
                {service.detailedIntro || service.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12 pt-8 border-t border-gray-100">
              {/* Left Column: Core Solutions / Handled deliverables (6 cols) */}
              <div className="md:col-span-6 space-y-6">
                <h3 className="font-display font-black text-lg sm:text-xl text-gray-900 uppercase tracking-tight flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-800" />
                  <span>Key Solutions & Deliverables</span>
                </h3>

                <p className="text-xs text-gray-500 font-sans leading-relaxed mb-4 text-justify">
                  Key projects and practical solutions designed to address specific needs and automate workflows:
                </p>

                <div className="space-y-4">
                  {service.solutions?.map((sol, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-gray-50/50 hover:bg-gray-50 border border-gray-150 rounded-2xl transition-all duration-200"
                    >
                      <span className="font-mono text-xs font-bold text-black bg-white border border-gray-200 px-2 py-0.5 rounded-md mt-0.5 shadow-3xs">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-gray-750 leading-relaxed font-medium text-justify">
                        {sol}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Redesigned Technology Stack Cards (6 cols) */}
              <div className="md:col-span-6 space-y-6">
                <h3 className="font-display font-black text-lg sm:text-xl text-gray-900 uppercase tracking-tight flex items-center gap-2">
                  <Code className="w-5 h-5 text-gray-800" />
                  <span>Tech Stack & Integration</span>
                </h3>

                <p className="text-xs text-gray-500 font-sans leading-relaxed mb-4 text-justify">
                  The primary libraries, frameworks, and databases utilized to build these systems reliably:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.techStack?.map((tech) => {
                    const details = getTechDetails(tech);
                    return (
                      <div
                        key={tech}
                        style={{ '--hover-color': details.color } as React.CSSProperties}
                        className="flex items-center gap-3.5 p-3.5 bg-white border border-gray-200/80 rounded-2xl shadow-3xs hover:border-[var(--hover-color)] transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-xs cursor-default"
                      >
                        <div className={`p-2.5 rounded-xl transition-all duration-300 ${details.bg} flex items-center justify-center shrink-0 w-11 h-11`}>
                          {details.icon && (
                            <details.icon
                              className="w-5.5 h-5.5 transition-transform duration-300 group-hover:scale-110"
                              style={{ color: details.color }}
                            />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-sans text-xs sm:text-sm font-bold text-gray-800 leading-tight tracking-tight truncate">
                            {tech}
                          </p>
                          <p className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-0.5 font-black">
                            Verified Stack
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Contact CTA */}
            <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400 font-mono">
                Need a tailored solution built around these technologies?
              </p>
              <button
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 350);
                }}
                className="px-6 py-3 bg-black hover:bg-gray-900 text-white text-xs font-black rounded-full uppercase tracking-wider transition-all duration-200 shadow-md"
              >
                Inquire About Service
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
