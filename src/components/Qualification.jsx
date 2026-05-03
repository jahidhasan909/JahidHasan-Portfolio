'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const TimelineItem = ({ Icon, title, subtitle, date, description, side, delay }) => {
  const isLeft = side === 'left';
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`relative flex items-center justify-between mb-12 w-full ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-[45%] glass-card p-6 rounded-2xl border-white/5 hover:border-accent-blue/30 transition-all duration-500 glow-blue-hover group"
      >
        <div className="flex items-center gap-2 text-accent-blue text-xs font-bold uppercase tracking-widest mb-3">
          <Calendar size={14} />
          {date}
        </div>
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent-blue transition-colors">{title}</h3>
        <p className="text-sm text-text-secondary font-medium mb-3">{subtitle}</p>
        {description && <p className="text-xs text-text-secondary/70 leading-relaxed">{description}</p>}
      </motion.div>

      {/* Center Node */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020617] border-2 border-accent-blue z-10">
        <div className="absolute inset-0 rounded-full bg-accent-blue animate-ping opacity-20" />
      </div>

      {/* Spacer for the other side */}
      <div className="w-[45%] hidden md:block" />
    </motion.div>
  );
};

const Qualification = () => {
  return (
    <section id="qualification" className="py-32 px-6 lg:px-12 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-24"
        >
          <p className="text-accent-blue text-xs font-bold uppercase tracking-[0.3em] mb-4">Trajectory</p>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white text-center">
            Career <span className="text-glow-blue text-accent-blue">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </motion.div>

        <div className="relative mt-20">
          {/* 🔹 Central Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent opacity-20 hidden md:block" />

          <div className="space-y-24 relative">
            {/* Experience Section */}
            <div>
              <div className="flex justify-center mb-16">
                <div className="px-6 py-2 glass-card rounded-full text-accent-blue text-xs font-bold uppercase tracking-widest border-accent-blue/30">
                  Professional Experience
                </div>
              </div>
              <div className="space-y-12">
                <TimelineItem 
                  Icon={Briefcase}
                  title="Senior Full Stack Developer"
                  subtitle="TechVisions Global"
                  date="2021 - Present"
                  description="Leading the development of scalable cloud-native applications using Next.js and Node.js. Optimized performance by 40%."
                  side="left"
                  delay={0.2}
                />
                <TimelineItem 
                  Icon={Briefcase}
                  title="Backend Engineer"
                  subtitle="DataFlow Systems"
                  date="2019 - 2021"
                  description="Designed and implemented microservices architectures using Docker and PostgreSQL. Reduced latency by 25%."
                  side="right"
                  delay={0.4}
                />
              </div>
            </div>

            {/* Education Section */}
            <div className="pt-20">
              <div className="flex justify-center mb-16">
                <div className="px-6 py-2 glass-card rounded-full text-accent-purple text-xs font-bold uppercase tracking-widest border-accent-purple/30">
                  Academic Foundation
                </div>
              </div>
              <div className="space-y-12">
                <TimelineItem 
                  Icon={GraduationCap}
                  title="MSc in Computer Science"
                  subtitle="MIT (Open Courseware)"
                  date="2018 - 2019"
                  description="Specialized in Artificial Intelligence and distributed systems. Research focused on edge computing."
                  side="left"
                  delay={0.6}
                />
                <TimelineItem 
                  Icon={GraduationCap}
                  title="BSc in Software Engineering"
                  subtitle="University of Dhaka"
                  date="2014 - 2018"
                  description="Graduated with honors. Developed multiple open-source projects and participated in national hackathons."
                  side="right"
                  delay={0.8}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
