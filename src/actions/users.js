export const FETCH_USER = 'FETCH_USER';
export const DELETE_USER = 'DELETE_USER';
export const SAVE_USER = 'SAVE_USER';

export const fetchUser = () => ({
  type: FETCH_USER,
 
  
});
export const saveUser = (users) => ({
  type: SAVE_USER,
  loadedUsers: users,
})
export const deleteUser = () => ({
  type: DELETE_USER,
  
});
