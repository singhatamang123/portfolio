'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';



export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<{ type: string; label: string }>({ type: 'default', label: '' });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };

  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      // Subtract 22 (half of 44px) to center — avoids translateX/x conflict
      cursorX.set(e.clientX - 22);
      cursorY.set(e.clientY - 22);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverEl = target.closest('[data-cursor]');

      if (hoverEl) {
        const type = hoverEl.getAttribute('data-cursor') || 'hover';
        const label = hoverEl.getAttribute('data-cursor-label') || '';
        setCursorState({ type, label });
      } else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setCursorState({ type: 'hover', label: '' });
      } else {
        setCursorState({ type: 'default', label: '' });
      }
    };

    const handleClick = () => {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'square';
        osc.frequency.setValueAtTime(4000, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.02);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.02);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.02);
      } catch { }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('mousedown', handleClick);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="hidden md:flex fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference items-center justify-center rounded-full overflow-hidden border-2 border-white/80"
        style={{
          x: smoothX,
          y: smoothY,
          width: 44,
          height: 44,
        }}
        animate={{
          scale: cursorState.type !== 'default' ? 2.8 : 1.1,
          backgroundColor:
            cursorState.type === 'hover'
              ? '#FF00FF' // Hot magenta
              : cursorState.type !== 'default'
                ? '#00FFFF' // Electric cyan
                : '#FF00AA', // Vibrant hot pink base
          borderColor: cursorState.type === 'hover' ? '#00FFAA' : '#FFFFFF',
          boxShadow: cursorState.type !== 'default'
            ? '0 0 40px #FF00FF, 0 0 80px #00FFFF'
            : '0 0 25px #FF00AA',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        {/* Inner chaotic layer for maximalist texture */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-pink-500 to-cyan-400 opacity-70 mix-blend-overlay"
          animate={{
            rotate: cursorState.type !== 'default' ? 360 : 0,
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        {/* Subtle grain/noise overlay simulation via CSS (add real noise texture if you have one) */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:4px_4px] opacity-20 pointer-events-none" />

        <AnimatePresence mode="wait">
          {cursorState.label && (
            <motion.span
              key={cursorState.label}
              initial={{ opacity: 0, scale: 0.6, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: -12 }}
              className="text-[9px] font-black uppercase tracking-[2px] text-black text-center leading-none px-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]"
            >
              {cursorState.label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}