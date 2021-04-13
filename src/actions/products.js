// action types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';

// action creators
export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});
export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  loadedProducts: products,
});
