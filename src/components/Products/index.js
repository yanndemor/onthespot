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
    <div className="container">
      {productItems.map((item) => (
        <div key={item.id} className="d-flex align-items-center product-listElements ">
          <div className="col pr-0 rounded-picture">
            <img src={product} alt="product" />
          </div>
          <div className="col-1 px-0 price">
            <p>{item.price}</p>
          </div>
          <div className="col-3 fs-6 text product-name ">
            <Link to="/product/">
              {item.name}
            </Link>
          </div>

          <div className="col-2 pl-0 button-plus ">
            <ButtonDown />
          </div>
          <div className="col-2 pl-0 quantity ">
            <input placeholder="quantité" />
          </div>

          <div className="col-2 pl-0 button-minus ">
            <ButtonUp />
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
