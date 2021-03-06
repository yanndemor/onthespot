import { connect } from 'react-redux';

// on importe le composant de présentation
import Products from 'src/components/Products';
// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  productsList: state.products.productsList,
  categoriesList: state.categories.categoriesList,
  orderProducts: state.cart.orderProducts,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Products);
