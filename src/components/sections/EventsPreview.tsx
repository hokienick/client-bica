"use client";

import { motion } from "motion/react";
import Link from "next/link";

const events = [
  {
    title: "Tuna Takedown",
    date: "Jun 20",
    time: "6pm – late",
    tag: "Dining",
  },
  {
    title: "Pinch Pottery & Matcha",
    date: "Jun 11",
    time: "5 – 8pm",
    tag: "Workshop",
  },
  {
    title: "Isiko: 10 Year Anniversary",
    date: "Jun 13",
    time: "5 – 10pm",
    tag: "Community",
  },
  {
    title: "Uncommon Sensing",
    date: "Jun 18",
    time: "7pm",
    tag: "Arts",
  },
];

export default function EventsPreview() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex items-baseline justify-between mb-8"
        >
          <h2
            className="font-display font-bold leading-none"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "-0.03em",
            }}
          >
            What&rsquo;s on
          </h2>
          <Link
            href="/events"
            className="text-sm font-medium transition-opacity duration-200 hover:opacity-60"
            style={{ color: "var(--accent)" }}
          >
            All events →
          </Link>
        </motion.div>

        {/* Listings */}
        <div style={{ borderTop: "1px solid var(--foreground)" }}>
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href="/events"
                className="group flex items-baseline gap-6 py-5 transition-opacity duration-200 hover:opacity-60"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                {/* Date */}
                <span
                  className="text-sm tabular-nums shrink-0 w-16"
                  style={{ color: "var(--muted)", fontVariantNumeric: "tabular-nums" }}
                >
                  {event.date}
                </span>

                {/* Title */}
                <span
                  className="font-display font-semibold flex-1 leading-tight"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.375rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {event.title}
                </span>

                {/* Time */}
                <span
                  className="text-xs hidden sm:block shrink-0"
                  style={{ color: "var(--muted)" }}
                >
                  {event.time}
                </span>

                {/* Tag */}
                <span
                  className="text-xs font-medium shrink-0 w-20 text-right"
                  style={{ color: "var(--muted)" }}
                >
                  {event.tag}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
