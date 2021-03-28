import { connect } from 'react-redux';

import { fetchProducts } from 'src/actions/products';
import { fetchCategories } from 'src/actions/categories';
// on importe le composant de présentation
import App from 'src/components/App';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  isLogged: state.auth.isLogged,
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
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
