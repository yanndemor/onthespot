import React from 'react';
import PropTypes from 'prop-types';
import ButtonAddCart from 'src/containers/ButtonAddCart';
import Cart from 'src/containers/Cart';
import { Link } from 'react-router-dom';
import './cartProduct.scss';

const CartProduct = ({ productItems, addTotalCart }) => {
  /*  console.log('products-items', productItems); */
  // Sum of the cart
  const testSum = (accumulator, currentValue) => accumulator + currentValue;
  const totalCart = productItems.map((product) => product.price * product.quantity);
  if (totalCart.length !== 0) {
    const total = totalCart.reduce(testSum);
    // Save Sum of cart in state
    addTotalCart(total);
  }

  return (
    <main>
      <div className="products">
        {(productItems.length === 0) && <div className="emptycart"> Votre panier est vide <img src="https://cdn.pixabay.com/photo/2017/10/10/11/04/shopping-cart-2836779__480.jpg" alt="image de panier vide" /></div>}
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
                <Link to={`/produit/${item.slug}`}>
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
