'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Headphones, Download } from 'lucide-react';

const AboutCard = ({ Icon, title, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    whileHover={{ y: -5 }}
    className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-3"
  >
    <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">
        {title}
      </h4>
      <p className="text-xs text-text-secondary leading-tight">
        {value}
      </p>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent-blue text-xs font-bold uppercase tracking-[0.3em] mb-4"
          >
            My Introduction
          </motion.p>
        </div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >

          {/* 🔹 Left: Image */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden glass-card p-4 group"
            >
              <img 
                src="https://i.ibb.co.com/ZzPjzSTb/Oyt-Uf.jpg" 
                alt="About Me" 
                className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-blue/10 blur-[100px] rounded-full" />
          </div>

          {/* 🔹 Right: Content */}
          <div className="space-y-8">

            <div className="space-y-4">
              <p className="text-accent-blue text-xs font-bold uppercase tracking-[0.3em]">
                Discovery
              </p>

              <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
                About <span className="text-glow-blue text-accent-blue">Me</span>
              </h2>
            </div>

            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              I'm a Full Stack Developer based in Dhaka, specializing in building high-end digital experiences. 
              My journey is fueled by a passion for clean code, creative UI, and performance-driven development.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              I bridge the gap between complex backend systems and intuitive frontend experiences. 
              With a deep understanding of modern web architectures, I build scalable applications that deliver exceptional performance and user delight.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AboutCard 
                Icon={Award} 
                title="Experience" 
                value="5+ Years" 
                delay={0.2}
              />
              <AboutCard 
                Icon={Briefcase} 
                title="Projects" 
                value="120+ Done" 
                delay={0.4}
              />
              <AboutCard 
                Icon={Headphones} 
                title="Support" 
                value="24/7 Available" 
                delay={0.6}
              />
            </div>

            {/* Button */}
            <div className="pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-accent-blue text-black font-bold rounded-xl transition-all flex items-center gap-2 group"
              >
                Download CV
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;