import { SAVE_CATEGORIES } from 'src/actions/categories';

const initialState = {
  /*  id: '',
  name: '',
  description: '',
  picture: '',
  price: '',
  availability: '', */
  categoriesList: [],

  loading: true,
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return {
        ...state,
        categoriesList: action.loadedCategories,
        loading: false,
      };

    default:
      return state;
  }
}

export default categoriesReducer;
