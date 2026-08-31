import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="mb-3">
            <Image src="/logo-aimarketmotion-dark.svg" alt="AI MarketMotion" width={180} height={42} className="h-8 w-auto" />
          </div>
          <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
            GTM strategy, AI enablement, and senior PMM expertise for growing businesses.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--foreground)] mb-3">Links</p>
          <div className="flex flex-col gap-2">
            {[
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="text-sm text-[var(--foreground-muted)] hover:text-[var(--purple)] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--foreground)] mb-3">Get in touch</p>
          <a href="mailto:tamara.downes@aimarketmotion.com"
            className="text-sm text-[var(--foreground-muted)] hover:text-[var(--purple)] transition-colors block mb-2">
            tamara.downes@aimarketmotion.com
          </a>
          <a href="https://www.linkedin.com/in/tamarasantiago" target="_blank" rel="noopener noreferrer"
            className="text-sm text-[var(--foreground-muted)] hover:text-[var(--purple)] transition-colors">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--border)] px-6 py-4">
        <p className="text-center text-xs text-[var(--foreground-subtle)]">
          © {new Date().getFullYear()} MarketMotion / TSD Consultancy Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
