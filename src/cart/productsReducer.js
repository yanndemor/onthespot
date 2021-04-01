import { SAVE_PRODUCTS } from 'src/actions/products';

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
