// action types

export const FETCH_USER = 'FETCH_USER';
export const DELETE_USER = 'DELETE_USER';
export const RETRIEVE_USER = 'RETRIEVE_USER';
export const FLASH = 'FLASH';
export const EDIT_USER = 'EDIT_USER';
export const REDIRECT_TO_NULL = 'REDIRECT_TO_NULL';
export const RESET_FLASH = 'RESET_FLASH';

// action creators

export const fetchUser = () => ({
  type: FETCH_USER,

});
export const retrieveUser = (users) => ({
  type: RETRIEVE_USER,
  loadedUsers: users,
});
export const deleteUser = () => ({
  type: DELETE_USER,
});

export const flash = (flashType, message) => ({
  type: FLASH,
  flashType,
  message,
});
export const editUser = () => ({
  type: EDIT_USER,
  
})
export const redirectToNull = () => ({
  type: REDIRECT_TO_NULL,
 
});

export const resetFlash = () => ({
  type: RESET_FLASH,
});
