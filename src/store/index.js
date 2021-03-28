import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authMiddleware from 'src/middlewares/authMiddleware';
import productsMiddleware from 'src/middlewares/productsMiddleware';
import categoriesMiddleware from 'src/middlewares/categoriesMiddleware';
import reducer from 'src/reducers';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    productsMiddleware,
    categoriesMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancers
  enhancers,
);
export default store;
