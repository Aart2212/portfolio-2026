"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian">
      {/* 3D Scene Wrapper - Isolated via iFrame to prevent Buffer Errors */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/6Wq1Q7YAnWvY70Qc/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          style={{ pointerEvents: 'auto' }}
          title="3D Hero Scene"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 pointer-events-none">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-auto"
          >
            <h2 className="text-violet-500 font-mono tracking-[0.3em] uppercase mb-4 text-sm">
              // Full Stack MERN Developer
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6 tracking-tighter text-white">
              Aart Desai.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
                Digital Architect.
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
               Architecting scalable systems and SaaS platforms from Ahmedabad, India. 
               Focused on performance, security, and high-end UI.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="px-10 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-violet-500/25 active:scale-95">
                Explore Projects
              </button>
              <button className="px-10 py-4 glass-panel border border-white/10 hover:bg-white/5 text-white rounded-xl font-bold transition-all active:scale-95">
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent z-20" />
    </section>
  );
}