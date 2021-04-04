import React from 'react';
import PropTypes from 'prop-types';

import './buttonAddCart.scss';

const ButtonAddCart = ({
  manageAddCart,
  manageRemoveCart,
  manageQtyChange,
  product,
  orderProducts,
}) => {
  // <button
  //   type="button"
  //   className="login-form-button product-add ml-auto btn btn-success"
  //   onClick={() => handleAddCart(name)}
  // >
  //   Ajouter au panier handleRemoveCart
  // </button>

  const handleAddCart = (productObj) => {
    manageAddCart(productObj);
  };

  const handleRemoveCart = (productObj) => {
    manageRemoveCart(productObj);
  };

  const handleChange = (e) => {
    manageQtyChange(product, e.target.value);
  };

  const handleClick = (e) => {
    e.target.setSelectionRange(0, e.target.value.length);
  };

  const productQty = orderProducts.find((productInCart) => productInCart.id === product.id)
    ? orderProducts.find((productInCart) => productInCart.id === product.id).quantity
    : 0;

  const divClass = productQty > 0
    ? 'button button--added'
    : 'button';

  return (
    <div className={divClass}>
      <div className="add" onClick={() => handleAddCart(product)}>Ajouter au panier</div>
      <div className="plus" onClick={() => handleAddCart(product)}>+</div>
      <div className="qtt">
        <input type="text" className="qtt-input" value={productQty} onChange={handleChange} onClick={handleClick} />
      </div>
      <div className="minus" onClick={() => handleRemoveCart(product)}>-</div>
    </div>
  );
};

ButtonAddCart.propTypes = {
  manageAddCart: PropTypes.func.isRequired,
  manageRemoveCart: PropTypes.func.isRequired,
  manageQtyChange: PropTypes.func.isRequired,
  orderProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ButtonAddCart;
