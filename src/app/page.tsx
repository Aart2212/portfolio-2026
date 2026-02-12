import Hero from "@/components/hero/Hero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import Experience from "@/components/experience/Experience"; // Updated import name
import Contact from "@/components/shared/Contact";
import Dock from "@/components/shared/Dock";
import Navbar from "@/components/shared/Navbar";
import TechRibbon from "@/components/ui/TechRibbon";
import BackgroundBlobs from "@/components/ui/BackgroundBlobs";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-obsidian selection:bg-violet-500/30">
      
      {/* 1. Global Interactive Depth Layer */}
      <BackgroundBlobs />

      {/* 2. Fixed UI Elements */}
      <Navbar />

      {/* 3. Hero & Transition */}
      <Hero />
      <TechRibbon />

      {/* 4. Editorial Content Wrapper */}
      <div className="relative z-10 bg-transparent">
        
        <div id="projects" className="py-20">
          <ProjectGrid />
        </div>
        
        <div id="experience" className="py-20">
          <Experience />
        </div>
        
        <div id="contact" className="py-20">
          <Contact />
        </div>

        {/* 5. Minimal Typographic Footer */}
        <footer className="py-40 px-10 flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/5 bg-obsidian/50 backdrop-blur-xl">
          <div className="space-y-4">
            <div className="text-slate-600 text-[10px] uppercase tracking-[0.5em] font-medium">Location</div>
            <div className="text-xl font-bold tracking-tighter italic">Vadodara, India</div>
          </div>
          <div className="text-right space-y-4">
            <p className="text-slate-600 text-[10px] uppercase tracking-[0.5em] font-medium italic">
              &copy; 2026 Aart Desai — Stay Creative.
            </p>
            <div className="h-12 w-[1px] bg-gradient-to-b from-violet-500 to-transparent ml-auto" />
          </div>
        </footer>
      </div>

      <Dock />

    </main>
  );
}