import { GITHUB_USER } from '../data/projects';
import type { Card, ProjectsData } from '../hooks/useProjects';

function ProjectCard({ card }: { card: Card }) {
  const body = (
    <>
      <div className="card-head">
        <span className="tag mono">{card.tag}</span>
        {card.private ? (
          <span className="badge mono">Private</span>
        ) : (
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
        )}
      </div>
      <h3>{card.title}</h3>
      {card.description && <p className="desc">{card.description}</p>}
      {card.metric && (
        <p className="metric">
          <span className="metric-dot" aria-hidden="true" />
          {card.metric}
        </p>
      )}
      {card.stack && <p className="stack mono">{card.stack}</p>}
    </>
  );

  return card.url ? (
    <a
      className="card card-link"
      href={card.url}
      target="_blank"
      rel="noreferrer"
    >
      {body}
    </a>
  ) : (
    <article className="card">{body}</article>
  );
}

export default function Projects({ data }: { data: ProjectsData }) {
  const total = data.repoCount ?? 16;
  return (
    <section className="section container" id="projects">
      <div className="section-head">
        <div>
          <p className="eyebrow mono">01 / Projects</p>
          <h2>Selected work</h2>
          <p className="sub">
            Built end to end, from paper reproductions to apps people can use.
          </p>
        </div>
        <a
          className="btn btn-ghost btn-sm"
          href={`https://github.com/${GITHUB_USER}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
        >
          All {total} repos on GitHub ↗
        </a>
      </div>

      <div className="grid">
        {data.cards.map((c) => (
          <ProjectCard key={c.title} card={c} />
        ))}
      </div>

      {data.earlier.length > 0 && (
        <p className="earlier">
          <span className="eyebrow mono">Earlier work</span>
          <span className="earlier-list">
            {data.earlier.map((e) => (
              <a key={e.name} href={e.url} target="_blank" rel="noreferrer">
                {e.label}
              </a>
            ))}
          </span>
        </p>
      )}
    </section>
  );
}
