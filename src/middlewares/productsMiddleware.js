import axios from 'axios';
import { FETCH_PRODUCTS, saveProducts } from 'src/actions/products';

// const API_URL = 'http://ec2-3-85-110-30.compute-1.amazonaws.com/apo-OnTheSpot-back/public/api';
const API_URL = 'https://api.onthespot.link/api';

const productsMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    /* aciton fetch defined in the container of App to load all porducts as soon as the 
    component app is called (start of the website) */
    case FETCH_PRODUCTS:
      // request to get all categories from the route defined by the backend
      axios.get(`${API_URL}/products`)
        .then((response) => {
          // console.log('response: ', response);
          // action creator to save products in the store via productsReducer
          store.dispatch(saveProducts(response.data));
        })
        .catch((error) => {
      /*     console.log('error:', error); */
        });

      next(action);
      break;
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default productsMiddleware;
