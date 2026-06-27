"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function PrivateEventsPage() {
  const [form, setForm] = useState({ name: "", email: "", date: "", guests: "", details: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="lg:sticky lg:top-28"
          >
            <h1
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
            >
              Private events<br />& catering.
            </h1>
            <p className="text-base leading-relaxed mb-4 max-w-prose" style={{ color: "var(--muted)" }}>
              The patio seats up to 80. The coffee is good. The neighbors are friendly.
            </p>
            <p className="text-base leading-relaxed mb-8 max-w-prose" style={{ color: "var(--muted)" }}>
              Birthdays, company gatherings, pop-ups, film screenings, supper clubs — bica has hosted them all. Tell us what you&rsquo;re thinking.
            </p>

            <div className="space-y-4">
              {[
                { label: "Location", value: "3569 Adams Ave, Normal Heights" },
                { label: "Capacity", value: "Up to 80 guests (patio + indoor)" },
                { label: "Hours", value: "After 4pm, 7 days a week" },
                { label: "Contact", value: "info@bica-sd.com" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 text-sm">
                  <span className="font-medium w-24 shrink-0">{item.label}</span>
                  <span style={{ color: "var(--muted)" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          >
            {submitted ? (
              <div className="py-16 text-center">
                <p
                  className="font-display font-bold text-2xl mb-3"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  We&rsquo;ll be in touch.
                </p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Expect a reply within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name", label: "Your name", type: "text", placeholder: "Name" },
                  { id: "email", label: "Email", type: "email", placeholder: "email@example.com" },
                  { id: "date", label: "Preferred date", type: "text", placeholder: "e.g. July 12, 2026" },
                  { id: "guests", label: "Number of guests", type: "text", placeholder: "e.g. 40" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium mb-1.5">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="w-full px-4 py-3 text-sm outline-none focus:ring-1 transition-all bg-background"
                      style={{
                        border: "1px solid var(--border)",
                        borderRadius: "2px",
                        // @ts-expect-error CSS custom properties
                        "--tw-ring-color": "var(--accent)",
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="details" className="block text-sm font-medium mb-1.5">
                    Tell us about the event
                  </label>
                  <textarea
                    id="details"
                    rows={5}
                    placeholder="What are you planning? Any special requirements?"
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    className="w-full px-4 py-3 text-sm outline-none focus:ring-1 transition-all resize-none bg-background"
                    style={{
                      border: "1px solid var(--border)",
                      borderRadius: "2px",
                      // @ts-expect-error CSS custom properties
                      "--tw-ring-color": "var(--accent)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-85"
                  style={{ backgroundColor: "var(--foreground)", borderRadius: "2px" }}
                >
                  Send inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
