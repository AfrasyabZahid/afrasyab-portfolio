/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight, Linkedin, Github, Mail, Download } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] pt-28 pb-12 flex flex-col justify-between overflow-hidden bg-cloud-backdrop">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex-grow flex flex-col justify-center">
        {/* Name and Portrait Area */}
        <div className="relative w-full flex flex-col items-center justify-center mt-4 mb-4 py-4">
          {/* Huge Name Background with Cutout Portrait */}
          <div className="relative w-full flex flex-col lg:block items-center justify-center select-none">
            {/* The Huge Text wrapper */}
            <h1 className="w-full text-center font-display font-extrabold tracking-tighter uppercase leading-[0.8] flex flex-col lg:flex-row items-center justify-center gap-x-6 gap-y-2 z-10">
              {/* First Name (Outline) */}
              <span className="text-stroke-black text-[12vw] sm:text-[9vw] lg:text-[10vw] block">
                {personalInfo.firstName}
              </span>
              
              {/* Second Name (Solid) */}
              <span className="text-black text-[12vw] sm:text-[9vw] lg:text-[10vw] block">
                {personalInfo.lastName}
              </span>
            </h1>

            {/* Grayscale Portrait Cutout */}
            <div className="relative lg:absolute lg:top-[48%] lg:left-1/2 lg:-translate-x-1/2 translate-y-0 lg:translate-y-[12%] w-[240px] sm:w-[280px] md:w-[320px] lg:w-[480px] h-[240px] sm:h-[280px] md:h-[320px] lg:h-[540px] pointer-events-none z-20 flex items-end justify-center overflow-visible mix-blend-multiply mt-6 lg:mt-0" style={{ mixBlendMode: 'multiply' }}>
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                src={personalInfo.portraitUrl}
                alt={personalInfo.name}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-full object-contain filter grayscale contrast-[1.1] mix-blend-multiply hover:grayscale-0 hover:contrast-[1.05] transition-all duration-500 ease-out cursor-pointer pointer-events-auto"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </div>
        </div>

        {/* Hero Bottom Meta Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full mt-10 lg:mt-6 z-30">
          {/* Left Column: Role & CTA */}
          <div className="md:col-span-7 lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-gray-400 text-xs font-mono tracking-widest uppercase mb-2">
              /ABOUT ME
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 leading-tight mb-3">
              {personalInfo.title}
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed max-w-md mb-6">
              {personalInfo.about}
            </p>
            <a
              href="#contact"
              className="bg-[#161616] hover:bg-black text-white text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-[1.03] group shadow-sm"
            >
              Let's collaborate
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>

          {/* Center Space spacing */}
          <div className="hidden lg:block lg:col-span-3"></div>

          {/* Right Column: Vertically stacked Social Pills */}
          <div className="md:col-span-5 lg:col-span-3 flex flex-col md:items-end gap-3 w-full sm:w-auto">
            <span className="text-gray-400 text-xs font-mono tracking-widest uppercase mb-1 md:text-right w-full">
              /CONNECT
            </span>
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-48 bg-white/70 hover:bg-white border border-gray-200 hover:border-black/30 rounded-full py-2.5 px-4 flex items-center justify-between text-xs font-medium text-gray-800 transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <span className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-gray-500" />
                LinkedIn
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-48 bg-white/70 hover:bg-white border border-gray-200 hover:border-black/30 rounded-full py-2.5 px-4 flex items-center justify-between text-xs font-medium text-gray-800 transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <span className="flex items-center gap-2">
                <Github className="w-4 h-4 text-gray-500" />
                GitHub
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full md:w-48 bg-white/70 hover:bg-white border border-gray-200 hover:border-black/30 rounded-full py-2.5 px-4 flex items-center justify-between text-xs font-medium text-gray-800 transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                Email Me
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
            </a>

            <a
              href="/resume.pdf"
              download="Afrasyab_Zahid_Resume.pdf"
              className="w-full md:w-48 bg-black hover:bg-gray-900 border border-transparent rounded-full py-2.5 px-4 flex items-center justify-between text-xs font-semibold text-white transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 text-gray-300" />
                Resume
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
