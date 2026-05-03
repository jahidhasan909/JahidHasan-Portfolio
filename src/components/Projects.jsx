'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const ProjectCard = ({ title, type, description, image, tags, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.05 }}
    className="group relative h-full glow-blue-hover"
  >
    <div className="glass-card rounded-[2.5rem] overflow-hidden h-full flex flex-col border-white/5 group-hover:border-accent-blue/30 transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-accent-blue text-black flex items-center justify-center"
          >
            <Eye size={20} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center"
          >
            <GithubIcon size={20} />
          </motion.button>
        </div>


        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-accent-blue/20 text-accent-blue backdrop-blur-md border border-accent-blue/30">
            {type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/50 border border-white/5 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
          <button className="flex items-center gap-2 text-white font-bold text-sm hover:text-accent-blue transition-colors group/btn">
            View Project
            <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: 'AI Image SaaS',
      type: 'Web Application',
      description: 'A comprehensive AI-powered image generation and editing platform with subscription-based access.',
      image: 'https://i.ibb.co.com/ZzPjzSTb/Oyt-Uf.jpg',
      tags: ['Next.js', 'Clerk', 'Stripe', 'OpenAI'],
    },
    {
      title: 'Crypto Dashboard',
      type: 'Financial Tool',
      description: 'Real-time cryptocurrency tracking dashboard with advanced analytics and predictive charting.',
      image: 'https://i.ibb.co.com/ZzPjzSTb/Oyt-Uf.jpg',
      tags: ['React', 'Chart.js', 'Tailwind', 'API'],
    },
    {
      title: 'Social Hub',
      type: 'Social Media',
      description: 'Modern social media platform with real-time messaging, file sharing, and interactive feed.',
      image: 'https://i.ibb.co.com/ZzPjzSTb/Oyt-Uf.jpg',
      tags: ['MongoDB', 'Express', 'React', 'Node'],
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-blue text-xs font-bold uppercase tracking-[0.3em] mb-4"
          >
            My Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white text-center"
          >
            Featured <span className="text-glow-blue text-accent-blue">Projects</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

