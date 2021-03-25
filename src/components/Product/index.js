import React from 'react';
/* import PropTypes from 'prop-types'; */
import ButtonUp from 'src/components/ButtonUp';
import ButtonDown from 'src/components/ButtonDown';
import product from 'src/assets/images/products/can-coca.png';
/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './product.scss';

const Product = () => (
  <div className="container mb-1">
    <div className="container  product-detail ">
      <div className="d-flex align-items-center product-header ">

        <div className="product-image">
          <div className=" rounded-picture">
            <img src={product} alt="product" />
          </div>
          <div className=" px-0 align-self-start price">
            <p className="">prix</p>
          </div>
        </div>

        <div className="col-6 ml-5 text-center product-name ">
          <p className="">Nom du produit</p>
        </div>

      </div>
      <div className="col my-2 py-2 product-description">
        <p className=" text-center  my-2">Détail du produit</p>
        <div className="mx-2">
          <li>quantité: 33cl</li>
          <li>allergéne</li>
          <li>Ingrédients</li>
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

    </div>
  </div>

);

export default Product;
