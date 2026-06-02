"use client";

import React from "react";
import { Award, Zap, Cpu, Network, Workflow, GitMerge } from "lucide-react";
import { motion } from "framer-motion";
import { certificationsData } from "@/lib/cvData";

export default function Certifications() {
  // Select matching high-tech icon based on certification title keywords
  const getIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("n8n")) {
      return <Workflow className="w-6 h-6 text-cyan-400" />;
    }
    if (t.includes("make.com") || t.includes("make")) {
      return <GitMerge className="w-6 h-6 text-purple-400" />;
    }
    if (t.includes("wordpress")) {
      return <Cpu className="w-6 h-6 text-emerald-400" />;
    }
    if (t.includes("vitals") || t.includes("performance")) {
      return <Zap className="w-6 h-6 text-amber-400" />;
    }
    if (t.includes("api") || t.includes("rest")) {
      return <Network className="w-6 h-6 text-pink-400" />;
    }
    return <Award className="w-6 h-6 text-cyan-400" />;
  };

  return (
    <section id="certifications" className="relative py-28 px-6 bg-[#030206]/40">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />

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
            <Award className="w-4 h-4 text-cyan-400" />
            <span>05 // Credentials_Check</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans"
          >
            Professional Certifications & Credentials
          </motion.h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-800/80 bg-[#07060d]/80 p-6 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-xl"
            >
              {/* Glowing hover backdrop */}
              <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
              
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/20 transition-colors">
                    {getIcon(cert.title)}
                  </div>
                  <span className="font-mono text-xs text-slate-500">// {cert.date}</span>
                </div>
                
                <h3 className="text-base font-bold text-white font-sans group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed font-sans min-h-[60px]">
                  {cert.description}
                </p>
              </div>

              <div className="relative pt-6 border-t border-slate-900 mt-6 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-slate-500">
                <span>Verified Issuer:</span>
                <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
