import { connect } from 'react-redux';
import { sendCommand, timeSelect, spotSelect } from 'src/actions/cart';

// on importe le composant de présentation
import Cart from 'src/components/Cart';
// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  deliveryPoint: state.cart.deliveryPoint,
  totalCart: state.cart.totalCart,
  isWaiting: state.cart.isWaiting,
  redirect: state.cart.redirect,
  ordersList: state.orders.ordersList,
  flashMessage: state.Users.flashMessage,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleCart: () => {
    dispatch(sendCommand());
  },
  handleChangeTime: (time) => {
    dispatch(timeSelect(time));
  },
  handleChangeSpot: (time) => {
    dispatch(spotSelect(time));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
