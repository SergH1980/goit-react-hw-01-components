import PropTypes from 'prop-types';
import { setBg } from 'components/Utils/RandomColors';

import {
  StatisticsSection,
  StatisticsTitle,
  StatList,
  StatItem,
  StatName,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <StatisticsTitle>{title}</StatisticsTitle>

      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            style={{
              backgroundColor: `#${setBg()}`,
            }}
          >
            <StatName>{stat.label} </StatName>
            <StatPercentage>{stat.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
