import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Code2, Layers, Globe, Database, Wrench, Cloud, CheckCircle2 } from 'lucide-react';





export const Skills = ({ categories }) => {
  const categoryIcons = {
    'Programming Languages': <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    'Frameworks': <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    'Web Technologies': <Globe className="w-4 h-4 text-sky-600 dark:text-sky-400" />,
    'Databases': <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    'Developer Tools': <Wrench className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
    'Cloud': <Cloud className="w-4 h-4 text-purple-600 dark:text-purple-400" />
  };

  return (
    <section id="skills" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
            
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            
            Technical Skills
          </motion.h2>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, catIdx) =>
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between">
            
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200/60 dark:border-slate-800 mb-4">
                <div className="p-2.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60">
                  {categoryIcons[cat.title] || <Code2 className="w-4 h-4 text-blue-600" />}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Badge Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) =>
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-blue-400 transition-colors">
                
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{skill}</span>
                  </span>
              )}
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>);

};
