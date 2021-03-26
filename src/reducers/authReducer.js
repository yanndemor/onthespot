import { UPDATE_USER_FIELD, SAVE_USER, LOG_OUT } from 'src/actions/auth';

const initialState = {
  username: '',
  password: '',
  firstname: '',
  lastname: '',
  tel_number: '',
  isLogged: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      if (action.name === 'username') {
        return {
          ...state,
          username: action.newValue,
        };
      }
      return {
        ...state,
        password: action.newValue,
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

    default:
      return state;
  }
}

export default authReducer;
