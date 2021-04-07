/* eslint-disable no-console */
/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import './singleOrder.scss';

const SingleOrder = ({ ordersList }) => {
  console.log('ordersList: ----------', ordersList);

  // useParams() retourne un objet qui contient tous les paramètres qu'on a
  // capturés dans l'URL (avec ":") => on décompose pour récupérer les paramètres
  const { id } = useParams();
  console.log(useParams());

  // renvoi la commande qui a l'id indiqué (find retourne nouveau tableau)
  const theOrder = ordersList.find((order) => order.id === parseInt(id, 10));
  // Destructuring de theOrder
  const {
    orderProducts, createdAt, status, deliveryTime, deliveryPoint,
  } = theOrder;
  console.log('theOrder:', theOrder, orderProducts, createdAt, status, deliveryTime, deliveryPoint);
  // Calcule du montant total de la commande
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const total = orderProducts.map((productItem) => productItem.product.price * productItem.quantity).reduce(reducer);
  // Conversion de la date en format fr
  const newDate = new Date(createdAt);
  const dateFr = newDate.toLocaleDateString('fr-FR');

  return (
    <div className="order-detail">
      <h1 className="title">Détails</h1>
      <h2 className="order-name">Commande {id} du {dateFr} </h2>
      <div className="order-state">
        <div className="content row">
          <div className="status col-3">
            {
            status === 0 && <div>Etat : en attente </div>
            || status === 1 && <div>Etat : en préparation</div>
            || status === 2 && <div>Etat : en livraison </div>
            || status === 3 && <div>Etat : livrée </div>
          }
          </div>
          <div className="delivery-time col-3">
            Horaire retrait : {}
          </div>
          <div className="delivery-point col-3">
            Point de retrait : {deliveryPoint.name}
          </div>
          <div className="amount col-3">
            Toal : {`${total}€`}
          </div>
        </div>
      </div>

      {theOrder.orderProducts.map((productOrder) => (
        <div className="description-container">
          <div key={id} className="products-description">
            <div className="product-details row">
              <div className="product-picture col-3">
                <img src={`https://www.onthespot.link/back/public/${productOrder.product.picture}`} alt="product" />
              </div>
              <div className="product-name col-3">
                {productOrder.product.name}
              </div>
              <div className="product-quantiy col-3">
                x {productOrder.quantity}
              </div>
              <div className="product-price col-3">
                {productOrder.product.price}€
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
/* {`${productItem.product.price * productItem.quantity} €`} */
SingleOrder.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  orderProducts: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}.isRequired;

export default SingleOrder;

// const testSum = (accumulator, currentValue) => accumulator + currentValue;
//   const totalCart = productItems.map((product) => product.price * product.quantity);
//   alert(totalCart.reduce(testSum));
