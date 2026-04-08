'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ROLES = [
  'Full Stack Developer',
  'Frontend Developer',
  'React Specialist',
  'UI/UX Enthusiast',
  'Next.js Developer',
];

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-2xl text-white/40 font-light tracking-wide">
      {displayed}
      <span className="inline-block w-0.5 h-6 bg-blue-400 ml-1 align-middle animate-pulse" />
    </span>
  );
}

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/SinghaTamang_CV.pdf';           // Path to your PDF in public folder
    link.download = 'SinghaTamang_CV.pdf';   // Name shown when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen pt-24 flex items-center relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-[-80px] right-[-60px] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-60px] left-[100px] w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for freelance opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            className="font-bold leading-none tracking-tighter mb-4"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
          >
            Hi, I&apos;m<br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Singha
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-5 h-9"
          >
            <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-white/55 leading-relaxed max-w-md mb-8"
            style={{ fontWeight: 300 }}
          >
            I craft fast, modern, and pixel-perfect web experiences that feel
            intuitive and look stunning — from concept to deployment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 bg-white text-black font-medium rounded-2xl flex items-center gap-2 hover:bg-slate-100 transition-all text-sm"
            >
              View Projects →
            </motion.a>

            {/* Download CV Button - Fixed & Reliable */}
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 bg-blue-500/10 border border-blue-500/30 hover:border-blue-400/60 hover:bg-blue-500/20 rounded-2xl font-medium transition-all text-sm text-blue-400 flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </motion.button>

            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 border border-white/20 hover:border-white/50 rounded-2xl font-medium transition-all text-sm text-white/70"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-2"
          >
            {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Python', 'Figma'].map((tech) => (
              <span key={tech} className="px-4 py-1.5 rounded-full text-xs font-medium tracking-wider border border-white/10 bg-white/5 text-white/50">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Photo Card */}
        <div className="flex justify-center md:justify-end">
          <div className="relative" style={{ width: 340, marginRight: 20, marginBottom: 20 }}>
            <div className="absolute -z-10 rounded-full"
              style={{ inset: -30, background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.18) 0%, transparent 70%)' }} />

            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 40 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative overflow-hidden border border-white/10"
              style={{ width: 340, height: 420, borderRadius: 28, background: 'linear-gradient(160deg, #1a2035 0%, #0d1525 100%)' }}
            >
              <Image 
                src="/singha.jpg" 
                alt="Singha — Full Stack Developer" 
                fill 
                sizes="340px"
                className="object-cover object-top" 
                style={{ filter: 'brightness(0.9) contrast(1.05)' }} 
                priority 
              />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #05070f 0%, rgba(5,7,15,0.25) 45%, transparent 100%)' }} />
            </motion.div>

            {/* Open to Work badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute flex items-center gap-2 z-20"
              style={{ 
                top: -14, 
                right: -14, 
                background: 'rgba(10,20,10,0.88)', 
                border: '1px solid rgba(74,222,128,0.3)', 
                backdropFilter: 'blur(16px)', 
                borderRadius: 14, 
                padding: '10px 16px' 
              }}
            >
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              <span className="text-green-400 text-sm font-medium tracking-wide whitespace-nowrap">Open to work</span>
            </motion.div>

            {/* Years Experience badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute z-20"
              style={{ 
                bottom: -12, 
                left: -14, 
                background: 'rgba(8,14,30,0.88)', 
                border: '1px solid rgba(96,165,250,0.2)', 
                backdropFilter: 'blur(16px)', 
                borderRadius: 14, 
                padding: '12px 16px', 
                minWidth: 130 
              }}
            >
              <p className="text-2xl font-bold text-blue-400 leading-none">3+</p>
              <p className="text-xs text-white/45 mt-1.5 tracking-wider">Years Experience</p>
            </motion.div>

            {/* Projects Done badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute z-20"
              style={{ 
                bottom: -12, 
                right: -14, 
                background: 'rgba(8,14,30,0.88)', 
                border: '1px solid rgba(34,211,238,0.2)', 
                backdropFilter: 'blur(16px)', 
                borderRadius: 14, 
                padding: '12px 16px', 
                minWidth: 120 
              }}
            >
              <p className="text-2xl font-bold text-cyan-400 leading-none">6+</p>
              <p className="text-xs text-white/45 mt-1.5 tracking-wider">Projects Done</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.4 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs tracking-widest text-slate-500"
      >
        SCROLL TO EXPLORE
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
}