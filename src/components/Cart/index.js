/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
// == Import npm
import React from 'react';
// import Product from 'src/components/Product';
import './cart.scss';

const Cart = () => (
  <div className="cart col- col-sm-4">
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
      <select name="pets" id="delevry-point">
        <option value="">--Choisir un point de retrait--</option>
        <option value="test">test</option>
        <option value="test2">test2</option>
      </select>
    </div>

    <div className="listDelevery">
      <label htmlFor="delevry-time">Choisir une heure de retrait:</label>
      <select name="pets" id="delevry-time">
        <option value="">--Choisir une heure de retrait--</option>
        <option value="test">test</option>
        <option value="test2">test2</option>
      </select>
    </div>

    <div className="text-center">
      <a className="btn btn-success " href="">Valider</a>
    </div>

  </div>
);

export default Cart;
