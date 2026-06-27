"use client";

import { motion } from "motion/react";
import Image from "next/image";

const products = [
  {
    name: "bica fish tote",
    description: "The fish. The bag. Canvas, natural.",
    price: "$28",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/b1734d00-4a46-4e87-bf18-f6ce143ace35/bica-fish-sideways-website.png",
    status: "preorder",
  },
  {
    name: "bica logo tee",
    description: "Heavyweight cotton. Chest print. Black or white.",
    price: "$36",
    image: "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/b1734d00-4a46-4e87-bf18-f6ce143ace35/bica-fish-sideways-website.png",
    status: "preorder",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <h1
            className="font-display font-bold leading-none mb-3"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em" }}
          >
            Shop
          </h1>
          <p className="text-base" style={{ color: "var(--muted)" }}>
            Limited runs. Preorder now, pick up at the cafe.
          </p>
        </motion.div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: i * 0.08 }}
            >
              <div
                className="relative aspect-square bg-surface mb-4 overflow-hidden group"
                style={{ borderRadius: "2px" }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 text-xs font-medium uppercase tracking-wide px-2 py-0.5"
                  style={{ backgroundColor: "var(--foreground)", color: "var(--ink-inverse)", borderRadius: "2px" }}
                >
                  {product.status}
                </span>
              </div>
              <div className="flex items-start justify-between mb-1">
                <h2 className="font-display font-bold text-base" style={{ letterSpacing: "-0.02em" }}>
                  {product.name}
                </h2>
                <span className="font-medium text-sm">{product.price}</span>
              </div>
              <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>{product.description}</p>
              <button
                className="w-full py-3 text-sm font-medium transition-opacity duration-200 hover:opacity-85 text-white"
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
