const initialState = {
  email: '',
  password: '',
  firstaname: '',
  lastname: '',
  tel_number: '',
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;
