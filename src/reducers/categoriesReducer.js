/* import of the action type */
import { SAVE_CATEGORIES, /* SHOW_CATEGORIE  */} from 'src/actions/categories';

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
    // save categories in the empty tab categoriesList in the initial state above
    // loadedcategories defined in the file categories.action
    // passing the props loading to false as well
    case SAVE_CATEGORIES:
      return {
        ...state,
        categoriesList: action.loadedCategories,
        loading: false,
      };
      //! not needed
      /*  case SHOW_CATEGORIE:
      return {
        ...state.filter.categories,
        categoriesList: action.loadedCategorie,
        loading: false,
      }; */

    default:
      return state;
  }
}

export default categoriesReducer;
