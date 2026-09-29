import { useMemo, useState, type CSSProperties } from 'react';
import { profile, resumeUrl } from '../data/profile';

const COLS = 13;
const ROWS = 15;
const W = 420;
const H = 500;

const hash = (i: number, j: number) => {
  const s = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
  return s - Math.floor(s);
};

/** A noise field that resolves into a portrait silhouette: the diffusion idea. */
function DotField() {
  const dots = useMemo(() => {
    const out: {
      x: number;
      y: number;
      r: number;
      o: number;
      c: string;
      d: number;
      live: boolean;
    }[] = [];
    for (let j = 0; j < ROWS; j++) {
      for (let i = 0; i < COLS; i++) {
        const x = 21 + i * 32;
        const y = 29 + j * 32;
        const dx = (x - W / 2) / (W * 0.3);
        const dy = (y - H / 2) / (H * 0.38);
        const d = dx * dx + dy * dy;
        const inside = d < 1;
        out.push({
          x,
          y,
          r: inside ? 5 : 2.5,
          o: inside ? 0.45 + 0.5 * (1 - d) : 0.1 + 0.45 * hash(i, j),
          c: i % 2 ? 'var(--accent)' : 'var(--accent-2)',
          d: hash(j, i) * 4,
          live: !inside,
        });
      }
    }
    return out;
  }, []);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="dotfield" aria-hidden="true">
      {dots.map((p, k) => (
        <circle
          key={k}
          cx={p.x}
          cy={p.y}
          r={p.r}
          fill={p.c}
          className={p.live ? 'dot twinkle' : 'dot'}
          style={{ '--o': p.o, animationDelay: `${p.d}s` } as CSSProperties}
        />
      ))}
    </svg>
  );
}

/** Shows public/profile.jpg when it exists, otherwise the placeholder. */
function PhotoSlot() {
  const [hasPhoto, setHasPhoto] = useState(false);
  return (
    <div
      className="photo"
      role="img"
      aria-label={`Portrait of ${profile.name}`}
    >
      {!hasPhoto && <DotField />}
      <img
        className={hasPhoto ? 'photo-img' : 'photo-img hidden'}
        src={`${import.meta.env.BASE_URL}profile.jpg`}
        alt=""
        onLoad={() => setHasPhoto(true)}
        onError={() => setHasPhoto(false)}
      />
      <span className="chip chip-tl">MS AI · Illinois Tech</span>
      <span className="chip chip-br">{profile.location}</span>
      {!hasPhoto && (
        <span className="chip chip-label">Your photo here · 420×500</span>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-text">
        <p className="pill">
          <span className="live-dot" aria-hidden="true" />
          {profile.status}
        </p>
        <h1>
          {profile.headline[0]}
          <span className="grad">{profile.headline[1]}</span>
        </h1>
        <p className="lead">{profile.intro}</p>
        <div className="cta-row">
          <a className="btn btn-primary" href={resumeUrl} download>
            Download résumé ↓
          </a>
          <a className="btn btn-ghost" href="#projects">
            View projects →
          </a>
        </div>
        <p className="social mono">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </div>
      <PhotoSlot />
    </section>
  );
}
