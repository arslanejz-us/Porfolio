"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.href.substring(1));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.substring(1));
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(href.substring(1));
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#05040a]/85 backdrop-blur-xl border-b border-cyan-500/10 py-3 shadow-[0_10px_40px_-10px_rgba(6,182,212,0.12)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — Arslan Ejaz branding */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center space-x-2.5 group"
        >
          {/* Glow icon mark */}
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.35)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.55)] transition-all duration-300 border border-cyan-400/20">
            <span className="font-mono text-white font-black text-sm tracking-tighter leading-none">AE</span>
          </div>
          {/* Name text */}
          <div className="flex flex-col leading-none">
            <span className="font-sans text-sm font-bold text-white tracking-wide group-hover:text-cyan-100 transition-colors duration-300">
              Arslan Ejaz
            </span>
            <span className="font-mono text-[9px] text-cyan-500/70 tracking-widest uppercase">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-sm font-mono tracking-wide transition-all duration-300 rounded-lg group ${
                  isActive ? "text-cyan-400" : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 border border-cyan-500/30 bg-cyan-500/5 rounded-lg -z-10 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            );
          })}
        </nav>

        {/* CTA on Desktop */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden md:flex items-center space-x-1.5 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 hover:from-cyan-500/20 hover:to-purple-600/20 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400 font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
        >
          <span>Hire Me</span>
        </a>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none border border-transparent hover:border-slate-800 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#07060d]/95 backdrop-blur-xl border-b border-cyan-500/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-4 flex flex-col space-y-2">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-mono text-sm tracking-wider transition-all ${
                      isActive
                        ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className={`text-[10px] ${isActive ? "text-cyan-400" : "text-slate-600"}`}>
                      // 0{idx + 1}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
