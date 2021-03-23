import React from 'react';

import Order from './Order';

import './orders.scss';

const Orders = () => (
  <main className="orders">
    <h1 className="title">Commandes</h1>
    <div className="orders-container">
      <Order />
      <Order />
      <Order />
    </div>
  </main>
);

export default Orders;
