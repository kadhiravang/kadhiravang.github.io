import { stats } from '../data/profile';

export default function Stats({ repoCount }: { repoCount: number | null }) {
  const items = [
    ...stats,
    { value: String(repoCount ?? 16), label: 'Public repositories' },
  ];
  return (
    <section className="container stats-wrap" aria-label="At a glance">
      <dl className="stats">
        {items.map((s) => (
          <div className="stat" key={s.label}>
            <dt className="stat-value grad">{s.value}</dt>
            <dd className="stat-label">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
