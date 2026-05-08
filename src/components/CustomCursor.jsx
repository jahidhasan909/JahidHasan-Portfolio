'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

    const moveCursor = (e) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(outline, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
      });
    };

    const handleHover = () => {
      gsap.to(outline, {
        scale: 2,
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderColor: 'rgba(59, 130, 246, 0.5)',
        duration: 0.3,
      });
    };

    const handleHoverExit = () => {
      gsap.to(outline, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'rgba(59, 130, 246, 0.3)',
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    const hoverElements = document.querySelectorAll('a, button, .cursor-pointer');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleHoverExit);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleHoverExit);
      });
    };
  }, []);

  return (
    <div className='custom-cursor'>
      <div
        ref={dotRef}
        className="cursor-dot   fixed top-0 left-0 w-2 h-2 bg-accent-blue rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={outlineRef}
        className="cursor-outline fixed top-0 left-0 w-10 h-10 border border-accent-blue/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform ease-out"
      />
    </div>
  );
};

export default CustomCursor;
