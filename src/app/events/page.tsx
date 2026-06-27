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
    featured: true,
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
    title: "Cinema Crudite",
    date: "Mar 2026",
    time: "Evening",
    tag: "Film",
    description: "Film screening with crudites. A bica original.",
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

const featured = events[0];
const rest = events.slice(1);

export default function EventsPage() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      {/* Header */}
      <div className="px-6 mb-12">
        <div className="max-w-7xl mx-auto border-b pb-10" style={{ borderColor: "var(--border)" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <h1
              className="font-display font-extrabold leading-none"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "-0.04em" }}
            >
              What&rsquo;s on
            </h1>
            <p className="text-base md:max-w-xs md:text-right pb-1" style={{ color: "var(--muted)" }}>
              Supper clubs, workshops, music, and things that don&rsquo;t have a name yet.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="px-6">
        <div className="max-w-7xl mx-auto">

          {/* Featured event — full width */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="group grid grid-cols-1 md:grid-cols-2 gap-0 mb-8 overflow-hidden"
            style={{ border: "1px solid var(--border)", borderRadius: "2px" }}
          >
            <div className="relative aspect-square md:aspect-auto md:min-h-[420px] overflow-hidden bg-surface">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center" style={{ backgroundColor: "var(--foreground)" }}>
              <p className="text-xs font-medium mb-4 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                {featured.tag} &middot; {featured.date}
              </p>
              <h2
                className="font-display font-extrabold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", letterSpacing: "-0.03em" }}
              >
                {featured.title}
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                {featured.description}
              </p>
              <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                {featured.time}
              </p>
            </div>
          </motion.article>

          {/* Rest of events — 3 col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border)" }}>
            {rest.map((event, i) => (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: (i % 3) * 0.05 }}
                className="group bg-background overflow-hidden"
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
                  <div className="flex items-baseline justify-between mb-2.5">
                    <span className="text-xs font-medium" style={{ color: "var(--accent)" }}>
                      {event.tag}
                    </span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>
                      {event.date}
                    </span>
                  </div>
                  <h2
                    className="font-display font-bold mb-1"
                    style={{ fontSize: "1.05rem", letterSpacing: "-0.02em" }}
                  >
                    {event.title}
                  </h2>
                  <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>
                    {event.time}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.65 }}>
                    {event.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
