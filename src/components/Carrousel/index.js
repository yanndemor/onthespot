// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
// == Import
import './carrousel.scss';
/* import './carousel.js'; */
// == Composant
const Carrousel = ({ productsList }) => {

  const imageBoissons = productsList.filter((product) => product.category.slug === 'boissons');
  const imageSnack = productsList.filter((product) => product.category.slug === 'snack');
  const imageGlaces = productsList.filter((product) => product.category.slug === 'glaces');
 /*  console.log(productsList); */
  return (
    <div className="carrousel">
      <div className="container ">

        <div className="carrousel-line d-none  d-md-flex row">
          <div className="col-4 item ">
            <Carousel>
              {imageBoissons.map((product) => (
                <Carousel.Item key={product.id}>
                  <img
                    className="image center-block "
                    src={`https://www.onthespot.link/back/public/${product.picture}`}
                    alt="First slide"
                  />

                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-4 item ">
            <Carousel>
              {imageSnack.map((product) => (
                <Carousel.Item key={product.id}>
                  <img
                    className="image center-block "
                    src={`https://www.onthespot.link/back/public/${product.picture}`}
                    alt="First slide"
                  />

                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-4 item ">
            <Carousel>
              {imageGlaces.map((product) => (
                <Carousel.Item key={product.id}>
                  <img
                    className="image center-block "
                    src={`https://www.onthespot.link/back/public/${product.picture}`}
                    alt="First slide"
                  />

                </Carousel.Item>
              ))}
            </Carousel>
          </div>

        </div>

      </div>

    </div>
  );
};

Carrousel.propTypes = {
  productsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Carrousel;
