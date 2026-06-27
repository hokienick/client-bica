"use client";

import { motion } from "motion/react";

export default function HoursBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      className="py-12 px-6"
      style={{ backgroundColor: "var(--foreground)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <p className="font-medium text-sm" style={{ color: "var(--ink-inverse)" }}>
            Open 7 days a week &mdash; 6:30am to 4:00pm
          </p>
        </div>
        <a
          href="https://maps.google.com/?q=3569+Adams+Ave+San+Diego+CA+92116"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-opacity duration-200 hover:opacity-70"
          style={{ color: "var(--ink-inverse)", opacity: 0.6 }}
        >
          3569 Adams Ave &middot; Normal Heights, San Diego
        </a>
        <a
          href="mailto:info@bica-sd.com"
          className="text-sm transition-opacity duration-200 hover:opacity-70"
          style={{ color: "var(--ink-inverse)", opacity: 0.6 }}
        >
          info@bica-sd.com
        </a>
      </div>
    </motion.section>
  );
}
