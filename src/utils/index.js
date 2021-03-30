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
  // récuperer les produits qui correspondent à la catégorie
  const result = productsData.filter((product) => product.category === categoryName);

  return result;
};

/**
 * Get the recipe having a given slug
 * @param {String} slug The slug to look for
 * @param {Array} productsList The recipes into which searching
 * @return {Object} The recipe which has been found (or undefined)
 */
 export const getRecipeBySlug = (slug, productsList) => {
  const productCat = productsList.find((product) => {
    // on calcule le slug de la recette courante
    const products = slugifyTitle(item.title);

    // on compare le slug de la recette avec celui obtenu dans l'URL
    return currentRecipeSlug === slug;
  });

  return recipe;
};
