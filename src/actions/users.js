export const FETCH_USER = 'FETCH_USER';
export const DELETE_USER = 'DELETE_USER';
export const RETRIEVE_USER = 'RETRIEVE_USER';
export const EDIT_USER = 'EDIT_USER';
export const RESET_REDIRECT = 'RESET_REDIRECT';

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
export const editUser = () => ({
  type: EDIT_USER,
});
export const nullifyRedirect = () => ({
  type: RESET_REDIRECT,
});
