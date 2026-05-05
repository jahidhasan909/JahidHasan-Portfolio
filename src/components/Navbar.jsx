// ...existing code...
'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { name: 'home', id: 'home', icon: "https://i.ibb.co.com/Hp9hWjyf/Screenshot-2026-05-04-at-12-33-01-AM-removebg-preview.png" },
    { name: 'about', id: 'about', icon: "https://i.ibb.co.com/msmJ5ZL/Screenshot-2026-05-04-at-12-35-45-AM-removebg-preview.png" },
    { name: 'tech stack', id: 'technologies', icon: "https://i.ibb.co.com/DD55mP6x/Screenshot-2026-05-04-at-12-33-37-AM-removebg-preview.png" },
    { name: "skills", id: 'skills', icon: "https://i.ibb.co.com/gMg5xDfn/Screenshot-2026-05-04-at-1-37-16-AM-removebg-preview.png" },
    { name: 'qualification', id: 'qualification', icon: "https://i.ibb.co.com/n8n5JzB2/Screenshot-2026-05-04-at-12-34-18-AM-removebg-preview.png" },
    { name: 'projects', id: 'projects', icon: "https://i.ibb.co.com/KcpRHFJZ/Screenshot-2026-05-04-at-12-35-07-AM-removebg-preview.png" },
    { name: 'contact me', id: 'contact', icon: "https://i.ibb.co.com/LXMKZQhD/Screenshot-2026-05-04-at-12-36-09-AM-removebg-preview.png" }
  ];

  // avoid mismatch during SSR — only apply light-logo bg after mount
  const logoBgClass = mounted && theme === 'light' ? 'bg-[#476970]  rounded-xl w-12' : 'bg-transparent w-20';

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] py-6">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between ">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`flex items-center rounded-full p-1 ${logoBgClass}`}
        >
          <img className='' src="https://i.ibb.co.com/tThXTWJ1/Green-Minimalist-Initials-Logo-removebg-preview.png" alt="logo" />
        </motion.div>

        {/* Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden  lg:flex glass-card rounded-full py-2 px-2"
        >
          <ul className="flex gap-1 text-[9px] font-bold uppercase tracking-widest">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setActive(item.id)}
                  className={`relative flex items-center  justify-center   gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ease-out block
                    ${active === item.id
                      ? "bg-white/10 backdrop-blur-xl border border-white/20"
                      : "text-text-secondary hover:text-white hover:bg-white/5"
                    }`}
                >
                  <img className='w-4' src={item.icon} alt="" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Theme Toggle */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 flex items-center justify-center glass-card rounded-full border border-white/10 text-accent-blue hover:bg-accent-blue hover:text-white transition-all duration-300"
            aria-label="Toggle Theme"
          >
            <span suppressHydrationWarning>
              {mounted ? (theme === 'dark' ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />) : null}
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-blue origin-left opacity-60"
      />
    </nav>
  );
};

export default Navbar;
// ...existing code...