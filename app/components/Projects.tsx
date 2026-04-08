'use client';

import { motion, type Variants } from 'framer-motion';

const projects = [
  {
    title: 'Product Recommendation System',
    description:
      'An intelligent recommendation engine that suggests products based on user behaviour and purchase history using collaborative filtering and ML algorithms.',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/singhatamang123/FinalYearProjects',
    live: null,
    category: 'Machine Learning',
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'hover:border-blue-500/40',
    icon: '🤖',
  },
  {
    title: 'Big Mart Data Analysis',
    description:
      'Comprehensive data analysis and sales prediction for Big Mart outlets. Includes exploratory data analysis, feature engineering, and predictive modelling.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    github: 'https://github.com/singhatamang123/BigMartPrediction-',
    live: null,
    category: 'Data Analysis',
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'hover:border-amber-500/40',
    icon: '📊',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce web application with product listings, cart management, user authentication, and checkout flow.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/singhatamang123/FinalYearProjects',
    live: null,
    category: 'Full Stack',
    color: 'from-green-500/20 to-emerald-500/10',
    border: 'hover:border-green-500/40',
    icon: '🛒',
  },
  {
    title: 'PeaceWindsNepal',
    description:
      'Official website for PeaceWindsNepal NGO — a non-profit organisation. Features donation info, project showcases, team profiles, and contact forms.',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/singhatamang123/PeaceWindsNepalFinal',
    live: null,
    category: 'NGO Website',
    color: 'from-purple-500/20 to-violet-500/10',
    border: 'hover:border-purple-500/40',
    icon: '🕊️',
  },
  {
    title: 'Free Gaming Platform',
    description:
      'A browser-based free gaming platform with multiple games, leaderboards, and user profiles. Built for performance and a seamless play experience.',
    tags: ['React', 'JavaScript', 'CSS'],
    github: null,
    live: null,
    category: 'Web App',
    color: 'from-red-500/20 to-pink-500/10',
    border: 'hover:border-red-500/40',
    icon: '🎮',
    comingSoon: true,
  },
  {
    title: 'Coffee Break',
    description:
      'A modern coffee shop website with an elegant menu, online ordering system, and location finder. Pixel-perfect design focused on user experience.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: null,
    live: null,
    category: 'Website',
    color: 'from-yellow-700/20 to-amber-800/10',
    border: 'hover:border-yellow-700/40',
    icon: '☕',
    comingSoon: true,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' as const },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">What I&apos;ve built</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Featured Projects</h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-base font-light">
            A collection of projects ranging from data science to full-stack web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`relative group bg-white/5 border border-white/10 ${project.border} rounded-3xl overflow-hidden transition-all duration-300 flex flex-col`}
            >
              {/* Card gradient top */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 pointer-events-none`} />

              <div className="relative z-10 p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium tracking-widest uppercase text-white/40 mb-1 block">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{project.icon}</span>
                      <h3 className="text-lg font-semibold text-white leading-snug">{project.title}</h3>
                    </div>
                  </div>
                  {project.comingSoon && (
                    <span className="flex-shrink-0 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/50 font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-white/55 leading-relaxed mb-5 flex-1" style={{ fontWeight: 300 }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-auto">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 text-sm text-white/80 hover:text-white transition-all"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      GitHub
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white/25 cursor-not-allowed">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      GitHub
                    </span>
                  )}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 hover:border-blue-400/50 text-sm text-blue-400 hover:text-blue-300 transition-all"
                    >
                      Live →
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/singhatamang123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 hover:border-white/50 rounded-2xl text-sm text-white/60 hover:text-white transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}