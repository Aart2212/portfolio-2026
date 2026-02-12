"use client";
import { motion } from "framer-motion";

export default function About() {
  const expertise = [
    {
      title: "Scalable Architecture",
      desc: "Architecting multi-tenant SaaS platforms with robust MERN foundations and secure authentication.",
      icon: "🏗️"
    },
    {
      title: "Performance Optimization",
      desc: "Optimizing MongoDB queries and Node.js middleware to achieve sub-100ms API response times.",
      icon: "⚡"
    },
    {
      title: "AI & Innovation",
      desc: "Fusing intelligent logic and LLMs into web ecosystems to automate complex business workflows.",
      icon: "🤖"
    }
  ];

  return (
    <section className="py-40 container mx-auto px-6" id="about">
      <div className="flex flex-col gap-24">
        
        {/* The Client Pitch */}
        <div className="max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-mono tracking-[0.5em] text-violet-500 uppercase mb-8"
          >
            // Professional_Expertise
          </motion.h2>
          <h3 className="text-5xl md:text-8xl font-black tracking-tightest leading-[0.9] mb-12">
            Engineering <span className="text-violet-500 italic font-light">Digital</span> <br /> Assets.
          </h3>
          <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl">
            I specialize in transforming complex business requirements into 
            high-performance digital solutions. My focus is on **security, 
            scalability, and zero-latency user experiences**.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-panel p-10 flex flex-col gap-6 group hover:border-violet-500/50 transition-all duration-500"
            >
              <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
              <h4 className="text-2xl font-bold tracking-tighter text-white">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed font-light text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}