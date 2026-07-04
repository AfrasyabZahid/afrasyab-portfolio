/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Briefcase, Award, GraduationCap } from 'lucide-react';
import { experience, education, achievement, personalInfo } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-white">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Main Dark Experience Panel */}
        <div className="relative bg-[#161616] text-white p-8 md:p-12 rounded-[2.5rem] overflow-hidden shadow-2xl mb-12">
          
          {/* Giant decorative watermark word */}
          <div className="absolute inset-0 select-none pointer-events-none z-0 flex items-center justify-center overflow-hidden">
            <span className="font-display font-black text-[12vw] tracking-tighter text-white/[0.02] uppercase whitespace-nowrap">
              EXPERIENCE
            </span>
          </div>

          {/* Header Row */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-8 mb-10">
            <div className="flex flex-col items-start">
              <span className="text-gray-400 text-xs font-mono tracking-widest uppercase mb-1">
                /EXPERIENCE
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight uppercase">
                Work History
              </h2>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono text-gray-300">
              {personalInfo.totalExperience}
            </div>
          </div>

          {/* Experience List */}
          <div className="relative z-10 flex flex-col gap-8">
            {experience.map((entry, idx) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="relative group grid grid-cols-1 md:grid-cols-12 gap-4 pb-8 border-b border-white/5 last:border-none last:pb-0"
              >
                {/* Company & Role */}
                <div className="md:col-span-8 flex flex-col items-start text-left pr-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-white tracking-tight">
                      {entry.company}
                    </span>
                    {entry.isCurrent && (
                      <span className="bg-[#10b981]/20 border border-[#10b981]/30 text-[#10b981] font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                    {entry.role}
                  </span>
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed max-w-xl text-left">
                    {entry.description}
                  </p>
                </div>

                {/* Duration / Date */}
                <div className="md:col-span-4 flex md:justify-end items-start pt-1 font-mono text-xs text-gray-500 md:text-right">
                  {entry.duration}
                </div>

                {/* Decorative Tilted Mockup overlaying on top entry hover (Desktop only) */}
                {idx === 0 && (
                  <div className="hidden lg:block absolute -right-4 -top-6 w-32 aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl rotate-6 transform translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-300 pointer-events-none z-20">
                    <img
                      src="/src/assets/images/service_mockup_1783101788841.jpg"
                      alt="Current role mini mockup"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Achievement Grid (Tasteful, professional, high-impact cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Education panel */}
          <div className="relative bg-white border border-gray-200/80 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            {/* Giant Background Watermark for Education */}
            <div className="absolute -right-6 -bottom-6 select-none pointer-events-none text-[8rem] font-display font-black text-gray-100/40 leading-none uppercase group-hover:text-gray-100 transition-colors duration-300">
              SWE
            </div>

            <div className="relative z-10 text-left">
              <span className="text-gray-400 text-[10px] font-mono tracking-widest uppercase mb-1 block">
                / ACADEMICS
              </span>
              <h3 className="font-display font-black text-xl text-gray-900 uppercase tracking-tight mb-6 flex items-center gap-2">
                <GraduationCap className="w-5.5 h-5.5 text-gray-800" />
                <span>Education</span>
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-bold text-gray-900 tracking-tight leading-snug">{education.degree}</h4>
                  <p className="text-xs font-medium text-gray-500 mt-1">{education.institution} • <span className="font-mono text-gray-400">{education.duration}</span></p>
                </div>

                {education.details && (
                  <div className="space-y-2 pt-2 border-t border-gray-100 max-w-[90%]">
                    {education.details.map((detail, idx) => (
                      <p key={idx} className="text-xs text-gray-600 leading-relaxed font-sans text-left">
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Achievement/Freelance panel */}
          <div className="relative bg-white border border-gray-200/80 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            {/* Giant Background Watermark for Freelance */}
            <div className="absolute -right-4 -bottom-6 select-none pointer-events-none text-[8rem] font-display font-black text-gray-100/40 leading-none group-hover:text-gray-100 transition-colors duration-300">
              10+
            </div>

            <div className="relative z-10 text-left">
              <span className="text-gray-400 text-[10px] font-mono tracking-widest uppercase mb-1 block">
                / GLOBAL CONTRACTS
              </span>
              <h3 className="font-display font-black text-xl text-gray-900 uppercase tracking-tight mb-6 flex items-center gap-2">
                <Award className="w-5.5 h-5.5 text-gray-800" />
                <span>Freelance Impact</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-bold text-gray-900 tracking-tight leading-snug">{achievement.title}</h4>
                  <p className="text-xs font-medium text-gray-500 mt-1">{achievement.issuer} • <span className="font-mono text-emerald-600 font-bold">{achievement.date}</span></p>
                </div>

                {achievement.details ? (
                  <div className="space-y-2 pt-2 border-t border-gray-100 max-w-[90%]">
                    {achievement.details.map((detail, idx) => (
                      <p key={idx} className="text-xs text-gray-600 leading-relaxed font-sans text-left">
                        {detail}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="pt-2 border-t border-gray-100 max-w-[90%]">
                    <p className="text-xs text-gray-600 leading-relaxed font-sans text-left">
                      {achievement.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
