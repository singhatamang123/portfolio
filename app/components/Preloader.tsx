'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const targetText = "SINGHA";
  const [displayedText, setDisplayedText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      setDisplayedText(targetText.slice(0, currentIndex));
      
      if (currentIndex >= targetText.length) {
        clearInterval(interval);
        // Short pause before firing the exit animation
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = '';
        }, 800); 
      }
    }, 500);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100vh' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9000] bg-black text-white flex flex-col items-center justify-center overflow-hidden border-b-8 border-electric-pink"
        >
          {/* Background noise/grain */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

          {/* Huge scrolling background text for maximalist feel */}
          <div className="absolute top-1/4 left-0 w-[200vw] whitespace-nowrap opacity-5 pointer-events-none -rotate-12">
            <h1 className="text-[30vw] font-display font-black leading-none">
              INITIALIZING INITIALIZING INITIALIZING
            </h1>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.h1 
              className="text-[15vw] md:text-[12vw] font-display font-black leading-none tracking-tighter text-white drop-shadow-[10px_10px_0_rgba(255,0,255,1)] h-[15vw] md:h-[12vw] flex items-center justify-center uppercase"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {displayedText}
            </motion.h1>
            
            <div className="flex items-center gap-4 mt-8 bg-white text-black px-6 py-2 border-4 border-electric-pink shadow-[5px_5px_0px_0px_rgba(0,255,255,1)] rotate-[-2deg]">
              <span className="font-heading uppercase font-black tracking-widest text-lg">
                SYSTEM BOOT
              </span>
              <div className="w-32 h-3 bg-black/10 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-electric-pink transition-all duration-150"
                  style={{ width: `${(displayedText.length / targetText.length) * 100}%` }}
                />
              </div>
            </div>
            
            <p className="mt-12 font-mono text-sm text-vivid-cyan animate-pulse uppercase font-black tracking-widest bg-black p-2">
              [ LOADING CHAOS MODULES ]
            </p>
          </div>

          {/* Brutalist accents */}
          <div className="absolute top-8 left-8 text-xs font-black uppercase tracking-widest bg-white text-black px-2">
            ST_OS v1.0
          </div>
          <div className="absolute bottom-8 right-8 text-xs font-black uppercase tracking-widest bg-lime-green text-black px-2 rotate-2 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
            PLEASE STAND BY
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
