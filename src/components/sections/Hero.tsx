"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-24 overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/8969698b-f12d-4753-b0d6-c86fa48da813/bica+edifice+4.jpg')",
        }}
      />
      {/* Gradient overlay: clear top, dark bottom for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(252,251,249,0.1) 0%, rgba(252,251,249,0.0) 30%, rgba(16,14,12,0.72) 75%, rgba(16,14,12,0.88) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "var(--accent-light)" }}>
            Normal Heights, San Diego
          </p>
          <h1
            className="font-display font-bold text-white leading-none mb-6"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 6rem)",
              letterSpacing: "-0.03em",
            }}
          >
            little cafe.<br />big life.
          </h1>
          <p className="text-white/80 text-lg max-w-md mb-8 leading-relaxed">
            Coffee from 6:30am. Events that go late. A patio worth lingering on.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-sm transition-all duration-200 hover:gap-3"
              style={{ backgroundColor: "var(--accent)", color: "white", borderRadius: "2px" }}
            >
              See what&rsquo;s on
              <span aria-hidden>→</span>
            </Link>
            <a
              href="https://www.instagram.com/bica_sd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-sm border border-white/40 text-white transition-all duration-200 hover:border-white/80"
              style={{ borderRadius: "2px" }}
            >
              @bica_sd
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
