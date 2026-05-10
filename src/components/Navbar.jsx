// ...existing code...
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const { scrollYProgress } = useScroll();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onClick = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false);
    };
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const navItems = [
    { name: 'home', id: 'home', icon: 'https://i.ibb.co.com/Hp9hWjyf/Screenshot-2026-05-04-at-12-33-01-AM-removebg-preview.png' },
    { name: 'about', id: 'about', icon: 'https://i.ibb.co.com/msmJ5ZL/Screenshot-2026-05-04-at-12-35-45-AM-removebg-preview.png' },
    { name: 'tech stack', id: 'technologies', icon: 'https://i.ibb.co.com/DD55mP6x/Screenshot-2026-05-04-at-12-33-37-AM-removebg-preview.png' },
    { name: 'skills', id: 'skills', icon: 'https://i.ibb.co.com/gMg5xDfn/Screenshot-2026-05-04-at-1-37-16-AM-removebg-preview.png' },
    { name: 'qualification', id: 'qualification', icon: 'https://i.ibb.co.com/n8n5JzB2/Screenshot-2026-05-04-at-12-34-18-AM-removebg-preview.png' }
  ];

  const moreItems = [
    { name: 'projects', id: 'projects', icon: 'https://i.ibb.co.com/KcpRHFJZ/Screenshot-2026-05-04-at-12-35-07-AM-removebg-preview.png' },
    { name: 'contact me', id: 'contact', icon: 'https://i.ibb.co.com/LXMKZQhD/Screenshot-2026-05-04-at-12-36-09-AM-removebg-preview.png' }
  ];

  // apply specified logo background only when theme is light (white theme)
  const logoBgClass = mounted && theme === 'light' ? 'bg-[#476970] rounded-xl p-1' : 'bg-transparent';

  return (
    <div>
      {/* Scroll Progress (fixed top) */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[300] h-[4px] bg-[#668395] origin-left opacity-60"
      />

      <nav className="fixed top-0 left-0 w-full z-[100] py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className={`flex items-center ${logoBgClass}`}>
            <img
              className="w-16 h-auto"
              src="https://i.ibb.co.com/tThXTWJ1/Green-Minimalist-Initials-Logo-removebg-preview.png"
              alt="logo"
            />
          </motion.div>

          {/* Desktop Menu */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="hidden  lg:flex glass-card rounded-full py-2 px-2">
            <ul className="flex gap-2 text-[11px] font-bold uppercase tracking-widest">
              {navItems.map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => {
                      setActive(item.id);
                      setMoreOpen(false);
                    }}
                    className={`flex items-center gap-2 px-4 h-10 rounded-full transition-all duration-200 ${active === item.id
                        ? 'bg-white/10 backdrop-blur-xl border border-white/20 text-white'
                        : 'text-text-secondary hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <img
                      className="w-[15px] h-[15px] object-contain relative -top-[1px]"
                      src={item.icon}
                      alt=""
                    />

                    <span className="leading-none mt-[1px]">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}

              {/* More dropdown */}
              <li ref={moreRef} className="relative">
                <button
                  onClick={() => setMoreOpen(v => !v)}
                  aria-expanded={moreOpen}
                  className={`flex items-center gap-2 px-4 h-10 rounded-full transition-all duration-200 ${moreOpen
                      ? 'bg-white/10 backdrop-blur-xl border border-white/20 text-white'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                    }`}
                >
                  <ChevronDown
                    size={15}
                    className="relative -top-[1px]"
                  />

                  <span className="leading-none mt-[1px]">
                    More
                  </span>
                </button>

                {/* Dropdown panel */}
                {moreOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white/6 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg z-40">
                    <ul className="flex flex-col p-2">
                      {moreItems.map(mi => (
                        <li key={mi.id}>
                          <a
                            href={`#${mi.id}`}
                            onClick={() => { setActive(mi.id); setMoreOpen(false); }}
                            className="flex items-center gap-2 px-3 py-2 rounded-md text-text-secondary hover:text-white hover:bg-white/5 transition"
                          >
                            <img className="w-4" src={mi.icon} alt="" />
                            {mi.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </motion.div>

          {/* Theme Toggle */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 flex items-center justify-center backdrop-blur-xl bg-white/4 rounded-full border border-white/10 text-accent-blue hover:bg-accent-blue hover:text-white transition-all duration-300"
              aria-label="Toggle Theme"
            >
              <span suppressHydrationWarning>
                {mounted ? (theme === 'dark' ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />) : null}
              </span>
            </button>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
// ...existing code...