import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Award, Calendar } from 'lucide-react';





export const Education = ({ educationList }) => {
  return (
    <section id="education" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
            
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            
            Education
          </motion.h2>
        </div>

        {/* Education List Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {educationList.map((item, index) =>
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
            
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-200/60 dark:border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.institution}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {item.degree}
                  </p>
                </div>

                <div className="text-left sm:text-right space-y-1 shrink-0">
                  <div className="flex items-center sm:justify-end gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{item.expectedGraduation}</span>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 font-bold text-sm">
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{item.cgpa}</span>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>);

};
