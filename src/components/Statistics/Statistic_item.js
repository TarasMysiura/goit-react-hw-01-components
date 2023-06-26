const Statistic_item = ({ stats }) => {

  return stats.map(item => {
    return (
      <li
        key={item.id}
        className="item"
        style={{ width: '100%', backgroundColor: `${getRandomHexColor()}` }}
      >
        <span className="label">{item.label}</span>
        <span className="percentage">{item.percentage}%</span>
      </li>
    );
  });
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default Statistic_item;
