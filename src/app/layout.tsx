import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { cn } from "@/lib/utils";
import BackgroundBlobs from "@/components/ui/BackgroundBlobs";

export const metadata: Metadata = {
  title: "Aart Desai | Full Stack Architect",
  description: "Digital portfolio of Aart Desai, a Full Stack Developer specialized in React, Node.js, and scalable AI platforms.",
  keywords: ["Aart Desai", "Full Stack Developer", "MERN Stack", "React Developer Vadodara", "Next.js 16"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "font-sans bg-obsidian text-slate-200 antialiased selection:bg-violet-500/30 selection:text-white"
        )}
      >
        {/* Global Interactive Depth Layer */}
        <BackgroundBlobs />

        {/* Main Wrapper with 3D Perspective. 
           'overflow-x-clip' is used instead of 'overflow-x-hidden' 
           to allow sticky elements to function properly.
        */}
        <main className="relative min-h-screen overflow-x-clip [perspective:1000px]">
          {children}
        </main>

        {/* High-End Noise Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </body>
    </html>
  );
}