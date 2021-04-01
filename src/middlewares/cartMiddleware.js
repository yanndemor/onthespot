import axios from 'axios';

import { SEND_COMMAND, FECTH_DELIVERY_POINTS, saveDeliveryPoint } from 'src/actions/cart';

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
        deliveryPoint: 154,
        deliveryTime: '2021-03-22T18:10:07+01:00',
      }, {
        headers: {
          Authorization: `Bearer ${store.getState().auth.token}`,
        },
      })
        .then((response) => {
          console.log('middleware auth : on dispatch les actions');
          // TODO vider le panier
        })
        .catch((error) => {
          console.log(error);
          alert('Vous n\'etes pas connecté');
          // TODO Rediriger vers connexion
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
