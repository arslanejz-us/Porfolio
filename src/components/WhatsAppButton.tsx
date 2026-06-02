"use client";

import { FaWhatsapp } from "react-icons/fa";

// Floating WhatsApp chat button — opens a chat with Arslan's number.
export default function WhatsAppButton() {
  const phone = "923004254863"; // +92 300 4254863 (no '+' for wa.me)
  const message = "Hi Arslan, I came across your portfolio and would like to connect.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center"
    >
      {/* Pulsing ring */}
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-emerald-500/40 opacity-75 animate-ping" />

      {/* Button */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-green-400 text-white shadow-lg shadow-emerald-500/30 ring-1 ring-emerald-300/40 transition-transform duration-300 group-hover:scale-110">
        <FaWhatsapp className="h-7 w-7" />
      </span>

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg border border-slate-800/70 bg-[#090812]/95 px-3 py-1.5 font-mono text-xs text-slate-200 opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
