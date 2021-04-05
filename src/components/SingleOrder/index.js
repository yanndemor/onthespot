import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const SingleOrder = ({ ordersList }) => {
  console.log('ordersList: ----------', ordersList);
  // useParams() retourne un objet qui contient tous les paramètres qu'on a
  // capturés dans l'URL (avec ":") => on décompose pour récupérer les paramètres
  const { theId } = useParams();
  // console.log(useParams());

  // renvoi la commande (nouveau tableau) qui a l'id indiqué
  const theOrder = ordersList.find((order) => order.id === parseInt(theId, 10));
  console.log('theOrder:', theOrder);
  // const createdAt = theOrder.createdAt
  // console.log(createdAt);

  return (
    <div className="order-detail">
      <p className="w-75 text-center">Détail de la commande</p>
      <div className="order-name text-center ">
        <p>Commande {theId}</p>
      </div>
      <div className="order-date ">
        <p>
          Le {theOrder.createdAt}
        </p>
      </div>
      <div className="order-status ">
        {theOrder.status}
      </div>
      {theOrder.orderProducts.map((theProduct) => (
        <div key={theOrder.id}>
          <div className="order-description ">
            <div className="mx-2">
              <div className="product-item">
                <li>
                  {theProduct.product.name}
                  quantité : {theProduct.quantity}
                  prix :{theProduct.product.price}
                </li>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="order-state">
        <div className="order-price">
          <p>
            Montant Total : €
          </p>
        </div>
      </div>
    </div>
  );
};
/* {`${productItem.product.price * productItem.quantity} €`} */
SingleOrder.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  deliveryTime: PropTypes.string.isRequired,
  orderProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      product: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}.isRequired;

export default SingleOrder;

// const testSum = (accumulator, currentValue) => accumulator + currentValue;
//   const totalCart = productItems.map((product) => product.price * product.quantity);
//   alert(totalCart.reduce(testSum));
