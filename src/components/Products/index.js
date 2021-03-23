import React from 'react';
/* import PropTypes from 'prop-types'; */
/* import Product from 'src/components/Product'; */

import ButtonUp from 'src/components/ButtonUp';
import ButtonDown from 'src/components/ButtonDown';

import { Link } from 'react-router-dom';
import product from '../../assets/images/pictures-size-small-77x77/can-coca 44x77.png';
/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './products.scss';

const Products = () => (

  <div className="product-listElements">
    <div className="product-name">
      <Link to="/product/">
        <p>canette coco-cola</p>
      </Link>

    </div>
    <div className="price">
      <p>2€</p>
    </div>
    <div className="rounded-picture">
      <img src={product} alt="product" />
    </div>

    <div className="quantity">
      <input placeholder="quantité" />
    </div>
    <div className="button-plus">
      <ButtonUp />
    </div>
    <div className="button-minus">
      <ButtonDown />
    </div>
  </div>

);

export default Products;
