import { ADD_CART, UPDATE_QUANTITY } from 'src/actions/cart';

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
         [...state.orderProducts, { ...action.name, quantity: 0 }],
        // orderProducts: (...orderProducts,{ quantity: action.newValue }),
      };
    case UPDATE_QUANTITY: {
      return state.orderProducts.map((orderproduct) => {
        if (orderproduct.id === action.id) {
          return {
            ...orderproduct,
            quantity: action.data,
          };
        }

        return orderproduct;
      });
    }
    default:
      return state;
  }
}

export default cartReducer;
