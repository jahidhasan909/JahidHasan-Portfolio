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
    title: 'SkillSphere – Online Learning Platform',
    description: 'SkillSphere is a modern online learning platform designed to help students explore courses, manage their learning journey, and track progress easily. It provides a smooth and interactive user experience with authentication, course management, and personalized profiles.',
    image: 'https://i.ibb.co.com/kVZ0XyZQ/Screenshot-2026-05-07-at-1-01-49-AM-Picsart-Ai-Image-Enhancer.png',
    tags: [
      'Next.js',
      'MongoDB',
      'HeroUI',
      'JavaScript',
      'Better Auth',
      'React Hook Form',
      'Framer Motion',
      'Swiper.js',
      'React Fast Marquee',
      'TailwindCSS',
      'React Spinner','React-toastify', 'React Icons'],
    github: 'https://github.com/jahidhasan909/-SkillSphere-A08-Nextjs',
    demo: 'https://skill-sphere-a08-nextjs.vercel.app/',
  },
  {
    title: 'Jazzdle - E-commerce Shop',
    description: 'Jazzdle is an E-commerce platform for mobiles, laptops, and keyboards. Users can sign up/login with Google or GitHub, browse products, manage cart , and checkout easily. It includes a modern responsive UI with dark/light mode, sliders, animations, and Local Storage support.',
    image: 'https://i.ibb.co.com/W4pGLSHW/Screenshot-2026-05-07-at-1-04-03-AM-Picsart-Ai-Image-Enhancer.png',
    tags: ['Next.js', 'JavaScript', 'Swiper.js', 'MongoDB', 'React Fast Marquee', 'Better Auth', 'Tailwind CSS', 'React Icons', ' Gravity Icons','React-toastify', 'HeroUI',],
    github: 'https://github.com/jahidhasan909/Mobile-Shop',
    demo: 'https://mobile-shop-five-psi.vercel.app',
  },
  {
    title: 'Dragon News - news platforms',
    description: 'Dragon News is a real-time news platform where users can browse daily news by category and read full articles. It supports secure login via Email, Google, and GitHub using Better Auth. The system includes protected pages, fast API-based news loading, and secure data handling with a Next.js proxy.',
    image: 'https://i.ibb.co.com/TMHTtmRH/Screenshot-2026-05-07-at-1-04-40-AM-Picsart-Ai-Image-Enhancer.png',
    tags: ['Next.js', 'Tailwind CSS', 'JavaScript', 'DaisyUI', 'React Toastify', 'MongoDB', 'Better Auth'],
    github: 'https://github.com/jahidhasan909/Dragon-News-Nextjs-Project',
    demo: 'https://dragon-news-nextjs-project-five.vercel.app/news/01',
  },
  {
    title: 'Keen Keeper - contact platform',
    description: 'Keen Keeper is a contact management app where users can save contact details of friends or acquaintances and track the history of text, call and video communication, including dates. There is also a stats/flowchart section where the number of different types of communication can be seen.',
    image: 'https://i.ibb.co.com/MkZYq81H/Screenshot-2026-05-07-at-1-05-28-AM-Picsart-Ai-Image-Enhancer.png',
    tags: ['JavaScript', 'React.js', 'Date-fns', 'React-icons','React-router','React-spinners','React-toastify', 'Tailwind CSS','Recharts'],
    github: 'https://github.com/jahidhasan909/Keen-Keeper-A07',
    demo: 'https://keen-keeper-a07.netlify.app',
  },
  {
    title: 'Ai Hub - E-commerce Shop',
    description: 'Ai-Model-Hub is an e-commerce platform designed to showcase and sell AI models. It allows users to browse models and manage their cart efficiently using React Hooks for a smooth shopping experience.',
    image: 'https://i.ibb.co.com/Xf8Crjwb/Screenshot-2026-05-07-at-1-03-10-AM-Picsart-Ai-Image-Enhancer.png',
    tags: ['React.js', 'JavaScript', 'React-toastify', 'Daisyui', 'Tailwind CSS'],
    github: 'https://github.com/jahidhasan909/Ai-Model-Hub',
    demo: 'https://ai-model-hub-react.netlify.app',
  },
  {
    title: 'Play Store-style – App download platform',
    description: 'Play Store-style React web app where users can browse apps, install/uninstall them, and manage a personal installed list. It uses React Router for navigation, Context API for state sharing, and includes search, sorting, and dynamic app details pages with real-time updates and notifications.',
    image: 'https://i.ibb.co.com/cSSmVhdD/Screenshot-2026-05-07-at-1-02-36-AM-Picsart-Ai-Image-Enhancer.png',
    tags: ['JavaScript', 'React.js','React Router', 'Tailwind CSS','Daisyui','React-toastify','React Icons'],
    github: 'https://github.com/jahidhasan909/Play-Store-project',
    demo: 'https://play-store-project.netlify.app',
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
          className="w-full h-full object-fill px-2  transition-transform duration-700 group-hover:scale-110"
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
        <p className="text-sm text-text-secondary leading-relaxed mb-5  flex-grow">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium whitespace-nowrap  px-3 py-1 rounded-full bg-accent-blue/10  border border-accent-blue/10"
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
