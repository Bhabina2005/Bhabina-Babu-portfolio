import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, CheckCircle2, Eye, Sparkles, ExternalLink, Github } from 'lucide-react';
import { ProjectModal } from './ProjectModal';





export const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
            
            <Code2 className="w-3.5 h-3.5" />
            <span>Academic Projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            
            Projects
          </motion.h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) =>
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="group bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between">
            
              <div>
                {/* Project Thumbnail Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70" />
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>

                  {/* Tech Stack List */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) =>
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-xs font-semibold text-blue-700 dark:text-blue-300">
                    
                        {tech}
                      </span>
                  )}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {project.bullets.map((bullet, idx) =>
                  <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                  )}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-2 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  {!project.hideLiveDemo && (
                    project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 cursor-not-allowed border border-transparent dark:border-slate-700"
                      >
                        <span>Coming Soon</span>
                      </button>
                    )
                  )}
                  {project.githubRepo && (
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors border border-transparent dark:border-slate-700"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-blue-700 dark:text-blue-300 bg-blue-50/80 dark:bg-slate-800/80 hover:bg-blue-100 dark:hover:bg-slate-700 border border-blue-200 dark:border-slate-700 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>View Full Details</span>
                </button>
              </div>

            </motion.div>
          )}
        </div>

        {/* Project Modal */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      </div>
    </section>);

};
