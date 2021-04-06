// == Import npm
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// == Import
import './carrousel.scss';
/* import './carousel.js'; */
// == Composant
const Carrousel = ({ productsList }) => {
  const products = productsList.filter((product) => product.picture);

  const images = [];
  productsList.forEach((product) => {
    images.push(product.picture);
  });
  console.log('carrousel');
  return (
    <div className="carrousel">
      <Carousel>
        <Carousel.Item >
          <img
            className="image"
            s
            src={`https://www.onthespot.link/back/public/${images[6]}`}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="image"
            src={`https://www.onthespot.link/back/public/${images[15]}`}
            alt="Second slide"
          />
        
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="image"
            src={`https://www.onthespot.link/back/public/${images[10]}`}
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

// == Export
export default Carrousel;

