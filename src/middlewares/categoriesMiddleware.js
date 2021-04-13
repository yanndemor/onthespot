import axios from 'axios';
import { FETCH_CATEGORIES, saveCategories } from 'src/actions/categories';

// const API_URL = 'http://ec2-3-85-110-30.compute-1.amazonaws.com/apo-OnTheSpot-back/public/api';
const API_URL = 'https://api.onthespot.link/api';

const categoriesMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    // action defined in the file action to get all categories, the action is loaded in the app 
    // component to load all categories when the component app is rendered
    case FETCH_CATEGORIES:
      axios.get(`${API_URL}/categories`)
        .then((response) => {
          // console.log('response: ', response);
          store.dispatch(saveCategories(response.data));
        })
        .catch((error) => {
        /*   console.log('error:', error); */
        });

      next(action);
      break;
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default categoriesMiddleware;
