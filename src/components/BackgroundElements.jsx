import React from 'react';
import { motion } from 'motion/react';

export const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary Blue Orb Top Left */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-400/20 dark:bg-blue-600/15 blur-3xl" />
      

      {/* Secondary Indigo Orb Top Right */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.9, 1.08, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 -right-32 w-[30rem] h-[30rem] rounded-full bg-indigo-300/20 dark:bg-indigo-500/10 blur-3xl" />
      

      {/* Sky Blue Orb Middle Left */}
      <motion.div
        animate={{
          x: [0, 60, -20, 0],
          y: [0, 30, -50, 0],
          scale: [1, 1.15, 0.9, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-2/3 -left-20 w-96 h-96 rounded-full bg-sky-300/25 dark:bg-sky-600/10 blur-3xl" />
      

      {/* Soft Purple/Blue Accent Bottom Right */}
      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.05, 0.95, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-32 right-10 w-96 h-96 rounded-full bg-blue-300/20 dark:bg-blue-800/15 blur-3xl" />
      

      {/* Subtle Grid overlay background for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>);

};
