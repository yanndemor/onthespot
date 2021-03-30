import React from 'react';
import PropTypes from 'prop-types';

import './buttonAddCart.scss';

const ButtonAddCart = ({ handleAddCart, name }) => (
  <div className="container mb-1">
    <button
      type="button"
      className="login-form-button"
      onClick={() => handleAddCart(name)}
    >
      Déconnexion
    </button>
  </div>

);

ButtonAddCart.propTypes = {
  handleAddCart: PropTypes.func.isRequired,
};

export default ButtonAddCart;
