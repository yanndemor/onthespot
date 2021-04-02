import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import Order from './Order';

import './orders.scss';

const Orders = ({ ordersList }) => {
  console.log('orderList', ordersList);

  const { id } = useParams();
  const orders = ordersList.filter((orderItem) => orderItem.id === id);
  console.log('Les commandes', orders);

  return (
    <main className="orders">
      <h1 className="title">Commandes</h1>
      <div className="orders-container">

        <div className="text order-id ">
          {ordersList.map((orderItem) => (
            <Link to={`/commande/${orderItem.id}`}>
              <Order
                key={orderItem.id}
                {...orderItem}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

Orders.propTypes = {
  ordersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.number.isRequired,
      deliveTime: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Orders;
