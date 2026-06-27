"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const LOGO = "https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/f14f305c-dafc-4024-bddc-0ce2b176aed5/Remove+background+project.png?format=1500w";

const links = [
  { href: "/events", label: "Events" },
  { href: "/shop", label: "Shop" },
  { href: "/private-events", label: "Private Events" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[200] transition-all duration-500"
      style={{
        backgroundColor: "var(--background)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group">
          <Image
            src={LOGO}
            alt="bica"
            width={52}
            height={40}
            className="object-contain transition-opacity duration-200 group-hover:opacity-70"
          />
        </Link>

        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-all duration-300"
              style={{
                color: pathname === link.href ? "var(--accent)" : "var(--foreground)",
                opacity: pathname === link.href ? 1 : 0.65,
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
