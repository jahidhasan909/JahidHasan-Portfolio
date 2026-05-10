'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <img src="https://i.ibb.co.com/7MgkXDD/Untitled-design-1-removebg-preview.png" alt="" />
);

const Footer = () => {


  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <footer className="pt-17 my-8 relative overflow-hidden border rounded-xl border-white/5 max-w-[380px] md:max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center relative z-10">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-13 h-13 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
            <img className='w-16' src="https://i.ibb.co.com/tThXTWJ1/Green-Minimalist-Initials-Logo-removebg-preview.png" alt="" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-2"
        >
          <h1 className="text-xl font-bold flex items-center gap-2 uppercase tracking-[0.1em]">
            Jahid Hasan
          </h1>
        </motion.div>

        <motion.div>
          <p className="text-[13px] mb-7 text-center text-text-secondary font-bold flex items-center gap-2  tracking-[0.1em]">
            Frontend-focused full-stack developer specializing <br /> in modern web technologies and creating smooth user experiences.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-8 md:gap-10 mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary">
          <li><a className="hover:text-accent-blue transition-colors" href="#home">Home</a></li>
          <li><a className="hover:text-accent-blue transition-colors" href="#about">About</a></li>
          <li><a className="hover:text-accent-blue transition-colors" href="#skills">Skills</a></li>
          <li><a className="hover:text-accent-blue transition-colors" href="#projects">Projects</a></li>
          <li><a className="hover:text-accent-blue transition-colors" href="#contact">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 mb-12">
          {[
            { Icon: GithubIcon, href: "https://github.com/jahidhasan909" },
            { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/jahid--hasan" },
            { Icon: Mail, href: "mailto:jjjjahidhasan999@gmail.com" },
            { Icon: FacebookIcon, href: "https://www.facebook.com/share/1KgUXoTT3Z/?mibextid=wwXIfr" }
          ].map((social, i) => {
            const IconComponent = social.Icon;
            return (
              <motion.a
                key={i}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:text-accent-blue transition-all"
                href={social.href}
              >
                <IconComponent size={20} />
              </motion.a>
            );
          })}
        </div>



      </div>
      <div className="w-24  mx-auto h-1 bg-gradient-to-r from-accent-blue to-accent-purple mt-2 mb-3 rounded-full" />
      {/* Copyright */}
      <div className="flex pb-5 flex-col items-center gap-2 text-center">
        <p className="text-[8px] text-text-secondary font-bold tracking-[0.3em] uppercase text-center">
          © {new Date().getFullYear()} Jahid Hasan. All rights reserved.
        </p>
      </div>


      {showButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:text-accent-blue shadow-lg shadow-accent-blue/20 transition-all z-50"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}

      {/* Decorative Glow */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-accent-blue/10 blur-[100px] rounded-full -z-10" />
    </footer>
  );
};

export default Footer;
