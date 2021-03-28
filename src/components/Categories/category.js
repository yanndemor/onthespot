import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({
  title, slug, picture, thumbnail,
}) => (

  const categoryItem = categoryDetails.find((singleProduct) => singleProduct.slug === slug);
  <Link to={`/category/${slug}`} className="category">
    <article>
      <h2 className="category-title">{title}</h2>
      <div className="category-picture">{picture}</div>
      <div className="category-thumbnail">{thumbnail}</div>
    </article>
  </Link>
);

Category.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Category;
