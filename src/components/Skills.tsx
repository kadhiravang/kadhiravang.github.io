import { skills } from '../data/profile';

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="section-head">
        <div>
          <p className="eyebrow mono">03 / Skills</p>
          <h2>Research depth, engineering range</h2>
          <p className="sub">
            I can train the model and also ship the product around it.
          </p>
        </div>
      </div>
      <div className="skill-grid">
        {skills.map((g) => (
          <div className="skill-group" key={g.name}>
            <h3>{g.name}</h3>
            <ul>
              {g.items.map((s) => (
                <li className="mono" key={s}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
