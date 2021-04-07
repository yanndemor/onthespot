import {
  ADD_CART,
  UPDATE_QUANTITY,
  QUANTITY_PLUS,
  QUANTITY_LESS,
  TIME_SELECT,
  SAVE_DELIVERY_POINTS,
  SPOT_SELECT,
  REMOVE_CART,
  TOTAL_CART,
  SEND_COMMAND,
  ORDER_WAITING,
  ORDER_SUBMITTED,
  RESET_CART_REDIRECT,
} from 'src/actions/cart';

const initialState = {
  orderProducts: [],
  deliveryPointToOrder: '',
  totalCart: 0,
  isWaiting: false,
  redirect: null,
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
      
    // eslint-disable-next-line no-fallthrough
    case TIME_SELECT:
      return {
        ...state,
        deliveryTime: action.time,
      };
    case TOTAL_CART:
      return {
        ...state,
        totalCart: action.total,
      };
    case SPOT_SELECT:
      return {
        ...state,
        deliveryPointToOrder: action.spot,
      };

    case ORDER_WAITING:
      return {
        ...state,
        isWaiting: false,
      };

    case ORDER_SUBMITTED:
      return {
        ...state,
        redirect: action.id,
      };

    case RESET_CART_REDIRECT:
      return {
        ...state,
        redirect: null,
      };

    // eslint-disable-next-line no-duplicate-case
    case SAVE_DELIVERY_POINTS:
      return {
        ...state,
        deliveryPoint: action.data,
      };

    case SEND_COMMAND:
      return {
        ...state,
        isWaiting: true,
      };

    case REMOVE_CART:
      return {
        ...state,
        orderProducts: [],
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
      if (action.qty <= 0 || !Number.isInteger(parseInt(action.qty, 10))) {
        return {
          ...state,
          orderProducts: state.orderProducts.filter((product) => product.id !== action.product.id),
        };
      }

      return {
        ...state,
        orderProducts: state.orderProducts.map((product) => (product.id === action.product.id
          ? { ...product, quantity: parseInt(action.qty, 10) }
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
