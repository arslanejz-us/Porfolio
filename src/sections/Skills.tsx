"use client";

import React, { useState } from "react";
import { Terminal, Zap, Code2, Layers, Globe, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ── Skill data ────────────────────────────────────────────────────────────────
const skillGroups = [
  {
    id: "core",
    label: "Core Stack",
    icon: <Code2 className="w-4 h-4" />,
    color: "cyan",
    skills: [
      { name: "WordPress", level: 98, note: "Custom themes, plugins, WooCommerce" },
      { name: "PHP / OOP", level: 96, note: "MVC patterns, REST APIs, Laravel" },
      { name: "Laravel", level: 90, note: "Backend APIs, auth, dashboards" },
      { name: "JavaScript / ES6+", level: 91, note: "Vanilla JS, jQuery, async patterns" },
      { name: "MySQL / Database Design", level: 88, note: "Query optimization, schema architecture" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: <Layers className="w-4 h-4" />,
    color: "purple",
    skills: [
      { name: "React.js", level: 95, note: "SPA, hooks, state management" },
      { name: "Next.js", level: 94, note: "App Router, SSR, static generation" },
      { name: "Node.js", level: 88, note: "Express APIs, server integrations" },
      { name: "Tailwind CSS", level: 97, note: "Utility-first, responsive systems" },
      { name: "Framer / Motion", level: 86, note: "Advanced animations, scroll effects" },
    ],
  },
  {
    id: "automation",
    label: "Automation & AI",
    icon: <Bot className="w-4 h-4" />,
    color: "pink",
    skills: [
      { name: "n8n", level: 95, note: "Custom workflows, webhook nodes, AI agents" },
      { name: "Make.com", level: 94, note: "Visual scenarios, data mapping, APIs" },
      { name: "Zapier", level: 98, note: "Multi-step zaps, business automations" },
      { name: "API Integrations", level: 97, note: "REST, GraphQL, OAuth, webhooks" },
      { name: "AI Automation Systems", level: 90, note: "OpenAI, Claude, custom AI pipelines" },
    ],
  },
  {
    id: "devops",
    label: "Performance & DevOps",
    icon: <Zap className="w-4 h-4" />,
    color: "emerald",
    skills: [
      { name: "Core Web Vitals & PageSpeed", level: 97, note: "LCP, CLS, FID optimization" },
      { name: "Redis / Object Caching", level: 92, note: "Server-side caching architecture" },
      { name: "Cloudflare & CDN", level: 90, note: "WAF, page rules, cache strategies" },
      { name: "VPS / cPanel / WHM", level: 88, note: "Server management, hosting migrations" },
      { name: "Technical SEO", level: 93, note: "Schema, structured data, meta tuning" },
    ],
  },
];

const colorMap: Record<string, { bar: string; glow: string; badge: string; active: string }> = {
  cyan:    { bar: "from-cyan-500 to-cyan-400",   glow: "shadow-[0_0_8px_rgba(6,182,212,0.5)]",    badge: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400",    active: "border-cyan-500/40 bg-cyan-500/10 text-cyan-400"    },
  purple:  { bar: "from-purple-500 to-purple-400", glow: "shadow-[0_0_8px_rgba(168,85,247,0.5)]", badge: "bg-purple-500/10 border-purple-500/25 text-purple-400", active: "border-purple-500/40 bg-purple-500/10 text-purple-400" },
  pink:    { bar: "from-pink-500 to-fuchsia-400",  glow: "shadow-[0_0_8px_rgba(236,72,153,0.5)]", badge: "bg-pink-500/10 border-pink-500/25 text-pink-400",       active: "border-pink-500/40 bg-pink-500/10 text-pink-400"     },
  emerald: { bar: "from-emerald-500 to-teal-400",  glow: "shadow-[0_0_8px_rgba(16,185,129,0.5)]", badge: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400", active: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400" },
};

// ── Floating icon marquee ─────────────────────────────────────────────────────
const floatingIcons = [
  "WP", "PHP", "JS", "TS", "CSS", "n8n", "React", "Laravel",
  "Next", "Node", "SQL", "API", "AI", "Zapier", "Make", "Framer",
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState("core");

  const group = skillGroups.find((g) => g.id === activeGroup) || skillGroups[0];
  const palette = colorMap[group.color];

  return (
    <section id="skills" className="relative py-28 px-6 bg-[#010103]/60 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute right-10 top-1/4 w-[320px] h-[320px] bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating tech-word marquee strip */}
      <div className="absolute top-8 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="flex space-x-8 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...floatingIcons, ...floatingIcons].map((icon, i) => (
            <span key={i} className="font-mono text-[10px] text-slate-800 uppercase tracking-widest">
              {icon}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-cyan-400 font-mono text-xs tracking-widest uppercase"
          >
            <Terminal className="w-4 h-4" />
            <span>02 // Skills_Matrix</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans"
          >
            Technical Competencies & Arsenal
          </motion.h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillGroups.map((g) => {
            const p = colorMap[g.color];
            const isActive = activeGroup === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setActiveGroup(g.id)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-mono text-xs tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                  isActive ? p.active : "border-slate-800/80 bg-slate-900/30 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                <span className={isActive ? "" : "text-slate-600"}>{g.icon}</span>
                <span>{g.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display Panel */}
        <div className="relative rounded-2xl bg-[#07060d]/80 border border-slate-800/80 p-8 sm:p-12 backdrop-blur-xl max-w-4xl mx-auto">
          {/* Corner markers */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-500/20 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500/20 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyan-500/20 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-500/20 rounded-br-2xl" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {group.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="group flex flex-col space-y-2"
                >
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="font-sans font-semibold text-slate-200 text-sm group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="block font-mono text-[9px] text-slate-600 mt-0.5">{skill.note}</span>
                    </div>
                    <span className={`font-mono text-xs ${palette.badge.split(" ")[2]} font-bold`}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Bar track */}
                  <div className="h-1.5 w-full bg-slate-900 border border-slate-800/60 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: "easeOut", delay: i * 0.08 }}
                      className={`h-full bg-gradient-to-r ${palette.bar} rounded-full ${palette.glow}`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom highlight cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
          {[
            { icon: <Globe className="w-6 h-6 text-cyan-400" />, stat: "50+", label: "Projects Shipped" },
            { icon: <Code2 className="w-6 h-6 text-purple-400" />, stat: "6+", label: "Years Experience" },
            { icon: <Bot className="w-6 h-6 text-pink-400" />, stat: "30+", label: "Automations Built" },
            { icon: <Zap className="w-6 h-6 text-emerald-400" />, stat: "99", label: "PageSpeed Score" },
          ].map((card) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center rounded-xl border border-slate-800/50 bg-[#07060d]/40 p-5 hover:border-slate-700/70 transition-all duration-300 group"
            >
              <div className="mb-2 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
              <div className="text-2xl font-extrabold text-white font-sans">{card.stat}</div>
              <div className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">{card.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
