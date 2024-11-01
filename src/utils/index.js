/**
 * This function calculates the total price of our new order
 * @param {Array} products carProducts:Array of objects
 * @returns {number} Total price
 */

export const totalPrice = (products) => {
  let suma = 0;
  products.forEach((product) => (suma += product.price));
  return suma;
};
