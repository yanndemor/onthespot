import { RETRIEVE_USER, DELETE_USER, EDIT_USER, RESET_REDIRECT } from 'src/actions/users';
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
  redirect: null,

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

    case RESET_REDIRECT:
      return {
        ...state,
        redirect: null,
      };

    default:
      return state;
  }
}

export default userReducer;
