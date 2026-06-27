"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 overflow-hidden">

      {/* Fish — positioned upper right, drifting */}
      <motion.div
        className="absolute right-8 top-24 opacity-20"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 0.18 }}
        transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1], delay: 0.6 }}
      >
        <Image
          src="https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/b1734d00-4a46-4e87-bf18-f6ce143ace35/bica-fish-sideways-website.png"
          alt=""
          width={200}
          height={130}
          className="select-none object-contain"
          aria-hidden
        />
      </motion.div>

      {/* Wordmark block */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Actual b.i.c.a logo at hero scale */}
          <h1 className="sr-only">bica</h1>
          <Image
            src="https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/f14f305c-dafc-4024-bddc-0ce2b176aed5/Remove+background+project.png?format=1500w"
            alt="bica"
            width={900}
            height={260}
            priority
            className="object-contain object-left"
            style={{ width: "clamp(280px, 65vw, 780px)", height: "auto" }}
          />

          {/* Tagline */}
          <p
            className="font-display font-medium leading-none mt-3"
            style={{
              fontSize: "clamp(1.1rem, 3vw, 2rem)",
              letterSpacing: "-0.02em",
              color: "var(--muted)",
            }}
          >
            little cafe.
          </p>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
        className="max-w-7xl mx-auto w-full"
      >
        {/* Rule */}
        <div className="w-full h-px mb-6" style={{ backgroundColor: "var(--foreground)" }} />

        {/* Facts + CTA */}
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

    </section>
  );
}
