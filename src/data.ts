/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service, ExperienceEntry, EducationEntry, AchievementEntry, ResearchArticle } from './types';

export const personalInfo = {
  name: 'Afrasyab Zahid',
  firstName: 'AFRASYAB',
  lastName: 'ZAHID',
  title: 'AI & Automation Engineer',
  location: 'Karachi, Pakistan',
  email: 'afrasyab037@gmail.com',
  phone: '+92 309 9924674',
  linkedin: 'https://linkedin.com/in/afrasyabzahid1/',
  github: 'https://github.com/afrasyabzahid', // Flagged for customization
  portraitUrl: '/src/assets/images/portrait_placeholder_1783101707033.jpg',
  about: 'AI & Automation Engineer building resilient systems, autonomous agentic workflows, and self-optimizing pipelines.',
  totalExperience: '3+ years of experience',
  skills: [
    'Python', 'SQL', 'Flask', 'REST APIs', 'Docker', 
    'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 
    'LLMs', 'RAG', 'Agentic AI', 'LangChain', 'n8n'
  ]
};

export const projects: Project[] = [
  {
    id: 'intellihire',
    title: 'IntelliHire',
    subtitle: 'AI-Powered Interview Simulation Platform',
    description: 'Multi-agent agentic AI system using LLMs to simulate role-specific interview sessions with dynamic question generation and audio/video support. 5 specialized AI agents autonomously evaluate responses and generate structured performance reports.',
    image: '/src/assets/images/intellihire_mockup_1783101729198.jpg',
    tags: ['AI/ML', 'Agentic AI', 'RAG'],
    category: 'AI/ML',
    date: 'March 2026',
    timeline: '4 Weeks',
    service: 'AI & Agentic Systems, NLP Engine',
    tools: ['Python', 'LLMs', 'LangChain', 'OpenCV'],
    liveUrl: 'https://github.com/afrasyabzahid/intellihire'
  },
  {
    id: 'agentic-rag',
    title: 'AgenticRAG',
    subtitle: 'Autonomous Knowledge Base Assistant',
    description: 'Advanced RAG assistant with self-correction capabilities. Uses agentic loops, custom document embedding/chunking algorithms, and dynamic vector database retrievers with Pinecone to answer sophisticated domain-specific queries.',
    image: '/src/assets/images/agentic_rag_mockup_1783104910924.jpg',
    tags: ['AI/ML', 'RAG', 'LangChain', 'LLMs'],
    category: 'AI/ML',
    date: 'January 2026',
    timeline: '3 Weeks',
    service: 'RAG Pipeline, Vector Databases',
    tools: ['Pinecone', 'Python', 'LangChain', 'LLMs'],
    liveUrl: 'https://github.com/afrasyabzahid/agentic-rag'
  },
  {
    id: 'palmnews',
    title: 'PalmNews',
    subtitle: 'Real-Time News Aggregation Platform',
    description: 'Automated data pipeline integrating 30+ global news sources via REST APIs, with an NLP-based personalization engine tailoring article feeds to individual user interests.',
    image: '/src/assets/images/palmnews_mockup_1783101749771.jpg',
    tags: ['Automation', 'NLP', 'APIs'],
    category: 'Automation',
    date: 'December 2025',
    timeline: '2 Weeks',
    service: 'API Pipelines, NLP Personalization',
    tools: ['Python', 'REST APIs', 'Flask'],
    liveUrl: 'https://github.com/afrasyabzahid/palmnews'
  },
  {
    id: 'autoscrape-pro',
    title: 'AutoScrape Pro',
    subtitle: 'Distributed Web Harvesting System',
    description: 'High-performance structured web scrapers operating over distributed proxy networks. Extracted, cleaned, and compiled millions of raw web points into normalized relational tables inside PostgreSQL.',
    image: '/src/assets/images/autoscrape_mockup_1783104931950.jpg',
    tags: ['Automation', 'Scraping', 'Python', 'SQL'],
    category: 'Automation',
    date: 'October 2025',
    timeline: '5 Weeks',
    service: 'Data Harvesting, Database Normalization',
    tools: ['Python', 'PostgreSQL', 'Docker', 'BeautifulSoup'],
    liveUrl: 'https://github.com/afrasyabzahid/autoscrape-pro'
  },
  {
    id: 'visionpulse',
    title: 'VisionPulse',
    subtitle: 'Real-Time Video Analytics Pipeline',
    description: 'Deep-learning object tracking pipeline detecting, categorizing, and logging object movements inside live surveillance feeds. Highly optimized for memory constraints using custom model pruning and Docker containerization.',
    image: '/src/assets/images/visionpulse_mockup_1783104946265.jpg',
    tags: ['AI/ML', 'Computer Vision', 'Docker', 'ML'],
    category: 'AI/ML',
    date: 'August 2025',
    timeline: '4 Weeks',
    service: 'Computer Vision, Edge Inference',
    tools: ['Docker', 'YOLOv8', 'Python', 'PyTorch'],
    liveUrl: 'https://github.com/afrasyabzahid/visionpulse'
  },
  {
    id: 'trading-grading',
    title: 'Trading & Grading Solutions',
    subtitle: 'Trading Analytics Platform',
    description: 'Automated trading analytics system with MT5 and multi-exchange API integration for real-time trade data processing, ML-based forecasting, and automated reporting.',
    image: '/src/assets/images/trading_mockup_1783101769595.jpg',
    tags: ['Automation', 'Data/ML', 'Finance'],
    category: 'Data/ML',
    date: 'June 2025',
    timeline: '6 Weeks',
    service: 'Financial Automation, API Integration',
    tools: ['Python', 'REST APIs', 'SQL', 'Pandas'],
    liveUrl: 'https://github.com/afrasyabzahid/trading-grading'
  },
  {
    id: 'sentix',
    title: 'Sentix Analysis',
    subtitle: 'Multilingual Feedback Analysis Engine',
    description: 'NLP sentiment classifier evaluating user reviews across multiple languages. Utilized pretrained transformer models and fine-tuning on domain-specific datasets to flag negative ratings instantly.',
    image: '/src/assets/images/sentix_mockup_1783104963491.jpg',
    tags: ['AI/ML', 'NLP', 'Transformers', 'Flask'],
    category: 'AI/ML',
    date: 'April 2025',
    timeline: '3 Weeks',
    service: 'NLP Sentiment Classification',
    tools: ['Flask', 'Transformers', 'NLP', 'PyTorch'],
    liveUrl: 'https://github.com/afrasyabzahid/sentix'
  },
  {
    id: 'syncflow',
    title: 'SyncFlow Automation',
    subtitle: 'No-Code CRM Automation Bridge',
    description: 'Designed a highly scalable background bridge trigger for automated notifications, customer alerts, and lead integrations. Synchronizes 20+ daily workflows with zero downtime using Celery queues.',
    image: '/src/assets/images/syncflow_mockup_1783104976639.jpg',
    tags: ['Automation', 'APIs', 'n8n', 'Python'],
    category: 'Automation',
    date: 'February 2025',
    timeline: '3 Weeks',
    service: 'Workflows & Integration, Background Queues',
    tools: ['n8n', 'Python', 'Celery', 'Redis'],
    liveUrl: 'https://github.com/afrasyabzahid/syncflow'
  },
  {
    id: 'querycast',
    title: 'QueryCast',
    subtitle: 'Predictive SQL Database Analytics',
    description: 'Predictive modeling engine forecasting transactional load and identifying bottleneck patterns within complex SQL structures. Automated optimization recommendations directly into dev pipelines.',
    image: '/src/assets/images/querycast_mockup_1783104990682.jpg',
    tags: ['Data/ML', 'SQL', 'Forecasting', 'ML'],
    category: 'Data/ML',
    date: 'November 2024',
    timeline: '4 Weeks',
    service: 'Database Optimization, Forecasting Models',
    tools: ['SQL', 'Machine Learning', 'Python', 'PostgreSQL'],
    liveUrl: 'https://github.com/afrasyabzahid/querycast'
  }
];

