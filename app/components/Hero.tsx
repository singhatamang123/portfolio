'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Magnetic from './Magnetic';

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
      setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-2xl text-lime-green font-black uppercase tracking-tighter">
      {displayed}
      <span className="inline-block w-2 h-8 bg-electric-pink ml-1 align-middle animate-pulse" />
    </span>
  );
}

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/SinghaTamang_CV.pdf';
    link.download = 'SinghaTamang_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden bg-white dark:bg-black bg-grain">
      {/* Maximalist Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-electric-pink opacity-20 blur-[150px] animate-float" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-lime-green opacity-20 blur-[120px]" />
        <div className="absolute top-[20%] left-[40%] w-[30%] h-[30%] bg-vivid-cyan opacity-20 blur-[100px] animate-pulse" />

        {/* Geometric Accents */}
        <div className="absolute top-1/4 right-10 w-64 h-64 border-8 border-royal-purple/20 rotate-12" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 border-8 border-sunset-orange/20 -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10">
        {/* LEFT SIDE: Content */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-flex items-center gap-3 px-6 py-3 border-4 border-black bg-lime-green text-black font-black uppercase text-xs tracking-tighter shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-10"
          >
            <span className="w-3 h-3 bg-black animate-ping" />
            <span>Available&nbsp;&nbsp;&nbsp;for&nbsp;&nbsp;&nbsp;freelance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
            className="leading-[0.85] mb-8"
          >
            <span className="block text-stroke text-black dark:text-white text-[12vw] lg:text-[10rem] opacity-30 absolute -top-16 -left-4 z-[-1]">
              HELLO
            </span>
            <span className="block font-display text-[15vw] lg:text-[9rem] tracking-tighter text-black dark:text-white">
              Hi, I&apos;m<br />
              <span className="relative inline-block">
                <span className="bg-electric-pink text-white px-4 inline-block -rotate-2 transform">Singha</span>
                <motion.span
                  className="absolute -bottom-2 left-4 right-4 h-2 bg-lime-green"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: [0, 1, 0.8, 1] }}
                  transition={{ delay: 1, duration: 0.6, ease: 'backOut' }}
                  style={{ originX: 0 }}
                />
              </span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8 flex flex-col"
          >
            <div className="bg-black text-lime-green px-6 py-2 inline-block self-start font-heading text-3xl md:text-4xl transform rotate-1 mb-4">
              <Typewriter />
            </div>
            <p className="text-xl md:text-2xl text-black/70 dark:text-white/70 font-medium max-w-xl leading-tight">
              I craft <span className="underline decoration-electric-pink decoration-8 underline-offset-4">fast, modern</span>, and pixel-perfect web experiences that look <span className="text-royal-purple font-black">STUNNING</span>.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Magnetic strength={0.3}>
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                data-cursor="view"
                data-cursor-label="GO! →"
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-black text-white font-black rounded-none border-4 border-black md:hover:bg-vivid-cyan md:hover:text-black transition-all text-lg shadow-[8px_8px_0px_0px_rgba(0,255,255,0.5)] flex items-center"
              >
                VIEW PROJECTS →
              </motion.button>
            </Magnetic>

            <Magnetic strength={0.3}>
              <motion.button
                onClick={handleDownloadCV}
                data-cursor="download"
                data-cursor-label="GET CV"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-sunset-orange text-white font-black rounded-none border-4 border-black transition-all text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                DOWNLOAD CV
              </motion.button>
            </Magnetic>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Python', 'Figma'].map((tech, i) => (
              <span key={tech}
                className={`px-4 py-2 border-2 border-black font-black text-xs uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                ${i % 3 === 0 ? 'bg-vivid-cyan' : i % 3 === 1 ? 'bg-electric-pink text-white' : 'bg-lime-green'}`}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Photo Card */}
        <div className="flex justify-center lg:justify-end relative">
          {/* Decorative background element */}
          <div className="absolute inset-0 bg-royal-purple rotate-6 transform scale-105 translate-x-4 translate-y-4" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
            className="relative overflow-hidden border-8 border-black shadow-[20px_20px_0px_0px_rgba(255,0,255,0.5)] group"
            style={{ width: 380, height: 480 }}
          >
            <Image
              src="/singha.jpg"
              alt="Singha"
              fill
              sizes="380px"
              className="object-cover object-top grayscale md:group-hover:grayscale-0 transition-all duration-200"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-electric-pink/20 mix-blend-multiply md:group-hover:opacity-0 transition-opacity" />

            {/* Dev Vibe Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 z-20">
              <p className="font-mono text-lime-green text-xs mb-2 opacity-80">$ git commit -m "building the future"</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime-green animate-ping" />
                <span className="text-white font-black text-xs uppercase tracking-widest">ALWAYS CODING · ALWAYS HUSTLING</span>
              </div>
            </div>
          </motion.div>

          {/* Open to Work floating badge */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-10 -right-4 z-30 bg-vivid-cyan border-4 border-black p-4 rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <p className="text-black font-black text-xl uppercase leading-none text-center">OPEN TO<br />WORK!</p>
          </motion.div>
        </div>

        {/* Draggable Stickers */}
        <div className="absolute inset-0 pointer-events-none z-50">
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.8}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            className="absolute top-[15%] left-[5%] pointer-events-auto cursor-grab active:cursor-grabbing bg-vivid-cyan border-4 border-black px-6 py-2 font-black uppercase text-xl rotate-[-15deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            TOP TALENT ⚡️
          </motion.div>

          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.8}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            className="absolute bottom-[20%] left-[40%] pointer-events-auto cursor-grab active:cursor-grabbing bg-electric-pink text-white border-4 border-black px-6 py-2 font-black uppercase text-xl rotate-[10deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            VERIFIED ✓
          </motion.div>

          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.8}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            className="absolute top-[60%] right-[10%] pointer-events-auto cursor-grab active:cursor-grabbing bg-lime-green border-4 border-black px-6 py-2 font-black uppercase text-xl rotate-[5deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            FAST 🚀
          </motion.div>
        </div>
      </div>
    </section>
  );
}