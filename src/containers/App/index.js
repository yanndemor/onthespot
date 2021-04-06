import { connect } from 'react-redux';

import { fetchProducts } from 'src/actions/products';
import { fetchCategories } from 'src/actions/categories';
import { fetchOrders } from 'src/actions/orders';
import { fetchDeliveryPoint } from 'src/actions/cart';
import { fetchUser } from 'src/actions/users';
// on importe le composant de présentation
import App from 'src/components/App';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  isLogged: state.auth.isLogged,
  loading: state.products.loading,
  user: state.auth.user,
  redirect: state.Users.redirect,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  loadProduct: () => {
    const action = fetchProducts();
    dispatch(action);

    // sans variable intermédiaire :
    // dispatch(fetchRecipes());
  },
  loadCategories: () => {
    const action = fetchCategories();
    dispatch(action);

    // sans variable intermédiaire :
    // dispatch(fetchRecipes());
  },
  loadOrders: () => {
    const action = fetchOrders();
    dispatch(action);

    // sans variable intermédiaire :
    // dispatch(fetchRecipes());
  },
  loadDeliveryPoints: () => {
    const action = fetchDeliveryPoint();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
