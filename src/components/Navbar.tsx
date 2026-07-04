/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { personalInfo } from '../data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Service', href: '#service' },
    { label: 'Experience', href: '#experience' },
    { label: 'Insights', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 lg:px-8">
        <div className="w-full max-w-5xl bg-[#ffffff]/90 backdrop-blur-md border border-[#e5e5e3] rounded-full px-4 lg:px-6 py-2.5 flex items-center justify-between shadow-sm">
          {/* Status Badge */}
          <div className="flex items-center gap-2 bg-[#f4f4f2] border border-[#e2e2df] rounded-full px-3 py-1.5 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-gray-700 tracking-tight whitespace-nowrap">
              Available for New Project
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans text-xs text-gray-600 font-medium">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-black transition-colors duration-200 py-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="bg-[#161616] hover:bg-black text-white text-xs font-semibold px-4 py-2 lg:px-5 lg:py-2.5 rounded-full flex items-center gap-1.5 transition-all duration-300 hover:scale-[1.03] group shrink-0"
            >
              Let's Talk
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 lg:hidden bg-white/95 backdrop-blur-lg border border-[#e5e5e3] rounded-3xl p-6 shadow-xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-semibold py-2.5 px-4 rounded-xl hover:bg-gray-50 text-gray-800 hover:text-black transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 mt-2">
              <div className="text-center text-xs text-gray-400 font-mono mb-2">
                Connect with Afrasyab
              </div>
              <div className="flex justify-center gap-4 text-xs font-semibold text-gray-600">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  LinkedIn
                </a>
                <span>·</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  GitHub
                </a>
                <span>·</span>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-black">
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
