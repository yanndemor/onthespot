import { updateQuantityField, editCart } from 'src/actions/cart';

import { connect } from 'react-redux';

// on importe le composant de présentation
import ControlQuantity from 'src/components/ControlQuantity';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  value: state.cart.id.quantity,

});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, name) => {
    // console.log(`newValue '${newValue}' for field '${name}'`);
    dispatch(updateQuantityField(newValue, name));
  },
  changeField2: (newValue, name) => {
    // console.log(`newValue '${newValue}' for field '${name}'`);
    dispatch(editCart(newValue, name));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ControlQuantity);
