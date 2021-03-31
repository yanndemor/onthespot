import React from 'react';
import PropTypes from 'prop-types';

import './categories.scss';

const Categories = ({ categoryItems }) => {
  console.log('category-items', categoryItems);
  return (
    <>
      <h1 className="text-center">Les catégories de produits</h1>
      {categoryItems.map((item) => (
        <main key={item.id} className="categories p-2">
          <h2 className="categories-title mb-2">
            {item.title}
          </h2>
          <div className="categories-thumbnail border">
            <img
              width="20%"
              height="20%"
              src={`https://www.onthespot.link/back/public/${item.thumbnail}`}
              alt="categories-thumbnail"
            />
          </div>
        </main>
      ))}
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
