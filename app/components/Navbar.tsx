'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const GitHubIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Detect scroll to add stronger background blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(5, 7, 15, 0.92)'
            : 'rgba(5, 7, 15, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.08)'
            : '1px solid rgba(255,255,255,0.04)',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative group flex items-center gap-2"
          >
            {/* Accent dot */}
            <span
              className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-cyan-400 transition-colors duration-300"
              style={{ boxShadow: '0 0 8px rgba(96,165,250,0.8)' }}
            />
            <span className="text-xl font-bold tracking-tight text-white">
              Singha
              <span className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">.</span>
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 group"
                  style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.55)' }}
                >
                  {/* Active background pill */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Right: Social Icons + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* GitHub */}
            <motion.a
              href="https://github.com/singhatamang123"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl text-white/50 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/singhatamang"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl text-white/50 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </motion.a>

            {/* Divider */}
            <div className="w-px h-5 bg-white/10 mx-1" />

            {/* Hire Me CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 rounded-xl text-sm font-medium text-black transition-all"
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #22d3ee)',
                boxShadow: '0 0 16px rgba(96,165,250,0.3)',
              }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile: social icons + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a href="https://github.com/singhatamang123" target="_blank" rel="noopener noreferrer"
              className="p-1.5 text-white/50 hover:text-white transition-colors" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="p-1.5 text-white/70 hover:text-white transition-colors"
            >
              <motion.div animate={isMenuOpen ? 'open' : 'closed'} className="w-5 h-4 flex flex-col justify-between">
                <motion.span className="block h-0.5 bg-current rounded-full origin-left"
                  variants={{ open: { rotate: 45, y: -1 }, closed: { rotate: 0, y: 0 } }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span className="block h-0.5 bg-current rounded-full"
                  variants={{ open: { opacity: 0, x: -8 }, closed: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span className="block h-0.5 bg-current rounded-full origin-left"
                  variants={{ open: { rotate: -45, y: 1 }, closed: { rotate: 0, y: 0 } }}
                  transition={{ duration: 0.25 }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col"
              style={{
                background: 'rgba(8, 11, 22, 0.97)',
                backdropFilter: 'blur(24px)',
                borderLeft: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/8">
                <span className="text-lg font-bold text-white">
                  Singha<span className="text-blue-400">.</span>
                </span>
                <button onClick={() => setIsMenuOpen(false)}
                  className="p-1.5 text-white/50 hover:text-white transition-colors" aria-label="Close menu">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-1 p-4 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1, duration: 0.3 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-white/70 hover:text-white hover:bg-white/6 transition-all text-base font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Panel footer CTA */}
              <div className="p-6 border-t border-white/8 space-y-3">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-3 rounded-xl text-sm font-semibold text-black text-center transition-all"
                  style={{ background: 'linear-gradient(135deg, #60a5fa, #22d3ee)' }}
                >
                  Hire Me
                </a>
                <div className="flex items-center justify-center gap-4 pt-1">
                  <a href="https://github.com/singhatamang123" target="_blank" rel="noopener noreferrer"
                    className="p-2 text-white/40 hover:text-white transition-colors" aria-label="GitHub">
                    <GitHubIcon />
                  </a>
                  <a href="https://linkedin.com/in/singhatamang" target="_blank" rel="noopener noreferrer"
                    className="p-2 text-white/40 hover:text-white transition-colors" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}