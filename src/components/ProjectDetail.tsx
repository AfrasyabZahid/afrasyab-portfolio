/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Sparkles, AlertCircle, Cpu, HelpCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

interface DeepDiveContent {
  abstract: string;
  motivation: string;
  problemSolved: string;
  architecture: string;
}

// Incredibly detailed technical narratives for each project matching Afrasyab's domain expertise
const projectDeepDives: Record<string, DeepDiveContent> = {
  'intellihire': {
    abstract: 'IntelliHire is a cutting-edge oral interview simulator powered by an orchestrated multi-agent network. It mimics professional screening rounds by dynamically generating hyper-targeted questions based on the candidate\'s resume and live performance, evaluating both technical correctness and soft skills with zero human bias.',
    motivation: 'Traditional technical screening is notoriously slow and inconsistent. I created IntelliHire to demonstrate that agentic LLM orchestration can conduct high-fidelity, interactive, and adaptive technical conversations, providing recruiting teams with consistent evaluation benchmarks while saving hundreds of engineering hours.',
    problemSolved: 'The primary challenge was managing conversation flow and state without lagging or repetitive prompts. I solved this by designing a custom Directed Acyclic Graph (DAG) state manager using LangChain, where 5 specialized agents (Inquisitor, Evaluator, Behavior Specialist, Scorekeeper, and Reporter) hand off contexts asynchronously. I also built a dynamic confidence-adjustment loop that alters question complexity based on real-time response accuracy.',
    architecture: 'The system uses Python with an asynchronous FastAPI gateway to manage concurrent simulation sessions. LangChain coordinates state across GPT-4o and Gemini models. We integrated Pinecone for semantic vector caching of historical interview patterns, alongside WebSockets to maintain real-time bidirectional status updates for the simulation frontend.'
  },
  'agentic-rag': {
    abstract: 'AgenticRAG is an enterprise-grade Knowledge Base Assistant featuring proactive self-correction and iterative query refinement. Unlike basic semantic retrievers, this system critiques its own extracted information against original query constraints before drafting the final answer, eliminating hallucinations in high-stakes documentation searches.',
    motivation: 'I created this project to address the massive "precision decay" and high hallucination rate that standard RAG architectures suffer from when faced with ambiguous, multi-part, or nested data structures in technical manuals.',
    problemSolved: 'Standard top-k retrieval often fetches irrelevant chunks, diluting the LLM\'s generation context. To solve this, I implemented an agentic feedback loop: a Retriever Agent fetches initial nodes, an Evaluator Agent scores each chunk\'s relevance using cross-encoder models, and if the score falls below a threshold, a Query Rewriter Agent generates alternative embeddings until the information bottleneck is solved.',
    architecture: 'Built with Python and LangChain, utilizing Pinecone as the high-dimensional vector index. Raw data is processed using a custom semantic-boundary chunking algorithm with recursive character splitting. We incorporated localized LLM evaluation nodes to parallelize chunk screening before routing optimized prompts to the main generator.'
  },
  'palmnews': {
    abstract: 'PalmNews is a highly automated data aggregation and parsing engine that ingests, cleans, and indexes global news streams. It integrates an NLP-driven personalization layer to score incoming stories and curate bespoke feed digests for user profiles.',
    motivation: 'I was frustrated with algorithmic news sites that rely on pure clickbait or simple keywords. I wanted to build a completely local, privacy-first ingestion service that analyzes semantic topical patterns to understand actual underlying concepts and filter out redundant articles.',
    problemSolved: 'The biggest obstacle was the high noise-to-signal ratio and duplicate stories across different media. I solved this by creating an automated pipeline using Flask and Celery that clusters incoming articles in real-time using TF-IDF and Cosine Similarity. Identical stories are collapsed under a single master event, significantly reducing feed clutter.',
    architecture: 'Powered by Flask on the backend, Python for parsing scripts, and PostgreSQL for structured data storage. The pipeline integrates with 30+ external RSS and news APIs. It uses Redis as a background task message broker with Celery, enabling scheduled chron-like scraping loops every 15 minutes.'
  },
  'autoscrape-pro': {
    abstract: 'AutoScrape Pro is a robust, production-grade distributed web harvesting system designed to extract high-density web assets at scale. Operating across dynamic rotating proxy pools, it bypasses advanced bot protection filters to deliver fully normalized datasets.',
    motivation: 'I wanted to build a reliable web-scale scraper capable of running 24/7 without being blocked, handling common issues like dynamic SPAs, cloudflare blockers, and inconsistent JSON structures natively.',
    problemSolved: 'Web harvesting frequently breaks due to layout changes and IP throttling. I solved this by implementing a headless browser orchestration layer (using Playwright and BeautifulSoup) paired with a smart proxy rotating pool that randomizes user-agent headers, session lengths, and window sizes. I also integrated an automated schema migration utility that normalizes incoming unstructured data on the fly.',
    architecture: 'Constructed entirely in Python, using BeautifulSoup for XML/HTML parsing and PostgreSQL for relational table schema execution. The scraper tasks are fully containerized using Docker, allowing rapid deployment of additional crawler nodes inside a localized server cluster.'
  },
  'visionpulse': {
    abstract: 'VisionPulse is an ultra-low-latency real-time video analytics pipeline designed for computer vision tracking. The model is specifically optimized to track multiple simultaneous high-velocity objects on hardware-constrained edge nodes.',
    motivation: 'I created VisionPulse to explore deep-learning efficiency limits. Many computer vision pipelines are heavily reliant on powerful, power-hungry desktop GPUs. I wanted to prove that with the right weight pruning and inference pipelines, complex tracking can run natively on inexpensive, low-power edge nodes.',
    problemSolved: 'Standard object tracking models (like YOLOv8) suffer from high inference latency and memory bloat on small platforms. I solved this by applying structured tensor weight pruning and model quantization (converting floating-point weights to INT8 precision) which reduced the model footprint by 62% while keeping Multiple Object Tracking Accuracy (MOTA) at a high 94.2%.',
    architecture: 'Built using PyTorch and OpenCV. Model acceleration is achieved via NVIDIA TensorRT compilers inside highly optimized Docker containers. The pipeline accepts RTMP live streams, decodes frames in memory using a custom C++ wrapper, performs inference, and pushes transactional logs asynchronously to a centralized dashboard.'
  },
  'trading-grading': {
    abstract: 'Trading & Grading Solutions is a high-frequency financial analytics platform designed to aggregate, parse, and forecast exchange-level transaction logs. It features direct integration with MT5 and cryptocurrency exchange endpoints to deliver real-time quantitative dashboards.',
    motivation: 'I created this tool to automate quantitative research workflows, allowing me to instantly evaluate trade execution patterns, backtest strategy logs, and generate detailed ML-based predictive analytics on historical data.',
    problemSolved: 'Financial time-series data is incredibly high-frequency and noisy, causing database read bottlenecks and model training delays. I resolved this by utilizing Pandas for optimized vector computations and implementing a timescaled PostgreSQL hypertable to handle millions of transactions per second without latency degradation.',
    architecture: 'The system uses Python with Pandas, NumPy, and Scikit-Learn for quantitative analysis and modeling. Real-time connections are established through MT5 Python APIs and Secure WebSockets. Relational datasets are logged inside a PostgreSQL instance with optimized indexing for lightning-fast queries.'
  },
  'sentix': {
    abstract: 'Sentix Analysis is a highly scalable multilingual feedback analysis engine. Utilizing fine-tuned transformer architectures, it evaluates customer reviews across several distinct languages, flagging critical customer issues in real-time.',
    motivation: 'Many international companies struggle to parse localized customer feedback in real-time, resulting in delayed product support response times. I wanted to build a zero-shot, multi-language classifier that performs instant intent detection.',
    problemSolved: 'Machine translation introduces semantic distortion which ruins basic sentiment classifiers. To bypass this, I utilized a multilingual pre-trained transformer model (mBERT) and fine-tuned it on specialized domain-specific datasets. This allowed the engine to interpret idioms and nuanced complaints directly in their native languages without translating them first.',
    architecture: 'Built using Flask, PyTorch, and HuggingFace Transformers. Ingestion pipelines are managed via asynchronous Celery queues. Model inference is optimized through ONNX Runtime, converting the heavy PyTorch execution graph into a fast, compiled runtime binary.'
  },
  'syncflow': {
    abstract: 'SyncFlow Automation is a zero-latency no-code CRM automation bridge and background task orchestrator. It bridges enterprise CRM schemas, automated message loops, and real-time support channels through structured Celery queues.',
    motivation: 'I built SyncFlow to streamline business communication pipelines. Most off-the-shelf integration tools are expensive and introduce significant sync lag when handling complex conditional logic or massive batches of leads.',
    problemSolved: 'The core challenge was preventing system crashes when external CRM APIs rate-limited our sync loops. I solved this by implementing an exponential-backoff retry mechanism inside Celery, routing failed actions to a specialized DLQ (Dead Letter Queue) for automated self-healing.',
    architecture: 'The backend is built with Python and n8n as the workflow designer. Task queuing is managed by Celery with Redis as the in-memory data store. We used Docker Compose to configure local replicas of the message brokers, ensuring seamless horizontal scaling during high-traffic intervals.'
  },
  'querycast': {
    abstract: 'QueryCast is an AI-powered database monitoring and load-forecasting system. It analyzes query execution logs to predict performance bottlenecks, dynamically proposing indexing solutions and schema updates.',
    motivation: 'I created QueryCast because manual database query tuning is a repetitive, tedious process. I wanted to build a diagnostic tool that continuously reads query plans and automatically forecasts when database resources will peak.',
    problemSolved: 'Analyzing raw SQL logs programmatically is difficult due to variable formatting and dynamic parameters. I solved this by building an SQL parser that extracts the query\'s abstract syntax tree (AST). We then feed AST representations and execution time series into an LSTM forecasting model to identify long-term resource bottlenecks.',
    architecture: 'The analytics backend is written in Python using SQLGlot and PyTorch. The agent integrates with PostgreSQL performance schemas (`pg_stat_statements`). The real-time dashboard is rendered using a streamlined web stack that visualizes forecasted transactional stress and recommended database indexes.'
  }
};

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  // Retrieve custom or fall-back deep-dive content
  const deepDive: DeepDiveContent = projectDeepDives[project.id] || {
    abstract: project.description,
    motivation: 'Created as a modular high-performance application exploring robust integrations, efficient backend architectures, and custom workflows tailored to solve complex engineering challenges.',
    problemSolved: 'Managing inconsistent input types, handling external rate limitations, and designing modular data pipelines. Resolved using optimized libraries, asynchronous task handling, and highly reliable database systems.',
    architecture: `Built primarily using ${project.tags.join(', ')}. The system is fully modular, featuring high-speed API endpoints, clean decoupling of business logic, and custom caching layers to guarantee low latency.`
  };

  // Generate initials for tools icons
  const getToolInitials = (tool: string) => {
    const clean = tool.toLowerCase();
    if (clean === 'python') return 'Py';
    if (clean === 'sql' || clean === 'postgresql') return 'Sq';
    if (clean === 'docker') return 'Dk';
    if (clean === 'langchain') return 'Lc';
    if (clean === 'pinecone') return 'Pc';
    if (clean === 'flask') return 'Fl';
    if (clean === 'n8n') return 'N8';
    if (clean === 'celery') return 'Cy';
    if (clean === 'redis') return 'Rd';
    if (clean === 'llms' || clean === 'llm') return 'Ai';
    if (clean === 'pytorch') return 'Pt';
    if (clean === 'pandas') return 'Pd';
    if (clean === 'transformers') return 'Tf';
    return tool.substring(0, 2);
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
        className="w-full max-w-6xl bg-white rounded-[32px] border border-gray-200/80 shadow-2xl overflow-hidden relative z-10 cursor-default"
      >
        {/* Detail Top Header Bar */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100 bg-white sticky top-0 z-25">
          {/* Back Button */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 hover:border-black text-xs font-bold text-gray-800 rounded-full transition-all duration-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Works</span>
          </button>

          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 text-xs font-bold text-gray-800 rounded-full">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>Available for New Projects</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-10 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Project Info, description, and high-fidelity deep dives */}
            <div className="lg:col-span-8 text-left">
              {/* Category and Subtitle Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-gray-200">
                  {project.category}
                </span>
                <span className="bg-gray-50 text-gray-600 text-xs font-medium px-3.5 py-1.5 rounded-full border border-gray-150">
                  {project.date}
                </span>
              </div>

              {/* Title with decorative Slash */}
              <h1 className="font-display font-black text-3xl sm:text-5xl text-gray-900 tracking-tight leading-tight uppercase mb-2">
                {project.title} <span className="text-gray-300 font-light">/Real Project</span>
              </h1>

              {/* Subtitle / Focus Statement */}
              <p className="text-sm font-mono font-bold text-gray-400 uppercase tracking-widest mb-6">
                {project.subtitle}
              </p>

              {/* Description body */}
              <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mb-10 text-justify">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-14">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between gap-6 px-6 py-3.5 bg-[#161616] hover:bg-black text-white text-sm font-bold rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <span>View Repository</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-300" />
                  </a>
                )}
                
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 350);
                  }}
                  className="px-6 py-3.5 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-800 hover:text-black text-sm font-bold rounded-full transition-all duration-200"
                >
                  Contact Me
                </a>
              </div>

              {/* Structured Deep Dive narratives */}
              <div className="border-t border-gray-100 pt-10 space-y-12">
                {/* 1. Abstract */}
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-gray-900 uppercase tracking-tight mb-3.5 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-gray-400 shrink-0" />
                    <span>Abstract & Core Vision</span>
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-gray-650 leading-relaxed text-justify">
                    {deepDive.abstract}
                  </p>
                </div>

                {/* 2. Why I Created This */}
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-gray-900 uppercase tracking-tight mb-3.5 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-gray-400 shrink-0" />
                    <span>Why I Created This</span>
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-gray-650 leading-relaxed text-justify">
                    {deepDive.motivation}
                  </p>
                </div>

                {/* 3. Problem I Solved */}
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-gray-900 uppercase tracking-tight mb-3.5 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-gray-400 shrink-0" />
                    <span>Problem Solved & Core Engineering Challenges</span>
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-gray-650 leading-relaxed text-justify">
                    {deepDive.problemSolved}
                  </p>
                </div>

                {/* 4. Technologies & Architecture */}
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-gray-900 uppercase tracking-tight mb-3.5 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-gray-400 shrink-0" />
                    <span>System Architecture & Technologies</span>
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-gray-650 leading-relaxed text-justify">
                    {deepDive.architecture}
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Right-aligned metadata sidebar */}
            <div className="lg:col-span-4 bg-gray-50 border border-gray-200/60 rounded-2xl p-6 sm:p-8 text-left space-y-8 lg:sticky lg:top-28">
              {/* Service Attribute */}
              <div>
                <span className="block font-mono text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1.5">
                  Service
                </span>
                <p className="font-display font-bold text-lg text-gray-900">
                  {project.service || 'AI & Full-Stack Engineering'}
                </p>
              </div>

              {/* Timeline Attribute */}
              <div>
                <span className="block font-mono text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">
                  Timeline
                </span>
                <p className="font-display font-black text-3xl text-gray-900">
                  {project.timeline || '4 Weeks'}
                </p>
              </div>

              {/* Tools circles */}
              <div>
                <span className="block font-mono text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-3">
                  Tools
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  {(project.tools || project.tags).map((tool) => (
                    <div
                      key={tool}
                      className="group/tool relative w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center font-mono text-xs font-extrabold text-gray-700 shadow-2xs hover:border-black hover:text-black transition-all cursor-default"
                      title={tool}
                    >
                      {getToolInitials(tool)}
                      
                      {/* Tooltip */}
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[9px] font-mono rounded opacity-0 pointer-events-none group-hover/tool:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Full-width Image Mockup section */}
          <div className="mt-16 border-t border-gray-100 pt-12">
            <span className="block text-left font-mono text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-4">
              / Mockup & Interface Preview
            </span>
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 shadow-md">
              <img
                src={project.image}
                alt={`${project.title} Interface Preview`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-[1.02]"
              />
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}
