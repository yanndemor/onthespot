import { UPDATE_USER_FIELD, SAVE_USER, LOG_OUT } from 'src/actions/auth';
import { DELETE_USER } from 'src/actions/users';

const initialState = {
  username: '',
  password: '',
  firstname: '',
  lastname: '',
  emailRegister: '',
  passwordRegister: '',
  passwordRegisterCheck: '',
  phoneNumber: '',
  isLogged: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      if (action.name === 'firstname') {
        return {
          ...state,
          firstname: action.newValue,
        };
      }
      if (action.name === 'username') {
        return {
          ...state,
          username: action.newValue,
        };
      }
      if (action.name === 'lastname') {
        return {
          ...state,
          lastname: action.newValue,
        };
      }
      if (action.name === 'emailRegister') {
        return {
          ...state,
          emailRegister: action.newValue,
        };
      }
      if (action.name === 'passwordRegister') {
        return {
          ...state,
          passwordRegister: action.newValue,
        };
      }
      if (action.name === 'passwordRegisterCheck') {
        return {
          ...state,
          passwordRegisterCheck: action.newValue,
        };
      }
      if (action.name === 'phoneNumber') {
        return {
          ...state,
          phoneNumber: action.newValue,
        };
      }
      if (action.name === 'password') {
        return {
          ...state,
          password: action.newValue,
        };
      }
      return {
        ...state,
        // password: action.newValue,
      };

    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
        token: action.token,
        // on en profite pour vider les champs
        username: '',
        password: '',
      };

    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        token: null,
      };
    case DELETE_USER:
      return {
        ...state,
        isLogged: false,
        token: null,
      };
    default:
      return state;
  }
}

export default authReducer;
