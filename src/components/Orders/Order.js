import React from 'react';
import PropTypes from 'prop-types';

const Order = ({
  id, status, deliveryTime, productsList,
}) => {
  console.log(deliveryTime);
  return (
    <div className="order-detail row">
      <div key={id} className="col-8">
        <div className="order-name text-center ">
          <p>Commande {id}</p>
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
          <p>Le {deliveryTime}</p>
        </div>
        <div className="order-status ">
          <p>Status : {status}y</p>
        </div>
        <div className="order-price">
          <p> Montant </p>
        </div>
      </div>
    </div>
  );
};

Order.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
  deliveryTime: PropTypes.string.isRequired,
}.isRequired;

export default Order;
