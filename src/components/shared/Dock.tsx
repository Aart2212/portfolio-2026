"use client";
import { motion } from "framer-motion";

export default function Dock() {
  const socials = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/aart-desai-39045527b" },
    { name: "GitHub", link: "https://github.com" },
    { name: "Email", link: "mailto:aartdesai75@gmail.com" }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="flex items-center gap-4 px-6 py-3 glass-panel rounded-full border border-white/20 shadow-2xl"
      >
        {socials.map((social) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-xs font-mono uppercase tracking-tighter text-slate-400 hover:text-violet-400 transition-colors"
          >
            {social.name}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}