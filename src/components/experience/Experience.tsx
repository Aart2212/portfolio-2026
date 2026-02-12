"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import SkillCloud from "@/components/ui/SkillCloud";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 container mx-auto px-6" id="experience">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left: Minimal List Navigation */}
        <div className="w-full md:w-1/3">
          <h2 className="text-[10px] font-mono tracking-[0.5em] text-violet-500 uppercase mb-16 opacity-80">
            // Professional_History
          </h2>
          <div className="flex flex-col gap-10">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`text-left transition-all duration-700 ease-in-out group ${
                  activeTab === idx ? "pl-6 border-l border-violet-500 opacity-100" : "opacity-20 hover:opacity-50 pl-0"
                }`}
              >
                <h3 className="text-2xl font-bold tracking-tighter group-hover:italic transition-all">
                  {exp.company}
                </h3>
                <p className="text-[9px] uppercase tracking-[0.3em] mt-2 font-medium">
                  {exp.period}
                </p>
              </button>
            ))}
          </div>

          {/* 3D Skill Cloud Integration */}
          <div className="hidden md:block mt-24 opacity-40">
            <SkillCloud />
          </div>
        </div>

        {/* Right: Fluid Content View */}
        <div className="flex-1 md:pt-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              <div className="mb-12">
                <h4 className="text-4xl md:text-7xl font-bold tracking-tightest leading-none mb-6">
                  {experiences[activeTab].role.split(' ').map((word, i) => (
                    <span key={i} className={i % 2 !== 0 ? "text-violet-500 italic" : "text-white"}>
                      {word}{" "}
                    </span>
                  ))}
                </h4>
                <p className="text-slate-500 font-mono text-[10px] tracking-[0.4em] uppercase">
                  {experiences[activeTab].location}
                </p>
              </div>
              
              <div className="space-y-8 max-w-2xl">
                {experiences[activeTab].points.map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex gap-6 border-b border-white/5 pb-6"
                  >
                    <span className="text-violet-500/50 font-mono text-xs mt-1 transition-colors group-hover:text-violet-500">
                      0{i+1}
                    </span>
                    <p className="text-slate-400 leading-relaxed text-lg group-hover:text-slate-200 transition-colors">
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