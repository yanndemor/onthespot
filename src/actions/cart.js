export const ADD_CART = 'ADD_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const QUANTITY_UP = 'QUANTITY_UP';

export const addCart = (name) => ({
  type: ADD_CART,
  // newValue: newValue
  // shorthand property (ES6)
  name,
});

export const quantityUp = (name) => ({
  type: QUANTITY_UP,
  name,
});

export const updateQuantity = (id, data) => ({
  type: UPDATE_QUANTITY,
  id,
  data,
});
