import {
  ADD_CART, UPDATE_QUANTITY, QUANTITY_PLUS, QUANTITY_LESS,
} from 'src/actions/cart';

const initialState = {
  orderProducts: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      // console.log("state.orderProducts", state.orderProducts);
      // console.log("action.product.id", action.product.id);
      if (!state.orderProducts.some((orderProduct) => orderProduct.id === action.product.id)) {
        console.log('ok');
        return {
          ...state,
          orderProducts:
           [...state.orderProducts, { ...action.product, quantity: 1 }],
        };
      }

      return {
        ...state,
        orderProducts: state.orderProducts.map((product) => (product.id === action.product.id
          ? { ...product, quantity: product.quantity + 1 }
          : product)),
      };
    case UPDATE_QUANTITY: {
      // return state.orderProducts.map((orderproduct) => {
      //   if (orderproduct.id === action.id) {
      //     return {
      //       ...orderproduct,
      //       quantity: action.data,
      //     };
      //   }
      //   return orderproduct;
      // });
      if (action.qty <= 0) {
        return {
          ...state,
          orderProducts: state.orderProducts.filter((product) => product.id !== action.product.id),
        };
      }

      return {
        ...state,
        orderProducts: state.orderProducts.map((product) => (product.id === action.product.id
          ? { ...product, quantity: action.qty }
          : product)),
      };
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
      console.log('Suppression d\'un produit dans le panier');
      if (state.orderProducts.find((product) => product.id === action.product.id).quantity <= 1) {
        return {
          ...state,
          orderProducts: state.orderProducts.filter((product) => product.id !== action.product.id),
        };
      }

      return {
        ...state,
        orderProducts: state.orderProducts.map((product) => (product.id === action.product.id
          ? { ...product, quantity: product.quantity - 1 }
          : product)),
      };
    }
    default:
      return state;
  }
}

export default cartReducer;
