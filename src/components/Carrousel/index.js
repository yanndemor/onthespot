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
      <div className="container ">

        <div className="carrousel-line d-none  d-md-flex row">
          <div className="col-4 item ">
            <Carousel>
              <Carousel.Item>
                <img
                  className="image center-block "
                  s
                  src={`https://www.onthespot.link/back/public/${images[1]}`}
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[2]}`}
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[3]}`}
                  alt="Third slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[4]}`}
                  alt="Third slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[5]}`}
                  alt="Third slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[6]}`}
                  alt="Third slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[7]}`}
                  alt="Third slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[8]}`}
                  alt="Third slide"
                />

              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-4 d-xs-none">
            <Carousel>
              <Carousel.Item>
                <img
                  className="image"
                  s
                  src={`https://www.onthespot.link/back/public/${images[9]}`}
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[10]}`}
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[11]}`}
                  alt="Third slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[12]}`}
                  alt="Third slide"
                />

              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-4 d-xs-none">
            <Carousel>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[13]}`}
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[14]}`}
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[15]}`}
                  alt="Third slide"
                />

              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="image"
                  s
                  src={`https://www.onthespot.link/back/public/${images[16]}`}
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[17]}`}
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={`https://www.onthespot.link/back/public/${images[18]}`}
                  alt="Third slide"
                />

              </Carousel.Item>
            </Carousel>

          </div>

        </div>

      </div>

    </div>
  );
};

// == Export
export default Carrousel;
