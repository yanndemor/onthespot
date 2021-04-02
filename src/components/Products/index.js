import React from 'react';
import PropTypes from 'prop-types';
/* import Product from 'src/components/Product'; */
import LoadingSpinner from 'src/components/LoadingSpinner';
import ButtonAddCart from 'src/containers/ButtonAddCart';

import { Link, useParams } from 'react-router-dom';
/* import { $ } from 'src/assets/images/products/can-coca.png'; */

/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './products.scss';

const Products = ({ productsList, loading, orderProducts }) => {
  console.log('the products in products', productsList);

  const { slug } = useParams();

  const products = productsList.filter((product) => product.category.slug === slug);

  console.log('the singleproducts in products', products);

  let cart;
  if (orderProducts.length === 0) {
    cart = (
      <div className="productsList-cart-item">
        <div className="item-details">
          <div className="item-name">Votre panier est vide</div>
        </div>
      </div>
    );
  }

  let total = 0;
  orderProducts.forEach((product) => {
    total += product.price * product.quantity;
  });

  return (
    <main>
      {loading && <LoadingSpinner />}
      {!loading && (
      <>
        <div className="productsList">
          {products.map((item) => (
            <>
              <div key={item.id} className="productsList-product">
                <Link to={`/produit/${item.slug}`} className="productsList-product-picture">
                  <img src={`https://www.onthespot.link/back/public/${item.picture}`} alt={item.name} />
                  <div className="productsList-product-price">{item.price} €</div>
                </Link>
                <div className="productsList-product-name">
                  <Link to={`/produit/${item.slug}`}>
                    {item.name}
                  </Link>
                </div>
                <ButtonAddCart name={item} />
              </div>
            </>
          ))}
        </div>

        <div className="productsList-cart">
          <div className="productsList-cart-recap">
            <div className="productsList-cart-number">
              Panier <span className="badge badge-light">{orderProducts.length}</span>
            </div>
            <div className="productsList-cart-total"><span>total : </span>{total} €</div>
          </div>
          <div className="productsList-cart-details">
            {cart}

            {orderProducts.map((item) => (
              <div className="productsList-cart-item">
                <div className="item-picture">
                  <img src="https://www.onthespot.link/back/public/assets/images/magnum-vanille_th.png" alt="Magnum cocholat" />
                </div>
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price float-left">{item.price} € <span className="item-quantity text-muted mr-0 float-right">Qtt: {item.quantity}</span></div>
                </div>
              </div>
            ))}

          </div>
          <Link to="/panier" className="btn btn-primary w-100">Voir le panier</Link>
        </div>
      </>
      )}
    </main>

  );
};

Products.propTypes = {
  productsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  orderProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Products;
