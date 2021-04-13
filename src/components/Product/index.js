import React from 'react';
// import tools
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
// import components
import ButtonAddCart from 'src/containers/ButtonAddCart';
import CartOverview from 'src/containers/CartOverview';

import './product.scss';

const Product = ({ productsList, categoriesList }) => {
  // use of the parameter of the url slug defined in the Link of the components products
  // and also in the component page where the route is defined
  const { slug } = useParams();
  /*   console.log('productsList', productsList); */

  // code lign to find the components containing only the product in the productList
  // with the slug correspondant
  const theProduct = productsList.find((product) => product.slug === slug);

  /*   console.log('the product', theProduct); */

  return (
    <main>

      <div key={theProduct.slug} className="product">
        <div className="container  product-detail ">
          <div className="d-flex align-items-center product-header ">

            <div className="product-image">
              <div className=" rounded-picture">
                <img src={`https://www.onthespot.link/back/public/${theProduct.picture}`} alt="product" />
              </div>
              <div className=" px-0 align-self-start price">
                <p className="">{theProduct.price}</p>
              </div>
            </div>

            <div className="col-6 ml-5 text-center product-name ">
              <p className="">{theProduct.name}</p>
            </div>

          </div>
          <div className="col my-2 py-4 product-description">
            <p className=" text-center  my-2">Détail du produit</p>
            <div className="mx-2">
              <p>{theProduct.description}</p>
            </div>
          </div>

          <div className="d-flex  my-4 align-items-center justify-content-center text-center">
            <div className="add-cart-button">
              {/* components to add this product to the cart */}
              <ButtonAddCart product={theProduct} />
            </div>
          </div>
          <div className="div-button">
            {/* Link to return to the products page by category */}
            <Link to={`/produits/${theProduct.category.slug}`}>
              <button type="button" className="button-return">Retour à la catégorie {`${theProduct.category.title}`}
              </button>
            </Link>
          </div>

        </div>

      </div>
      {/* adding the cart into the the component */}
      <CartOverview />
    </main>
  );
};

Product.propTypes = {
  productsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Product;
