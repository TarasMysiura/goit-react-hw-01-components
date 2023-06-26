/* eslint-disable react/jsx-pascal-case */
import './Statistics.css';
import Statistic_item from './Statistic_item';

const Statistics = data => {
  const title = data.title;

  return (
    <div className="stats-card">
      <section className="statistics">
        {{ title } !== undefined && (<h2 className="title">{title}</h2>)}

        <ul className="stat-list">
          <Statistic_item stats={data.stats} />
        </ul>
      </section>
    </div>
  );
};

export default Statistics;
