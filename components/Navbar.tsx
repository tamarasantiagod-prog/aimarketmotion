"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="AI MarketMotion — Home">
          <Image src="/logo-aimarketmotion-dark.svg" alt="AI MarketMotion" width={240} height={56} className="h-10 w-auto" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm py-2 px-5">
            Work with me
          </Link>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-[var(--foreground-muted)]">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm text-center" onClick={() => setOpen(false)}>
            Work with me
          </Link>
        </div>
      )}
    </header>
  );
}
