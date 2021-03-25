import React from 'react';
import PropTypes from 'prop-types';
/* import Product from 'src/components/Product'; */

import ButtonUp from 'src/components/ButtonUp';
import ButtonDown from 'src/components/ButtonDown';

import { Link } from 'react-router-dom';
import product from 'src/assets/images/products/can-coca.png';
/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './products.scss';

const Products = ({ productItems }) => {
  console.log('test', productItems);
  return (
    <div className="container ">
      {productItems.map((item) => (
        <div key={item.id} className="product-listElements ">
          <div className="test">
            <div className="rounded-picture">
              <img src={product} alt="product" />
            </div>
            <div className="price">
              <p>{item.price}</p>
            </div>
          </div>

          <div className="text product-name ">
            <Link to="/product/{slug}">
              {item.name}
            </Link>
          </div>

          <div className="product-quantity">
            <div className="button-plus ">
              <ButtonDown />
            </div>
            <div className="quantity ">
              <input placeholder="quantité" />
            </div>
            <div className="button-minus ">
              <ButtonUp />
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

Products.propTypes = {
  productItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Products;
