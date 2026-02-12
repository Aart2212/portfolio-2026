"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div 
      className="flex items-center gap-3 cursor-pointer group"
      whileHover={{ opacity: 0.8 }}
    >
      {/* Refined Minimal Mark */}
      <div className="flex items-center">
        <span className="text-xl font-bold tracking-tighter text-white">
          A
        </span>
        <div className="mx-2 w-[1px] h-4 bg-violet-500/50 group-hover:h-6 transition-all duration-300" />
        <span className="text-xl font-light tracking-tighter text-slate-400 group-hover:text-white transition-colors">
          D
        </span>
      </div>

      {/* Clean Name - No .dev */}
      <div className="overflow-hidden">
        <motion.span 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="block text-[10px] font-bold uppercase tracking-[0.4em] text-white/50 group-hover:text-violet-500 transition-colors"
        >
          Desai
        </motion.span>
      </div>
    </motion.div>
  );
}