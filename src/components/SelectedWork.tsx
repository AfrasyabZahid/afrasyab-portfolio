/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

interface SelectedWorkProps {
  onSelectProject?: (project: Project) => void;
}

export default function SelectedWork({ onSelectProject }: SelectedWorkProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'AI/ML' | 'Automation' | 'Data/ML'>('All');

  const categories: ('All' | 'AI/ML' | 'Automation' | 'Data/ML')[] = ['All', 'AI/ML', 'Automation', 'Data/ML'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="relative pt-16 pb-24 bg-white overflow-hidden border-b border-gray-100">
      {/* Ghosted "PORTFOLIO" Watermark */}
      <div className="absolute top-10 left-10 right-0 select-none pointer-events-none z-0">
        <span className="font-display font-black text-[15vw] leading-none text-gray-900/[0.03] tracking-tighter uppercase block">
          PORTFOLIO
        </span>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header Label */}
        <div className="mb-12 flex flex-col items-start">
          <span className="text-gray-400 text-xs font-mono tracking-widest uppercase mb-1">
            /SELECTED WORK
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            Featured Projects
          </h2>
        </div>

        {/* Filters and CTA Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-[#161616] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View All Work Button */}
          <a
            href="https://github.com/afrasyabzahid"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 px-5 py-2.5 bg-gray-100 hover:bg-[#161616] text-gray-800 hover:text-white text-xs font-semibold rounded-full transition-all duration-300 shadow-xs"
          >
            View All Work
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

// Responsive Grid
        <motion.div 
          key={activeCategory}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    damping: 25,
                    stiffness: 220,
                  },
                },
              }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="group flex flex-col"
            >
              {/* Card Image Wrapper */}
              <div 
                onClick={() => onSelectProject?.(project)}
                className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 mb-4 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 filter contrast-[1.02]"
                />
                
                {/* Floating Overlay Hover Circle Button */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Top-Right Badge (Optional category/meta) */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-mono font-medium text-gray-800 border border-gray-100 shadow-2xs">
                  {project.date}
                </div>
              </div>

              {/* Title and Info */}
              <div className="flex flex-col items-start px-1">
                <h3 
                  onClick={() => onSelectProject?.(project)}
                  className="font-display font-bold text-lg text-gray-900 group-hover:text-black transition-colors mb-1 flex items-center gap-1 cursor-pointer hover:underline decoration-1 underline-offset-2"
                >
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium mb-3 italic">
                  {project.subtitle}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags row */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-gray-100 text-[10px] font-mono font-bold text-gray-800 border border-gray-150">
                    {project.category}
                  </span>
                  {project.tags.slice(1).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-gray-50 text-[10px] font-mono text-gray-500 border border-gray-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
