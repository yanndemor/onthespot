import { connect } from 'react-redux';

import { totalCart } from 'src/actions/cart';

// on importe le composant de présentation
import CartProduct from 'src/components/CartProduct';
// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  productItems: state.cart.orderProducts,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  addTotalCart: (total) => {
    dispatch(totalCart(total));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
