// import './Statistics.css';
import PropTypes from 'prop-types';
import { Card, Label, Li, List, Percentage, StatisticsStyle, Title } from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
  return (
    <Card className="stats-card">
      <StatisticsStyle className="statistics">
        {{ title } !== undefined && <Title className="title">{title}</Title>}

        <List className="stat-list">
          {stats.map(({ id, label, percentage }) => (
            <Li
              key={id}
              className="item"
              style={{
                width: '100%',
                backgroundColor: `${getRandomHexColor()}`,
              }}
            >
              <Label className="label">{label}</Label>
              <Percentage className="percentage">{percentage}%</Percentage>
            </Li>
          ))}
        </List>
      </StatisticsStyle>
    </Card>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Statistics.propTypes = {
//   title: PropTypes.string,
//   id: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
//   label: PropTypes.string.isRequired,
// };