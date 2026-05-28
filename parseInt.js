// parseInt - Convert a string into a number
const faveNumString = '24';
console.log(parseInt(faveNumString)); // 24 - number
console.log(Number(faveNumString)); // 24 - same but cooler

const price = '349.9525';
console.log(parseInt(price)); // 349 - doesn't do decimals >:(
console.log(Number(parseFloat(price).toFixed(2))); // "349.95" -> 349.95
console.log(Number(price)); // 349.9525 - thanks cool way!

const products = [
  { name: 'iPhone', price: 849 },
  { name: 'Macbook', price: 1349.99 },
  { name: 'Apple Watch', price: 590.5012 },
];

const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0,
);

const formatPrice = (price) => Number(parseFloat(price).toFixed(2));

console.log(formatPrice(totalPrice));
