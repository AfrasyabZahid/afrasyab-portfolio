/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, BookOpen, Clock, Tag, ExternalLink, Compass } from 'lucide-react';
import { ResearchArticle } from '../types';

interface ArticleDetailProps {
  article: ResearchArticle;
  onClose: () => void;
}

interface ArticleDeepDiveContent {
  introduction: string;
  keyInsights: string[];
  detailedWalkthrough: string;
  practicalTakeaways: string[];
  readingTime: string;
  category: string;
}

const articleDeepDives: Record<string, ArticleDeepDiveContent> = {
  'multi-agent-eval': {
    category: 'Multi-Agent Orchestration',
    readingTime: '8 min read',
    introduction: 'Building systems that utilize multiple autonomous AI agents requires a shift from standard sequential prompts to structured conversation graphs. In this write-up, we dissect how to build a coordinated network of 5 specialized agents to simulate a real-time job interview, complete with state validation, behavioral guardrails, and automated performance reporting.',
    keyInsights: [
      'State drift is the biggest challenge in multi-agent loops; explicitly bounded message histories are required.',
      'A master "Supervisor" node must manage candidate response times and conversational phase shifts.',
      'Asynchronous prompt context injection prevents LLMs from hallucinating old questions during dynamic conversation.',
      'Multi-agent scores correlate up to 92% with real human recruiting benchmarks when using robust, multi-dimensional rubrics.'
    ],
    detailedWalkthrough: 'The core architecture rests on a StateGraph where nodes represent agents and edges represent state transitions. The "Inquisitor" starts by asking a question based on a pre-parsed resume. The candidate\'s response triggers parallel evaluation: the "Evaluator" verifies technical soundness, while the "Behavior Specialist" analyzes soft skills like pacing and vocabulary complexity. The "Scorekeeper" aggregates these metrics into an active session state. Finally, the "Reporter" compiles the complete session log once the conversation reaches a terminal state, generating a clean HTML and PDF report.',
    practicalTakeaways: [
      'Define clear, single-responsibility roles for each agent to keep prompt lengths low and performance high.',
      'Implement structured outputs (e.g. JSON schemas) between internal nodes to guarantee state parsing safety.',
      'Use asynchronous task queues to run evaluation agents in parallel with active candidate input to reduce response times.'
    ]
  },
  'rag-embedding-opt': {
    category: 'RAG Architecture',
    readingTime: '6 min read',
    introduction: 'Retrieval-Augmented Generation (RAG) pipelines are often judged by their generation phase, but their actual limit is determined by retrieval accuracy. In this guide, we explore why default sliding-window chunking strategies fail when parsing dense, technical enterprise documentation, and walk through how to build a visual, semantic-boundary chunking solution.',
    keyInsights: [
      'Sliding windows split paragraphs arbitrarily, breaking cohesive mathematical or logical statements.',
      'Semantic chunking uses embedding distance between consecutive sentences to identify natural transitions.',
      'Multi-vector indexing allows you to store small, highly precise chunks for retrieval but pass larger semantic contexts to the generator.',
      'Adding cross-encoder re-ranking after vector retrieval improves domain-specific accuracy by over 20%.'
    ],
    detailedWalkthrough: 'To bypass fixed chunk sizes, we analyze the cosine similarity between the embeddings of adjacent sentences. When the similarity drops below a rolling percentile threshold, we split the document. This results in highly cohesive, variable-sized chunks. These chunks are then indexed in Pinecone using parent-child relationships: we index short summaries (child nodes) for rapid vector search matching but store the full semantic section (parent node) to feed into the LLM context. This provides the best of both worlds.',
    practicalTakeaways: [
      'Always use a cross-encoder to re-rank the top 20 retrieved chunks down to the top 5 for optimal accuracy.',
      'Incorporate metadata filters (e.g., product version, document section) directly into your vector search query to prune non-relevant sections.',
      'Pre-process dirty documents to remove page numbers, headers, and repeating footers before chunking.'
    ]
  },
  'vision-edge-pruning': {
    category: 'Edge AI & Optimization',
    readingTime: '10 min read',
    introduction: 'Deploying heavy Computer Vision models like YOLOv8 or customized tracking transformers to constrained, low-power edge nodes is an engineering bottleneck. This tech deep-dive breaks down structured tensor pruning, INT8 quantization, and container optimization strategies to run high-speed object tracking natively inside micro-second resource windows.',
    keyInsights: [
      'Structured pruning removes complete neural layers or channels, resulting in direct CPU/GPU acceleration without custom kernels.',
      'Converting model weights from FP32 to INT8 reduces memory consumption by 75% with minimal accuracy degradation.',
      'Alpine-based Docker layers must be heavily customized to support accelerated C++ compilation of OpenCV on edge hardware.',
      'Adaptive confidence thresholds prevent inference cascades when tracking high-velocity vehicles under varying illumination.'
    ],
    detailedWalkthrough: 'The pipeline begins with a custom-pruned PyTorch model compiled to ONNX. We execute TensorRT optimization scripts directly on the target hardware to generate localized inference engines. To optimize memory consumption further, video decoding is offloaded to a lightweight C++ module that bypasses high-overhead Python libraries, streaming raw frame arrays directly into the inference tensor. The entire application runs inside a lightweight Docker container with specialized driver integrations to access hardware acceleration arrays directly.',
    practicalTakeaways: [
      'Never run vanilla PyTorch models on edge devices; always export to specialized runtimes like TensorRT or ONNX.',
      'Initialize and warm up your inference runtime during container startup to avoid initial request latency spikes.',
      'Implement circular in-memory frame buffers to prevent disk-write bottlenecks during high-frame-rate tracking.'
    ]
  }
};

