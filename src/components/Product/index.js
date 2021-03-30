import React from 'react';
import ButtonUp from 'src/components/ButtonUp';
import ButtonDown from 'src/components/ButtonDown';
// import product from 'src/assets/images/products/can-coca.png';
import PropTypes from 'prop-types';

import { useParams, Link } from 'react-router-dom';

/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './product.scss';

const Product = ({ productsList, categoriesList }) => {
  const { slug } = useParams();
  console.log('productsList', productsList);

  const theProduct = productsList.find((product) => product.slug === slug);

  console.log('the product', theProduct);
  return (
    <>
      <div key={theProduct.slug} className="product">

        <div className="container mb-1">
          <div className="container  product-detail ">
            <div className="d-flex align-items-center product-header ">

              <div className="product-image">
                <div className=" rounded-picture">
                  <img src={`https://onthespot.apotheoz.tech/back/public/${theProduct.thumbnail}`} alt="product" />
                </div>
                <div className=" px-0 align-self-start price">
                  <p className="">{theProduct.price}</p>
                </div>
              </div>

              <div className="col-6 ml-5 text-center product-name ">
                <p className="">{theProduct.name}</p>
              </div>

            </div>
            <div className="col my-2 py-2 product-description">
              <p className=" text-center  my-2">Détail du produit</p>
              <div className="mx-2">
                <p>{theProduct.description}</p>
              </div>
            </div>

            <div className="d-flex  my-2 align-items-center justify-content-center text-center">
              <div className="button-minus ">
                <ButtonDown />
              </div>
              <div className="  px-4 quantity ">
                <input placeholder="quantité" />
              </div>
              <div className="button-plus ">
                <ButtonUp />
              </div>
            </div>
            <div>
              <Link to="/products">
                <p className="button-return">Retour Liste de produits</p>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </>
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
