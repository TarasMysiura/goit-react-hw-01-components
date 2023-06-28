// import React from 'react';
import PropTypes from 'prop-types';
// import './TransactionHistory.css';
import { Table, Td, Th, Thead } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <Thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} style={{ backgroundColor: colorTr(type) }}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
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
