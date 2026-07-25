import React from 'react';
import { motion } from 'motion/react';
import { Languages as LanguagesIcon, CheckCircle2 } from 'lucide-react';





export const Languages = ({ languages }) => {
  return (
    <section id="languages" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
            
            <LanguagesIcon className="w-3.5 h-3.5" />
            <span>Languages</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            
            Languages
          </motion.h2>
        </div>

        {/* Languages Badges */}
        <div className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto">
          {languages.map((lang, index) =>
          <motion.div
            key={lang}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl px-6 py-4 shadow-xl flex items-center gap-3 min-w-[160px] justify-center">
            
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {lang}
              </span>
            </motion.div>
          )}
        </div>

      </div>
    </section>);

};
