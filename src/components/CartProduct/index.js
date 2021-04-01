import React from 'react';
import PropTypes from 'prop-types';
/* import Product from 'src/components/Product'; */
import ButtonUp from 'src/components/ButtonUp';
import ButtonDown from 'src/components/ButtonDown';
import ButtonPlus from 'src/containers/ButtonPlus';
import ButtonLess from 'src/containers/ButtonLess';
import { Link } from 'react-router-dom';
/* import { $ } from 'src/assets/images/products/can-coca.png'; */
/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './cartProduct.scss';
const CartProduct = ({ productItems }) => {
  console.log('products-items', productItems);
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
            <ButtonLess id={item.id} />
            <div>
              {item.quantity}
            </div>
            <ButtonPlus id={item.id} />
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
};
export default CartProduct;
