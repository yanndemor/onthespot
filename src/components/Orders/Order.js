import React from 'react';

const Order = () => (

  <div className="order-detail row">
    <div className="col-8">
      <div className="order-name text-center ">
        <p>Commande XXX</p>
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
        <p>Le 01/01/2021</p>
      </div>
      <div className="order-status ">
        <p>Status : Delivery</p>
      </div>
      <div className="order-price">
        <p> Montant </p>
      </div>

    </div>

  </div>

);

export default Order;
