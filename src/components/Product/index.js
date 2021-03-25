import React from 'react';
/* import PropTypes from 'prop-types'; */
import ButtonUp from 'src/components/ButtonUp';
import ButtonDown from 'src/components/ButtonDown';
import product from 'src/assets/images/products/can-coca.png';
/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './product.scss';

const Product = () => (
  <div className="container px-2">

    <div className="container  product-detail ">
      <div className="d-flex align-items-center">
        <div className="col-2 rounded-picture">
          <img src={product} alt="product" />
        </div>
        <div className="col-1 px-0 align-self-end price">
          <p className="">prix</p>
        </div>
        <div className="col fs-6-xs product-name ">
          <p className="w-75 p-3">Nom du produit</p>
        </div>
      </div>
      <div className="col my-2 ">
        <p className="w-75 text-center mx-auto my-2">Description du produit</p>
        <div className="mx-2">
          <li>quantité: 33cl</li>
          <li>allergéne</li>
          <li>Ingrédients</li>
        </div>

      </div>
      <div className="row mx-auto my-2 text-center">
        <div className="col-4 button-plus ">
          <ButtonDown />
        </div>
        <div className="col-4 quantity ">
          <input placeholder="quantité" />
        </div>

        <div className="col-4 button-minus ">
          <ButtonUp />
        </div>

      </div>

    </div>

  </div>

);

export default Product;
