"use client";
import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[100] px-6 py-6 pointer-events-none"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="pointer-events-auto">
          <Logo />
        </div>

        <div className="hidden md:flex items-center gap-8 glass-panel px-8 py-3 rounded-full pointer-events-auto">
          {["Projects", "Experience", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}