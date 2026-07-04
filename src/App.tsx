/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SelectedWork from './components/SelectedWork';
import Research from './components/Research';
import ServiceAccordion from './components/ServiceAccordion';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ArticleDetail from './components/ArticleDetail';
import ServiceDetail from './components/ServiceDetail';
import { Project, ResearchArticle, Service } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ResearchArticle | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Prevent background scrolling when detail page is open
  useEffect(() => {
    if (selectedProject || selectedArticle || selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject, selectedArticle, selectedService]);

  return (
    <div id="top" className="min-h-screen bg-[#f5f5f3] font-sans text-gray-900 selection:bg-black selection:text-white antialiased overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 1.5 About Section with Veo Video Generator */}
        <AboutSection />

        {/* 2. Selected Work Section */}
        <SelectedWork onSelectProject={setSelectedProject} />

        {/* 3. Service Accordion Section */}
        <ServiceAccordion onSelectService={setSelectedService} />

        {/* 4. Experience & Credentials Section */}
        <Experience />

        {/* 5. Research & Articles Section */}
        <Research onSelectArticle={setSelectedArticle} />
      </main>

      {/* 5. Contact & Footer Section */}
      <Footer />

      {/* Project Detail Page/Overlay View */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Article Detail Page/Overlay View */}
      <AnimatePresence>
        {selectedArticle && (
          <ArticleDetail
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        )}
      </AnimatePresence>

      {/* Service Detail Page/Overlay View */}
      <AnimatePresence>
        {selectedService && (
          <ServiceDetail
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

