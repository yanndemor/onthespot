import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Order from './Order';

import './orders.scss';

const Orders = ({ ordersList }) => {
  console.log('orderList', ordersList);
  return (
    <main className="orders">
      <h1 className="title">Commandes</h1>
      <div className="orders-container">
        {ordersList.map((order) => (
          <div key={order.id}>
            <Link to={`/commandes/${order.id}`}>
              <Order
                {...order}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

Orders.propTypes = {
  ordersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Orders;
