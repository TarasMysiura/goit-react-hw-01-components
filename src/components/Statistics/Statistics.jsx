// import './Statistics.css';
import PropTypes from 'prop-types';
import {
  CardDiv,
  LabelSpan,
  Li,
  ListUl,
  PercentageSpan,
  StatisticsStyleSection,
  TitleH2,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <CardDiv>
      <StatisticsStyleSection>
        {title && <TitleH2>{title}</TitleH2>}

        <ListUl>
          {stats.map(({ id, label, percentage }) => (
            <Li
              key={id}
              className="item"
              style={{
                width: '100%',
                backgroundColor: `${getRandomHexColor()}`,
              }}
            >
              <LabelSpan>{label}</LabelSpan>
              <PercentageSpan>{percentage}%</PercentageSpan>
            </Li>
          ))}
        </ListUl>
      </StatisticsStyleSection>
    </CardDiv>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

