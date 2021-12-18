import PropTypes from 'prop-types';
import StatisticsData from './StatisticsItem';
import randBgd from './colors';
import {
  StatsSection,
  StatsTitle,
  StatsList,
  StatsListItem,
} from './Statistics.styles.js';
const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {stats.map(stat => (
          <StatsListItem key={stat.id} bgdClr={randBgd}>
            <StatisticsData label={stat.label} percentage={stat.percentage} />
          </StatsListItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default Statistics;
