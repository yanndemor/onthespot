// === action types
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';

// === action creators
export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});
export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  loadedCategories: categories,
});
