import { ADD_CART } from 'src/actions/cart';

const initialState = {
  orderProducts: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        // action.name: action.newValue,
        // orderProducts: [...state.product, action.newValue],
        orderProducts:
         [...state.orderProducts, action.name],
        // orderProducts: (...orderProducts,{ quantity: action.newValue }),
      };
    default:
      return state;
  }
}

export default cartReducer;
