import { SAVE_ORDERS } from 'src/actions/orders';

const initialState = {
  /*  id: '',
  name: '',
  description: '',
  picture: '',
  price: '',
  availability: '', */
  ordersList: [],

};

function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ORDERS:
      return {
        ...state,
        ordersList: action.loadedOrders,
        orderProducts: action.loadedorderProducts,
        user: action.user,
      };

    default:
      return state;
  }
}

export default ordersReducer;
