import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 mt-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/6572b632bfc5012951086e89/b1734d00-4a46-4e87-bf18-f6ce143ace35/bica-fish-sideways-website.png"
              alt="bica fish logo"
              width={48}
              height={30}
              className="opacity-80"
            />
            <div>
              <p className="font-display font-bold text-base" style={{ letterSpacing: "-0.03em" }}>bica</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>little cafe</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-sm" style={{ color: "var(--muted)" }}>
            <Link href="/events" className="hover:text-foreground transition-colors duration-200">Events</Link>
            <Link href="/shop" className="hover:text-foreground transition-colors duration-200">Shop</Link>
            <Link href="/private-events" className="hover:text-foreground transition-colors duration-200">Private Events</Link>
            <a href="https://www.instagram.com/bica_sd" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-200">@bica_sd</a>
          </nav>

          {/* Address */}
          <div className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>3569 Adams Ave</p>
            <p>San Diego, CA 92116</p>
            <p className="mt-1">6:30am – 4:00pm, daily</p>
          </div>
        </div>

        <div className="mt-8 pt-6 text-xs" style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }}>
          &copy; {new Date().getFullYear()} bica. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
