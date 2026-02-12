"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", x: 40, y: -20, z: 20 },
  { name: "Node.js", x: -50, y: 30, z: -10 },
  { name: "MongoDB", x: 20, y: 60, z: 30 },
  { name: "Next.js", x: -30, y: -60, z: 15 },
  { name: "PostgreSQL", x: 60, y: 10, z: -25 },
  { name: "Express", x: -60, y: -20, z: 40 },
  { name: "TypeScript", x: 10, y: -80, z: -15 },
  { name: "Tailwind", x: 70, y: -50, z: 10 },
];

export default function SkillCloud() {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center [perspective:1200px]">
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs font-bold tracking-tighter cursor-default select-none"
          initial={{ 
            opacity: 0, 
            x: skill.x, 
            y: skill.y, 
            z: skill.z 
          }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            z: [skill.z, skill.z + 40, skill.z],
            rotateY: [0, 360]
          }}
          whileHover={{ 
            opacity: 1, 
            scale: 1.2, 
            color: "#8B5CF6",
            textShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
          }}
          transition={{ 
            rotateY: { duration: 20 + i * 2, repeat: Infinity, ease: "linear" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            z: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ 
            transformStyle: "preserve-3d",
            left: "50%",
            top: "50%"
          }}
        >
          {skill.name}
        </motion.div>
      ))}
      
      {/* Central Glow Core */}
      <div className="absolute w-24 h-24 bg-violet-500/10 rounded-full blur-[60px]" />
    </div>
  );
}