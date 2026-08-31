import Link from "next/link";
import { ArrowRight, MapPin, GraduationCap, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "25 years of GTM and product marketing experience across Adobe, Sage, and global tech. Now helping small businesses and scale-ups grow smarter.",
};

const career = [
  { company: "Workiva", role: "Senior Product Marketing Manager", period: "2025 – May 2026", sector: "SaaS / Financial Reporting" },
  { company: "Access Group", role: "Product Marketing Manager", period: "2023 – 2025", sector: "SaaS / ERP" },
  { company: "Sage", role: "Senior Marketing Manager", period: "2018 – 2023", sector: "SaaS / Accounting" },
  { company: "Adobe", role: "Product Marketing Manager", period: "2014 – 2018", sector: "Creative / Enterprise SaaS" },
];

const education = [
  { institution: "Oxford University", credential: "Executive Education — Leadership" },
  { institution: "IE Business School", credential: "MBA" },
  { institution: "London Business School", credential: "Executive Programme" },
];

const values = [
  { title: "Clarity over complexity", body: "Good strategy is simple. I cut through the noise and give you a clear picture of what to do and why." },
  { title: "Speed and substance", body: "I move fast without cutting corners. You get thinking that's been tested across hundreds of launches, applied quickly to your situation." },
  { title: "Honest advice", body: "I'll tell you what I think, not what you want to hear. If there's a smarter way, I'll say so." },
  { title: "AI as a multiplier", body: "I use AI tools every day in my own work — and I help clients use them too. Not hype, just practical tools that save real time." },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--surface)] border-b border-[var(--border)] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="tag mb-5">About</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-5">
              Hi, I'm Tamara — the founder of MarketMotion
            </h1>
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              I've spent 25 years in go-to-market and product marketing across some of the world's best-known tech companies. Now I use that experience to help small businesses and scale-ups compete smarter.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] flex items-center justify-center overflow-hidden">
              <div className="text-center text-[var(--foreground-subtle)]">
                <div className="w-20 h-20 rounded-full mx-auto mb-3" style={{ background: "var(--purple-light)" }} />
                <p className="text-sm font-medium">Tamara Santiago Downes</p>
                <p className="text-xs text-[var(--foreground-subtle)] flex items-center justify-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" /> London, UK
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="tag mb-5">My story</div>
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">25 years. Thousands of decisions. One clear focus.</h2>
          <div className="space-y-5 text-[var(--foreground-muted)] leading-relaxed">
            <p>
              I started my career in marketing before "product marketing" was even a job title. Over 25 years I've worked across three continents, led product launches at Adobe and Sage, managed teams, and helped businesses at every stage — from scrappy startups to global enterprises — figure out how to grow.
            </p>
            <p>
              What I noticed along the way: the small businesses always had the best products but the worst go-to-market. They were doing the hardest thing — building something people actually want — and then leaving money on the table because they didn't have the marketing firepower to match.
            </p>
            <p>
              That's why I built MarketMotion. To bring senior GTM thinking to businesses that can't justify a full-time hire, but desperately need the expertise.
            </p>
            <p>
              I also believe AI has fundamentally changed what's possible for small teams. Used well, it's not a shortcut — it's a multiplier. I use AI tools daily in my own work, and I help clients build the same capability.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="tag mb-5">How I work</div>
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-10">What working with me looks like</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card">
                <div className="w-2 h-8 rounded-full mb-4" style={{ background: "var(--green)" }} />
                <h3 className="text-base font-bold text-[var(--foreground)] mb-2">{v.title}</h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-5 h-5" style={{ color: "var(--purple)" }} />
              <h2 className="text-xl font-bold text-[var(--foreground)]">Career highlights</h2>
            </div>
            <div className="space-y-4">
              {career.map((c) => (
                <div key={c.company} className="p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="font-semibold text-[var(--foreground)]">{c.company}</p>
                    <span className="text-xs text-[var(--foreground-subtle)] shrink-0">{c.period}</span>
                  </div>
                  <p className="text-sm text-[var(--foreground-muted)]">{c.role}</p>
                  <p className="text-xs text-[var(--foreground-subtle)] mt-1">{c.sector}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5" style={{ color: "var(--purple)" }} />
              <h2 className="text-xl font-bold text-[var(--foreground)]">Education</h2>
            </div>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.institution} className="p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
                  <p className="font-semibold text-[var(--foreground)]">{e.institution}</p>
                  <p className="text-sm text-[var(--foreground-muted)] mt-1">{e.credential}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--purple)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's talk about your business</h2>
          <p className="text-purple-200 mb-8">Book a free 30-minute discovery call — no pitch, no pressure, just an honest conversation.</p>
          <Link href="/contact" className="btn-green px-8 py-4">
            Book a free call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
