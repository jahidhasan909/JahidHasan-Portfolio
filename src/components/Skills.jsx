'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, CheckCircle } from 'lucide-react';

/* ── Skill Item with check icon ── */
const SkillItem = ({ name, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="flex items-center gap-3 group"
  >
    <CheckCircle size={16} className="text-accent-blue shrink-0 group-hover:scale-110 transition-transform" />
    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
      {name}
    </span>
  </motion.div>
);

/* ── Glass Skill Card ── */
const SkillCard = ({ title, Icon, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="relative group"
  >
    {/* Subtle border glow on hover */}
    <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-accent-blue/0 via-accent-blue/0 to-accent-purple/0 group-hover:from-accent-blue/30 group-hover:via-accent-blue/10 group-hover:to-accent-purple/30 transition-all duration-500 blur-[1px]" />

    <div className="relative glass-card rounded-3xl p-8 md:p-10 border border-white/10 group-hover:border-accent-blue/20 transition-all duration-500 h-full">
      
      {/* Icon + Title */}
      <div className="flex items-center gap-4 mb-8">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.1 }}
          className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue/20 transition-colors duration-300"
        >
          <Icon size={26} />
        </motion.div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">{title}</h3>
          <p className="text-[10px] uppercase tracking-widest text-text-secondary mt-1">
            {skills.length} Technologies
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent mb-6" />

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {skills.map((skill, i) => (
          <SkillItem key={skill} name={skill} delay={delay + 0.1 + i * 0.08} />
        ))}
      </div>
    </div>
  </motion.div>
);

/* ── Main Skills Section ── */
const Skills = () => {
  const frontendSkills = ['HTML5', 'Tailwind CSS', 'JavaScript', 'React.js', 'Next.js'];
  const backendSkills = ['Node.js', 'Express.js', 'MongoDB'];

  return (
    <section id="skills" className="py-32 px-6 lg:px-12 overflow-hidden relative">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-3xl font-display font-black text-text-primary text-center">
            Skills
          </h2>
          <p className="text-[9px] font-bold text-text-secondary uppercase tracking-wider mt-4">My Technical Skills</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard
            title="Frontend Developer"
            Icon={Monitor}
            skills={frontendSkills}
            delay={0.1}
          />
          <SkillCard
            title="Backend Developer"
            Icon={Server}
            skills={backendSkills}
            delay={0.3}
          />
        </div>

      </div>
    </section>
  );
};

export default Skills;