import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Linkedin, Github, Mail, Heart } from 'lucide-react';






export const Footer = ({ name, contact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white/80 dark:bg-slate-900/80 border-t border-slate-200/80 dark:border-slate-800/80 py-12 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xs">
              BB
            </span>
            <span>{name}</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Information Science and Engineering Undergraduate • Class of 2027
          </p>
        </div>

        {/* Social Icons Links */}
        <div className="flex items-center space-x-3">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            
            <Github className="w-4 h-4" />
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${contact.email}`}
            title="Send Email"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Scroll To Top */}
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span>© {new Date().getFullYear()} {name}. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            id="footer-scroll-top-btn"
            title="Scroll to top"
            className="p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-slate-700 transition-colors">
            
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>);

};
