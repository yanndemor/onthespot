import React from 'react';
import PropTypes from 'prop-types';

const SingleOrder = (id, status, dateFr, orderProducts, productItem, totalCart) => {
  console.log('productItem: ----', productItem);

  return (
    <div className="order-detail row">
      <div className="order-name text-center ">
        <p>Commande</p>
      </div>
      <div className="col-8">
        <div className="order-description ">
          <p className="w-75 text-center">Détail de la commande</p>
          <div className="mx-2">
            <div key={id} className="product-item">
              <li>
                quantité :
                prix :
              </li>
            </div>
          </div>
        </div>
        <div className="order-date ">
          <p>
            Le {`${dateFr}`}
          </p>
        </div>
        <div className="order-status ">
          cdc
        </div>
      </div>

      <div className="order-state col-4">
        <div className="order-price">
          <p>
            Montant Total :{`${totalCart} €`}
          </p>
        </div>
      </div>
    </div>
  );
};
/* {`${productItem.product.price * productItem.quantity} €`} */
SingleOrder.propTypes = {
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

export default SingleOrder;

// const testSum = (accumulator, currentValue) => accumulator + currentValue;
//   const totalCart = productItems.map((product) => product.price * product.quantity);
//   alert(totalCart.reduce(testSum));
