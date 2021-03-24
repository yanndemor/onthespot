import React from 'react';
/* import PropTypes from 'prop-types'; */
/* import Product from 'src/components/Product'; */

import ButtonUp from 'src/components/ButtonUp';
import ButtonDown from 'src/components/ButtonDown';

import { Link } from 'react-router-dom';
import product from 'src/assets/images/products/can-coca.png';
/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './products.scss';

const Products = ({ test }) => {
  console.log('test', test);
  return (
    <div className="test">
      {test.map((toto) => (

        <div className="product-listElements">
          <div className="product-name">
            <Link to="/product/">
              <p>{toto.name}</p>
            </Link>

          </div>
          <div className="price">
            <p>{toto.price}</p>
          </div>
          <div className="rounded-picture">
            <img src={`src/${toto.picture}`} alt="product" />
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
      ))}
    </div>
  );
};

export default Products;
