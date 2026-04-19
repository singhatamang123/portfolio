'use client';

import { motion } from 'framer-motion';

const socials = [
  { label: 'GitHub', href: 'https://github.com/singhatamang123', icon: '⌨️' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/singhatamang', icon: '💼' },
  { label: 'Email', href: 'mailto:singhatamang456@gmail.com', icon: '✉️' },
];

const funFacts = [
  'COFFEE RUNS ON MY CODE',
  'TABS > SPACES ALWAYS',
  '3 AM BUG FIXES INCLUDED',
  'PIXEL PERFECT OR NOTHING',
  'DARK MODE IS THE ONLY MODE',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-24 pb-10 relative overflow-hidden">
      {/* Decorative Tilted Ribbon */}
      <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap py-2 bg-vivid-cyan -rotate-1 z-0 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
        <div className="animate-[marquee_30s_linear_infinite] inline-block">
          <span className="text-xs font-black mx-4 text-black uppercase tracking-widest">
            DESIGNER • DEVELOPER • CREATOR • DESIGNER • DEVELOPER • CREATOR • DESIGNER • DEVELOPER • CREATOR • DESIGNER • DEVELOPER • CREATOR
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 pt-10">
        {/* Big ghost headline */}
        <h2 className="text-[10vw] font-display leading-none mb-10 text-stroke text-white opacity-10 pointer-events-none">
          THAT&apos;S ALL<br />FOLKS
        </h2>

        {/* Fun facts marquee strip */}
        <div className="overflow-hidden whitespace-nowrap border-y border-white/10 py-4 mb-16">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="inline-flex gap-12"
          >
            {[...funFacts, ...funFacts].map((fact, i) => (
              <span key={i} className="text-sm font-black uppercase tracking-widest text-white/40 flex-shrink-0">
                ★ {fact}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Main footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-t border-white/10 pt-16">
          {/* Left: Contact + Socials */}
          <div className="text-left">
            <p className="text-4xl font-display font-black uppercase mb-2">LET&apos;S CHAT</p>
            <a href="mailto:singhatamang456@gmail.com" className="text-xl font-heading text-vivid-cyan hover:text-electric-pink transition-colors underline decoration-2 underline-offset-8 block mb-8">
              singhatamang456@gmail.com
            </a>
            {/* Social links */}
            <div className="flex gap-4">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 px-5 py-3 border-2 border-white/20 text-white/60 hover:border-electric-pink hover:text-electric-pink transition-all font-black text-sm uppercase tracking-wider"
                >
                  <span>{s.icon}</span>
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Availability badge + UP button */}
          <div className="flex flex-col items-center gap-6">
            {/* Availability */}
            <div className="flex items-center gap-3 px-6 py-3 border-2 border-lime-green/40 text-lime-green">
              <span className="w-2 h-2 rounded-full bg-lime-green animate-ping" />
              <span className="font-black text-sm uppercase tracking-widest">Available for work</span>
            </div>

            {/* UP button — bigger, pushed up away from LiveStatus */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.15, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="w-32 h-32 rounded-full border-4 border-lime-green flex items-center justify-center text-lime-green font-display font-black text-2xl shadow-[0_0_30px_rgba(50,205,50,0.4)] hover:bg-lime-green hover:text-black transition-all mb-24"
            >
              UP ↑
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-2 border-t border-white/10 pt-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
          <p>© {new Date().getFullYear()} SINGHA TAMANG</p>
          <p>BUILT WITH NEXT.JS + CHAOS ❤️</p>
          <p>NO RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}