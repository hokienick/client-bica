"use client";

import { useState } from "react";
import { motion } from "motion/react";

const SERVICES = ["Catering", "DJ", "Live music", "Photo / Video"] as const;

export default function PrivateEventsPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    signUpForNews: false,
    phone: "",
    services: [] as string[],
    date: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleService = (service: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(service)
        ? f.services.filter((s) => s !== service)
        : [...f.services, service],
    }));
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
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name — split first/last */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "firstName", label: "First name", placeholder: "First" },
                    { id: "lastName", label: "Last name", placeholder: "Last" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-xs font-semibold mb-1.5" style={{ color: "var(--muted)" }}>
                        {field.label} <span style={{ color: "var(--accent)" }}>*</span>
                      </label>
                      <input
                        id={field.id}
                        type="text"
                        placeholder={field.placeholder}
                        required
                        value={form[field.id as "firstName" | "lastName"]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className="w-full px-4 py-3 text-sm outline-none bg-background"
                        style={{ border: "1px solid var(--border)", borderRadius: "2px", color: "var(--foreground)" }}
                      />
                    </div>
                  ))}
                </div>

                {/* Email + newsletter opt-in */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold mb-1.5" style={{ color: "var(--muted)" }}>
                    Email <span style={{ color: "var(--accent)" }}>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm outline-none bg-background"
                    style={{ border: "1px solid var(--border)", borderRadius: "2px", color: "var(--foreground)" }}
                  />
                  <label className="flex items-center gap-2.5 mt-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={form.signUpForNews}
                      onChange={(e) => setForm({ ...form, signUpForNews: e.target.checked })}
                      className="w-3.5 h-3.5 accent-[var(--accent)]"
                    />
                    <span className="text-xs" style={{ color: "var(--muted)" }}>Sign up for news and updates</span>
                  </label>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold mb-1.5" style={{ color: "var(--muted)" }}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(619) 555-0100"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm outline-none bg-background"
                    style={{ border: "1px solid var(--border)", borderRadius: "2px", color: "var(--foreground)" }}
                  />
                </div>

                {/* Services checkboxes */}
                <div>
                  <p className="text-xs font-semibold mb-2" style={{ color: "var(--muted)" }}>What does your event need?</p>
                  <div className="flex flex-wrap gap-3">
                    {SERVICES.map((service) => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={form.services.includes(service)}
                          onChange={() => toggleService(service)}
                          className="w-3.5 h-3.5 accent-[var(--accent)]"
                        />
                        <span className="text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Date + Budget */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="date" className="block text-xs font-semibold mb-1.5" style={{ color: "var(--muted)" }}>
                      Preferred date
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full px-4 py-3 text-sm outline-none bg-background"
                      style={{ border: "1px solid var(--border)", borderRadius: "2px", color: "var(--foreground)" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-xs font-semibold mb-1.5" style={{ color: "var(--muted)" }}>
                      Budget
                    </label>
                    <input
                      id="budget"
                      type="text"
                      placeholder="e.g. $2,000"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full px-4 py-3 text-sm outline-none bg-background"
                      style={{ border: "1px solid var(--border)", borderRadius: "2px", color: "var(--foreground)" }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold mb-1.5" style={{ color: "var(--muted)" }}>
                    Message <span style={{ color: "var(--accent)" }}>*</span>
                  </label>
                  <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>
                    Clue us in on the details and we&rsquo;ll help bring it to life.
                  </p>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell us about your event..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm outline-none resize-none bg-background"
                    style={{ border: "1px solid var(--border)", borderRadius: "2px", color: "var(--foreground)" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-sm font-bold text-white transition-opacity duration-200 hover:opacity-85"
                  style={{ backgroundColor: "var(--foreground)", borderRadius: "2px" }}
                >
                  Submit
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
