import React from 'react';

const Order = ({ ...order }, productsList) => (

  <div className="order-detail row">
    <div key={order.id} className="col-8">
      <div className="order-name text-center ">
        <p>Commande {order.id}</p>
      </div>
      <div className="order-description ">
        <p className="w-75 text-center">Détail de la commande</p>
        <div className="mx-2">
          <li>XXX Beignet</li>
          <li>XXX Beignet</li>
          <li>XXX Beignet</li>
        </div>
      </div>
    </div>
    <div className="order-state col-4">
      <div className="order-date ">
        <p>Le {order.deliveryTime}</p>
      </div>
      <div className="order-status ">
        <p>Status : {order.status}y</p>
      </div>
      <div className="order-price">
        <p> Montant </p>
      </div>
    </div>
  </div>

);

export default Order;
