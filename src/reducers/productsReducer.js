// import of the action type
import { SAVE_PRODUCTS } from 'src/actions/products';
//initiale state
const initialState = {
  /*  id: '',
  name: '',
  description: '',
  picture: '',
  price: '',
  availability: '', */
  productsList: [],

  loading: true,
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_PRODUCTS:
      // save products in the empty tab productsList in the initial state above
      // loadedproducts defined in the file porducts.action
      // passing the props loading to false as well
      return {
        ...state,
        productsList: action.loadedProducts,
        loading: false,
      };

    default:
      return state;
  }
}

export default productsReducer;
