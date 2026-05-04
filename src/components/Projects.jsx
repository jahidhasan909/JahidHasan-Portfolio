'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubSvg = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

/* ── Project Data ── */
const projects = [
  {
    title: 'Google Docs Clone – Real-Time Collaboration',
    description: 'A modern web application that allows users to create and edit documents in real time with collaboration features.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=340&fit=crop',
    tags: ['JavaScript', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'E-Commerce Dashboard – Admin Panel',
    description: 'A comprehensive admin dashboard for managing products, orders, and customers with charts and analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Chat Application',
    description: 'An intelligent chatbot application powered by AI APIs with a sleek, responsive conversational interface.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop',
    tags: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Website – Creative Design',
    description: 'A visually stunning personal portfolio with smooth animations, dark mode, and responsive design.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=340&fit=crop',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management App',
    description: 'A full-stack task management application with drag-and-drop, real-time updates, and team collaboration.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=340&fit=crop',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Weather Dashboard – Live Data',
    description: 'A beautiful weather dashboard that shows real-time weather data, forecasts, and interactive maps.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=340&fit=crop',
    tags: ['JavaScript', 'React.js', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
];

/* ── Project Card ── */
const ProjectCard = ({ title, description, image, tags, github, demo, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group relative h-full"
  >
    {/* Hover glow border */}
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-blue/0 to-accent-purple/0 group-hover:from-accent-blue/25 group-hover:to-accent-purple/25 transition-all duration-500 blur-sm" />

    <div className="relative glass-card rounded-2xl overflow-hidden h-full flex flex-col border border-white/10 group-hover:border-accent-blue/20 transition-all duration-500">

      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Hover overlay with buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-400 bg-black/50 backdrop-blur-sm">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            <GithubSvg size={18} />
          </motion.a>
          <motion.a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 rounded-full bg-accent-blue flex items-center justify-center text-black hover:bg-white transition-colors duration-300"
          >
            <ExternalLink size={18} />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">

        {/* Title */}
        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-blue transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            <GithubSvg size={15} />
            GitHub
          </a>
          <span className="text-white/10">|</span>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-accent-blue hover:text-text-primary transition-colors duration-300"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ── Projects Section ── */
const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-black text-text-primary text-center"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] text-text-secondary font-bold uppercase tracking-widest mt-4"
          >
            Recent projects
          </motion.p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} delay={i * 0.1} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
