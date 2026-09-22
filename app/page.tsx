import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import styles from "./home.module.css";
import { OrbitVisual } from "@/components/OrbitVisual";
import { AiAuditDemo } from "@/components/AiAuditDemo";

const stats = [
  { value: "25+", label: "years in GTM and product marketing" },
  { value: "50+", label: "product launches led" },
  { value: "3", label: "continents of experience" },
  { value: "EN·PT", label: "English and Brazilian Portuguese" },
];

const pillars = [
  {
    kicker: "Your team, with AI",
    name: "AI Enablement",
    body: "Audits, tools and hands-on training so your team uses AI well every week, not just once.",
  },
  {
    kicker: "Go-to-market",
    name: "GTM Enablement",
    body: "Messaging, pitch decks and battle cards, so sales and marketing tell one story at launch.",
  },
  {
    kicker: "Pipeline and demand",
    name: "Growth",
    body: "Positioning turned into a plan built around where your growth will really come from.",
  },
  {
    kicker: "Ideal Customer Profile",
    name: "ICP",
    body: "Exactly who you sell to and why they buy, so every message lands with the right people.",
  },
];

const proofPoints = [
  "ICP definition and market segmentation",
  "Messaging and value proposition frameworks",
  "Go-to-market strategy and launch planning",
  "AI tools audit and team enablement",
  "Sales enablement — pitch decks, battle cards",
  "Product launch management, end to end",
];

