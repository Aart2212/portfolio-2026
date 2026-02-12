"use client";
import React from "react";
import { motion } from "framer-motion";

const techStack = [
  "MongoDB", "Express.js", "React.js", "Node.js", 
  "PostgreSQL", "JavaScript", "TypeScript", "Tailwind CSS",
  "Next.js", "Git", "REST APIs", "JWT Auth"
];

export default function TechRibbon() {
  return (
    <div className="py-10 bg-white/[0.02] border-y border-white/5 overflow-hidden flex whitespace-nowrap">
      {/* Container for the sliding text */}
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          ease: "linear", 
          duration: 20, 
          repeat: Infinity 
        }}
        className="flex gap-20 items-center pr-20"
      >
        {/* We double the array to create a seamless infinite loop */}
        {[...techStack, ...techStack].map((tech, index) => (
          <span 
            key={index} 
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white/20 hover:text-violet-500/50 transition-colors cursor-default select-none"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}