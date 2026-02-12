"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <section className="py-24 container mx-auto px-6" id="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              rotateX: 5, 
              rotateY: -5, 
              scale: 1.02,
              z: 50 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
            className="group relative h-[500px] rounded-[2rem] p-12 overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
          >
            {/* 3D Floating Icon Placeholder */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-violet-500/10 blur-3xl group-hover:bg-violet-500/30 transition-colors" 
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[10px] font-mono tracking-[0.4em] text-violet-500 mb-6 uppercase">
                // Case_Study_0{index + 1}
              </span>
              <h3 className="text-5xl font-bold tracking-tighter mb-6 group-hover:italic transition-all">
                {project.title}
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                {project.description}
              </p>
              
              <div className="mt-auto flex items-center gap-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-[9px] border border-white/5 px-3 py-1 rounded-full text-slate-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}