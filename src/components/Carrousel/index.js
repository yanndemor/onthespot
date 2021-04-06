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
      <div className="container text-center my-3">
        <h2 className="font-weight-light">Bootstrap 4 - Multi Item Carousel</h2>
        <div className="row mx-auto my-auto">
          <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
            <div className="carousel-inner w-100" role="listbox">
              <div className="carousel-item active">
                <div className="col-md-4">
                  <div className="card card-body">
                    <img
                      className="img-fluid"
                      src={`https://www.onthespot.link/back/public/${images[5]}`}
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-4">
                  <div className="card card-body">
                    <img
                      className="img-fluid"
                      src={`https://www.onthespot.link/back/public/${images[8]}`}
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-4">
                  <div className="card card-body">
                    <img
                      className="img-fluid"
                      src={`https://www.onthespot.link/back/public/${images[10]}`}
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-4">
                  <div className="card card-body">
                    <img
                      className="img-fluid"
                      src={`https://www.onthespot.link/back/public/${images[14]}`}
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-4">
                  <div className="card card-body">
                    <img
                      className="img-fluid"
                      src={`https://www.onthespot.link/back/public/${images[18]}`}
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-4">
                  <div className="card card-body">
                    <img
                      className="img-fluid"
                      src={`https://www.onthespot.link/back/public/${images[20]}`}
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

// == Export
export default Carrousel;
