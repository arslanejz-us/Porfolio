"use client";

import React, { useState } from "react";
import { FolderGit2, ExternalLink, ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData, productsData } from "@/lib/cvData";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"projects" | "products">("projects");

  return (
    <section id="projects" className="relative py-28 px-6 bg-[#010103]/60">
      {/* Background neon glows */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-cyan-400 font-mono text-xs tracking-widest uppercase"
          >
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            <span>04 // Portfolio_Showcase</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans"
          >
            Engineering Showcase & Commercial Products
          </motion.h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
        </div>

        {/* Showcase Type Selector (Client Deployments vs ThemeForest Commercial Products) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-slate-950/60 p-1.5 border border-slate-800/80">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-2.5 rounded-lg font-mono text-xs tracking-wider uppercase transition-all ${
                activeTab === "projects"
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Client Deployments ({projectsData.length})
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2.5 rounded-lg font-mono text-xs tracking-wider uppercase transition-all ${
                activeTab === "products"
                  ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Commercial Products ({productsData.length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CLIENT DEPLOYMENTS TAB */}
          {activeTab === "projects" &&
            projectsData.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-800/80 bg-[#07060d]/80 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-xl"
              >
                {/* Tech Wireframe Mockup Placeholder Header */}
                <div className="relative h-44 bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-900/60">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07060d] to-transparent z-10" />
                  
                  {/* Cyberpunk grid background mockup */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-40 group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Glowing neon shapes inside card mockup */}
                  <div className="w-16 h-16 rounded-xl border border-cyan-500/20 flex items-center justify-center bg-cyan-500/5 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all z-20">
                    <Code2 className="w-8 h-8 text-cyan-400/80 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  {/* Floating abstract code bubbles */}
                  <span className="absolute right-4 top-4 font-mono text-[9px] text-cyan-500/35 border border-cyan-500/10 px-2 py-0.5 rounded">
                    {project.type}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white font-sans group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans min-h-[50px]">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  {project.features && (
                    <ul className="text-[10px] font-mono text-slate-500 space-y-1">
                      {project.features.slice(0, 2).map((feat, idx) => (
                        <li key={idx} className="flex items-center space-x-1.5">
                          <span className="text-cyan-500">&gt;</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 group-hover:border-slate-800 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-900">
                    <span className="text-[9px] font-mono text-cyan-500/50 uppercase tracking-widest">
                      // Active deployment
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center space-x-1 text-xs font-mono text-cyan-400 hover:text-white transition-colors"
                    >
                      <span>View Case</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

          {/* THEMEFOREST COMMERCIAL PRODUCTS TAB */}
          {activeTab === "products" &&
            productsData.map((prod, i) => (
              <motion.div
                key={prod.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-800/80 bg-[#07060d]/80 overflow-hidden hover:border-purple-500/30 transition-all duration-300 backdrop-blur-xl"
              >
                {/* Tech Wireframe Mockup Placeholder Header */}
                <div className="relative h-44 bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-900/60">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07060d] to-transparent z-10" />
                  
                  {/* Cyberpunk grid background mockup */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-40 group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Glowing neon shapes inside card mockup */}
                  <div className="w-16 h-16 rounded-xl border border-purple-500/20 flex items-center justify-center bg-purple-500/5 group-hover:border-purple-500/40 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all z-20">
                    <FolderGit2 className="w-8 h-8 text-purple-400/80 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <span className="absolute right-4 top-4 font-mono text-[9px] text-purple-400/50 border border-purple-500/20 px-2 py-0.5 rounded">
                    {prod.type}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white font-sans group-hover:text-purple-400 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans min-h-[50px]">
                      {prod.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      WordPress Marketplace Product
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {prod.platform}
                    </span>
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-900">
                    <span className="text-[9px] font-mono text-purple-500/50 uppercase tracking-widest">
                      // Commercial item
                    </span>
                    <div className="flex items-center space-x-3">
                      {prod.links.mobile && (
                        <a
                          href={prod.links.mobile}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-1 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                        >
                          <span>Mobile App</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

        </div>
      </div>
    </section>
  );
}
