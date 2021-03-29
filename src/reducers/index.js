import { combineReducers } from 'redux';

// on importe tous les reducers
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import cartReducer from './cartReducer';
// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  // etc
});

export default rootReducer;
