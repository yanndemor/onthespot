export const UPDATE_QUANTITY_FIELD = 'UPDATE_QUANTITY_FIELD';

export const updateQuantityField = (newValue, name) => ({
  type: UPDATE_QUANTITY_FIELD,
  // newValue: newValue
  // shorthand property (ES6)
  newValue,
  name,
});
