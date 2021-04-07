import axios from 'axios';

import { flash, resetFlash, redirect } from 'src/actions/users';
import { fetchOrders } from 'src/actions/orders';
import {
  SEND_COMMAND,
  FECTH_DELIVERY_POINTS,
  saveDeliveryPoint,
  removeCart,
  notWaiting,
  orderSubmitted,
  redirectTo
} from 'src/actions/cart';

const API_URL = 'https://onthespot.apotheoz.tech/back/public/api';

const cartMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware cart: ', action);

  switch (action.type) {
    case SEND_COMMAND: {
      const { orderProducts } = store.getState().cart;
      console.log(orderProducts);
      const orders = orderProducts.map((products) => {
        console.log(products);
        return { product: products.id, quantity: products.quantity };
      });
      console.log(orders);

      axios.post(`${API_URL}/orders`, {
        orderProducts: orders,
        deliveryPoint: store.getState().cart.deliveryPointToOrder,
        deliveryTime: store.getState().cart.deliveryTime,
      }, {
        headers: {
          Authorization: `Bearer ${store.getState().auth.token}`,
        },
      })
        .then((response) => {
          console.log('middleware auth : on dispatch les actions');
          // vider le panier
          // alert('Votre commande est envoyée vous allez recevoir un mail de confirmation');
          store.dispatch(notWaiting());
          store.dispatch(removeCart());
          store.dispatch(fetchOrders());
          store.dispatch(orderSubmitted(response.data.id));
          // window.location = `/commande/${response.data.id}`;
          store.dispatch(resetFlash());
        })
        .catch((error) => {
          console.log('erreur d\'envoi de commande', error.response.status);
          if (error.response.status === 422) {
            store.dispatch(flash('danger', error.response.data.detail));
            store.dispatch(notWaiting());
          }
          if (error.response.status === 401) {
            store.dispatch(redirectTo('/connexion'));
            store.dispatch(notWaiting());
          }
          // alert('Vous n\'etes pas connecté');
        })
        .then(() => {
          // always executed
        });

      next(action);
      break;
    }
    case FECTH_DELIVERY_POINTS: {
      axios.get(`${API_URL}/delivery-points`)
        .then((response) => {
          store.dispatch(saveDeliveryPoint(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default cartMiddleware;
