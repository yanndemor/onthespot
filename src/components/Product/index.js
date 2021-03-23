import React from 'react';
/* import PropTypes from 'prop-types'; */
import ButtonUp from 'src/components/ButtonUp';
import ButtonDown from 'src/components/ButtonDown';
import product from '../../assets/images/pictures-size-small-77x77/can-coca 44x77.png';
/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './product.scss';

const Product = () => (

  <div className="product-element">
    <div className="product-name">
      <h3>canette coco-cola</h3>
    </div>
    <div className="price">
      <p>2€</p>
    </div>
    <div className="rounded-picture">
      <img src={product} alt="product" />
    </div>
    <div className="quantity">
      <input placeholder="quantité" />
    </div>
    <div className="description-product">
      <p>descriptif du produit</p>
    </div>
    <div className="button-plus">
      <ButtonUp />
    </div>
    <div className="button-minus">
      <ButtonDown />
    </div>
    <div className="button-validate">
      <button type="submit">Valider</button>
    </div>

  </div>

);

export default Product;
