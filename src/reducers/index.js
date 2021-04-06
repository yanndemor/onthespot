import { combineReducers } from 'redux';

// on importe tous les reducers
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import ordersReducer from './ordersReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  categories: categoriesReducer,
  orders: ordersReducer,
  cart: cartReducer,
  Users: userReducer,
  // etc
});

export default rootReducer;
