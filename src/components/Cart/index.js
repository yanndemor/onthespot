// == Import npm
import React from 'react';

const Cart = () => (
  <div>
    <div className="row">
      <div className="col-sm-2 cart" />
      <div className="col-sm-3 cart-summary">

        <ul className="list-group">
          <li className="list-group-item text-center">Panier</li>
          <li className="list-group-products">
            <ul className="list-group flex">
              <li className="text-left">Produit1</li>
              <li className="text-right">5.00€</li>
            </ul>
            <ul className="list-group flex">
              <li className="text-left">Produit2</li>
              <li className="text-right">7.00€</li>
            </ul>
          </li>

          <li className="list-group-item ">
            <ul className="total-group flex">
              <li className="m">Total</li>
              <li className="text-center">Total (ht) : 126€</li>
              <li className="text-center">TVA (5%) : 7.05€</li>
              <li className="text-center">Total (ttc) 132</li>
            </ul>
          </li>

          <li className="list-group-item ">
            <ul className="total-group flex">
              <li className="text-center">Point de retrait</li>
              <li className="text-center">Petit Nice</li>
              <li className="text-center">Adresse</li>
            </ul>
          </li>

          <li className="list-group-item ">
            <ul className="total-group flex">
              <li className="text-center">Heure de retrait</li>
              <li className="text-center">31/02/2022 - 16H42</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Cart;
