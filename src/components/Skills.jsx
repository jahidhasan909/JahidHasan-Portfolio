'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const SkillCard = ({ title, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.05 }}
    className="glass-card p-10 rounded-[2.5rem] transition-all duration-500 glow-blue-hover"
  >
    <h3 className="text-2xl font-bold text-text-primary mb-6">{title}</h3>

    <div className="space-y-4">
      {items.map((skill, i) => (
        <div key={i}>
          <div className="flex justify-between text-sm text-text-primary">
            <span>{skill.name}</span>
            <span>{skill.level}</span>
          </div>

          <div className="h-1 bg-white/10 rounded">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: skill.level }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="h-full bg-blue-500"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="flex flex-col items-center mb-20">
          <p className="text-accent-blue text-xs font-bold uppercase tracking-[0.3em] mb-4">Mastery</p>
          <h2 className="text-4xl md:text-5xl font-display font-black text-text-primary text-center">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <SkillCard
            title="Frontend"
            delay={0.2}
            items={[
              { name: 'React', level: '90%' },
              { name: 'Next.js', level: '85%' },
            ]}
          />

          <SkillCard
            title="Backend"
            delay={0.4}
            items={[
              { name: 'Node.js', level: '80%' },
              { name: 'MongoDB', level: '75%' },
            ]}
          />
        </div>
      </motion.div>
    </section>
  );
};


export default Skills;