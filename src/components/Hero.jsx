'use client';


import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Send, Sparkles, Code2, Rocket } from 'lucide-react';
import { useState, useEffect } from "react";
import { GrView } from "react-icons/gr";


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

const SocialIcon = ({ Icon: IconComponent, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, x: 5, boxShadow: "0 0 20px rgba(87,125,134,0.4)" }}
    className="w-12 h-12 flex items-center justify-center rounded-full glass-card text-text-secondary hover:text-accent-blue transition-all"
    aria-label={label}
  >
    <IconComponent size={20} />
  </motion.a>
);

const StatCard = ({ Icon: IconComponent, title, value, delay, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    className={`absolute glass-card p-4 rounded-xl flex items-center gap-3 z-20 hover:scale-105 transition-transform ${className}`}
  >
    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue">
      <IconComponent size={20} />
    </div>
    <div>
      <p className="text-[10px] text-text-secondary uppercase tracking-widest leading-none mb-1">{title}</p>
      <p className="text-lg font-bold text-text-primary leading-none">{value}</p>
    </div>
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Hero = () => {


  const roles = ["Frontend Developer", "Web Developer", "Full Stack Developer"];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);


  return (
    <section id="home" className="relative  container mx-auto   min-h-screen flex items-center pt-20 px-6 lg:px-12 overflow-hidden">
      {/* Removed Background Glow Spots */}

      {/* 🔹 Left: Vertical Socials */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute hidden   lg:flex left-6 lg:left-12 top-1/2 -translate-y-1/2  flex-col gap-6 z-30 overflow-x-hidden "
      >
        <SocialIcon Icon={LinkedinIcon} href="https://www.linkedin.com/in/jahid--hasan" label="LinkedIn" />
        <SocialIcon Icon={GithubIcon} href="https://github.com/jahidhasan909" label="GitHub" />
        <SocialIcon Icon={FacebookIcon} href="https://www.facebook.com/share/1KgUXoTT3Z/?mibextid=wwXIfr" label="Twitter" />
        <div className="w-[1px] h-24 bg-gradient-to-b from-accent-blue to-transparent self-center mt-2 opacity-50" />
      </motion.div>

      <div className="container mx-auto  w-full grid lg:grid-cols-2 gap-10 items-center relative z-10 lg:px-38">


        {/* 🔹 Center: Content */}
        <div className="">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left z-10 flex flex-col items-center lg:items-start gap-8"
          >
            <div className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl  font-medium"
              >
                Hey, I&apos;m
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className=" justify-center md:justify-items-start text-4xl md:text-5xl font-display font-black leading-tight text-text-primary flex items-center gap-2"
              >
                Jahid Hasan

                <motion.span
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="inline-block origin-bottom-right"
                >
                  👋
                </motion.span>
              </motion.h1>


              I am a{" "}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.4 }}
                    className=" lg:text-2xl"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>


              <motion.p
                variants={itemVariants}
                className="text-lg text-text-secondary max-w-xl leading-relaxed pt-4"
              >
                💻 Turning ideas into Stunning Websites <br />
                Available for projects and collaborations .
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row items-center lg:items-start gap-3"
            >

              <a href="#contact" className="w-full lg:w-auto flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 glass-card text-text-primary font-bold rounded-xl transition-all flex items-center gap-2 group hover:bg-white/[0.05]"
                >
                  Say Hello
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-accent-blue" />
                </motion.button>

              </a>


              <a href="/resume.pdf" >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-4 glass-card text-text-primary font-bold rounded-xl transition-all flex items-center   gap-2 group hover:bg-white/[0.05]"
                >
                  View Resume <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-accent-blue"><GrView /></span>

                </motion.button>
              </a>







            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-10 flex flex-col items-center lg:items-start gap-3"
            >
              {/* Mouse + scroll animation */}
              <div className="flex flex-row items-center gap-3">
                {/* Mouse Icon */}
                <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center p-1">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-1.5 h-1.5 bg-accent-blue rounded-full"
                  />
                </div>

                {/* Scroll text */}
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xs text-text-secondary tracking-widest"
                >
                  SCROLL DOWN
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 🔹 Right: Profile Image */}
        <div className="relative flex justify-center lg:justify-end py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0]
            }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1, ease: "backOut" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative"
          >
            {/* Animated Glow Border Rotating */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rounded-full animate-liquid-blob bg-gradient-to-tr from-accent-blue via-transparent to-accent-purple opacity-40 blur-md"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-dashed border-accent-blue/50 rounded-full animate-liquid-blob"
            />

            {/* Main Profile Image with Liquid Blob */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 p-2 bg-gradient-to-tr from-accent-blue/40 to-accent-purple/40 animate-liquid-blob overflow-hidden backdrop-blur-xl">
              <div className="w-full h-full animate-liquid-blob overflow-hidden bg-black/50">
                <img
                  src="https://i.ibb.co.com/gFdhsG7D/Gemini-Generated-Image-1we10c1we10c1we1-Photoroom.jpg"
                  alt="Nur Adnan"
                  className="w-full h-full object-cover transition-all duration-700 scale-110"
                />
              </div>
            </div>

            {/* Floating Stat Cards */}
            <StatCard
              Icon={Code2}
              title="Experience"
              value="6+ Months"
              delay={1.2}
              className="-top-8 -right-4 md:-right-12 backdrop-blur-2xl"
            />
            <StatCard
              Icon={Rocket}
              title="Projects"
              value="25+ Done"
              delay={1.4}
              className="-bottom-8 -left-4 md:-left-12 backdrop-blur-2xl"
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
};


export default Hero;

