"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "Tuna Takedown",
    date: "Jun 20",
    time: "6pm – late",
    description: "Eight chefs. Eight interpretations. One 150-lb bluefin.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1780510200642-BDW5J23WDEB0IKJQSCXG/tuna+take+down+print.PNG",
    tag: "Dining",
  },
  {
    title: "Pinch Pottery & Matcha",
    date: "Jun 11",
    time: "5 – 8pm",
    description: "Clay by Bumi Ceramics. Wine and matcha on the side.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1781102970495-HFPATQ5OS6WYXGHGIALA/IG+FLYERS+-+4.PNG",
    tag: "Workshop",
  },
  {
    title: "Isiko: 10 Year Anniversary",
    date: "Jun 13",
    time: "5 – 10pm",
    description: "Tambayan food, custom flash tattoos, special merch drops.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1781104082824-R89KXEBXB3U1LQ94Q7QV/Screenshot+2026-06-10+at+7.54.26%E2%80%AFAM.png",
    tag: "Community",
  },
];

export default function EventsPreview() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <h2
            className="font-display font-bold leading-none"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.03em" }}
          >
            What&rsquo;s on
          </h2>
          <Link
            href="/events"
            className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
            style={{ color: "var(--accent)" }}
          >
            All events →
          </Link>
        </motion.div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: i * 0.08 }}
              className="group bg-background overflow-hidden"
              style={{ borderRadius: "2px", border: "1px solid var(--border)" }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-medium tracking-wide uppercase px-2 py-0.5"
                    style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)", borderRadius: "2px" }}
                  >
                    {event.tag}
                  </span>
                  <span className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                    {event.date} &middot; {event.time}
                  </span>
                </div>
                <h3
                  className="font-display font-bold mb-2"
                  style={{ fontSize: "1.125rem", letterSpacing: "-0.02em" }}
                >
                  {event.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {event.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
