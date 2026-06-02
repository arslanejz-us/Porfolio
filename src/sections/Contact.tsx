"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Terminal, Send, Check } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/cvData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => setLogs((prev) => [...prev, `[system] ${msg}`]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    setLogs([]);
    addLog("Initializing secure handshake...");
    await new Promise((r) => setTimeout(r, 600));
    addLog("Payload validation approved.");
    await new Promise((r) => setTimeout(r, 500));
    addLog("Routing transmission packet over SMTP...");
    await new Promise((r) => setTimeout(r, 600));
    addLog("Message delivered successfully! HTTP 202.");
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => { setStatus("idle"); setLogs([]); }, 5000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 bg-[#010103]/60">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex items-center space-x-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>06 // Contact_Port</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Let&apos;s Build Something Amazing
          </motion.h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Contact Details Panel */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-slate-800/80 bg-[#07060d]/80 p-8 backdrop-blur-xl space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white font-sans">Get In Touch</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Have a challenging project, enterprise requirements, or an open remote role? I usually respond within a few hours.
              </p>
            </div>

            <div className="space-y-5 font-mono text-xs text-slate-300">
              <div className="flex items-center space-x-3.5 group">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors">{personalInfo.email}</a>
              </div>
              <div className="flex items-center space-x-3.5 group">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400 group-hover:border-purple-500/30 transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-purple-400 transition-colors">{personalInfo.phone}</a>
              </div>
              <div className="flex items-center space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-pink-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="pt-6 border-t border-slate-900 flex space-x-3">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:shadow-[0_0_12px_rgba(6,182,212,0.15)] hover:scale-105 transition-all duration-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:scale-105 transition-all duration-300">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/30 hover:shadow-[0_0_12px_rgba(168,85,247,0.15)] hover:scale-105 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form Panel */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7 relative group">
            <div className="absolute -inset-px bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-xl opacity-10 group-hover:opacity-20 blur-sm transition-all duration-500" />
            <div className="relative rounded-xl border border-slate-800 bg-[#07060d]/90 p-8 backdrop-blur-xl space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] uppercase text-slate-500 tracking-wider">Your Name</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. John Doe" disabled={status !== "idle"} className="w-full rounded-lg bg-slate-950 border border-slate-900 hover:border-slate-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 px-4 py-3 text-sm text-slate-200 outline-none transition-all duration-300 font-sans" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] uppercase text-slate-500 tracking-wider">Email Address</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="e.g. john@domain.com" disabled={status !== "idle"} className="w-full rounded-lg bg-slate-950 border border-slate-900 hover:border-slate-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 px-4 py-3 text-sm text-slate-200 outline-none transition-all duration-300 font-sans" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase text-slate-500 tracking-wider">Subject</label>
                  <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="e.g. Enterprise Development Opportunity" disabled={status !== "idle"} className="w-full rounded-lg bg-slate-950 border border-slate-900 hover:border-slate-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 px-4 py-3 text-sm text-slate-200 outline-none transition-all duration-300 font-sans" />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase text-slate-500 tracking-wider">Message</label>
                  <textarea rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." disabled={status !== "idle"} className="w-full rounded-lg bg-slate-950 border border-slate-900 hover:border-slate-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 px-4 py-3 text-sm text-slate-200 outline-none transition-all duration-300 resize-none font-sans" />
                </div>
                <button type="submit" disabled={status !== "idle" || !form.name || !form.email || !form.message} className="w-full font-mono text-xs tracking-wider uppercase py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] cursor-pointer">
                  {status === "sending" ? (<><Terminal className="w-4 h-4 animate-spin" /><span>Sending...</span></>) : status === "success" ? (<><Check className="w-4 h-4" /><span>Message Sent!</span></>) : (<><Send className="w-4 h-4" /><span>Send Message</span></>)}
                </button>
              </form>
              {logs.length > 0 && (
                <div className="rounded-lg bg-slate-950/80 border border-slate-900 p-4 font-mono text-[10px] text-cyan-400/80 space-y-1.5 overflow-hidden">
                  {logs.map((log, index) => (
                    <div key={index} className="flex items-center space-x-1.5">
                      <span className="text-[8px] text-slate-600">//</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
