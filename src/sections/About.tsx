"use client";

import React, { useState } from "react";
import { User, Cpu, Code2, Layers, Terminal, Sparkles, CheckCircle2, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TabContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  badges: string[];
  color: string;
}

const tabsData: TabContent[] = [
  {
    id: "wordpress",
    title: "WordPress Architecture",
    subtitle: "Enterprise CMS & Custom Plugin Ecosystems",
    description: "I build secure, modular WordPress architectures from scratch — no bloated templates. Every theme, plugin, and hook is custom-coded to enterprise specifications.",
    features: [
      "Custom Theme Development (ACF Pro / Gutenberg Blocks)",
      "Bespoke Plugin Development & Extension Architecture",
      "WooCommerce Deep Customisation & Quoting Engines",
      "Elementor Custom Widget & Section Development",
      "Core Web Vitals Speed Auditing & Performance Caching",
      "Custom CMS Solutions & Headless REST API Integration",
    ],
    badges: ["WordPress Core", "PHP OOP", "ACF Pro", "WooCommerce", "Gutenberg", "Elementor"],
    color: "cyan",
  },
  {
    id: "laravel",
    title: "Laravel Engineering",
    subtitle: "Robust Backend APIs & Scalable Applications",
    description: "Building resilient MVC backend applications and headless APIs with clean database schemas, airtight authentication, and performant job queues.",
    features: [
      "Secure RESTful API Development & Route Architecture",
      "JWT & Session Authentication Systems",
      "Complex Custom Admin Dashboards & CRM Panels",
      "Backend Architecture & Scalable PHP Applications",
      "MySQL Performance Tuning & Database Normalisation",
      "Cron Jobs, Queue Handlers & Background Workers",
    ],
    badges: ["Laravel MVC", "Eloquent ORM", "REST API", "JWT Auth", "MySQL", "PHP 8.x"],
    color: "red",
  },
  {
    id: "js-frameworks",
    title: "JavaScript & JS Frameworks",
    subtitle: "Modern Frontend Engineering & Interactive UIs",
    description: "Developing blazing-fast user interfaces using modern JavaScript stacks. Every SPA is SEO-optimised, pixel-perfect, and built for maximum performance.",
    features: [
      "Next.js App Router Architecture (RSC / SSR / ISR)",
      "React.js Component Engineering & State Management",
      "Tailwind CSS Systems & Custom Design Tokens",
      "Node.js Backend Integrations & Express APIs",
      "Modern Frontend Engineering & Interactive UI Development",
      "Framer Motion & Smooth Canvas Transitions",
    ],
    badges: ["Next.js", "React.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion"],
    color: "blue",
  },
  {
    id: "automation",
    title: "Workflow Automation & AI",
    subtitle: "Connecting Systems & Optimising Operations",
    description: "Architecting visual workflow automations that bridge custom platforms, AI models, and third-party APIs to eliminate repetitive business operations.",
    features: [
      "n8n Workflow Design & Custom Webhook Integration",
      "Make.com Complex Scenario Architecture & Data Mapping",
      "Zapier Actions & Multi-Step Business Triggers",
      "AI Automation Systems (OpenAI, Claude, Custom Agents)",
      "API Integrations & Real-Time Data Pipelines",
      "Business Process Automation & Workflow Optimisation",
    ],
    badges: ["n8n", "Make.com", "Zapier", "Webhooks", "AI Agents", "REST Integration"],
    color: "purple",
  },
];

const tabColorMap: Record<string, { accent: string; activeBorder: string; activeBg: string }> = {
  cyan:   { accent: "text-cyan-400",   activeBorder: "border-cyan-500/30", activeBg: "bg-cyan-500/10" },
  red:    { accent: "text-red-400",    activeBorder: "border-red-500/30",  activeBg: "bg-red-500/10" },
  blue:   { accent: "text-blue-400",   activeBorder: "border-blue-500/30", activeBg: "bg-blue-500/10" },
  purple: { accent: "text-purple-400", activeBorder: "border-purple-500/30", activeBg: "bg-purple-500/10" },
};

export default function About() {
  const [activeTab, setActiveTab] = useState("wordpress");

  const getIcon = (id: string) => {
    switch (id) {
      case "wordpress": return <Cpu className="w-5 h-5" />;
      case "laravel": return <Terminal className="w-5 h-5" />;
      case "js-frameworks": return <Code2 className="w-5 h-5" />;
      case "automation": return <Layers className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const currentTab = tabsData.find((t) => t.id === activeTab) || tabsData[0];
  const palette = tabColorMap[currentTab.color];

  return (
    <section id="about" className="relative py-28 px-6 bg-[#030206]/40">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex items-center space-x-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <User className="w-4 h-4 text-cyan-400" />
            <span>01 // What_I_Do</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Professional Expertise & Systems Engineering
          </motion.h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-slate-900 pr-0 lg:pr-6 scrollbar-none select-none">
            {tabsData.map((tab) => {
              const isActive = activeTab === tab.id;
              const tp = tabColorMap[tab.color];
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center space-x-3.5 px-5 py-4 rounded-xl font-mono text-xs tracking-widest uppercase transition-all duration-300 border flex-shrink-0 cursor-pointer ${isActive ? `${tp.activeBorder} ${tp.activeBg} ${tp.accent}` : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"}`}>
                  <span className={isActive ? tp.accent : "text-slate-500"}>{getIcon(tab.id)}</span>
                  <span>{tab.id.replace("-", " ")}</span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 min-h-[420px] relative group">
            <div className="absolute -inset-px bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-xl opacity-50 blur-sm pointer-events-none" />
            <div className="relative rounded-xl border border-slate-800/80 bg-[#07060d]/90 p-8 sm:p-10 backdrop-blur-xl overflow-hidden min-h-[420px] flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-cyan-500/20 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-cyan-500/20 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-cyan-500/20 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-cyan-500/20 rounded-br-xl" />

              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }} className="space-y-6">
                  <div className="space-y-1.5">
                    <span className={`font-mono text-[9px] uppercase tracking-widest ${palette.accent}`}>// {currentTab.subtitle}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">{currentTab.title}</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans">{currentTab.description}</p>
                  <div className="space-y-3 pt-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
                      <Wrench className="w-3 h-3" /><span>Core Capabilities:</span>
                    </span>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {currentTab.features.map((feat, idx) => (
                        <motion.li key={idx} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }} className="flex items-start space-x-2 text-xs text-slate-300 font-sans group/item">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${palette.accent}`} />
                          <span className="group-hover/item:text-white transition-colors">{feat}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-900 flex flex-wrap gap-2">
                    {currentTab.badges.map((b) => (
                      <span key={b} className="text-[9px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-700 transition-all cursor-default">{b}</span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
