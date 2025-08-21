"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/pages", label: "Pages" },
  { href: "/courses", label: "Courses" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-[var(--bg)]/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-md bg-[var(--brand)]" />
          <span className="font-extrabold text-xl tracking-tight">Uni</span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-sm font-medium hover:text-[var(--brand)] ${
                pathname === n.href ? "text-[var(--brand)]" : "text-slate-700"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <div className="hidden lg:flex items-center gap-4">
            {/* Instagram icon (simple) */}
            <button
              aria-label="Instagram"
              className="rounded-full p-2 hover:bg-white/70 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                  stroke="currentColor"
                />
                <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </button>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </nav>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto md:hidden p-2"
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-[var(--bg)]">
          <div className="px-4 py-3 space-y-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="block py-2 text-slate-800"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
