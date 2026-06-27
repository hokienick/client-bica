"use client";

import { motion } from "motion/react";
import Image from "next/image";

const events = [
  {
    title: "Tuna Takedown",
    date: "Jun 20, 2026",
    time: "6pm – late",
    tag: "Dining",
    description: "Eight chefs. Eight interpretations. One 150-lb bluefin. DJ, wine, and beer included. $125/guest.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1780510200642-BDW5J23WDEB0IKJQSCXG/tuna+take+down+print.PNG",
  },
  {
    title: "Uncommon Sensing",
    date: "Jun 18, 2026",
    time: "6 – 7:30pm",
    tag: "Workshop",
    description: "Somatic movement workshop by Niki de Saint Amour using the Feldenkrais Method. Includes herbal tea flight and Q&A.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1781104789770-1ETWBIDUFP7ZVNDIKK6A/unnamed.jpg",
  },
  {
    title: "Isiko: 10 Year Anniversary",
    date: "Jun 13, 2026",
    time: "5 – 10pm",
    tag: "Community",
    description: "A decade of Isiko. Tambayan food, custom flash tattoos, and special merchandise releases.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1781104082824-R89KXEBXB3U1LQ94Q7QV/Screenshot+2026-06-10+at+7.54.26%E2%80%AFAM.png",
  },
  {
    title: "Pinch Pottery & Matcha",
    date: "Jun 11, 2026",
    time: "5 – 8pm",
    tag: "Workshop",
    description: "Clay workshop by Bumi Ceramics. Wine and matcha service throughout.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1781102970495-HFPATQ5OS6WYXGHGIALA/IG+FLYERS+-+4.PNG",
  },
  {
    title: "Industry Night: Sarsa",
    date: "May 2026",
    time: "6pm – late",
    tag: "Industry Night",
    description: "A night with the Sarsa team. Food, drinks, and the usual suspects.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1780510369149-F1W2TTND3R6GAOE5YCK2/IMG_1165.jpeg",
  },
  {
    title: "BYOB Dinner",
    date: "May 2026",
    time: "7pm",
    tag: "Dining",
    description: "Bring your own bottle. We handle the rest.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1780510511741-CE74DRVJ1Y509600OKJ7/BYOB+%287%29.PNG",
  },
  {
    title: "Spritzes on Deck",
    date: "May 2026",
    time: "5 – 9pm",
    tag: "Drinks",
    description: "Cool Hand Co. takes over the patio. Spritzes, sun, and good company.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1778111960904-UIHZLDCAZP7D4JZB9O0W/Screenshot+2026-05-06+at+4.59.07%E2%80%AFPM.png",
  },
  {
    title: "Jesus Gonzalez",
    date: "May 15, 2026",
    time: "Doors 6pm, Show 7pm",
    tag: "Music",
    description: "Live music at bica. $10 at the door.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1778818113640-C2BH2NYBJD49CIKJBCLY/jesus+Poster.png",
  },
  {
    title: "Chao Club x Kapwa",
    date: "Apr 2026",
    time: "6pm",
    tag: "Dining",
    description: "A collaboration between Chao Club and Kapwa. Filipino flavors, bica patio.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1778219215239-6K7Z2U9D47XPQVCS2YCP/683628258_1311659040936575_1693923164384766919_n.jpg",
  },
  {
    title: "Adams Run Club",
    date: "Recurring",
    time: "Morning",
    tag: "Community",
    description: "Lace up. Run Adams Ave. Coffee after.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1778649543749-41NHP5K7WVQIWZ5Z1OZ9/ARC-Clubhouse-Posters.PNG",
  },
  {
    title: "Cinema Crudité",
    date: "Mar 2026",
    time: "Evening",
    tag: "Film",
    description: "Film screening with crudités. A bica original.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1773815083021-WFPL8FYYGJ3SI1GC7AXX/IMG_9358.jpg",
  },
  {
    title: "Industry Night: Bosforo",
    date: "May 1, 2026",
    time: "6pm – late",
    tag: "Industry Night",
    description: "One year anniversary. Bosforo takes the kitchen for a night.",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/1777565740572-PT4LWJQ4Z51P22EX7HW2/Screenshot+2026-04-30+at+9.15.24%E2%80%AFAM.png",
  },
];

const tagColors: Record<string, string> = {
  "Dining": "oklch(0.93 0.06 60)",
  "Workshop": "oklch(0.90 0.06 145)",
  "Community": "oklch(0.92 0.04 250)",
  "Industry Night": "oklch(0.90 0.03 300)",
  "Drinks": "oklch(0.93 0.06 80)",
  "Music": "oklch(0.92 0.04 320)",
  "Film": "oklch(0.90 0.03 200)",
};

const tagTextColors: Record<string, string> = {
  "Dining": "oklch(0.40 0.10 60)",
  "Workshop": "oklch(0.35 0.12 145)",
  "Community": "oklch(0.35 0.10 250)",
  "Industry Night": "oklch(0.35 0.08 300)",
  "Drinks": "oklch(0.40 0.10 80)",
  "Music": "oklch(0.35 0.08 320)",
  "Film": "oklch(0.35 0.08 200)",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      {/* Header */}
      <div className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <h1
              className="font-display font-bold leading-none mb-3"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em" }}
            >
              What&rsquo;s on at bica
            </h1>
            <p className="text-base max-w-lg" style={{ color: "var(--muted)" }}>
              Supper clubs, workshops, music, and things that don&rsquo;t have a name yet. Check back often.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Events grid */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: (i % 3) * 0.06 }}
              className="group bg-background overflow-hidden hover:shadow-md transition-shadow duration-300"
              style={{ border: "1px solid var(--border)", borderRadius: "2px" }}
            >
              <div className="relative aspect-square overflow-hidden bg-surface">
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
                    style={{
                      backgroundColor: tagColors[event.tag] || "var(--accent-light)",
                      color: tagTextColors[event.tag] || "var(--accent)",
                      borderRadius: "2px",
                    }}
                  >
                    {event.tag}
                  </span>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>
                    {event.date}
                  </span>
                </div>
                <h2
                  className="font-display font-bold mb-1"
                  style={{ fontSize: "1.125rem", letterSpacing: "-0.02em" }}
                >
                  {event.title}
                </h2>
                <p className="text-xs mb-3 font-medium" style={{ color: "var(--accent)" }}>
                  {event.time}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {event.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
