"use client";

import React from "react";
import { personalInfo } from "@/lib/cvData";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-slate-900 bg-[#030206] text-slate-500 font-mono text-[10px] tracking-wider">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/15 flex items-center justify-center">
            <span className="text-[9px] font-bold text-cyan-400 tracking-tighter">AE</span>
          </div>
          <span>
            &copy; {currentYear} {personalInfo.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Socials */}
        <div className="flex items-center space-x-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-cyan-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
        </div>

        {/* Status */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span>STATUS: <span className="text-emerald-500">ONLINE</span></span>
          <span>STACK: NEXT.JS + TS + TW</span>
        </div>
      </div>
    </footer>
  );
}
