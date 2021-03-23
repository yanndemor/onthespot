import React from 'react';

const Order = () => (
  <article className="order">
    <h2 className="order-title">Commande 1</h2>
    <div className="order-date">Livré le 12/02/2021</div>
    <div className="order-details">
      <p>Produit 1  Prix €</p>
      <p>Produit 2  Prix €</p>
      <p>Produit 3  Prix €</p>
      <p>Total €</p>
    </div>
  </article>
);

export default Order;