export const services: Service[] = [
  {
    id: 'ai-agents',
    title: 'AI & AGENTIC SYSTEMS',
    description: 'Designing and building multi-agent LLM systems, RAG pipelines, and autonomous agents for real-world tasks.',
    subtitle: 'Multi-Agent Orchestration & Enterprise RAG',
    detailedIntro: 'Building coordinated networks of multiple language models that handle complex tasks step-by-step. By structuring workflows into flexible state-based routines, the system can self-correct and maintain focus over long conversations.',
    solutions: [
      'Autonomous multi-agent conversation & interview simulators',
      'Contextualized Retrieval-Augmented Generation (RAG) with proactive self-correction',
      'Adaptive prompt orchestration using state graphs and LangChain',
      'Local & cloud-based semantic vector caching with Pinecone integration'
    ],
    techStack: ['Python', 'LangChain', 'OpenAI API', 'Gemini SDK', 'Pinecone', 'FastAPI', 'WebSockets']
  },
  {
    id: 'automation',
    title: 'AUTOMATION & WORKFLOWS',
    description: 'Building end-to-end automation pipelines with Python, n8n, LangChain, and Celery.',
    subtitle: 'Intelligent Process Automation & Background Workers',
    detailedIntro: 'Setting up background worker queues and automated CRM triggers that handle long-running operations. This keeps web requests fast and connects different services so you don\'t have to sync data manually.',
    solutions: [
      'Robust distributed work queues with Celery and Redis backend integration',
      'Custom CRM integrations and no-code workflow designs via n8n',
      'Exponential backoff schedules and automated dead-letter queue (DLQ) recovery',
      'Scheduled cron jobs, webhooks, and multi-service message routing'
    ],
    techStack: ['Python', 'n8n', 'Celery', 'Redis', 'Docker Compose', 'REST APIs', 'PostgreSQL']
  },
  {
    id: 'scraping',
    title: 'DATA & WEB SCRAPING',
    description: 'Structured data extraction and pipeline engineering using BeautifulSoup, Selenium, and custom scrapers.',
    subtitle: 'Web-Scale Data Harvesting & Anti-Bot Bypassing',
    detailedIntro: 'Creating reliable web scraping tools that navigate complex, JavaScript-heavy sites and layout changes to gather clean, structured data automatically.',
    solutions: [
      'Distributed web scrapers executing headless browser orchestration',
      'Smart proxy pool rotators with dynamic user-agent and session randomizers',
      'Robust structured data parsers returning clean, normalized schemas',
      'Automatic schema migration pipelines storing data in relational architectures'
    ],
    techStack: ['Python', 'BeautifulSoup', 'Playwright', 'Selenium', 'PostgreSQL', 'Docker', 'XPath']
  },
  {
    id: 'apis',
    title: 'API & BACKEND DEVELOPMENT',
    description: 'REST API design and backend systems using Flask, Docker, and Postman-tested integrations.',
    subtitle: 'High-Performance Microservices & Secure Integration',
    detailedIntro: 'Designing clean, modular REST and WebSocket APIs that handle requests quickly and securely. I focus on writing clear server-side code, solid database structures, and thorough endpoint verification.',
    solutions: [
      'Asynchronous microservices utilizing FastAPI or Flask frameworks',
      'Relational and time-series database design with optimized indexing',
      'Containerized deployment architectures using Docker environments',
      'Secure API proxy layers concealing sensitive credentials and tokens'
    ],
    techStack: ['Flask', 'FastAPI', 'Docker', 'PostgreSQL', 'SQLAlchemy', 'Postman', 'Nginx']
  },
  {
    id: 'nlp-cv',
    title: 'NLP & COMPUTER VISION',
    description: 'Applied NLP and computer vision solutions using transformer models, OpenAI APIs, and Hugging Face.',
    subtitle: 'Fine-Tuned NLP Classifiers & Real-Time Tracking',
    detailedIntro: 'Fine-tuning text classification models and setting up real-time computer vision tracking. I work on selecting the right pre-trained models and adjusting them so they run efficiently without requiring heavy hardware resources.',
    solutions: [
      'Multilingual sentiment classifiers and text intent detectors fine-tuned on custom domains',
      'Real-time multi-object tracking pipelines using PyTorch and OpenCV',
      'Structured neural network pruning and INT8 model quantization',
      'Hugging Face transformer integration and zero-shot inference pipelines'
    ],
    techStack: ['PyTorch', 'OpenCV', 'TensorRT', 'Hugging Face', 'ONNX Runtime', 'Transformers', 'mBERT']
  }
];

