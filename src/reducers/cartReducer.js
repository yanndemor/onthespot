import { ADD_CART, UPDATE_QUANTITY, QUANTITY_PLUS, QUANTITY_LESS } from 'src/actions/cart';

const initialState = {
  orderProducts: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      // console.log("state.orderProducts", state.orderProducts);
      // console.log("action.name.id", action.name.id);
      if (!state.orderProducts.includes(action.name)) {
        return {
          ...state,
          orderProducts:
           [...state.orderProducts, { ...action.name, quantity: 0 }],
        };
      }
      return state;
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
    case QUANTITY_PLUS: {
      return {
        ...state,
        orderProducts: state.orderProducts.map((product) => (product.id === action.id
          ? { ...product, quantity: product.quantity + 1 }
          : product)),
      };
    }
    case QUANTITY_LESS: {
      return {
        ...state,
        orderProducts: state.orderProducts.map((product) => (product.id === action.id
          ? { ...product, quantity: product.quantity - 1 }
          : product)),
      };
    }
    default:
      return state;
  }
}

export default cartReducer;
