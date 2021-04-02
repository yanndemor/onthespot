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
                id={orderItem.id}
                status={orderItem.status}
                delivey_time={orderItem.delivey_time}
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
      id: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      delivey_time: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Orders;
