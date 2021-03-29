import { UPDATE_QUANTITY_FIELD } from 'src/actions/cart';

const initialState = {
  orderProducts: [{
    product: '',
    quantity: '',
  },
  ],
  deliveryPoint: '',
  deliveryTime: '',
  id: '',

};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_QUANTITY_FIELD:
      return {
        ...state,
        // orderProducts: [...state.product, action.newValue],
        id: action.newValue,
        // orderProducts: (...orderProducts,{ quantity: action.newValue }),
      };
    default:
      return state;
  }
}

export default cartReducer;
