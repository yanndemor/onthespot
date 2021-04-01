import axios from 'axios';
import { FETCH_ORDERS, saveOrders } from 'src/actions/orders';

// const API_URL = 'http://ec2-3-85-110-30.compute-1.amazonaws.com/apo-OnTheSpot-back/public/api';
const API_URL = 'https://api.onthespot.link/api';

const ordersMiddleware = (store) => (next) => (action) => {
  console.log('Order, on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_ORDERS: {
      JSON.parse(localStorage.getItem('user'));

      axios.get(`${API_URL}/orders`)
      /*   headers: {
          Authorization: `Bearer ${store.getState().auth.token}`,
        }, */

        .then((response) => {
          console.log('response fetch order: ', response);
          store.dispatch(saveOrders(response.data.token));
        })
        .catch((error) => {
          console.log('error:', error);
        });

      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default ordersMiddleware;
