"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Terminal, ChevronRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/lib/cvData";

// ── Typewriter words cycling through specialisations ──────────────────────────
const words = [
  "Full Stack PHP Developer",
  "WordPress Plugin Architect",
  "Laravel Backend Engineer",
  "React & Next.js Developer",
  "n8n Automation Specialist",
  "AI Workflow Engineer",
];

// ── Tech-stack badges shown in IDE panel ─────────────────────────────────────
const stackBadges = [
  { label: "WordPress", color: "text-cyan-300" },
  { label: "Laravel", color: "text-red-400" },
  { label: "PHP 8.x", color: "text-purple-300" },
  { label: "React.js", color: "text-blue-400" },
  { label: "Next.js", color: "text-white" },
  { label: "Node.js", color: "text-green-400" },
  { label: "n8n", color: "text-orange-400" },
  { label: "Make.com", color: "text-pink-400" },
  { label: "Zapier", color: "text-amber-300" },
];

// ── Availability locations ─────────────────────────────────────────────────────
const locations = ["Lahore", "Toronto", "London"];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter engine
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 28 : 75;

    if (!isDeleting && displayedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/4 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-600/4 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* ── LEFT: Text Content ────────────────────────────────────────── */}
        <div className="lg:col-span-7 flex flex-col space-y-7 text-left">

          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full w-fit shadow-[0_0_15px_rgba(6,182,212,0.1)]"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="font-mono text-xs tracking-wider text-cyan-400 uppercase">
              Available for Remote Work
            </span>
          </motion.div>

          {/* Name */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none"
            >
              <span className="text-slate-400 text-2xl sm:text-3xl font-light block mb-2">Hello, I&apos;m</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center text-xl sm:text-2xl font-mono font-semibold text-slate-300 h-9"
            >
              <ChevronRight className="w-5 h-5 text-cyan-500 animate-pulse mr-1 flex-shrink-0" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {displayedText}
              </span>
              <span className="w-[2px] h-6 bg-cyan-400 ml-1 animate-[pulse_1s_ease-in-out_infinite]" />
            </motion.div>
          </div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed font-sans"
          >
            Premium Full Stack Developer specialising in{" "}
            <span className="text-cyan-400 font-medium">WordPress</span>,{" "}
            <span className="text-purple-400 font-medium">Laravel</span>,{" "}
            <span className="text-blue-400 font-medium">JavaScript Frameworks</span>, and{" "}
            <span className="text-pink-400 font-medium">AI Automation Systems</span>.
            Building enterprise-grade digital experiences that scale.
          </motion.p>

          {/* Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-2"
          >
            {stackBadges.map((b, i) => (
              <motion.span
                key={b.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-900/60 ${b.color} hover:border-slate-700 hover:bg-slate-800/60 transition-all duration-200 cursor-default`}
              >
                {b.label}
              </motion.span>
            ))}
          </motion.div>

          {/* Multi-City Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center space-x-3 flex-wrap gap-y-2"
          >
            <MapPin className="w-4 h-4 text-cyan-500 flex-shrink-0" />
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
              Available from:
            </span>
            {locations.map((city, i) => (
              <React.Fragment key={city}>
                <span className="font-mono text-xs text-slate-300 hover:text-cyan-400 transition-colors cursor-default">
                  {city}
                </span>
                {i < locations.length - 1 && (
                  <span className="text-slate-700 text-xs">·</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="group relative flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-mono text-sm tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] border border-cyan-400/20 w-fit"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("projects");
                if (el) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = el.getBoundingClientRect().top;
                  window.scrollTo({ top: elementRect - bodyRect - offset, behavior: "smooth" });
                }
              }}
              className="group flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-white font-mono text-sm tracking-wider px-8 py-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 backdrop-blur-sm w-fit"
            >
              <span>VIEW WORK</span>
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: Profile Card + IDE Terminal ───────────────────────────── */}
        <div className="lg:col-span-5 flex flex-col items-center gap-6">

          {/* ── Profile Image Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Outer rotating gradient ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 opacity-70 blur-sm animate-[spin_8s_linear_infinite]" style={{ borderRadius: "1.25rem" }} />
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-400 opacity-90" style={{ borderRadius: "1.1rem" }} />

            {/* Card body */}
            <div className="relative rounded-2xl bg-[#090812] border border-slate-800/60 overflow-hidden shadow-2xl p-1">
              <div className="group relative w-56 h-64 sm:w-64 sm:h-72 rounded-xl overflow-hidden">
                {/* Cool tech tint to grade the photo into the theme */}
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 mix-blend-overlay pointer-events-none" />
                {/* Glow overlay at base of image */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#090812] to-transparent z-10" />
                <Image
                  src="/ArslanEjaz.jpeg"
                  alt="Arslan Ejaz — Full Stack Developer"
                  fill
                  sizes="(max-width: 640px) 224px, 256px"
                  className="object-cover object-top contrast-105 saturate-90 brightness-95 transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>
              {/* Name plate */}
              <div className="px-4 py-3 text-center">
                <p className="font-sans font-bold text-white text-sm tracking-wide">Arslan Ejaz</p>
                <p className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest mt-0.5">Full Stack Developer</p>
              </div>
            </div>

            {/* Floating status badge */}
            <div className="absolute -bottom-3 -right-3 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-3 py-1.5 flex items-center space-x-1.5 backdrop-blur-md shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-wider">Open to work</span>
            </div>
          </motion.div>

          {/* ── IDE Terminal Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-cyan-500/30 via-purple-600/20 to-pink-500/20 rounded-2xl blur opacity-60" />
            <div className="relative rounded-2xl bg-[#090812]/95 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs text-slate-400 backdrop-blur-xl">
              {/* Window chrome */}
              <div className="flex items-center justify-between bg-slate-900/60 border-b border-slate-800/80 px-4 py-2.5">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] text-slate-500 ml-2">arslan-stack.config.ts</span>
                </div>
                <Terminal className="w-3 h-3 text-cyan-500/50" />
              </div>
              {/* Code body */}
              <div className="p-5 space-y-2.5 leading-relaxed text-[11px]">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">name:</span>{" "}
                  <span className="text-amber-300">&apos;Arslan Ejaz&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">role:</span>{" "}
                  <span className="text-amber-300">&apos;Full Stack Software Developer&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">availability:</span>{" "}
                  <span className="text-amber-300">&apos;Remote Worldwide&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">stack:</span> [
                  <div className="pl-4">
                    <span className="text-green-400">&apos;WordPress&apos;</span>,{" "}
                    <span className="text-red-400">&apos;Laravel&apos;</span>,{" "}
                    <span className="text-blue-400">&apos;React&apos;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-white">&apos;Next.js&apos;</span>,{" "}
                    <span className="text-orange-400">&apos;n8n&apos;</span>,{" "}
                    <span className="text-pink-400">&apos;Make.com&apos;</span>
                  </div>
                  <span className="pl-4">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">vitalsScore:</span>{" "}
                  <span className="text-emerald-400">99</span>{" "}
                  <span className="text-slate-600">// PageSpeed</span>
                </div>
                <div>&#125;;</div>
                <div className="pt-2 border-t border-slate-900">
                  <span className="text-cyan-400">$</span> npm run deploy --production
                </div>
                <div className="text-emerald-400">&gt; Build successful. Zero errors.</div>
                <div className="text-purple-400 animate-pulse">
                  &gt; Ready on https://arslanejaz.dev ✓
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
