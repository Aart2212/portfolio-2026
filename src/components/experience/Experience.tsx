"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import SkillCloud from "@/components/ui/SkillCloud";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 container mx-auto px-6" id="experience">
      <div className="flex flex-col md:flex-row gap-16 md:gap-32">
        
        {/* Left: Fixed-style List Navigation */}
        <div className="w-full md:w-1/4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            className="text-[10px] font-mono tracking-[0.5em] text-violet-500 uppercase mb-16"
          >
            // History_Logs
          </motion.h2>
          
          <div className="flex flex-col gap-12 relative">
            {/* Active Indicator Line (Parallax) */}
            <motion.div 
              layoutId="indicator"
              className="absolute left-0 w-[2px] bg-violet-500 z-10"
              style={{ height: '24px' }}
              animate={{ y: activeTab * 84 }} // Adjust based on your button height/gap
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`text-left transition-all duration-500 group relative pl-8`}
              >
                <motion.h3 
                  animate={{ 
                    opacity: activeTab === idx ? 1 : 0.2,
                    x: activeTab === idx ? 5 : 0 
                  }}
                  className="text-2xl font-bold tracking-tighter group-hover:opacity-100 group-hover:italic"
                >
                  {exp.company}
                </motion.h3>
                <p className={`text-[9px] uppercase tracking-[0.3em] mt-2 font-medium transition-opacity ${activeTab === idx ? "opacity-100 text-violet-400" : "opacity-0"}`}>
                  {exp.period}
                </p>
              </button>
            ))}
          </div>

          <div className="hidden md:block mt-32 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <SkillCloud />
          </div>
        </div>

        {/* Right: Fluid Editorial View */}
        <div className="flex-1 md:pt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-20">
                <motion.h4 
                  className="text-5xl md:text-8xl font-black tracking-tightest leading-[0.9] mb-8"
                >
                  {experiences[activeTab].role.split(' ').map((word, i) => (
                    <span key={i} className={i % 2 !== 0 ? "text-violet-500 italic font-light" : "text-white"}>
                      {word}{" "}
                    </span>
                  ))}
                </motion.h4>
                <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-violet-500/30" />
                    <p className="text-slate-500 font-mono text-[10px] tracking-[0.5em] uppercase">
                      {experiences[activeTab].location}
                    </p>
                </div>
              </div>
              
              <div className="space-y-12 max-w-3xl">
                {experiences[activeTab].points.map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="group flex gap-8 border-b border-white/5 pb-10 last:border-0"
                  >
                    <span className="text-violet-500/20 font-mono text-xs mt-2 group-hover:text-violet-500 transition-colors">
                      0{i+1}
                    </span>
                    <p className="text-slate-400 leading-relaxed text-xl font-light group-hover:text-slate-100 transition-colors">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}