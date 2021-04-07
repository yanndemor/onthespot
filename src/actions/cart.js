export const ADD_CART = 'ADD_CART';
export const TOTAL_CART = 'TOTAL_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const TIME_SELECT = 'TIME_SELECT';
export const SPOT_SELECT = 'SPOT_SELECT';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const QUANTITY_PLUS = 'QUANTITY_PLUS';
export const QUANTITY_LESS = 'QUANTITY_LESS';
export const SEND_COMMAND = 'SEND_COMMAND';
export const ORDER_WAITING = 'ORDER_WAITING';
export const FECTH_DELIVERY_POINTS = 'FECTH_DELIVERY_POINTS';
export const SAVE_DELIVERY_POINTS = 'SAVE_DELIVERY_POINTS';
export const ORDER_SUBMITTED = 'ORDER_SUBMITTED';
export const RESET_CART_REDIRECT = 'RESET_CART_REDIRECT';

export const addCart = (product) => ({
  type: ADD_CART,
  // newValue: newValue
  // shorthand property (ES6)
  product,
});

export const notWaiting = () => ({
  type: ORDER_WAITING,
});


export const totalCart = (total) => ({
  type: TOTAL_CART,
  // newValue: newValue
  // shorthand property (ES6)
  total,
});

export const removeCart = () => ({
  type: REMOVE_CART,
});

export const timeSelect = (time) => ({
  type: TIME_SELECT,
  // newValue: newValue
  // shorthand property (ES6)
  time,
});

export const spotSelect = (spot) => ({
  type: SPOT_SELECT,
  // newValue: newValue
  // shorthand property (ES6)
  spot,
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

export const fetchDeliveryPoint = () => ({
  type: FECTH_DELIVERY_POINTS,
});

export const saveDeliveryPoint = (data) => ({
  type: SAVE_DELIVERY_POINTS,
  data,
});

export const orderSubmitted = (id) => ({
  type: ORDER_SUBMITTED,
  id,
});

export const resetCartRedirect = () => ({
  type: RESET_CART_REDIRECT,
});
