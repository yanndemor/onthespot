export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const REGISTRATION = 'REGISTRATION';

export const updateUserField = (newValue, name) => ({
  type: UPDATE_USER_FIELD,
  // newValue: newValue
  // shorthand property (ES6)
  newValue,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = (isLogged, token, user) => ({
  type: SAVE_USER,
  isLogged,
  token,
  user,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const registration = () => ({
  type: REGISTRATION,
});
