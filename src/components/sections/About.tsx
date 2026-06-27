"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text — left, slightly offset */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="md:pr-8"
        >
          <h2
            className="font-display font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}
          >
            A little cafe<br />in Normal Heights.
          </h2>
          <p className="text-base leading-relaxed max-w-prose mb-4" style={{ color: "var(--muted)" }}>
            We open early. We close at 4. In between, something usually happens on the patio.
          </p>
          <p className="text-base leading-relaxed max-w-prose" style={{ color: "var(--muted)" }}>
            Coffee is the anchor. Everything else — the supper clubs, the art nights, the fish breakdowns, the potters — that&rsquo;s what makes bica, bica.
          </p>
        </motion.div>

        {/* Image — right, slightly raised */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          className="relative aspect-[4/3] md:-mt-8"
        >
          <Image
            src="https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/f94490ad-7be7-4784-aab2-b280389636ba/bica-site-update-0095.JPG"
            alt="Inside bica — wood tables, natural light, the patio"
            fill
            className="object-cover"
            style={{ borderRadius: "2px" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
