"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-14 px-6 overflow-hidden">

      {/* Fish — upper right, ghost */}
      <motion.div
        className="absolute right-8 top-20 pointer-events-none select-none"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 0.14 }}
        transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1], delay: 0.6 }}
        aria-hidden
      >
        <Image
          src="https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/b1734d00-4a46-4e87-bf18-f6ce143ace35/bica-fish-sideways-website.png"
          alt=""
          width={180}
          height={115}
          className="object-contain"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="mb-14"
        >
          {/* Large typeset wordmark — the hero texture */}
          <h1
            className="font-display font-extrabold leading-none"
            style={{
              fontSize: "clamp(5rem, 18vw, 11rem)",
              letterSpacing: "-0.04em",
              color: "var(--foreground)",
            }}
          >
            bica
          </h1>

          {/* Tagline + logo mark — stacked below, offset right slightly */}
          <div className="flex items-center gap-5 mt-3">
            <p
              className="font-display font-medium leading-none"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.75rem)",
                letterSpacing: "-0.02em",
                color: "var(--muted)",
              }}
            >
              little cafe.
            </p>
            {/* Actual logo mark — small, as colophon */}
            <Image
              src="https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/f14f305c-dafc-4024-bddc-0ce2b176aed5/Remove+background+project.png?format=1500w"
              alt="b.i.c.a"
              width={52}
              height={56}
              className="object-contain opacity-40 shrink-0"
              style={{ height: "clamp(28px, 4vw, 48px)", width: "auto" }}
            />
          </div>
        </motion.div>

        {/* Bottom rule + facts */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.25 }}
        >
          <div className="w-full h-px mb-6" style={{ backgroundColor: "var(--foreground)" }} />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-x-8 gap-y-1 text-sm" style={{ color: "var(--muted)" }}>
              <span>6:30am – 4pm &middot; daily</span>
              <span>3569 Adams Ave &middot; Normal Heights, San Diego</span>
            </div>
            <Link
              href="/events"
              className="text-sm font-semibold inline-flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-60 whitespace-nowrap"
              style={{ color: "var(--accent)", letterSpacing: "-0.01em" }}
            >
              See what&rsquo;s on
              <span aria-hidden>→</span>
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
