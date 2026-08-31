import Link from "next/link";
import { Target, Sparkles, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "GTM strategy, AI audit & enablement, and freelance PMM — senior expertise for growing businesses.",
};

const services = [
  {
    id: "gtm",
    icon: Target,
    tag: "Strategy",
    title: "GTM & Growth Strategy",
    intro: "Launch with clarity. Grow with purpose.",
    description:
      "25 years of go-to-market expertise — now accessible to businesses of any size. I help you define who you sell to, what makes you different, and how to reach the right customers faster.",
    whoFor: [
      "Small businesses ready to get serious about growth",
      "Scale-ups launching new products or entering new markets",
      "Founders who need a clear GTM plan before their next funding round",
      "Teams without a dedicated PMM but needing that level of thinking",
    ],
    delivers: [
      "Ideal Customer Profile (ICP) definition and validation",
      "Value proposition and messaging frameworks",
      "Go-to-market strategy and launch plan",
      "Competitive positioning and differentiation",
      "Sales enablement — pitch decks, battle cards, email sequences",
      "Growth strategy and channel prioritisation",
    ],
    pricing: [
      { name: "Discovery Call", price: "Free", detail: "30 mins — understand your goals" },
      { name: "GTM Sprint", price: "Negotiable", detail: "2-week focused engagement" },
      { name: "Launch Support", price: "Negotiable", detail: "end-to-end product launch" },
      { name: "Growth Retainer", price: "Negotiable", detail: "ongoing monthly strategy" },
    ],
    accent: "#ECFDE8",
    accentText: "var(--green-dark)",
  },
  {
    id: "ai",
    icon: Sparkles,
    tag: "AI Enablement",
    title: "AI Audit & Enablement",
    intro: "Work smarter. Save hours every week.",
    description:
      "I help small businesses and scale-ups understand exactly where AI can make a real difference — not theory, not hype. Practical audits, honest recommendations, and hands-on enablement so your team can use AI tools confidently.",
    whoFor: [
      "Small businesses curious about AI but not sure where to start",
      "Scale-ups wanting to automate repetitive marketing tasks",
      "Teams who've tried AI tools but aren't seeing real results",
      "Founders who want to compete with bigger budgets using smarter tools",
    ],
    delivers: [
      "AI readiness audit — where you are and what's possible",
      "Prioritised automation roadmap (quick wins first)",
      "Tool recommendations matched to your budget and team size",
      "Team enablement sessions on Claude, ChatGPT, n8n, Make.com",
      "Prompt libraries and workflow templates",
      "Ongoing content: guides, tutorials, and AI updates",
    ],
    pricing: [
      { name: "Discovery Call", price: "Free", detail: "30 mins — no obligation" },
      { name: "AI Readiness Audit", price: "Negotiable", detail: "depending on team size and scope" },
      { name: "Team Enablement Session", price: "Negotiable", detail: "half-day or full-day workshop" },
      { name: "Ongoing Advisory", price: "Negotiable", detail: "monthly retainer" },
    ],
    accent: "var(--purple-light)",
    accentText: "var(--purple)",
  },
  {
    id: "freelance",
    icon: Briefcase,
    tag: "Freelance & Contract",
    title: "Freelance & Contract PMM",
    intro: "Senior PMM on demand. No lengthy onboarding.",
    description:
      "Senior PMM expertise without the full-time hire. I embed into your team for as long as you need — from a focused 4-week sprint to a 6-month contract.",
    whoFor: [
      "Startups and scale-ups that need senior PMM but can't justify a full hire yet",
      "Companies preparing for a major launch or rebrand",
      "Businesses going through a pivot or market expansion",
      "Teams needing interim PMM cover while they recruit",
    ],
    delivers: [
      "Fractional Head of Product Marketing (part-time, ongoing)",
      "Product launch lead — 3 to 6 month contracts",
      "GTM strategy for new product or market entry",
      "Interim PMM while you hire",
      "Messaging, positioning, and sales enablement",
      "Available direct or via TSD Consultancy Ltd",
    ],
    pricing: [
      { name: "Discovery Call", price: "Free", detail: "30 mins" },
      { name: "Project / Sprint", price: "Negotiable", detail: "depending on scope and duration" },
      { name: "Part-time Retainer", price: "Negotiable", detail: "2–3 days per week" },
      { name: "Full Contract", price: "Negotiable", detail: "available via direct or TSD Consultancy" },
    ],
    accent: "#ECFDE8",
    accentText: "var(--green-dark)",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--surface)] border-b border-[var(--border)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="tag mb-5">Services</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-5">
            How I can help your business
          </h1>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl">
            Whether you need strategy, AI enablement, or embedded PMM support — I work directly with founders and marketing leaders to deliver results fast.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-[var(--surface)]"}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: s.accent }}>
                  <s.icon className="w-6 h-6" style={{ color: s.accentText }} />
                </div>
                <div className="tag mb-4">{s.tag}</div>
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-2">{s.title}</h2>
                <p className="text-sm font-semibold text-[var(--foreground-muted)] mb-5 italic">{s.intro}</p>
                <p className="text-[var(--foreground-muted)] leading-relaxed mb-8">{s.description}</p>

                <h3 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wide mb-4">Who it's for</h3>
                <ul className="space-y-2 mb-8">
                  {s.whoFor.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-sm text-[var(--foreground-muted)]">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--green-dark)" }} />
                      {w}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="btn-primary">
                  Enquire now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div>
                <div className="card mb-6">
                  <h3 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wide mb-4">What you get</h3>
                  <ul className="space-y-3">
                    {s.delivers.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--purple)" }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wide mb-4">Pricing</h3>
                  <div className="space-y-3">
                    {s.pricing.map((p) => (
                      <div key={p.name} className="flex items-start justify-between gap-4 text-sm">
                        <div>
                          <p className="font-medium text-[var(--foreground)]">{p.name}</p>
                          <p className="text-[var(--foreground-subtle)]">{p.detail}</p>
                        </div>
                        <span className="font-bold shrink-0"
                          style={{ color: p.price === "Free" ? "var(--green-dark)" : "var(--purple)" }}>
                          {p.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--purple)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which service fits?</h2>
          <p className="text-purple-200 mb-8">Book a free 30-minute call. We'll work out together exactly what would move the needle for your business.</p>
          <Link href="/contact" className="btn-green px-8 py-4">
            Book a free discovery call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
