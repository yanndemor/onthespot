import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
/* import { getProductsByCategory } from 'src/utils'; */
// import LoadingSpinner from 'src/components/LoadingSpinner';
import PropTypes from 'prop-types';

import Products from 'src/containers/Products';

import './categories.scss';

const Categories = ({
  categoriesList,
  productsList,
  loading,
}) => {
  
  console.log('categoriesList', categoriesList);
  console.log('productsList', productsList);
  return (
    <div>
      <h1 className="page-name">Les catégories de produits</h1>
      <div className="container">

        {categoriesList.map((categorie) => (
          <div key={categorie.id}>
            <Link to={`/products/${categorie.slug}`} className="category">
             
              <div className="categories p-2">
                <div className="categories-thumbnail">
                  <img
                    src={`https://onthespot.apotheoz.tech/back/public/${categorie.thumbnail}`}
                    alt="categories-thumbnail"
                  />
                </div>
                <div className="categories-title">
                  <h2 className="category-name ">
                    {categorie.title}
                  </h2>
                </div>
              </div> 
              
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

Categories.propTypes = {
  categoriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  productsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Categories;
