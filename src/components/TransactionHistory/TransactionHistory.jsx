// import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} style={{ backgroundColor: colorTr(type) }}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function colorTr(type) {
  let bg = 'white';

  if (type === 'invoice') {
    bg = '#cfe2f3';
  } else if (type === 'payment') {
    bg = '#c9e2ad';
  } else if (type === 'withdrawal') {
    bg = '#ffc0cb';
  } else if (type === 'deposit') {
    bg = '#f6e1d3';
  }
  return bg;
}

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
