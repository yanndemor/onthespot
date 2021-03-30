import { connect } from 'react-redux';

import { addCart } from 'src/actions/cart';

// on importe le composant de présentation
import ButtonAddCart from 'src/components/ButtonAddCart';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleAddCart: (name) => {
    dispatch(addCart(name));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddCart);
