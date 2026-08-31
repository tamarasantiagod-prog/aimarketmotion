import Link from "next/link";
import { Mail, ExternalLink, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free 30-minute discovery call with Tamara at MarketMotion.",
};

const faqs = [
  { q: "What does a discovery call involve?", a: "A 30-minute conversation where I listen to your situation, ask some questions, and share my honest view of where I can help — or if I'm not the right fit, say so." },
  { q: "How quickly can you start?", a: "Usually within 1–2 weeks depending on current commitments. I'll be upfront on the call about my availability." },
  { q: "Do you work with businesses outside the UK?", a: "Yes — I've worked across Europe, the US, and LATAM. I work remotely and can adjust to your timezone." },
  { q: "How is pricing structured?", a: "All engagements are bespoke. Pricing depends on scope, duration, and whether you need project work or an ongoing retainer. We'll agree this before anything starts." },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--surface)] border-b border-[var(--border)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="tag mb-5">Contact</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-5">
            Let's talk about your business
          </h1>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl">
            Book a free 30-minute discovery call. No pitch, no pressure — just an honest conversation about where you are and where I can help.
          </p>
        </div>
      </section>

      {/* Calendly embed — full width */}
      <section className="bg-white py-16 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">Book your free 30-minute call</h2>
            <p className="text-[var(--foreground-muted)]">Pick a time that works for you — no obligation, no sales pitch.</p>
          </div>
          <div className="flex gap-4 justify-center mb-6 text-sm text-[var(--foreground-muted)]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" style={{ color: "var(--green-dark)" }} /> 30 minutes
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" style={{ color: "var(--green-dark)" }} /> Video call
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" style={{ color: "var(--green-dark)" }} /> No obligation
            </span>
          </div>
          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget rounded-xl overflow-hidden border border-[var(--border)]"
            data-url="https://calendly.com/tamara-downes-aimarketmotion/30min?hide_gdpr_banner=1&primary_color=7c3aed"
            style={{ minWidth: "320px", height: "700px" }}
          />
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          />
        </div>
      </section>

      {/* Contact options + FAQ */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Other ways to reach me</h2>
            <div className="space-y-4">
              <a href="mailto:tamara.downes@aimarketmotion.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-[var(--border)] bg-white hover:border-[var(--purple)] transition-colors group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--purple-light)" }}>
                  <Mail className="w-5 h-5" style={{ color: "var(--purple)" }} />
                </div>
                <div>
                  <p className="font-medium text-[var(--foreground)] group-hover:text-[var(--purple)] transition-colors">Email</p>
                  <p className="text-sm text-[var(--foreground-muted)]">tamara.downes@aimarketmotion.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/tamarasantiago" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-[var(--border)] bg-white hover:border-[var(--purple)] transition-colors group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--purple-light)" }}>
                  <ExternalLink className="w-5 h-5" style={{ color: "var(--purple)" }} />
                </div>
                <div>
                  <p className="font-medium text-[var(--foreground)] group-hover:text-[var(--purple)] transition-colors">LinkedIn</p>
                  <p className="text-sm text-[var(--foreground-muted)]">Connect and message me there</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-5">Common questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="border-b border-[var(--border)] pb-4">
                  <p className="font-semibold text-[var(--foreground)] mb-2 text-sm">{f.q}</p>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
