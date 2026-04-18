'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string | null;
  live: string | null;
  category: string;
  color: string;
  icon: string;
  sketch?: string;
  details?: string;
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectScrapbook({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/95 backdrop-blur-xl" 
          onClick={onClose}
        />

        {/* Scrapbook Container */}
        <motion.div
          initial={{ scale: 0.9, y: 100, rotate: -2 }}
          animate={{ scale: 1, y: 0, rotate: 0 }}
          exit={{ scale: 0.9, y: 100, rotate: 2 }}
          className="relative w-full max-w-6xl h-[85vh] bg-[#fdfaf1] border-8 border-black shadow-[20px_20px_0px_0px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col md:flex-row bg-grain"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-[110] bg-electric-pink text-white w-12 h-12 flex items-center justify-center border-4 border-black font-black text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110 active:scale-90 transition-transform"
          >
            ✕
          </button>

          {/* LEFT SIDE: Visuals */}
          <div className="w-full md:w-3/5 h-1/2 md:h-full relative overflow-hidden p-8 flex flex-col gap-8">
            <div className="relative h-full">
               {/* Sketch Card */}
              <motion.div 
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                className="absolute top-0 left-0 w-3/4 aspect-video bg-white border-4 border-black shadow-lg rotate-[-3deg] z-10 p-2 cursor-grab active:cursor-grabbing"
              >
                <div className="relative w-full h-full bg-zinc-100 overflow-hidden">
                   {project.sketch ? (
                     <Image 
                      src={project.sketch} 
                      alt="Sketch" 
                      fill 
                      className="object-cover grayscale sepia-[0.2]"
                     />
                   ) : (
                     <div className="flex items-center justify-center h-full text-zinc-400 font-handwriting text-2xl">
                       [Sketch Missing]
                     </div>
                   )}
                </div>
                {/* Tape Sticker */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-lime-green/40 backdrop-blur-sm -rotate-2" />
              </motion.div>

              {/* Icon/Brand Card */}
              <motion.div 
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                className="absolute bottom-10 right-0 w-1/2 aspect-square bg-vivid-cyan border-4 border-black shadow-lg rotate-[5deg] z-20 flex items-center justify-center text-8xl cursor-grab active:cursor-grabbing"
              >
                {project.icon}
                <div className="absolute -bottom-4 right-10 w-32 h-10 bg-electric-pink/40 backdrop-blur-sm rotate-6" />
              </motion.div>

              {/* Hand-drawn Arrow (SVG) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                <svg width="200" height="150" viewBox="0 0 200 150" fill="none">
                  <path d="M10 10C50 80 150 20 190 140" stroke="black" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" />
                  <path d="M180 120L190 140L210 130" stroke="black" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Info */}
          <div className="w-full md:w-2/5 h-1/2 md:h-full bg-black text-white p-10 flex flex-col border-l-8 border-black relative overflow-y-auto">
             <div className="mb-8">
               <span className="bg-lime-green text-black px-4 py-1 font-black text-sm uppercase mb-4 inline-block -rotate-1">
                 {project.category}
               </span >
               <h3 className="text-6xl font-display font-black leading-none uppercase mb-4">
                 {project.title}
               </h3>
               <div className="w-20 h-2 bg-electric-pink mb-6" />
             </div>

             <p className="text-xl font-heading text-white/70 mb-8 leading-snug italic">
               &quot;{project.description}&quot;
             </p>

             <div className="space-y-6 flex-1">
               <div className="p-4 border-2 border-dashed border-white/20">
                 <h4 className="font-handwriting text-2xl text-vivid-cyan mb-2">Design Notes:</h4>
                 <p className="text-sm font-sans text-white/50 leading-relaxed">
                   Focused on high-performance interactions and dopamine-driven color palettes. 
                   The goal was to create a visceral experience that feels tactile and alive.
                 </p>
               </div>

               <div className="flex flex-wrap gap-2">
                 {project.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 border border-white/30 text-[10px] font-black uppercase">
                     {tag}
                   </span>
                 ))}
               </div>
             </div>

             <div className="mt-10 flex gap-4">
               {project.github && (
                 <a href={project.github} target="_blank" className="flex-1 bg-white text-black py-4 text-center font-black uppercase text-sm border-4 border-white hover:bg-transparent hover:text-white transition-all">
                   SOURCE CODE
                 </a>
               )}
               {project.live && (
                 <a href={project.live} target="_blank" className="flex-1 bg-vivid-cyan text-black py-4 text-center font-black uppercase text-sm border-4 border-vivid-cyan hover:bg-transparent hover:text-vivid-cyan transition-all">
                   LIVE DEMO →
                 </a>
               )}
             </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
