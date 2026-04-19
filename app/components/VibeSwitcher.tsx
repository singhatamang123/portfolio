'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const vibes = [
  { id: 'dopamine', label: 'DOPAMINE', icon: '🌈' },
  { id: 'cyberpunk', label: 'CYBERPUNK', icon: '🌃' },
  { id: 'retro', label: 'RETRO', icon: '🗞️' },
  { id: 'calm', label: 'CALM', icon: '☕' },
];

export default function VibeSwitcher() {
  const [currentVibe, setCurrentVibe] = useState('dopamine');

  useEffect(() => {
    document.documentElement.setAttribute('data-vibe', currentVibe);
    // Force grain opacity update
    const grainOpacity = getComputedStyle(document.documentElement).getPropertyValue('--grain-opacity').trim() || '0.05';
    document.documentElement.style.setProperty('--current-grain-opacity', grainOpacity);
  }, [currentVibe]);

  const toggleVibe = () => {
    const currentIndex = vibes.findIndex(v => v.id === currentVibe);
    const nextIndex = (currentIndex + 1) % vibes.length;
    setCurrentVibe(vibes[nextIndex].id);
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      <Magnetic strength={0.4}>
        <motion.button
          onClick={toggleVibe}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
          data-cursor="hover"
          data-cursor-label="SWITCH VIBE"
          className="relative group bg-white dark:bg-black border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          <span className="text-2xl">{vibes.find(v => v.id === currentVibe)?.icon}</span>
          <div className="flex flex-col items-start overflow-hidden h-6">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentVibe}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="font-display font-black text-xs uppercase tracking-widest text-black dark:text-white"
              >
                {vibes.find(v => v.id === currentVibe)?.label} MODE
              </motion.span>
            </AnimatePresence>
          </div>
          
          {/* Decorative indicator */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-lime-green border-2 border-black rounded-full animate-pulse" />
        </motion.button>
      </Magnetic>
    </div>
  );
}
