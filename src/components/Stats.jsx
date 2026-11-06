import { stats } from '../data/content';

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((item) => (
          <div className="stat-card" key={item.label}>
            <div className="stat-number">{item.value}</div>
            <div className="stat-label">{item.label}</div>
            <p className="stat-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}