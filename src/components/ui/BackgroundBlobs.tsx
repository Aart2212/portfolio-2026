"use client";
import { motion, useMouseMove } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundBlobs() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div 
        animate={{ 
          x: mousePos.x / 15, 
          y: mousePos.y / 15 
        }}
        className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-violet-500/5 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          x: -mousePos.x / 20, 
          y: -mousePos.y / 20 
        }}
        className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-cyan-500/5 rounded-full blur-[120px]"
      />
    </div>
  );
}