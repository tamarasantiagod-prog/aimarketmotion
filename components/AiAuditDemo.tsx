"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/home.module.css";

const TASKS = [
  { id: "research", label: "Competitor and market research", ai: "Scans sources, clusters competitor claims and drafts a comparison grid in minutes.", you: "You decide which competitors matter and sanity-check what the evidence really says." },
  { id: "content", label: "Launch content and copy", ai: "Turns one messaging brief into first-draft emails, landing copy and social variants.", you: "A senior PMM owns the message, the tone and what actually ships." },
  { id: "enable", label: "Sales enablement", ai: "Drafts battle cards and pitch-deck outlines straight from your positioning.", you: "Sales conversations test the drafts, and the story stays consistent." },
  { id: "icp", label: "Customer and ICP insight", ai: "Summarises interviews, reviews and call notes into recurring themes.", you: "Choosing which segment to go after is a judgement call, not a summary." },
  { id: "report", label: "Reporting and launch recaps", ai: "Pulls campaign numbers into a draft weekly readout.", you: "Interpreting what changed, and what to do next, stays with a human." },
  { id: "admin", label: "Repetitive admin", ai: "Handles meeting notes, follow-ups, formatting and tagging.", you: "You review anything customer-facing before it leaves the building." },
];

export function AiAuditDemo() {
  const [selected, setSelected] = useState<string[]>(["research", "content"]);
  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const picked = TASKS.filter((t) => selected.includes(t.id));

  return (
    <div className={styles.console} role="region" aria-label="Interactive AI audit example">
      <div className={styles.bar}>
        <span>marketmotion / ai-audit</span>
        <span className={styles.live}>interactive example</span>
      </div>

      <div className={styles.inner}>
        <div className={styles.pick}>
          <h3>Which jobs eat your team&apos;s week?</h3>
          <p className={styles.sub}>Tap the ones that sound familiar. The map updates as you go.</p>
          <div className={styles.chips} role="group" aria-label="Team tasks">
            {TASKS.map((t) => (
              <button
                key={t.id}
                type="button"
                className={styles.chip}
                aria-pressed={selected.includes(t.id)}
                onClick={() => toggle(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.map} aria-live="polite">
          <div className={styles.mapHead}>
            <span>Audit map</span>
            <span>{picked.length} {picked.length === 1 ? "task" : "tasks"}</span>
          </div>
          {picked.length === 0 ? (
            <p className={styles.empty}>Pick at least one task to see the map.</p>
          ) : (
            <ul className={styles.mapList}>
              {picked.map((t, i) => (
                <li key={t.id} className={styles.mapItem} style={{ animationDelay: `${i * 45}ms` }}>
                  <div className={styles.mapTitle}>
                    {t.label}
                    {i === 0 && <span className={styles.start}>Start here</span>}
                  </div>
                  <p><b className={`${styles.who} ${styles.whoAi}`}>AI</b>{t.ai}</p>
                  <p><b className={`${styles.who} ${styles.whoYou}`}>You</b>{t.you}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className={styles.foot}>
        <span>Illustrative. A real audit starts from your team&apos;s actual workflows.</span>
        <Link href="/contact">Map yours on a free call &rarr;</Link>
      </div>
    </div>
  );
}
