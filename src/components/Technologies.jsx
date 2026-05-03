'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TechIcon = ({ name, icon, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay,
    }}
    className="flex flex-col items-center gap-3 group"
  >
    {/* Icon Circle */}
    <motion.div
      whileHover={{ scale: 1.15, rotate: 8 }}
      className="relative w-24 h-24 rounded-full flex items-center justify-center glass-card border border-accent-blue/20 group-hover:border-accent-blue/50 transition-all duration-500 glow-blue-hover"
    >
      <div className="absolute inset-[-4px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-accent-blue/30 blur-sm" />

      <div className={`text-3xl font-bold ${color} group-hover:scale-110 transition-transform`}>
        {icon || name[0]}
      </div>

      <div className="absolute inset-4 rounded-full bg-accent-blue/5 animate-pulse" />
    </motion.div>

    {/* Label */}
    <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {name}
    </span>
  </motion.div>
);

const Technologies = ({ techs = [] }) => {
  return (
    <section id="technologies" className="py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-24"
        >
          <p className="text-accent-blue text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white text-center">
           Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
          {techs.map((tech, i) => (
            <TechIcon
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
              delay={i * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;