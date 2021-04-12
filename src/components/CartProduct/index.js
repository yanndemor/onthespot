import React from 'react';
import PropTypes from 'prop-types';
/* import Product from 'src/components/Product'; */
import ButtonAddCart from 'src/containers/ButtonAddCart';
import Cart from 'src/containers/Cart';
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
    <main>
      <div className="products">
        {/* <div className="container"> */}
          {productItems.map((item) => (
            <div key={item.id} className="product-listElements">
              <div className="products-items">
  
                <div className="product-image">
                  <div className="rounded-picture">
                    <img src={`https://onthespot.link/back/public/${item.picture}`} alt="product" />                  
                  </div>
                  <div className="px-0 align-self-start price">
                      <p>{item.price}</p>
                  </div>
                </div>
  
                <div className="product-name ">
                  <Link to={`/product/${item.slug}`}>
                    {item.name}
                  </Link>
                </div>
              </div>
  
              <div className="cart-button-and-total">
                <div className="button-cart">
                  <ButtonAddCart product={item} />
                </div>
                <div className="total">
                  <p>Prix total :</p>
                  <p>{`${item.price * item.quantity} €`} </p>
                </div>
              </div>
            </div>
          ))}
        {/* </div> */}
        
      </div>
      <Cart />
    </main>
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
