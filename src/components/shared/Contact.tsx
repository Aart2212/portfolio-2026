"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-40 container mx-auto px-6 border-t border-white/5" id="contact">
      <div className="grid md:grid-cols-2 gap-24">
        <div className="max-w-md">
          <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8]">
            Work <br /> With <span className="text-violet-500 italic">Me.</span>
          </h2>
          <p className="mt-12 text-slate-400 text-xl font-light leading-relaxed">
            Based in Vadodara, reaching the world. Let's turn your concept into a digital benchmark.
          </p>
        </div>

        <form className="flex flex-col gap-12 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group flex flex-col gap-2">
              <label className="text-[9px] uppercase tracking-[0.4em] text-slate-600 group-focus-within:text-violet-500 transition-colors">Name</label>
              <input 
                type="text" 
                className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-violet-500 transition-all text-white font-light text-lg"
              />
            </div>
            <div className="group flex flex-col gap-2">
              <label className="text-[9px] uppercase tracking-[0.4em] text-slate-600 group-focus-within:text-violet-500 transition-colors">Email</label>
              <input 
                type="email" 
                className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-violet-500 transition-all text-white font-light text-lg"
              />
            </div>
          </div>
          <div className="group flex flex-col gap-2">
            <label className="text-[9px] uppercase tracking-[0.4em] text-slate-600 group-focus-within:text-violet-500 transition-colors">Message</label>
            <textarea 
              rows={1}
              className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-violet-500 transition-all text-white font-light text-lg resize-none overflow-hidden"
              onInput={(e) => {
                e.currentTarget.style.height = 'auto';
                e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
              }}
            ></textarea>
          </div>
          <motion.button 
            whileHover={{ x: 20 }}
            className="text-[11px] font-bold uppercase tracking-[0.5em] text-white text-left flex items-center gap-4 group"
          >
            Start_Conversation <span className="text-violet-500 group-hover:translate-x-2 transition-transform">→</span>
          </motion.button>
        </form>
      </div>
    </section>
  );
}