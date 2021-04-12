import React from 'react';
// import product from 'src/assets/images/products/can-coca.png';
import PropTypes from 'prop-types';
import ButtonAddCart from 'src/containers/ButtonAddCart';
import { useParams, Link } from 'react-router-dom';
import CartOverview from 'src/containers/CartOverview';

/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './product.scss';

const Product = ({ productsList, categoriesList }) => {
  const { slug } = useParams();
/*   console.log('productsList', productsList); */

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
            <ButtonAddCart product={theProduct} />
            </div>
          </div>
          <div className="div-button">
            <Link to={`/produits/${theProduct.category.slug}`}>
              <button type="button" className="button-return">Retour à la catégorie {`${theProduct.category.title}`}
              </button>
            </Link>
          </div>

        </div>

      </div>

      
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
