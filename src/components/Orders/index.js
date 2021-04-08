import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import Order from './Order';

import './orders.scss';

const Orders = ({ ordersList }) => {
  // console.log('orderList', ordersList);
  // useParams() retourne un objet qui contient tous les paramètres qu'on a
  // capturés dans l'URL (avec ":") => on décompose pour récupérer les paramètres
  const { theId } = useParams();
  // trouver la commande qui a le l'id indiqué
  const order = ordersList.filter((orderItem) => orderItem.id === theId);
/*   console.log('La commande :', order);
 */
  return (
    <main className="orders">
      <h1 className="title">Commandes</h1>
      <div className="orders-container">
        <>
          {ordersList.map((orderItem) => (
            <Link key={orderItem.id} to={`/commande/${orderItem.id}`}>
              <Order
                {...orderItem}
              />
            </Link>
          ))}
        </>
      </div>
    </main>
  );
};

Orders.propTypes = {
  ordersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.number.isRequired,
      deliveryTime: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Orders;
