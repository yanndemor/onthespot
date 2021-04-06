import { RETRIEVE_USER, DELETE_USER, FLASH } from 'src/actions/users';

const initialState = {
  /*  id: '',
  name: '',
  description: '',
  picture: '',
  price: '',
  availability: '', */
  userList: [],
  flashMessage: {
    type: '',
    message: '',
  },

};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_USER:
      return {
        ...state,
        userList: action.loadedUsers,
      };
    case DELETE_USER:
      return {

        ...state,
        token: '',
        isLogged: false,

      };
    case FLASH:
      return {
        ...state,
        flashMessage: { ...state.flashMessage, type: action.flashType, message: action.message },
      };

    default:
      return state;
  }
}

export default userReducer;
