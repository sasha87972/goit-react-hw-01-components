import PropTypes from 'prop-types';
import { TableCell } from './TransactionHistory.styles';

const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
