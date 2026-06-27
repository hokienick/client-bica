"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/events", label: "Events" },
  { href: "/shop", label: "Shop" },
  { href: "/private-events", label: "Private Events" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[200] transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "var(--background)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg
            width="32"
            height="20"
            viewBox="0 0 80 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-105"
          >
            {/* Stylized fish silhouette */}
            <path
              d="M60 25C60 25 45 8 20 8C10 8 2 16 2 25C2 34 10 42 20 42C45 42 60 25 60 25Z"
              fill="currentColor"
            />
            <path
              d="M55 25L75 14L68 25L75 36L55 25Z"
              fill="currentColor"
            />
            <circle cx="18" cy="22" r="2.5" fill="var(--background)" />
          </svg>
          <span
            className="font-display font-bold text-xl tracking-tight leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            bica
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: pathname === link.href ? "var(--accent)" : "var(--foreground)",
                opacity: pathname === link.href ? 1 : 0.7,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
