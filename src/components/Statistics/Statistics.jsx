import './Statistics.css';

export const Statistics = ({ title, stats }) => {
  return (
    <div className="stats-card">
      <section className="statistics">
        {{ title } !== undefined && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
          {stats.map(({ id, label, percentage, currency }) => (
            <li
              key={id}
              className="item"
              style={{
                width: '100%',
                backgroundColor: `${getRandomHexColor()}`,
              }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}