export default function ArticleDetail({ article, onClose }: ArticleDetailProps) {
  const deepDive: ArticleDeepDiveContent = articleDeepDives[article.id] || {
    category: 'Technical Article',
    readingTime: '5 min read',
    introduction: article.abstract,
    keyInsights: [
      'Optimizing standard API orchestration loops improves system reliability.',
      'Asynchronous task workers reduce frontend waiting times and system load.',
      'Decoupled business logic simplifies testing and feature integration.'
    ],
    detailedWalkthrough: 'This article outlines the deployment, integration, and engineering practices used to implement modular features. It details how we structured data flows, handled edge cases, and monitored production pipelines to ensure maximum availability and performance.',
    practicalTakeaways: [
      'Structure code cleanly to support horizontal scaling.',
      'Incorporate comprehensive metrics reporting for quick debugging.',
      'Keep client-side state tightly synchronized with backend endpoints.'
    ]
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
        {/* Detail Top Header Bar */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100 bg-white sticky top-0 z-25">
          {/* Back Button */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 hover:border-black text-xs font-bold text-gray-800 rounded-full transition-all duration-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Articles</span>
          </button>

          {/* Read Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 text-xs font-bold text-gray-800 rounded-full">
            <Clock className="w-4 h-4 text-gray-500" />
            <span>{deepDive.readingTime}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-10 md:p-14">
          <div className="max-w-4xl mx-auto">
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-black text-white text-[10px] font-mono font-black px-3 py-1 rounded-full uppercase tracking-wider">
                {deepDive.category}
              </span>
              <span className="text-gray-300">•</span>
              <span className="font-mono text-xs text-gray-400 font-bold">
                {article.date}
              </span>
              <span className="text-gray-300">•</span>
              <span className="bg-gray-100 text-gray-600 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md border border-gray-200/50">
                {article.publication}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-2xl sm:text-4xl text-gray-900 tracking-tight leading-tight uppercase mb-8">
              {article.title}
            </h1>

            {/* In-depth Introduction / Overview */}
            <div className="mb-12">
              <p className="font-sans text-base sm:text-lg text-gray-650 leading-relaxed font-medium italic border-l-4 border-black pl-5 py-2 text-justify">
                {deepDive.introduction}
              </p>
            </div>

            {/* Core Tech Stack Keywords */}
            <div className="flex flex-wrap items-center gap-2 mb-12">
              <span className="font-mono text-[10px] font-bold text-gray-400 tracking-widest uppercase mr-2">Keywords:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-50 text-gray-600 text-xs font-mono px-3 py-1 rounded-lg border border-gray-200"
                >
                  #{tag.toLowerCase().replace(/\s+/g, '')}
                </span>
              ))}
            </div>

            <div className="space-y-12">
              {/* 1. Key Insights / TL;DR */}
              <div className="bg-gray-50/70 border border-gray-200/70 rounded-2xl p-6 sm:p-8">
                <h3 className="font-display font-black text-lg text-gray-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-gray-500" />
                  <span>Key Insights & Findings</span>
                </h3>
                <ul className="space-y-3.5">
                  {deepDive.keyInsights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="font-mono text-xs font-black text-black shrink-0 mt-0.5">
                        [{String(idx + 1).padStart(2, '0')}]
                      </span>
                      <p className="font-sans text-sm text-gray-650 leading-relaxed text-justify">
                        {insight}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Detailed Tech Walkthrough */}
              <div>
                <h3 className="font-display font-black text-xl text-gray-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                  <BookOpen className="w-5.5 h-5.5 text-gray-400" />
                  <span>Technical Breakdowns & Implementation Details</span>
                </h3>
                <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                  {deepDive.detailedWalkthrough}
                </p>
              </div>

              {/* 3. Practical Developer Takeaways */}
              <div>
                <h3 className="font-display font-black text-xl text-gray-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                  <Tag className="w-5.5 h-5.5 text-gray-400" />
                  <span>Practical Engineering Best Practices</span>
                </h3>
                <div className="space-y-3">
                  {deepDive.practicalTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2.5"></span>
                      <p className="font-sans text-sm sm:text-base text-gray-650 leading-relaxed text-justify">
                        {takeaway}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Read on Medium Button */}
            {article.link && (
              <div className="mt-16 pt-10 border-t border-gray-100 flex justify-center">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-6 px-8 py-4 bg-[#161616] hover:bg-black text-white text-sm font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  <span className="inline-flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    Read Full Guide on Medium
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
