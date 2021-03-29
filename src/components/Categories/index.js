import React from 'react';
import PropTypes from 'prop-types';

import './categories.scss';

const Categories = ({ categoryItems }) => {
  console.log('category-items', categoryItems);
  return (
    <>
      <h1 className="page-name">Les catégories de produits</h1>
      <div className="container">

        {categoryItems.map((item) => (
          <div key={item.id} className="categories p-2">
            <div className="categories-title">
              <h2 className="category-name mb-2">
                {item.title}
              </h2>
            </div>
            <div className="categories-thumbnail">
              <img
                src={`https://onthespot.apotheoz.tech/back/public/${item.thumbnail}`}
                alt="categories-thumbnail"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Categories.propTypes = {
  categoryItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Categories;
