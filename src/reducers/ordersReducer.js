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
      };

    default:
      return state;
  }
}

export default ordersReducer;
