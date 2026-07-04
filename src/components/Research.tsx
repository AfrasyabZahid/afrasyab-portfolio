/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, BookOpen, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { researchArticles } from '../data';
import { ResearchArticle } from '../types';

interface ResearchProps {
  onSelectArticle?: (article: ResearchArticle) => void;
}

export default function Research({ onSelectArticle }: ResearchProps) {
  return (
    <section id="research" className="relative py-28 bg-white border-b border-gray-100 overflow-hidden">
      {/* Structural visual grid lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 select-none pointer-events-none z-0 opacity-30">
        <div className="absolute inset-y-0 left-12 w-[1px] bg-gray-100 hidden md:block"></div>
        <div className="absolute inset-y-0 right-12 w-[1px] bg-gray-100 hidden md:block"></div>
        <div className="absolute top-24 left-0 right-0 h-[1px] bg-gray-100 hidden md:block"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-gray-400 text-xs font-mono tracking-widest uppercase mb-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
            / ARTICLES & DEEP-DIVES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-gray-900 tracking-tight uppercase mt-2">
            Technical Write-ups
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-500 mt-4 leading-relaxed">
            Practical guides and architecture breakdowns sharing deep insights on building autonomous agent systems, optimizing production RAG pipelines, and deploying edge AI configurations.
          </p>
        </div>

        {/* 3-Column Elegant Bento Cards */}
        <motion.div 
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
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {researchArticles.map((article, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={article.id}
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
                onClick={() => onSelectArticle?.(article)}
                className="group relative bg-gray-50/50 hover:bg-white border border-gray-200/80 hover:border-black/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-gray-100 cursor-pointer"
              >
                {/* Large Serial Number */}
                <div className="absolute top-6 right-6 font-mono text-5xl font-black text-gray-200/60 group-hover:text-black/5 transition-colors duration-300 select-none">
                  {formattedIndex}
                </div>

                {/* Main Content Area */}
                <div className="flex-grow text-left relative z-10 pr-12">
                  {/* Category and Date Badge */}
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="font-mono text-[10px] font-bold text-gray-400 tracking-wider">
                      {article.date}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
                    <span className="bg-gray-100 text-gray-600 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md border border-gray-200/50">
                      {article.publication}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-gray-900 leading-snug mb-4 group-hover:text-black group-hover:underline decoration-1 underline-offset-4 transition-colors duration-200">
                    {article.title}
                  </h3>

                  {/* Summary Abstract */}
                  <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed mb-6 group-hover:text-gray-600 transition-colors duration-200">
                    {article.abstract}
                  </p>
                </div>

                {/* Footer Section */}
                <div className="mt-6 pt-6 border-t border-gray-200/60 flex flex-col gap-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white group-hover:bg-gray-50 text-gray-500 text-[10px] font-mono px-2 py-0.5 rounded-md border border-gray-200 transition-colors"
                      >
                        #{tag.toLowerCase().replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>

                  {/* Medium CTA */}
                  {article.link && (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-white border border-gray-200 hover:border-black text-gray-800 hover:text-black text-xs font-bold rounded-xl shadow-xs transition-all duration-200 group-hover:bg-gray-50"
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-gray-400 group-hover:text-black" />
                        Read Article
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-black transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
