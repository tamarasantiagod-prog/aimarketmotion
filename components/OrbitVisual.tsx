import Image from "next/image";
import styles from "@/app/home.module.css";

type Chip = { label: string; x: number; y: number; w: number; hot?: boolean };
type Orbit = { cls?: "o2" | "o3" | "o4"; chips: Chip[] };

// Each orbit rotates at its own speed; chips counter-rotate so labels stay upright.
const ORBITS: Orbit[] = [
  { chips: [{ label: "ICP", x: 380, y: 280, w: 44 }] },
  { cls: "o2", chips: [{ label: "Positioning", x: 280, y: 124, w: 104 }] },
  { cls: "o3", chips: [{ label: "Messaging", x: 92, y: 350, w: 90 }, { label: "Enablement", x: 468, y: 210, w: 96 }] },
  { cls: "o4", chips: [{ label: "Launch", x: 280, y: 16, w: 68, hot: true }] },
];

export function OrbitVisual() {
  return (
    <div className={styles.orbitWrap}>
      <svg
        className={styles.orbit}
        viewBox="0 0 560 560"
        role="img"
        aria-label="Diagram: ICP, positioning, messaging, enablement and launch orbiting Tamara"
      >
        <defs>
          <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#7C3AED" stopOpacity="0.55" />
            <stop offset="1" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="280" cy="280" r="270" fill="url(#orbitGlow)" />
        <circle className={styles.ring} cx="280" cy="280" r="100" />
        <circle className={styles.ringDash} cx="280" cy="280" r="156" />
        <circle className={styles.ring} cx="280" cy="280" r="212" />
        <circle className={styles.ringDash} cx="280" cy="280" r="264" />

        {ORBITS.map((orbit, i) => (
          <g key={i} className={`${styles.orb} ${orbit.cls ? styles[orbit.cls] : ""}`}>
            {orbit.chips.map((c) => (
              <g key={c.label} transform={`translate(${c.x} ${c.y})`}>
                <g className={`${styles.ctr} ${c.hot ? styles.hot : ""}`}>
                  <rect className={styles.chipRect} x={-c.w / 2} y={-13} width={c.w} height={26} rx={13} />
                  <text className={styles.chipText} textAnchor="middle" y={4.5}>{c.label}</text>
                </g>
              </g>
            ))}
            {orbit.cls === "o4" && (
              <>
                <circle cx="70" cy="420" r="4" fill="#AE85FF" />
                <circle cx="500" cy="420" r="3" fill="#A2D149" />
              </>
            )}
          </g>
        ))}

        <circle className={styles.corePulse} cx="280" cy="280" r="58" fill="none" stroke="#A2D149" strokeWidth="1.5" />
      </svg>

      <div className={styles.core}>
        <Image src="/portrait.jpg" alt="Tamara Santiago Downes" fill sizes="120px" className={styles.corePhoto} priority />
      </div>
    </div>
  );
}
