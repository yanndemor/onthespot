import React from 'react';
// import tools
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
// import components
import LoadingSpinner from 'src/components/LoadingSpinner';
import ButtonAddCart from 'src/containers/ButtonAddCart';
import CartOverview from 'src/containers/CartOverview';

/* import { $ } from 'src/assets/images/products/can-coca.png'; */

/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './products.scss';

const Products = ({ productsList, loading, orderProducts }) => {
  /*  console.log('the products in products', productsList); */

  // use of the parameter of the url slug defined in the Link of the components category
  // and also in the component page where the route is defined
  const { slug } = useParams();

  // creation of a new tab conatining all the products of the selected
  // category in the component category
  const products = productsList.filter((product) => product.category.slug === slug);

  /*  console.log('the singleproducts in products', products); */
  // todo don't  who did put those code lign here but they are not used in this component
  /*   let cart;
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
  }); */

  return (
    <main>
      {loading && <LoadingSpinner />}
      {!loading && (
      <>
        <div className="productsList">
          {products.map((item) => (

            <div key={item.id} className="productsList-product">
              {/* Link to the page productDetail */}
              <Link to={`/produit/${item.slug}`} className="productsList-product-picture">
                <img src={`https://www.onthespot.link/back/public/${item.picture}`} alt={item.name} />
                <div className="productsList-product-price">{item.price} €</div>
              </Link>
              <div className="productsList-product-name">
                <Link to={`/produit/${item.slug}`}>
                  {item.name}
                </Link>
              </div>
              <ButtonAddCart product={item} />
            </div>

          ))}
        </div>

        <CartOverview />
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
