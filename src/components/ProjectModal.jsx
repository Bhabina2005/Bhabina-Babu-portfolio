import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Code2 } from 'lucide-react';






export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0" />
        

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden z-10 flex flex-col">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white backdrop-blur-md transition-colors"
            aria-label="Close modal">
            
            <X className="w-5 h-5" />
          </button>

          {/* Header Image */}
          <div className="relative h-52 w-full overflow-hidden bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
              <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-600/90 text-white">
                Academic Project
              </span>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            
            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) =>
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300">
                  
                    {tech}
                  </span>
                )}
              </div>
            </div>

            {/* Bullets */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Project Highlights</h4>
              <ul className="space-y-2.5">
                {project.bullets.map((bullet, i) =>
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                )}
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>);

};
