import React from 'react';
import PropTypes from 'prop-types';

import './buttonAddCart.scss';

const ButtonAddCart = ({ handleAddCart, name }) => (
  <button
    type="button"
    className="login-form-button product-add ml-auto btn btn-success"
    onClick={() => handleAddCart(name)}
  >
    Ajouter au panier
  </button>

);

ButtonAddCart.propTypes = {
  handleAddCart: PropTypes.func.isRequired,
};

export default ButtonAddCart;
