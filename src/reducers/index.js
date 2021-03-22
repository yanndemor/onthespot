import { combineReducers } from 'redux';

// on importe tous les reducers
import authReducer from './authReducer';


// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  auth: authReducer,
  // nomDuTiroir1: nomReducer1,
  // etc
});

export default rootReducer;
