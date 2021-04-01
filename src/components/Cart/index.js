/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
// == Import npm
import React from 'react';
// import Product from 'src/components/Product';
import PropTypes from 'prop-types';
import './cart.scss';

const Cart = ({
  handleCart,
  handleChangeTime,
  handleChangeSpot,
  deliveryPoint,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleCart();
  };
  const handleChange = (evt) => {
    handleChangeTime(evt.target.value);
  };
  const handleChangePoint = (evt) => {
    handleChangeSpot(evt.target.value);
  };
  console.log('deliverypoint', deliveryPoint);
  return (
    <div className="cart">
      <form onSubmit={handleSubmit}>
        <div className="listDelevery">
          <h2>Panier</h2>
          <ul className="item-group">
            <li className="">Total</li>
            <li className="text-center">Total (ht) : 126€</li>
            <li className="text-center">TVA (5%) : 7.05€</li>
            <li className="text-center">Total (ttc) 132€</li>
          </ul>
        </div>
        <div className="listDelevery">
          <label htmlFor="delevery-point ">Choisir un point de retrait:</label>
          <select onChange={handleChangePoint}>
            <option value="">--Choisir un point de retrait--</option>
            {deliveryPoint.map((point) => <option value={point.id}>{point.name}</option>)}
          </select>
        </div>

        <div className="listDelevery">
          <label>
            Choisir une heure de retrait:
            <select onChange={handleChange}>
              <option value="">--Choisir une heure de retrait--</option>
              <option value="test">test</option>
              <option value="test2">test2</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="login-form-button"
        >
          Valider
        </button>
        <div>
          <input type="datetime-local" value="2012-03-23T23:00" />

        </div>
      </form>
    </div>
  );
};

Cart.propTypes = {
  handleCart: PropTypes.func.isRequired,
  handleChangeTime: PropTypes.func.isRequired,
  handleChangeSpot: PropTypes.func.isRequired,
};
export default Cart;
