/* eslint-disable import/prefer-default-export */

// on fait un export nommé parce qu'on prévoit d'avoir d'autres fonctions à
// exporter dans ce fichier

// JSDoc, /** : mode d'emploi de la fonction, pour les développeurs
// https://jsdoc.app/

/**
 * Get the products for a category, all products if the category is '/'
 * @param {Array} productsData All the products
 * @param {String} categoryName The category to look for
 * @returns the products for the category
 */
export const getProductsByCategory = (productsData, categoryName) => {
  let result = productsData;
  // récuperer les produits qui correspondent à la catégorie
  result = productsData.filter((product) => product.category === categoryName);

  return result;
};
