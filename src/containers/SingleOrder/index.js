import { connect } from 'react-redux';

// on importe le composant de présentation
import SingleOrder from 'src/components/SingleOrder';
// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  ordersList: state.orders.ordersList,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SingleOrder);
