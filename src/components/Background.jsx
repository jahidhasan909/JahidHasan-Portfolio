'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none transition-colors duration-500">
      {/* 🔹 Animated Dark Gradient */}
      <motion.div
        className="absolute inset-0 opacity-40 dark:opacity-70"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundImage: "linear-gradient(-45deg, #111827, #000000, #081014, #111827)",
          backgroundSize: "400% 400%",
        }}
      />
      {/* 🔹 Light Trails (SVG) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-50 dark:opacity-100" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--color-accent-blue)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Horizontal Trails */}
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={`h-trail-${i}`}
            d={`M -10 ${20 * (i + 1)} L 110 ${20 * (i + 1)}`}
            stroke="url(#trailGradient)"
            strokeWidth="0.1"
            fill="none"
            initial={{ pathLength: 0, pathOffset: -1 }}
            animate={{ pathOffset: [1, -1] }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3
            }}
          />
        ))}

        {/* Diagonal Trails */}
        {[...Array(3)].map((_, i) => (
          <motion.path
            key={`d-trail-${i}`}
            d={`M ${10 * i} -10 L ${100 + 10 * i} 110`}
            stroke="url(#trailGradient)"
            strokeWidth="0.1"
            fill="none"
            initial={{ pathLength: 0, pathOffset: -1 }}
            animate={{ pathOffset: [1, -1] }}
            transition={{
              duration: 20 + i * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 5
            }}
            style={{ opacity: 0.3 }}
          />
        ))}
      </svg>

      {/* 🔹 Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

    </div>
  );
};

export default Background;


