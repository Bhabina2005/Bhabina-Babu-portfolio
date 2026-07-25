import React from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, MapPin, School } from 'lucide-react';










export const About = ({
  summary,
  college,
  degree,
  cgpa,
  graduationYear,
  location
}) => {
  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
            
            <User className="w-3.5 h-3.5" />
            <span>Professional Summary</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            
            About{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 dark:from-blue-400 dark:to-indigo-300">
              Bhabina Babu
            </span>
          </motion.h2>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Main Professional Summary Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800 pb-3">
                Professional Summary
              </h3>

              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                {summary}
              </p>
            </div>
          </motion.div>

          {/* Quick Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col gap-4 justify-between">
            
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <School className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Institution</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {college}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {degree}
              </p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 shadow-xl grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase">CGPA</div>
                <div className="text-lg font-extrabold text-slate-900 dark:text-white">{cgpa}</div>
              </div>

              <div className="space-y-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase">Location</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{location}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>);

};
