'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectScrapbook from './ProjectScrapbook';
import Magnetic from './Magnetic';

const projects = [
  {
    title: 'Galli Maps',
    description:
      'A location-based service application with open-source map integration. Features real-time distance sorting and offline capabilities.',
    tags: ['React Native', 'Leaflet', 'Node.js'],
    github: 'https://github.com/singhatamang123/galli-maps',
    live: null,
    category: 'Mobile App',
    color: 'from-vivid-cyan to-dopamine-blue',
    border: 'hover:border-vivid-cyan',
    icon: '📍',
    sketch: '/galli_maps.png',
  },
  {
    title: 'Tarka Quiz',
    description:
      'A fast-paced multiplayer quiz application with a unique fire-streak system and real-time leaderboards. High-performance gaming UI.',
    tags: ['Next.js', 'Socket.io', 'Tailwind'],
    github: 'https://github.com/singhatamang123/tarka-quiz',
    live: 'https://quiz-multiuser.vercel.app/',
    category: 'Web App',
    color: 'from-sunset-orange to-electric-pink',
    border: 'hover:border-sunset-orange',
    icon: '🔥',
    sketch: '/tarka_quiz.png',
  },
  {
    title: 'AI Content Studio',
    description:
      'An AI-powered content generation suite for creators. Includes image generation, text optimization, and social media scheduling.',
    tags: ['OpenAI', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com/singhatamang123/ai-content-studio',
    live: null,
    category: 'SaaS',
    color: 'from-royal-purple to-electric-pink',
    border: 'hover:border-royal-purple',
    icon: '✨',
  },
  {
    title: 'Coffee Break',
    description:
      'A modern coffee shop website with an elegant menu, online ordering system, and location finder. Pixel-perfect design focused on user experience.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: null,
    live: null,
    category: 'Website',
    color: 'from-lime-green to-vivid-cyan',
    border: 'hover:border-lime-green',
    icon: '☕',
    comingSoon: true,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-32 bg-grain relative">
      {/* Decorative chaotic lines */}
      <div className="absolute top-0 left-0 w-full h-24 bg-electric-pink -skew-y-2 z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[12vw] lg:text-[10rem] font-display leading-[0.8] mb-4 text-black dark:text-white">
            WORKS<span className="text-stroke text-black dark:text-white opacity-40">&amp;</span><br />
            STUFF
          </h2>
          <div className="bg-lime-green border-4 border-black p-6 inline-block shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
            <p className="text-black font-black text-2xl uppercase tracking-tighter">
              A collection of projects from data science to full-stack web dev.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
              onClick={() => !project.comingSoon && setSelectedProject(project)}
              data-cursor="view"
              data-cursor-label="CASE STUDY"
              className={`layered-card p-0 flex flex-col group relative cursor-pointer ${i % 3 === 1 ? 'md:-mt-12' : i % 3 === 2 ? 'lg:-mt-24' : ''}`}
            >
              {/* Category Ribbon */}
              <div className="absolute top-4 -right-4 bg-vivid-cyan border-2 border-black px-4 py-1 font-black text-xs uppercase z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12">
                {project.category}
              </div>

              <div className={`h-48 relative border-b-4 border-black bg-gradient-to-br ${project.color} flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500`}>
                {project.icon}
              </div>

              <div className="p-8 bg-white dark:bg-zinc-900 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-3xl font-display font-black leading-none uppercase mb-2 text-black dark:text-white">
                    {project.title}
                  </h3>
                  {project.comingSoon && (
                    <span className="bg-sunset-orange text-white px-3 py-1 text-xs font-black uppercase inline-block">
                      COMING SOON
                    </span>
                  )}
                </div>

                <p className="font-heading text-lg text-black/60 dark:text-white/60 mb-8 leading-tight">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 border-2 border-black bg-white dark:bg-black text-black dark:text-white text-[10px] font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Magnetic strength={0.2}>
                    <div className="w-full bg-black text-white p-3 text-center font-black uppercase text-sm border-2 border-black group-hover:bg-electric-pink transition-colors">
                      VIEW SCRAPBOOK →
                    </div>
                  </Magnetic>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all on GitHub */}
        <div className="mt-24 text-center">
          <motion.a
            href="https://github.com/singhatamang123"
            target="_blank"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-6 bg-sunset-orange text-white border-4 border-black font-display font-black text-2xl uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            VIEW ALL REPOS ON GITHUB →
          </motion.a>
        </div>
      </div>

      {/* Scrapbook Modal */}
      <ProjectScrapbook
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}