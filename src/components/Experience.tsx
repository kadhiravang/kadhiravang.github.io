import { certifications, timeline } from '../data/profile';

export default function Experience() {
  return (
    <section className="section container" id="experience">
      <div className="section-head">
        <div>
          <p className="eyebrow mono">02 / Experience</p>
          <h2>Where I’ve worked and studied</h2>
          <p className="sub">
            Enterprise AI delivery first, graduate research now.
          </p>
        </div>
      </div>

      <ol className="timeline">
        {timeline.map((e) => (
          <li className="entry" key={`${e.org}-${e.date}`}>
            <p className="entry-date mono">{e.date}</p>
            <div className="entry-body">
              <h3>{e.org}</h3>
              <p className="role grad">{e.role}</p>
              <p className="desc">{e.description}</p>
              {e.stack && <p className="stack mono">{e.stack}</p>}
              {e.callouts?.map((c) => (
                <div className="callout" key={c.headline}>
                  <span className="callout-headline grad">{c.headline}</span>
                  <span className="callout-text">
                    <strong>{c.title}</strong>
                    <span>{c.detail}</span>
                  </span>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <div className="certs">
        <span className="eyebrow mono">Certifications</span>
        <ul>
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
