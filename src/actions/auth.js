export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const REGISTRATION = 'REGISTRATION';
export const CHECK_LOG_IN = 'CHECK_LOG_IN';
export const FORCE_LOG = 'FORCE_LOG';

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

export const checkLogin = () => ({
  type: CHECK_LOG_IN,
});

export const forceLog = () => ({
  type: FORCE_LOG,
});
