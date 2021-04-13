// action types
export const FETCH_ORDERS = 'FETCH_ORDERS';
export const SAVE_ORDERS = 'SAVE_ORDERS';

// action creators
export const fetchOrders = () => ({
  type: FETCH_ORDERS,
});

export const saveOrders = (orders) => ({
  type: SAVE_ORDERS,
  loadedOrders: orders,
});
