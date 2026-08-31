import Link from "next/link";
import { ArrowRight, Target, Sparkles, Briefcase, CheckCircle2, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "GTM & Growth Strategy",
    description: "Launch with clarity. Define your ICP, sharpen your positioning, and build a go-to-market plan that actually works — not just theory.",
    href: "/services#gtm",
    accent: "var(--green)",
  },
  {
    icon: Sparkles,
    title: "AI Audit & Enablement",
    description: "Discover where AI can save your team hours every week. Practical audits, tool recommendations, and hands-on training — no jargon.",
    href: "/services#ai",
    accent: "var(--purple)",
  },
  {
    icon: Briefcase,
    title: "Freelance & Contract PMM",
    description: "Senior product marketing expertise on demand. I embed in your team and deliver results — from a focused sprint to a 6-month contract.",
    href: "/services#freelance",
    accent: "var(--green)",
  },
];

const stats = [
  { value: "25+", label: "Years in GTM & Product Marketing" },
  { value: "50+", label: "Product launches led" },
  { value: "8M+", label: "Digital interactions delivered at Sage" },
  { value: "3", label: "Continents, global experience" },
];

const logos = ["Adobe", "Sage", "Access Group", "Workiva"];

const proofPoints = [
  "ICP definition and market segmentation",
  "Messaging and value proposition frameworks",
  "Go-to-market strategy and launch planning",
  "AI tools audit and team enablement",
  "Sales enablement — pitch decks, battle cards",
  "Product launch management, end-to-end",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(circle, var(--purple) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, var(--green) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <div className="tag mb-6">GTM · AI · Product Marketing</div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6">
              Go to market <span style={{ color: "var(--purple)" }}>faster</span> and<br />
              grow <span style={{ color: "var(--green-dark)" }}>smarter</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed mb-10 max-w-2xl">
              MarketMotion brings 25 years of senior product marketing expertise to small businesses and scale-ups.
              Strategy, AI enablement, and hands-on PMM support — when you need it, how you need it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book a free discovery call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                See how I can help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS ── */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-8">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-semibold text-[var(--foreground-subtle)] uppercase tracking-widest mb-6">
            Experience from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {logos.map((name) => (
              <span key={name} className="text-sm font-semibold text-[var(--foreground-subtle)]">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold mb-1" style={{ color: "var(--purple)" }}>{s.value}</p>
              <p className="text-sm text-[var(--foreground-muted)]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="tag mb-4">What I do</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Three ways to work together</h2>
            <p className="text-[var(--foreground-muted)] max-w-xl mx-auto">
              Whether you need strategy, AI enablement, or hands-on PMM support — I flex to what your business needs right now.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href}
                className="card group hover:border-[var(--purple)] hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: s.accent === "var(--green)" ? "#ECFDE8" : "var(--purple-light)" }}>
                  <s.icon className="w-5 h-5" style={{ color: s.accent === "var(--green)" ? "var(--green-dark)" : "var(--purple)" }} />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-5">{s.description}</p>
                <span className="text-sm font-semibold flex items-center gap-1" style={{ color: "var(--purple)" }}>
                  Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="tag mb-5">Why MarketMotion</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-5">
              Senior expertise.<br />No agency overhead.
            </h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-8">
              I work directly with founders and marketing leaders — no layers, no juniors doing the work.
              You get 25 years of GTM and product marketing experience applied directly to your business, at a fraction of the cost of a full-time hire.
            </p>
            <Link href="/contact" className="btn-primary">
              Start with a free call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {proofPoints.map((p) => (
              <div key={p} className="flex items-start gap-3 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--green-dark)" }} />
                <span className="text-sm font-medium text-[var(--foreground)]">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20" style={{ background: "var(--purple)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to move faster?
          </h2>
          <p className="text-purple-200 mb-8 text-lg">
            Book a free 30-minute discovery call. No pitch, no pressure — just a clear picture of where I can help.
          </p>
          <Link href="/contact" className="btn-green text-base px-8 py-4">
            Book your free call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
