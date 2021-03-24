import React from 'react';

const Order = () => (
  <article className="order">
    <h2 className="order-title text-center">Commande XXXXXXX du 12/03/2020 à 14H00</h2>
    <div className="order-date">Etat le 12/02/2021</div>
    <div className="order-details">
      <p>Produit 1  Prix €</p>
      <p>Produit 2  Prix €</p>
      <p>Produit 3  Prix €</p>
      <div className="order-total">Total €</div>
    </div>
  </article>
);

export default Order;