export default function HomePage() {
  return (
    <div className={`${styles.page} on-dark`}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.glow} />
        <div className={styles.glow2} />
        <div className={styles.dots} />
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div>
            <span className={styles.eyebrow}>Go-to-market · AI · Product marketing</span>
            <h1>
              25 years of go-to-market judgement, with <em>AI in the loop.</em>
            </h1>
            <p className={styles.lede}>
              MarketMotion gives small businesses and scale-ups senior product marketing, and shows your team where AI
              genuinely saves hours. Strategy, AI enablement and hands-on PMM support, from one person, when you need it.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/contact" className={`${styles.btn} ${styles.btnLime}`}>
                Book a free discovery call <ArrowRight />
              </Link>
              <Link href="#audit" className={`${styles.btn} ${styles.btnGhost}`}>
                Try the AI audit
              </Link>
            </div>
            <p className={styles.fine}>No pitch, no pressure. 30 minutes to get a clear picture.</p>
          </div>
          <OrbitVisual />
        </div>
      </section>

      {/* ── BACKGROUND + STATS ── */}
      <section className={styles.strip} aria-label="Experience">
        <div className={`${styles.wrap} ${styles.stripGrid}`}>
          <div>
            <p className={styles.stripLabel}>Background</p>
            <p className={styles.stripText}>Global SaaS and enterprise software teams</p>
          </div>
          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={`${styles.light} ${styles.services}`} id="services">
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <div>
              <span className={styles.eyebrow}>What I do</span>
              <h2>Go-to-market strategy, plus the AI to move faster.</h2>
            </div>
            <p>
              Whether you need strategy, AI enablement or hands-on PMM support, I flex to what your business needs right now.
            </p>
          </div>

          <div className={styles.pillars} role="list" aria-label="What I cover">
            {pillars.map((p) => (
              <div key={p.name} className={styles.pillar} role="listitem">
                <p className={styles.pillarKicker}>{p.kicker}</p>
                <h3 className={styles.pillarName}>{p.name}</h3>
                <p className={styles.pillarBody}>{p.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.bento}>
            {/* AI Audit: copy and drawing live in separate columns so text never sits on the graphic */}
            <Link href="/services#ai" className={`${styles.tile} ${styles.tAi}`}>
              <div className={styles.aiBody}>
                <div className={styles.aiCopy}>
                  <span className={styles.kicker}>AI Audit &amp; Enablement</span>
                  <h3>Find where AI saves your team hours every week.</h3>
                  <p>Practical audits, tool recommendations and hands-on training. No jargon, and no tools nobody ends up using.</p>
                </div>
                <svg className={styles.aiArt} viewBox="0 0 320 200" aria-hidden="true" fill="none">
                  <g stroke="#AE85FF" strokeOpacity="0.55" strokeWidth="1.3">
                    <path d="M30 150 L110 90 L200 120 L285 50" />
                    <path d="M110 90 L150 30 L285 50" />
                    <path d="M200 120 L250 175 L30 150" />
                    <path d="M110 90 L200 120" />
                  </g>
                  <g fill="#1E1636" stroke="#AE85FF" strokeWidth="1.5">
                    <circle cx="30" cy="150" r="9" />
                    <circle cx="110" cy="90" r="11" />
                    <circle cx="150" cy="30" r="8" />
                    <circle cx="200" cy="120" r="10" />
                    <circle cx="250" cy="175" r="8" />
                  </g>
                  <circle cx="285" cy="50" r="13" fill="#A2D149" />
                  <circle cx="285" cy="50" r="22" stroke="#A2D149" strokeOpacity="0.45" />
                </svg>
              </div>
              <div className={styles.flow} aria-label="Research, draft, then your judgement">
                <span>Research</span><i>&rarr;</i><span>Draft</span><i>&rarr;</i><span className={styles.you}>Your judgement</span>
              </div>
              <span className={styles.more} style={{ color: "var(--green)" }}>
                Learn more <ChevronRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/services#gtm" className={`${styles.tile} ${styles.tGtm}`}>
              <div className={styles.gtmHead}>
                <span className={styles.kicker}>GTM &amp; Growth Strategy</span>
                <svg className={styles.gtmArt} viewBox="0 0 80 80" aria-hidden="true" fill="none">
                  <circle cx="40" cy="40" r="37" stroke="#7C3AED" strokeOpacity="0.3" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="26" stroke="#7C3AED" strokeOpacity="0.5" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="15" stroke="#7C3AED" strokeOpacity="0.85" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="5" fill="#7EB82A" />
                </svg>
              </div>
              <h3>Launch with clarity.</h3>
              <p>Define your Ideal Customer Profile (ICP), sharpen your positioning and build a go-to-market (GTM) plan that actually works, not just theory.</p>
              <div className={styles.tags}><span>ICP</span><span>Positioning</span><span>Growth</span><span>Launch plan</span></div>
              <span className={styles.more}>Learn more <ChevronRight className="w-4 h-4" /></span>
            </Link>

            <Link href="/services#freelance" className={`${styles.tile} ${styles.tPmm}`}>
              <span className={styles.kicker}>Freelance &amp; Contract PMM</span>
              <h3>Senior, on demand.</h3>
              <p>I embed in your team and deliver, from a focused sprint to a 6-month contract.</p>
              <svg className={styles.trackLine} viewBox="0 0 240 20" aria-hidden="true" fill="none">
                <line x1="8" y1="10" x2="232" y2="10" stroke="rgba(26,19,48,0.18)" strokeWidth="2" />
                <line x1="8" y1="10" x2="72" y2="10" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />
                <circle cx="8" cy="10" r="5" fill="#7C3AED" />
                <circle cx="72" cy="10" r="5" fill="#fff" stroke="#7C3AED" strokeWidth="2" />
                <circle cx="232" cy="10" r="5" fill="#7EB82A" />
              </svg>
              <div className={styles.trackLabels}><span>Focused sprint</span><span>6-month contract</span></div>
              <span className={styles.more}>Learn more <ChevronRight className="w-4 h-4" /></span>
            </Link>

            <article className={`${styles.tile} ${styles.tSprint}`}>
              <div className={styles.sprintL}>
                <span className={styles.kicker}>Fixed-scope option</span>
                <h3>Positioning &amp; Messaging Sprint</h3>
                <p>Two weeks to a positioning statement and messaging framework your whole team can use, plus one or two assets built from it.</p>
                <Link href="/contact" className={`${styles.btn} ${styles.btnViolet}`} style={{ alignSelf: "flex-start", marginTop: "auto" }}>
                  Ask about the sprint
                </Link>
              </div>
              <div className={styles.sprintR}>
                <div className={styles.big}>2 weeks<small>Fixed scope, agreed up front</small></div>
                <ul>
                  <li>Positioning statement</li>
                  <li>Messaging framework</li>
                  <li>1-2 applied assets: homepage copy, sales one-pager or pitch narrative</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── TRY THE AI AUDIT ── */}
      <section className={`${styles.try} ${styles.dark}`} id="audit">
        <div className={`${styles.wrap} ${styles.tryInner}`}>
          <div className={styles.secHead}>
            <div>
              <span className={styles.eyebrow}>Try it</span>
              <h2>See where AI fits your team&apos;s week.</h2>
            </div>
            <p>A small taste of what an AI audit looks like: where AI takes the first pass, and where a senior human stays in charge.</p>
          </div>
          <AiAuditDemo />
        </div>
      </section>

      {/* ── ABOUT / WHY ── */}
      <section className={`${styles.light} ${styles.about}`} id="about">
        <div className={`${styles.wrap} ${styles.aboutGrid}`}>
          <div className={styles.portrait}>
            <div className={styles.frame}>
              <Image
                src="/portrait.jpg"
                alt="Tamara Santiago Downes"
                fill
                sizes="(max-width: 900px) 86vw, 420px"
                className={styles.portraitImg}
              />
            </div>
            <div className={styles.badge}>Based in the UK<br />English &amp; Português</div>
          </div>

          <div>
            <span className={styles.eyebrow}>Why MarketMotion</span>
            <h2>Senior expertise. No agency overhead.</h2>
            <p className={styles.lead}>
              I work directly with founders and marketing leaders, with no layers and no juniors doing the work. You get 25 years of GTM
              and product marketing experience applied straight to your business, at a fraction of the cost of a full-time hire.
            </p>
            <ul className={styles.checks}>
              {proofPoints.map((p) => (
                <li key={p}>
                  <CheckCircle2 aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={`${styles.btn} ${styles.btnViolet} ${styles.aboutCta}`}>
              Start with a free call <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CLOSING BAND ── */}
      <section className={styles.close}>
        <div className={`${styles.wrap} ${styles.closeGrid}`}>
          <div>
            <h2>Ready to move faster?</h2>
            <p>Book a free 30-minute discovery call. No pitch, no pressure, just a clear picture of where I can help.</p>
          </div>
          <Link href="/contact" className={`${styles.btn} ${styles.btnLime} ${styles.btnLg}`}>
            Book your free call <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
