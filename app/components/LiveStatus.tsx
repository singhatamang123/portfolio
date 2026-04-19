'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveStatus() {
  const [time, setTime] = useState('00:00:00');
  const [lastCommit, setLastCommit] = useState<string>('FETCHING GITHUB...');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 1. Local Time (Kathmandu)
  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 2. GitHub Activity
  useEffect(() => {
    fetch('https://api.github.com/users/singhatamang123/events/public')
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data)) return;
        const pushEvent = data.find((event: any) => event.type === 'PushEvent');
        if (pushEvent) {
          const date = new Date(pushEvent.created_at);
          const diffHours = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60));
          if (diffHours === 0) setLastCommit('CODED < 1 HR AGO');
          else setLastCommit(`CODED ${diffHours} HRS AGO`);
        } else {
          setLastCommit('NO RECENT COMMITS');
        }
      })
      .catch(() => setLastCommit('GITHUB OFFLINE'));
  }, []);

  return (
    <AnimatePresence>
    {visible && (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 80, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="fixed bottom-24 right-8 z-[100] flex flex-col items-end gap-3 pointer-events-none hidden md:flex"
    >
      
      {/* GitHub Status */}
      <motion.div 
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25, delay: 1 }}
        className="bg-lime-green border-4 border-black px-4 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] pointer-events-auto rotate-1 hover:rotate-0 hover:scale-105 transition-transform cursor-pointer"
      >
        <p className="font-black uppercase text-xs tracking-widest flex items-center gap-2 text-black">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          {lastCommit}
        </p>
      </motion.div>

      {/* Local Time */}
      <motion.div 
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25, delay: 1.1 }}
        className="bg-vivid-cyan border-4 border-black px-4 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] pointer-events-auto -rotate-2 hover:rotate-0 hover:scale-105 transition-transform cursor-pointer"
      >
        <p className="font-black uppercase text-xs tracking-widest text-black">
          KTM {time}
        </p>
      </motion.div>

      {/* Spotify Visualizer (Vibe Simulation) */}
      <motion.div 
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25, delay: 1.2 }}
        className="bg-black border-4 border-electric-pink px-4 py-2 shadow-[6px_6px_0px_0px_rgba(255,0,255,1)] pointer-events-auto flex items-center gap-3 rotate-1 hover:rotate-0 hover:scale-105 transition-transform cursor-pointer"
      >
        {/* CSS Equalizer */}
        <div className="flex items-end gap-[2px] h-3">
          <motion.div animate={{ height: ['40%', '100%', '40%'] }} transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }} className="w-1 bg-electric-pink" />
          <motion.div animate={{ height: ['100%', '30%', '100%'] }} transition={{ repeat: Infinity, duration: 0.6, ease: 'linear' }} className="w-1 bg-vivid-cyan" />
          <motion.div animate={{ height: ['60%', '100%', '60%'] }} transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }} className="w-1 bg-lime-green" />
        </div>
        <div className="overflow-hidden w-32 relative">
          <motion.div 
            animate={{ x: [0, -150] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            className="flex whitespace-nowrap"
          >
            <p className="font-black uppercase text-[10px] tracking-widest text-white shrink-0">
              VIBING TO CHAOS • VIBING TO CHAOS • 
            </p>
          </motion.div>
        </div>
      </motion.div>

    </motion.div>
    )}
    </AnimatePresence>
  );
}
