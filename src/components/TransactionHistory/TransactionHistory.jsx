import PropTypes from 'prop-types';

import {
  TransactionTable,
  TableHeader,
  TableHeaderList,
  TableHeaderItem,
  TableTransactionsData,
  TableStatisticsItem,
  TableStatisticsValue,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHeader>
        <TableHeaderList>
          <TableHeaderItem>Type</TableHeaderItem>
          <TableHeaderItem>Amount</TableHeaderItem>
          <TableHeaderItem>Currency</TableHeaderItem>
        </TableHeaderList>
      </TableHeader>
      <TableTransactionsData>
        {items.map(item => (
          <SingleTransaction
            key={item.id}
            id={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </TableTransactionsData>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const SingleTransaction = ({ id, type, amount, currency }) => {
  return (
    <TableStatisticsItem>
      <TableStatisticsValue>{type}</TableStatisticsValue>
      <TableStatisticsValue>{amount}</TableStatisticsValue>
      <TableStatisticsValue>{currency}</TableStatisticsValue>
    </TableStatisticsItem>
  );
};

SingleTransaction.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
