// src/app/page.tsx

import Navbar from "@/components/Navbar";
import FuturisticBackground from "@/components/FuturisticBackground";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Sections
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Certifications from "@/sections/Certifications";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Scroll setup */}
      <SmoothScroll />

      {/* Cyber background canvas */}
      <FuturisticBackground />

      {/* Fixed header navigation */}
      <Navbar />

      {/* Single Page Layout — Experience removed */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Bottom Footer */}
      <Footer />

      {/* Floating WhatsApp chat button */}
      <WhatsAppButton />
    </div>
  );
}
