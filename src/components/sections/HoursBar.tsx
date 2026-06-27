"use client";

import { motion } from "motion/react";

export default function HoursBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      className="py-10 px-6"
      style={{ backgroundColor: "var(--foreground)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-display font-semibold text-sm" style={{ color: "var(--ink-inverse)", letterSpacing: "-0.01em" }}>
          Open daily &middot; 6:30am to 4:00pm
        </p>
        <a
          href="https://maps.google.com/?q=3569+Adams+Ave+San+Diego+CA+92116"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-opacity duration-200 hover:opacity-80"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          3569 Adams Ave &middot; Normal Heights
        </a>
        <a
          href="mailto:info@bica-sd.com"
          className="text-sm transition-opacity duration-200 hover:opacity-80"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          info@bica-sd.com
        </a>
      </div>
    </motion.section>
  );
}
