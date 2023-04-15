import PropTypes from 'prop-types';
import {
  TableStatisticsItem,
  TableStatisticsValue,
} from './SingleTransaction.styled';

export const SingleTransaction = ({ type, amount, currency }) => {
  return (
    <TableStatisticsItem>
      <TableStatisticsValue>{type}</TableStatisticsValue>
      <TableStatisticsValue>{amount}</TableStatisticsValue>
      <TableStatisticsValue>{currency}</TableStatisticsValue>
    </TableStatisticsItem>
  );
};

SingleTransaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
