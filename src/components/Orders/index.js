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
            key={order.id}
            id={order.id}
            name={order.name}
            picture={order.picture}
            price={order.price}
            slug={order.slug}
            thumbnail={order.thumbnail}
          />
        ))}
      </div>
    </main>
  );
};

Orders.propTypes = {
  ordersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Orders;
