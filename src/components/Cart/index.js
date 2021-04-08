/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
// == Import npm
import React from 'react';
// import Product from 'src/components/Product';
import MiniSpinner from 'src/components/MiniSpinner';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './cart.scss';
import getStepTime from 'src/utils/getStepTime';

const Cart = ({
  handleCart,
  handleChangeTime,
  handleChangeSpot,
  deliveryPoint,
  totalCart,
  isWaiting,
  redirect,
  ordersList,
  flashMessage,
  isLogged,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!isWaiting) {
      handleCart();
    }
  };
  const handleChange = (evt) => {
    handleChangeTime(evt.target.value);
  };
  const handleChangePoint = (evt) => {
    handleChangeSpot(evt.target.value);
  };

  if (redirect !== null && ordersList.some((order) => redirect === order.id)) {
    return <Redirect to={`/commande/${redirect}`} />;
  }
  if (redirect !== null && redirect === '/connexion') {
    return <Redirect to="/connexion" />;
  }

  let flash = null;
  if (flashMessage.type !== '') {
    console.log('il y a un flash message');
    flash = (
      <div className={`alert alert-${flashMessage.type}`} role="alert">
        {flashMessage.message}
      </div>
    );
  }

  const stepTime = getStepTime(15, 8, 19);
  console.log('leopopold', stepTime);
  console.log('deliverypoint', deliveryPoint);
  return (
    <div className="cart">
      <h2>Panier</h2>
      {flash}
      <form onSubmit={handleSubmit}>
        <div className="listDelevery">
          <ul className="item-group">
            <li className="">Total</li>
            <li className="text-center">{`Total (ht) : ${(totalCart * 0.95).toFixed(2)} €`}</li>
            <li className="text-center">{`TVA (5%) :  ${(totalCart * 0.05).toFixed(2)} €`}</li>
            <li className="text-center">{`Total (ttc) : ${totalCart} €`}</li>
          </ul>
        </div>
        <div className="listDelevery">
          <label htmlFor="delevery-point ">Choisir un point de retrait:</label>
          <select onChange={handleChangePoint} required>
            <option value="" >--Choisir un point de retrait--</option>
            {deliveryPoint.map((point) => <option key={point.id} value={point.id}>{point.name}</option>)}
          </select>
        </div>

        <div className="listDelevery">
          <label htmlFor="delevery-point ">Choisir une heure de retrait : </label>
          <select onChange={handleChange} required>
            <option value="">--Choisir une heure de retrait--</option>
            {/* <option value="test">test</option> */}
            {stepTime.map((option) => <option key={option.deliveryTime} value={option.deliveryTime}>{option.deliveryTime}</option>)}
          </select>

        </div>
        <div className="buttonContainer">
          {isLogged ? (
            <button type="submit">
              {isWaiting ? <MiniSpinner /> : 'Valider la commande'}
            </button>
          )
            : (
              <Link to="/connexion">
                <button type="button">
                  Valider la commande
                </button>
              </Link>
            )}
        </div>
      </form>
    </div>
  );
};

Cart.propTypes = {
  handleCart: PropTypes.func.isRequired,
  handleChangeTime: PropTypes.func.isRequired,
  handleChangeSpot: PropTypes.func.isRequired,
  totalCart: PropTypes.number.isRequired,
};
export default Cart;
