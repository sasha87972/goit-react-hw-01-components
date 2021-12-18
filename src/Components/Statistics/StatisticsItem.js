import PropTypes from 'prop-types';
import { StatsListText, StatsListTextBig } from './Statistics.styles';

const StatisticsData = ({ label, percentage }) => {
  return (
    <>
      <StatsListText>{label}</StatsListText>
      <StatsListTextBig>{percentage}</StatsListTextBig>
    </>
  );
};

StatisticsData.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsData;
