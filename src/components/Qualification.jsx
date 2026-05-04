'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

/* ── Education Data ── */
const educationData = [
  {
    title: 'SSC',
    institute: 'Ranigonj High School',
    year: '2016 - 2021',
  },
  {
    title: 'Diploma in Computer Science & Technology (CST)',
    institute: 'Centre For Technology Transfer Polytechnic Institute',
    year: '2022 - 2026',
  },
];

/* ── Qualification Section ── */
const Qualification = () => {
  return (
    <section id="qualification" className="py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-4xl font-display font-black text-text-primary text-center">
            Qualification
          </h2>
          <p className="text-[10px] font-bold uppercase tracking-wider mt-4 text-text-secondary">My Personal Journey</p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">

          {/* ── Vertical Center Line (desktop) ── */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-accent-blue via-accent-blue/30 to-transparent"
          />

          {/* ── Vertical Left Line (mobile) ── */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="md:hidden absolute left-6 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-accent-blue via-accent-blue/30 to-transparent"
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              const delay = 0.2 + index * 0.3;

              return (
                <div key={item.title} className="relative">

                  {/* ── Desktop Layout ── */}
                  <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] items-start">

                    {/* Left Column */}
                    <div className={isEven ? 'pr-8' : ''}>
                      {isEven && (
                        <motion.div
                          initial={{ opacity: 0, x: -60 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay, duration: 0.7, ease: 'easeOut' }}
                          whileHover={{ y: -6, transition: { duration: 0.25 } }}
                          className="group"
                        >
                          <div className="relative">
                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-blue/0 to-accent-purple/0 group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all duration-500 blur-sm" />
                            <div className="relative glass-card rounded-2xl p-7 border border-white/10 group-hover:border-accent-blue/20 transition-all duration-500">
                              <div className="flex items-center justify-end gap-3 mb-3">
                                <h3 className="text-lg font-bold text-text-primary">{item.title}</h3>
                                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                                  <GraduationCap size={20} />
                                </div>
                              </div>
                              <p className="text-sm text-text-secondary text-right mb-3">{item.institute}</p>
                              <div className="flex items-center justify-end gap-2 text-accent-blue">
                                <Calendar size={13} />
                                <span className="text-xs font-semibold tracking-wide">{item.year}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Center Dot */}
                    <div className="flex justify-center pt-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay, duration: 0.5, type: 'spring', stiffness: 300 }}
                        className="relative"
                      >
                        <div className="w-4 h-4 rounded-full bg-accent-blue border-[3px] border-bg-primary relative z-10" />
                        <div className="absolute inset-0 w-4 h-4 rounded-full bg-accent-blue animate-ping opacity-20" />
                      </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className={!isEven ? 'pl-8' : ''}>
                      {!isEven && (
                        <motion.div
                          initial={{ opacity: 0, x: 60 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay, duration: 0.7, ease: 'easeOut' }}
                          whileHover={{ y: -6, transition: { duration: 0.25 } }}
                          className="group"
                        >
                          <div className="relative">
                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-blue/0 to-accent-purple/0 group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all duration-500 blur-sm" />
                            <div className="relative glass-card rounded-2xl p-7 border border-white/10 group-hover:border-accent-blue/20 transition-all duration-500">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                                  <GraduationCap size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-text-primary">{item.title}</h3>
                              </div>
                              <p className="text-sm text-text-secondary mb-3">{item.institute}</p>
                              <div className="flex items-center gap-2 text-accent-blue">
                                <Calendar size={13} />
                                <span className="text-xs font-semibold tracking-wide">{item.year}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* ── Mobile Layout ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay, duration: 0.6 }}
                    whileHover={{ y: -5, transition: { duration: 0.25 } }}
                    className="md:hidden relative pl-16 group"
                  >
                    {/* Mobile timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay, type: 'spring', stiffness: 300 }}
                      className="absolute left-4 top-7 -translate-x-1/2"
                    >
                      <div className="w-4 h-4 rounded-full bg-accent-blue border-[3px] border-bg-primary relative z-10" />
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-accent-blue animate-ping opacity-20" />
                    </motion.div>

                    <div className="relative">
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-blue/0 to-accent-purple/0 group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all duration-500 blur-sm" />
                      <div className="relative glass-card rounded-2xl p-6 border border-white/10 group-hover:border-accent-blue/20 transition-all duration-500">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                            <GraduationCap size={20} />
                          </div>
                          <h3 className="text-base font-bold text-text-primary">{item.title}</h3>
                        </div>
                        <p className="text-sm text-text-secondary mb-3">{item.institute}</p>
                        <div className="flex items-center gap-2 text-accent-blue">
                          <Calendar size={13} />
                          <span className="text-xs font-semibold tracking-wide">{item.year}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
