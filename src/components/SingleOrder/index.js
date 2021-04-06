import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const SingleOrder = ({ ordersList }) => {
  console.log('ordersList: ----------', ordersList);

  // useParams() retourne un objet qui contient tous les paramètres qu'on a
  // capturés dans l'URL (avec ":") => on décompose pour récupérer les paramètres
  const { id } = useParams();
  console.log(useParams());

  // renvoi la commande qui a l'id indiqué (find retourne nouveau tableau)
  const theOrder = ordersList.find((order) => order.id === parseInt(id, 10));
  // Destructuring de theOrder
  const { orderProducts, createdAt, status } = theOrder;
  console.log('theOrder:', orderProducts, createdAt, status);
  // Calcule du montant total de la commande
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const total = orderProducts.map((productItem) => productItem.product.price * productItem.quantity).reduce(reducer);
  // Conversion de la date en format fr
  const newDate = new Date(createdAt);
  const dateFr = newDate.toLocaleDateString('fr-FR');

  return (
    <div className="order-detail">
     <h2 className="w-75 text-center">Détail de la commande</h2>
      <div className="order-name text-center ">
       
        <p>Commande {id}</p>
      </div>
      <div className="order-date ">
        <p>
          Le {dateFr}
        </p>
      </div>
      <div className="order-status ">
        {
          status === 0 && <div>Status : En attente </div>
          || status === 1 && <div>Status : En préparation</div>
          || status === 2 && <div>Status : En livraison </div>
          || status === 3 && <div>Status : Livrée </div>
        }
      </div>
      {theOrder.orderProducts.map((productOrder) => (
        <>
          <div key={theOrder.id}>
            <div className="order-description ">
              <div className="mx-2">
                <div className="product-item">
                  <li>
                    {productOrder.product.name}
                    quantité : {productOrder.quantity}
                    prix :{productOrder.product.price}
                  </li>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="order-state">
        <div className="order-price">
          <p>
            Montant Total : {`${total}€`}
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
  createdAt: PropTypes.string.isRequired,
  orderProducts: PropTypes.arrayOf(
    PropTypes.shape({
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
