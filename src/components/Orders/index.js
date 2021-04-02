import React from 'react';
import PropTypes from 'prop-types';

import Order from './Order';

import './orders.scss';

const Orders = ({ ordersList }) => {
  console.log('orderList', ordersList);
  return (
    <main className="orders">
      <h1 className="title">Commandes</h1>
      <div className="orders-container">
        {ordersList.map((order) => (
          <Order
            {...order}
          />
        ))}
      </div>
    </main>
  );
};

Orders.propTypes = {
  ordersList: PropTypes.arrayOf(
  ).isRequired,
};

export default Orders;
