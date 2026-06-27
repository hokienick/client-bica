"use client";

import { motion } from "motion/react";
import Image from "next/image";

const products = [
  {
    name: "bica fish tote",
    description: "The fish. The bag. Heavy canvas, natural color.",
    price: "$28",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/b1734d00-4a46-4e87-bf18-f6ce143ace35/bica-fish-sideways-website.png",
  },
  {
    name: "bica logo tee",
    description: "Heavyweight cotton. Chest print. Black or white.",
    price: "$36",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/b1734d00-4a46-4e87-bf18-f6ce143ace35/bica-fish-sideways-website.png",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div
        className="pt-32 pb-16 px-6"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="font-display font-extrabold leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", letterSpacing: "-0.04em" }}
          >
            Shop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base pb-1"
            style={{ color: "var(--muted)" }}
          >
            Limited runs. Preorder now, pick up at the cafe.
          </motion.p>
        </div>
      </div>

      {/* Products */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              <div
                className="relative aspect-square bg-surface mb-5 overflow-hidden group"
                style={{ borderRadius: "2px", border: "1px solid var(--border)" }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-10 transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider px-2.5 py-1"
                  style={{ backgroundColor: "var(--foreground)", color: "var(--ink-inverse)", borderRadius: "2px" }}
                >
                  Preorder
                </span>
              </div>
              <div className="flex items-baseline justify-between mb-1">
                <h2 className="font-display font-bold text-base" style={{ letterSpacing: "-0.02em" }}>
                  {product.name}
                </h2>
                <span className="font-bold text-sm">{product.price}</span>
              </div>
              <p className="text-sm mb-5" style={{ color: "var(--muted)" }}>{product.description}</p>
              <button
                className="w-full py-3.5 text-sm font-bold transition-opacity duration-200 hover:opacity-85 text-white"
                style={{ backgroundColor: "var(--foreground)", borderRadius: "2px" }}
              >
                Preorder
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
