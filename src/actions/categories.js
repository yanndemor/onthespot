// action types
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const SHOW_CATEGORIE = 'SHOW_CATEGORIE';

// action creators
export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});
export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  loadedCategories: categories,
});
export const showCategorie = (categorie) => ({
  type: SHOW_CATEGORIE,
  filtredCategorie: categorie,
});
