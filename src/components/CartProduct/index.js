import React from 'react';
import PropTypes from 'prop-types';
/* import Product from 'src/components/Product'; */
import ButtonAddCart from 'src/containers/ButtonAddCart';

import { Link } from 'react-router-dom';
/* import { $ } from 'src/assets/images/products/can-coca.png'; */
/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './cartProduct.scss';

const CartProduct = ({ productItems, addTotalCart }) => {
  console.log('products-items', productItems);
  const testSum = (accumulator, currentValue) => accumulator + currentValue;
  const totalCart = productItems.map((product) => product.price * product.quantity);
  if (totalCart.length !== 0) {
    const total = totalCart.reduce(testSum);
    addTotalCart(total);
  }
  // alert(total);

  return (
    <div className="products">
      <div className="container">
        {productItems.map((item) => (
          <div key={item.id} className="product-listElements ">
            <div className="products-items">
              <div className="rounded-picture">
                <img src={`https://onthespot.apotheoz.tech/back/public/${item.thumbnail}`} alt="product" />
                <div className="price">
                  <p>{item.price}</p>
                </div>
              </div>
            </div>
            <div className="product-name ">
              <Link to={`/product/${item.slug}`}>
                {item.name}
              </Link>
            </div>
            <ButtonAddCart product={item} />
            <div className="total">
              <p>total prix</p>
              <p>{`${item.price * item.quantity} €`} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
CartProduct.propTypes = {
  productItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  addTotalCart: PropTypes.func.isRequired,
};
export default CartProduct;
