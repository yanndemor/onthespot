import { SAVE_USER, DELETE_USER } from 'src/actions/users';

const initialState = {
  /*  id: '',
  name: '',
  description: '',
  picture: '',
  price: '',
  availability: '', */
  userList: [],

};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
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

    default:
      return state;
  }
}

export default userReducer;
