'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-24 relative overflow-hidden">
      {/* Decorative Tilted Ribbon */}
      <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap py-2 bg-vivid-cyan -rotate-1 z-0 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
        <div className="animate-[marquee_30s_linear_infinite] inline-block">
          <span className="text-xs font-black mx-4 text-black uppercase tracking-widest">
            DESIGNER • DEVELOPER • CREATOR • DESIGNER • DEVELOPER • CREATOR • DESIGNER • DEVELOPER • CREATOR • DESIGNER • DEVELOPER • CREATOR
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 text-center relative z-10 pt-10">
        <h2 className="text-[10vw] font-display leading-none mb-10 text-stroke text-white opacity-10 pointer-events-none">
          THAT&apos;S ALL<br />FOLKS
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-t border-white/10 pt-16">
          <div className="text-left">
            <p className="text-4xl font-display font-black uppercase mb-2">LET&apos;S CHAT</p>
            <a href="mailto:singhatamang456@gmail.com" className="text-xl font-heading text-vivid-cyan hover:text-electric-pink transition-colors underline decoration-2 underline-offset-8">
              singhatamang456@gmail.com
            </a>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="w-24 h-24 rounded-full border-4 border-lime-green flex items-center justify-center text-lime-green font-display font-black text-2xl shadow-[0_0_20px_rgba(50,205,50,0.3)] hover:bg-lime-green hover:text-black transition-all"
          >
            UP ↑
          </motion.button>
        </div>

        <div className="mt-20 flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
          <p>© {new Date().getFullYear()} SINGHA TAMANG</p>
          <span className="w-1 h-1 bg-white/20 rounded-full" />
          <p>NO RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}