/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Order = ({
  id, status, createdAt, orderProducts,
}) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const total = orderProducts.map((productItem) => productItem.product.price * productItem.quantity).reduce(reducer);
  const newDate = new Date(createdAt);
  const dateFr = newDate.toLocaleDateString('fr-FR');
  // console.log(dateFr);
  // console.log('orderProducts:', orderProducts);

  return (
    <div className="order-detail">
      <div className="order-name">
        <p>Commande {id}</p>
      </div>

      <div className="order">
        <div className="order-description">
          <p className="text-center mb-2">Détail de la commande</p>
          <div className="">
            {orderProducts.map((productItem) => (
              <div key={productItem.id} className="product-item">
                <ul className="">
                  <div className="row">
                    <div className="col-7">
                      <p>{productItem.product.name}</p>
                    </div>
                    <p className="quantity col-2">x{productItem.quantity}</p>
                    <p className="price col-3"> {productItem.product.price}€</p>
                  </div>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="order-state">
          <div className="order-date ">
            <p>
              Le {`${dateFr}`}
            </p>
          </div>
          <div className="order-status ">
            <div>
              {
              status === 0 && <div>Status : En attente </div>
              || status === 1 && <div>Status : En préparation</div>
              || status === 2 && <div>Status : En livraison </div>
              || status === 3 && <div>Status : Livrée </div>
            }
            </div>
          </div>
          <div className="order-price">
            <p>
              Total : {`${total}€`}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
/* {`${productItem.product.price * productItem.quantity} €`} */
Order.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
  deliveryTime: PropTypes.string.isRequired,
  orderProducts: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}.isRequired;

export default Order;

// const testSum = (accumulator, currentValue) => accumulator + currentValue;
//   const totalCart = productItems.map((product) => product.price * product.quantity);
//   alert(totalCart.reduce(testSum));
