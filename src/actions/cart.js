export const ADD_CART = 'ADD_CART';
export const TIME_SELECT = 'TIME_SELECT';
export const SPOT_SELECT = 'SPOT_SELECT';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const QUANTITY_PLUS = 'QUANTITY_PLUS';
export const QUANTITY_LESS = 'QUANTITY_LESS';
export const SEND_COMMAND = 'SEND_COMMAND';
export const FECTH_DELIVERY_POINTS = 'FECTH_DELIVERY_POINTS';
export const SAVE_DELIVERY_POINTS = 'SAVE_DELIVERY_POINTS';

export const addCart = (name) => ({
  type: ADD_CART,
  // newValue: newValue
  // shorthand property (ES6)
  name,
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

export const updateQuantity = (id, data) => ({
  type: UPDATE_QUANTITY,
  id,
  data,
});

export const quantityPlus = (id) => ({
  type: QUANTITY_PLUS,
  id,
});

export const quantityLess = (id) => ({
  type: QUANTITY_LESS,
  id,
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
