// ...existing code...
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Headphones, Download } from 'lucide-react';

const AboutCard = ({ Icon, title, value, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.99 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="w-full h-full backdrop-blur-xl bg-white/6 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-[0_10px_30px_rgba(2,6,23,0.6)]"
  >
    <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">
        {title}
      </h4>
      <p className="text-sm text-text-secondary leading-tight">
        {value}
      </p>
    </div>
  </motion.div>
);

// FloatingCard: improved framer-motion float + hover neon glow
const FloatingCard = ({ className = '', children, delay = 0, float = {} }) => {
  const {
    yRange = [0, -10, 0],
    rotateRange = [0, 2, -2, 0],
    durY = 4.5,
    durR = 6
  } = float;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 8 }}
      animate={{ y: yRange, rotate: rotateRange, opacity: [0, 1] }}
      transition={{
        y: { duration: durY, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay },
        rotate: { duration: durR, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay },
        default: { duration: 0.6 }
      }}
      whileHover={{
        scale: 1.035,
        y: -6,
        boxShadow: '0 24px 60px rgba(59,130,246,0.12), 0 0 32px rgba(34,197,94,0.06)'
      }}
      style={{
        willChange: 'transform',
        boxShadow: '0 8px 30px rgba(59,130,246,0.04), 0 0 20px rgba(34,197,94,0.02)'
      }}
      className={`pointer-events-auto relative overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 transition-shadow duration-300 ${className} z-10`}
    >
      {children}
    </motion.div>
  );
};

// ...existing code...
const TechIcon = ({ name }) => {
  const size = 18;
  switch (name) {
    case 'react':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-accent-blue">
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'next':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-text-primary">
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243..." />
        </svg>
      );
    case 'node':
      return (
        <svg width={size} height={size} viewBox="0 0 256 289" fill="none">
          <path d="M128 288.464c-3.975 0-7.685-1.06-11.13-3.066L82.461 264.13..." fill="#339933" />
        </svg>
      );
    case 'js':
      return <div className="text-yellow-400 font-mono text-sm">JS</div>;
    case 'tailwind':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <path d="M2 12c4-3 8-3 12 0 4-3 8-3 12 0" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
};

const CodeSnippet = ({ lines = [] }) => (
  <pre className="text-[11px] font-mono text-white/90 leading-snug whitespace-pre-wrap break-words max-h-20 overflow-auto pr-2">
    {lines.map((line, i) => (
      <div key={i} className="flex items-start gap-2">
        <span className="text-text-secondary/60 text-[10px] min-w-[18px]">{i + 1}</span>
        <code className="whitespace-pre-wrap break-words text-[11px]" dangerouslySetInnerHTML={{ __html: line }} />
      </div>
    ))}
  </pre>
);

// ...existing code...
const About = () => {
  return (
    // allow decorative cards to overflow the section bounds
    <section id="about" className="py-32 px-6 lg:px-12 relative overflow-visible">
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
            <p className='text-[10px] text-text-secondary tracking-wider uppercase'>My Introduction</p>
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

          {/* 🔹 Left: Image with Floating Glass Cards behind it */}
          {/* make container responsive and allow visible overflow */}
          <div className="relative w-full max-w-[520px] mx-auto z-0 overflow-visible">

            {/* Floating cards layer (behind image) - visible on all devices */}
            <div className="absolute mx-10   lg:mx-0 md:mx-0 inset-0 z-10 pointer-events-none">
              <FloatingCard className="absolute -top-8 -left-10 w-47 h-25 md:h-32" delay={0}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <div className="text-xs font-bold text-white">UI Snippet</div>
                    <CodeSnippet lines={[
                      '<span class="text-accent-blue">const</span> <span class="text-white">Button</span> = () =&gt; {',
                      '&nbsp;&nbsp;<span class="text-accent-blue">return</span> (<span class="text-white">&lt;button&gt;Click&lt;/button&gt;</span>);',
                      '}'
                    ]} />
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <div className="w-6 h-6 shrink-0"><TechIcon name="react" /></div>
                    <div className="w-6 h-6 shrink-0"><TechIcon name="next" /></div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard className="absolute -top-6 -right-6 w-48 h-28 md:h-36" delay={0.12}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-bold text-white">Server Snip</div>
                    <div className="ml-auto flex items-center gap-1">
                      <div className="w-5 h-5"><TechIcon name="node" /></div>
                      <div className="w-5 h-5"><TechIcon name="js" /></div>
                    </div>
                  </div>
                  <CodeSnippet lines={[
                    '<span class="text-accent-blue">app</span>.get(<span class="text-white">"/api"</span>, (req, res) =&gt; {',
                    '&nbsp;&nbsp;res.send(<span class="text-accent-blue">"ok"</span>);',
                    '});'
                  ]} />
                </div>
              </FloatingCard>

              <FloatingCard className="absolute -bottom-6 -left-8 w-44 h-16 md:h-28" delay={0.18}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Style</div>
                    <div className="text-[11px] font-mono text-white/80 mt-2">
                      <span className="text-accent-blue">@apply</span> <span className="text-white">btn</span>
                    </div>
                  </div>
                  <div className="w-6 h-6"><TechIcon name="tailwind" /></div>
                </div>
              </FloatingCard>

              <FloatingCard className="absolute -bottom-10 -right-6 w-48 h-24 md:h-32" delay={0.24}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold text-white">Components</div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5"><TechIcon name="react" /></div>
                      <div className="w-5 h-5"><TechIcon name="tailwind" /></div>
                    </div>
                  </div>
                  <CodeSnippet lines={[
                    '<span class="text-accent-blue">export</span> <span class="text-white">default</span> Component;',
                    '&lt;{ }&gt; &lt;/&gt;'
                  ]} />
                </div>
              </FloatingCard>
            </div>

            {/* Soft radial glow behind image (between cards and image) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-accent-blue/25 via-accent-green/10 to-transparent filter blur-3xl opacity-80" />
            </div>

            {/* Main Image (foreground) - KEEP centered and above cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-30 rounded-xl overflow-hidden p-2 group mx-auto max-w-[420px]"
            >
              <img
                src="https://i.ibb.co.com/VWm19GP1/mx00n-removebg-preview-Picsart-Ai-Image-Enhancer.png"
                alt="About Me"
                className="w-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

          </div>
          <div className='my-8 lg:hidden md:hidden'></div>
          {/* 🔹 Right: Content */}
          <div className="space-y-8">

            {/* Responsive stat cards: mobile 1, tablet 2, desktop 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
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
                className="px-10 py-4 backdrop-blur-xl bg-white/6 text-text-primary font-bold rounded-xl transition-all flex items-center gap-2 group hover:bg-white/[0.05] border border-white/10"
              >
                Download CV
                <Download size={18} className="group-hover:translate-y-1 transition-transform text-accent-blue" />
              </motion.button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
// ...existing code...