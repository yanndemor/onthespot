import React from 'react';
/* import PropTypes from 'prop-types'; */
import product from '../../assets/images/pictures-size-small-77x77/can-coca 44x77.png';
import ButtonUp from 'src/components/ButtonUp';
import ButtonDown from 'src/components/ButtonDown'
/* import RecipeSmall from 'src/containers/Home/RecipeSmall'; */
import './products.scss';

const Products = () => (
  
    <div className="product-listElements">
      <div className='product-name'>
        <h3>canette coco-cola</h3>
      </div>
      <div className='rounded-picture'>
        <img src={product} alt="picture-product" />
      </div>
      <div className="quantity">
        <input />
      </div>
      <ButtonUp className="button-plus" />
      <ButtonDown className="button-down" />
    </div>

 
);



export default Products;
