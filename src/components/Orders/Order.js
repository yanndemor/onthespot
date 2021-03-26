import React from 'react';

const Order = () => (
  // <article className="order">
  //   <h2 className="order-title text-center">Commande XXXXXXX du 12/03/2020 à 14H00</h2>
  //   <div className="order-date">Etat le 12/02/2021</div>
  //   <div className="order-details">
  //     <ul>
  //       <li>
  //         <Product />
  //       </li>
  //     </ul>
  //     <div className="order-total">Total €</div>
  //   </div>
  // </article>

  <div className="order-detail row">
    <div className="order-name text-center ">
      <p>Commande XXX</p>
    </div>
    <div className="order-description col-6">
      <p className="w-75 text-center mx-auto">Détail de la commande</p>
      <div className="mx-2">
        <li>XXX Beignet</li>
        <li>XXX Beignet</li>
        <li>XXX Beignet</li>
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
