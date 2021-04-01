import React from 'react';
import PropTypes from 'prop-types';
/* import Product from 'src/components/Product'; */
import { home } from 'react-feather';
import ButtonUp from 'src/components/ButtonUp';
import ButtonDown from 'src/components/ButtonDown';
import LoadingSpinner from 'src/components/LoadingSpinner';
import ButtonAddCart from 'src/containers/ButtonAddCart';

import { Link, useParams } from 'react-router-dom';
/* import { $ } from 'src/assets/images/products/can-coca.png'; */

/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './products.scss';
import Cart from 'src/components/Cart';

const Products = ({ productsList, loading }) => {
  console.log('the products in products', productsList);

  const { slug } = useParams();

  const products = productsList.filter((product) => product.category.slug === slug);

  console.log('the singleproducts in products', products);
  return (
    <div className="products">
      <div className="container-fluid px-0">
        {loading && <LoadingSpinner />}
        {!loading && (
        <>
          {products.map((item) => (
            <>
              <div key={item.id} className="product-listElements ">
                <div className="products-items">
                  <div className="rounded-picture">
                    <img src={`https://www.onthespot.link/back/public/${item.thumbnail}`} alt="product" />
                  </div>
                  <div className="price">
                    <p>{item.price}</p>
                  </div>
                </div>
              </div>

              <div className="text product-name ">
                <Link to={`/produit/${item.slug}`}>
                  {item.name}
                </Link>
              </div>
              <ButtonAddCart name={item} />

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
              <div className="button-home">
                <Link to="/categorie">
                  <input
                    className="favorite styled"
                    type="button"
                    value="Home"
                  />
                </Link>
              </div>
            </>
          ))}
        </>
        )}
        {/* <div className="">
          <Cart />
        </div> */}
      </div>
    </div>
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
};
export default Products;
