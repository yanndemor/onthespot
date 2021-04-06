import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
/* import { $ } from 'src/assets/images/products/can-coca.png'; */

/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './cartOverview.scss';

const CartOverview = ({ orderProducts }) => {
  let cart;
  if (orderProducts.length === 0) {
    cart = (
      <div className="productsList-cart-item">
        <div className="item-details">
          <div className="item-name">Votre panier est vide</div>
        </div>
      </div>
    );
  }

  let total = 0;
  orderProducts.forEach((product) => {
    total += product.price * product.quantity;
  });

  return (
    <div className="cartOverview-cart">
      <div className="cartOverview-cart-recap">
        <div className="cartOverview-cart-number">
          Panier <span className="badge badge-light">{orderProducts.length}</span>
        </div>
        <div className="cartOverview-cart-total"><span>total : </span>{total} €</div>
      </div>
      <div className="cartOverview-cart-details">
        {cart}

        {orderProducts.map((item) => (
          <div className="cartOverview-cart-item">
            <div className="item-picture">
              <img src="https://www.onthespot.link/back/public/assets/images/magnum-vanille_th.png" alt="Magnum cocholat" />
            </div>
            <div className="item-details">
              <div className="item-name">{item.name}</div>
              <div className="item-price float-left">{item.price} € <span className="item-quantity text-muted mr-0 float-right">Qtt: {item.quantity}</span></div>
            </div>
          </div>
        ))}

      </div>
      <Link to="/panier" className="btn btn-primary w-100">Voir le panier</Link>
    </div>
  );
};

CartOverview.propTypes = {
  orderProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default CartOverview;