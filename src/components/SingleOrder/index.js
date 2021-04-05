import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

const SingleOrder = ({ ordersList }) => {
  console.log('ordersList: ----------', ordersList);

  // useParams() retourne un objet qui contient tous les paramètres qu'on a
  // capturés dans l'URL (avec ":") => on décompose pour récupérer les paramètres
  const { id } = useParams();
  console.log(useParams());

  // renvoi la commande (nouveau tableau) qui a l'id indiqué
  const theOrder = ordersList.filter((order) => order.id === id);
  console.log('theOrder:', theOrder);

  return (
    <>
      {theOrder.map((orderItem) => (
        <Link key={orderItem.id} to={`/commande/${id}`}>
          <div key={orderItem.id} className="order-detail">
            <div className="order-name text-center ">
              <p>Commande {orderItem.id}</p>
            </div>
            <div>
              <div className="order-description ">
                <p className="w-75 text-center">Détail de la commande</p>
                <div className="mx-2">
                  <div className="product-item">
                    <li>
                      quantité : {orderItem.orderProducts.quantity}
                      prix :
                    </li>
                  </div>
                </div>
              </div>
              <div className="order-date ">
                <p>
                  Le
                </p>
              </div>
              <div className="order-status ">
                {orderItem.orderProducts.status}
              </div>
            </div>

            <div className="order-state">
              <div className="order-price">
                <p>
                  Montant Total : €
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
/* {`${productItem.product.price * productItem.quantity} €`} */
SingleOrder.propTypes = {
  id: PropTypes.number.isRequired,
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
