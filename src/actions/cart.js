export const ADD_CART = 'ADD_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const QUANTITY_PLUS = 'QUANTITY_PLUS';
export const QUANTITY_LESS = 'QUANTITY_LESS';
export const SEND_COMMAND = 'SEND_COMMAND';

export const addCart = (product) => ({
  type: ADD_CART,
  // newValue: newValue
  // shorthand property (ES6)
  product,
});

export const updateQuantity = (product, qty) => ({
  type: UPDATE_QUANTITY,
  product,
  qty,
});

export const quantityPlus = (id) => ({
  type: QUANTITY_PLUS,
  id,
});

export const quantityLess = (product) => ({
  type: QUANTITY_LESS,
  product,
});

export const sendCommand = () => ({
  type: SEND_COMMAND,
});
