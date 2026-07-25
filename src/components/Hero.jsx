import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, GraduationCap, MapPin, Phone, Github, Linkedin } from 'lucide-react';
















export const Hero = ({
  name,
  college,
  degree,
  cgpa,
  graduationYear,
  summary,
  profileImage,
  location,
  email,
  phone,
  linkedin,
  github
}) => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column: Profile Image (On Mobile: Order First above introduction; On Desktop: Right Side) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5 order-first lg:order-last flex justify-center lg:justify-end relative mb-4 lg:mb-0">
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
              
              
              {/* Outer Blurred Glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-sky-400 opacity-30 dark:opacity-40 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Glassmorphism Outer Wrapper */}
              <div className="relative w-full h-full rounded-full p-2.5 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/80 dark:border-slate-800/80 shadow-2xl shadow-blue-500/15 flex items-center justify-center">
                
                {/* Thin Blue Gradient Border Ring */}
                <div className="w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-blue-600 via-indigo-500 to-sky-400 shadow-inner overflow-hidden">
                  
                  {/* High Resolution Circular Image with Hover Scale */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <img
                      src={profileImage}
                      alt={name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500 ease-out" />
                    
                  </div>
                </div>

              </div>

              {/* CGPA Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-1 right-2 sm:right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 py-2 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xl flex items-center gap-2.5 z-20">
                
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xs shadow-md">
                  8.64
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">CGPA</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-100">8.64 / 10</div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-last lg:order-first text-left space-y-6">
            
            {/* Location & Institution Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
              
              <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{location}</span>
              <span className="text-blue-300 dark:text-blue-700">•</span>
              <span>{college}</span>
            </motion.div>

            {/* Name & Degree */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 dark:from-blue-400 dark:via-indigo-300 dark:to-sky-400">
                  {name}
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-200 pt-1">
                {degree}
              </h2>
            </div>

            {/* Exact Resume Professional Summary */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {summary}
            </p>

            {/* Academic Highlights */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>CGPA: <strong className="text-blue-600 dark:text-blue-400">{cgpa}</strong></span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                <span>Graduation: <strong>{graduationYear}</strong></span>
              </div>
            </div>

            {/* Quick Links / CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => handleScrollTo('projects')}
                id="hero-view-projects-btn"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none">
                
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('resume')}
                id="hero-download-resume-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-100 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300/80 dark:border-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none">
                
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                id="hero-contact-btn"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-800/50 transition-all focus:outline-none">
                
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>

            {/* Resume Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                
                <Linkedin className="w-4 h-4" />
                <span>linkedin.com/in/bhabina-babu</span>
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                
                <Github className="w-4 h-4" />
                <span>github.com/Bhabina2005</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>);

};
