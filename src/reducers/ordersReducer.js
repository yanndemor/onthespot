import { SAVE_ORDERS } from 'src/actions/orders';

const initialState = {
  /*  id: '',
  name: '',
  description: '',
  picture: '',
  price: '',
  availability: '', */
  ordersList: [],
  
  loading: true,

};

function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ORDERS:
      return {
        ...state,
        ordersList: action.loadedOrders,
        loading: false,
        token: action.token,

      };

    default:
      return state;
  }
}

export default ordersReducer;
