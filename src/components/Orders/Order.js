import React from 'react';
import PropTypes from 'prop-types';

const Order = ({
  id, status, deliveryTime, orderProducts,
}) => {
  console.log(deliveryTime);
  return (
    <div className="order-detail row">
      <div className="order-name text-center ">
        <p>Commande {id}</p>
      </div>
      {orderProducts.map((productItem) => (
        <>
          <div key={productItem.id} className="col-8">
            <div className="order-description ">
              <p className="w-75 text-center">Détail de la commande</p>
              <div className="mx-2">
                <li>{productItem.product.name},
                  quantité : {productItem.quantity}
                  prix : {productItem.product.price}
                </li>
              </div>
            </div>
          </div>
          <div className="order-state col-4">
            <div className="order-date ">
              <p>Le {deliveryTime}</p>
            </div>
            <div className="order-status ">
              <p>
                {
            status === 0 && <div>Status : En attente </div>
            || status === 1 && <div>Status : En préparation</div>
            || status === 2 && <div>Status : En livraison </div>
            || status === 3 && <div>Status : Livrée </div>
            }
              </p>
            </div>

            <div className="order-price">
              <p> Montant = {`${productItem.product.price * productItem.quantity} €`}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

Order.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
  deliveryTime: PropTypes.string.isRequired,
  orderProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.number.isRequired,
      deliveTime: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}.isRequired;

export default Order;
