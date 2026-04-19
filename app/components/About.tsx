'use client';

import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function About() {
  return (
    <section id="about" className="py-32 bg-background border-t-8 border-foreground relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-electric-pink/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-[12vw] lg:text-[10rem] font-display leading-[0.85] font-black uppercase text-foreground mb-4">
            WHO THE <br />
            <span className="text-vivid-cyan text-stroke">HECK</span> AM I?
          </h2>
          <div className="bg-electric-pink border-4 border-foreground p-4 inline-block shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2">
            <p className="text-white font-black text-xl uppercase tracking-widest">
              More than just code.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="layered-card p-8 bg-white mb-8 rotate-[-1deg]">
              <h3 className="text-3xl font-display font-black uppercase mb-4 text-black">
                Design Philosophy 🎨
              </h3>
              <p className="font-heading text-lg text-black/80 leading-relaxed font-bold">
                &quot;Boring UI is a crime.&quot; I believe the web should be fun, loud, and delightfully chaotic—without ever sacrificing performance or accessibility. I build interfaces that people remember, using code that computers love.
              </p>
            </div>

            <div className="layered-card p-8 bg-lime-green rotate-[1deg]">
              <h3 className="text-3xl font-display font-black uppercase mb-4 text-black">
                Weird Hobbies ☕
              </h3>
              <ul className="space-y-3 font-heading text-lg text-black/90 font-bold">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">⌨️</span> Building ridiculously loud mechanical keyboards.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">☕</span> Amateur barista obsessing over latte art.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🕹️</span> Collecting broken 90s tech and attempting to fix it.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Graphic/Interactive Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative flex items-center justify-center">
              <div className="absolute inset-0 border-8 border-foreground rounded-full animate-[spin_20s_linear_infinite] border-dashed opacity-20" />
              <div className="absolute inset-8 border-8 border-vivid-cyan rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              <Magnetic strength={0.4}>
                <div className="w-64 h-64 bg-foreground rounded-full flex flex-col items-center justify-center text-background shadow-[0_0_50px_rgba(0,255,255,0.5)] cursor-pointer hover:scale-110 transition-transform duration-200">
                  <p className="font-display font-black text-6xl">100%</p>
                  <p className="font-heading font-black uppercase tracking-widest text-sm text-vivid-cyan">Human</p>
                  <p className="font-heading font-black uppercase tracking-widest text-[10px] opacity-50 mt-2">(Probably)</p>
                </div>
              </Magnetic>

              {/* Floating stickers */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [-10, -5, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-sunset-orange border-4 border-foreground p-3 font-black uppercase text-sm shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-white"
              >
                NO AI HERE
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [15, 20, 15] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 bg-electric-pink border-4 border-foreground p-3 font-black uppercase text-sm shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-white"
              >
                STAY WEIRD
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
