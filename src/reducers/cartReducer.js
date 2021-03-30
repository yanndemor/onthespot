import { UPDATE_QUANTITY_FIELD, EDIT_CART } from 'src/actions/cart';

const initialState = {
  name: '',
  type: 'number',
  placeholder: '',
  value: '',
  orderProducts: [{
    product: '',
    quantity: '',
  },
  ],
  deliveryPoint: '',
  deliveryTime: '',
  id: ['test'],
  test: '',

};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    // En vrai add-cart
    case UPDATE_QUANTITY_FIELD:
      // const newId = [...id, {
      //   // ...state.product,
      //   product: action.name,
      //   quantity: action.newValue,
      // }];

      // TODO
      // return state.id.map((idi) => {
      //   if (idi.product === action.name) {
      //     return {
      //       ...idi,
      //       quantity: action.newValue,
      //     };
      //   },else{
      //     return {
      //     ...state,
      //     // action.name: action.newValue,
      //     // orderProducts: [...state.product, action.newValue],
      //     id: [...state.id, {
      //       // ...state.product,
      //       product: action.name,
      //       quantity: action.newValue,
      //     }, action.name, action.newValue],
      //     // orderProducts: (...orderProducts,{ quantity: action.newValue }),
      //   };}

      //   return idi;
      // });

      // ! Fonctionnel pour add cart creer 2 actions
      return {
        ...state,
        // action.name: action.newValue,
        // orderProducts: [...state.product, action.newValue],
        id: [...state.id, {
          // ...state.product,
          product: action.name,
          quantity: action.newValue,
        }, action.name, action.newValue],
        // orderProducts: (...orderProducts,{ quantity: action.newValue }),
      };
    case EDIT_CART: {
      return state.id.map((beer) => {
        if (beer.uid === action.uid) {
          return {
            ...beer,
            quantity: action.newValue,
          };
        }

        return beer;
      });
    }
    default:
      return state;
  }
}

export default cartReducer;
