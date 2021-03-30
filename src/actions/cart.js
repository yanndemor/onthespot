export const ADD_CART = 'ADD_CART';

export const addCart = (name) => ({
  type: ADD_CART,
  // newValue: newValue
  // shorthand property (ES6)
  name,
});
