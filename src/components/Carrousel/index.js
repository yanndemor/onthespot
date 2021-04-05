// == Import npm
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// == Import
import './carrousel.scss';

// == Composant
const Carrousel = ({ productsList }) => {
  console.log('carrousel');
  return (
    <div className="carrousel">
      <Carousel>
        {productsList.map((product) => (
          <Carousel.Item interval={1500}>
            <img
              className="image"
              src={`https://www.onthespot.link/back/public/${product.picture}`}
              alt="First slide"
            />
           
          </Carousel.Item>

        ))}

        {/*      <Carousel.Item interval={500}>
          <img
            className=" w-100"
            src="https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

// == Export
export default Carrousel;
