import { profile, resumeUrl } from '../data/profile';

export default function Contact() {
  return (
    <>
      <section className="section container" id="contact">
        <div className="contact-card">
          <p className="eyebrow mono">04 / Contact</p>
          <h2>Let’s build something useful.</h2>
          <p className="lead">
            I’m looking for AI / ML engineering roles that mix research-grade
            modeling with real software engineering. Email is the fastest way to
            reach me.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn-ghost" href={resumeUrl} download>
              Download résumé ↓
            </a>
            <a
              className="btn btn-ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="btn btn-ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>
      <footer className="footer container mono">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </span>
        <span>Designed in Figma · Built with React + Vite</span>
      </footer>
    </>
  );
}
