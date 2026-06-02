"use client";

import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData } from "@/lib/cvData";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="relative py-28 px-6 bg-[#030206]/40">
      {/* Visual lighting accents */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-cyan-400 font-mono text-xs tracking-widest uppercase"
          >
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>03 // Career_Timeline</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans"
          >
            Professional Career Journey
          </motion.h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
        </div>

        {/* Timeline Content */}
        <div className="relative border-l border-slate-800/80 ml-4 md:ml-6 space-y-12">
          {experienceData.map((job, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={job.company + job.role} className="relative pl-8 md:pl-10">
                {/* Timeline Glow point */}
                <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 border border-slate-800">
                  <span className={`h-2.5 w-2.5 rounded-full ${
                    index === 0
                      ? "bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse"
                      : "bg-purple-500"
                  }`} />
                </span>

                {/* Job Card wrapper */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "border-cyan-500/25 bg-[#090813]/90 shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)]"
                      : "border-slate-800/80 bg-[#07060d]/50 hover:border-slate-700 hover:bg-[#090813]/30"
                  }`}
                >
                  {/* Card Header (always visible) */}
                  <div
                    onClick={() => toggleExpand(index)}
                    className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-white font-sans">
                          {job.role}
                        </h3>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                          @{job.company}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-400 text-xs font-mono">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-cyan-500/60" />
                          <span>{job.period}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-cyan-500/60" />
                          <span>{job.location}</span>
                        </span>
                      </div>
                    </div>

                    <button className="self-end md:self-center p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white transition-all">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Card Details (Collapsible) */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-slate-900"
                      >
                        <div className="p-6 bg-slate-950/20 space-y-3 font-sans text-sm text-slate-300">
                          <h4 className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider mb-2">
                            Key Responsibilities & Contributions:
                          </h4>
                          <ul className="space-y-2.5">
                            {job.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-cyan-500 font-mono mt-0.5 text-xs select-none">
                                  &gt;
                                </span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
