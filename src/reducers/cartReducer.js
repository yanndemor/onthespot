import { ADD_CART, UPDATE_QUANTITY, QUANTITY_PLUS } from 'src/actions/cart';

const initialState = {
  orderProducts: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      // console.log("state.orderProducts", state.orderProducts);
      // console.log("action.name.id", action.name.id);
      if (!state.orderProducts.includes(action.name.id)) {
        return {
          ...state,
          // action.name: action.newValue,
          // orderProducts: [...state.product, action.newValue],
          // orderProducts: state.orderProducts.map((product) => (product.id === action.name.id ?  { ...product, quantity: 0 } : [...state.orderProducts, { ...action.name, quantity: 0 }])),
          orderProducts:
           [...state.orderProducts, { ...action.name, quantity: 0 }],
        // orderProducts: (...orderProducts,{ quantity: action.newValue }),
        };
      }
      return state;
      // case UPDATE_QUANTITY: {
      //   return state.orderProducts.map((orderproduct) => {
      //     if (orderproduct.id === action.id) {
      //       return {
      //         ...orderproduct,
      //         quantity: action.data,
      //       };
      //     }

    //     return orderproduct;
    //   });
    // }
    case QUANTITY_PLUS: {
      // console.log('state.orderProducts', state.orderProducts);
      // return state.orderProducts.map((orderproduct) => {
      //   if (orderproduct.id === action.id) {
      //     return {
      //       ...orderproduct,
      //       quantity: orderproduct.quantity + 1,
      //     };
      //   }

      //   return state.orderProduct.orderproduct;
      // });
      return {
        ...state,
        orderProducts: state.orderProducts.map((product) => (product.id === action.id
          ? { ...product, quantity: product.quantity + 1 }
          : product)),
      };
    }
    default:
      return state;
  }
}

export default cartReducer;
