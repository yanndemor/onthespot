import React from 'react';

import './categories.scss';

const Categories = ({ categoryItems} ) => {
  console.log('category-items', categoryItems);
  return (
    {categoryItems.map((item) => (
    <main key={item.id} className="categories">
      <h1 className="categories-title">Categories
      {item.title}</h1>
      <div className="categories-container"></div>
    </main>
    ))}
  )
};

Categories.propTypes = {
  categoriesItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Categories;
