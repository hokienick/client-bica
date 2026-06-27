"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2
              className="font-display font-bold mb-3"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.03em" }}
            >
              Stay in the loop.
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
              New events, pop-ups, and the occasional thing worth knowing about.
            </p>

            {submitted ? (
              <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                You&rsquo;re in. See you at the next one.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 text-sm bg-surface outline-none focus:ring-1 transition-all"
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: "2px",
                    color: "var(--foreground)",
                    // @ts-expect-error - CSS custom properties
                    "--tw-ring-color": "var(--accent)",
                  }}
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-85 whitespace-nowrap"
                  style={{ backgroundColor: "var(--foreground)", borderRadius: "2px" }}
                >
                  Stay hooked
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
