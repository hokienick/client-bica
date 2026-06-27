"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/8969698b-f12d-4753-b0d6-c86fa48da813/bica+edifice+4.jpg')",
        }}
      />
      {/* Gradient: clear top, dark bottom — tighter, more dramatic */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent 20%, rgba(10,9,8,0.50) 55%, rgba(10,9,8,0.88) 80%, rgba(10,9,8,0.95) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1
            className="font-display font-extrabold text-white leading-none mb-5"
            style={{
              fontSize: "clamp(4rem, 11vw, 6rem)",
              letterSpacing: "-0.04em",
              textShadow: "0 2px 24px rgba(0,0,0,0.4)",
            }}
          >
            little cafe.<br />big life.
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <p className="text-white/70 text-base max-w-xs leading-relaxed">
              Coffee from 6:30am. Something always on the patio. Normal Heights, San Diego.
            </p>
            <div className="flex gap-3 sm:ml-4">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-white text-black transition-opacity duration-200 hover:opacity-85"
                style={{ borderRadius: "2px" }}
              >
                See what&rsquo;s on
              </Link>
              <a
                href="https://www.instagram.com/bica_sd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white border border-white/30 transition-all duration-200 hover:border-white/70"
                style={{ borderRadius: "2px" }}
              >
                @bica_sd
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