export const experience: ExperienceEntry[] = [
  {
    id: 'freelance',
    company: 'Freelance AI & Automation Developer',
    role: 'Self-employed',
    duration: 'Feb 2023 – Present',
    description: 'Architected and deployed 10+ production-ready systems integrating advanced LLMs, multi-agent orchestrations, and web-scale automated scraping engines. Owned end-to-end cycles from scoping to cloud deployment with pristine client retention.',
    isCurrent: true
  },
  {
    id: 'xplorix',
    company: 'AI Engineer Intern',
    role: 'XplorixSolutions',
    duration: 'Nov 2025 – Apr 2026',
    description: 'Engineered robust Python automation scripts and high-throughput REST APIs for enterprise-grade AI pipelines. Conducted rigorous model validation, automated complex data preprocessing stages, and optimized pipeline inference speeds.'
  },
  {
    id: 'skilltech',
    company: 'AI & Automation Intern',
    role: 'SkilltechSol',
    duration: 'May 2025 – Jul 2025',
    description: 'Built optimized Natural Language Processing preprocessing pipelines and customized data parsers. Spearheaded custom workflow automation with Flask and REST APIs, eliminating manual operational friction.'
  }
];

export const education: EducationEntry = {
  degree: 'B.S. Software Engineering',
  institution: 'Bahria University',
  duration: '2022 – 2026',
  details: [
    'Graduated with a Bachelor of Science in Software Engineering, building a rigorous foundation in computational theory, systems engineering, and design patterns.',
    'Specialized in building modern distributed systems, autonomous multi-agent pipelines, and low-latency database architectures.'
  ]
};

