"use client";
import { motion } from "framer-motion";

export default function About() {
  const offerings = [
    {
      title: "SaaS Architecture",
      desc: "Engineering scalable multi-tenant platforms with robust MERN foundations and secure authentication flows.",
      icon: "⚡"
    },
    {
      title: "AI Integration",
      desc: "Fusing LLMs and intelligent logic into web ecosystems to automate complex business workflows.",
      icon: "🤖"
    },
    {
      title: "Performance Ops",
      desc: "Deep-level optimization of MongoDB queries and Node.js middleware to achieve sub-100ms response times.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-40 container mx-auto px-6" id="about">
      <div className="flex flex-col gap-24">
        
        {/* The Value Pitch */}
        <div className="max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-mono tracking-[0.5em] text-violet-500 uppercase mb-8"
          >
            // Value_Proposition
          </motion.h2>
          <h3 className="text-5xl md:text-8xl font-black tracking-tightest leading-[0.9] mb-12">
            I build products that <span className="text-violet-500 italic font-light text-6xl md:text-9xl">Scale</span> & perform.
          </h3>
          <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl">
            I provide end-to-end Full-Stack solutions focused on **security, speed, and clean code**. I don't just write scripts; I architect digital assets that drive business value.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-panel p-10 flex flex-col gap-6 group hover:border-violet-500/50 transition-all duration-500"
            >
              <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
              <h4 className="text-2xl font-bold tracking-tighter">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Expertise List (Tags) */}
        <div className="flex flex-wrap gap-4 pt-12 border-t border-white/5">
          {["System Design", "Cloud Infrastructure", "API Security", "Database Modeling", "UI/UX Strategy"].map((tag) => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-400/60">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}