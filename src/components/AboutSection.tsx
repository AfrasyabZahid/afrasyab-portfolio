/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, ArrowDown } from 'lucide-react';

export default function AboutSection() {
  const [isPlaying] = useState(true);
  const [activeFrameIndex, setActiveFrameIndex] = useState(0);

  // The custom kinetic narrative scenes that auto-loop to simulate the elegant Veo kinetic text video
  const videoScenes = [
    {
      id: 1,
      title: 'INTRO // SCENE_01',
      mainText: 'HI, I AM AFRASYAB ZAHID',
      highlight: 'AFRASYAB ZAHID',
      subText: 'DESIGNING INTELLIGENT SYSTEMS',
      accentColor: 'text-gray-900',
    },
    {
      id: 2,
      title: 'CORE CORE // SCENE_02',
      mainText: 'I BUILD MULTI-AGENT AUTOMATION',
      highlight: 'MULTI-AGENT AUTOMATION',
      subText: 'REPLACING FRICTION WITH COHERENT PIPELINES',
      accentColor: 'text-gray-950',
    },
    {
      id: 3,
      title: 'KNOWLEDGE // SCENE_03',
      mainText: 'CUSTOM COGNITIVE RAG PIPELINES',
      highlight: 'RAG PIPELINES',
      subText: 'PINECONE • REDIS • LARGE LANGUAGE MODELS',
      accentColor: 'text-gray-900',
    },
    {
      id: 4,
      title: 'AUTOMATION // SCENE_04',
      mainText: 'WEB-SCALE HARVESTING & WORKFLOWS',
      highlight: 'HARVESTING & WORKFLOWS',
      subText: 'N8N • PLAYWRIGHT • ASYNCHRONOUS CELERY QUEUES',
      accentColor: 'text-gray-900',
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveFrameIndex((prev) => (prev + 1) % videoScenes.length);
    }, 4500); // Transitions every 4.5 seconds smoothly

    return () => clearInterval(interval);
  }, [isPlaying]);

  const scene = videoScenes[activeFrameIndex];

  return (
    <section id="about" className="relative pt-20 pb-12 bg-[#fafaf9] border-y border-gray-200/60 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] bg-[size:3rem_3rem] opacity-30 z-0"></div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gray-400 text-xs font-mono tracking-widest uppercase">
              / IDENTITY & COGNITION
            </span>
            <div className="w-8 h-px bg-gray-300"></div>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-none">
            Afrasyab <span className="font-serif italic font-normal text-gray-500">Zahid</span>
          </h2>
        </div>

        {/* Clean, Creative Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Premium Autoplay Kinetic Typographic Video Panel */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-6 text-left max-w-xl">
              <div>
                <h3 className="font-serif italic text-2xl md:text-3xl text-gray-900 leading-tight">
                  "Fusing high-performance backend automation with clean, intentional cognitive architectures."
                </h3>
              </div>
              
              <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                Based in Karachi, Pakistan, I am a systems engineer specializing in automated orchestration and advanced AI integrations. My work focuses on cutting out operational complexity—transforming manual, repetitive business structures into highly optimized, auto-scaling backend pipelines, custom RAG integrations, and autonomous multi-agent systems.
              </p>
            </div>
          </div>

          {/* RIGHT: Elegant Kinetic Typography Loop representing the custom "video" */}
          <div className="lg:col-span-6">
            {/* Simulated Screen Viewport */}
            <div className="relative aspect-video w-full rounded-[2rem] bg-black overflow-hidden flex flex-col items-center justify-center text-center px-6 md:px-10 border border-black/10 select-none shadow-2xl group">
              
              {/* Subtle Cinematic Grid/CRT overlays */}
              <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-0"></div>
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0"></div>

              {/* Main Video Frame Animation */}
              <div className="relative w-full h-full flex flex-col justify-center py-6 px-2 z-10 overflow-hidden">
                
                {/* High Contrast Kinetic Typography */}
                <div className="flex-grow flex flex-col justify-center items-center my-4 h-full relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={scene.id}
                      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-4 w-full"
                    >
                      {/* Kinetic Statement representing video narration text */}
                      <h4 className="font-display font-extrabold tracking-tight text-white leading-tight text-xl sm:text-2xl md:text-3xl">
                        {scene.mainText.split(' ').map((word, index) => {
                          const cleanHighlight = scene.highlight.split(' ');
                          const isWordHighlighted = cleanHighlight.includes(word.replace(/[^a-zA-Z]/g, ''));
                          return (
                            <span 
                              key={index} 
                              className={isWordHighlighted ? "text-gray-400" : "text-white"}
                            >
                              {word}{' '}
                            </span>
                          );
                        })}
                      </h4>

                      {/* Supporting Statement */}
                      <p className="font-mono text-[9px] sm:text-xs text-gray-400/85 tracking-[0.25em] font-medium uppercase">
                        {scene.subText}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