export const achievement: AchievementEntry = {
  title: 'Freelance AI Engineer',
  issuer: 'Independent Client Networks',
  date: 'Ongoing',
  description: 'Deployed 10+ production-grade AI models, RAG systems, and data aggregators with flawless client retention.',
  details: [
    'Architecting bespoke, high-performance cognitive microservices and custom vector database embeddings tailored for dynamic business needs.',
    'Delivered over ten robust production-ready solutions, maintaining strict operational efficiency, zero-downtime reliability, and clean integration.'
  ]
};

export const researchArticles: ResearchArticle[] = [
  {
    id: 'multi-agent-eval',
    title: 'Building an Autonomous Multi-Agent Orchestration Engine for AI Interview Simulation',
    publication: 'Medium Publication',
    date: 'May 2026',
    abstract: 'A step-by-step breakdown on designing a coordinated graph of 5 specific LLM agents. Explains how to handle conversational state, orchestrate behavior with custom dynamic prompt constraints, and build a reliable scoring engine that evaluates user answers programmatically.',
    tags: ['Multi-Agent Systems', 'Orchestration Graphs', 'AI Engineering'],
    link: 'https://medium.com'
  },
  {
    id: 'rag-embedding-opt',
    title: 'Visual Guide to Contextualized Chunking Strategies in Production RAG Pipelines',
    publication: 'Medium Publication',
    date: 'February 2026',
    abstract: 'Explores how default sliding window overlaps fail when working with dense enterprise documentation. We walk through semantic-boundary chunking algorithms, multi-vector retrieval strategies, and evaluate retriever accuracy improvements.',
    tags: ['RAG Systems', 'Vector Databases', 'Semantic Chunking'],
    link: 'https://medium.com'
  },
  {
    id: 'vision-edge-pruning',
    title: 'Deploying Real-Time Object Tracking Models to Resource-Constrained Edge Hardware',
    publication: 'Tech Deep-Dive',
    date: 'October 2025',
    abstract: 'A practical guide on optimization, memory compression, and weight pruning for Computer Vision. Details how we achieved low-latency inference on edge nodes with lightweight custom containers and optimal confidence thresholds.',
    tags: ['Computer Vision', 'Model Pruning', 'Edge Computing', 'Docker'],
    link: 'https://medium.com'
  }
];

