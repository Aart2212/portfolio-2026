"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundBlobs() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // We calculate position relative to the center for a smoother feel
      setMousePos({ 
        x: e.clientX - window.innerWidth / 2, 
        y: e.clientY - window.innerHeight / 2 
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Primary Violet Glow */}
      <motion.div 
        animate={{ 
          x: mousePos.x / 12, 
          y: mousePos.y / 12 
        }}
        transition={{ type: "spring", damping: 25, stiffness: 150 }}
        className="absolute top-[10%] left-[5%] w-[50vw] h-[50vw] bg-violet-600/10 rounded-full blur-[120px]"
      />
      
      {/* Secondary Cyan Glow */}
      <motion.div 
        animate={{ 
          x: -mousePos.x / 15, 
          y: -mousePos.y / 15 
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
        className="absolute bottom-[5%] right-[5%] w-[40vw] h-[40vw] bg-cyan-600/5 rounded-full blur-[100px]"
      />
    </div>
  );
}