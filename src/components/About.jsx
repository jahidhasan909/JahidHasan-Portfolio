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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-bold tracking-[0.3em] mb-4"
          >
            <h1 className='text-4xl font-bold font-display mb-2'>About</h1>
            <p className='text-[10px] tracking-wider uppercase'>My Introduction</p>
            <div className="w-20 mx-auto h-1 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >

          {/* 🔹 Left: Image with Floating Tech Icons */}
          <div className="relative w-[500px]">

            {/* Floating Tech Icons (behind the image) */}
            {/* React Icon */}
            <motion.div
              className="absolute top-4 left-2 z-0 opacity-30 dark:opacity-20"
              animate={{ y: [0, -15, 0], rotate: [0, 360] }}
              transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="2.5" fill="currentColor" className="text-accent-blue" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" className="text-accent-blue" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" className="text-accent-blue" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" className="text-accent-blue" transform="rotate(120 12 12)" />
              </svg>
            </motion.div>

            {/* Next.js Icon */}
            <motion.div
              className="absolute top-8 right-4 z-0 opacity-25 dark:opacity-15"
              animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
              transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
            >
              <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" className="text-text-primary">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
              </svg>
            </motion.div>

            {/* JavaScript Icon */}
            <motion.div
              className="absolute bottom-12 left-0 z-0 opacity-25 dark:opacity-15"
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }, x: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500/70">
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
              </svg>
            </motion.div>

            {/* Node.js Icon */}
            <motion.div
              className="absolute bottom-6 right-8 z-0 opacity-20 dark:opacity-15"
              animate={{ y: [0, 14, 0], rotate: [0, 6, -6, 0] }}
              transition={{ y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
            >
              <svg width="40" height="40" viewBox="0 0 256 289" fill="none">
                <path d="M128 288.464c-3.975 0-7.685-1.06-11.13-3.066L82.461 264.13c-5.3-2.922-2.654-3.975-1.06-4.505 7.155-2.39 8.48-2.92 16.165-7.155.795-.53 1.856-.265 2.652.265l27.167 16.165c1.06.53 2.39.53 3.18 0l105.99-61.208c1.06-.53 1.59-1.59 1.59-2.92V83.538c0-1.325-.53-2.385-1.59-2.92L130.565 19.41c-1.06-.53-2.39-.53-3.18 0L21.395 80.618c-1.06.535-1.59 1.86-1.59 2.92v121.21c0 1.06.53 2.39 1.59 2.92l29.028 16.695c15.635 7.95 25.44-1.325 25.44-10.6V93.608c0-1.59 1.325-3.18 3.18-3.18h13.51c1.59 0 3.18 1.325 3.18 3.18v120.15c0 20.935-11.396 33.126-31.27 33.126-6.095 0-10.865 0-24.38-6.625L12.39 223.98C5.235 219.74 1 212.055 1 203.77V82.478c0-8.215 4.235-15.9 11.39-20.14L118.38 1.13c6.89-3.975 16.165-3.975 22.79 0l105.99 61.208c7.155 4.24 11.39 11.925 11.39 20.14v121.21c0 8.215-4.235 15.9-11.39 20.14L141.17 285.04c-3.445 2.006-7.42 3.424-13.17 3.424z" fill="#339933" />
                <path d="M160.36 204.83c-46.2 0-55.745-21.2-55.745-39.015 0-1.59 1.325-3.18 3.18-3.18h13.775c1.59 0 2.92 1.06 2.92 2.655 2.12 14.04 8.215 20.935 36.185 20.935 22.26 0 31.8-5.035 31.8-16.96 0-6.89-2.655-11.925-37.245-15.37-28.9-2.92-46.73-9.22-46.73-32.33 0-21.465 18.095-34.185 48.32-34.185 33.92 0 50.615 11.66 52.74 37.245 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.775c-1.325 0-2.655-1.06-2.92-2.39-3.18-14.57-11.396-19.34-33.13-19.34-24.38 0-27.17 8.48-27.17 14.84 0 7.685 3.445 10.07 36.185 14.31 32.33 4.24 47.7 10.335 47.7 33.126-.265 23.32-19.4 36.45-53.175 36.45z" fill="#339933" />
              </svg>
            </motion.div>

            {/* AI / Brain Icon */}
            <motion.div
              className="absolute top-1/2 -left-6 z-0 opacity-20 dark:opacity-15"
              animate={{ y: [0, -18, 0], scale: [1, 1.08, 1] }}
              transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400/70">
                <path d="M9.5 2a2.5 2.5 0 0 1 5 0v.5M14.5 2.5A2.5 2.5 0 0 1 17 5v.5M7 5a2.5 2.5 0 0 1 2.5-2.5M7 5v1.5M17 5.5V7M4.5 8A2.5 2.5 0 0 1 7 5.5M4.5 8v2M19.5 7A2.5 2.5 0 0 1 17 9.5M19.5 7v3M4.5 10a2.5 2.5 0 0 0 0 5M19.5 10a2.5 2.5 0 0 1 0 5M4.5 15A2.5 2.5 0 0 0 7 17.5M19.5 15a2.5 2.5 0 0 1-2.5 2.5M7 17.5a2.5 2.5 0 0 0 2.5 2.5M17 17.5a2.5 2.5 0 0 1-2.5 2.5M9.5 20v2M14.5 20v2" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </motion.div>

            {/* Code Brackets Icon */}
            <motion.div
              className="absolute top-1/3 -right-4 z-0 opacity-20 dark:opacity-15"
              animate={{ y: [0, 10, 0], rotate: [0, -5, 5, 0] }}
              transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
            >
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="14" y1="4" x2="10" y2="20" />
              </svg>
            </motion.div>

            {/* Main Image (foreground) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-xl overflow-hidden p-2 group"
            >
              <img
                src="https://i.ibb.co.com/VWm19GP1/mx00n-removebg-preview-Picsart-Ai-Image-Enhancer.png"
                alt="About Me"
                className="w-full object-fill rounded-lg transition-all duration-700 group-hover:scale-105"
              />
            </motion.div>

          </div>

          {/* 🔹 Right: Content */}
          <div className="space-y-8">



            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AboutCard
                Icon={Award}
                title="Experience"
                value="6+ Months"
                delay={0.2}
              />
              <AboutCard
                Icon={Briefcase}
                title="Projects"
                value="25+ Done"
                delay={0.4}
              />
              <AboutCard
                Icon={Headphones}
                title="Availability"
                value="Open to Work"
                delay={0.6}
              />
            </div>
            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              Passionate about building modern web applications using JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. I create scalable, efficient, and user-centric digital solutions with clean code and optimized performance.
            </p>



            {/* Button */}
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 glass-card text-text-primary font-bold rounded-xl transition-all flex items-center gap-2 group hover:bg-white/[0.05]"
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