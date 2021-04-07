import { RETRIEVE_USER, DELETE_USER, EDIT_USER, REDIRECT_TO_NULL, FLASH} from 'src/actions/users';
import { UPDATE_USER_FIELD } from 'src/actions/auth';
import { useState } from 'react';

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
  redirect: null,

};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_USER:
      return {
        ...state,
        userList: action.loadedUsers,
        redirect: null,
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
    case UPDATE_USER_FIELD:
      if (action.name === 'firstname') {
        return {
          ...state,
          userList: { ...state.userList, firstname: action.newValue },
        };
      }
      if (action.name === 'lastname') {
        return {
          ...state,
          userList: { ...state.userList, lastname: action.newValue },
        };
      }
      if (action.name === 'email') {
        return {
          ...state,
          userList: { ...state.userList, email: action.newValue },
        };
      }
      if (action.name === 'telNumber') {
        return {
          ...state,
          userList: { ...state.userList, telNumber: action.newValue },
        };
      }
      return {
        ...state,
        // password: action.newValue,
      };

    case EDIT_USER:
      return {
        ...state,
        redirect: '/compte',
      };
    case REDIRECT_TO_NULL:
      return {
        ...state,
        redirect: null,
      };

    default:
      return state;
  }
}

export default userReducer;
