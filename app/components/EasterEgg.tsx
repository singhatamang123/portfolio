'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EasterEgg() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerChaos = () => {
    // 1. Trigger Confetti Simulation (Framer Motion)
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);

    // 2. Flip Site
    setIsFlipped(true);
    setTimeout(() => setIsFlipped(false), 3000);
  };

  useEffect(() => {
    const wrapper = document.getElementById('chaos-wrapper');
    if (!wrapper) return;

    if (isFlipped) {
      wrapper.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
      wrapper.style.transform = 'rotate(180deg)';
    } else {
      wrapper.style.transform = '';
    }
    return () => {
      wrapper.style.transform = '';
    };
  }, [isFlipped]);

  return (
    <>
      {/* The Hidden Trigger (A tiny, subtle ghost in the bottom right) */}
      <div className="fixed bottom-4 right-4 z-[1000] group">
        <motion.button
          onClick={triggerChaos}
          whileHover={{ scale: 2.5, rotate: 180 }}
          className="w-4 h-4 flex items-center justify-center bg-foreground/5 rounded-full hover:bg-electric-pink transition-all cursor-help"
          title="???"
        >
          <span className="opacity-0 group-hover:opacity-100 text-[10px]">👻</span>
        </motion.button>
        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-foreground text-background p-2 font-black text-[10px] uppercase pointer-events-none border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          DON&apos;T PRESS THIS
        </div>
      </div>

      {/* Chaos Particles (Simple confetti) */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-[2000] overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: '50vw', 
                  y: '50vh', 
                  scale: 0, 
                  rotate: 0 
                }}
                animate={{ 
                  x: `${Math.random() * 100}vw`, 
                  y: `${Math.random() * 100}vh`, 
                  scale: [0, 1.5, 0.5],
                  rotate: Math.random() * 360 * 2,
                  backgroundColor: ['#FF00FF', '#00FFFF', '#32CD32', '#FF4500'][Math.floor(Math.random() * 4)]
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2, 
                  ease: "easeOut" 
                }}
                className="absolute w-4 h-4 border-2 border-black"
              />
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 2 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-8 border-black p-12 z-[2001] shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
            >
              <h2 className="text-8xl font-display font-black text-black uppercase leading-none text-center">
                CHAOS<br/>MODE!
              </h2>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
