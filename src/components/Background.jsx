// ...existing code...
'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Background = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const activeTheme = mounted ? (theme === 'system' ? systemTheme : theme) : 'dark';
  const isDark = activeTheme === 'dark';

  const styles = useMemo(() => {
    return {
      // light base now uses the requested gradient: #d9e3e9 -> #e9eff2
      baseGradient: isDark
        ? 'linear-gradient(135deg,#253841 0%,#0a0f1a 72%)'
        : 'linear-gradient(135deg,#d9e3e9 0%,#e9eff2 100%)',
      blobA: isDark
        ? 'radial-gradient(circle at 30% 30%, rgba(87,125,134,0.55), rgba(87,125,134,0) 62%)'
        : 'radial-gradient(circle at 30% 30%, rgba(233,239,242,0.28), rgba(233,239,242,0) 62%)',
      blobB: isDark
        ? 'radial-gradient(circle at 60% 40%, rgba(62,92,99,0.50), rgba(62,92,99,0) 60%)'
        : 'radial-gradient(circle at 60% 40%, rgba(180,195,205,0.36), rgba(180,195,205,0) 60%)',
      gridOpacity: isDark ? 0.10 : 0.06,
      noiseOpacity: isDark ? 0.05 : 0.02,
      vignette: isDark
        ? 'radial-gradient(70% 55% at 50% 25%, rgba(10,15,26,0) 0%, rgba(10,15,26,0.55) 72%, rgba(10,15,26,0.75) 100%)'
        : 'radial-gradient(70% 55% at 50% 25%, rgba(233,239,242,0) 0%, rgba(233,239,242,0.55) 72%, rgba(233,239,242,0.85) 100%)',
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none transition-colors duration-500">
      <div className="absolute inset-0 z-[-4]" style={{ background: styles.baseGradient }} />

      <div
        className="absolute inset-0 z-[-3]"
        style={{
          opacity: styles.gridOpacity,
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(60% 55% at 50% 35%, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(60% 55% at 50% 35%, black 0%, transparent 75%)',
        }}
      />

      <motion.div
        className="absolute -top-32 -left-32 z-[-2] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: styles.blobA }}
        animate={{ x: [0, 80, -20, 0], y: [0, 30, 90, 0], scale: [1, 1.08, 0.98, 1], opacity: [0.35, 0.55, 0.40, 0.35] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -bottom-40 -right-40 z-[-2] h-[640px] w-[640px] rounded-full blur-3xl"
        style={{ background: styles.blobB }}
        animate={{ x: [0, -70, 30, 0], y: [0, -40, -90, 0], scale: [1, 1.06, 0.99, 1], opacity: [0.28, 0.42, 0.32, 0.28] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 z-[-1]" style={{ background: styles.vignette }} />

      <div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{ opacity: styles.noiseOpacity }}>
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
// ...existing code...