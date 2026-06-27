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
    <main className="min-h-screen">
      {/* Hero bar */}
      <div
        className="pt-32 pb-16 px-6"
        style={{ backgroundColor: "var(--foreground)", color: "var(--ink-inverse)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <h1
              className="font-display font-extrabold leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.04em" }}
            >
              Private events<br />&amp; catering.
            </h1>
            <p className="mt-4 text-base max-w-md" style={{ color: "rgba(255,255,255,0.6)" }}>
              The patio seats up to 80. The coffee is good. Tell us what you&rsquo;re thinking.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          >
            <p className="text-base leading-relaxed mb-8 max-w-prose" style={{ color: "var(--muted)" }}>
              Birthdays, company gatherings, pop-ups, film screenings, supper clubs. bica has hosted them all. Use the form and we&rsquo;ll be in touch within 48 hours.
            </p>

            <div className="space-y-0 divide-y" style={{ borderColor: "var(--border)" }}>
              {[
                { label: "Location", value: "3569 Adams Ave, Normal Heights" },
                { label: "Capacity", value: "Up to 80 guests (patio + indoor)" },
                { label: "Availability", value: "After 4pm, 7 days a week" },
                { label: "Contact", value: "info@bica-sd.com" },
              ].map((item) => (
                <div key={item.label} className="flex gap-8 py-4 text-sm">
                  <span className="font-semibold w-24 shrink-0">{item.label}</span>
                  <span style={{ color: "var(--muted)" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
          >
            {submitted ? (
              <div
                className="p-12 text-center"
                style={{ border: "1px solid var(--border)", borderRadius: "2px" }}
              >
                <p className="font-display font-bold text-2xl mb-2" style={{ letterSpacing: "-0.03em" }}>
                  We&rsquo;ll be in touch.
                </p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Expect a reply within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name", label: "Your name", type: "text", placeholder: "Name" },
                  { id: "email", label: "Email", type: "email", placeholder: "email@example.com" },
                  { id: "date", label: "Preferred date", type: "text", placeholder: "e.g. July 12, 2026" },
                  { id: "guests", label: "Number of guests", type: "text", placeholder: "e.g. 40" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--muted)" }}>
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="w-full px-4 py-3 text-sm outline-none transition-all bg-background"
                      style={{
                        border: "1px solid var(--border)",
                        borderRadius: "2px",
                        color: "var(--foreground)",
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="details" className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--muted)" }}>
                    Tell us about the event
                  </label>
                  <textarea
                    id="details"
                    rows={5}
                    placeholder="What are you planning? Any special requirements?"
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    className="w-full px-4 py-3 text-sm outline-none transition-all resize-none bg-background"
                    style={{
                      border: "1px solid var(--border)",
                      borderRadius: "2px",
                      color: "var(--foreground)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-sm font-bold tracking-wide text-white transition-opacity duration-200 hover:opacity-85"
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
