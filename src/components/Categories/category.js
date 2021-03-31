import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Products from 'src/containers/Products';

const Category = ({
  /*  title,
  slug,
  picture,
  thumbnail, */
  productsList,
  categoriesList,

}) => (

  {/* <div>
    {productsList.map((singlesProduct) => (
      <Products key={singlesproduct.id} {...productsList} />
    ))};
  </div> */}

);

Category.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Category;
