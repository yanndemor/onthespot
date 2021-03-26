import React from 'react';
import PropTypes from 'prop-types';
/* import Product from 'src/components/Product'; */

import ButtonUp from 'src/components/ButtonUp';
import ButtonDown from 'src/components/ButtonDown';

import { Link } from 'react-router-dom';
/* import { $ } from 'src/assets/images/products/can-coca.png'; */

/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './products.scss';
import Cart from 'src/components/Cart';

const Products = ({ productItems }) => {
  console.log('products-items', productItems);
  return (
    <div className="products">
      <div className="container">
        {productItems.map((item) => (
          <div key={item.id} className="product-listElements ">
            <div className="products-items">
              <div className="rounded-picture">
                <img src={`https://onthespot.apotheoz.tech/back/public/${item.thumbnail}`} alt="product" />
              </div>
              <div className="price">
                <p>{item.price}</p>
              </div>
            </div>

            <div className="text product-name ">
              <Link to={`/product/${item.slug}`}>
                {item.name}
              </Link>
            </div>

            <div className="product-quantity">
              <div className="button-plus ">
                <ButtonDown />
              </div>
              <div className="quantity ">
                <input placeholder="0" />
              </div>
              <div className="button-minus ">
                <ButtonUp />
              </div>
            </div>

          </div>
        ))}
        {/* <div className="">
          <Cart />
        </div> */}
      </div>
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
