'use client';

import { motion } from 'framer-motion';

const contactItems = [
  {
    label: 'Email',
    value: 'singhatamang456@gmail.com',
    href: 'mailto:singhatamang456@gmail.com',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20 hover:border-blue-400/50',
  },
  {
    label: 'Phone',
    value: '+977 9866033346',
    href: 'tel:+9779866033346',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.96-1.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20 hover:border-green-400/50',
  },
  {
    label: 'GitHub',
    value: 'singhatamang123',
    href: 'https://github.com/singhatamang123',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    color: 'text-white',
    bg: 'bg-white/5 border-white/10 hover:border-white/30',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-lime-green border-t-8 border-black bg-grain">
      <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[12vw] lg:text-[10rem] font-display leading-[0.8] mb-8 text-black uppercase">
            GET IN<br/>
            <span className="text-white text-stroke">TOUCH</span>
          </h2>
          <div className="bg-black text-white p-6 inline-block rotate-1 shadow-[10px_10px_0px_0px_rgba(255,0,255,0.8)]">
            <p className="font-heading text-2xl md:text-3xl uppercase font-black">
              Let&apos;s create something extraordinary together.
            </p>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-8 mb-20">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -2 : 2 }}
              className="bg-white border-4 border-black p-10 flex flex-col items-center gap-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all group"
            >
              <div className={`p-4 bg-black text-white group-hover:bg-electric-pink transition-colors ${item.color}`}>
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-black/40 font-black uppercase mb-2 tracking-widest">{item.label}</p>
                <p className="text-xl font-display font-black text-black break-all">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.a
            href="mailto:singhatamang456@gmail.com"
            whileHover={{ scale: 1.1, rotate: -1 }}
            className="inline-block px-16 py-8 bg-electric-pink text-white border-8 border-black font-display font-black text-4xl uppercase shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] hover:bg-black transition-all"
          >
            SAY HELLO →
          </motion.a>
          
          {/* Floating accent */}
          <div className="absolute -bottom-10 right-1/4 w-32 h-32 bg-vivid-cyan border-4 border-black rotate-45 -z-10 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}