"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-28 px-6 overflow-hidden" style={{ backgroundColor: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">

          {/* Text — first on mobile, 5 cols on desktop, pinned to bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="md:col-span-5 md:pb-6"
          >
            <h2
              className="font-display font-extrabold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", letterSpacing: "-0.04em" }}
            >
              Coffee is the anchor.
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--muted)", maxWidth: "38ch" }}>
              We open early. We close at 4. In between, something usually happens on the patio.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)", maxWidth: "38ch" }}>
              The supper clubs, art nights, fish breakdowns, the potters. That&rsquo;s what makes bica, bica.
            </p>
          </motion.div>

          {/* Image — 7 cols, bleeds slightly right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            className="relative md:col-span-7 aspect-[4/3]"
          >
            <Image
              src="https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/f94490ad-7be7-4784-aab2-b280389636ba/bica-site-update-0095.JPG"
              alt="bica patio in Normal Heights"
              fill
              className="object-cover"
              style={{ borderRadius: "2px" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
